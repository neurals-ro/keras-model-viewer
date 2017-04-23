var dagre = require('dagre');
var SVG = require('svg.js');
require('svg.panzoom.js');

var KerasModelViewer;

(function (root, factory) {

	/* CommonJS */
  if (typeof exports == 'object') module.exports = factory()

  /* AMD module */
  else if (typeof define == 'function' && define.amd) define(factory)

  /* Global */
  else root.KerasModelViewer = factory()

}(this, function () {

  KerasModelViewer = function(json, el, options) {
    if(!json) {
        console.log('KerasModelViewer: No Model provided.');
    }

    this.json = json;

    this._options = {
      rankdir: "LR", // "LR"  "UD"
      nodesep: 20,
      edgesep: 20,
      ranksep: 40,
      marginx: 0,
      marginy: 0,
      dims: {
        w:300,
        h:100
      },
      keras_ver: 1 // only option now;
		};

		// Overwrites options
		if (options) {
			for (var i in options) {
				this._options[i] = options[i];
			}
		}

		if (typeof el == "string") {
			this._el = document.getElementById(el);
		}
    this.layer_ndx = "model";
    this.graph = { layer: [] };
    this.merge_layers_ndx = [];

    if(this._options.keras_ver == 1) {
      var KerasModelDef = require('./defs/keras_def_v1.js');
    }
    else {
      console.log('Only Keras v.1 models are supported');
      return;
    }
    this.keras_args = KerasModelDef.keras_args;
  }

  KerasModelViewer.prototype.flatten_input = function(layer, arr1) {
    var input_arr = [];
    if (!arr1 || arr1 == [] || typeof arr1 != "Array") {
      if (this.layer_ndx == 0) return [];
      return [this.source_layers[this.layer_ndx-1].config.name, layer];
    }
    for (i in arr1){
      var rec = flatten_input(layer, arr1[i])
      if (rec == []) input_arr.push(rec)
    }
    return input_arr;
  }

  KerasModelViewer.prototype.flattenArrayOfArrays = function(a, r) {
    if(!r){ r = []}
    for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            this.flattenArrayOfArrays(a[i], r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
  }

  KerasModelViewer.prototype.add_model = function() {
    let json = this.json;
    var name = json.config.name || json.class_name

    this.dgraf.nodes[name]={
      label: name + "\n" +json.class_name,
      color: this.keras_args[json.class_name].color,
      width: this._options.dims.w,
      height: this._options.dims.h
    }

    if (json.config.input_layers) {
      var links = this.flattenArrayOfArrays(json.config.input_layers)
      for (i in links) {
        if (typeof links[i] == "string") this.dgraf.edges.push([name, links[i]])
      }
    }
    else {
        if(json.config instanceof Array)
          this.dgraf.edges.push([name, json.config[0].config.name])
    }
  }

  KerasModelViewer.prototype.draw_diag = function() {
    let json = this.json;

    this.view.clear();
    this.dgraf = {
      svgd: this.view,
      nodes: {  },
      edges: []

    }

    if (this._options.rankdir == "LR" && this._options.dims.w > this._options.dims.h) this._options.dims={w: this._options.dims.h, h: this._options.dims.w}
    if (this._options.rankdir == "UD" && this._options.dims.w < this._options.dims.h) this._options.dims={w: this._options.dims.h, h: this._options.dims.w}

    this.add_model()

    this.source_layers = json.config.layers? json.config.layers : json.config
    this.source_layers.model = json

    var ls= this.source_layers,name


    for (i in ls){
      layer = ls[i]
      if(layer.keras_version) return;
      this.layer_ndx = i
      name = layer.config.name ? layer.config.name : layer.name

      this.dgraf.nodes[name]={
        label: name + "\n" +layer.class_name,
        color: this.keras_args[layer.class_name].color,
        width: this._options.dims.w,
        height: this._options.dims.h
      }
      if (layer.class_name == "Merge") {
        this.merge_layers_ndx.push(i)
      }

      if (layer.inbound_nodes && this.layer_ndx != 0) {
        var conns = this.flattenArrayOfArrays(layer.inbound_nodes)
        //console.log(conns)
        for (j in conns){
            //console.log('draw_diag edges', conns[j], name)
          if (conns[j] !== 0) this.dgraf.edges.push([conns[j], name])
        }

      } else {
        if (this.layer_ndx != 0 && this.layer_ndx != "model") {
           //console.log('draw_diag edges2', source_layers[layer_ndx - 1].config.name, name)
          this.dgraf.edges.push([this.source_layers[this.layer_ndx - 1].config.name, name])
        }
      }

    }
    this.layer_ndx = 0
  }

  KerasModelViewer.prototype.showGraph = function() {
    let self = this;
    let t = this.dgraf;

    t.g = new dagre.graphlib.Graph();
    t.g.setGraph({});
    t.g.setDefaultEdgeLabel(function() { return {}; });
    var g = t.g

    t.svgd.clear()
    t.marker = this.add_marker(t.svgd)

    var nodes = t.nodes

    var edges = t.edges

    g.setGraph(this._options)

    for(row of edges) {
      g.setEdge(row[0], row[1])
    }

    for(row in nodes) {
      g.setNode(row, nodes[row])
    }

    dagre.layout(g)
    var det = g.graph()
    t.svgd.size(det.width, det.height)

    g.edges().forEach(function(e) {
        //console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
        self.draw_edge(t.svgd, g.edge(e).points, t.marker)
    })

    var j=0
    for (i in t.nodes) {
      if (j == 0 ) {
        this.graph.layer.model = this.draw_node(t.svgd, t.nodes[i],j)
      } else {
        this.graph.layer[j-1] = this.draw_node(t.svgd, t.nodes[i],j)
      }

      j++
    }

    var d = t.svgd.bbox()
    var div = {w: this._el.clientWidth, h: this._el.clientHeight-5}

    var r = 1
    if (d.w/d.h > div.w/div.h){
      r = div.w/d.w
    } else {
      r = div.h/d.h
    }
    t.svgd.attr({transform: "matrix("+r+",0,0,"+r+",0,0)"})
  }

  KerasModelViewer.prototype.draw_node = function(svgd, node, j) {
    var r = 5
    if (j === 0) { j="model" , r = Math.min(node.width, node.height)/2} else { j-- }
    var group = svgd.group().attr({"data-index":j,"stroke-width": 0.5})
    var rect1 = group.rect(node.width, node.height).cx(node.x).cy(node.y).fill(node.color).attr({"fill-opacity": 0.2, rx:r, ry:r})

    var txt = group.text(node.label).x(node.x).y(node.y-20).font({anchor: 'middle'})

    if (this._options.rankdir == "LR") txt.rotate(-90)

    return group;
  }

  KerasModelViewer.prototype.draw_edge = function(svgd, points, marker) {
    var i, str="M " + points[0].x + ' ' + points[0].y + 'C '
    var len = points.length
    if(len == 2)
      str += points[0].x + ' ' + points[0].y + ' ' + points[1].x + ' ' + points[1].y + ' '
    else if(len == 3)
      str += points[1].x + ' ' + points[1].y + ' ' + points[1].x + ' ' + points[1].y + ' '
    else if(len == 4)
      str += points[1].x + ' ' + points[1].y + ' ' + points[2].x + ' ' + points[2].y + ' '
    else
      str += points[1].x + ' ' + points[1].y + ' ' + points[len-2].x + ' ' + points[len-2].y + ' '

    str += points[len-1].x + ' ' + points[len-1].y

    var edge = svgd.path(str).fill('none').stroke({width: 1}).attr({"stroke-linecap":"round", "stroke-linejoin":"round"})
    edge.marker('end', marker)
    return edge;
  }

  KerasModelViewer.prototype.add_marker = function(svgd) {
    var marker = svgd.marker(-19, 10, function(add) {
      add.path("M-19,0l10,5l-10,5l4,-5l-4,-5z").attr({"stroke-linecap":"round", "stroke-linejoin":"round"})
    })
    return marker
  }

  KerasModelViewer.prototype.show = function() {
    this.draw = SVG(this._el).size('100%', '100%').panZoom();

    this.view = this.draw.group().attr({id:"diagram"});
    this.model();
  }

  KerasModelViewer.prototype.clear = function() {
    this.view.clear();
  }

  KerasModelViewer.prototype.model = function(newjson) {
    if(newjson)
      this.json = newjson;
    this.draw_diag();
    this.showGraph();
  }

  return KerasModelViewer;
}));

exports = module.exports = KerasModelViewer;

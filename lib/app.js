$(function(){
  drawModel($.url().param('url'))
})

function drawModel(mjson){
  draw = SVG('drawing').size('100%', '100%').attr({id:"svg1"})
}
function old() {

var draw = SVG('drawing').size('100%', '100%').attr({id:"svg1"})
var view, source1, layer_ndx = "model", diag_options = {
    "rankdir": "LR", // "LR"  "UD"
    "nodesep": 20,
    "edgesep": 20,
    "ranksep": 20,
    "marginx": 0,
    "marginy": 0
  }
var pos = {x: 200, y:100}, dgraf={}, dims={w:300, h:100}, layer, layer_editing = false, model={}, mlayer, help, Menu9, gui, help_pos = {x: 730, y:30},drag_pos= {}, merge_layers_ndx = []



model.layer=[], helping=false
source1 = keras_ex1

draw_stage()


var flatten_input = function(layer, arr1){
  var input_arr = [];
  //console.log(arr1)
  if (!arr1 || arr1 == [] || typeof arr1 != "Array") {
    if (layer_ndx == 0) return [];
    return [source_layers[layer_ndx-1].config.name, layer];
  }

  for (i in arr1){
    var rec = flatten_input(layer, arr1[i])
    if (rec == []) input_arr.push(rec)

  }



  return input_arr;
}

function flattenArrayOfArrays(a, r){
    if(!r){ r = []}
    for(var i=0; i<a.length; i++){
        if(a[i].constructor == Array){
            flattenArrayOfArrays(a[i], r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
}

function add_model(graph){
  var name = source1.config.name
  //if (!name) name = "Unnamed Model"
  graph.nodes[name]={
    label: name+"\n"+source1.class_name,
    color: keras_args[source1.class_name].color,
    width: dims.w,
    height: dims.h
  }

  if (source1.config.input_layers) {
    var links = flattenArrayOfArrays(source1.config.input_layers)

    for (i in links) {
      if (typeof links[i] == "string") graph.edges.push([name, links[i]])
    }

  }



}



draw_diag()




var hide_dialog = function(){$("#json_source_editor").hide(); }

var save_src =function(){
  $("#json_source_editor").hide();
  var source = JSON.parse($("#json_source_textarea").val())
  if (layer_editing){
    source1.config.layers[layer_ndx]=source;

    layer_editing = false
  } else {
    source1 = source
  }

  $("#json_source_textarea").blur()
  //console.log(source)

  draw_diag()
  showGraph(dgraf)
  }

var toggle_help = function(layeri){

  if (helping) {help.remove(); helping = false; return;}
  helping = true
  help = staticv.group()
  dims = {w: 800, h: 800}
  help.rect(dims.w,dims.h).move(help_pos.x,help_pos.y).attr({rx:20, ry:20, "fill-opacity":.7, fill:"#fff", "stroke-width":1})

  var key = source_layers[layer_ndx].class_name


  flow = help.textflow(key+": "+keras_args[key].help, dims.w - 50,dims.h - 50)
      .font({ family: 'sans-serif',  size: 16, anchor: 'start' })
      .move(help_pos.x+25, help_pos.y +25)
      .fill('#000')
  var inc=0, text=""
  for (i in keras_args[key].args){
    inc++
    //help.text(i+": "+keras_help[i]).move(50,60+25*inc).font({ family:   'Helvetica', size: 15, anchor:'start'})
    text = text + "\n "+i+": "+keras_help[i];
  }

  flow = help.textflow(text, dims.w - 50,dims.h - 50)
      .font({ family: 'sans-serif',  size: 16, anchor: 'start' })
      .move(help_pos.x+25, help_pos.y + 125)
      .fill('#000')

  help.draggable().on('dragstart', function(e){
    drag_pos = {x: e.detail.p.x, y:e.detail.p.y}
  })

  help.draggable().on('dragend', function(e){
    help_pos = {x: help_pos.x + (e.detail.p.x-drag_pos.x), y: help_pos.y + (e.detail.p.y-drag_pos.y)}
  })


}

var update_layer = function(layer_index){
  model.layer[layer_ndx].attr({ "stroke-width":0.5})
  model.layer[layer_index].attr({ "stroke-width":2})

  layer_ndx = layer_index

  if (gui) gui.destroy()
  var classs = source_layers[layer_ndx].class_name

  //console.log(classs)


  Menu9 = function() {
    this.name = source_layers[layer_ndx].config.name
    this.Layer = classs //source_layers[layer_ndx].class_name
    this.trainable = source_layers[layer_ndx].config.trainable ? source_layers[layer_ndx].config.trainable : source_layers[layer_ndx].trainable


    for (i in keras_args[classs].args){
      //gui.add(text, i, keras_args[keras_conf.class_name][i]);
      this[i] = (source_layers[layer_ndx].config[i] || source_layers[layer_ndx].config[i] === null) ? source_layers[layer_ndx].config[i] : keras_args[classs].args[i]
      if ( typeof this[i] === 'object') this[i] = JSON.stringify(this[i])

    }

    this["Edit Source"] = function(){
      show_source(source_layers[layer_ndx]);
      layer_editing=true;
    }

    this["Toggle Help"] = function(){
      toggle_help(layer_ndx)
    }

    // Define render logic ...
  };

  var text = new Menu9();
  gui = new dat.GUI();
  gui.add(text, "name");

  if (layer_ndx != "model") {
    var layerall_ctrl = gui.add(text, 'Layer', keras_conf.class_name );
    layerall_ctrl.onFinishChange(function(value) {
        // Fires when a controller loses focus.
        var old_name = source_layers[layer_ndx].config.name ? source_layers[layer_ndx].config.name : source_layers[layer_ndx].name
        change_name(layer_ndx, old_name, value+"_"+(source_layers.length))
        source_layers[layer_ndx] = {
            "class_name": value,
            name: value+"_"+(source_layers.length),
            "trainable": true,
            "config": keras_args[value].args,
          //  "name": value+"_"+(source_layers.length),
            "inbound_nodes": source_layers[layer_ndx].inbound_nodes? source_layers[layer_ndx].inbound_nodes : []
        }
        source_layers[layer_ndx].config.name = value+"_"+(source_layers.length)

        //console.log(layer_ndx, source_layers, source_layers[layer_ndx])
        //return


        draw_diag()
        showGraph(dgraf)




      });

      if (text.trainable) gui.add(text, "trainable");


  }




  var control

  for (i in keras_args[classs].args){
    if (keras_choices[i]) {
      control = gui.add(text, i, keras_choices[i]);
    } else {
      control = gui.add(text, i)
    }
    control.onFinishChange(function(value) {
      // Fires when a controller loses focus.
      source_layers[layer_ndx].config[i] = value
    });
  }

  gui.add(text, "Edit Source");
  gui.add(text, "Toggle Help");



}


window.onload = function() {
layer_ndx = "model"
update_layer(layer_ndx)

};

function show_source(source){
  $("#json_source_editor").show()
  $("#json_source_textarea").val(JSON.stringify(source, null, ' '))
}

function draw_btn(substrate, path_str){
  var btn = substrate.group();
  btn.circle(42).attr({"fill-opacity":0.1, "stroke-width":2}).move(8,8)
  btn.path(path_str)
  return btn
}

function draw_stage(){
  view = draw.group().attr({id:"diagram", class:"svg-pan-zoom_viewport",transform: "matrix(1,0,0,1,0,0)"})
  view.panZoom();
  staticv = draw.group()
  var source_btn = draw_btn(staticv, "m20.55053,17.80402l-11.206,11.20988l11.2073,11.20859l4.07609,-4.07609l-7.1325,-7.1325l7.13121,-7.13121l-4.07609,-4.07867m16.4014,0l-4.0735,4.07738l7.13121,7.13121l-7.13121,7.13121l4.0735,4.07609l11.20859,-11.20859l-11.20859,-11.2073")
  source_btn.click(function(){
    show_source(source1)
  })

  var dir_btn = draw_btn(staticv, "m14.11023,34.4384l4.17224,5.27878l4.17224,5.27878l4.17243,-5.27863l4.17243,-5.27863l-5.80056,-0.0001l0.00015,-8.55001l-5.08821,-0.00009l-0.00015,8.55001l-5.80056,-0.0001l-0.00001,-0.00001z m20,-5 l5.27878,-4.17224l5.27878,-4.17224l-5.27863,-4.17243l-5.27863,-4.17243l-0.0001,5.80056l-8.55001,-0.00015l-0.00009,5.08821l8.55001,0.00015l-0.0001,5.80056l-0.00001,0.00001z").dmove(60,0)
  dir_btn.click(function(){
    if (diag_options.rankdir == "UD") {
      diag_options.rankdir = "LR"
    } else {
      diag_options.rankdir = "UD"
    }
    draw_diag()
    showGraph(dgraf)
  })
}

function change_name(ndx, old_name, name){
  source_layers.forEach(function(item,i){
    if (item.inbound_nodes) change_name_array(item.inbound_nodes, old_name, name)
  })
}

function change_name_array(arr, old_name, new_name){
  arr.forEach(function(item, i){
    if (item == old_name) { arr[i]=new_name;
    } else {
      if (typeof item == "object") change_name_array(item, old_name, new_name)
    }
  })
}

function draw_diag(){
  view.clear();
  dgraf = {
    svgd: view,
    nodes: {  },
    edges: []

  }


  if (diag_options.rankdir == "LR" && dims.w > dims.h) dims={w: dims.h, h: dims.w}
  if (diag_options.rankdir == "UD" && dims.w < dims.h) dims={w: dims.h, h: dims.w}

  add_model(dgraf)


  source_layers = source1.config.layers? source1.config.layers : source1.config
  source_layers.model = source1


  var ls= source_layers,name


  for (i in ls){
    layer = ls[i]
    layer_ndx = i
    //mlayer = model.layer[i] = view.group()
    name = layer.config.name ? layer.config.name : layer.name
    //mlayer.rect(dims.w,dims.h).cx(pos.x).cy(i*(50+dims.h)+pos.y).attr({rx:5, ry:5, "fill-opacity":0.1})
    //mlayer.text(layer.config.name).cx(pos.x).cy(i*(50+dims.h)+pos.y-20)
    //mlayer.text(layer.class_name).cx(pos.x).cy(i*(50+dims.h)+pos.y-0)
    dgraf.nodes[name]={
      label: layer.config.name+"\n"+layer.class_name,
      color: keras_args[layer.class_name].color,
      width: dims.w,
      height: dims.h
    }
    if (layer.class_name == "Merge") {
      merge_layers_ndx.push(i)
    }

    if (layer.inbound_nodes && layer_ndx != 0) {
      var conns = flattenArrayOfArrays(layer.inbound_nodes)
      //console.log(conns)
      for (j in conns){
        if (conns[j] !== 0) dgraf.edges.push([conns[j], name])
      }

    } else {
      if (layer_ndx != 0 && layer_ndx != "model") {
        dgraf.edges.push([source_layers[layer_ndx - 1].config.name, name])
      }
    }

  }
  layer_ndx = 0


}



showGraph(dgraf)




function showGraph(t) {
  //console.log(t)
  t.g = new dagre.graphlib.Graph();
  t.g.setGraph({});
  t.g.setDefaultEdgeLabel(function() { return {}; });
  var g = t.g

  t.svgd.clear()
  t.marker = add_marker(t.svgd)

  var nodes = t.nodes

  var edges = t.edges

  g.setGraph(diag_options)

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
      draw_edge(t.svgd, g.edge(e).points, t.marker)
  })


  var j=0
  for (i in t.nodes) {
    if (j == 0 ) {
      model.layer.model = draw_node(t.svgd, t.nodes[i],j)
    } else {
      model.layer[j-1] = draw_node(t.svgd, t.nodes[i],j)
    }

    j++
  }

}



function add_marker(svgd) {
  var marker = svgd.marker(-19, 10, function(add) {
    add.path("M-19,0l10,5l-10,5l4,-5l-4,-5z").attr({"stroke-linecap":"round", "stroke-linejoin":"round"})
  })

  return marker
}

function add_layer(ndx){
  var new_layer = {
      "class_name": "Dense",
      "trainable": true,
      "config": {
          "b_constraint": null,
          "bias": true,
          "init": "uniform",
          "output_dim": null,
          "input_dim": null,
          "W_regularizer": null,
          "activity_regularizer": null,
          "W_constraint": null,
          "trainable": true,
          "name": "dense_"+(source_layers.length),
          "b_regularizer": null,
          "activation": "tanh"
      },
      "name": "dense_"+(source_layers.length),
      "inbound_nodes": [
          [
              [
                  source_layers[ndx].config.name,
                  0,
                  0
              ]
          ]
      ]
  }
  source_layers.push(new_layer);
  layer_ndx = ndx;
  draw_diag()
  showGraph(dgraf)


}

function draw_node(svgd, node, j) {
  //console.log(node)
  var r = 5
  if (j === 0) { j="model" , r = Math.min(node.width, node.height)/2} else { j-- }
  var group = svgd.group().attr({"data-index":j,"stroke-width": 0.5})
  var rect1 = group.rect(node.width, node.height).cx(node.x).cy(node.y).fill(node.color).attr({"fill-opacity": 0.2, rx:r, ry:r})

  var txt = group.text(node.label).x(node.x).y(node.y-20).font({anchor: 'middle'})

  if (diag_options.rankdir == "LR") txt.rotate(-90)

  group.click(function() {
      update_layer(this.attr("data-index"))
    })
  var add = group.group().addClass("add")
  add.circle(25).attr({fill:"#fff","stroke-width": 2})
  var arrow = add.path("m5,10.6446 l3.57256,4.51989l3.57256,4.51989l3.57256,-4.51989l3.57256,-4.51989l-4.96673,0l0,-7.32094l-4.35678,0l0,7.32094l-4.96673,0z")
  if (diag_options.rankdir == "LR") arrow.rotate(-90)
  add.cx(node.x + node.width/2).cy(node.y+node.height/2).attr("data-index",j)
  add.click(function() {
      add_layer(this.attr("data-index"))
    })

  return group


/*
    function(add) {
    add.tspan(node.label)
    add.tspan(node.width + ' x ' + node.height).newLine()
  })

  txt.x(node.x).y(node.y-20).font({anchor: 'middle'})
} */
}

function draw_edge(svgd, points, marker){
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

  /*
  for(point in points){
    if(point == 0)
      i = 'M'
    else
      i = 'L'
    str = str + ' ' + i + " "+points[point].x+" "+points[point].y
  }*/
  var edge = svgd.path(str).fill('none').stroke({width: 1}).attr({"stroke-linecap":"round", "stroke-linejoin":"round"})
  edge.marker('end', marker)
}

}

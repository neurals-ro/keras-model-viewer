var view, source1, layer_ndx = "model", diag_options = {
    "rankdir": "LR", // "LR"  "UD"
    "nodesep": 20,
    "edgesep": 20,
    "ranksep": 20,
    "marginx": 0,
    "marginy": 0
  }

var elId, pos = {x: 200, y:100}, dgraf={}, dims={w:300, h:100}, layer, layer_editing = false, model={}, mlayer, help, Menu9, gui, help_pos = {x: 730, y:30},drag_pos= {}, merge_layers_ndx = [], buttons, url, json;

model.layer=[]

$(function(){


  url = $.url().param('url')
  buttons = parseInt($.url().param('btn'));
  if (!url){
    drawModel("drawing", keras_ex1)
    return
  }
  $.getJSON( url, function( data ) {
    json = data;
    drawModel("drawing", data)
  });
})

function drawModel(elementId,mjson){
  console.log(mjson)
  source1 = mjson
  elId = elementId
  draw = SVG(elementId).size('100%', '100%').attr({id:"svg1"});

  draw_stage()
  draw_diag()
  showGraph(dgraf)
}

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

function draw_btn(substrate, path_str){
  var btn = substrate.group();
  btn.circle(42).attr({"fill-opacity":0.1, "stroke-width":2}).move(8,8)
  btn.path(path_str)
  return btn
}

function draw_btns() {
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

  var editor_btn = draw_btn(staticv, "m39.84382,14.96736l-3.58497,-2.25332c-0.90472,-0.56783 -2.09653,-0.29451 -2.66648,0.61021l-1.41322,2.24908l6.85848,4.30747l1.41428,-2.24802c0.56783,-0.90578 0.29663,-2.09865 -0.60809,-2.66542l0,0zm-19.86882,20.03726l6.85848,4.30747l11.17866,-17.79559l-6.86165,-4.30853l-11.17548,17.79665l0,0zm-1.04773,5.4728l-0.15149,4.0458l3.57967,-1.89313l3.32648,-1.75647l-6.61693,-4.1581l-0.13772,3.76189z")
  editor_btn.click(function(){
    let q = url ? ("?url="+url) : "";
    window.open("https://neurals-ro.github.io/keras-model-editor/"+q, "_blank");
  })
}

function draw_stage(){
  view = draw.group().attr({id:"diagram", class:"svg-pan-zoom_viewport",transform: "matrix(1,0,0,1,0,0)"})
  view.panZoom();
  staticv = draw.group()

  if(buttons)
    draw_btns();
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

  var d = t.svgd.bbox()
  var el = $("#"+elId)
  var div = {w:el.width(),h: el.height()}
  console.log(d, div)
  var r = 1
  if (d.w/d.h > div.w/div.h){
    r = div.w/d.w
  } else {
    r = div.h/d.h
  }


  t.svgd.attr({transform: "matrix("+r+",0,0,"+r+",0,0)"})

}


function draw_node(svgd, node, j) {
  //console.log(node)
  var r = 5
  if (j === 0) { j="model" , r = Math.min(node.width, node.height)/2} else { j-- }
  var group = svgd.group().attr({"data-index":j,"stroke-width": 0.5})
  var rect1 = group.rect(node.width, node.height).cx(node.x).cy(node.y).fill(node.color).attr({"fill-opacity": 0.2, rx:r, ry:r})

  var txt = group.text(node.label).x(node.x).y(node.y-20).font({anchor: 'middle'})

  if (diag_options.rankdir == "LR") txt.rotate(-90)



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

function draw_btn(substrate, path_str){
  var btn = substrate.group();
  btn.circle(42).attr({"fill-opacity":0.1, "stroke-width":2}).move(8,8)
  btn.path(path_str)
  return btn
}

function add_marker(svgd) {
  var marker = svgd.marker(-19, 10, function(add) {
    add.path("M-19,0l10,5l-10,5l4,-5l-4,-5z").attr({"stroke-linecap":"round", "stroke-linejoin":"round"})
  })

  return marker
}

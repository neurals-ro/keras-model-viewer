# keras-model-viewer

View a Keras Model Object as a nice diagram with enabled zooming.

See example: https://neurals-ro.github.io/keras-model-viewer/examples/index.html

There is also a Keras model editor tool: https://github.com/neurals-ro/keras-model-editor, with an example at https://neurals-ro.github.io/keras-model-editor/examples/index.html

## How to use

See `examples` folder.

```
npm i keras-model-viewer

```

```
new KerasModelViewer( kerasModelObject, elementId);

new KerasModelViewer( kerasModelObject, document.getElementById(elementId));

new KerasModelViewer( kerasModelObject, document.getElementById(elementId), {
  "rankdir": "LR", // "LR"  "UD"
  "nodesep": 20,
  "edgesep": 20,
  "ranksep": 40,
  "marginx": 0,
  "marginy": 0
});

```


### Example

```
<div id="kerasmodel"></div>
```

```
let model = new KerasModelViewer( kerasModelObject, 'kerasmodel', {
    "rankdir": "LR", // "LR"  "UD"
    "nodesep": 20,
    "edgesep": 20,
    "ranksep": 40,
    "marginx": 0,
    "marginy": 0
  });
model.show();

```

## API

`KerasModelViewer.show()` - renders the SVG diagram
`KerasModelViewer.clear()` - removes the SVG diagram
`KerasModelViewer.model([newJSON])` - re-renders the SVG diagram; if new model provided, it renders the new model


## Known Bugs
- Does not work with all versions of Keras models (does not work with Keras ver. ^2.0.0)

## We would love to know how to improve this
This is in pre-alpha stage but still usable. Let us know what features you would like to see in version 1.

## License
MIT

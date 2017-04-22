# keras-model-viewer

View a Keras Model Object as a nice diagram with enabled zooming.

There is also a Keras model editor tool: (https://neurals-ro.github.io/keras-model-editor/)

## How to use

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

## Known Bugs
- Does not work with all versions of Keras models.

## We would love to know how to improve this
This is in pre-alpha stage but still usable. Let us know what features you would like to see in version 1.

## License
MIT

# keras-models-viewer (https://neurals-ro.github.io/keras-models-viewer/)

Can be used to show a Keras model from an URL:
(https://neurals-ro.github.io/keras-models-viewer/?url=https://raw.githubusercontent.com/transcranial/keras-js/master/demos/data/resnet50/resnet50.json&btn=1)

There is also a Keras model editor tool: (https://neurals-ro.github.io/keras-model-editor/)

## How to use

```
new KerasModelsViewer( kerasModelObject, elementId);

new KerasModelsViewer( kerasModelObject, document.getElementById(elementId));

new KerasModelsViewer( kerasModelObject, document.getElementById(elementId), {
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
let model = new KerasModelsViewer( kerasModelObject, 'kerasmodel', {
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

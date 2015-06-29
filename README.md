# Page Ruler

Measure document, viewport and offset without jQuery.

## Install

First install Page Ruler in your project root.

```  
$ npm install --save page-ruler
```

Then include in your module using require().

```javascript
var ruler = require('page-ruler');
```

## Use

The following methods are available:

```javascript
ruler.document(); // Returns { width, height } object
ruler.documentWidth();
ruler.documentHeight();

ruler.viewport(); // Returns { width, height } object
ruler.viewportWidth();
ruler.viewportHeight();

ruler.offset(); // Returns { top, left } object
ruler.offsetTop();
ruler.offsetLeft();
```

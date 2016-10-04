# NotifyCss

Notify CSS animation/transition events

[![Travis build status](https://travis-ci.org/iondrimba/notifycss.svg?branch=master)](https://travis-ci.org/iondrimba/notifycss) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master?svg=true)](https://ci.appveyor.com/project/iondrimba/notifycss/branch/master) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/notifycss/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/notifycss?branch=master)

#### GOAL:
Provide a simple way of adding/removing event listeners for CSS animation/transition.
### [Live demo]
#

#### Build Requires:

* NodeJs
* Gulp

## Installation

```sh
 $ npm install notifycss --save-dev
```

## Gulp Tasks
```js
gulp default (runs on local server)

gulp deploy (deploys ES6 version)

gulp transpiled (deploys transpiled version)
```

## Testing:
```
npm test
```

## Package contains two files:
```js
dist/notifycss.js (ES6)
dist/notifycss-transpiled.js (ES5/transpiled)
```

## Ways to import

```html
//ES6
import notifyCss from './notifycss';

//CommonJS
var notifyCss = require('notifycss-transpiled.js');

//inline script
<script src="notifycss-transpiled.js"></script>
```

## CSS Demo
```
button {
	opacity:0;
	transition: opacity .3s;
}

h1 {
	animation:animationShow .5s 1 forwards cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes animationShow {
	0% {
	    opacity: 0;
	}
	100% {
	    opacity: 1;
	}
}

```

## Usage ES6
```js
import NotifyCss from './notifycss';

//setup
let notifyCss = new NotifyCss();

//DOM element
let elm = document.getElementsByClassName('any-selector')[0];

//add transition listener to an DOM element
notifyCss.transitionEnd(elm, () => {
	console.log('transition complete');
});

//add animation listener to any animation on the element
notifyCss.animationEnd(elm, (e) => {
    console.log('animation complete');
});

//add animation listener to a specific animation by name
notifyCss.animationEnd(elm, (e) => {
    console.log('animation complete');
}, 'animationName');

//remove transition listener from the element
notifyCss.removeTransitionListener(elm);

//remove animation listener from the element
notifyCss.removeAnimationListener(elm);

```

## Usage (Transpiled)
```js 
//setup
var notifyCss = new NotifyCss();

//DOM element
var elm = document.getElementsByClassName('any-selector')[0];

//add transition listener to an DOM element
notifyCss.transitionEnd(elm, function() {
	console.log('transition complete');
});

//add animation listener to any animation on the element
notifyCss.animationEnd(elm, function() {
    console.log('animation complete');
});

//add animation listener to a specific animation by name
notifyCss.animationEnd(elm, function() {
    console.log('animation complete');
}, 'animationName');

//remove transition listener from the element
notifyCss.removeTransitionListener(elm);

//remove animation listener from the element
notifyCss.removeAnimationListener(elm);

```


[Live demo]:<http://iondrimba.github.io/notifycss/>

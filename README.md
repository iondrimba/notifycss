# NotifyMe

Notify CSS animation/transition events

[![Travis build status](https://travis-ci.org/iondrimba/notify-me.svg?branch=master)](https://travis-ci.org/iondrimba/notify-me) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master?svg=true)](https://ci.appveyor.com/project/iondrimba/notify-me/branch/master) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/notify-me/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/notify-me?branch=master)

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
dist/notify-me.js (ES6)
dist/notify-me-transpiled.js (ES5/transpiled)
```

## Ways to import

```html
//ES6
import NotifyMe from './notify-me';

//CommonJS
var NotifyMe = require('notify-me-transpiled.js');

//inline script
<script src="notify-me-transpiled.js"></script>
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
import NotifyMe from './notify-me';

//setup
let notifyMe = new NotifyMe();

//DOM element
let elm = document.getElementsByClassName('any-selector')[0];

//add transition listener to an DOM element
notifyMe.transitionEnd(elm, () => {
	console.log('transition complete');
});

//add animation listener to any animation on the element
notifyMe.animationEnd(elm, (e) => {
    console.log('animation complete');
});

//add animation listener to a specific animation by name
notifyMe.animationEnd(elm, (e) => {
    console.log('animation complete');
}, 'animationName');

//remove transition listener from the element
notifyMe.removeTransitionListener(elm);

//remove animation listener from the element
notifyMe.removeAnimationListener(elm);

```

## Usage (Transpiled)
```js
//setup
var notifyMe = new NotifyMe();

//DOM element
var elm = document.getElementsByClassName('any-selector')[0];

//add transition listener to an DOM element
notifyMe.transitionEnd(elm, function() {
	console.log('transition complete');
});

//add animation listener to any animation on the element
notifyMe.animationEnd(elm, function() {
    console.log('animation complete');
});

//add animation listener to a specific animation by name
notifyMe.animationEnd(elm, function() {
    console.log('animation complete');
}, 'animationName');

//remove transition listener from the element
notifyMe.removeTransitionListener(elm);

//remove animation listener from the element
notifyMe.removeAnimationListener(elm);

```


[Live demo]:<http://iondrimba.github.io/notify-me/>

# Notify Me ES6 (WIP)

Notify CSS animation/transition events

[![Travis build status](https://travis-ci.org/iondrimba/notify-me.svg?branch=master)](https://travis-ci.org/iondrimba/notify-me) [![Build Status: Windows](https://ci.appveyor.com/api/projects/status/32r7s2skrgm9ubva/branch/master?svg=true)](https://ci.appveyor.com/project/iondrimba/notify-me/branch/master) [![Coverage Status](https://coveralls.io/repos/github/iondrimba/notify-me/badge.svg?branch=master)](https://coveralls.io/github/iondrimba/notify-me?branch=master)

#### GOAL:
Provide simple way of adding/removing event listeners for CSS animation/transition.

#### Build Requires:

* NodeJs
* Gulp

## Installation

```sh
 $ npm install notify-me --save-dev
```

## Usage
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

//add animation listener to a specific animation by name to the element
notifyMe.animationEnd(elm, (e) => {
    console.log('animation complete');
}, 'animationName');

//remove transition listener from the element
notifyMe.removeTransitionListener(elm);

//remove animation listener from the element
notifyMe.removeAnimationListener(elm);

```

#### Testing:
```
npm test
```

[Live demo]:<http://iondrimba.github.io/notify-me/>

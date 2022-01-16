# DOM Jitter

> Library to add jitter effect to a video player.

[![npm version](https://badgen.net/npm/v/dom-jitter)](https://www.npmjs.com/package/dom-jitter)
[![Known Vulnerabilities](https://snyk.io/test/github/goatandsheep/video-shake/badge.svg)](https://snyk.io/test/github/goatandsheep/video-shake)
[![codecov](https://badgen.net/codecov/c/github/goatandsheep/video-shake)](https://codecov.io/gh/goatandsheep/video-shake)
[![XO code style](https://badgen.net/badge/code%20style/XO/cyan)](https://github.com/xojs/xo)
[![npm downloads](https://img.shields.io/npm/dt/dom-jitter.svg?style=flat-square)](https://www.npmjs.com/package/dom-jitter)


![video-shake](./docs/video-shake.gif)

## Installation

```shell
npm i dom-jitter
```

## Node Example

Duration is the speed of the jitter and iterations is how long you want it to 

```javascript
import videoShake from 'dom-jitter'

const videoQuery = '.sample-video' // uses CSS query selectors
videoShake(videoQuery)
```


Brought to you by [beatcaps.io](https://www.beatcaps.io)

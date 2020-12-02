# Features:

**CAUTION**
https://github.com/smooth-code/error-overlay-webpack-plugin
React overlay error plugin not worked . version incapability with webpack 5
*alexander-akait* Fixed in v4 branch (release will be soon)
added:   
```
"process": "0.11.10",
"error-overlay-webpack-plugin": "^0.4.1",

```


**React17, Babel7, Webpack5, HotReload Dev server, SCSS-CSS-modules React Router**

## CSS/SCSS modules enabled

_NOTE_

1. when using modules in React and for variable usage: you must import variables from assets folder

2. There is a calc function in both SCSS [compile-time] and CSS [run-time]. You're likely invoking the former instead of the latter.

For obvious reasons mixing units won't work compile-time, but will at run-time.

You can force the latter by using unquote, a SCSS function.

```
{
  height: unquote("-webkit-calc(100% - 40px)");

  }

```

instead of a

```
{
  height: calc( 100% - 40px )
}
```

**Hot to import a css/scss file in a react component**

`import './App.css'`

or a css/scss module

`import styles from './App.module.scss"`

## Fonts Support:

as example added Muli Fonts

```
- src/
  --- assets/
  ----- fonts/
  ------- Muli-Regular.woff
  ------- Muli-Regular.woff2

```

including with @font-face definition

```
 @font-face {
  font-family: 'Muli Regular';
  font-style: normal;
  font-weight: normal;
  src:
    url('./assets/fonts/Muli-Regular.woff') format('woff'),
}
```

## React Router enabled in dev server.

    `historyApiFallback: true`

## About Prettier and it settings:

in **.eslintrc** :

disable Proptypes error:

`"react/prop-types": 0`

disable no-used-var error:

`"no-unused-vars":0`

or comment file beginning:

`/* eslint react/prop-types: 0 */`
or this:
`/* eslint react/forbid-prop-types: 0 */`

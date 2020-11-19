# React boilerplate on port 3000:

thanks and based on https://github.com/rwieruch/advanced-react-webpack-babel-setup

Features:

React17, Babel7, Webpack5, HotReload Dev server, SCSS-CSS-modules React Router

#### CSS/SCSS modules enabled

_NOTE_
when using modules in React and for variable usage: you must import variables from assets folder

`import './App.css'`

or module

`import styles from './App.module.scss"`

#### Fonts Support:

as example added Muli Fonts

````
- src/
  --- assets/
  ----- fonts/
  ------- Muli-Regular.woff
  ------- Muli-Regular.woff2

```

including with @font-face definition

```language
`
 @font-face {
  font-family: 'Muli Regular';
  font-style: normal;
  font-weight: normal;
  src:
    url('./assets/fonts/Muli-Regular.woff') format('woff'),
}
````

### React Router enabled in dev server.

    `historyApiFallback: true`

### About Prettier and it settings:

in .eslintrc :
disable Proptypes error:
`"react/prop-types": 0,`
disable no-used-var error:
`"no-unused-vars":0`

or commentat file beginning:
/_ eslint react/prop-types: 0 _/
or this:
/_ eslint react/forbid-prop-types: 0 _/

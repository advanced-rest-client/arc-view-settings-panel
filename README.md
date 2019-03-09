[![Published on NPM](https://img.shields.io/npm/v/@advanced-rest-client/arc-view-settings-panel.svg)](https://www.npmjs.com/package/@advanced-rest-client/arc-view-settings-panel)

[![Build Status](https://travis-ci.org/advanced-rest-client/arc-view-settings-panel.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/arc-view-settings-panel)

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/advanced-rest-client/arc-view-settings-panel)

## &lt;arc-view-settings-panel&gt;

Setting panel for ARC to control view


```html
<arc-view-settings-panel></arc-view-settings-panel>
```

### API components

This components is a part of [API components ecosystem](https://elements.advancedrestclient.com/)

## Usage

### Installation
```
npm install --save @advanced-rest-client/arc-view-settings-panel
```

### In an html file

```html
<html>
  <head>
    <script type="module">
      import '@advanced-rest-client/arc-view-settings-panel/arc-view-settings-panel.js';
    </script>
  </head>
  <body>
    <arc-view-settings-panel rest-apis></arc-view-settings-panel>
  </body>
</html>
```

### In a Polymer 3 element

```js
import {PolymerElement, html} from '@polymer/polymer';
import '@advanced-rest-client/arc-view-settings-panel/arc-view-settings-panel.js';

class SampleElement extends PolymerElement {
  static get template() {
    return html`
    <arc-view-settings-panel rest-apis></arc-view-settings-panel>
    `;
  }
}
customElements.define('sample-element', SampleElement);
```

### Installation

```sh
git clone https://github.com/advanced-rest-client/arc-view-settings-panel
cd api-url-editor
npm install
npm install -g polymer-cli
```

### Running the demo locally

```sh
polymer serve --npm
open http://127.0.0.1:<port>/demo/
```

### Running the tests
```sh
polymer test --npm
```

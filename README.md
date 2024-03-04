![](./assets/salesforce_platform.png)

# Visualforce - a user interface framework for the [Salesforce Platform](https://developer.salesforce.com)

[![NPM](https://nodei.co/npm/highlightjs-visualforce.png)](https://www.npmjs.com/package/highlightjs-visualforce)

![Salesforce Version](https://img.shields.io/badge/Spring_'24-0d9dda?style=flat&logo=salesforce&logoColor=white&label=Salesforce%20Release)
[![npm version](https://img.shields.io/npm/v/highlightjs-visualforce)](https://www.npmjs.com/package/highlightjs-visualforce)
[![npm downloads](https://img.shields.io/npm/dt/highlightjs-visualforce)](https://www.npmjs.com/package/highlightjs-visualforce)
![install size](https://badgen.net/packagephobia/install/highlightjs-visualforce)
[![License](https://img.shields.io/github/license/dschach/highlightjs-visualforce)](https://github.com/dschach/highlightjs-visualforce/blob/main/LICENSE.md)
[![CDN download](https://badgen.net/badge/jsDelivr/download/blue?icon=jsdelivr)](https://cdn.jsdelivr.net/npm/highlightjs-visualforce/dist/visualforce.min.js)

<!-- [![jsDelivr CDN downloads](https://badgen.net/jsdelivr/hits/gh/dschach/highlightjs-visualforce?label=jsDelivr+CDN&color=purple)](https://www.jsdelivr.com/package/gh/dschach/highlightjs-visualforce) -->

[![open issues](https://badgen.net/github/open-issues/dschach/highlightjs-visualforce?label=issues)](https://github.com/dschach/highlightjs-visualforce/issues)

NOTE: Salesforce strongly encourages development using Lightning Web Components. This library is not intended to be an endorsement of VF instead of LWC, but is only a tool for highlighting web page Visualforce markup.

<!-- ## Demo

The screenshot was captured from a webpage using `visualforce.min.js` from the `dist` folder and the main `highlight.min.js` library.
(Code is from [Salesforce Trigger Framework](https://dschach.github.io/salesforce-trigger-framework/))
![Demo](assets/VisualforceHighlighting.png)
Feel free to use any css library you'd like! -->

## Visualforce code requirements

This library will highlight Visualforce as used in Visualforce pages and components.

## Usage

Simply include the Highlight.js library in your webpage or Node app, then load this module. For more complex usage, see [highlight.js usage](https://github.com/highlightjs/highlight.js#basic-usage).

### Static website or simple usage

Simply load this module after loading Highlight.js. You'll use the minified version found in the `dist` directory. This module is just a CDN build of the language, so it will register itself as the Javascript is loaded.

For more details see [Highlight.js main page](https://github.com/highlightjs/highlight.js#highlightjs).

```html
<script type="text/javascript" src="/path/to/highlight.min.js"></script>
<script type="text/javascript" src="/path/to/visualforce.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/highlightjs/styles/vs.css" />

<script type="text/javascript">
	hljs.highlightAll();
</script>
```

This will find and highlight code inside of `<pre><code>` tags; it tries to detect the language automatically. If automatic detection doesn’t work for you, you can specify the language in the `class` attribute:

```html
<pre>
    <code class="language-visualforce">
    ...
    </code>
</pre>
```

The language file will also accept `vf` as an alias for `visualforce`:

```html
<pre>
    <code class="language-vf">
    ...
    </code>
</pre>
```

#### Ignoring a Code Block

To skip highlighting of a code block completely, use the `nohighlight` class:

```html
<pre><code class="nohighlight">...</code></pre>
```

### Using directly from jsDelivr

```html
<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release/build/highlight.min.js"></script>
<script
	type="text/javascript"
	src="https://cdn.jsdelivr.net/npm/highlightjs-visualforce/dist/visualforce.min.js"></script>
```

- More info: <https://www.jsdelivr.com/>

### Using directly from the unpkg CDN

```html
<script src="https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.min.js"></script>
<script
	type="text/javascript"
	src="https://unpkg.com/highlightjs-visualforce/dist/visualforce.min.js"></script>
```

- More info: <https://unpkg.com/>

### With Node or another build system

If you're using Node / Webpack / Rollup / Browserify, etc, simply require the language module, then register it with Highlight.js.

```javascript
var hljs = require('highlightjs');
var hljsVisualforce = require('highlightjs-visualforce');

hljs.registerLanguage('visualforce', hljsVisualforce);
hljs.highlightAll();
```

### Styles

There are many styles to choose from at [https://highlightjs.org/demo](https://highlightjs.org/demo). They can be downloaded from [the GitHub repository](https://github.com/highlightjs/highlight.js/tree/main/src/styles) and referenced from unpkg.com or jsdelivr (see sample html above).

## License

Highlight.js is released under the BSD 3-Clause License. See [LICENSE](https://github.com/highlightjs/highlight.js/blob/main/LICENSE) file for details.
Highlightjs-visualforce is released under the MIT License. See [LICENSE](/LICENSE.md) file for details.

## Author

David Schach [https://github.com/dschach](https://github.com/dschach)

## Contribution

Feel free to create issues or (even better) pull requests.

## Links

- The official site for the Highlight.js library is <https://highlightjs.org/>.
- The Highlight.js GitHub project: <https://github.com/highlightjs/highlight.js>
- Learn more about Visualforce: <https://developer.salesforce.com/docs/atlas.en-us.visualforcecode.meta/visualforcecode/visualforce_intro_what_is_visualforce.htm>

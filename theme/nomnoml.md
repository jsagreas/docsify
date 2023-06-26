```noml render
[Foo] -> [Bar]
```





# docsify-nomnoml

> :information_source: &nbsp; A docsify plugin to render nomnoml code fences.

[![nomnoml](https://img.shields.io/badge/www-nomnoml-%23fdf6e3)](https://nomnoml.com)
[![docsify](https://img.shields.io/badge/www-docsify-%2342b983)](https://docsify.js.org)
[![themeable](https://img.shields.io/badge/www-themeable-%230a87da)](https://jhildenbiddle.github.io/docsify-themeable/)

<!-- tabs:start -->

<!-- tab:SVG Diagram -->

```nomnoml renderSvg title="A nomnoml example modelling this docsify plugin"
# direction: right
[<reference> theme | stroke: <color>; fill: <color>]
[docsify |
  [config] <:- [nomnoml]
]
[<abstract> nomnoml | title; class; width; height | render() |
  [<actor> ☺] -- [<instance> render]
]
[docsify] -> [nomnoml]
```

<!-- tab:Markdown -->

````markdown » nomnoml
```nomnoml renderSvg
# direction: right
[<reference> theme | stroke: <color>; fill: <color>]
[docsify |
  [config] <:- [nomnoml]
]
[<abstract> nomnoml | title; class; width; height | render() |
  [<actor> ☺] -- [<instance> render]
]
[docsify] -> [nomnoml]
```
````

<!-- tabs:end -->

# Install

> :information_source: &nbsp; Installing Nomnoml into a Docsify instance.

The following scripts can be added to the `index.html` file of a Docsify site. This
plugin has two peer-dependencies, `nomnoml` and `graphre` which must be loaded in order.

```html
<script src="//cdn.jsdelivr.net/npm/graphre@0.1/dist/graphre.js"></script>
<script src="//cdn.jsdelivr.net/npm/nomnoml@1.4/dist/nomnoml.js"></script>
<script src="//cdn.jsdelivr.net/npm/docsify-nomnoml@1/dist/plugin.min.js"></script>
```

> _The versions stated reflect a stable setup at the time of writing however newer
> versions should generally work as this plugin passes input straight through to
> dependencies with the aim of maintaining a minimal footprint._


# Usage

> :information_source: &nbsp; Instructing nomnoml to render a block as an SVG image.

## General

On their own a language type of `nomnoml` or `noml` will render as plain text inside code
fences. In order to render an SVG an explicit instruction can be specified, either
`renderSvg` or `render` for short.

### A basic example

<!-- tabs:start -->

<!-- tab:Long-form -->

````markdown » nomnoml
```nomnoml renderSvg
[Foo] -> [Bar]
```
````

<!-- tab:Short-form -->

````markdown » nomnoml
```noml render
[Foo] -> [Bar]
```
````

<!-- tab:Result -->

```noml render
[Foo] -> [Bar]
```

<!-- tabs:end -->

> _At the time of writing there is no [prismjs](https://prismjs.com/)
> integration available for nomnoml, however requiring a render instruction to be explicit
> was an inentional design decision - to leave the top-level namespace free for potential
> syntax highlighting support in the future._

## Attributes

A render instruction may additionally be followed by optional attributes.

| Attribute  | Description                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **title**  | If a title is specified, a `<title/>` element will be embedded inside the SVG. It will also be set as the `aria-label` on the SVG element.         |
| **class**  | By default an SVG will have the CSS class name `nomnoml-svg` - a custom class may be specified that will be applied in addition to the default.    |
| **width**  | Any valid CSS width (relative or absolute) can be applied to the SVG element - if a width is set without height, the height will be set to "auto". |
| **height** | Any valid CSS height (relative or absolute) can be applied to the SVG element - if a height is set without width, the width will be set to "auto". |

### An example with attributes

````markdown » nomnoml
```nomnoml renderSvg width=100% class=my-class title="My Diagram"
[Foo] -> [Bar]
```
````

### Tips

In some applications it may be preferable to alter the width without an auto-adjustment of
the height (or vice-versa). This can be achieived via a custom class name and styling. For
example, the following combination would yield a centered diagram.

<!-- tabs:start -->

<!-- tab:Markdown -->

````markdown » nomnoml
```nomnoml renderSvg class=centered
[Foo] -> [Bar]
```
````

<!-- tab:CSS -->

```css
.nomnoml-svg.centered {
	width: 100%;
}
```

<!-- tab:Result -->

```nomnoml renderSvg class=centered
[Foo] -> [Bar]
```

<!-- tabs:end -->


# Theme

> :information_source: &nbsp; Customising the look and feel of a Nomnoml SVG.

By default the plugin will try to match the `stroke` and `fill` colors of the rendered SVG
to the current theme - where styles aren't matched this will fallback to the foreground and
background colors of the current page. Styles may be customized by via themeable CSS rules.

```css
:root {
	--nomnoml-svg-stroke: <color>;
	--nomnoml-svg-fill-1: <color>;
	--nomnoml-svg-fill-2: <color>;
}
```

> _Note that under the hood, this plugin is applying themes as global directives to
> Nomnoml. Specifing `stroke` and `fill` as directives in the Docsify configuration
> will override any theme styling._

---

The default behavior is meant to work with extensions of the core theme systems in
Docsify and the `docsify-themeable` plugin but isn't expected suite everyones'
requirements or tastes. Should you wish to disable the theming entirely and revert
to the Nomnoml-default color scheme, the following configuration can be set.

```js
window.$docsify = {
	// ...
	nomnoml: {
		autotheme: false,
	},
}
```



# Directives

> :information_source: &nbsp; Globally defining the native Nomnoml look and feel.

Nomnoml syntax allows for directives that tailor various aspects of the rendered SVG.

<!-- tabs:start -->

<!-- tab:Markdown -->

````
```noml render
#font: monospace
#fontSize: 16
#arrowSize: 1.8
[Foo] -> [Bar]
```
````

<!-- tab:Result -->

```noml render
#font: monospace
#fontSize: 16
#arrowSize: 1.8
[Foo] -> [Bar]
```

<!-- tabs: end -->

In the context of Docsify it may be preferable to define some of these globally to
ensure a consistent look and feel throughout a Docsify instance. The same configuration
can instead be specified on the `$docsify` configuration object.

```js
window.$docsify = {
	// ...
	nomnoml: {
		directives: {
			font: 'monospace',
			fontSize: 16,
			arrowSize: 1.8,
		},
	},
}
```

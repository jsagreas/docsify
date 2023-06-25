# docsify-latex
$$
\text{Docsify} + \LaTeX = \heartsuit
$$
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/scruel/docsify-latex/blob/master/LICENSE)
[![GitHub Workflow Status (master)](https://img.shields.io/github/workflow/status/scruel/docsify-latex/Build/master?label=checks&style=flat-square)](https://github.com/scruel/docsify-latex/actions?query=branch%3Amaster+)
[![NPM](https://img.shields.io/npm/v/docsify-latex.svg?style=flat-square)](https://www.npmjs.com/package/docsify-latex)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/docsify-latex/badge)](https://www.jsdelivr.com/package/npm/docsify-latex)

<blockquote>
Plugin vesrion: <span id="docsify-latex-version"></span> (on current page)
</blockquote>

A [docsify.js](https://docsify.js.org) plugin for typesetting $\LaTeX$ with display engines from markdown.

<br/>

$$
\text{Docsify} + \text{LaTeX} = \heartsuit
$$
## Features

This plugin helps you typeset $\LaTeX$ with some JavaScript $\LaTeX$ display engines.

**Supported engine features**:

- Equation cross-reference jump (same page only)
- Typsetting complex LaTeX content
- Overflowed content scroll bar

See [Documentation Example][Documentation Example] page for more details.

**List of integrated engines**:

- [MathJax V3](https://docs.mathjax.org/)
- [MathJax V2](https://docs.mathjax.org/en/v2.7-latest/index.html)
- [KaTeX](https://katex.org/docs)

> If you want to integrate more engines, feel free to fire an issue to explain the reason, or more well, you can directly make a pull request.

## Installation

Add JavaScript $\LaTeX$ display engine, and docsify-latex plugin after docsify and engine scirpts all to your `index.html`.

Template as following:

```html
<!-- Docsify script Here -->

<!-- LaTeX display engine script Here -->

<script src="//cdn.jsdelivr.net/npm/docsify-latex@0"></script>
```

> Notice:
>
> You should put docsify-latex plugin script below docsify and $\LaTeX$ display engine scripts, because plugin script **depends on** them.
>
> To keep loading scripts in order, you also should remove `async` attribute from the related script elements.

Review the [Options](#Options) section and configure as needed.

For sample usage, you can just use the default options:

```javascript
window.$docsify = {
  // ...
  latex: {
    inlineMath   : [['$', '$'], ['\\(', '\\)']], // default
    displayMath  : [['$$', '$$']],               // default
  }
};
```

### With MathJax

```html
<!-- Docsify script Here -->

<script src="//cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

<script src="//cdn.jsdelivr.net/npm/docsify-latex@0"></script>
```

Or if you prefer MathJax version 2:

```html
<!-- Docsify script Here -->

<script src="https://cdn.jsdelivr.net/npm/mathjax@2/MathJax.js?config=TeX-AMS_CHTML"></script>

<script src="//cdn.jsdelivr.net/npm/docsify-latex@0"></script>
```

### With KaTeX

```html
<!-- Docsify script Here -->

<script src="https://cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.js"></script>
<link rel="stylesheet" href="//cdn.jsdelivr.net/npm/katex@latest/dist/katex.min.css" />

<script src="//cdn.jsdelivr.net/npm/docsify-latex@0"></script>
```

> Notice:
>
> You can also add some [KaTeX plugins](https://github.com/KaTeX/KaTeX/tree/main/contrib) after loaded KaTeX script, if you needed.

## Usage

Put $\LaTeX$ within symbols you configured.

For example, by default we configured `$$` for marking section inner $\LaTeX$ in display mode, then:

```latex
$$
E=mc^2
$$
```

> Go to display engine official website for more details about supported $\LaTeX$ functions, you can click links in [Features](#Features) section to visit specific engines documentation website.

Seeking for demo projects? click [here][Demo Projects] to learn more.

## Options

Options are set within the `window.$docsify` configuration under the `latex` key:

```javascript
window.$docsify = {
  // ...
  latex: {
    inlineMath   : [['$', '$'], ['\\(', '\\)']], // default
    displayMath  : [['$$', '$$']],               // default
    customOptions: {}                            // default
  }
};
```

### inlineMath

- Type: `Array[Aarry]`
- Default: `[['$', '$'], ['\\(', '\\)']]`

Text within `inlineMath` symbols you configured will be rendered in inline mode, $\LaTeX$ write for inline mode **must not** cross multiple lines.

For example you can even write:

```javascript
window.$docsify = {
  latex: {
    inlineMath   : [['@', '@']],
  }
};
```

Then you can write:

```latex
@ E=mc^2 @
```

Will be rendered as: @ E=mc^2 @

### displayMath

- Type: `Array[Aarry]`
- Default: `[['$$', '$$']]`

Text within `displayMath` symbols you configured will be rendered in display mode.

> For differences between the two modes, you should check the documentation of $\LaTeX$ engines.

For example you can even write:

```javascript
window.$docsify = {
  // ...
  latex: {
    displayMath  : [['@@', '@@']],
  }
};
```

Then you can write:

```latex
@@
E=mc^2
@@
```

Will be rendered as:

$
E=mc^2
$

### overflowScroll

- Type: `Boolean`
- Default: `true`

An option to determine whether to add vertical scroll bars if equations are overflow the screen.

### beforeInitFunc

- Type: `Function`
- Default: `<empty function>`

Configure a function which will be executed **only once** before we set options for display engine, be aware, the engine must already be initialized before we call this function, so you can invoke anything with engine instance.

> Notice:
>
> This function should only do some extra configure jobs, for configuration purpose, check [Options#customOptions](#customOptions).
>
> Also, since markdown content are not loaded when calling this function, so that you should't typeset anything in this function.

For example, **for MathJax version 2**, you can add [mhchem extension](https://github.com/mhchem/MathJax-mhchem) as following:

```javascript
window.$docsify = {
  // ...
  latex: {
    // ...
    beforeInitFunc: () => {
      MathJax.Ajax.config.path["mhchem"] = "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.2";
    },
    customOptions: {
      TeX: {
        extensions: ["[mhchem]/mhchem.js", "extpfeil.js"],
      },
    }
  }
};
```

Notice that you will still can do something as following, instead of using `beforeInitFunc`, though we will not recommend for this way:

```html
<!-- MathJax script Here -->
<script>
  MathJax.Ajax.config.path["mhchem"] = "https://cdnjs.cloudflare.com/ajax/libs/mathjax-mhchem/3.3.2";
</script>
```

### customOptions

- Type: `Object`
- Default: `{}`

Let you have a change to configure $\LaTeX$ engine options, so that engine can act by your customized options.

> Notice:
>
> Override `inlineMath` and `displayMath` related options will not take any effects, it's just to prevent having inconsistent behaviors while typesetting $\LaTeX$.

#### MathJax

Review [MathJax documentation Options](https://docs.mathjax.org/en/latest/options/index.html) page for more details.

For example, if you want to issue an alert when page ready for MathJax:

```javascript
window.$docsify = {
  // ...
  latex: {
    // ...
    customOptions: {
      startup: {
        pageReady: () => {
          alert('Running MathJax');
          return MathJax.startup.defaultPageReady();
        }
      },
    }
  }
};
```

Or if you prefer the official configuration way, you can also keep using:

```html
<script>
  window.MathJax = {
    startup: {
      pageReady: () => {
        alert('Running MathJax');
        return MathJax.startup.defaultPageReady();
      }
    },
  };
</script>
```

> Be aware, the options you put here, might will be overrided by the options you put in `customOptions` section, and you should use this before MathJax loaded (as official documentation mentioned), otherwise plugin will obtain the object contains your options rather than MathJax instance.
>
> For MathJax version 2, `customOptions` will be passed to `MathJax.Hub.Config`, if you need to do more before options set up, please check [Options#beforeInitFunc](#beforeInitFunc).

#### KaTeX

Review [KaTeX documentation API Options](https://katex.org/docs/options.html) page for more details.

For example, if you prefer color blue as your error color:

```javascript
window.$docsify = {
  // ...
  latex: {
    // ...
    customOptions: {
      errorColor: "#0000ff",
    }
  }
};
```

## License

This project is licensed under the MIT License.

See the [LICENSE](https://github.com/scruel/docsify-latex/blob/master/LICENSE) for details.

Copyright (c) Scruel Tao ([@scruel](https://github.com/scruel))

[MathJax]: https://docs.mathjax.org
[Documentation Example]: https://scruel.github.io/docsify-latex/#/example
[Demo Projects]: https://scruel.github.io/docsify-latex/#/demo

<script>
  document.getElementById("docsify-latex-version").innerHTML = window.$docsify.latex.version;
</script>



# Feature Example

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/scruel/docsify-latex/blob/master/LICENSE)
[![NPM](https://img.shields.io/npm/v/docsify-latex.svg?style=flat-square)](https://www.npmjs.com/package/docsify-latex)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/docsify-latex/badge)](https://www.jsdelivr.com/package/npm/docsify-latex)

<blockquote>
Plugin vesrion: <span id="docsify-latex-version"></span> (on current page)

This page might contains some new features, so make sure you can see docsify-latex latest version above, otherwise please try to clear your cache then refresh the page.
</blockquote>

## Complex Content

```latex
Price (\$) for house ($y$)
```

Price (\$) for house ($y$)

----

Long equation:

```latex
Inline mode: $J(\theta )= \frac{1}{2m}\left( {{\theta }^{T}}{{X}^{T}}X\theta -{{\theta}^{T}}{{X}^{T}}y-{{y}^{T}}X\theta + {{y}^{T}}y \right) $ equation.

Inline mode: $J(\theta) = - \frac{1}{m} \sum_{i=1}^m [ y^{(i)}\ \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\ \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2$ equation 2.

Display mode:
$$
J(\theta) = - \frac{1}{m} \sum_{i=1}^m [ y^{(i)}\ \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\ \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2
$$


Display mode with tag:
$$
J(\theta) = - \frac{1}{m} \sum_{i=1}^m [ y^{(i)}\ \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\ \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2\tag{DIS}\label{eq:dis}
$$
```

In inline mode: $J(\theta )= \frac{1}{2m}\left( {{\theta }^{T}}{{X}^{T}}X\theta -{{\theta}^{T}}{{X}^{T}}y-{{y}^{T}}X\theta + {{y}^{T}}y \right) $ equation.

Inline mode: $J(\theta) = - \frac{1}{m} \sum_{i=1}^m [ y^{(i)}\ \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\ \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2$ equation 2.

Display mode:
$$
J(\theta) = - \frac{1}{m} \sum_{i=1}^m [ y^{(i)}\ \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\ \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2
$$

Display mode with tag:
$$
J(\theta) = - \frac{1}{m} \sum_{i=1}^m [ y^{(i)}\ \log (h_\theta (x^{(i)})) + (1 - y^{(i)})\ \log (1 - h_\theta(x^{(i)}))] + \frac{\lambda}{2m}\sum_{j=1}^n \theta_j^2\tag{DIS}\label{eq:dis}
$$

----

```latex
$$
\overbrace{a+b+c}^{\text{note}}
$$
```

$$
\overbrace{a+b+c}^{\text{note}}
$$

----

```latex
$$
\sum_{\substack{0<i<m\\0<j<n}}
$$
```

$$
\sum_{\substack{0<i<m\\0<j<n}}
$$

----

`\hbox` put their argument into text mode. To raise math, nest `$…$` delimiters inside the argument as shown below.

```latex
$$
a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)
$$
```

$$
a+\left(\vcenter{\hbox{$\frac{\frac a b}c$}}\right)
$$

----

Labeled equation:

```latex
$x+y^{2x}\tag*{MEE}\label{mee}$
```

$$E = mc^2\tag*{MEE}\label{mee}$$

----

`\newcommand` function:

```latex
$$
\newcommand{\hdotsfour}{\cdots & \cdots & \cdots & \cdots}
\begin{pmatrix}
 1     &  \frac{1}{2}  &\dots  &\frac{1}{n} \\
 \hdotsfour\\
 m     &  \frac{m}{2} &\dots  &\frac{m}{n}
 \end{pmatrix}
$$
```

$$
\newcommand{\hdotsfour}{\cdots & \cdots & \cdots & \cdots}
\begin{pmatrix}
 1     &  \frac{1}{2}  &\dots  &\frac{1}{n} \\
 \hdotsfour\\
 m     &  \frac{m}{2} &\dots  &\frac{m}{n}
 \end{pmatrix}
$$

----

Colored chemical formula:

```latex
$$
\ce{\color{#0B87DA}{H2O}}
$$
```

$$
\ce{\color{#0B87DA}{H2O}}
$$

----

## Cross-reference jump

> For MathJax, [Automatic Equation Numbering](https://docs.mathjax.org/en/latest/input/tex/eqnumbers.html) need to be manually turn on.
>
> For KaTeX, cross-reference is a workaround come from [KaTeX#2003](https://github.com/KaTeX/KaTeX/issues/2003), it's not officially supported.
>
> Usage:
>
> Use automatic equation numbering functions or use `\tag` and `\label` to define the equation.
>
> Reference before or after defined equation use `\ref` or `eqref`:
>
> For more details, you should check the website of the engine you are using.

I'd like to reference the equation $\eqref{mee}$ from the last chapter, it's a well-known equation all over the world.

When $a \ne 0$, there are two solutions to $ax^2 + bx + c = 0$ and they are $\ref{eq:m1}$

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\tag{M1}\label{eq:m1}
$$

This equation $\eqref{eq:m1}$ is very important.

In equation $\eqref{eq:sample}$, we find the value of an interesting integral:

$$
\begin{equation}
  \int_0^\infty \frac{x^3}{e^x-1}\,dx = \frac{\pi^4}{15}
  \label{eq:sample}
\end{equation}
$$

<script>
  document.getElementById("docsify-latex-version").innerHTML = window.$docsify.latex.version;
</script>

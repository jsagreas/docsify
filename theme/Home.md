```java
public class MyFirstApp{
    public static void main(String[] args) {
        System.out.print("Hello world");
        }
    }





```
### Defaults



### Simple


<a href="#" data-style-group="themeable" data-style-href="css/simple.css">Preview</a>



### Simple Dark


<a href="#" data-style-group="themeable" data-style-href="css/dark.css">Preview</a>



A minimalist theme containing only the default values used by all other
themes. This theme is intended to serve as the most basic starting point for a
customized theme.

<a href="#" data-style-group="themeable" data-style-href="css/theme-defaults.css">Preview</a> |
[Source](https://github.com/jhildenbiddle/docsify-themeable/tree/master/src/scss/themes/defaults)

```html
<!-- Theme: Defaults -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-defaults.css">
```

<figure class="thumbnails">
    <img src="assets/img/theme-defaults-cover.png" alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/theme-defaults-content.png" alt="Screenshot of content" title="Content">
</figure>

### Simple

A clean, versatile theme featuring a light color scheme with vibrant accents, a [system font stack](https://css-tricks.com/snippets/css/system-font-stack/), a gradient
background cover page, and visual indicators for drop-menus and expand/collapse
state.

<a href="#" data-style-group="themeable" data-style-href="css/theme-simple.css">Preview</a> |
[Source](https://github.com/jhildenbiddle/docsify-themeable/tree/master/src/scss/themes/theme-simple.scss)

```html
<!-- Theme: Simple -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css">
```

<figure class="thumbnails">
    <img src="assets/img/theme-simple-cover.png" alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/theme-simple-content.png" alt="Screenshot of content" title="Content">
</figure>

### Simple Dark

A modified version of the Simple theme featuring a dark color scheme.

<a href="#" data-style-group="themeable" data-style-href="css/theme-simple-dark.css">Preview</a> |
[Source](https://github.com/jhildenbiddle/docsify-themeable/tree/master/src/scss/themes/theme-simple-dark.scss)

```html
<!-- Theme: Simple Dark -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css">
```

<figure class="thumbnails">
    <img src="assets/img/theme-simple-dark-cover.png" alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/theme-simple-dark-content.png" alt="Screenshot of content" title="Content">
</figure>

### Defaults

A minimalist theme containing only the default values used by all other
themes. This theme is intended to serve as the most basic starting point for a
customized theme.

<a href="#" data-style-group="themeable" data-style-href="css/theme-defaults.css">Preview</a> |
[Source](https://github.com/jhildenbiddle/docsify-themeable/tree/master/src/scss/themes/defaults)

```html
<!-- Theme: Defaults -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-defaults.css">
```

<figure class="thumbnails">
    <img src="assets/img/theme-defaults-cover.png" alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/theme-defaults-content.png" alt="Screenshot of content" title="Content">
</figure>

### Simple

A clean, versatile theme featuring a light color scheme with vibrant accents, a [system font stack](https://css-tricks.com/snippets/css/system-font-stack/), a gradient
background cover page, and visual indicators for drop-menus and expand/collapse
state.

<a href="#" data-style-group="themeable" data-style-href="css/theme-simple.css">Preview</a> |
[Source](https://github.com/jhildenbiddle/docsify-themeable/tree/master/src/scss/themes/theme-simple.scss)

```html
<!-- Theme: Simple -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple.css">
```

<figure class="thumbnails">
    <img src="assets/img/theme-simple-cover.png" alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/theme-simple-content.png" alt="Screenshot of content" title="Content">
</figure>

### Simple Dark

A modified version of the Simple theme featuring a dark color scheme.

<a href="#" data-style-group="themeable" data-style-href="css/theme-simple-dark.css">Preview</a> |
[Source](https://github.com/jhildenbiddle/docsify-themeable/tree/master/src/scss/themes/theme-simple-dark.scss)

```html
<!-- Theme: Simple Dark -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/docsify-themeable@0/dist/css/theme-simple-dark.css">
```

<figure class="thumbnails">
    <img src="assets/img/theme-simple-dark-cover.png" alt="Screenshot of coverpage" title="Cover page">
    <img src="assets/img/theme-simple-dark-content.png" alt="Screenshot of content" title="Content">
</figure>


> [!NOTE]
> An alert of type 'note' using global style 'callout'.





> [!WARNING]
> An alert of type 'warning' using global style 'callout'.





> [!NOTE|style:flat]
> An alert of type 'note' using alert specific style 'flat' which overrides global style 'callout'.







> [!COMMENT]
> An alert of type 'comment' using style 'callout' with default settings.





---
answer: 42
question: What is your favorite number?
---
# docsify-mustache
*Version {{package.version}}*

[![NPM](https://img.shields.io/npm/v/docsify-mustache.svg?style=flat-square)](https://www.npmjs.com/package/docsify-mustache)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/docsify-mustache.github.io/docsify-mustache/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/docsify-mustache/docsify-mustache.github.io.svg?style=flat-square)](https://github.com/docsify-mustache/docsify-mustache.github.io/issues)

A [Docsify](https://docsify.js.org) plugin that allow preprocessing markdown documents with [Mustache](https://mustache.github.io/) template engine. You can substitute variables in markdown documents using mustache syntax {{=<% %>=}}`{{variable}}` and `{{variable.property}}`<%={{ }}=%>. Variables can be load from various sources, including front matter section of markdown documents, external JSON or XML files and Docsify configuration.

## Installation

Add following script tag to your `index.html` after docsify.

```html
<script src="//cdn.jsdelivr.net/npm/docsify-mustache"></script>
```

Optionally add docsify-front-matter plugin to access markdown front matter variables.

```html
<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/front-matter.min.js"></script>
```

## Options

### data

You can load Mustache variables with `data` option. The value can be a *string*, *object* or *array*.

 - *string* value interpreted as data file URL (relative or absolute). Both JSON and XML data file formats are supported.
   - properties from JSON data file will be available as Mustache variables
   - XML root element will be mapped to Mustache variable with root elements tag name as variable name
 - *object* properties will be mapped to Mustache variables using property name as variable name
 - *array* may be use to specify multiple string or object values as data sources

Example:

```javascript
window.$docsify = {
  mustache: {
    data: [
      'doc/vars.json',
      'doc/pom.xml',
      {
        question: 'What is your favorite number?'
      }
    ]
  }
}
```

> [!NOTE] There is no way to access XML attributes, tag names used for hierarchy and for referring element's inner text.

### package

The plugin loads `package.json` and make it available for Mustache as `package` variable. You can disable this feature setting `noPackage` option to `true` value:

```javascript
window.$docsify = {
  mustache: {
    noPackage : true
  }
}
```

## Sources 

### Front Matter

If [docsify-front-matter](https://github.com/docsifyjs/docsify/tree/master/src/plugins/front-matter) plugin loaded and actual markdown file has front matter data then the front matter keys will be mapped to Mustache variables with same name. The front matter data has the highest priority if variables exists with same name in multiple data sources.

Example:

<!-- tabs:start -->

** Markdown **

{{=<% %>=}}
```markdown
---
answer: 42
question: What is your favorite number?
---

**Est o te viri tum mihi**

Lorem markdownum nunc attenuarat pocula **{{question}}** atria ante est.
Erat lacte neve vulnus audistis infelix sidera tuae **{{answer}}**.
```
<%={{ }}=%>

** Preview **

**Est o te viri tum mihi**

Lorem markdownum nunc attenuarat pocula **{{question}}** atria ante est.
Erat lacte neve vulnus audistis infelix sidera tuae **{{answer}}**.

<!-- tabs:end -->

### package.json

The plugin loads `package.json` and make it available for Mustache as `package` variable.

<!-- tabs:start -->

#### ** Markdown **

{{=<% %>=}}
```markdown
**Temerasse rerum taurus**

Tum me modo leones verbis: meum mons Pirithoi conubia! Studio color sed erit
ducitur leto contrahitur dolor est quodvis Aeolidis sororum **{{package.version}}**.
Rubentia sumit **{{package.name}}**.
```
<%={{ }}=%>

#### ** Preview **

**Temerasse rerum taurus**

Tum me modo leones verbis: meum mons Pirithoi conubia! Studio color sed erit
ducitur leto contrahitur dolor est quodvis Aeolidis sororum **{{package.version}}**.
Rubentia sumit **{{package.name}}**.

#### ** package.json **

[package.json](package.json ':ignore')

<!-- tabs:end -->

### URL

Data can be loaded from relative or absolute URL. Both JSON and XML data file formats are supported.

<!-- tabs:start -->

#### ** JavaScript **

```javascript
window.$docsify = {
  mustache: {
    data: ['doc/vars.json','data/pom.xml']
  }
}
```

#### ** Markdown **

{{=<% %>=}}
```markdown
**Aditus terras ignoto longa ad captis colunt**

Inde pondera silva tantum glaebas tenetis ab **{{favorite.fruit}}**. Cunctas est orbem profatu
erigitur maximus: in **{{project.version}}** figuris canes. Oete iniaque stta in **{{project.artifactId}}**
ego favent Penei. Lacertos tenebat veteres **{{favorite.color}}**.
```
<%={{ }}=%>

#### ** Preview **

**Aditus terras ignoto longa ad captis colunt**

Inde pondera silva tantum glaebas tenetis ab **{{favorite.fruit}}**. Cunctas est orbem profatu
erigitur maximus: in **{{project.version}}** figuris canes. Oete iniaque stta in **{{project.artifactId}}**
ego favent Penei. Lacertos tenebat veteres **{{favorite.color}}**.

#### ** vars.json **

```json
{
  "favorite": {
    "fruit": "raspberry",
    "color": "brown"
  }
}
```

#### ** pom.xml **

```xml
<project>
  <modelVersion>4.0.0</modelVersion>
  <groupId>com.example.app</groupId>
  <artifactId>foo</artifactId>
  <version>1.2.3</version>
</project>
```

<!-- tabs:end -->

### JavaScript

Data can be loaded from Docsify's JavaScript configuration.

<!-- tabs:start -->

#### ** JavaScript **

```javascript
window.$docsify = {
  mustache: {
    data: {
      author: {
        name: 'John Smith',
        email: 'john.smith@example.com'
      }
    }
  }
}
```

#### ** Markdown **

{{=<% %>=}}
```markdown
**Viri coniuge resistit mariti**

Aderat voluisti excipit caede meus celanda usus, **{{author.name}}**. Qua ad Pagasaea
perenni pleno exprobravit dextra. Nec heros rebelles ambiguus, sunt timuere
suis; per fuerat, dixit muro **{{author.email}}** undique, tanto satos.
```
<%={{ }}=%>

#### ** Preview **

**Viri coniuge resistit mariti**

Aderat voluisti excipit caede meus celanda usus, **{{author.name}}**. Qua ad Pagasaea
perenni pleno exprobravit dextra. Nec heros rebelles ambiguus, sunt timuere
suis; per fuerat, dixit muro **{{author.email}}** undique, tanto satos.

<!-- tabs:end -->

## Merging

Mustache template data is actually merged from multiple different sources before the template is rendered. The order of priority for sources of data is (from highest priority to lowest):

 1. Front Matter data in markdown document.
 1. Data from plugin configuration. When `data` configuration option contains multiple source (as an array) then the latest data source will have the highest priority.


## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/docsify-mustache/docsify-mustache.github.io/blob/master/LICENSE) for details.


For example `😀` will be parsed to <img src="https://twemoji.maxcdn.com/v/12.1.5/72x72/1f600.png" alt="happy" style="zoom:25%;" />


<!-- tabs:start -->

#### **English**

Hello!

#### **French**

Bonjour!

#### **Italian**

Ciao!

<!-- tabs:end -->


```swimlanes-io
title: Simple example
A -> B: Ping
B --> A: Pong
```



<swimlanes-io>
title: Simple example
A -> B: Ping
note:
```
{
    // code block
}
```
B --> A: Pong
</swimlanes-io>




# 1.1






> An awesome project.

:100:

home:100: 首页

```java
public class MyFirstApp
{
public static void main(String[] args) 
{
System.out.print("Hello world");
}
}

```

```sql
update evel set site_id = 1 where name = '12' and site_id = 3;
```


```sql
update evel set site_id = 1 where name = '12' and site_id = 3;
```


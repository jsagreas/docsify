## Example

Code:

<pre v-pre="" data-lang="md" class="language-md">
<code class="lang-md language-markdown">&#58;mi md-18|home:
&#58;mi-outlined red|check_circle:
&#58;mi-round md-36 blue|check_circle:
&#58;mi-two-tone md-48 green-svg|check_circle:
&#58;mi-two-tone md-48 blue-svg|chrome_reader_mode
&#58;mi-sharp green-svg md-48|chrome_reader_mode:
</code></pre>

Result:

:mi md-18|home:
:mi-outlined red|check_circle:
:mi-round md-36 blue|check_circle:
:mi-two-tone md-48 green-svg|check_circle:
:mi-two-tone md-48 blue-svg|chrome_reader_mode:
:mi-sharp green-svg md-48|chrome_reader_mode:



结果3



# FontAwesome plugin for Docsify



:fas fa-home fa-fw:
:fas fa-th-list fa-fw red:
:fab fa-linux fa-fw blue:
:fab fa-aws fa-fw orange:


```bash
--------------------------------------------------------------------------------
```
###  Docsify Accordion


```html
<link rel="stylesheet" href="//unpkg.com/docsify-accordion/src/style.css">
<script src="//unpkg.com/docsify-accordion/src/index.js"></script>
```

+ Question 1? +

  Answer 1

+ Question 2? +

  Answer 2





charty
{
  "title":   '666',
  "caption": '555',
  "type":    '222',
  "options": {
    "theme":   '',
    "legend":  '',
    "labels":  '',
    "numbers": 'true'
  },
  "data": [
    {
      "label": '4',
      "value": '6',
      "colour": 'red'
    }
  ]
}











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
public class MyFirstApp{
  public static void main(String[] args) {
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


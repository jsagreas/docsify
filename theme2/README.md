<!-- markdownlint-disable MD002 -->

## Installation

### Update `index.html` file

1. Add the following script and stylesheet to your `index.html` via either CDN or downloading it and using it locally:

    **unpkg.com**
    ```html
    <script src="//unpkg.com/@markbattistella/docsify-charty@latest/dist/docsify-charty.min.js"></script>
    <link rel="stylesheet" href="//unpkg.com/@markbattistella/docsify-charty@latest/dist/docsify-charty.min.css">
    ```

    **jsDelivr.com**
    ```html
    <script src="//cdn.jsdelivr.net/npm/@markbattistella/docsify-charty@latest"></script>
    <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/@markbattistella/docsify-charty@latest/dist/docsify-charty.min.css">
    ```

    **locally**
    ```html
    <script src="docsify-charty.min.js"></script>
    <link rel="stylesheet" href="docsify-charty.min.css">
    ```

1. In docsify setup configure the plugin (see [configuration](#configuration) for setup). These are the global settings and affect all charts:

 ```js
 window.$docsify = {
   charty: {
     "theme": String,
     "mode":  String,
     "debug": Boolean
   }
 };
 ```

### npm install

Or if you're using `npm` to manage your dependencies:

```sh
npm i @markbattistella/docsify-charty
```

## Configuration

### Global settings

> Example: [index.html](https://github.com/markbattistella/docsify-charty-docs/blob/38573bff480009d5bbe7cdbbab12fe0474fa7407/index.html#L37-L40)

| Name    | Type      | Example   |  Description                              |
|---------|-----------|-----------|-------------------------------------------|
| `theme` | `String`  | "#EE5599" | Global theme for chart colours in HEX     |
| `mode`  | `String`  | "light"   | Accepts "dark" or "light"                 |
| `debug` | `Boolean` | false     | Console logs if charts aren't loading     |

### Per chart settings

| Name              | Accepts       | Description                              |
|-------------------|---------------|------------------------------------------|
| `title`           | `String`      | The title of the chart, displayed at the top. Leave blank if you want to hide it |
| `caption`         | `String`      | The sub-text of the chart, displayed under the title. Leave blank to hide it |
| `type`            | `String`      | The type of chart you want to display    |
| `options.theme`   | `String`      | Set an individual theme to this chart. It will override the global theme |
| `options.legend`  | `Boolean`     | Show the legend. Default `true`          |
| `options.labels`  | `Boolean`     | Show the chart labels. Default `true`    |
| `options.numbers` | `Boolean`     | Show the chart numbers. Default `true`   |
| `data.label`      | `String`      | Graphed data point label                 |
| `data.value`      | `Int / Array` | Graphed value that puts it on the render |
| `data.colour`     | `String`      | Override the global and theme with a specific colour |

### Markdown code

```js
```charty
{
  "title":   '',
  "caption": '',
  "type":    '',
  "options": {
    "theme":   '',
    "legend":  '',
    "labels":  '',
    "numbers": ''
  },
  "data": [
    {
      "label": '',
      "value": '',
      "colour": ''
    }
  ]
}
// close the code block
// can't show it here
```

## Types of charts

### Circular

#### pie

![docsify-charty: pie](images/demo/pie.jpg)

#### donut / doughnut

![docsify-charty: donut](images/demo/donut.jpg)

#### section / sectional

![docsify-charty: section](images/demo/section.jpg)

#### rings

![docsify-charty: rings](images/demo/rings.jpg)

### Area

#### radar

![docsify-charty: radar](images/demo/radar.jpg)

#### area

![docsify-charty: area](images/demo/area.jpg)

### Plot

#### scatter

![docsify-charty: scatter](images/demo/scatter.jpg)

#### bubble

![docsify-charty: bubble](images/demo/bubble.jpg)

#### line

![docsify-charty: line](images/demo/line.jpg)<br>
![docsify-charty: line](images/demo/line-stack.jpg)

### Bar / Column

### bar / bar-stack

![docsify-charty: line](images/demo/bar.jpg)<br>
![docsify-charty: line](images/demo/bar-stack.jpg)

### column / column-stack

![docsify-charty: line](images/demo/column.jpg)<br>
![docsify-charty: line](images/demo/column-stack.jpg)

### Rating

![docsify-charty: line](images/demo/rating.jpg)

## Contributing

1. Clone the repo:

    `git clone https://github.com/markbattistella/docsify-charty.git`

1. Create your feature branch:

    `git checkout -b my-feature`

1. Commit your changes:

    `git commit -am 'Add some feature'`

1. `Push` to the branch:

    `git push origin my-new-feature`

1. Submit the `pull` request

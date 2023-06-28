<div align="center">

# docsify-select

[![Release](https://img.shields.io/github/release/jthegedus/docsify-select.svg)](https://github.com/jthegedus/docsify-select/releases) [![NPM](https://img.shields.io/npm/v/docsify-select.svg)](https://www.npmjs.com/package/docsify-select) ![Lint and Unit Tests](https://github.com/jthegedus/docsify-select/workflows/Lint%20and%20Unit%20Tests/badge.svg)

A [docsify.js](https://docsify.js.org) plugin for variably rendering content with HTML select menus defined in markdown.

</div>

## Features

- Single select menus
- Multi select menus
- Complex multi-select menus with partial selections and default content
- Sync selection across menus with same id
- Automatically detect operating system and select options for menus with specific labels
- Compatible with [`docsify-tabs`](https://github.com/jhildenbiddle/docsify-tabs)

## Demo

### Single Select

<!-- select:start -->
<!-- select-menu-labels: Operating System -->

Common content can go here above the first heading in a section and be rendered for all selections!

#### --macOS--

macOS instructions here

#### --Linux--

Linux instructions here

<!-- select:end -->

### Multiple Select

<!-- select:start -->
<!-- select-menu-labels: Operating System,Shell -->

Common content can go here above the first heading in a section and be rendered for all selections!

### --macOS,Bash--

macOS + Bash

### --macOS,Fish--

macOS + Fish

### --macOS,ZSH--

macOS + ZSH

### --Linux,Bash--

Linux + Bash

### --Linux,Fish--

Linux + Fish

### --Linux,ZSH--

Linux + ZSH

<!-- select:end -->

## Support

- Create a [GitHub issue](https://github.com/jthegedus/docsify-select/issues) for bug reports, feature requests, or questions
- Add a ⭐️ [star on GitHub](https://github.com/jthegedus/docsify-select) or [![Twitter](https://icongr.am/simple/twitter.svg?colored&size=14) tweet](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjthegedus%2Fdocsify-select&hashtags=css,developers,frontend,javascript) to support the project!

## License

[MIT License](https://github.com/jthegedus/docsify-select/blob/main/LICENSE)
# Installation

1. Add the `docsify-select` plugin to your `index.html` after Docsify.

```html
<!-- docsify (latest v4.x.x)-->
<script src="https://cdn.jsdelivr.net/npm/docsify@4"></script>

<!-- docsify-select (latest v1.x.x) -->
<script src="https://cdn.jsdelivr.net/npm/docsify-select@1"></script>
```

2. Set your configuration options in the Docsify settings in your `index.html`. Below are the default values:

```
window.$docsify = {
  // ...
  select: {
    detectOperatingSystem: {
      enabled: false,
      menuId: "operating-system"
    },
    sync: false,
    theme: "classic"
  }
};
```

## Basics

**Select Block**

A select block is started with `<!-- select:start -->` and ends with `<!-- select:end -->`

**Select Menu Labels**

An HTML comment below the select block start: `<!-- select-menu-labels: MenuLabel1 -->`

!> If your page isn't loading you likely forgot a label

**Select Options**

Each markdown heading (`h1` through to `h6`) you wish to be a select option, must be surrounded on each side with 2 of the following symbols: `~` or `-`.

Eg: `# --macOS--` or `# ~~macOS~~`

The first Option is selected by default unless some other [configuration](configuration) comes into play.

### Example

```markdown
<!-- select:start -->
<!-- select-menu-labels: Operating System -->

Common content can go here above the first heading in a section and be rendered for all selections!

#### --macOS--

macOS instructions here

#### --Linux--

Linux instructions here

<!-- select:end -->
```

<!-- select:start -->
<!-- select-menu-labels: Operating System -->

Common content can go here above the first heading in a section and be rendered for all selections!

#### --macOS--

macOS instructions here

#### --Linux--

Linux instructions here

<!-- select:end -->

### Mulitple Select Menus

Menu Labels are just a comma-separated list.

Select Options must then also be a comma-separated list of the same length, where the position of the labels aligns with each option in each heading.

```markdown
<!-- select:start -->
<!-- select-menu-labels: Operating System,Installation Method -->

### --macOS,Git--

macOS + Git

### --macOS,Homebrew--

macOS + Homebrew

### --Linux,Git--

Linux + Git

<!-- select:end -->
```

<!-- select:start -->
<!-- select-menu-labels: Operating System,Installation Method -->

### --macOS,Git--

macOS + Git

### --macOS,Homebrew--

macOS + Homebrew

### --Linux,Git--

Linux + Git

<!-- select:end -->

### Partial Selections

The Multiple Select Menus example did not contain a selection of `Linux` & `Homebrew`. When this selection is made, no content is show.

Default content can be shown when no matching selection exists for the combinations of options. Use the heading `--Docsify Select Default--` to denote default content.

```markdown
<!-- select:start -->
<!-- select-menu-labels: Operating System,Installation Method -->

### --macOS,Git--

macOS + Git

### --macOS,Homebrew--

macOS + Homebrew

### --Linux,Git--

Linux + Git

### --Docsify Select Default--

No selection for this combination. Sorry!

<!-- select:end -->
```

<!-- select:start -->
<!-- select-menu-labels: Operating System,Installation Method -->

### --macOS,Git--

macOS + Git

### --macOS,Homebrew--

macOS + Homebrew

### --Linux,Git--

Linux + Git

### --Docsify Select Default--

No selection for this combination. Sorry!

<!-- select:end -->

## Complex Usage

You may have noticed the `sync` option at play on this page. See how that works over on the [configuration](configuration) page.

See the [usage](usage) page for more complex examples.

# hamburger
Module for the Wealthsimple hamburger (side-nav) menu.

# Installation

Dependencies:

- jQuery
- wealthsimple-fabric (soon to be open source)

Use bower to install it into your project:

    bower install --save git@github.com:wealthsimple/hamburger.git

Next, import the entry point hamburger SCSS  into your main SCSS file:

```scss
@import "/path/to/bower_components/wealthsimple-hamburger/hamburger";
```

Finally, include the `hamburger.js` file in your HTML:

```html
<script src="/path/to/bower_components/wealthsimple-hamburger/hamburger.js"></script>
```

# Configuration

There are several SCSS variables exposed for possible customization:

- `$hamburger-menu-z-index`: The z-index for the expanded menu. You'll want to set this higher than all other z-indexes.
- `$hamburger-button-close`: The path or absolute URL to `hamburger-button-close.svg` (included).
- `$hamburger-menu-width-small`: The width of the hamburger menu when expanded (small screens).
- `$hamburger-menu-width-medium`: The width of the hamburger menu when expanded (medium screens).
- `$hamburger-menu-width-large`: The width of the hamburger menu when expanded (large screens).

Note that widths can be in `px`, `%`, or other measures.

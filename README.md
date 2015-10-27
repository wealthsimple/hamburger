# hamburger
Module for the Wealthsimple hamburger (side-nav) menu.

# Installation

Dependencies:

- jQuery
- wealthsimple-fabric (soon to be open source)

Use bower to install it into your project:

    bower install --save git@github.com:wealthsimple/hamburger.git

# Configuration

There are several SCSS variables exposed for possible customization:

| Variable | Description |
--- | ---
| `$hamburger-menu-z-index` | The z-index for the hamburger menu. Usually you'll want to set this higher than all other z-indexes. |
| `$hamburger-menu-width` | The width of the hamburger menu when expanded. |
| `$hamburger-button-close` | The path or URL to the close SVG icon (included in this module). Example value would be `"/vendor/wealthsimple-hamburger/hamburger-button-close.svg"`

#Jekyll Bootstrap Carousel Landing Page

Build from [Jekyll Bootstrap Starter Template](https://github.com/thauvette/jekyll-bootstrap-starter-template)

Based on [Bootstrap Carousel Example](https://getbootstrap.com/docs/4.0/examples/carousel/)

# Jekyll Template

This is a template for Jekyll and Bootstrap 4 using Filament Group's [LoadJS](https://github.com/filamentgroup/loadJSFilament) and
[LoadCSS](https://github.com/filamentgroup/loadCSS) so you can get fast loading site.

I've built this using recommendations from google page speed insights. (Say what you want about that).

It includes jekyll-livereload for easy development.

[Here is a barebones version without Bootstrap](https://github.com/thauvette/jekyll-starter-template)

## Set up
* Run bundle
* Run jekyll serve

That's it.

## Adding JS and CSS
### CSS
To load additional css files use...

`<link rel='preload' href='/path/to/stylesheet.css' as='style' onload='this.rel="stylesheet"'>`
`<noscript><link rel='stylesheet' href='/path/to/stylesheet.css'></noscript>`

as per [LoadCSS](https://github.com/filamentgroup/loadCSS).

For custom styles, place all sass files in `assets/_sass` and use `@import 'filename'` with no extension in the `assets/css/main.scss`

### JS
For adding JS files see the instructions in `assets/js/loader.js`. It is designed to load files asynchronous and prevent render blocking.

## Recomendations

I like to put any important styles in the `_inludes/prority-css.html` file. This is mostly to prevent flashes of un-styled content.  

Use [Favicon Generator](https://realfavicongenerator.net/) to generate your own favicon. Replace all the files in the root folder with the ones it generates for you. The theme colour can be changed in the `_includes/head.html` file.

## Props and Thanks to...
* Filament Group's [LoadJS](https://github.com/filamentgroup/loadJSFilament) and
[LoadCSS](https://github.com/filamentgroup/loadCSS)
* penibelst's [HTML Compression](https://github.com/penibelst/jekyll-compress-html)
* [jpeg.io](https://www.jpeg.io/) for image compression
* [tiny png](https://tinypng.com/) for png compression
* [Favicon Generator](https://realfavicongenerator.net/)
[Bootstrap 4](https://getbootstrap.com/)

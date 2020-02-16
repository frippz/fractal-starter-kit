# Fractal Starter Kit 🛠

I made this starter kit for myself, but you are more than welcome to use it for your own projects.

## Requirements

This project has been built with Node.js 10.15.0. Lower versions might work just fine, but it’s untested. The plan is to have it running on current LTS versions, at the very least.

## Getting started

**1.** Install dependencies:

```bash
$ yarn
```

**2.** Start Fractal and the build tools

```bash
$ yarn start
```

**3.** Start building! 🔨

## How it’s built

The core principle is “less is more”. Components are organized according to the [Atomic Design](http://atomicdesign.bradfrost.com) principle. Fractal is as much out-of-the-box as possible. [Handlebars](https://handlebarsjs.com) for templating, [YAML](http://yaml.org) for data. Check out the official documentation for Fractal at [https://fractal.build](https://fractal.build) for anything else.

### Node/NPM

There’s no Webpack or Gulp here. I opted for basic NPM scripts in `package.json`. Running `yarn start` should be enough, but you might want to runt specific tasks for some reason. Just check out what’s in the `scripts` section of `package.json`.

### CSS

CSS is processed with [PostCSS](https://postcss.org). Since stylesheets can reside anywhere within `/compontents/`, bundling is performed with [postcss-import-ext-glob](https://www.npmjs.com/package/postcss-import-ext-glob) via `all.css` at the project root. The only thing being transpiled is basic `:root` based custom properties. Nothing else. Linting is done with [Stylelint](https://stylelint.io). [cssnano](https://cssnano.co) is used for minification with the `default` preset (color minification has been disabled, however).

### JavaScript

Again using [globcat](https://www.npmjs.com/package/globcat) to bundle any JavaScript files found in the `components` folder. No transpiling. Linting is done with [eslint](https://eslint.org).

### SVG sprite

I’ve added support for building an SVG sprite using [svg-sprite](https://github.com/jkphl/svg-sprite) and [svgo](https://github.com/svg/svgo). Source files are place in the `svg` folder in the root and `svg-sprite` should build them into a sprite that will be included in the `_preview.hbs` template. Check out the `_sprite` component if you’re curious. [There’s a good article on SVG sprites on CSS-Tricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/).

## Feedback

I would _absolutely love it_ if you have constructive feedback on how to improve this starter kit. Don’t hesitate to open up an issue or submit a PR if you do!

/**
 * Fractal configuration
 */
'use strict';

// Require the path module
const path = require('path');

// Require the Fractal module
const fractal = (module.exports = require('@frctl/fractal').create());

// Fractal port
fractal.web.set('server.port', 3333);

// Project title
fractal.set('project.title', 'Fractal Starter Kit (also, please change this 😘)');

// Tell Fractal where to look for components.
fractal.components.set('path', path.join(__dirname, 'components'));

// Tell Fractal where to look for documentation pages.
fractal.docs.set('path', path.join(__dirname, 'docs'));

// Tell the Fractal web preview plugin where to look for static assets.
fractal.web.set('static.path', path.join(__dirname, 'public'));

// Tell Fractal where to put static HTML build files
fractal.web.set('builder.dest', __dirname + '/build');

// Custom theme based on Mandelbrot
const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

const customTheme = mandelbrot({
  'skin': 'default',
  'format': 'yaml',
  'styles': [
    'default',
    '/custom-theme.css'
  ],
  'nav': [
    'docs',
    'components'
  ]
});

fractal.web.theme(customTheme);

// Custom component statuses
fractal.components.set('statuses', {
  prototype: {
    label: 'Prototype',
    description: 'Not ready for production. Do not implement.',
    color: '#ff3333'
  },
  wip: {
    label: 'WIP',
    description:
      'Work in progress. Development is still ongoing. Implement with caution.',
    color: '#ff9233'
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29CC29'
  },
  deprecated: {
    label: 'Deprecated',
    description:
      'Might still be used in production, but no new features should be based upon this.',
    color: '#555'
  }
});

fractal.components.set('default.status', 'wip');

// Fractal customisations
const hbs = require('@frctl/handlebars')({
  // Partials
  partials: {
    /**
     * Renders the status tag of a component or documentation page.
     *
     * @param {object} status The status object.
     *
     * @example
     * {{> renderStatusTag _self.status }}
     *
     * @returns {string} Returns markup that renders the status tag.
     */
    renderStatusTag: status => {
      return `<p class="Status Status-label" style="background-color: ${
        status.color
      }">${status.label}</p>`;
    }
  }
});

fractal.docs.engine(hbs);

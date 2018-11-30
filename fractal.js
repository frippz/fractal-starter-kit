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
  ]
});

fractal.web.theme(customTheme);

// Custom component statuses
fractal.components.set('statuses', {
  prototype: {
    label: 'Prototype',
    description: 'Do not implement.',
    color: '#ff3333'
  },
  wip: {
    label: 'WIP',
    description: 'Work in progress. Implement with caution.',
    color: '#ff9233'
  },
  ready: {
    label: 'Ready',
    description: 'Ready to implement.',
    color: '#29CC29'
  },
  deprecated: {
    label: 'Deprecated',
    description: 'No longer to be used in production.',
    color: '#555'
  }
});

/**
 * Copyright (c) 2015-present, Aviabird
 *
 * @providesModule site-constants
 *
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
const urlRoot = 'https://aviacommerce.org';
const version = '0.1.0';
const babelURL = '//unpkg.com/babel-standalone@6.26.0/babel.min.js';

export {urlRoot, version, babelURL};

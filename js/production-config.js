
// Copyright 2002-2013, University of Colorado Boulder

if ( window.has ) {
  window.has.add( 'assert.dot', function( global, document, anElement ) {
    'use strict';
    
    return false;
  } );
}

window.loadedDotConfig = true;

require.config( {
  deps: [ 'main', 'PHET_CORE/main' ],

  paths: {
    underscore: '../../sherpa/lodash-2.0.0',
    DOT: '.',
    PHET_CORE: '../common/phet-core/js',
    ASSERT: '../common/assert/js'
  },
  
  shim: {
    underscore: { exports: '_' }
  },

  urlArgs: new Date().getTime() // add cache buster query string to make browser refresh actually reload everything
} );

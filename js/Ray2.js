// Copyright 2013-2015, University of Colorado Boulder

/**
 * 2-dimensional ray
 *
 * @author Jonathan Olson <jonathan.olson@colorado.edu>
 */

define( function( require ) {
  'use strict';

  var dot = require( 'DOT/dot' );

  function Ray2( position, direction ) {
    this.position = position;
    this.direction = direction;

    assert && assert( Math.abs( direction.magnitude() - 1 ) < 0.01 );

    phetAllocation && phetAllocation( 'Ray2' );
  }

  dot.register( 'Ray2', Ray2 );

  Ray2.prototype = {
    constructor: Ray2,

    shifted: function( distance ) {
      return new Ray2( this.pointAtDistance( distance ), this.direction );
    },

    pointAtDistance: function( distance ) {
      return this.position.plus( this.direction.timesScalar( distance ) );
    },

    toString: function() {
      return this.position.toString() + ' => ' + this.direction.toString();
    }
  };

  return Ray2;
} );

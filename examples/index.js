/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var uniform = require( '@stdlib/random-base-uniform' );
var evalrationalf = require( './../lib' );

// Create two arrays of random coefficients...
var opts = {
	'dtype': 'float32'
};
var P = discreteUniform( 10, -100, 100, opts );
var Q = discreteUniform( 10, -100, 100, opts );

// Evaluate the rational function at random values...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
	v = uniform( 0.0, 100.0 );
	console.log( 'f(%d) = %d', v, evalrationalf( P, Q, v ) );
}

// Generate an `evalrationalf` function...
var rational = evalrationalf.factory( P, Q );
for ( i = 0; i < 100; i++ ) {
	v = uniform( -50.0, 50.0 );
	console.log( 'f(%d) = %d', v, rational( v ) );
}

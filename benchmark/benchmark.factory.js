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

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var uniform = require( '@stdlib/random-array-uniform' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var pkg = require( './../package.json' ).name;
var factory = require( './../lib/factory.js' );


// MAIN //

bench( pkg+'::create:factory', function benchmark( b ) {
	var opts;
	var P;
	var Q;
	var f;
	var i;

	opts = {
		'dtype': 'float32'
	};
	P = [
		uniform( 10, 0.0, 100.0, opts ),
		uniform( 10, 0.0, 100.0, opts ),
		uniform( 10, 0.0, 100.0, opts )
	];
	Q = [
		uniform( 10, 0.0, 100.0, opts ),
		uniform( 10, 0.0, 100.0, opts ),
		uniform( 10, 0.0, 100.0, opts )
	];
	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		f = factory( P[ i%P.length ], Q[ i%Q.length ] );
		if ( typeof f !== 'function' ) {
			b.fail( 'should return a function' );
		}
	}
	b.toc();
	if ( typeof f !== 'function' ) {
		b.fail( 'should return a function' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::evaluate:factory', function benchmark( b ) {
	var values;
	var opts;
	var P;
	var Q;
	var v;
	var f;
	var i;

	opts = {
		'dtype': 'float32'
	};
	P = uniform( 10, 0.0, 100.0, opts );
	Q = uniform( 10, 0.0, 100.0, opts );
	f = factory( P, Q );

	values = uniform( 10, 0.0, 100.0, opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = f( values[ i%values.length ] );
		if ( isnan( v ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnan( v ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

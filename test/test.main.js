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

/* eslint-disable max-len */

'use strict';

// MODULES //

var tape = require( 'tape' );
var Float32Array = require( '@stdlib/array-float32' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var evalrationalf = require( './../lib/main.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof evalrationalf, 'function', 'main export is a function' );
	t.end();
});

tape( 'if provided two empty coefficient arrays, the function always returns `NaN`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalrationalf( new Float32Array( [] ), new Float32Array( [] ), i );
		t.strictEqual( isnan( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided only one coefficient for both arrays, the function always returns the ratio of the two coefficients', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalrationalf( new Float32Array( [ 2.0 ] ), new Float32Array( [ 4.0 ] ), i );
		t.strictEqual( v, 0.5, 'returns expected value' );
	}
	t.end();
});

tape( 'if provided coefficient arrays of different lengths, the function always returns `NaN`', function test( t ) {
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		v = evalrationalf( new Float32Array( [ 2.0, 1.0, 2.0 ] ), new Float32Array( [ 3.0, 1.0 ] ), i );
		t.strictEqual( isnan( v ), true, 'returns expected value' );
		v = evalrationalf( new Float32Array( [ 0.5, 2.0 ] ), new Float32Array( [ 2.0, 3.0, 1.0 ] ), i );
		t.strictEqual( isnan( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'if the value at which to evaluate a rational function is `0`, the function returns the ratio of the first coefficients', function test( t ) {
	var v;

	v = evalrationalf( new Float32Array( [ 3.0, 2.0, 1.0 ] ), new Float32Array( [ 0.5, 2.0, 1.0 ] ), 0.0 );
	t.strictEqual( v, 6.0, 'returns expected value' );

	t.end();
});

tape( 'the function evaluates a rational function', function test( t ) {
	var P;
	var Q;
	var v;

	P = new Float32Array( [ 2.0, 3.0, 2.0 ] );
	Q = new Float32Array( [ 1.0, 0.0, 0.0 ] );
	v = evalrationalf( P, Q, 1.0 );
	t.strictEqual( v, 7.0, 'returns expected value' );

	P = new Float32Array( [ -6.0, -5.0 ] );
	Q = new Float32Array( [ 3.0, 0.5 ] );
	v = evalrationalf( P, Q, 6.0 );
	t.strictEqual( v, -6.0, 'returns expected value' );

	P = new Float32Array( [ -19.0, 7.0, -4.0, 6.0 ] );
	Q = new Float32Array( [ 4.0, 5.0, 2.0, 1.0 ] );
	v = evalrationalf( P, Q, 3.0 );
	t.strictEqual( v, 2.0, 'returns expected value' );

	P = new Float32Array( [ 4.0, 2.0, 1.0 ] );
	Q = new Float32Array( [ 2.0, 0.0, 0.0 ] );
	v = evalrationalf( P, Q, -2.0 );
	t.strictEqual( v, 2.0, 'returns expected value' );

	t.end();
});

tape( 'the function handles large `x` values', function test( t ) {
	var v1;
	var v2;
	var P;
	var Q;
	var x;
	var i;

	// 6x^5 + 5x^4 + 4x^3 + 3x^2 + 2x^1 + 1x^0
	P = new Float32Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );

	// 1x^5 + 2x^4 + 3x^3 + 4x^2 + 5x^1 + 6x^0
	Q = new Float32Array( [ 6.0, 5.0, 4.0, 3.0, 2.0, 1.0 ] );

	x = 1.0e100;
	for ( i = 0; i < 1000; i++ ) {
		x *= 2.0;
		v1 = evalrationalf( P, Q, x );
		v2 = evalrationalf( P, Q, -x );
		t.strictEqual( v1, v2, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns analytically incorrect results for certain coefficient and `x` combinations', function test( t ) {
	var P;
	var Q;
	var v;

	// Case 1: large negative `x`

	// 1x^2 + 1e38x^1 + 0x^0
	P = new Float32Array( [ 0.0, 1.0e38, 1.0 ] );

	// 0x^2 + 0x^2 + 1x^0
	Q = new Float32Array( [ 1.0, 0.0, 0.0 ] );

	// (-1e38)^2 + (1e38)(-1e38) = +inf - inf => indeterminate => NaN
	v = evalrationalf( P, Q, -1.0e38 );
	t.notOk( isnan( v ), 'returns expected value' );

	// Case 2: large positive `x`

	// 1x^2 - 1e38x^1 + 0x^0
	P = new Float32Array( [ 0.0, -1.0e38, 1.0 ] );

	// 0x^2 + 0x^2 + 1x^0
	Q = new Float32Array( [ 1.0, 0.0, 0.0 ] );

	// (1e38)^2 - (1e38)(1e38) = +inf - inf => indeterminate => NaN
	v = evalrationalf( P, Q, 1.0e38 );
	t.notOk( isnan( v ), 'returns expected value' );

	t.end();
});

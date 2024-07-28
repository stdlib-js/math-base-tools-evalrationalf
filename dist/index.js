"use strict";var l=function(o,a){return function(){return a||o((a={exports:{}}).exports,a),a.exports}};var s=l(function(b,v){"use strict";var n=require("@stdlib/number-float64-base-to-float32"),g=require("@stdlib/math-base-special-absf");function h(o,a,r){var i,t,e,f;if(i=o.length,i===0)return NaN;if(i!==a.length)return NaN;if(r===0||i===1)return n(o[0]/a[0]);if(g(r)<=1)for(t=o[i-1],e=a[i-1],f=i-2;f>=0;--f)t=n(t*r),e=n(e*r),t=n(t+o[f]),e=n(e+a[f]);else for(r=n(1/r),t=o[0],e=a[0],f=1;f<i;++f)t=n(t*r),e=n(e*r),t=n(t+o[f]),e=n(e+a[f]);return n(t/e)}v.exports=h});var c=l(function(d,_){"use strict";var u=require("@stdlib/number-float64-base-to-float32"),y=require("@stdlib/function-ctor"),p=s();function F(o,a){var r,i,t,e,f;if(o.length>500)return q;if(r="return function evalrationalf(x){",t=o.length,r+="var ax,s1,s2;",t===0)r+="return NaN;";else if(t!==a.length)r+="return NaN;";else if(t===1)i=u(o[0]/a[0]),r+="return "+i+";";else{for(i=u(o[0]/a[0]),r+="if(x===0.0){return "+i+";}",r+="if(x<0.0){ax=-x;}else{ax=x;}",r+="if(ax<=1.0){",r+="s1 = f64_to_f32("+o[0],e=t-1,f=1;f<t;f++)r+="+f64_to_f32(x*",f<e&&(r+="("),r+=o[f];for(f=0;f<2*e;f++)r+=")";for(r+=";",r+="s2 = f64_to_f32("+a[0],e=t-1,f=1;f<t;f++)r+="+f64_to_f32(x*",f<e&&(r+="("),r+=a[f];for(f=0;f<2*e;f++)r+=")";for(r+=";",r+="}else{",r+="x = f64_to_f32(1.0/x);",e=t-1,r+="s1 = f64_to_f32("+o[e],f=e-1;f>=0;f--)r+="+f64_to_f32(x*",f>0&&(r+="("),r+=o[f];for(f=0;f<2*e;f++)r+=")";for(r+=";",e=t-1,r+="s2 = f64_to_f32("+a[e],f=e-1;f>=0;f--)r+="+f64_to_f32(x*",f>0&&(r+="("),r+=a[f];for(f=0;f<2*e;f++)r+=")";r+=";",r+="}",r+="return f64_to_f32(s1/s2);"}return r+="}",r+="//# sourceURL=evalrationalf.factory.js",new y("f64_to_f32",r)(u);function q(N){return p(o,a,N)}}_.exports=F});var m=require("@stdlib/utils-define-nonenumerable-read-only-property"),x=s(),R=c();m(x,"factory",R);module.exports=x;
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
*
*
* ## Notice
*
* The original C++ code and copyright notice are from the [Boost library]{@link http://www.boost.org/doc/libs/1_60_0/boost/math/tools/rational.hpp}. The implementation has been modified for JavaScript.
*
* ```text
* (C) Copyright John Maddock 2006.
*
* Use, modification and distribution are subject to the
* Boost Software License, Version 1.0. (See accompanying file
* LICENSE or copy at http://www.boost.org/LICENSE_1_0.txt)
* ```
*/
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
//# sourceMappingURL=index.js.map

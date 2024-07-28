// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-absf@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/function-ctor@v0.2.2-esm/index.mjs";function n(t,f,n){var o,s,i,a;if(0===(o=t.length))return NaN;if(o!==f.length)return NaN;if(0===n||1===o)return e(t[0]/f[0]);if(r(n)<=1)for(s=t[o-1],i=f[o-1],a=o-2;a>=0;--a)s=e(s*n),i=e(i*n),s=e(s+t[a]),i=e(i+f[a]);else for(n=e(1/n),s=t[0],i=f[0],a=1;a<o;++a)s=e(s*n),i=e(i*n),s=e(s+t[a]),i=e(i+f[a]);return e(s/i)}function o(t,r){var o,s,i,a;if(t.length>500)return function(e){return n(t,r,e)};if(o="return function evalrationalf(x){",o+="var ax,s1,s2;",0===(s=t.length))o+="return NaN;";else if(s!==r.length)o+="return NaN;";else if(1===s)o+="return "+e(t[0]/r[0])+";";else{for(o+="if(x===0.0){return "+e(t[0]/r[0])+";}",o+="if(x<0.0){ax=-x;}else{ax=x;}",o+="if(ax<=1.0){",o+="s1 = f64_to_f32("+t[0],i=s-1,a=1;a<s;a++)o+="+f64_to_f32(x*",a<i&&(o+="("),o+=t[a];for(a=0;a<2*i;a++)o+=")";for(o+=";",o+="s2 = f64_to_f32("+r[0],i=s-1,a=1;a<s;a++)o+="+f64_to_f32(x*",a<i&&(o+="("),o+=r[a];for(a=0;a<2*i;a++)o+=")";for(o+=";",o+="}else{",o+="x = f64_to_f32(1.0/x);",o+="s1 = f64_to_f32("+t[i=s-1],a=i-1;a>=0;a--)o+="+f64_to_f32(x*",a>0&&(o+="("),o+=t[a];for(a=0;a<2*i;a++)o+=")";for(o+=";",o+="s2 = f64_to_f32("+r[i=s-1],a=i-1;a>=0;a--)o+="+f64_to_f32(x*",a>0&&(o+="("),o+=r[a];for(a=0;a<2*i;a++)o+=")";o+=";",o+="}",o+="return f64_to_f32(s1/s2);"}return o+="}",new f("f64_to_f32",o+="//# sourceURL=evalrationalf.factory.js")(e)}t(n,"factory",o);export{n as default,o as factory};
//# sourceMappingURL=index.mjs.map
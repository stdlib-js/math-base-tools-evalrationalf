// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function i(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function n(e,r,t){var n=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(n=!0,e=e.substr(1)),e=t?e+i(a):i(a)+e,n&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,i,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,c=parseInt(i,10),!isFinite(c)){if(!t(i))throw new Error("invalid integer. Value: "+i);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(i=(-c).toString(r),e.precision&&(i=n(i,e.precision,e.padRight)),i="-"+i):(i=c.toString(r),c||e.precision?e.precision&&(i=n(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===o.call(e.specifier)?o.call(i):a.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,u=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":f(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=p.call(i,w,"$1e"),i=p.call(i,b,"e"),i=p.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=p.call(i,u,"e+0$1"),i=p.call(i,g,"e-0$1"),e.alternate&&(i=p.call(i,d,"$1."),i=p.call(i,h,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===l.call(e.specifier)?l.call(i):s.call(i)}function _(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var m=String.fromCharCode,x=isNaN,S=Array.isArray;function E(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function k(e){var r,t,i,a,o,f,s,l,p,u,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(f="",s=1,l=0;l<e.length;l++)if("string"==typeof(i=e[l]))f+=i;else{if(r=void 0!==i.precision,!(i=E(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+i+"`.");for(i.mapping&&(s=i.mapping),t=i.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[s],10),s+=1,x(i.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[s],10),s+=1,x(i.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[s],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=c(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!x(i.arg)){if((o=parseInt(i.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=x(o)?String(i.arg):m(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=v(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=n(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=(u=i.arg,g=i.width,d=i.padRight,h=void 0,(h=g-u.length)<0?u:u=d?u+_(h):_(h)+u)),f+=i.arg||"",s+=1}return f}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,i,n;for(t=[],n=0,i=F.exec(e);i;)(r=e.slice(n,F.lastIndex-i[0].length)).length&&t.push(r),t.push(j(i)),n=F.lastIndex,i=F.exec(e);return(r=e.slice(n)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return k.apply(null,r)}var I,N=Object.prototype,V=N.toString,$=N.__defineGetter__,O=N.__defineSetter__,C=N.__lookupGetter__,P=N.__lookupSetter__;I=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var i,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((n="value"in t)&&(C.call(e,r)||P.call(e,r)?(i=e.__proto__,e.__proto__=N,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),a="get"in t,o="set"in t,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&O&&O.call(e,r,t.set),e};var R,Z=I,G="function"==typeof Math.fround?Math.fround:null,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,W=Object.prototype.hasOwnProperty,U="function"==typeof Symbol?Symbol:void 0,X="function"==typeof U?U.toStringTag:"";R=L&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i,n,a;if(null==e)return M.call(e);t=e[X],a=X,r=null!=(n=e)&&W.call(n,a);try{e[X]=void 0}catch(r){return M.call(e)}return i=M.call(e),r?e[X]=t:delete e[X],i}:function(e){return M.call(e)};var z,Y=R,q="function"==typeof Float32Array,B=Number.POSITIVE_INFINITY,D="function"==typeof Float32Array?Float32Array:null,H="function"==typeof Float32Array?Float32Array:void 0;z=function(){var e,r,t;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,5e40]),t=r,e=(q&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===B}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")};var J=new z(1),K="function"==typeof G?G:function(e){return J[0]=e,J[0]};function Q(e,r,t){var i,n,a,o;if(0===(i=e.length))return NaN;if(i!==r.length)return NaN;if(0===t||1===i)return K(e[0]/r[0]);if(function(e){return Math.abs(e)}(t)<=1)for(n=e[i-1],a=r[i-1],o=i-2;o>=0;--o)n=K(n*t),a=K(a*t),n=K(n+e[o]),a=K(a+r[o]);else for(t=K(1/t),n=e[0],a=r[0],o=1;o<i;++o)n=K(n*t),a=K(a*t),n=K(n+e[o]),a=K(a+r[o]);return K(n/a)}var ee=Function;return Z(Q,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r){var t,i,n,a;if(e.length>500)return function(t){return Q(e,r,t)};if(t="return function evalrationalf(x){",t+="var ax,s1,s2;",0===(i=e.length))t+="return NaN;";else if(i!==r.length)t+="return NaN;";else if(1===i)t+="return "+K(e[0]/r[0])+";";else{for(t+="if(x===0.0){return "+K(e[0]/r[0])+";}",t+="if(x<0.0){ax=-x;}else{ax=x;}",t+="if(ax<=1.0){",t+="s1 = f64_to_f32("+e[0],n=i-1,a=1;a<i;a++)t+="+f64_to_f32(x*",a<n&&(t+="("),t+=e[a];for(a=0;a<2*n;a++)t+=")";for(t+=";",t+="s2 = f64_to_f32("+r[0],n=i-1,a=1;a<i;a++)t+="+f64_to_f32(x*",a<n&&(t+="("),t+=r[a];for(a=0;a<2*n;a++)t+=")";for(t+=";",t+="}else{",t+="x = f64_to_f32(1.0/x);",t+="s1 = f64_to_f32("+e[n=i-1],a=n-1;a>=0;a--)t+="+f64_to_f32(x*",a>0&&(t+="("),t+=e[a];for(a=0;a<2*n;a++)t+=")";for(t+=";",t+="s2 = f64_to_f32("+r[n=i-1],a=n-1;a>=0;a--)t+="+f64_to_f32(x*",a>0&&(t+="("),t+=r[a];for(a=0;a<2*n;a++)t+=")";t+=";",t+="}",t+="return f64_to_f32(s1/s2);"}return t+="}",new ee("f64_to_f32",t+="//# sourceURL=evalrationalf.factory.js")(K)}}),Q},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).evalrationalf=r();
//# sourceMappingURL=browser.js.map

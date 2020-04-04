
var Module = (function() {
  var _scriptDir = import.meta.url;
  
  return (
function(Module) {
  Module = Module || {};

var b;
b || (b = typeof Module !== 'undefined' ? Module : {});
var aa = {}, f;
for (f in b) {
  b.hasOwnProperty(f) && (aa[f] = b[f]);
}
var ba = "./this.program";
if (b.ENVIRONMENT) {
  throw Error("Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -s ENVIRONMENT=web or -s ENVIRONMENT=node)");
}
var l = "";
document.currentScript && (l = document.currentScript.src);
_scriptDir && (l = _scriptDir);
0 !== l.indexOf("blob:") ? l = l.substr(0, l.lastIndexOf("/") + 1) : l = "";
if ("object" !== typeof window && "function" !== typeof importScripts) {
  throw Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");
}
var ca = b.print || console.log.bind(console), q = b.printErr || console.warn.bind(console);
for (f in aa) {
  aa.hasOwnProperty(f) && (b[f] = aa[f]);
}
aa = null;
Object.getOwnPropertyDescriptor(b, "arguments") || Object.defineProperty(b, "arguments", {configurable:!0, get:function() {
  v("Module.arguments has been replaced with plain arguments_");
}});
b.thisProgram && (ba = b.thisProgram);
Object.getOwnPropertyDescriptor(b, "thisProgram") || Object.defineProperty(b, "thisProgram", {configurable:!0, get:function() {
  v("Module.thisProgram has been replaced with plain thisProgram");
}});
Object.getOwnPropertyDescriptor(b, "quit") || Object.defineProperty(b, "quit", {configurable:!0, get:function() {
  v("Module.quit has been replaced with plain quit_");
}});
x("undefined" === typeof b.memoryInitializerPrefixURL, "Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead");
x("undefined" === typeof b.pthreadMainPrefixURL, "Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead");
x("undefined" === typeof b.cdInitializerPrefixURL, "Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead");
x("undefined" === typeof b.filePackagePrefixURL, "Module.filePackagePrefixURL option was removed, use Module.locateFile instead");
x("undefined" === typeof b.read, "Module.read option was removed (modify read_ in JS)");
x("undefined" === typeof b.readAsync, "Module.readAsync option was removed (modify readAsync in JS)");
x("undefined" === typeof b.readBinary, "Module.readBinary option was removed (modify readBinary in JS)");
x("undefined" === typeof b.setWindowTitle, "Module.setWindowTitle option was removed (modify setWindowTitle in JS)");
x("undefined" === typeof b.TOTAL_MEMORY, "Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY");
Object.getOwnPropertyDescriptor(b, "read") || Object.defineProperty(b, "read", {configurable:!0, get:function() {
  v("Module.read has been replaced with plain read_");
}});
Object.getOwnPropertyDescriptor(b, "readAsync") || Object.defineProperty(b, "readAsync", {configurable:!0, get:function() {
  v("Module.readAsync has been replaced with plain readAsync");
}});
Object.getOwnPropertyDescriptor(b, "readBinary") || Object.defineProperty(b, "readBinary", {configurable:!0, get:function() {
  v("Module.readBinary has been replaced with plain readBinary");
}});
var da;
da = function() {
  v("cannot use the stack before compiled code is ready to run, and has provided stack access");
};
function ea(a) {
  fa || (fa = {});
  fa[a] || (fa[a] = 1, q(a));
}
var fa, ha;
b.wasmBinary && (ha = b.wasmBinary);
Object.getOwnPropertyDescriptor(b, "wasmBinary") || Object.defineProperty(b, "wasmBinary", {configurable:!0, get:function() {
  v("Module.wasmBinary has been replaced with plain wasmBinary");
}});
var noExitRuntime;
b.noExitRuntime && (noExitRuntime = b.noExitRuntime);
Object.getOwnPropertyDescriptor(b, "noExitRuntime") || Object.defineProperty(b, "noExitRuntime", {configurable:!0, get:function() {
  v("Module.noExitRuntime has been replaced with plain noExitRuntime");
}});
"object" !== typeof WebAssembly && v("No WebAssembly support found. Build with -s WASM=0 to target JavaScript instead.");
var ia, ja = new WebAssembly.Table({initial:354, maximum:354, element:"anyfunc"}), ka = !1;
function x(a, c) {
  a || v("Assertion failed: " + c);
}
var la = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function ma(a, c, d) {
  var e = c + d;
  for (d = c; a[d] && !(d >= e);) {
    ++d;
  }
  if (16 < d - c && a.subarray && la) {
    return la.decode(a.subarray(c, d));
  }
  for (e = ""; c < d;) {
    var g = a[c++];
    if (g & 128) {
      var h = a[c++] & 63;
      if (192 == (g & 224)) {
        e += String.fromCharCode((g & 31) << 6 | h);
      } else {
        var m = a[c++] & 63;
        224 == (g & 240) ? g = (g & 15) << 12 | h << 6 | m : (240 != (g & 248) && ea("Invalid UTF-8 leading byte 0x" + g.toString(16) + " encountered when deserializing a UTF-8 string on the asm.js/wasm heap to a JS string!"), g = (g & 7) << 18 | h << 12 | m << 6 | a[c++] & 63);
        65536 > g ? e += String.fromCharCode(g) : (g -= 65536, e += String.fromCharCode(55296 | g >> 10, 56320 | g & 1023));
      }
    } else {
      e += String.fromCharCode(g);
    }
  }
  return e;
}
function na(a) {
  return a ? ma(z, a, void 0) : "";
}
function oa(a, c, d, e) {
  if (!(0 < e)) {
    return 0;
  }
  var g = d;
  e = d + e - 1;
  for (var h = 0; h < a.length; ++h) {
    var m = a.charCodeAt(h);
    if (55296 <= m && 57343 >= m) {
      var n = a.charCodeAt(++h);
      m = 65536 + ((m & 1023) << 10) | n & 1023;
    }
    if (127 >= m) {
      if (d >= e) {
        break;
      }
      c[d++] = m;
    } else {
      if (2047 >= m) {
        if (d + 1 >= e) {
          break;
        }
        c[d++] = 192 | m >> 6;
      } else {
        if (65535 >= m) {
          if (d + 2 >= e) {
            break;
          }
          c[d++] = 224 | m >> 12;
        } else {
          if (d + 3 >= e) {
            break;
          }
          2097152 <= m && ea("Invalid Unicode code point 0x" + m.toString(16) + " encountered when serializing a JS string to an UTF-8 string on the asm.js/wasm heap! (Valid unicode code points should be in range 0-0x1FFFFF).");
          c[d++] = 240 | m >> 18;
          c[d++] = 128 | m >> 12 & 63;
        }
        c[d++] = 128 | m >> 6 & 63;
      }
      c[d++] = 128 | m & 63;
    }
  }
  c[d] = 0;
  return d - g;
}
function pa(a, c, d) {
  x("number" == typeof d, "stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  oa(a, z, c, d);
}
function qa(a) {
  for (var c = 0, d = 0; d < a.length; ++d) {
    var e = a.charCodeAt(d);
    55296 <= e && 57343 >= e && (e = 65536 + ((e & 1023) << 10) | a.charCodeAt(++d) & 1023);
    127 >= e ? ++c : c = 2047 >= e ? c + 2 : 65535 >= e ? c + 3 : c + 4;
  }
  return c;
}
var ra = "undefined" !== typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function sa(a) {
  x(0 == a % 2, "Pointer passed to UTF16ToString must be aligned to two bytes!");
  var c;
  for (c = a >> 1; C[c];) {
    ++c;
  }
  c <<= 1;
  if (32 < c - a && ra) {
    return ra.decode(z.subarray(a, c));
  }
  c = 0;
  for (var d = "";;) {
    var e = C[a + 2 * c >> 1];
    if (0 == e) {
      return d;
    }
    ++c;
    d += String.fromCharCode(e);
  }
}
function ta(a, c, d) {
  x(0 == c % 2, "Pointer passed to stringToUTF16 must be aligned to two bytes!");
  x("number" == typeof d, "stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === d && (d = 2147483647);
  if (2 > d) {
    return 0;
  }
  d -= 2;
  var e = c;
  d = d < 2 * a.length ? d / 2 : a.length;
  for (var g = 0; g < d; ++g) {
    C[c >> 1] = a.charCodeAt(g), c += 2;
  }
  C[c >> 1] = 0;
  return c - e;
}
function ua(a) {
  return 2 * a.length;
}
function va(a) {
  x(0 == a % 4, "Pointer passed to UTF32ToString must be aligned to four bytes!");
  for (var c = 0, d = "";;) {
    var e = D[a + 4 * c >> 2];
    if (0 == e) {
      return d;
    }
    ++c;
    65536 <= e ? (e -= 65536, d += String.fromCharCode(55296 | e >> 10, 56320 | e & 1023)) : d += String.fromCharCode(e);
  }
}
function wa(a, c, d) {
  x(0 == c % 4, "Pointer passed to stringToUTF32 must be aligned to four bytes!");
  x("number" == typeof d, "stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!");
  void 0 === d && (d = 2147483647);
  if (4 > d) {
    return 0;
  }
  var e = c;
  d = e + d - 4;
  for (var g = 0; g < a.length; ++g) {
    var h = a.charCodeAt(g);
    if (55296 <= h && 57343 >= h) {
      var m = a.charCodeAt(++g);
      h = 65536 + ((h & 1023) << 10) | m & 1023;
    }
    D[c >> 2] = h;
    c += 4;
    if (c + 4 > d) {
      break;
    }
  }
  D[c >> 2] = 0;
  return c - e;
}
function xa(a) {
  for (var c = 0, d = 0; d < a.length; ++d) {
    var e = a.charCodeAt(d);
    55296 <= e && 57343 >= e && ++d;
    c += 4;
  }
  return c;
}
function ya(a, c) {
  x(0 <= a.length, "writeArrayToMemory array must have a length (should be an array or typed array)");
  E.set(a, c);
}
var za, E, z, C, Aa, D, F, Ba, Ca;
x(!0, "stack must start aligned");
x(!0, "heap must start aligned");
b.TOTAL_STACK && x(5242880 === b.TOTAL_STACK, "the stack size can no longer be determined at runtime");
var G = b.INITIAL_MEMORY || 16777216;
Object.getOwnPropertyDescriptor(b, "INITIAL_MEMORY") || Object.defineProperty(b, "INITIAL_MEMORY", {configurable:!0, get:function() {
  v("Module.INITIAL_MEMORY has been replaced with plain INITIAL_INITIAL_MEMORY");
}});
x(5242880 <= G, "INITIAL_MEMORY should be larger than TOTAL_STACK, was " + G + "! (TOTAL_STACK=5242880)");
x("undefined" !== typeof Int32Array && "undefined" !== typeof Float64Array && void 0 !== Int32Array.prototype.subarray && void 0 !== Int32Array.prototype.set, "JS engine does not provide full typed array support");
b.wasmMemory ? ia = b.wasmMemory : ia = new WebAssembly.Memory({initial:G / 65536, maximum:G / 65536});
ia && (za = ia.buffer);
G = za.byteLength;
x(0 === G % 65536);
var H = za;
za = H;
b.HEAP8 = E = new Int8Array(H);
b.HEAP16 = C = new Int16Array(H);
b.HEAP32 = D = new Int32Array(H);
b.HEAPU8 = z = new Uint8Array(H);
b.HEAPU16 = Aa = new Uint16Array(H);
b.HEAPU32 = F = new Uint32Array(H);
b.HEAPF32 = Ba = new Float32Array(H);
b.HEAPF64 = Ca = new Float64Array(H);
D[5772] = 5266128;
function Da() {
  x(!0);
  F[5813] = 34821223;
  F[5814] = 2310721022;
  D[0] = 1668509029;
}
function Ea() {
  var a = F[5813], c = F[5814];
  34821223 == a && 2310721022 == c || v("Stack overflow! Stack cookie has been overwritten, expected hex dwords 0x89BACDFE and 0x2135467, but received 0x" + c.toString(16) + " " + a.toString(16));
  1668509029 !== D[0] && v("Runtime error: The application has corrupted its heap memory area (address zero)!");
}
var Fa = new Int16Array(1), Ga = new Int8Array(Fa.buffer);
Fa[0] = 25459;
if (115 !== Ga[0] || 99 !== Ga[1]) {
  throw "Runtime error: expected the system to be little-endian!";
}
function Ha(a) {
  for (; 0 < a.length;) {
    var c = a.shift();
    if ("function" == typeof c) {
      c();
    } else {
      var d = c.aa;
      "number" === typeof d ? void 0 === c.J ? b.dynCall_v(d) : b.dynCall_vi(d, c.J) : d(void 0 === c.J ? null : c.J);
    }
  }
}
var Ia = [], Ja = [], Ka = [], La = [], Ma = [], I = !1;
function Na() {
  var a = b.preRun.shift();
  Ia.unshift(a);
}
x(Math.imul, "This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
x(Math.fround, "This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
x(Math.clz32, "This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
x(Math.trunc, "This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill");
var Oa = Math.abs, Pa = Math.ceil, Qa = Math.floor, Ra = Math.min, J = 0, K = null, Sa = null, Ta = {};
function Ua() {
  J++;
  b.monitorRunDependencies && b.monitorRunDependencies(J);
  x(!Ta["wasm-instantiate"]);
  Ta["wasm-instantiate"] = 1;
  null === K && "undefined" !== typeof setInterval && (K = setInterval(function() {
    if (ka) {
      clearInterval(K), K = null;
    } else {
      var a = !1, c;
      for (c in Ta) {
        a || (a = !0, q("still waiting on run dependencies:")), q("dependency: " + c);
      }
      a && q("(end of list)");
    }
  }, 10000));
}
b.preloadedImages = {};
b.preloadedAudios = {};
function v(a) {
  if (b.onAbort) {
    b.onAbort(a);
  }
  ca(a);
  q(a);
  ka = !0;
  a = "abort(" + a + ") at ";
  a: {
    var c = Error();
    if (!c.stack) {
      try {
        throw Error();
      } catch (d) {
        c = d;
      }
      if (!c.stack) {
        c = "(no stack trace available)";
        break a;
      }
    }
    c = c.stack.toString();
  }
  b.extraStackTrace && (c += "\n" + b.extraStackTrace());
  c = Va(c);
  throw new WebAssembly.RuntimeError(a + c);
}
function Wa() {
  var a = L;
  return String.prototype.startsWith ? a.startsWith("data:application/octet-stream;base64,") : 0 === a.indexOf("data:application/octet-stream;base64,");
}
var L = "hello.wasm";
if (!Wa()) {
  var Xa = L;
  L = b.locateFile ? b.locateFile(Xa, l) : l + Xa;
}
function Ya() {
  try {
    if (ha) {
      return new Uint8Array(ha);
    }
    throw "both async and sync fetching of the wasm failed";
  } catch (a) {
    v(a);
  }
}
function Za() {
  return ha || "function" !== typeof fetch ? new Promise(function(a) {
    a(Ya());
  }) : fetch(L, {credentials:"same-origin"}).then(function(a) {
    if (!a.ok) {
      throw "failed to load wasm binary file at '" + L + "'";
    }
    return a.arrayBuffer();
  }).catch(function() {
    return Ya();
  });
}
var M, $a;
Ja.push({aa:function() {
  ab();
}});
function Va(a) {
  return a.replace(/\b_Z[\w\d_]+/g, function(c) {
    ea("warning: build with  -s DEMANGLE_SUPPORT=1  to link in libcxxabi demangling");
    return c === c ? c : c + " [" + c + "]";
  });
}
function bb(a, c) {
  for (var d = 0, e = a.length - 1; 0 <= e; e--) {
    var g = a[e];
    "." === g ? a.splice(e, 1) : ".." === g ? (a.splice(e, 1), d++) : d && (a.splice(e, 1), d--);
  }
  if (c) {
    for (; d; d--) {
      a.unshift("..");
    }
  }
  return a;
}
function cb(a) {
  var c = "/" === a.charAt(0), d = "/" === a.substr(-1);
  (a = bb(a.split("/").filter(function(e) {
    return !!e;
  }), !c).join("/")) || c || (a = ".");
  a && d && (a += "/");
  return (c ? "/" : "") + a;
}
function db(a) {
  var c = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(a).slice(1);
  a = c[0];
  c = c[1];
  if (!a && !c) {
    return ".";
  }
  c && (c = c.substr(0, c.length - 1));
  return a + c;
}
function eb(a) {
  if ("/" === a) {
    return "/";
  }
  var c = a.lastIndexOf("/");
  return -1 === c ? a : a.substr(c + 1);
}
function fb() {
  for (var a = "", c = !1, d = arguments.length - 1; -1 <= d && !c; d--) {
    c = 0 <= d ? arguments[d] : "/";
    if ("string" !== typeof c) {
      throw new TypeError("Arguments to path.resolve must be strings");
    }
    if (!c) {
      return "";
    }
    a = c + "/" + a;
    c = "/" === c.charAt(0);
  }
  a = bb(a.split("/").filter(function(e) {
    return !!e;
  }), !c).join("/");
  return (c ? "/" : "") + a || ".";
}
var gb = [];
function hb(a, c) {
  gb[a] = {input:[], h:[], C:c};
  ib(a, jb);
}
var jb = {open:function(a) {
  var c = gb[a.node.N];
  if (!c) {
    throw new N(43);
  }
  a.l = c;
  a.seekable = !1;
}, close:function(a) {
  a.l.C.flush(a.l);
}, flush:function(a) {
  a.l.C.flush(a.l);
}, read:function(a, c, d, e) {
  if (!a.l || !a.l.C.ba) {
    throw new N(60);
  }
  for (var g = 0, h = 0; h < e; h++) {
    try {
      var m = a.l.C.ba(a.l);
    } catch (n) {
      throw new N(29);
    }
    if (void 0 === m && 0 === g) {
      throw new N(6);
    }
    if (null === m || void 0 === m) {
      break;
    }
    g++;
    c[d + h] = m;
  }
  g && (a.node.timestamp = Date.now());
  return g;
}, write:function(a, c, d, e) {
  if (!a.l || !a.l.C.U) {
    throw new N(60);
  }
  try {
    for (var g = 0; g < e; g++) {
      a.l.C.U(a.l, c[d + g]);
    }
  } catch (h) {
    throw new N(29);
  }
  e && (a.node.timestamp = Date.now());
  return g;
}}, lb = {ba:function(a) {
  if (!a.input.length) {
    var c = null;
    "undefined" != typeof window && "function" == typeof window.prompt ? (c = window.prompt("Input: "), null !== c && (c += "\n")) : "function" == typeof readline && (c = readline(), null !== c && (c += "\n"));
    if (!c) {
      return null;
    }
    a.input = kb(c, !0);
  }
  return a.input.shift();
}, U:function(a, c) {
  null === c || 10 === c ? (ca(ma(a.h, 0)), a.h = []) : 0 != c && a.h.push(c);
}, flush:function(a) {
  a.h && 0 < a.h.length && (ca(ma(a.h, 0)), a.h = []);
}}, mb = {U:function(a, c) {
  null === c || 10 === c ? (q(ma(a.h, 0)), a.h = []) : 0 != c && a.h.push(c);
}, flush:function(a) {
  a.h && 0 < a.h.length && (q(ma(a.h, 0)), a.h = []);
}}, P = {m:null, u:function() {
  return P.createNode(null, "/", 16895, 0);
}, createNode:function(a, c, d, e) {
  if (24576 === (d & 61440) || 4096 === (d & 61440)) {
    throw new N(63);
  }
  P.m || (P.m = {dir:{node:{A:P.c.A, s:P.c.s, G:P.c.G, K:P.c.K, fa:P.c.fa, ha:P.c.ha, ga:P.c.ga, ea:P.c.ea, O:P.c.O}, stream:{B:P.f.B}}, file:{node:{A:P.c.A, s:P.c.s}, stream:{B:P.f.B, read:P.f.read, write:P.f.write, W:P.f.W, ca:P.f.ca, M:P.f.M}}, link:{node:{A:P.c.A, s:P.c.s, H:P.c.H}, stream:{}}, X:{node:{A:P.c.A, s:P.c.s}, stream:nb}});
  d = ob(a, c, d, e);
  16384 === (d.mode & 61440) ? (d.c = P.m.dir.node, d.f = P.m.dir.stream, d.b = {}) : 32768 === (d.mode & 61440) ? (d.c = P.m.file.node, d.f = P.m.file.stream, d.g = 0, d.b = null) : 40960 === (d.mode & 61440) ? (d.c = P.m.link.node, d.f = P.m.link.stream) : 8192 === (d.mode & 61440) && (d.c = P.m.X.node, d.f = P.m.X.stream);
  d.timestamp = Date.now();
  a && (a.b[c] = d);
  return d;
}, Rc:function(a) {
  if (a.b && a.b.subarray) {
    for (var c = [], d = 0; d < a.g; ++d) {
      c.push(a.b[d]);
    }
    return c;
  }
  return a.b;
}, Sc:function(a) {
  return a.b ? a.b.subarray ? a.b.subarray(0, a.g) : new Uint8Array(a.b) : new Uint8Array(0);
}, Y:function(a, c) {
  var d = a.b ? a.b.length : 0;
  d >= c || (c = Math.max(c, d * (1048576 > d ? 2.0 : 1.125) | 0), 0 != d && (c = Math.max(c, 256)), d = a.b, a.b = new Uint8Array(c), 0 < a.g && a.b.set(d.subarray(0, a.g), 0));
}, pa:function(a, c) {
  if (a.g != c) {
    if (0 == c) {
      a.b = null, a.g = 0;
    } else {
      if (!a.b || a.b.subarray) {
        var d = a.b;
        a.b = new Uint8Array(c);
        d && a.b.set(d.subarray(0, Math.min(c, a.g)));
      } else {
        if (a.b || (a.b = []), a.b.length > c) {
          a.b.length = c;
        } else {
          for (; a.b.length < c;) {
            a.b.push(0);
          }
        }
      }
      a.g = c;
    }
  }
}, c:{A:function(a) {
  var c = {};
  c.Qc = 8192 === (a.mode & 61440) ? a.id : 1;
  c.Uc = a.id;
  c.mode = a.mode;
  c.Zc = 1;
  c.uid = 0;
  c.Tc = 0;
  c.N = a.N;
  16384 === (a.mode & 61440) ? c.size = 4096 : 32768 === (a.mode & 61440) ? c.size = a.g : 40960 === (a.mode & 61440) ? c.size = a.link.length : c.size = 0;
  c.Nc = new Date(a.timestamp);
  c.Yc = new Date(a.timestamp);
  c.Pc = new Date(a.timestamp);
  c.ka = 4096;
  c.Oc = Math.ceil(c.size / c.ka);
  return c;
}, s:function(a, c) {
  void 0 !== c.mode && (a.mode = c.mode);
  void 0 !== c.timestamp && (a.timestamp = c.timestamp);
  void 0 !== c.size && P.pa(a, c.size);
}, G:function() {
  throw pb[44];
}, K:function(a, c, d, e) {
  return P.createNode(a, c, d, e);
}, fa:function(a, c, d) {
  if (16384 === (a.mode & 61440)) {
    try {
      var e = qb(c, d);
    } catch (h) {
    }
    if (e) {
      for (var g in e.b) {
        throw new N(55);
      }
    }
  }
  delete a.parent.b[a.name];
  a.name = d;
  c.b[d] = a;
  a.parent = c;
}, ha:function(a, c) {
  delete a.b[c];
}, ga:function(a, c) {
  var d = qb(a, c), e;
  for (e in d.b) {
    throw new N(55);
  }
  delete a.b[c];
}, ea:function(a) {
  var c = [".", ".."], d;
  for (d in a.b) {
    a.b.hasOwnProperty(d) && c.push(d);
  }
  return c;
}, O:function(a, c, d) {
  a = P.createNode(a, c, 41471, 0);
  a.link = d;
  return a;
}, H:function(a) {
  if (40960 !== (a.mode & 61440)) {
    throw new N(28);
  }
  return a.link;
}}, f:{read:function(a, c, d, e, g) {
  var h = a.node.b;
  if (g >= a.node.g) {
    return 0;
  }
  a = Math.min(a.node.g - g, e);
  x(0 <= a);
  if (8 < a && h.subarray) {
    c.set(h.subarray(g, g + a), d);
  } else {
    for (e = 0; e < a; e++) {
      c[d + e] = h[g + e];
    }
  }
  return a;
}, write:function(a, c, d, e, g, h) {
  x(!(c instanceof ArrayBuffer));
  if (!e) {
    return 0;
  }
  a = a.node;
  a.timestamp = Date.now();
  if (c.subarray && (!a.b || a.b.subarray)) {
    if (h) {
      return x(0 === g, "canOwn must imply no weird position inside the file"), a.b = c.subarray(d, d + e), a.g = e;
    }
    if (0 === a.g && 0 === g) {
      return a.b = c.slice(d, d + e), a.g = e;
    }
    if (g + e <= a.g) {
      return a.b.set(c.subarray(d, d + e), g), e;
    }
  }
  P.Y(a, g + e);
  if (a.b.subarray && c.subarray) {
    a.b.set(c.subarray(d, d + e), g);
  } else {
    for (h = 0; h < e; h++) {
      a.b[g + h] = c[d + h];
    }
  }
  a.g = Math.max(a.g, g + e);
  return e;
}, B:function(a, c, d) {
  1 === d ? c += a.position : 2 === d && 32768 === (a.node.mode & 61440) && (c += a.node.g);
  if (0 > c) {
    throw new N(28);
  }
  return c;
}, W:function(a, c, d) {
  P.Y(a.node, c + d);
  a.node.g = Math.max(a.node.g, c + d);
}, ca:function(a, c, d, e, g, h, m) {
  x(!(c instanceof ArrayBuffer));
  if (32768 !== (a.node.mode & 61440)) {
    throw new N(43);
  }
  a = a.node.b;
  if (m & 2 || a.buffer !== c.buffer) {
    if (0 < g || g + e < a.length) {
      a.subarray ? a = a.subarray(g, g + e) : a = Array.prototype.slice.call(a, g, g + e);
    }
    g = !0;
    m = c.buffer == E.buffer;
    e = rb(e);
    if (!e) {
      throw new N(48);
    }
    (m ? E : c).set(a, e);
  } else {
    g = !1, e = a.byteOffset;
  }
  return {bd:e, ia:g};
}, M:function(a, c, d, e, g) {
  if (32768 !== (a.node.mode & 61440)) {
    throw new N(43);
  }
  if (g & 2) {
    return 0;
  }
  P.f.write(a, c, 0, e, d, !1);
  return 0;
}}}, sb = {0:"Success", 1:"Arg list too long", 2:"Permission denied", 3:"Address already in use", 4:"Address not available", 5:"Address family not supported by protocol family", 6:"No more processes", 7:"Socket already connected", 8:"Bad file number", 9:"Trying to read unreadable message", 10:"Mount device busy", 11:"Operation canceled", 12:"No children", 13:"Connection aborted", 14:"Connection refused", 15:"Connection reset by peer", 16:"File locking deadlock error", 17:"Destination address required", 
18:"Math arg out of domain of func", 19:"Quota exceeded", 20:"File exists", 21:"Bad address", 22:"File too large", 23:"Host is unreachable", 24:"Identifier removed", 25:"Illegal byte sequence", 26:"Connection already in progress", 27:"Interrupted system call", 28:"Invalid argument", 29:"I/O error", 30:"Socket is already connected", 31:"Is a directory", 32:"Too many symbolic links", 33:"Too many open files", 34:"Too many links", 35:"Message too long", 36:"Multihop attempted", 37:"File or path name too long", 
38:"Network interface is not configured", 39:"Connection reset by network", 40:"Network is unreachable", 41:"Too many open files in system", 42:"No buffer space available", 43:"No such device", 44:"No such file or directory", 45:"Exec format error", 46:"No record locks available", 47:"The link has been severed", 48:"Not enough core", 49:"No message of desired type", 50:"Protocol not available", 51:"No space left on device", 52:"Function not implemented", 53:"Socket is not connected", 54:"Not a directory", 
55:"Directory not empty", 56:"State not recoverable", 57:"Socket operation on non-socket", 59:"Not a typewriter", 60:"No such device or address", 61:"Value too large for defined data type", 62:"Previous owner died", 63:"Not super-user", 64:"Broken pipe", 65:"Protocol error", 66:"Unknown protocol", 67:"Protocol wrong type for socket", 68:"Math result not representable", 69:"Read only file system", 70:"Illegal seek", 71:"No such process", 72:"Stale file handle", 73:"Connection timed out", 74:"Text file busy", 
75:"Cross-device link", 100:"Device not a stream", 101:"Bad font file fmt", 102:"Invalid slot", 103:"Invalid request code", 104:"No anode", 105:"Block device required", 106:"Channel number out of range", 107:"Level 3 halted", 108:"Level 3 reset", 109:"Link number out of range", 110:"Protocol driver not attached", 111:"No CSI structure available", 112:"Level 2 halted", 113:"Invalid exchange", 114:"Invalid request descriptor", 115:"Exchange full", 116:"No data (for no delay io)", 117:"Timer expired", 
118:"Out of streams resources", 119:"Machine is not on the network", 120:"Package not installed", 121:"The object is remote", 122:"Advertise error", 123:"Srmount error", 124:"Communication error on send", 125:"Cross mount point (not really error)", 126:"Given log. name not unique", 127:"f.d. invalid for this operation", 128:"Remote address changed", 129:"Can   access a needed shared lib", 130:"Accessing a corrupted shared lib", 131:".lib section in a.out corrupted", 132:"Attempting to link in too many libs", 
133:"Attempting to exec a shared library", 135:"Streams pipe error", 136:"Too many users", 137:"Socket type not supported", 138:"Not supported", 139:"Protocol family not supported", 140:"Can't send after socket shutdown", 141:"Too many references", 142:"Host is down", 148:"No medium (in tape drive)", 156:"Level 2 not synchronized"}, tb = {nc:63, Nb:44, Ac:71, jb:27, lb:29, jc:60, wa:1, Ob:45, Ga:8, Pa:12, Da:6, Kc:6, Sb:48, ya:2, bb:21, ac:105, Na:10, ab:20, Lc:75, Mb:43, cc:54, nb:31, kb:28, Hb:41, 
zb:33, hc:59, Hc:74, cb:22, Xb:51, zc:70, wc:69, Ab:34, pc:64, Ya:18, tc:68, Tb:49, gb:24, Qa:106, pb:156, qb:107, rb:108, xb:109, Ic:110, Kb:111, ob:112, Va:16, Pb:46, Fa:113, Ja:114, Mc:115, Ib:104, Ka:103, La:102, Wa:16, Ma:101, Zb:100, Lb:116, Ec:117, Yb:118, Ub:119, Vb:120, vc:121, Qb:47, Ba:122, Bc:123, Ra:124, qc:65, Cb:36, Za:125, Ia:9, ic:126, Ha:127, uc:128, sb:129, tb:130, wb:131, vb:132, ub:133, $b:52, dc:55, Db:37, yb:32, kc:138, oc:139, Ua:15, Jb:42, Ca:5, sc:67, fc:57, Wb:50, xc:140, 
Ta:14, za:3, Sa:13, Gb:40, Eb:38, Fc:73, eb:142, fb:23, ib:26, Ea:7, Xa:17, Bb:35, rc:66, yc:137, Aa:4, Fb:39, mb:30, bc:53, Gc:141, Jc:136, $a:19, Cc:72, gc:138, Rb:148, hb:25, lc:61, Oa:11, ec:56, mc:62, Dc:135}, ub = null, vb = {}, Q = [], wb = 1, xb = null, yb = !0, zb = {}, N = null, pb = {};
function R(a, c) {
  a = fb("/", a);
  c = c || {};
  if (!a) {
    return {path:"", node:null};
  }
  var d = {$:!0, V:0}, e;
  for (e in d) {
    void 0 === c[e] && (c[e] = d[e]);
  }
  if (8 < c.V) {
    throw new N(32);
  }
  a = bb(a.split("/").filter(function(m) {
    return !!m;
  }), !1);
  var g = ub;
  d = "/";
  for (e = 0; e < a.length; e++) {
    var h = e === a.length - 1;
    if (h && c.parent) {
      break;
    }
    g = qb(g, a[e]);
    d = cb(d + "/" + a[e]);
    g.L && (!h || h && c.$) && (g = g.L.root);
    if (!h || c.Z) {
      for (h = 0; 40960 === (g.mode & 61440);) {
        if (g = Ab(d), d = fb(db(d), g), g = R(d, {V:c.V}).node, 40 < h++) {
          throw new N(32);
        }
      }
    }
  }
  return {path:d, node:g};
}
function Bb(a) {
  for (var c;;) {
    if (a === a.parent) {
      return a = a.u.da, c ? "/" !== a[a.length - 1] ? a + "/" + c : a + c : a;
    }
    c = c ? a.name + "/" + c : a.name;
    a = a.parent;
  }
}
function Cb(a, c) {
  for (var d = 0, e = 0; e < c.length; e++) {
    d = (d << 5) - d + c.charCodeAt(e) | 0;
  }
  return (a + d >>> 0) % xb.length;
}
function qb(a, c) {
  var d;
  if (d = (d = Db(a, "x")) ? d : a.c.G ? 0 : 2) {
    throw new N(d, a);
  }
  for (d = xb[Cb(a.id, c)]; d; d = d.na) {
    var e = d.name;
    if (d.parent.id === a.id && e === c) {
      return d;
    }
  }
  return a.c.G(a, c);
}
function ob(a, c, d, e) {
  a = new Eb(a, c, d, e);
  c = Cb(a.parent.id, a.name);
  a.na = xb[c];
  return xb[c] = a;
}
var Fb = {r:0, rs:1052672, "r+":2, w:577, wx:705, xw:705, "w+":578, "wx+":706, "xw+":706, a:1089, ax:1217, xa:1217, "a+":1090, "ax+":1218, "xa+":1218};
function Gb(a) {
  var c = ["r", "w", "rw"][a & 3];
  a & 512 && (c += "w");
  return c;
}
function Db(a, c) {
  if (yb) {
    return 0;
  }
  if (-1 === c.indexOf("r") || a.mode & 292) {
    if (-1 !== c.indexOf("w") && !(a.mode & 146) || -1 !== c.indexOf("x") && !(a.mode & 73)) {
      return 2;
    }
  } else {
    return 2;
  }
  return 0;
}
function Hb(a, c) {
  try {
    return qb(a, c), 20;
  } catch (d) {
  }
  return Db(a, "wx");
}
function Ib() {
  var a = 4096;
  for (var c = 0; c <= a; c++) {
    if (!Q[c]) {
      return c;
    }
  }
  throw new N(33);
}
function Jb(a) {
  Kb || (Kb = function() {
  }, Kb.prototype = {});
  var c = new Kb, d;
  for (d in a) {
    c[d] = a[d];
  }
  a = c;
  c = Ib();
  a.i = c;
  return Q[c] = a;
}
var nb = {open:function(a) {
  a.f = vb[a.node.N].f;
  a.f.open && a.f.open(a);
}, B:function() {
  throw new N(70);
}};
function ib(a, c) {
  vb[a] = {f:c};
}
function Lb(a, c) {
  if ("string" === typeof a) {
    throw a;
  }
  var d = "/" === c, e = !c;
  if (d && ub) {
    throw new N(10);
  }
  if (!d && !e) {
    var g = R(c, {$:!1});
    c = g.path;
    g = g.node;
    if (g.L) {
      throw new N(10);
    }
    if (16384 !== (g.mode & 61440)) {
      throw new N(54);
    }
  }
  c = {type:a, ad:{}, da:c, ma:[]};
  a = a.u(c);
  a.u = c;
  c.root = a;
  d ? ub = a : g && (g.L = c, g.u && g.u.ma.push(c));
}
function Mb(a, c, d) {
  var e = R(a, {parent:!0}).node;
  a = eb(a);
  if (!a || "." === a || ".." === a) {
    throw new N(28);
  }
  var g = Hb(e, a);
  if (g) {
    throw new N(g);
  }
  if (!e.c.K) {
    throw new N(63);
  }
  return e.c.K(e, a, c, d);
}
function S(a) {
  Mb(a, 16895, 0);
}
function Nb(a, c, d) {
  "undefined" === typeof d && (d = c, c = 438);
  Mb(a, c | 8192, d);
}
function Ob(a, c) {
  if (!fb(a)) {
    throw new N(44);
  }
  var d = R(c, {parent:!0}).node;
  if (!d) {
    throw new N(44);
  }
  c = eb(c);
  var e = Hb(d, c);
  if (e) {
    throw new N(e);
  }
  if (!d.c.O) {
    throw new N(63);
  }
  d.c.O(d, c, a);
}
function Ab(a) {
  a = R(a).node;
  if (!a) {
    throw new N(44);
  }
  if (!a.c.H) {
    throw new N(28);
  }
  return fb(Bb(a.parent), a.c.H(a));
}
function Pb(a, c) {
  if ("" === a) {
    throw new N(44);
  }
  if ("string" === typeof c) {
    var d = Fb[c];
    if ("undefined" === typeof d) {
      throw Error("Unknown file open mode: " + c);
    }
    c = d;
  }
  var e = c & 64 ? ("undefined" === typeof e ? 438 : e) & 4095 | 32768 : 0;
  if ("object" === typeof a) {
    var g = a;
  } else {
    a = cb(a);
    try {
      g = R(a, {Z:!(c & 131072)}).node;
    } catch (m) {
    }
  }
  d = !1;
  if (c & 64) {
    if (g) {
      if (c & 128) {
        throw new N(20);
      }
    } else {
      g = Mb(a, e, 0), d = !0;
    }
  }
  if (!g) {
    throw new N(44);
  }
  8192 === (g.mode & 61440) && (c &= -513);
  if (c & 65536 && 16384 !== (g.mode & 61440)) {
    throw new N(54);
  }
  if (!d && (e = g ? 40960 === (g.mode & 61440) ? 32 : 16384 === (g.mode & 61440) && ("r" !== Gb(c) || c & 512) ? 31 : Db(g, Gb(c)) : 44)) {
    throw new N(e);
  }
  if (c & 512) {
    e = g;
    var h;
    "string" === typeof e ? h = R(e, {Z:!0}).node : h = e;
    if (!h.c.s) {
      throw new N(63);
    }
    if (16384 === (h.mode & 61440)) {
      throw new N(31);
    }
    if (32768 !== (h.mode & 61440)) {
      throw new N(28);
    }
    if (e = Db(h, "w")) {
      throw new N(e);
    }
    h.c.s(h, {size:0, timestamp:Date.now()});
  }
  c &= -641;
  g = Jb({node:g, path:Bb(g), flags:c, seekable:!0, position:0, f:g.f, va:[], error:!1});
  g.f.open && g.f.open(g);
  !b.logReadFiles || c & 1 || (Qb || (Qb = {}), a in Qb || (Qb[a] = 1, q("FS.trackingDelegate error on read file: " + a)));
  try {
    zb.onOpenFile && (h = 0, 1 !== (c & 2097155) && (h |= 1), 0 !== (c & 2097155) && (h |= 2), zb.onOpenFile(a, h));
  } catch (m) {
    q("FS.trackingDelegate['onOpenFile']('" + a + "', flags) threw an exception: " + m.message);
  }
  return g;
}
function Rb(a, c, d) {
  if (null === a.i) {
    throw new N(8);
  }
  if (!a.seekable || !a.f.B) {
    throw new N(70);
  }
  if (0 != d && 1 != d && 2 != d) {
    throw new N(28);
  }
  a.position = a.f.B(a, c, d);
  a.va = [];
}
function Sb() {
  N || (N = function(a, c) {
    this.node = c;
    this.qa = function(d) {
      this.F = d;
      for (var e in tb) {
        if (tb[e] === d) {
          this.code = e;
          break;
        }
      }
    };
    this.qa(a);
    this.message = sb[a];
    this.stack && (Object.defineProperty(this, "stack", {value:Error().stack, writable:!0}), this.stack = Va(this.stack));
  }, N.prototype = Error(), N.prototype.constructor = N, [44].forEach(function(a) {
    pb[a] = new N(a);
    pb[a].stack = "<generic error, no stack>";
  }));
}
var Ub;
function Vb(a, c) {
  var d = 0;
  a && (d |= 365);
  c && (d |= 146);
  return d;
}
function Wb(a, c, d) {
  a = cb("/dev/" + a);
  var e = Vb(!!c, !!d);
  Xb || (Xb = 64);
  var g = Xb++ << 8 | 0;
  ib(g, {open:function(h) {
    h.seekable = !1;
  }, close:function() {
    d && d.buffer && d.buffer.length && d(10);
  }, read:function(h, m, n, t) {
    for (var r = 0, u = 0; u < t; u++) {
      try {
        var y = c();
      } catch (B) {
        throw new N(29);
      }
      if (void 0 === y && 0 === r) {
        throw new N(6);
      }
      if (null === y || void 0 === y) {
        break;
      }
      r++;
      m[n + u] = y;
    }
    r && (h.node.timestamp = Date.now());
    return r;
  }, write:function(h, m, n, t) {
    for (var r = 0; r < t; r++) {
      try {
        d(m[n + r]);
      } catch (u) {
        throw new N(29);
      }
    }
    t && (h.node.timestamp = Date.now());
    return r;
  }});
  Nb(a, e, g);
}
var Xb, Yb = {}, Kb, Qb, Zb = {};
function $b(a) {
  a = Q[a];
  if (!a) {
    throw new N(8);
  }
  return a;
}
function ac(a) {
  switch(a) {
    case 1:
      return 0;
    case 2:
      return 1;
    case 4:
      return 2;
    case 8:
      return 3;
    default:
      throw new TypeError("Unknown type size: " + a);
  }
}
var bc = void 0;
function T(a) {
  for (var c = ""; z[a];) {
    c += bc[z[a++]];
  }
  return c;
}
var U = {}, V = {}, cc = {};
function dc(a) {
  if (void 0 === a) {
    return "_unknown";
  }
  a = a.replace(/[^a-zA-Z0-9_]/g, "$");
  var c = a.charCodeAt(0);
  return 48 <= c && 57 >= c ? "_" + a : a;
}
function ec(a, c) {
  a = dc(a);
  return (new Function("body", "return function " + a + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(c);
}
function fc(a) {
  var c = Error, d = ec(a, function(e) {
    this.name = a;
    this.message = e;
    e = Error(e).stack;
    void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
  });
  d.prototype = Object.create(c.prototype);
  d.prototype.constructor = d;
  d.prototype.toString = function() {
    return void 0 === this.message ? this.name : this.name + ": " + this.message;
  };
  return d;
}
var gc = void 0;
function W(a) {
  throw new gc(a);
}
var hc = void 0;
function ic(a, c) {
  function d(n) {
    n = c(n);
    if (n.length !== e.length) {
      throw new hc("Mismatched type converter count");
    }
    for (var t = 0; t < e.length; ++t) {
      X(e[t], n[t]);
    }
  }
  var e = [];
  e.forEach(function(n) {
    cc[n] = a;
  });
  var g = Array(a.length), h = [], m = 0;
  a.forEach(function(n, t) {
    V.hasOwnProperty(n) ? g[t] = V[n] : (h.push(n), U.hasOwnProperty(n) || (U[n] = []), U[n].push(function() {
      g[t] = V[n];
      ++m;
      m === h.length && d(g);
    }));
  });
  0 === h.length && d(g);
}
function X(a, c, d) {
  d = d || {};
  if (!("argPackAdvance" in c)) {
    throw new TypeError("registerType registeredInstance requires argPackAdvance");
  }
  var e = c.name;
  a || W('type "' + e + '" must have a positive integer typeid pointer');
  if (V.hasOwnProperty(a)) {
    if (d.la) {
      return;
    }
    W("Cannot register type '" + e + "' twice");
  }
  V[a] = c;
  delete cc[a];
  U.hasOwnProperty(a) && (c = U[a], delete U[a], c.forEach(function(g) {
    g();
  }));
}
var jc = [], Y = [{}, {value:void 0}, {value:null}, {value:!0}, {value:!1}];
function kc(a) {
  switch(a) {
    case void 0:
      return 1;
    case null:
      return 2;
    case !0:
      return 3;
    case !1:
      return 4;
    default:
      var c = jc.length ? jc.pop() : Y.length;
      Y[c] = {oa:1, value:a};
      return c;
  }
}
function lc(a) {
  return this.fromWireType(F[a >> 2]);
}
function mc(a) {
  if (null === a) {
    return "null";
  }
  var c = typeof a;
  return "object" === c || "array" === c || "function" === c ? a.toString() : "" + a;
}
function nc(a, c) {
  switch(c) {
    case 2:
      return function(d) {
        return this.fromWireType(Ba[d >> 2]);
      };
    case 3:
      return function(d) {
        return this.fromWireType(Ca[d >> 3]);
      };
    default:
      throw new TypeError("Unknown float type: " + a);
  }
}
function oc(a) {
  var c = Function;
  if (!(c instanceof Function)) {
    throw new TypeError("new_ called with constructor type " + typeof c + " which is not a function");
  }
  var d = ec(c.name || "unknownFunctionName", function() {
  });
  d.prototype = c.prototype;
  d = new d;
  a = c.apply(d, a);
  return a instanceof Object ? a : d;
}
function pc(a) {
  for (; a.length;) {
    var c = a.pop();
    a.pop()(c);
  }
}
function qc(a, c) {
  var d = b;
  if (void 0 === d[a].o) {
    var e = d[a];
    d[a] = function() {
      d[a].o.hasOwnProperty(arguments.length) || W("Function '" + c + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + d[a].o + ")!");
      return d[a].o[arguments.length].apply(this, arguments);
    };
    d[a].o = [];
    d[a].o[e.ja] = e;
  }
}
function rc(a, c, d) {
  b.hasOwnProperty(a) ? ((void 0 === d || void 0 !== b[a].o && void 0 !== b[a].o[d]) && W("Cannot register public name '" + a + "' twice"), qc(a, a), b.hasOwnProperty(d) && W("Cannot register multiple overloads of a function with the same number of arguments (" + d + ")!"), b[a].o[d] = c) : (b[a] = c, void 0 !== d && (b[a].$c = d));
}
function sc(a, c) {
  for (var d = [], e = 0; e < a; e++) {
    d.push(D[(c >> 2) + e]);
  }
  return d;
}
function tc(a, c) {
  a = T(a);
  var d = b["dynCall_" + a];
  for (var e = [], g = 1; g < a.length; ++g) {
    e.push("a" + g);
  }
  g = "return function dynCall_" + (a + "_" + c) + "(" + e.join(", ") + ") {\n";
  g += "    return dynCall(rawFunction" + (e.length ? ", " : "") + e.join(", ") + ");\n";
  d = (new Function("dynCall", "rawFunction", g + "};\n"))(d, c);
  "function" !== typeof d && W("unknown function pointer with signature " + a + ": " + c);
  return d;
}
var uc = void 0;
function vc(a) {
  a = wc(a);
  var c = T(a);
  Z(a);
  return c;
}
function xc(a, c) {
  function d(h) {
    g[h] || V[h] || (cc[h] ? cc[h].forEach(d) : (e.push(h), g[h] = !0));
  }
  var e = [], g = {};
  c.forEach(d);
  throw new uc(a + ": " + e.map(vc).join([", "]));
}
function yc(a, c, d) {
  switch(c) {
    case 0:
      return d ? function(e) {
        return E[e];
      } : function(e) {
        return z[e];
      };
    case 1:
      return d ? function(e) {
        return C[e >> 1];
      } : function(e) {
        return Aa[e >> 1];
      };
    case 2:
      return d ? function(e) {
        return D[e >> 2];
      } : function(e) {
        return F[e >> 2];
      };
    default:
      throw new TypeError("Unknown integer type: " + a);
  }
}
var zc = {};
function Ac() {
  if (!Bc) {
    var a = {USER:"web_user", LOGNAME:"web_user", PATH:"/", PWD:"/", HOME:"/home/web_user", LANG:("object" === typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _:ba || "./this.program"}, c;
    for (c in zc) {
      a[c] = zc[c];
    }
    var d = [];
    for (c in a) {
      d.push(c + "=" + a[c]);
    }
    Bc = d;
  }
  return Bc;
}
var Bc;
function Cc(a) {
  return 0 === a % 4 && (0 !== a % 100 || 0 === a % 400);
}
function Dc(a, c) {
  for (var d = 0, e = 0; e <= c; d += a[e++]) {
  }
  return d;
}
var Ec = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Fc = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function Gc(a, c) {
  for (a = new Date(a.getTime()); 0 < c;) {
    var d = a.getMonth(), e = (Cc(a.getFullYear()) ? Ec : Fc)[d];
    if (c > e - a.getDate()) {
      c -= e - a.getDate() + 1, a.setDate(1), 11 > d ? a.setMonth(d + 1) : (a.setMonth(0), a.setFullYear(a.getFullYear() + 1));
    } else {
      a.setDate(a.getDate() + c);
      break;
    }
  }
  return a;
}
function Hc(a, c, d, e) {
  function g(k, p, w) {
    for (k = "number" === typeof k ? k.toString() : k || ""; k.length < p;) {
      k = w[0] + k;
    }
    return k;
  }
  function h(k, p) {
    return g(k, p, "0");
  }
  function m(k, p) {
    function w(O) {
      return 0 > O ? -1 : 0 < O ? 1 : 0;
    }
    var A;
    0 === (A = w(k.getFullYear() - p.getFullYear())) && 0 === (A = w(k.getMonth() - p.getMonth())) && (A = w(k.getDate() - p.getDate()));
    return A;
  }
  function n(k) {
    switch(k.getDay()) {
      case 0:
        return new Date(k.getFullYear() - 1, 11, 29);
      case 1:
        return k;
      case 2:
        return new Date(k.getFullYear(), 0, 3);
      case 3:
        return new Date(k.getFullYear(), 0, 2);
      case 4:
        return new Date(k.getFullYear(), 0, 1);
      case 5:
        return new Date(k.getFullYear() - 1, 11, 31);
      case 6:
        return new Date(k.getFullYear() - 1, 11, 30);
    }
  }
  function t(k) {
    k = Gc(new Date(k.j + 1900, 0, 1), k.S);
    var p = new Date(k.getFullYear() + 1, 0, 4), w = n(new Date(k.getFullYear(), 0, 4));
    p = n(p);
    return 0 >= m(w, k) ? 0 >= m(p, k) ? k.getFullYear() + 1 : k.getFullYear() : k.getFullYear() - 1;
  }
  var r = D[e + 40 >> 2];
  e = {ta:D[e >> 2], sa:D[e + 4 >> 2], P:D[e + 8 >> 2], I:D[e + 12 >> 2], D:D[e + 16 >> 2], j:D[e + 20 >> 2], R:D[e + 24 >> 2], S:D[e + 28 >> 2], cd:D[e + 32 >> 2], ra:D[e + 36 >> 2], ua:r ? na(r) : ""};
  d = na(d);
  r = {"%c":"%a %b %d %H:%M:%S %Y", "%D":"%m/%d/%y", "%F":"%Y-%m-%d", "%h":"%b", "%r":"%I:%M:%S %p", "%R":"%H:%M", "%T":"%H:%M:%S", "%x":"%m/%d/%y", "%X":"%H:%M:%S", "%Ec":"%c", "%EC":"%C", "%Ex":"%m/%d/%y", "%EX":"%H:%M:%S", "%Ey":"%y", "%EY":"%Y", "%Od":"%d", "%Oe":"%e", "%OH":"%H", "%OI":"%I", "%Om":"%m", "%OM":"%M", "%OS":"%S", "%Ou":"%u", "%OU":"%U", "%OV":"%V", "%Ow":"%w", "%OW":"%W", "%Oy":"%y"};
  for (var u in r) {
    d = d.replace(new RegExp(u, "g"), r[u]);
  }
  var y = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), B = "January February March April May June July August September October November December".split(" ");
  r = {"%a":function(k) {
    return y[k.R].substring(0, 3);
  }, "%A":function(k) {
    return y[k.R];
  }, "%b":function(k) {
    return B[k.D].substring(0, 3);
  }, "%B":function(k) {
    return B[k.D];
  }, "%C":function(k) {
    return h((k.j + 1900) / 100 | 0, 2);
  }, "%d":function(k) {
    return h(k.I, 2);
  }, "%e":function(k) {
    return g(k.I, 2, " ");
  }, "%g":function(k) {
    return t(k).toString().substring(2);
  }, "%G":function(k) {
    return t(k);
  }, "%H":function(k) {
    return h(k.P, 2);
  }, "%I":function(k) {
    k = k.P;
    0 == k ? k = 12 : 12 < k && (k -= 12);
    return h(k, 2);
  }, "%j":function(k) {
    return h(k.I + Dc(Cc(k.j + 1900) ? Ec : Fc, k.D - 1), 3);
  }, "%m":function(k) {
    return h(k.D + 1, 2);
  }, "%M":function(k) {
    return h(k.sa, 2);
  }, "%n":function() {
    return "\n";
  }, "%p":function(k) {
    return 0 <= k.P && 12 > k.P ? "AM" : "PM";
  }, "%S":function(k) {
    return h(k.ta, 2);
  }, "%t":function() {
    return "\t";
  }, "%u":function(k) {
    return k.R || 7;
  }, "%U":function(k) {
    var p = new Date(k.j + 1900, 0, 1), w = 0 === p.getDay() ? p : Gc(p, 7 - p.getDay());
    k = new Date(k.j + 1900, k.D, k.I);
    return 0 > m(w, k) ? h(Math.ceil((31 - w.getDate() + (Dc(Cc(k.getFullYear()) ? Ec : Fc, k.getMonth() - 1) - 31) + k.getDate()) / 7), 2) : 0 === m(w, p) ? "01" : "00";
  }, "%V":function(k) {
    var p = new Date(k.j + 1901, 0, 4), w = n(new Date(k.j + 1900, 0, 4));
    p = n(p);
    var A = Gc(new Date(k.j + 1900, 0, 1), k.S);
    return 0 > m(A, w) ? "53" : 0 >= m(p, A) ? "01" : h(Math.ceil((w.getFullYear() < k.j + 1900 ? k.S + 32 - w.getDate() : k.S + 1 - w.getDate()) / 7), 2);
  }, "%w":function(k) {
    return k.R;
  }, "%W":function(k) {
    var p = new Date(k.j, 0, 1), w = 1 === p.getDay() ? p : Gc(p, 0 === p.getDay() ? 1 : 7 - p.getDay() + 1);
    k = new Date(k.j + 1900, k.D, k.I);
    return 0 > m(w, k) ? h(Math.ceil((31 - w.getDate() + (Dc(Cc(k.getFullYear()) ? Ec : Fc, k.getMonth() - 1) - 31) + k.getDate()) / 7), 2) : 0 === m(w, p) ? "01" : "00";
  }, "%y":function(k) {
    return (k.j + 1900).toString().substring(2);
  }, "%Y":function(k) {
    return k.j + 1900;
  }, "%z":function(k) {
    k = k.ra;
    var p = 0 <= k;
    k = Math.abs(k) / 60;
    return (p ? "+" : "-") + String("0000" + (k / 60 * 100 + k % 60)).slice(-4);
  }, "%Z":function(k) {
    return k.ua;
  }, "%%":function() {
    return "%";
  }};
  for (u in r) {
    0 <= d.indexOf(u) && (d = d.replace(new RegExp(u, "g"), r[u](e)));
  }
  u = kb(d, !1);
  if (u.length > c) {
    return 0;
  }
  ya(u, a);
  return u.length - 1;
}
function Eb(a, c, d, e) {
  a || (a = this);
  this.parent = a;
  this.u = a.u;
  this.L = null;
  this.id = wb++;
  this.name = c;
  this.mode = d;
  this.c = {};
  this.f = {};
  this.N = e;
}
Object.defineProperties(Eb.prototype, {read:{get:function() {
  return 365 === (this.mode & 365);
}, set:function(a) {
  a ? this.mode |= 365 : this.mode &= -366;
}}, write:{get:function() {
  return 146 === (this.mode & 146);
}, set:function(a) {
  a ? this.mode |= 146 : this.mode &= -147;
}}});
Sb();
xb = Array(4096);
Lb(P, "/");
S("/tmp");
S("/home");
S("/home/web_user");
(function() {
  S("/dev");
  ib(259, {read:function() {
    return 0;
  }, write:function(d, e, g, h) {
    return h;
  }});
  Nb("/dev/null", 259);
  hb(1280, lb);
  hb(1536, mb);
  Nb("/dev/tty", 1280);
  Nb("/dev/tty1", 1536);
  if ("object" === typeof crypto && "function" === typeof crypto.getRandomValues) {
    var a = new Uint8Array(1);
    var c = function() {
      crypto.getRandomValues(a);
      return a[0];
    };
  }
  c || (c = function() {
    v("no cryptographic support found for random_device. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: function(array) { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
  });
  Wb("random", c);
  Wb("urandom", c);
  S("/dev/shm");
  S("/dev/shm/tmp");
})();
S("/proc");
S("/proc/self");
S("/proc/self/fd");
Lb({u:function() {
  var a = ob("/proc/self", "fd", 16895, 73);
  a.c = {G:function(c, d) {
    var e = Q[+d];
    if (!e) {
      throw new N(8);
    }
    c = {parent:null, u:{da:"fake"}, c:{H:function() {
      return e.path;
    }}};
    return c.parent = c;
  }};
  return a;
}}, "/proc/self/fd");
for (var Ic = Array(256), Jc = 0; 256 > Jc; ++Jc) {
  Ic[Jc] = String.fromCharCode(Jc);
}
bc = Ic;
gc = b.BindingError = fc("BindingError");
hc = b.InternalError = fc("InternalError");
b.count_emval_handles = function() {
  for (var a = 0, c = 5; c < Y.length; ++c) {
    void 0 !== Y[c] && ++a;
  }
  return a;
};
b.get_first_emval = function() {
  for (var a = 5; a < Y.length; ++a) {
    if (void 0 !== Y[a]) {
      return Y[a];
    }
  }
  return null;
};
uc = b.UnboundTypeError = fc("UnboundTypeError");
function kb(a, c) {
  var d = Array(qa(a) + 1);
  a = oa(a, d, 0, d.length);
  c && (d.length = a);
  return d;
}
var Kc = {__cxa_atexit:function(a, c) {
  ea("atexit() called, but EXIT_RUNTIME is not set, so atexits() will not be called. set EXIT_RUNTIME to 1 (see the FAQ)");
  La.unshift({aa:a, J:c});
}, __handle_stack_overflow:function() {
  v("stack overflow");
}, __map_file:function() {
  b.___errno_location ? D[b.___errno_location() >> 2] = 63 : q("failed to set errno from JS");
  return -1;
}, __syscall91:function(a, c) {
  try {
    if (-1 === a || 0 === c) {
      var d = -28;
    } else {
      var e = Zb[a];
      if (e && c === e.Wc) {
        var g = Q[e.i];
        g && g.f.M && g.f.M(g, z.slice(a, a + c), e.offset, c, e.flags);
        Zb[a] = null;
        e.ia && Z(e.Xc);
      }
      d = 0;
    }
    return d;
  } catch (h) {
    return "undefined" !== typeof Yb && h instanceof N || v(h), -h.F;
  }
}, _embind_register_bool:function(a, c, d, e, g) {
  var h = ac(d);
  c = T(c);
  X(a, {name:c, fromWireType:function(m) {
    return !!m;
  }, toWireType:function(m, n) {
    return n ? e : g;
  }, argPackAdvance:8, readValueFromPointer:function(m) {
    if (1 === d) {
      var n = E;
    } else {
      if (2 === d) {
        n = C;
      } else {
        if (4 === d) {
          n = D;
        } else {
          throw new TypeError("Unknown boolean type size: " + c);
        }
      }
    }
    return this.fromWireType(n[m >> h]);
  }, v:null});
}, _embind_register_emval:function(a, c) {
  c = T(c);
  X(a, {name:c, fromWireType:function(d) {
    var e = Y[d].value;
    4 < d && 0 === --Y[d].oa && (Y[d] = void 0, jc.push(d));
    return e;
  }, toWireType:function(d, e) {
    return kc(e);
  }, argPackAdvance:8, readValueFromPointer:lc, v:null});
}, _embind_register_float:function(a, c, d) {
  d = ac(d);
  c = T(c);
  X(a, {name:c, fromWireType:function(e) {
    return e;
  }, toWireType:function(e, g) {
    if ("number" !== typeof g && "boolean" !== typeof g) {
      throw new TypeError('Cannot convert "' + mc(g) + '" to ' + this.name);
    }
    return g;
  }, argPackAdvance:8, readValueFromPointer:nc(c, d), v:null});
}, _embind_register_function:function(a, c, d, e, g, h) {
  var m = sc(c, d);
  a = T(a);
  g = tc(e, g);
  rc(a, function() {
    xc("Cannot call " + a + " due to unbound types", m);
  }, c - 1);
  ic(m, function(n) {
    var t = a, r = a;
    n = [n[0], null].concat(n.slice(1));
    var u = g, y = n.length;
    2 > y && W("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var B = null !== n[1] && !1, k = !1, p = 1; p < n.length; ++p) {
      if (null !== n[p] && void 0 === n[p].v) {
        k = !0;
        break;
      }
    }
    var w = "void" !== n[0].name, A = "", O = "";
    for (p = 0; p < y - 2; ++p) {
      A += (0 !== p ? ", " : "") + "arg" + p, O += (0 !== p ? ", " : "") + "arg" + p + "Wired";
    }
    r = "return function " + dc(r) + "(" + A + ") {\nif (arguments.length !== " + (y - 2) + ") {\nthrowBindingError('function " + r + " called with ' + arguments.length + ' arguments, expected " + (y - 2) + " args!');\n}\n";
    k && (r += "var destructors = [];\n");
    var Tb = k ? "destructors" : "null";
    A = "throwBindingError invoker fn runDestructors retType classParam".split(" ");
    u = [W, u, h, pc, n[0], n[1]];
    B && (r += "var thisWired = classParam.toWireType(" + Tb + ", this);\n");
    for (p = 0; p < y - 2; ++p) {
      r += "var arg" + p + "Wired = argType" + p + ".toWireType(" + Tb + ", arg" + p + "); // " + n[p + 2].name + "\n", A.push("argType" + p), u.push(n[p + 2]);
    }
    B && (O = "thisWired" + (0 < O.length ? ", " : "") + O);
    r += (w ? "var rv = " : "") + "invoker(fn" + (0 < O.length ? ", " : "") + O + ");\n";
    if (k) {
      r += "runDestructors(destructors);\n";
    } else {
      for (p = B ? 1 : 2; p < n.length; ++p) {
        y = 1 === p ? "thisWired" : "arg" + (p - 2) + "Wired", null !== n[p].v && (r += y + "_dtor(" + y + "); // " + n[p].name + "\n", A.push(y + "_dtor"), u.push(n[p].v));
      }
    }
    w && (r += "var ret = retType.fromWireType(rv);\nreturn ret;\n");
    A.push(r + "}\n");
    n = oc(A).apply(null, u);
    p = c - 1;
    if (!b.hasOwnProperty(t)) {
      throw new hc("Replacing nonexistant public symbol");
    }
    void 0 !== b[t].o && void 0 !== p ? b[t].o[p] = n : (b[t] = n, b[t].ja = p);
    return [];
  });
}, _embind_register_integer:function(a, c, d, e, g) {
  function h(r) {
    return r;
  }
  c = T(c);
  -1 === g && (g = 4294967295);
  var m = ac(d);
  if (0 === e) {
    var n = 32 - 8 * d;
    h = function(r) {
      return r << n >>> n;
    };
  }
  var t = -1 != c.indexOf("unsigned");
  X(a, {name:c, fromWireType:h, toWireType:function(r, u) {
    if ("number" !== typeof u && "boolean" !== typeof u) {
      throw new TypeError('Cannot convert "' + mc(u) + '" to ' + this.name);
    }
    if (u < e || u > g) {
      throw new TypeError('Passing a number "' + mc(u) + '" from JS side to C/C++ side to an argument of type "' + c + '", which is outside the valid range [' + e + ", " + g + "]!");
    }
    return t ? u >>> 0 : u | 0;
  }, argPackAdvance:8, readValueFromPointer:yc(c, m, 0 !== e), v:null});
}, _embind_register_memory_view:function(a, c, d) {
  function e(h) {
    h >>= 2;
    return new g(za, F[h + 1], F[h]);
  }
  var g = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][c];
  d = T(d);
  X(a, {name:d, fromWireType:e, argPackAdvance:8, readValueFromPointer:e}, {la:!0});
}, _embind_register_std_string:function(a, c) {
  c = T(c);
  var d = "std::string" === c;
  X(a, {name:c, fromWireType:function(e) {
    var g = F[e >> 2];
    if (d) {
      var h = z[e + 4 + g], m = 0;
      0 != h && (m = h, z[e + 4 + g] = 0);
      var n = e + 4;
      for (h = 0; h <= g; ++h) {
        var t = e + 4 + h;
        if (0 == z[t]) {
          n = na(n);
          if (void 0 === r) {
            var r = n;
          } else {
            r += String.fromCharCode(0), r += n;
          }
          n = t + 1;
        }
      }
      0 != m && (z[e + 4 + g] = m);
    } else {
      r = Array(g);
      for (h = 0; h < g; ++h) {
        r[h] = String.fromCharCode(z[e + 4 + h]);
      }
      r = r.join("");
    }
    Z(e);
    return r;
  }, toWireType:function(e, g) {
    g instanceof ArrayBuffer && (g = new Uint8Array(g));
    var h = "string" === typeof g;
    h || g instanceof Uint8Array || g instanceof Uint8ClampedArray || g instanceof Int8Array || W("Cannot pass non-string to std::string");
    var m = (d && h ? function() {
      return qa(g);
    } : function() {
      return g.length;
    })(), n = rb(4 + m + 1);
    F[n >> 2] = m;
    if (d && h) {
      pa(g, n + 4, m + 1);
    } else {
      if (h) {
        for (h = 0; h < m; ++h) {
          var t = g.charCodeAt(h);
          255 < t && (Z(n), W("String has UTF-16 code units that do not fit in 8 bits"));
          z[n + 4 + h] = t;
        }
      } else {
        for (h = 0; h < m; ++h) {
          z[n + 4 + h] = g[h];
        }
      }
    }
    null !== e && e.push(Z, n);
    return n;
  }, argPackAdvance:8, readValueFromPointer:lc, v:function(e) {
    Z(e);
  }});
}, _embind_register_std_wstring:function(a, c, d) {
  d = T(d);
  if (2 === c) {
    var e = sa;
    var g = ta;
    var h = ua;
    var m = function() {
      return Aa;
    };
    var n = 1;
  } else {
    4 === c && (e = va, g = wa, h = xa, m = function() {
      return F;
    }, n = 2);
  }
  X(a, {name:d, fromWireType:function(t) {
    var r = F[t >> 2], u = m(), y = u[t + 4 + r * c >> n], B = 0;
    0 != y && (B = y, u[t + 4 + r * c >> n] = 0);
    var k = t + 4;
    for (y = 0; y <= r; ++y) {
      var p = t + 4 + y * c;
      if (0 == u[p >> n]) {
        k = e(k);
        if (void 0 === w) {
          var w = k;
        } else {
          w += String.fromCharCode(0), w += k;
        }
        k = p + c;
      }
    }
    0 != B && (u[t + 4 + r * c >> n] = B);
    Z(t);
    return w;
  }, toWireType:function(t, r) {
    "string" !== typeof r && W("Cannot pass non-string to C++ string type " + d);
    var u = h(r), y = rb(4 + u + c);
    F[y >> 2] = u >> n;
    g(r, y + 4, u + c);
    null !== t && t.push(Z, y);
    return y;
  }, argPackAdvance:8, readValueFromPointer:lc, v:function(t) {
    Z(t);
  }});
}, _embind_register_void:function(a, c) {
  c = T(c);
  X(a, {Vc:!0, name:c, argPackAdvance:0, fromWireType:function() {
  }, toWireType:function() {
  }});
}, abort:function() {
  v();
}, emscripten_get_sbrk_ptr:function() {
  return 23088;
}, emscripten_memcpy_big:function(a, c, d) {
  z.copyWithin(a, c, c + d);
}, emscripten_resize_heap:function(a) {
  v("Cannot enlarge memory arrays to size " + a + " bytes (OOM). Either (1) compile with  -s INITIAL_MEMORY=X  with X higher than the current value " + E.length + ", (2) compile with  -s ALLOW_MEMORY_GROWTH=1  which allows increasing the size at runtime, or (3) if you want malloc to return NULL (0) instead of this abort, compile with  -s ABORTING_MALLOC=0 ");
}, environ_get:function(a, c) {
  var d = 0;
  Ac().forEach(function(e, g) {
    var h = c + d;
    g = D[a + 4 * g >> 2] = h;
    for (h = 0; h < e.length; ++h) {
      x(e.charCodeAt(h) === e.charCodeAt(h) & 255), E[g++ >> 0] = e.charCodeAt(h);
    }
    E[g >> 0] = 0;
    d += e.length + 1;
  });
  return 0;
}, environ_sizes_get:function(a, c) {
  var d = Ac();
  D[a >> 2] = d.length;
  var e = 0;
  d.forEach(function(g) {
    e += g.length + 1;
  });
  D[c >> 2] = e;
  return 0;
}, fd_close:function(a) {
  try {
    var c = $b(a);
    if (null === c.i) {
      throw new N(8);
    }
    c.T && (c.T = null);
    try {
      c.f.close && c.f.close(c);
    } catch (d) {
      throw d;
    } finally {
      Q[c.i] = null;
    }
    c.i = null;
    return 0;
  } catch (d) {
    return "undefined" !== typeof Yb && d instanceof N || v(d), d.F;
  }
}, fd_read:function(a, c, d, e) {
  try {
    a: {
      for (var g = $b(a), h = a = 0; h < d; h++) {
        var m = D[c + (8 * h + 4) >> 2], n = g, t = D[c + 8 * h >> 2], r = m, u = void 0, y = E;
        if (0 > r || 0 > u) {
          throw new N(28);
        }
        if (null === n.i) {
          throw new N(8);
        }
        if (1 === (n.flags & 2097155)) {
          throw new N(8);
        }
        if (16384 === (n.node.mode & 61440)) {
          throw new N(31);
        }
        if (!n.f.read) {
          throw new N(28);
        }
        var B = "undefined" !== typeof u;
        if (!B) {
          u = n.position;
        } else {
          if (!n.seekable) {
            throw new N(70);
          }
        }
        var k = n.f.read(n, y, t, r, u);
        B || (n.position += k);
        var p = k;
        if (0 > p) {
          var w = -1;
          break a;
        }
        a += p;
        if (p < m) {
          break;
        }
      }
      w = a;
    }
    D[e >> 2] = w;
    return 0;
  } catch (A) {
    return "undefined" !== typeof Yb && A instanceof N || v(A), A.F;
  }
}, fd_seek:function(a, c, d, e, g) {
  try {
    var h = $b(a);
    a = 4294967296 * d + (c >>> 0);
    if (-9007199254740992 >= a || 9007199254740992 <= a) {
      return -61;
    }
    Rb(h, a, e);
    $a = [h.position >>> 0, (M = h.position, 1.0 <= +Oa(M) ? 0.0 < M ? (Ra(+Qa(M / 4294967296.0), 4294967295.0) | 0) >>> 0 : ~~+Pa((M - +(~~M >>> 0)) / 4294967296.0) >>> 0 : 0)];
    D[g >> 2] = $a[0];
    D[g + 4 >> 2] = $a[1];
    h.T && 0 === a && 0 === e && (h.T = null);
    return 0;
  } catch (m) {
    return "undefined" !== typeof Yb && m instanceof N || v(m), m.F;
  }
}, fd_write:function(a, c, d, e) {
  try {
    a: {
      for (var g = $b(a), h = a = 0; h < d; h++) {
        var m = g, n = D[c + 8 * h >> 2], t = D[c + (8 * h + 4) >> 2], r = void 0, u = E;
        if (0 > t || 0 > r) {
          throw new N(28);
        }
        if (null === m.i) {
          throw new N(8);
        }
        if (0 === (m.flags & 2097155)) {
          throw new N(8);
        }
        if (16384 === (m.node.mode & 61440)) {
          throw new N(31);
        }
        if (!m.f.write) {
          throw new N(28);
        }
        m.flags & 1024 && Rb(m, 0, 2);
        var y = "undefined" !== typeof r;
        if (!y) {
          r = m.position;
        } else {
          if (!m.seekable) {
            throw new N(70);
          }
        }
        var B = m.f.write(m, u, n, t, r, void 0);
        y || (m.position += B);
        try {
          if (m.path && zb.onWriteToFile) {
            zb.onWriteToFile(m.path);
          }
        } catch (w) {
          q("FS.trackingDelegate['onWriteToFile']('" + m.path + "') threw an exception: " + w.message);
        }
        var k = B;
        if (0 > k) {
          var p = -1;
          break a;
        }
        a += k;
      }
      p = a;
    }
    D[e >> 2] = p;
    return 0;
  } catch (w) {
    return "undefined" !== typeof Yb && w instanceof N || v(w), w.F;
  }
}, memory:ia, setTempRet0:function() {
}, strftime_l:function(a, c, d, e) {
  return Hc(a, c, d, e);
}, table:ja}, Lc = function() {
  function a(h) {
    b.asm = h.exports;
    J--;
    b.monitorRunDependencies && b.monitorRunDependencies(J);
    x(Ta["wasm-instantiate"]);
    delete Ta["wasm-instantiate"];
    0 == J && (null !== K && (clearInterval(K), K = null), Sa && (h = Sa, Sa = null, h()));
  }
  function c(h) {
    x(b === g, "the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?");
    g = null;
    a(h.instance);
  }
  function d(h) {
    return Za().then(function(m) {
      return WebAssembly.instantiate(m, e);
    }).then(h, function(m) {
      q("failed to asynchronously prepare wasm: " + m);
      v(m);
    });
  }
  var e = {env:Kc, wasi_snapshot_preview1:Kc};
  Ua();
  var g = b;
  if (b.instantiateWasm) {
    try {
      return b.instantiateWasm(e, a);
    } catch (h) {
      return q("Module.instantiateWasm callback failed with error: " + h), !1;
    }
  }
  (function() {
    if (ha || "function" !== typeof WebAssembly.instantiateStreaming || Wa() || "function" !== typeof fetch) {
      return d(c);
    }
    fetch(L, {credentials:"same-origin"}).then(function(h) {
      return WebAssembly.instantiateStreaming(h, e).then(c, function(m) {
        q("wasm streaming compile failed: " + m);
        q("falling back to ArrayBuffer instantiation");
        d(c);
      });
    });
  })();
  return {};
}();
b.asm = Lc;
var ab = b.___wasm_call_ctors = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.__wasm_call_ctors.apply(null, arguments);
};
b._fflush = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.fflush.apply(null, arguments);
};
b.___errno_location = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.__errno_location.apply(null, arguments);
};
var Z = b._free = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.free.apply(null, arguments);
}, rb = b._malloc = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.malloc.apply(null, arguments);
}, wc = b.___getTypeName = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.__getTypeName.apply(null, arguments);
};
b.___embind_register_native_and_builtin_types = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.__embind_register_native_and_builtin_types.apply(null, arguments);
};
b.___set_stack_limit = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.__set_stack_limit.apply(null, arguments);
};
da = b.stackSave = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.stackSave.apply(null, arguments);
};
b.stackAlloc = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.stackAlloc.apply(null, arguments);
};
b.stackRestore = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.stackRestore.apply(null, arguments);
};
b.__growWasmMemory = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.__growWasmMemory.apply(null, arguments);
};
b.dynCall_iii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iii.apply(null, arguments);
};
b.dynCall_iiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiii.apply(null, arguments);
};
b.dynCall_ii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_ii.apply(null, arguments);
};
b.dynCall_vi = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_vi.apply(null, arguments);
};
b.dynCall_iidiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iidiiii.apply(null, arguments);
};
b.dynCall_vii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_vii.apply(null, arguments);
};
b.dynCall_viijii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_viijii.apply(null, arguments);
};
b.dynCall_viiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_viiii.apply(null, arguments);
};
b.dynCall_jiji = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_jiji.apply(null, arguments);
};
b.dynCall_iiiiiiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiiiiii.apply(null, arguments);
};
b.dynCall_iiiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiii.apply(null, arguments);
};
b.dynCall_viiiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_viiiiii.apply(null, arguments);
};
b.dynCall_iiiiiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiiiii.apply(null, arguments);
};
b.dynCall_iiiiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiiii.apply(null, arguments);
};
b.dynCall_iiiiiijj = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiiijj.apply(null, arguments);
};
b.dynCall_iiiiij = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiij.apply(null, arguments);
};
b.dynCall_iiiiid = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiid.apply(null, arguments);
};
b.dynCall_iiiiijj = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiiijj.apply(null, arguments);
};
b.dynCall_iiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_iiiii.apply(null, arguments);
};
b.dynCall_v = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_v.apply(null, arguments);
};
b.dynCall_viiiii = function() {
  x(I, "you need to wait for the runtime to be ready (e.g. wait for main() to be called)");
  x(!0, "the runtime was exited (use NO_EXIT_RUNTIME to keep it alive after main() exits)");
  return b.asm.dynCall_viiiii.apply(null, arguments);
};
b.asm = Lc;
Object.getOwnPropertyDescriptor(b, "intArrayFromString") || (b.intArrayFromString = function() {
  v("'intArrayFromString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "intArrayToString") || (b.intArrayToString = function() {
  v("'intArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ccall") || (b.ccall = function() {
  v("'ccall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "cwrap") || (b.cwrap = function() {
  v("'cwrap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setValue") || (b.setValue = function() {
  v("'setValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getValue") || (b.getValue = function() {
  v("'getValue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "allocate") || (b.allocate = function() {
  v("'allocate' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getMemory") || (b.getMemory = function() {
  v("'getMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "UTF8ArrayToString") || (b.UTF8ArrayToString = function() {
  v("'UTF8ArrayToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF8ToString") || (b.UTF8ToString = function() {
  v("'UTF8ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF8Array") || (b.stringToUTF8Array = function() {
  v("'stringToUTF8Array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF8") || (b.stringToUTF8 = function() {
  v("'stringToUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "lengthBytesUTF8") || (b.lengthBytesUTF8 = function() {
  v("'lengthBytesUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackTrace") || (b.stackTrace = function() {
  v("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnPreRun") || (b.addOnPreRun = function() {
  v("'addOnPreRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnInit") || (b.addOnInit = function() {
  v("'addOnInit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnPreMain") || (b.addOnPreMain = function() {
  v("'addOnPreMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnExit") || (b.addOnExit = function() {
  v("'addOnExit' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addOnPostRun") || (b.addOnPostRun = function() {
  v("'addOnPostRun' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeStringToMemory") || (b.writeStringToMemory = function() {
  v("'writeStringToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeArrayToMemory") || (b.writeArrayToMemory = function() {
  v("'writeArrayToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeAsciiToMemory") || (b.writeAsciiToMemory = function() {
  v("'writeAsciiToMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addRunDependency") || (b.addRunDependency = function() {
  v("'addRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "removeRunDependency") || (b.removeRunDependency = function() {
  v("'removeRunDependency' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createFolder") || (b.FS_createFolder = function() {
  v("'FS_createFolder' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createPath") || (b.FS_createPath = function() {
  v("'FS_createPath' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createDataFile") || (b.FS_createDataFile = function() {
  v("'FS_createDataFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createPreloadedFile") || (b.FS_createPreloadedFile = function() {
  v("'FS_createPreloadedFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createLazyFile") || (b.FS_createLazyFile = function() {
  v("'FS_createLazyFile' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createLink") || (b.FS_createLink = function() {
  v("'FS_createLink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_createDevice") || (b.FS_createDevice = function() {
  v("'FS_createDevice' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "FS_unlink") || (b.FS_unlink = function() {
  v("'FS_unlink' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ). Alternatively, forcing filesystem support (-s FORCE_FILESYSTEM=1) can export this for you");
});
Object.getOwnPropertyDescriptor(b, "dynamicAlloc") || (b.dynamicAlloc = function() {
  v("'dynamicAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "loadDynamicLibrary") || (b.loadDynamicLibrary = function() {
  v("'loadDynamicLibrary' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "loadWebAssemblyModule") || (b.loadWebAssemblyModule = function() {
  v("'loadWebAssemblyModule' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getLEB") || (b.getLEB = function() {
  v("'getLEB' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getFunctionTables") || (b.getFunctionTables = function() {
  v("'getFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "alignFunctionTables") || (b.alignFunctionTables = function() {
  v("'alignFunctionTables' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registerFunctions") || (b.registerFunctions = function() {
  v("'registerFunctions' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "addFunction") || (b.addFunction = function() {
  v("'addFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "removeFunction") || (b.removeFunction = function() {
  v("'removeFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getFuncWrapper") || (b.getFuncWrapper = function() {
  v("'getFuncWrapper' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "prettyPrint") || (b.prettyPrint = function() {
  v("'prettyPrint' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "makeBigInt") || (b.makeBigInt = function() {
  v("'makeBigInt' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "dynCall") || (b.dynCall = function() {
  v("'dynCall' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getCompilerSetting") || (b.getCompilerSetting = function() {
  v("'getCompilerSetting' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "print") || (b.print = function() {
  v("'print' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "printErr") || (b.printErr = function() {
  v("'printErr' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getTempRet0") || (b.getTempRet0 = function() {
  v("'getTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setTempRet0") || (b.setTempRet0 = function() {
  v("'setTempRet0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "callMain") || (b.callMain = function() {
  v("'callMain' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "abort") || (b.abort = function() {
  v("'abort' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToNewUTF8") || (b.stringToNewUTF8 = function() {
  v("'stringToNewUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "abortOnCannotGrowMemory") || (b.abortOnCannotGrowMemory = function() {
  v("'abortOnCannotGrowMemory' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscripten_realloc_buffer") || (b.emscripten_realloc_buffer = function() {
  v("'emscripten_realloc_buffer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ENV") || (b.ENV = function() {
  v("'ENV' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setjmpId") || (b.setjmpId = function() {
  v("'setjmpId' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ERRNO_CODES") || (b.ERRNO_CODES = function() {
  v("'ERRNO_CODES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ERRNO_MESSAGES") || (b.ERRNO_MESSAGES = function() {
  v("'ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "DNS") || (b.DNS = function() {
  v("'DNS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GAI_ERRNO_MESSAGES") || (b.GAI_ERRNO_MESSAGES = function() {
  v("'GAI_ERRNO_MESSAGES' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "Protocols") || (b.Protocols = function() {
  v("'Protocols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "Sockets") || (b.Sockets = function() {
  v("'Sockets' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UNWIND_CACHE") || (b.UNWIND_CACHE = function() {
  v("'UNWIND_CACHE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readAsmConstArgs") || (b.readAsmConstArgs = function() {
  v("'readAsmConstArgs' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "jstoi_q") || (b.jstoi_q = function() {
  v("'jstoi_q' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "jstoi_s") || (b.jstoi_s = function() {
  v("'jstoi_s' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "PATH") || (b.PATH = function() {
  v("'PATH' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "PATH_FS") || (b.PATH_FS = function() {
  v("'PATH_FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SYSCALLS") || (b.SYSCALLS = function() {
  v("'SYSCALLS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "syscallMmap2") || (b.syscallMmap2 = function() {
  v("'syscallMmap2' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "syscallMunmap") || (b.syscallMunmap = function() {
  v("'syscallMunmap' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "JSEvents") || (b.JSEvents = function() {
  v("'JSEvents' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "demangle") || (b.demangle = function() {
  v("'demangle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "demangleAll") || (b.demangleAll = function() {
  v("'demangleAll' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "jsStackTrace") || (b.jsStackTrace = function() {
  v("'jsStackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackTrace") || (b.stackTrace = function() {
  v("'stackTrace' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToI64") || (b.writeI53ToI64 = function() {
  v("'writeI53ToI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToI64Clamped") || (b.writeI53ToI64Clamped = function() {
  v("'writeI53ToI64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToI64Signaling") || (b.writeI53ToI64Signaling = function() {
  v("'writeI53ToI64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToU64Clamped") || (b.writeI53ToU64Clamped = function() {
  v("'writeI53ToU64Clamped' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "writeI53ToU64Signaling") || (b.writeI53ToU64Signaling = function() {
  v("'writeI53ToU64Signaling' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readI53FromI64") || (b.readI53FromI64 = function() {
  v("'readI53FromI64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readI53FromU64") || (b.readI53FromU64 = function() {
  v("'readI53FromU64' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "convertI32PairToI53") || (b.convertI32PairToI53 = function() {
  v("'convertI32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "convertU32PairToI53") || (b.convertU32PairToI53 = function() {
  v("'convertU32PairToI53' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "Browser") || (b.Browser = function() {
  v("'Browser' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "FS") || (b.FS = function() {
  v("'FS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "MEMFS") || (b.MEMFS = function() {
  v("'MEMFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "TTY") || (b.TTY = function() {
  v("'TTY' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "PIPEFS") || (b.PIPEFS = function() {
  v("'PIPEFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SOCKFS") || (b.SOCKFS = function() {
  v("'SOCKFS' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GL") || (b.GL = function() {
  v("'GL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGet") || (b.emscriptenWebGLGet = function() {
  v("'emscriptenWebGLGet' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGetTexPixelData") || (b.emscriptenWebGLGetTexPixelData = function() {
  v("'emscriptenWebGLGetTexPixelData' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGetUniform") || (b.emscriptenWebGLGetUniform = function() {
  v("'emscriptenWebGLGetUniform' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emscriptenWebGLGetVertexAttrib") || (b.emscriptenWebGLGetVertexAttrib = function() {
  v("'emscriptenWebGLGetVertexAttrib' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "AL") || (b.AL = function() {
  v("'AL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL") || (b.SDL = function() {
  v("'SDL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "SDL_gfx") || (b.SDL_gfx = function() {
  v("'SDL_gfx' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLUT") || (b.GLUT = function() {
  v("'GLUT' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "EGL") || (b.EGL = function() {
  v("'EGL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLFW_Window") || (b.GLFW_Window = function() {
  v("'GLFW_Window' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLFW") || (b.GLFW = function() {
  v("'GLFW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "GLEW") || (b.GLEW = function() {
  v("'GLEW' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "IDBStore") || (b.IDBStore = function() {
  v("'IDBStore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "runAndAbortIfError") || (b.runAndAbortIfError = function() {
  v("'runAndAbortIfError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emval_handle_array") || (b.emval_handle_array = function() {
  v("'emval_handle_array' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emval_free_list") || (b.emval_free_list = function() {
  v("'emval_free_list' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emval_symbols") || (b.emval_symbols = function() {
  v("'emval_symbols' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "init_emval") || (b.init_emval = function() {
  v("'init_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "count_emval_handles") || (b.count_emval_handles = function() {
  v("'count_emval_handles' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "get_first_emval") || (b.get_first_emval = function() {
  v("'get_first_emval' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getStringOrSymbol") || (b.getStringOrSymbol = function() {
  v("'getStringOrSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "requireHandle") || (b.requireHandle = function() {
  v("'requireHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emval_newers") || (b.emval_newers = function() {
  v("'emval_newers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "craftEmvalAllocator") || (b.craftEmvalAllocator = function() {
  v("'craftEmvalAllocator' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emval_get_global") || (b.emval_get_global = function() {
  v("'emval_get_global' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "emval_methodCallers") || (b.emval_methodCallers = function() {
  v("'emval_methodCallers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "InternalError") || (b.InternalError = function() {
  v("'InternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "BindingError") || (b.BindingError = function() {
  v("'BindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UnboundTypeError") || (b.UnboundTypeError = function() {
  v("'UnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "PureVirtualError") || (b.PureVirtualError = function() {
  v("'PureVirtualError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "init_embind") || (b.init_embind = function() {
  v("'init_embind' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "throwInternalError") || (b.throwInternalError = function() {
  v("'throwInternalError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "throwBindingError") || (b.throwBindingError = function() {
  v("'throwBindingError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "throwUnboundTypeError") || (b.throwUnboundTypeError = function() {
  v("'throwUnboundTypeError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ensureOverloadTable") || (b.ensureOverloadTable = function() {
  v("'ensureOverloadTable' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "exposePublicSymbol") || (b.exposePublicSymbol = function() {
  v("'exposePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "replacePublicSymbol") || (b.replacePublicSymbol = function() {
  v("'replacePublicSymbol' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "extendError") || (b.extendError = function() {
  v("'extendError' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "createNamedFunction") || (b.createNamedFunction = function() {
  v("'createNamedFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registeredInstances") || (b.registeredInstances = function() {
  v("'registeredInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getBasestPointer") || (b.getBasestPointer = function() {
  v("'getBasestPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registerInheritedInstance") || (b.registerInheritedInstance = function() {
  v("'registerInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "unregisterInheritedInstance") || (b.unregisterInheritedInstance = function() {
  v("'unregisterInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getInheritedInstance") || (b.getInheritedInstance = function() {
  v("'getInheritedInstance' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getInheritedInstanceCount") || (b.getInheritedInstanceCount = function() {
  v("'getInheritedInstanceCount' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getLiveInheritedInstances") || (b.getLiveInheritedInstances = function() {
  v("'getLiveInheritedInstances' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registeredTypes") || (b.registeredTypes = function() {
  v("'registeredTypes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "awaitingDependencies") || (b.awaitingDependencies = function() {
  v("'awaitingDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "typeDependencies") || (b.typeDependencies = function() {
  v("'typeDependencies' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registeredPointers") || (b.registeredPointers = function() {
  v("'registeredPointers' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "registerType") || (b.registerType = function() {
  v("'registerType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "whenDependentTypesAreResolved") || (b.whenDependentTypesAreResolved = function() {
  v("'whenDependentTypesAreResolved' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "embind_charCodes") || (b.embind_charCodes = function() {
  v("'embind_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "embind_init_charCodes") || (b.embind_init_charCodes = function() {
  v("'embind_init_charCodes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "readLatin1String") || (b.readLatin1String = function() {
  v("'readLatin1String' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getTypeName") || (b.getTypeName = function() {
  v("'getTypeName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "heap32VectorToArray") || (b.heap32VectorToArray = function() {
  v("'heap32VectorToArray' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "requireRegisteredType") || (b.requireRegisteredType = function() {
  v("'requireRegisteredType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "getShiftFromSize") || (b.getShiftFromSize = function() {
  v("'getShiftFromSize' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "integerReadValueFromPointer") || (b.integerReadValueFromPointer = function() {
  v("'integerReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "enumReadValueFromPointer") || (b.enumReadValueFromPointer = function() {
  v("'enumReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "floatReadValueFromPointer") || (b.floatReadValueFromPointer = function() {
  v("'floatReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "simpleReadValueFromPointer") || (b.simpleReadValueFromPointer = function() {
  v("'simpleReadValueFromPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "runDestructors") || (b.runDestructors = function() {
  v("'runDestructors' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "new_") || (b.new_ = function() {
  v("'new_' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "craftInvokerFunction") || (b.craftInvokerFunction = function() {
  v("'craftInvokerFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "embind__requireFunction") || (b.embind__requireFunction = function() {
  v("'embind__requireFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "tupleRegistrations") || (b.tupleRegistrations = function() {
  v("'tupleRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "structRegistrations") || (b.structRegistrations = function() {
  v("'structRegistrations' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "genericPointerToWireType") || (b.genericPointerToWireType = function() {
  v("'genericPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "constNoSmartPtrRawPointerToWireType") || (b.constNoSmartPtrRawPointerToWireType = function() {
  v("'constNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "nonConstNoSmartPtrRawPointerToWireType") || (b.nonConstNoSmartPtrRawPointerToWireType = function() {
  v("'nonConstNoSmartPtrRawPointerToWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "init_RegisteredPointer") || (b.init_RegisteredPointer = function() {
  v("'init_RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "RegisteredPointer") || (b.RegisteredPointer = function() {
  v("'RegisteredPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "RegisteredPointer_getPointee") || (b.RegisteredPointer_getPointee = function() {
  v("'RegisteredPointer_getPointee' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "RegisteredPointer_destructor") || (b.RegisteredPointer_destructor = function() {
  v("'RegisteredPointer_destructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "RegisteredPointer_deleteObject") || (b.RegisteredPointer_deleteObject = function() {
  v("'RegisteredPointer_deleteObject' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "RegisteredPointer_fromWireType") || (b.RegisteredPointer_fromWireType = function() {
  v("'RegisteredPointer_fromWireType' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "runDestructor") || (b.runDestructor = function() {
  v("'runDestructor' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "releaseClassHandle") || (b.releaseClassHandle = function() {
  v("'releaseClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "finalizationGroup") || (b.finalizationGroup = function() {
  v("'finalizationGroup' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "detachFinalizer_deps") || (b.detachFinalizer_deps = function() {
  v("'detachFinalizer_deps' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "detachFinalizer") || (b.detachFinalizer = function() {
  v("'detachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "attachFinalizer") || (b.attachFinalizer = function() {
  v("'attachFinalizer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "makeClassHandle") || (b.makeClassHandle = function() {
  v("'makeClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "init_ClassHandle") || (b.init_ClassHandle = function() {
  v("'init_ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ClassHandle") || (b.ClassHandle = function() {
  v("'ClassHandle' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ClassHandle_isAliasOf") || (b.ClassHandle_isAliasOf = function() {
  v("'ClassHandle_isAliasOf' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "throwInstanceAlreadyDeleted") || (b.throwInstanceAlreadyDeleted = function() {
  v("'throwInstanceAlreadyDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ClassHandle_clone") || (b.ClassHandle_clone = function() {
  v("'ClassHandle_clone' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ClassHandle_delete") || (b.ClassHandle_delete = function() {
  v("'ClassHandle_delete' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "deletionQueue") || (b.deletionQueue = function() {
  v("'deletionQueue' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ClassHandle_isDeleted") || (b.ClassHandle_isDeleted = function() {
  v("'ClassHandle_isDeleted' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "ClassHandle_deleteLater") || (b.ClassHandle_deleteLater = function() {
  v("'ClassHandle_deleteLater' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "flushPendingDeletes") || (b.flushPendingDeletes = function() {
  v("'flushPendingDeletes' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "delayFunction") || (b.delayFunction = function() {
  v("'delayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "setDelayFunction") || (b.setDelayFunction = function() {
  v("'setDelayFunction' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "RegisteredClass") || (b.RegisteredClass = function() {
  v("'RegisteredClass' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "shallowCopyInternalPointer") || (b.shallowCopyInternalPointer = function() {
  v("'shallowCopyInternalPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "downcastPointer") || (b.downcastPointer = function() {
  v("'downcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "upcastPointer") || (b.upcastPointer = function() {
  v("'upcastPointer' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "validateThis") || (b.validateThis = function() {
  v("'validateThis' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "char_0") || (b.char_0 = function() {
  v("'char_0' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "char_9") || (b.char_9 = function() {
  v("'char_9' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "makeLegalFunctionName") || (b.makeLegalFunctionName = function() {
  v("'makeLegalFunctionName' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "warnOnce") || (b.warnOnce = function() {
  v("'warnOnce' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackSave") || (b.stackSave = function() {
  v("'stackSave' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackRestore") || (b.stackRestore = function() {
  v("'stackRestore' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stackAlloc") || (b.stackAlloc = function() {
  v("'stackAlloc' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "AsciiToString") || (b.AsciiToString = function() {
  v("'AsciiToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToAscii") || (b.stringToAscii = function() {
  v("'stringToAscii' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF16ToString") || (b.UTF16ToString = function() {
  v("'UTF16ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF16") || (b.stringToUTF16 = function() {
  v("'stringToUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "lengthBytesUTF16") || (b.lengthBytesUTF16 = function() {
  v("'lengthBytesUTF16' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "UTF32ToString") || (b.UTF32ToString = function() {
  v("'UTF32ToString' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "stringToUTF32") || (b.stringToUTF32 = function() {
  v("'stringToUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "lengthBytesUTF32") || (b.lengthBytesUTF32 = function() {
  v("'lengthBytesUTF32' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "allocateUTF8") || (b.allocateUTF8 = function() {
  v("'allocateUTF8' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
Object.getOwnPropertyDescriptor(b, "allocateUTF8OnStack") || (b.allocateUTF8OnStack = function() {
  v("'allocateUTF8OnStack' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
});
b.writeStackCookie = Da;
b.checkStackCookie = Ea;
b.abortStackOverflow = function(a) {
  v("Stack overflow! Attempted to allocate " + a + " bytes on the stack, but stack has only " + (23248 - da() + a) + " bytes available!");
};
Object.getOwnPropertyDescriptor(b, "ALLOC_NORMAL") || Object.defineProperty(b, "ALLOC_NORMAL", {configurable:!0, get:function() {
  v("'ALLOC_NORMAL' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(b, "ALLOC_STACK") || Object.defineProperty(b, "ALLOC_STACK", {configurable:!0, get:function() {
  v("'ALLOC_STACK' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(b, "ALLOC_DYNAMIC") || Object.defineProperty(b, "ALLOC_DYNAMIC", {configurable:!0, get:function() {
  v("'ALLOC_DYNAMIC' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
Object.getOwnPropertyDescriptor(b, "ALLOC_NONE") || Object.defineProperty(b, "ALLOC_NONE", {configurable:!0, get:function() {
  v("'ALLOC_NONE' was not exported. add it to EXTRA_EXPORTED_RUNTIME_METHODS (see the FAQ)");
}});
var Mc;
b.then = function(a) {
  if (Mc) {
    a(b);
  } else {
    var c = b.onRuntimeInitialized;
    b.onRuntimeInitialized = function() {
      c && c();
      a(b);
    };
  }
  return b;
};
Sa = function Nc() {
  Mc || Oc();
  Mc || (Sa = Nc);
};
function Oc() {
  function a() {
    if (!Mc && (Mc = !0, b.calledRun = !0, !ka)) {
      Ea();
      x(!I);
      I = !0;
      if (!b.noFSInit && !Ub) {
        x(!Ub, "FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)");
        Ub = !0;
        Sb();
        b.stdin = b.stdin;
        b.stdout = b.stdout;
        b.stderr = b.stderr;
        b.stdin ? Wb("stdin", b.stdin) : Ob("/dev/tty", "/dev/stdin");
        b.stdout ? Wb("stdout", null, b.stdout) : Ob("/dev/tty", "/dev/stdout");
        b.stderr ? Wb("stderr", null, b.stderr) : Ob("/dev/tty1", "/dev/stderr");
        var c = Pb("/dev/stdin", "r"), d = Pb("/dev/stdout", "w"), e = Pb("/dev/stderr", "w");
        x(0 === c.i, "invalid handle for stdin (" + c.i + ")");
        x(1 === d.i, "invalid handle for stdout (" + d.i + ")");
        x(2 === e.i, "invalid handle for stderr (" + e.i + ")");
      }
      Ha(Ja);
      Ea();
      yb = !1;
      Ha(Ka);
      if (b.onRuntimeInitialized) {
        b.onRuntimeInitialized();
      }
      x(!b._main, 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');
      Ea();
      if (b.postRun) {
        for ("function" == typeof b.postRun && (b.postRun = [b.postRun]); b.postRun.length;) {
          c = b.postRun.shift(), Ma.unshift(c);
        }
      }
      Ha(Ma);
    }
  }
  if (!(0 < J)) {
    Da();
    if (b.preRun) {
      for ("function" == typeof b.preRun && (b.preRun = [b.preRun]); b.preRun.length;) {
        Na();
      }
    }
    Ha(Ia);
    0 < J || (b.setStatus ? (b.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        b.setStatus("");
      }, 1);
      a();
    }, 1)) : a(), Ea());
  }
}
b.run = Oc;
if (b.preInit) {
  for ("function" == typeof b.preInit && (b.preInit = [b.preInit]); 0 < b.preInit.length;) {
    b.preInit.pop()();
  }
}
noExitRuntime = !0;
Oc();



  return Module
}
);
})();
export default Module;
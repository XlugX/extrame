!function(D){function I(e){delete installedChunks[e]}var a=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){var t=e,r=n;if(T[t]&&_[t]){for(var i in _[t]=!1,r)Object.prototype.hasOwnProperty.call(r,i)&&(B[i]=r[i]);0==--l&&0===p&&v()}a&&a(e,n)};var R,r=!0,q="62a841989f35367d8c65",n=1e4,S={},H=[],i=[];function o(n){var t=Y[n];if(!t)return G;function r(e){return t.hot.active?(Y[e]?-1===Y[e].parents.indexOf(n)&&Y[e].parents.push(n):(H=[n],R=e),-1===t.children.indexOf(e)&&t.children.push(e)):(console.warn("[HMR] unexpected require("+e+") from disposed module "+n),H=[]),G(e)}for(var e in G)Object.prototype.hasOwnProperty.call(G,e)&&"e"!==e&&"t"!==e&&Object.defineProperty(r,e,function(n){return{configurable:!0,enumerable:!0,get:function(){return G[n]},set:function(e){G[n]=e}}}(e));return r.e=function(e){return"ready"===c&&L("prepare"),p++,G.e(e).then(n,function(e){throw n(),e});function n(){p--,"prepare"===c&&(u[e]||h(e),0===p&&0===l&&v())}},r.t=function(e,n){return 1&n&&(e=r(e)),G.t(e,-2&n)},r}var s=[],c="idle";function L(e){c=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var d,B,A,U,l=0,p=0,u={},_={},T={};function W(e){return+e+""===e?+e:e}function f(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return r=e,L("check"),a=(a=n)||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=G.p+""+q+".hot-update.json";r.open("GET",i,!0),r.timeout=a,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}}).then(function(e){if(!e)return L(X()?"ready":"idle"),null;_={},u={},T=e.c,A=e.h,L("prepare");e=new Promise(function(e,n){d={resolve:e,reject:n}});B={};return h("main"),"prepare"===c&&0===p&&0===l&&v(),e});var a}function h(e){var n,t;T[e]?(_[e]=!0,l++,n=e,(t=document.createElement("script")).charset="utf-8",t.src=G.p+""+n+"."+q+".hot-update.js",document.head.appendChild(t)):u[e]=!0}function v(){L("ready");var n=d;if(d=null,n)if(r)Promise.resolve().then(function(){return m(r)}).then(function(e){n.resolve(e)},function(e){n.reject(e)});else{var e,t=[];for(e in B)Object.prototype.hasOwnProperty.call(B,e)&&t.push(W(e));n.resolve(t)}}function m(e){if("ready"!==c)throw new Error("apply() is only allowed in ready status");return function e(t){X();var n;var r;var i;var l;function a(e){for(var n=[e],t={},r=n.map(function(e){return{chain:[e],id:e}});0<r.length;){var i=r.pop(),a=i.id,o=i.chain;if((l=Y[a])&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:o,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:o,moduleId:a};for(var s=0;s<l.parents.length;s++){var c=l.parents[s],d=Y[c];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:o.concat([c]),moduleId:a,parentId:c};-1===n.indexOf(c)&&(d.hot._acceptedDependencies[a]?(t[c]||(t[c]=[]),p(t[c],[a])):(delete t[c],n.push(c),r.push({chain:o.concat([c]),id:c})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}var o={};var s=[];var c={};var d=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var u in B)if(Object.prototype.hasOwnProperty.call(B,u)){w=W(u),_=B[u]?a(w):{type:"disposed",moduleId:u};var _,f=!1,h=!1,v=!1,m="";switch(_.chain&&(m="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(f=new Error("Aborted because of self decline: "+_.moduleId+m));break;case"declined":t.onDeclined&&t.onDeclined(_),t.ignoreDeclined||(f=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+m));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(_),t.ignoreUnaccepted||(f=new Error("Aborted because "+w+" is not accepted"+m));break;case"accepted":t.onAccepted&&t.onAccepted(_),h=!0;break;case"disposed":t.onDisposed&&t.onDisposed(_),v=!0;break;default:throw new Error("Unexception type "+_.type)}if(f)return L("abort"),Promise.reject(f);if(h)for(var w in c[w]=B[w],p(s,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,w)&&(o[w]||(o[w]=[]),p(o[w],_.outdatedDependencies[w]));v&&(p(s,[_.moduleId]),c[w]=d)}var b=[];for(r=0;r<s.length;r++)w=s[r],Y[w]&&Y[w].hot._selfAccepted&&c[w]!==d&&!Y[w].hot._selfInvalidated&&b.push({module:w,parents:Y[w].parents.slice(),errorHandler:Y[w].hot._selfAccepted});L("dispose");Object.keys(T).forEach(function(e){!1===T[e]&&I(e)});var g;var y=s.slice();for(;0<y.length;)if(w=y.pop(),l=Y[w]){var x={},P=l.hot._disposeHandlers;for(i=0;i<P.length;i++)(n=P[i])(x);for(S[w]=x,l.hot.active=!1,delete Y[w],delete o[w],i=0;i<l.children.length;i++){var j=Y[l.children[i]];j&&0<=(g=j.parents.indexOf(w))&&j.parents.splice(g,1)}}var O;var E;for(w in o)if(Object.prototype.hasOwnProperty.call(o,w)&&(l=Y[w]))for(E=o[w],i=0;i<E.length;i++)O=E[i],0<=(g=l.children.indexOf(O))&&l.children.splice(g,1);L("apply");void 0!==A&&(q=A,A=void 0);B=void 0;for(w in c)Object.prototype.hasOwnProperty.call(c,w)&&(D[w]=c[w]);var k=null;for(w in o)if(Object.prototype.hasOwnProperty.call(o,w)&&(l=Y[w])){E=o[w];var C=[];for(r=0;r<E.length;r++)O=E[r],(n=l.hot._acceptedDependencies[O])&&-1===C.indexOf(n)&&C.push(n);for(r=0;r<C.length;r++){n=C[r];try{n(E)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:w,dependencyId:E[r],error:e}),t.ignoreErrored||(k=k||e)}}}for(r=0;r<b.length;r++){var M=b[r];w=M.module,H=M.parents,R=w;try{G(w)}catch(n){if("function"==typeof M.errorHandler)try{M.errorHandler(n)}catch(e){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:w,error:e,originalError:n}),k=(k=t.ignoreErrored?k:k||e)||n}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:w,error:n}),t.ignoreErrored||(k=k||n)}}if(k)return L("fail"),Promise.reject(k);if(U)return e(t).then(function(n){return s.forEach(function(e){n.indexOf(e)<0&&n.push(e)}),n});L("idle");return new Promise(function(e){e(s)})}(e=e||{})}function X(){if(U)return B=B||{},U.forEach(w),!(U=void 0)}function w(e){Object.prototype.hasOwnProperty.call(B,e)||(B[e]=D[e])}var Y={};function G(e){var n,t,r;return(Y[e]||(n=Y[e]={i:e,l:!1,exports:{},hot:(r={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:R!==(t=e),active:!0,accept:function(e,n){if(void 0===e)r._selfAccepted=!0;else if("function"==typeof e)r._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)r._acceptedDependencies[e[t]]=n||function(){};else r._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)r._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)r._declinedDependencies[e[n]]=!0;else r._declinedDependencies[e]=!0},dispose:function(e){r._disposeHandlers.push(e)},addDisposeHandler:function(e){r._disposeHandlers.push(e)},removeDisposeHandler:function(e){e=r._disposeHandlers.indexOf(e);0<=e&&r._disposeHandlers.splice(e,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":(B={})[t]=D[t],L("ready");break;case"ready":w(t);break;case"prepare":case"check":case"dispose":case"apply":(U=U||[]).push(t)}},check:f,apply:m,status:function(e){if(!e)return c;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){e=s.indexOf(e);0<=e&&s.splice(e,1)},data:S[t]},R=void 0,r),parents:(i=H,H=[],i),children:[]},D[e].call(n.exports,n,n.exports,o(e)),n.l=!0,n)).exports}G.m=D,G.c=Y,G.d=function(e,n,t){G.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},G.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},G.t=function(n,e){if(1&e&&(n=G(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(G.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)G.d(t,r,function(e){return n[e]}.bind(null,r));return t},G.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return G.d(n,"a",n),n},G.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},G.p="",G.h=function(){return q},o("./app/js/src/index.js")(G.s="./app/js/src/index.js")}({"./app/js/src/drawBg.js":
/*!******************************!*\
  !*** ./app/js/src/drawBg.js ***!
  \******************************/
/*! exports provided: Canvas */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });\n/* harmony import */ var _glowParticle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./glowParticle.js */ "./app/js/src/glowParticle.js");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\n\nvar COLORS = [{\n  r: 147,\n  g: 173,\n  b: 233\n}, {\n  r: 133,\n  g: 204,\n  b: 244\n}, {\n  r: 151,\n  g: 221,\n  b: 183\n}, {\n  r: 255,\n  g: 243,\n  b: 194\n}, {\n  r: 254,\n  g: 236,\n  b: 208\n}, {\n  r: 246,\n  g: 189,\n  b: 181\n}, {\n  r: 235,\n  g: 170,\n  b: 186\n}, {\n  r: 175,\n  g: 127,\n  b: 223\n}, {\n  r: 144,\n  g: 90,\n  b: 233\n}];\nvar Canvas = /*#__PURE__*/function () {\n  function Canvas() {\n    _classCallCheck(this, Canvas);\n\n    this.canvas = document.createElement(\'canvas\');\n    this.wrapper = document.getElementById(\'wrapper\');\n    this.container = document.querySelector(\'.container\');\n    document.body.appendChild(this.canvas);\n    this.ctx = this.canvas.getContext(\'2d\');\n    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;\n    this.totalParticles = 25;\n    this.particles = [];\n    this.maxRadius = 190;\n    this.minRadius = 140;\n    window.addEventListener(\'resize\', this.resize.bind(this), true);\n    window.requestAnimationFrame(this.animate.bind(this));\n    this.resize();\n  }\n\n  _createClass(Canvas, [{\n    key: "resize",\n    value: function resize() {\n      this.stageWidth = this.wrapper.clientWidth;\n      this.stageHeight = this.wrapper.clientHeight;\n      this.canvas.width = this.stageWidth;\n      this.canvas.height = this.stageHeight; // this.ctx.scale(this.pixelRatio, this.pixelRatio);\n\n      this.ctx.globalCompositeOperation = \'saturation\';\n      this.createParticles();\n    }\n  }, {\n    key: "createParticles",\n    value: function createParticles() {\n      var curColor = 0;\n      this.particles = [];\n\n      for (var i = 0; i < this.totalParticles; i++) {\n        var item = new _glowParticle_js__WEBPACK_IMPORTED_MODULE_0__["GlowParticle"](Math.random() * this.stageWidth, Math.random() * this.stageHeight, Math.random() * (this.maxRadius - this.minRadius) + this.minRadius, COLORS[curColor]);\n\n        if (++curColor >= COLORS.length) {\n          curColor = 0;\n        }\n\n        ;\n        this.particles[i] = item;\n      }\n    }\n  }, {\n    key: "animate",\n    value: function animate() {\n      window.requestAnimationFrame(this.animate.bind(this));\n      this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);\n\n      for (var i = 0; i < this.totalParticles; i++) {\n        var item = this.particles[i];\n        item.animate(this.ctx, this.stageWidth, this.stageHeight);\n      }\n    }\n  }]);\n\n  return Canvas;\n}();\n;\n\n//# sourceURL=webpack:///./app/js/src/drawBg.js?')},"./app/js/src/glowParticle.js":
/*!************************************!*\
  !*** ./app/js/src/glowParticle.js ***!
  \************************************/
/*! exports provided: GlowParticle */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlowParticle", function() { return GlowParticle; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }\n\nvar PI2 = Math.PI * 2;\nvar GlowParticle = /*#__PURE__*/function () {\n  function GlowParticle(x, y, radius, rgb) {\n    _classCallCheck(this, GlowParticle);\n\n    this.x = x;\n    this.y = y;\n    this.radius = radius;\n    this.rgb = rgb;\n    this.vx = Math.random() * 4;\n    this.vy = Math.random() * 4;\n    this.sinValue = Math.random();\n  }\n\n  _createClass(GlowParticle, [{\n    key: "animate",\n    value: function animate(ctx, stageWidth, stageHeight) {\n      this.sinValue += 0.01;\n      this.radius += Math.sin(this.sinValue);\n      this.x += this.vx;\n      this.y += this.vy;\n\n      if (this.x < 0) {\n        this.vx *= -1;\n        this.x += 5;\n      } else if (this.x > stageWidth) {\n        this.vx *= -1;\n        this.x -= 15;\n      }\n\n      if (this.y < 0) {\n        this.vy *= -1;\n        this.y += 15;\n      } else if (this.y > stageHeight) {\n        this.vy *= -1;\n        this.y -= 15;\n      }\n\n      ctx.beginPath();\n      var g = ctx.createRadialGradient(this.x, this.y, this.radius * 0.1, this.x, this.y, this.radius);\n      g.addColorStop(0, "rgba(".concat(this.rgb.r, ", ").concat(this.rgb.g, ", ").concat(this.rgb.b, ", 1)"));\n      g.addColorStop(1, "rgba(".concat(this.rgb.r, ", ").concat(this.rgb.g, ", ").concat(this.rgb.b, ", 0)")); //TODO узнать за этот вариант\n      // ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`;\n      // ctx.fillStyle = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)`;\n\n      ctx.fillStyle = g;\n      ctx.arc(this.x, this.y, this.radius, 0, 2 * PI2, false);\n      ctx.fill();\n    }\n  }]);\n\n  return GlowParticle;\n}();\n\n//# sourceURL=webpack:///./app/js/src/glowParticle.js?')},"./app/js/src/index.js":
/*!*****************************!*\
  !*** ./app/js/src/index.js ***!
  \*****************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parallax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parallax */ \"./app/js/src/parallax.js\");\n/* harmony import */ var _drawBg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawBg */ \"./app/js/src/drawBg.js\");\n/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleMenu */ \"./app/js/src/toggleMenu.js\");\n\n\n // import Swiper JS\n// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'\n// // import Swiper styles\n// import 'swiper/css';\n\nvar containers = document.querySelectorAll('.container'); // const wrapper = document.getElementById('wrapper');\n\nvar title = document.getElementById('title');\nvar preview = document.querySelector('.preview');\nvar header = document.getElementById('header');\ndocument.addEventListener('DOMContentLoaded', function () {\n  document.body.style.overflow = 'hidden';\n  new _drawBg__WEBPACK_IMPORTED_MODULE_1__[\"Canvas\"]();\n  Object(_parallax__WEBPACK_IMPORTED_MODULE_0__[\"parallaxText\"])();\n  var swiper = new Swiper('.swiper', {\n    loop: true,\n    centeredSlides: true,\n    slidesPerView: 3,\n    spaceBetween: 30,\n    parallax: true,\n    navigation: {\n      nextEl: '.button-next',\n      prevEl: '.button-prev'\n    },\n    on: {\n      slideChange: function slideChange() {\n        if (swiper) {\n          var indexCurrent = swiper.activeIndex;\n          var activeSlide = swiper.slides[indexCurrent]; // activeSlide.style.backgroundColor = 'red';\n        }\n      }\n    }\n  });\n  setTimeout(function () {\n    title.classList.add('remove');\n\n    if (title.classList.contains('remove')) {\n      setTimeout(function () {\n        document.body.style.overflow = 'auto';\n        preview.classList.add('remove');\n      }, 500);\n    }\n  }, 2500);\n  Object(_toggleMenu__WEBPACK_IMPORTED_MODULE_2__[\"toggleMenu\"])(); // createSlider();\n});\n\n//# sourceURL=webpack:///./app/js/src/index.js?")},"./app/js/src/parallax.js":
/*!********************************!*\
  !*** ./app/js/src/parallax.js ***!
  \********************************/
/*! exports provided: parallaxText */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parallaxText", function() { return parallaxText; });\nvar parallaxText = function parallaxText() {\n  var coubs = document.querySelectorAll(".coub");\n  var textUp = document.querySelectorAll(\'.parallax-up\');\n  var textDown = document.querySelectorAll(\'.parallax-down\');\n\n  if (!!coubs) {\n    window.onpointermove = function (e) {\n      var mouseX = e.clientX,\n          mouseY = e.clientY;\n      var xDecimal = mouseX / window.innerWidth,\n          yDecimal = mouseY / window.innerHeight;\n      var maxX = window.innerWidth,\n          maxY = window.innerHeight;\n      var panX = maxX * xDecimal / 2,\n          panY = maxY * yDecimal / 2;\n      var posY = Math.round(panY * Math.random() / 6);\n      coubs.forEach(function (item) {\n        item.animate({\n          transform: "translate(".concat(panX * Math.random() / 3, "px, ").concat(panY * Math.random() / 3, "px)")\n        }, {\n          duration: 9000,\n          fill: "forwards",\n          easing: "ease"\n        });\n      });\n      textUp.forEach(function (item) {\n        item.animate({\n          transform: "translate(".concat(panX * 0.001, "px, ").concat(posY, "px)")\n        }, {\n          duration: 10000,\n          fill: "forwards",\n          easing: "ease"\n        });\n      });\n      textDown.forEach(function (item) {\n        item.animate({\n          transform: "translate(".concat(panX * Math.random() / 4, "px, -").concat(panY * 0.001, "px)")\n        }, {\n          duration: 25000,\n          fill: "forwards",\n          easing: "ease"\n        });\n      });\n    };\n  }\n};\n\n//# sourceURL=webpack:///./app/js/src/parallax.js?')},"./app/js/src/toggleMenu.js":
/*!**********************************!*\
  !*** ./app/js/src/toggleMenu.js ***!
  \**********************************/
/*! exports provided: toggleMenu */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleMenu\", function() { return toggleMenu; });\nvar toggleMenu = function toggleMenu() {\n  var openedMenuBtn = document.getElementById('menu-btn');\n  var closeBtn = document.getElementById('menu-close-btn');\n  var sidebar = document.getElementById('sidebar');\n  openedMenuBtn.addEventListener('click', function () {\n    sidebar.classList.add('open');\n  });\n  closeBtn.addEventListener('click', function () {\n    sidebar.classList.remove('open');\n  });\n};\n\n//# sourceURL=webpack:///./app/js/src/toggleMenu.js?")}});
(function(e){function t(t){for(var n,i,c=t[0],l=t[1],s=t[2],p=0,f=[];p<c.length;p++)i=c[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(f.length)f.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,c=1;c<r.length;c++){var l=r[c];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"indigo",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.showDrawer=!e.showDrawer}}}),r("v-toolbar-title",[e._v("Brick a Pic")]),r("v-spacer"),r("v-btn",{attrs:{text:"",href:"/"}},[e._v("About")]),r("v-btn",{attrs:{text:"",href:"https://github.com/brick-a-pic/brick-a-pic",target:"_blank"}},[e._v("Source")])],1),r("v-content",[r("Preview"),r("v-container",{attrs:{fluid:""}},[e.showDrawer?r("Settings"):e._e()],1)],1)],1)},a=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"background-wrapper"},[r("svg",{staticClass:"preview-svg",attrs:{viewBox:"0 0 200 100"}},[r("rect",{attrs:{x:"0",y:"0",width:"200",height:"100",stroke:"gray",fill:"none"}}),r("rect",{attrs:{x:"10",y:"10",width:"50",height:"50",fill:"black"}})])])},c=[],l={name:"Preview"},s=l,u=(r("773a"),r("2877")),p=Object(u["a"])(s,i,c,!1,null,null,null),f=p.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{attrs:{"max-width":"20em"}},[r("v-card-title",[e._v("Options")]),r("v-card-text",[r("v-btn",{attrs:{color:"primary"}},[e._v("Open image")])],1)],1)},d=[],b={name:"Settings"},g=b,h=r("6544"),w=r.n(h),y=r("8336"),m=r("b0af"),_=r("99d9"),k=Object(u["a"])(g,v,d,!1,null,null,null),x=k.exports;w()(k,{VBtn:y["a"],VCard:m["a"],VCardText:_["a"],VCardTitle:_["b"]});var O={components:{Preview:f,Settings:x},data:function(){return{showDrawer:!0}}},j=O,P=r("7496"),V=r("40dc"),S=r("5bc1"),C=r("a523"),A=r("a75b"),B=r("2fa4"),T=r("2a7f"),D=Object(u["a"])(j,o,a,!1,null,null,null),E=D.exports;w()(D,{VApp:P["a"],VAppBar:V["a"],VAppBarNavIcon:S["a"],VBtn:y["a"],VContainer:C["a"],VContent:A["a"],VSpacer:B["a"],VToolbarTitle:T["a"]});var M=r("9483");Object(M["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var N=r("f309");n["a"].use(N["a"]);var $=new N["a"]({});r("d5e8"),r("5363");n["a"].config.productionTip=!1,new n["a"]({vuetify:$,render:function(e){return e(E)}}).$mount("#app")},"773a":function(e,t,r){"use strict";var n=r("968f"),o=r.n(n);o.a},"968f":function(e,t,r){}});
//# sourceMappingURL=app.e73a04fd.js.map
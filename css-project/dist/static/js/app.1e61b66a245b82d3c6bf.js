webpackJsonp([1],{"4y6v":function(t,e){},"5OHe":function(t,e){},NHnr:function(t,e,n){"use strict";function a(t){n("cvYu")}function o(t){n("OSt+")}function r(t){n("4y6v")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("VCXJ"),s=n("5KA/"),c=n.n(s),u=(n("wW0W"),n("5OHe"),{name:"app"}),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},d=[],f={render:l,staticRenderFns:d},p=f,v=n("Z0/y"),m=a,h=v(u,p,!1,m,null,null),g=h.exports,_=n("zO6J"),y=n("IHPB"),b=n.n(y),w=function(t,e,n){var a=Math.random().toString().replace(".",""),o="my_json_cb_"+a;window[o]=n;var r=-1==t.indexOf("?")?"?":"&";for(var i in e)r+=i+"="+e[i]+"&";r+="callback="+o;var s=document.createElement("script");s.src=t+r,document.body.appendChild(s)},$=w,x={name:"movieList",data:function(){return{name:"111",start:0,movieList:[]}},created:function(){this.testJsonp()},methods:{getMovie:function(){this.$http("v2/movie/in_theaters").then(function(t){console.log(t.data)})},testJsonp:function(){var t=this,e={city:"武汉",start:this.start};$("https://api.douban.com/v2/movie/in_theaters",e,function(e){var n;console.log(e),(n=t.movieList).push.apply(n,b()(e.subjects))})}}},C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("ul",t._l(t.movieList,function(t){return n("li",[n("img",{attrs:{src:t.images.medium}})])}))])},O=[],H={render:C,staticRenderFns:O},q=H,L=n("Z0/y"),S=o,E=L(x,q,!1,S,null,null),J=E.exports,M=n("fF+n"),F=n.n(M),N={name:"qrcanvas",data:function(){return{}},mounted:function(){this.createCode()},methods:{createCode:function(){var t=this;this.$refs.img.onload=function(){var e=F()({data:"https://stage.vpclub.cn/yingxiaobao/web/app#/old/oldbeforeBroadband?prev=940869452720955392",cellSize:3,correctLevel:"H",typeNumber:12,logo:{image:t.$refs.img,clearEdges:2,margin:2}});t.$refs.qrcode.appendChild(e)}}}},W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("img",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"img",attrs:{src:n("gDQG")}}),t._v(" "),a("div",{ref:"qrcode"})])},j=[],Q={render:W,staticRenderFns:j},R=Q,Z=n("Z0/y"),k=r,z=Z(N,R,!1,k,"data-v-eecffc4c",null),B=z.exports;i.default.use(_.a);var D=new _.a({routes:[{path:"/",name:"movieList",component:J},{path:"/qrcanvas",name:"qrcanvas",component:B}]}),G=n("qM1Q"),P=n("9rMa");G.a.use(P.a);var T={count:0},Y={count:function(t){return t.count}},A={increment:function(t){t.count++}},I=new P.a.Store({state:T,getters:Y,mutations:A}),K=n("2sCs"),V=n.n(K);i.default.prototype.$http=V.a,i.default.prototype.HOST="/api",i.default.config.productionTip=!1,i.default.use(c.a),console.log(I),new i.default({el:"#app",router:D,store:I,render:function(t){return t(g)}}).$mount("#app")},"OSt+":function(t,e){},cvYu:function(t,e){},gDQG:function(t,e,n){t.exports=n.p+"static/img/loginlogo.f4685a6.png"},wW0W:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1e61b66a245b82d3c6bf.js.map
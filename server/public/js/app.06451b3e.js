(function(t){function e(e){for(var a,r,s=e[0],u=e[1],i=e[2],l=0,b=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(b.length)b.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"54162cbc"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"efac07dd"}[t]+".css",o=u.p+a,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===a||l===o))return e()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){i=b[s],l=i.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],f.parentNode.removeChild(f),n(c)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t);var b=new Error;i=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;b.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",b.name="ChunkLoadError",b.type=a,b.request=r,n[1](b)}o[t]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var b=0;b<i.length;b++)e(i[b]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"};function o(t,e,n,o,c,s){var u=Object(a["v"])("Navbar"),i=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["e"])(a["a"],null,[Object(a["f"])("div",r,[Object(a["h"])(u)]),Object(a["h"])(i)],64)}var c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},s={class:"container-fluid"},u=Object(a["g"])("Todo list"),i=Object(a["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["f"])("span",{class:"navbar-toggler-icon"})],-1),l={class:"collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav ms-auto mb-2 mb-lg-0"},f={class:"nav-item"},d=Object(a["g"])("Login"),p={class:"nav-item"},g=Object(a["g"])("Register"),m={class:"nav-item"},v=Object(a["g"])("Profile"),h={class:"nav-item"},j=Object(a["g"])("Logout"),O={class:"nav-item"},k=Object(a["g"])("JSON output");function y(t,e,n,r,o,y){var w=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["e"])("nav",c,[Object(a["f"])("div",s,[Object(a["h"])(w,{class:"navbar-brand",to:"/"},{default:Object(a["C"])((function(){return[u]})),_:1}),i,Object(a["f"])("div",l,[Object(a["f"])("ul",b,[Object(a["D"])(Object(a["f"])("li",f,[Object(a["h"])(w,{class:"nav-link",to:"/login"},{default:Object(a["C"])((function(){return[d]})),_:1})],512),[[a["A"],!t.isLoggedIn]]),Object(a["D"])(Object(a["f"])("li",p,[Object(a["h"])(w,{class:"nav-link",to:"/register"},{default:Object(a["C"])((function(){return[g]})),_:1})],512),[[a["A"],!t.isLoggedIn]]),Object(a["D"])(Object(a["f"])("li",m,[Object(a["h"])(w,{class:"nav-link",to:"/profile"},{default:Object(a["C"])((function(){return[v]})),_:1})],512),[[a["A"],t.isLoggedIn]]),Object(a["D"])(Object(a["f"])("li",h,[Object(a["h"])(w,{class:"nav-link",onClick:t.logout,to:"/"},{default:Object(a["C"])((function(){return[j]})),_:1},8,["onClick"])],512),[[a["A"],t.isLoggedIn]]),Object(a["f"])("li",O,[Object(a["h"])(w,{class:"nav-link",to:"/json"},{default:Object(a["C"])((function(){return[k]})),_:1})])])])])])}var w=n("5530"),L=n("5502"),_={computed:Object(w["a"])({},Object(L["c"])(["isLoggedIn"])),methods:Object(w["a"])({},Object(L["b"])(["logout"]))},T=n("6b0d"),C=n.n(T);const S=C()(_,[["render",y]]);var x=S,A={components:{Navbar:x}};const P=C()(A,[["render",o]]);var R=P,I=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),E=[{path:"/",name:"TodoList",component:function(){return n.e("about").then(n.bind(null,"a7b9"))}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("about").then(n.bind(null,"73cf"))}},{path:"/profile",name:"Profile",component:function(){return n.e("about").then(n.bind(null,"c66d"))}},{path:"/:id",name:"TaskDetail",component:function(){return n.e("about").then(n.bind(null,"8b46"))}},{path:"/json",name:"Json",component:function(){return n.e("about").then(n.bind(null,"d267"))}}],N=Object(I["a"])({history:Object(I["b"])("/"),routes:E}),D=N,q=n("1da1"),J=(n("96cf"),n("7338")),M=n.n(J),B=(n("bb36"),{token:localStorage.getItem("token")||"",user:{},status:""}),U={isLoggedIn:function(t){return""!=t.token},authState:function(t){return t.status},user:function(t){return t.user}},z={login:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function n(){var a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,a("auth_request"),n.next=4,M.a.post("users/login",e);case 4:r=n.sent,r.data.success&&(o=r.data.token,localStorage.setItem("token",o),M.a.defaults.headers.common["Authorization"]=o,a("auth_success",o,e));case 6:case"end":return n.stop()}}),n)})))()},logout:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,localStorage.setItem("token",""),n("auth_logout");case 3:case"end":return e.stop()}}),e)})))()}},F={auth_request:function(t){t.status="loading"},auth_success:function(t,e,n){t.user=n,t.token=e,t.status="success"},auth_logout:function(t){t.token="",t.user={},t.status=""}},H={state:B,mutations:F,getters:U,actions:z},K={tasks:[],loadingTasks:!1},G={tasks:function(t){return t.tasks}},Q={loadTasks:function(t){return Object(q["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,n("setLoading",!0),e.next=4,M.a.get("tasks");case 4:a=e.sent,n("saveTasks",a),n("setLoading",!1);case 7:case"end":return e.stop()}}),e)})))()},loadTask:function(t,e){return Object(q["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,a("setLoading",!0),n.next=4,M.a.get("tasks/"+e);case 4:r=n.sent,a("saveTasks",r),a("setLoading",!1);case 7:case"end":return n.stop()}}),n)})))()}},V={saveTasks:function(t,e){t.tasks=e},setLoading:function(t,e){t.loadingTasks=e}},W={state:K,mutations:V,getters:G,actions:Q},X=Object(L["a"])({state:{},mutations:{},actions:{},modules:{Auth:H,Tasks:W}}),Y=Object(a["c"])(R).use(X).use(D);Y.mount("#app")},bb36:function(t,e,n){"use strict";var a=n("7338"),r=n.n(a);r.a.defaults.baseURL="https://todolist-wea-fryc.herokuapp.com/api/"}});
//# sourceMappingURL=app.06451b3e.js.map
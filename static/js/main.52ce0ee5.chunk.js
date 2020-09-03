(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{16:function(n,e,t){n.exports=t(24)},23:function(n,e,t){},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),i=t(3),u=t(1),l=t(2);function d(){var n=Object(u.a)(["\n  flex-basis: 20%;\n  background-color: teal;\n  color: #fff;\n  padding: 13px;\n  border: unset;\n  cursor: pointer;\n  transition: 1s;\n  &:hover {\n    background-color: rgb(3, 192, 192);\n    transform: scale(1.1);\n  }\n  @media (max-width: 767px) {\n    flex-basis: 100%;\n    padding: 10px;\n  }\n"]);return d=function(){return n},n}function s(){var n=Object(u.a)(["\n  flex-basis: 75%;\n  @media (max-width: 767px) {\n    flex-basis: 100%;\n    padding: 8px;\n    margin-bottom: 10px;\n  }\n"]);return s=function(){return n},n}function f(){var n=Object(u.a)(["\n  background-color: #fff;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);return f=function(){return n},n}var b=l.c.form(f()),m=l.c.input(s()),g=l.c.button(d()),p=function(n){var e=n.addNewTask,t=Object(r.useState)(""),o=Object(i.a)(t,2),c=o[0],u=o[1],l=Object(r.useRef)(null);return a.a.createElement(b,{onSubmit:function(n){n.preventDefault(),l.current.focus(),""!==c.trim()&&(e(c.trim()),u(""))}},a.a.createElement(m,{ref:l,value:c,onChange:function(n){var e=n.target;return u(e.value)},type:"text",placeholder:"Co jest do zrobienia?"}),a.a.createElement(g,null,"Dodaj zadanie"))};function v(){var n=Object(u.a)(["\n      text-decoration: line-through;\n    "]);return v=function(){return n},n}function h(){var n=Object(u.a)(["\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n\n  ","\n"]);return h=function(){return n},n}function k(){var n=Object(u.a)(["\n  background-color: red;\n  justify-self: flex-end;\n\n  &:hover {\n    background-color: rgb(255, 111, 111);\n  }\n"]);return k=function(){return n},n}function x(){var n=Object(u.a)(["\n  background-color: green;\n\n  &:hover {\n    background-color: rgb(0, 223, 0);\n  }\n"]);return x=function(){return n},n}function j(){var n=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n  border: none;\n  margin: 10px;\n  color: #fff;\n  font-weight: bold;\n  transition: 1s;\n"]);return j=function(){return n},n}function O(){var n=Object(u.a)(["\n      display: none;\n    "]);return O=function(){return n},n}function E(){var n=Object(u.a)(["\n  border-bottom: 1px solid #ddd;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n\n  ","\n"]);return E=function(){return n},n}function w(){var n=Object(u.a)(["\n  background-color: #fff;\n  min-height: 70px;\n  margin: 0;\n  padding: 20px;\n  list-style: none;\n"]);return w=function(){return n},n}var y=l.c.ul(w()),D=l.c.li(E(),(function(n){return n.hidden&&Object(l.b)(O())})),S=l.c.button(j()),T=Object(l.c)(S)(x()),z=Object(l.c)(S)(k()),N=l.c.span(h(),(function(n){return n.taskDone&&Object(l.b)(v())})),C=function(n){var e=n.tasks,t=n.hideDone,r=n.removeTask,o=n.toggleTaskDone;return e.length?a.a.createElement(y,null,e.map((function(n){return a.a.createElement(D,{key:n.id,hidden:n.done&&t},a.a.createElement(T,{onClick:function(){return o(n.id)}},a.a.createElement("i",{className:n.done?"icon-ok":""})),a.a.createElement(N,{taskDone:n.done},n.content),a.a.createElement(z,{onClick:function(){return r(n.id)}},a.a.createElement("i",{className:"icon-trash-empty"})))}))):a.a.createElement("p",null,"brak zada\u0144 do wykonania")};function I(){var n=Object(u.a)(["\n  color: teal;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  margin: 10px;\n  transition: 1s;\n  &:hover{\n    color: rgb(10, 218, 218);\n  }\n  &:disabled{\n    color: gray;\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return J=function(){return n},n}var A=l.c.div(J()),B=l.c.button(I()),H=function(n){var e=n.tasks,t=n.hideDone,r=n.toggleHideDone,o=n.setAllDone;return 0===e.length?null:a.a.createElement(A,null,e.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(B,{disabled:e.every((function(n){return!n.done})),onClick:r},t?"Poka\u017c":"Ukryj"," uko\u0144czone"),a.a.createElement(B,{onClick:o,disabled:e.every((function(n){return n.done}))},"Uko\u0144cz wszystkie")))};function L(){var n=Object(u.a)(["\n  padding: 20px;\n"]);return L=function(){return n},n}function U(){var n=Object(u.a)(["\n  border-bottom: 1px solid #ddd;\n  margin: 0;\n  padding: 20px;\n  font-size: 22px;\n"]);return U=function(){return n},n}function W(){var n=Object(u.a)(["\n  margin: 10px 0;\n  background: white;\n  box-shadow: 0 0 5px #ddd;\n"]);return W=function(){return n},n}var F=l.c.section(W()),G=l.c.h2(U()),M=l.c.div(L()),P=function(n){var e=n.title,t=n.body,r=n.extraContent;return a.a.createElement(F,null,a.a.createElement(G,null,e),r,a.a.createElement(M,null,t))};function R(){var n=Object(u.a)(["\n  max-width: 900px;\n  margin: 40px auto;\n  \n  @media (max-width: 767px) {\n    margin: 10px;\n  }\n"]);return R=function(){return n},n}var V=l.c.main(R()),$=function(n){return a.a.createElement(V,null,n.children)},q=(t(23),t(15)),K=t(5),Q=function(){var n=Object(r.useState)(null===JSON.parse(localStorage.getItem("tasks"))?[]:JSON.parse(localStorage.getItem("tasks"))),e=Object(i.a)(n,2),t=e[0],a=e[1];Object(r.useEffect)((function(){localStorage.setItem("tasks",JSON.stringify(t))}),[t]);return{tasks:t,removeTask:function(n){a((function(e){return e.filter((function(e){return e.id!==n}))}))},toggleTaskDone:function(n){a((function(e){return e.map((function(e){return e.id===n?Object(K.a)(Object(K.a)({},e),{},{done:!e.done}):e}))}))},setAllDone:function(){a((function(n){return n.map((function(n){return Object(K.a)(Object(K.a)({},n),{},{done:!0})}))}))},addNewTask:function(n){a((function(e){return[].concat(Object(q.a)(e),[{content:n,done:!1,id:0===e.length?1:e[e.length-1].id+1}])}))}}};var X=function(){var n=Object(r.useState)("false"!==localStorage.getItem("hideDone")&&JSON.parse(localStorage.getItem("hideDone"))),e=Object(i.a)(n,2),t=e[0],o=e[1];Object(r.useEffect)((function(){localStorage.setItem("hideDone",JSON.stringify(t))}),[t]);var c=Q(),u=c.tasks,l=c.removeTask,d=c.toggleTaskDone,s=c.setAllDone,f=c.addNewTask;return a.a.createElement($,null,a.a.createElement("h1",null,"Lista zada\u0144"),a.a.createElement(P,{title:"Dodaj nowe zadanie",body:a.a.createElement(p,{addNewTask:f})}),a.a.createElement(P,{title:"Lista zada\u0144",extraContent:a.a.createElement(H,{tasks:u,hideDone:t,toggleHideDone:function(){o((function(n){return!n}))},setAllDone:s}),body:a.a.createElement(C,{tasks:u,hideDone:t,removeTask:l,toggleTaskDone:d})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Y(){var n=Object(u.a)(["\n  html {\n  box-sizing: border-box;\n}\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n} \nbody{\n  background-color: #ddd;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n"]);return Y=function(){return n},n}var Z=Object(l.a)(Y());c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null),a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.52ce0ee5.chunk.js.map
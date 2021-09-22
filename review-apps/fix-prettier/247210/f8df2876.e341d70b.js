(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{104:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return s})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(8),i=(t(0),t(110)),o={id:"paystring-server-requirements",title:"Server Requirements",sidebar_label:"Server Requirements"},c={unversionedId:"paystring-server-requirements",id:"paystring-server-requirements",isDocsHomePage:!1,title:"Server Requirements",description:"PayString was previously known as PayID.",source:"@site/docs/paystring-server-requirements.md",slug:"/paystring-server-requirements",permalink:"/paystring-documentation/review-apps/fix-prettier/247210/paystring-server-requirements",editUrl:"https://github.com/paystring/paystring-documentation/tree/master/docs/paystring-server-requirements.md",version:"current",sidebar_label:"Server Requirements",sidebar:"docs",previous:{title:"Deployment Options",permalink:"/paystring-documentation/review-apps/fix-prettier/247210/intro-deploy"},next:{title:"Deploy Locally Without Docker",permalink:"/paystring-documentation/review-apps/fix-prettier/247210/local-deployment"}},s=[{value:"Production Requirements",id:"production-requirements",children:[]}],p={rightToc:s};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"PayString was previously known as PayID."))),Object(i.b)("p",null,"The reference PayString server is comprised of a simple Node.js HTTP server and a Postgres database."),Object(i.b)("p",null,"In production environments, you should set up a reverse proxy like nginx in front of the Node.js HTTP server, as described at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"nginx-ssl-deploy"}),"NGINX Reverse Proxy + SSL setup"),"."),Object(i.b)("h2",{id:"production-requirements"},"Production Requirements"),Object(i.b)("p",null,"To run a PayString server in a production environment, you should:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Give each component of the stack a vCPU and 500 MB of RAM"),Object(i.b)("li",{parentName:"ul"},"Ensure there are at least two High-Availability replicas for each component")),Object(i.b)("p",null,"Here's how the requirements would break down:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 vCPU + 500 MB RAM per nginx replica (2x)"),Object(i.b)("li",{parentName:"ul"},"1 vCPU + 500 MB RAM per PayString Node.js server replica (2x)"),Object(i.b)("li",{parentName:"ul"},"1 vCPU + 500 MB RAM per Postgres replica (2x)")),Object(i.b)("p",null,"Note that these are ",Object(i.b)("em",{parentName:"p"},"conservative")," requirements for an environment with a non-trivial amount of traffic. The PayString server is not resource-hungry. If you have an environment with smaller amounts of traffic, you may be able to run a PayString server with less robust specs."))}u.isMDXComponent=!0},110:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),b=n,d=l["".concat(o,".").concat(b)]||l[b]||m[b]||i;return t?a.a.createElement(d,c(c({ref:r},p),{},{components:t})):a.a.createElement(d,c({ref:r},p))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);
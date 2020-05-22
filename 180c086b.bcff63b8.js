(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{145:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(10),i=(r(0),r(165)),c={id:"tools",title:"Reference implementations",sidebar_label:"Implementations"},o={id:"tools",title:"Reference implementations",description:"GraphQL CRUD can be applied out of the box using https://graphback.dev",source:"@site/../docs/tools.md",permalink:"/docs/tools",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/tools.md",sidebar_label:"Implementations",sidebar:"docs",previous:{title:"Concepts",permalink:"/docs/concepts"},next:{title:"spec-create",permalink:"/docs/spec-create"}},l=[{value:"Reference specifications",id:"reference-specifications",children:[{value:"Node.js",id:"nodejs",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"Java",id:"java",children:[]},{value:"Golang",id:"golang",children:[]}]},{value:"Librarires that partialy implement GraphQL CRUD",id:"librarires-that-partialy-implement-graphql-crud",children:[]}],p={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"GraphQL CRUD can be applied out of the box using ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev")," "),Object(i.b)("h2",{id:"reference-specifications"},"Reference specifications"),Object(i.b)("h3",{id:"nodejs"},"Node.js"),Object(i.b)("p",null,"Graphback provides ability to generate schema that will be fully compatible with the\nGraphQLCRUD and also connect it directly to Postgress, MongoDB and other datasources without writing any code."),Object(i.b)("h3",{id:"javascript"},"JavaScript"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://offix.dev"}),"https://offix.dev")," provides reference implementation for the delta sync queries and implements GraphQL CRUD on the client side."),Object(i.b)("h3",{id:"java"},"Java"),Object(i.b)("p",null,"In progress"),Object(i.b)("h3",{id:"golang"},"Golang"),Object(i.b)("p",null,"In progress"),Object(i.b)("h2",{id:"librarires-that-partialy-implement-graphql-crud"},"Librarires that partialy implement GraphQL CRUD"),Object(i.b)("p",null,"Specification was build based on numerous community implementations"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"AWS AppSync"),Object(i.b)("li",{parentName:"ul"},"Prisma "),Object(i.b)("li",{parentName:"ul"},"Hasura "),Object(i.b)("li",{parentName:"ul"},"Postgraphile"),Object(i.b)("li",{parentName:"ul"},"GraphCMS"),Object(i.b)("li",{parentName:"ul"},"GraphQL-CLI"),Object(i.b)("li",{parentName:"ul"},"GraphQL-Serve"),Object(i.b)("li",{parentName:"ul"},"GraphQL-Create")))}s.isMDXComponent=!0},165:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||i;return r?a.a.createElement(m,o(o({ref:t},p),{},{components:r})):a.a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<i;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
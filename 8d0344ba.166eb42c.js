(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(10),i=(n(0),n(165)),o={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},s={id:"getting-started",title:"Getting Started",description:"Introduction",source:"@site/../docs/getting-started.md",permalink:"/docs/getting-started",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/getting-started.md",sidebar_label:"Getting Started",sidebar:"docs",next:{title:"Motivation",permalink:"/docs/motivation"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Targets of this spec",id:"targets-of-this-spec",children:[]},{value:"Non targets of this spec",id:"non-targets-of-this-spec",children:[]}],p={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"GraphQL CRUD is an superset of the GraphQL giving developers\npatterns for building standard data driven GraphLQL APIs."),Object(i.b)("h2",{id:"targets-of-this-spec"},"Targets of this spec"),Object(i.b)("p",null,"1) Define minimal subset of the CRUD capabilities\nthat every application or developer can consume.\n2) Provide overview of the data access methods that are used to fetch data\n3) Avoid corner cases or specifics of individual CRUD implementations\n4) Define lenient standard based on practices, existing API and providers\nthat do not enforce specific query or mutation names etc.\n5) Provide set of the reference implementations for ",Object(i.b)("em",{parentName:"p"},"different programming languages")," in case you want to adopt reference\nimplementation"),Object(i.b)("h2",{id:"non-targets-of-this-spec"},"Non targets of this spec"),Object(i.b)("p",null,"1) Define every possible method to map database or SQL Capabilities"),Object(i.b)("p",null,"Over the years we seen issues with developers adopting very open CRUD capabilities on the client.\nThere is no silverbullet that will give developers both flexiblity of the query capabilities on the client\nand underlying security and control over what data is exposed to the public.\nThat is why we define only the most common use cases and do not target to provide mapping to every capability that database exposes."),Object(i.b)("p",null,"2) Map CRUD specifics of the popular platforms "),Object(i.b)("p",null,"GraphQL CRUD borrows patterns from existing GraphQL schemas and large GraphQL providers like AWS AppSync or Hasura,\nhowever it is not focusing tightly on any specific provider itself. "),Object(i.b)("p",null,"3) Defining best practices for writing GraphQL schemas"),Object(i.b)("p",null,"GraphQL CRUD focuses only on providing CRUD capaiblities.\nFor general rules for GraphQL schemas please ses: ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-rules.com"}),"https://graphql-rules.com")," "))}l.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,b=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?a.a.createElement(b,s(s({ref:t},p),{},{components:n})):a.a.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);
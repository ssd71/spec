(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(2),i=n(10),o=(n(0),n(165)),a={id:"concepts",title:"Concepts",sidebar_label:"Concepts"},c={id:"concepts",title:"Concepts",description:"Specification concepts",source:"@site/../docs/concepts.md",permalink:"/docs/next/concepts",editUrl:"https://github.com/aerogear/GraphQLCRUD/edit/master/website/../docs/concepts.md",version:"next",sidebar_label:"Concepts",sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/next/gettingstarted"},next:{title:"Reference implementations",permalink:"/docs/next/reference"}},p=[{value:"Specification concepts",id:"specification-concepts",children:[]},{value:"CRUD method",id:"crud-method",children:[]},{value:"Input types",id:"input-types",children:[]},{value:"Capabilities",id:"capabilities",children:[]},{value:"Variations",id:"variations",children:[]}],l={rightToc:p};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"specification-concepts"},"Specification concepts"),Object(o.b)("p",null,"Specification uses following vocabulary to define GraphQL queries"),Object(o.b)("h2",{id:"crud-method"},"CRUD method"),Object(o.b)("p",null,"GraphQL CRUD defines different CRUD capabilities that represents\nvarious operations that can be executed on the set of the objects:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create: creation of the object"),Object(o.b)("li",{parentName:"ul"},"Update: update of the any object properties"),Object(o.b)("li",{parentName:"ul"},"Delete: delete entire object by id "),Object(o.b)("li",{parentName:"ul"},"Get: get specific object by id"),Object(o.b)("li",{parentName:"ul"},"Find: find multiple objects using query")),Object(o.b)("h2",{id:"input-types"},"Input types"),Object(o.b)("p",null,"GraphQL CRUD defines common input type categories that can be used in various CRUD methods to define operations.\nFor example Create operation will use specific input type that does not require object ID."),Object(o.b)("h2",{id:"capabilities"},"Capabilities"),Object(o.b)("p",null,"GraphQL CRUD defines different capabilities that developers can enable to modify\nhow queries can be defined. Good example of this capabilities are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Pagination: Ability to paginate content"),Object(o.b)("li",{parentName:"ul"},"Filtering: Ability to peform filtering on specific fields"),Object(o.b)("li",{parentName:"ul"},"Countability: Ability to count number of entire for query"),Object(o.b)("li",{parentName:"ul"},"Consistency: Ability to verify if write operation is not overriding data.")),Object(o.b)("h2",{id:"variations"},"Variations"),Object(o.b)("p",null,"Apart from reference implementation GraphQL CRUD provides different variations\nof the queries and mutations that can be used for different needs."))}s.isMDXComponent=!0},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||o;return n?i.a.createElement(f,c(c({ref:t},l),{},{components:n})):i.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);
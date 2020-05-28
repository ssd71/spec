/*! For license information please see 18.09846ed1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18,4,19],{137:function(e,t,n){"use strict";n.r(t);n(179),n(76);var r=n(0),a=n.n(r),o=n(174),i=n(169),l=n(162),c=n(167),s=n(168);var u=function(e){var t=e.metadata;return a.a.createElement("nav",{className:"pagination-nav"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(s.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(s.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))};n(79);var f=function(e,t,n){var a=Object(r.useState)(void 0),o=a[0],i=a[1];Object(r.useEffect)((function(){var r=[],a=[];function l(){var l=function(){var e=0,t=null;for(r=document.getElementsByClassName("anchor");e<r.length&&!t;){var a=r[e],o=a.getBoundingClientRect().top;o>=0&&o<=n&&(t=a),e+=1}return t}();if(l){var c=0,s=!1;for(a=document.getElementsByClassName(e);c<a.length&&!s;){var u=a[c],f=u.href,d=decodeURIComponent(f.substring(f.indexOf("#")+1));l.id===d&&(o&&o.classList.remove(t),u.classList.add(t),i(u),s=!0),c+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))},d=n(166),m=n.n(d),p=n(138),h=n.n(p);function v(e){var t=e.headings;return f("table-of-contents__link","table-of-contents__link--active",100),a.a.createElement("div",{className:"col col--3"},a.a.createElement("div",{className:h.a.tableOfContents},a.a.createElement(y,{headings:t})))}function y(e){var t=e.headings,n=e.isChild;return t.length?a.a.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:"#"+e.id,className:"table-of-contents__link",dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(y,{isChild:!0,headings:e.children}))}))):null}t.default=function(e){var t,n=Object(l.a)().siteConfig,r=void 0===n?{}:n,s=r.url,f=r.title,d=e.content,p=d.metadata,y=p.description,g=p.title,b=p.permalink,E=p.editUrl,k=p.lastUpdatedAt,O=p.lastUpdatedBy,j=p.version,w=d.frontMatter,x=w.image,S=w.keywords,N=w.hide_title,_=w.hide_table_of_contents,C=g?g+" | "+f:f,T=s+Object(c.a)(x);return Object(i.a)(x)||(T=x),a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,C),a.a.createElement("meta",{property:"og:title",content:C}),y&&a.a.createElement("meta",{name:"description",content:y}),y&&a.a.createElement("meta",{property:"og:description",content:y}),S&&S.length&&a.a.createElement("meta",{name:"keywords",content:S.join(",")}),x&&a.a.createElement("meta",{property:"og:image",content:T}),x&&a.a.createElement("meta",{property:"twitter:image",content:T}),x&&a.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+g}),b&&a.a.createElement("meta",{property:"og:url",content:s+b}),b&&a.a.createElement("link",{rel:"canonical",href:s+b})),a.a.createElement("div",{className:m()("container padding-vert--lg",h.a.docItemWrapper)},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:m()("col",(t={},t[h.a.docItemCol]=!_,t))},a.a.createElement("div",{className:h.a.docItemContainer},a.a.createElement("article",null,j&&a.a.createElement("div",null,a.a.createElement("span",{className:"badge badge--secondary"},"Version: ",j)),!N&&a.a.createElement("header",null,a.a.createElement("h1",{className:h.a.docTitle},g)),a.a.createElement("div",{className:"markdown"},a.a.createElement(d,null))),(E||k||O)&&a.a.createElement("div",{className:"margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},E&&a.a.createElement("a",{href:E,target:"_blank",rel:"noreferrer noopener"},a.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},a.a.createElement("g",null,a.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(k||O)&&a.a.createElement("div",{className:"col text--right"},a.a.createElement("em",null,a.a.createElement("small",null,"Last updated"," ",k&&a.a.createElement(a.a.Fragment,null,"on"," ",a.a.createElement("time",{dateTime:new Date(1e3*k).toISOString(),className:h.a.docLastUpdatedAt},new Date(1e3*k).toLocaleDateString()),O&&" "),O&&a.a.createElement(a.a.Fragment,null,"by ",a.a.createElement("strong",null,O)),!1))))),a.a.createElement("div",{className:"margin-vert--lg"},a.a.createElement(u,{metadata:p})))),!_&&d.rightToc&&a.a.createElement(v,{headings:d.rightToc}))))}},161:function(e,t,n){"use strict";n.r(t);n(34),n(23),n(24),n(60),n(214);var r=n(0),a=n.n(r),o=n(163),i=n(162),l=n(68),c=n(172),s=n(137),u=(n(21),n(78),n(76),n(2)),f=n(10),d=n(166),m=n.n(d),p=n(189),h=n(190),v=n(168),y=n(169),g=n(145),b=n.n(g);function E(e){var t=e.item,n=e.onItemClick,o=e.collapsible,i=e.activePath,l=Object(f.a)(e,["item","onItemClick","collapsible","activePath"]),c=t.items,s=t.href,d=t.label,p=t.type,h=Object(r.useState)(t.collapsed),g=h[0],b=h[1],k=Object(r.useState)(null),O=k[0],j=k[1];t.collapsed!==O&&(j(t.collapsed),b(t.collapsed));var w=Object(r.useCallback)((function(e){e.preventDefault(),e.target.blur(),b((function(e){return!e}))}));switch(p){case"category":return c.length>0&&a.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":g}),key:d},a.a.createElement("a",Object(u.a)({className:m()("menu__link",{"menu__link--sublist":o,"menu__link--active":o&&!t.collapsed}),href:"#!",onClick:o?w:void 0},l),d),a.a.createElement("ul",{className:"menu__list"},c.map((function(e){return a.a.createElement(E,{tabIndex:g?"-1":"0",key:e.label,item:e,onItemClick:n,collapsible:o,activePath:i})}))));case"link":default:return a.a.createElement("li",{className:"menu__list-item",key:d},a.a.createElement(v.a,Object(u.a)({className:m()("menu__link",{"menu__link--active":s===i}),to:s},Object(y.a)(s)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},l),d))}}var k=function(e){var t=Object(r.useState)(!1),n=t[0],o=t[1],l=Object(i.a)(),c=l.siteConfig,s=(c=void 0===c?{}:c).themeConfig.navbar,f=(s=void 0===s?{}:s).title,d=s.hideOnScroll,y=void 0!==d&&d,g=l.isClient,k=Object(h.a)(),O=k.logoLink,j=k.logoLinkProps,w=k.logoImageUrl,x=k.logoAlt,S=e.docsSidebars,N=e.path,_=e.sidebar,C=e.sidebarCollapsible;if(Object(p.a)(n),!_)return null;var T=S[_];if(!T)throw new Error('Cannot find the sidebar "'+_+'" in the sidebar config!');return C&&T.forEach((function(e){return function e(t,n){var r=t.items,a=t.href;switch(t.type){case"category":var o=r.map((function(t){return e(t,n)})).filter((function(e){return e})).length>0;return t.collapsed=!o,o;case"link":default:return a===n}}(e,N)})),a.a.createElement("div",{className:b.a.sidebar},y&&a.a.createElement(v.a,Object(u.a)({tabIndex:"-1",className:b.a.sidebarLogo,to:O},j),null!=w&&a.a.createElement("img",{key:g,src:w,alt:x}),null!=f&&a.a.createElement("strong",null,f)),a.a.createElement("div",{className:m()("menu","menu--responsive",b.a.menu,{"menu--show":n})},a.a.createElement("button",{"aria-label":n?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){o(!n)}},n?a.a.createElement("span",{className:m()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement("svg",{"aria-label":"Menu",className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},a.a.createElement("title",null,"Menu"),a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),a.a.createElement("ul",{className:"menu__list"},T.map((function(e){return a.a.createElement(E,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),o(!1)},collapsible:C,activePath:N})})))))},O=(n(215),n(216),n(62),n(89),n(217),n(218),n(185),{plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]}),j={Prism:n(56).a,theme:O};function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var S=/\r\n|\r|\n/,N=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},_=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},C=function(e,t){var n=e.plain,r=Object.create(null),a=e.styles.reduce((function(e,n){var r=n.languages,a=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=x({},e[t],a);e[t]=n})),e}),r);return a.root=n,a.plain=x({},n,{backgroundColor:null}),a};function T(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var P=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),w(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?C(e.theme,e.language):void 0;return t.themeDict=n})),w(this,"getLineProps",(function(e){var n=e.key,r=e.className,a=e.style,o=x({},T(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=t.getThemeDict(t.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?x({},o.style,a):a),void 0!==n&&(o.key=n),r&&(o.className+=" "+r),o})),w(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,a=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===a&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===a&&!r)return o[n[0]];var i=r?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[i].concat(l))}})),w(this,"getTokenProps",(function(e){var n=e.key,r=e.className,a=e.style,o=e.token,i=x({},T(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?x({},i.style,a):a),void 0!==n&&(i.key=n),r&&(i.className+=" "+r),i}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,a=e.children,o=this.getThemeDict(this.props),i=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],r=[0],a=[e.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=r[i]++)<a[i];){var s=void 0,u=t[i],f=n[i][o];if("string"==typeof f?(u=i>0?u:["plain"],s=f):(u=_(u,f.type),f.alias&&(u=_(u,f.alias)),s=f.content),"string"==typeof s){var d=s.split(S),m=d.length;l.push({types:u,content:d[0]});for(var p=1;p<m;p++)N(l),c.push(l=[]),l.push({types:u,content:d[p]})}else i++,t.push(u),n.push(s),r.push(0),a.push(s.length)}i--,t.pop(),n.pop(),r.pop(),a.pop()}return N(l),c}(void 0!==i?t.tokenize(r,i,n):[r]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),A=n(219),L=n.n(A),I=n(220),M=n.n(I),D={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},F=n(178),R=function(){var e=Object(i.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(F.a)().isDarkTheme,r=t.theme||D,a=t.darkTheme||r;return n?a:r},B=n(146),U=n.n(B),H=/{([\d,-]+)}/,$=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),r=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+r+")\\s*$")},q=/title=".*"/,z=function(e){var t=e.children,n=e.className,o=e.metastring,l=Object(i.a)().siteConfig.themeConfig.prism,c=void 0===l?{}:l,s=Object(r.useState)(!1),f=s[0],d=s[1],p=Object(r.useState)(!1),h=p[0],v=p[1];Object(r.useEffect)((function(){v(!0)}),[]);var y=Object(r.useRef)(null),g=Object(r.useRef)(null),b=[],E="",k=R();if(o&&H.test(o)){var O=o.match(H)[1];b=M.a.parse(O).filter((function(e){return e>0}))}o&&q.test(o)&&(E=o.match(q)[0].split("title=")[1].replace(/"+/g,"")),Object(r.useEffect)((function(){var e;return g.current&&(e=new L.a(g.current,{target:function(){return y.current}})),function(){e&&e.destroy()}}),[g.current,y.current]);var w=n&&n.replace(/language-/,"");!w&&c.defaultLanguage&&(w=c.defaultLanguage);var x=t.replace(/\n$/,"");if(0===b.length&&void 0!==w){for(var S,N="",_=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return $(["js","jsBlock"]);case"jsx":case"tsx":return $(["js","jsBlock","jsx"]);case"html":return $(["js","jsBlock","html"]);case"python":case"py":return $(["python"]);default:return $()}}(w),C=t.replace(/\n$/,"").split("\n"),T=0;T<C.length;){var A=T+1,I=C[T].match(_);if(null!==I){switch(I.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":N+=A+",";break;case"highlight-start":S=A;break;case"highlight-end":N+=S+"-"+(A-1)+","}C.splice(T,1)}else T+=1}b=M.a.parse(N),x=C.join("\n")}var D=function(){window.getSelection().empty(),d(!0),setTimeout((function(){return d(!1)}),2e3)};return a.a.createElement(P,Object(u.a)({},j,{key:h,theme:k,code:x,language:w}),(function(e){var t,n,r=e.className,o=e.style,i=e.tokens,l=e.getLineProps,c=e.getTokenProps;return a.a.createElement(a.a.Fragment,null,E&&a.a.createElement("div",{style:o,className:U.a.codeBlockTitle},E),a.a.createElement("div",{className:U.a.codeBlockContent},a.a.createElement("button",{ref:g,type:"button","aria-label":"Copy code to clipboard",className:m()(U.a.copyButton,(t={},t[U.a.copyButtonWithTitle]=E,t)),onClick:D},f?"Copied":"Copy"),a.a.createElement("div",{tabIndex:"0",className:m()(r,U.a.codeBlock,(n={},n[U.a.codeBlockWithTitle]=E,n))},a.a.createElement("div",{ref:y,className:U.a.codeBlockLines,style:o},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=l({line:e,key:t});return b.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),a.a.createElement("div",Object(u.a)({key:t},n),e.map((function(e,t){return a.a.createElement("span",Object(u.a)({key:t},c({token:e,key:t})))})))}))))))}))},W=(n(147),n(148)),Y=n.n(W),J=function(e){return function(t){var n,r=t.id,o=Object(f.a)(t,["id"]),l=Object(i.a)().siteConfig,c=(l=void 0===l?{}:l).themeConfig,s=(c=void 0===c?{}:c).navbar,u=(s=void 0===s?{}:s).hideOnScroll,d=void 0!==u&&u;return r?a.a.createElement(e,o,a.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",(n={},n[Y.a.enhancedAnchor]=!d,n)),id:r}),o.children,a.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+r,title:"Direct link to heading"},"#")):a.a.createElement(e,o)}},X=n(149),Z=n.n(X),V={code:function(e){var t=e.children;return"string"==typeof t?a.a.createElement(z,e):t},a:function(e){return/\.[^./]+$/.test(e.href)?a.a.createElement("a",e):a.a.createElement(v.a,e)},pre:function(e){return a.a.createElement("div",Object(u.a)({className:Z.a.mdxCodeBlock},e))},h1:J("h1"),h2:J("h2"),h3:J("h3"),h4:J("h4"),h5:J("h5"),h6:J("h6")},G=n(181),K=n(188),Q=n(150),ee=n.n(Q);t.default=function(e){var t=e.route,n=e.docsMetadata,r=e.location,u=e.content,f=n.permalinkToSidebar,d=n.docsSidebars,m=n.version,p=n.isHomePage,h=n.homePagePath,v=p?{}:t.routes.find((function(e){return Object(K.a)(r.pathname,e)}))||{},y=p?u.metadata.sidebar:f[v.path],g=Object(i.a)(),b=g.siteConfig,E=(b=void 0===b?{}:b).themeConfig,O=(E=void 0===E?{}:E).sidebarCollapsible,j=void 0===O||O,w=g.isClient;return p||0!==Object.keys(v).length?a.a.createElement(c.a,{version:m,key:w},a.a.createElement("div",{className:ee.a.docPage},y&&a.a.createElement("div",{className:ee.a.docSidebarContainer},a.a.createElement(k,{docsSidebars:d,path:p?h:v.path,sidebar:y,sidebarCollapsible:j})),a.a.createElement("main",{className:ee.a.docMainContainer},a.a.createElement(o.a,{components:V},p?a.a.createElement(s.default,{content:u}):Object(l.a)(t.routes))))):a.a.createElement(G.default,e)}},163:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},f=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=r,p=f["".concat(i,".").concat(m)]||f[m]||d[m]||o;return n?a.a.createElement(p,l(l({ref:t},s),{},{components:n})):a.a.createElement(p,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},179:function(e,t,n){var r=n(8),a=n(180);r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},180:function(e,t,n){"use strict";var r=n(13),a=Date.prototype.getTime,o=Date.prototype.toISOString,i=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=o.call(new Date(-50000000000001))}))||!r((function(){o.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+i(e.getUTCMonth()+1)+"-"+i(e.getUTCDate())+"T"+i(e.getUTCHours())+":"+i(e.getUTCMinutes())+":"+i(e.getUTCSeconds())+"."+(n>99?n:"0"+i(n))+"Z"}:o},181:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(172);t.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("div",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},214:function(e,t,n){"use strict";var r=n(8),a=n(43)(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r(r.P+r.F*o,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(86)("find")},215:function(e,t,n){"use strict";var r=n(8),a=n(58)(!0);r(r.P,"Array",{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(86)("includes")},216:function(e,t,n){"use strict";var r=n(8),a=n(182);r(r.P+r.F*n(183)("includes"),"String",{includes:function(e){return!!~a(this,e,"includes").indexOf(e,arguments.length>1?arguments[1]:void 0)}})},217:function(e,t,n){"use strict";var r=n(9),a=n(30),o=n(20),i=n(45),l=n(83),c=n(84),s=Math.max,u=Math.min,f=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,m=/\$([$&`']|\d\d?)/g;n(85)("replace",2,(function(e,t,n,p){return[function(r,a){var o=e(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,a):n.call(String(o),r,a)},function(e,t){var a=p(n,e,this,t);if(a.done)return a.value;var f=r(e),d=String(this),m="function"==typeof t;m||(t=String(t));var v=f.global;if(v){var y=f.unicode;f.lastIndex=0}for(var g=[];;){var b=c(f,d);if(null===b)break;if(g.push(b),!v)break;""===String(b[0])&&(f.lastIndex=l(d,o(f.lastIndex),y))}for(var E,k="",O=0,j=0;j<g.length;j++){b=g[j];for(var w=String(b[0]),x=s(u(i(b.index),d.length),0),S=[],N=1;N<b.length;N++)S.push(void 0===(E=b[N])?E:String(E));var _=b.groups;if(m){var C=[w].concat(S,x,d);void 0!==_&&C.push(_);var T=String(t.apply(void 0,C))}else T=h(w,d,x,S,_,t);x>=O&&(k+=d.slice(O,x)+T,O=x+w.length)}return k+d.slice(O)}];function h(e,t,r,o,i,l){var c=r+e.length,s=o.length,u=m;return void 0!==i&&(i=a(i),u=d),n.call(l,u,(function(n,a){var l;switch(a.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(c);case"<":l=i[a.slice(1,-1)];break;default:var u=+a;if(0===u)return n;if(u>s){var d=f(u/10);return 0===d?n:d<=s?void 0===o[d-1]?a.charAt(1):o[d-1]+a.charAt(1):n}l=o[u-1]}return void 0===l?"":l}))}}))},218:function(e,t,n){"use strict";var r=n(9),a=n(20),o=n(83),i=n(84);n(85)("match",1,(function(e,t,n,l){return[function(n){var r=e(this),a=null==n?void 0:n[t];return void 0!==a?a.call(n,r):new RegExp(n)[t](String(r))},function(e){var t=l(n,e,this);if(t.done)return t.value;var c=r(e),s=String(this);if(!c.global)return i(c,s);var u=c.unicode;c.lastIndex=0;for(var f,d=[],m=0;null!==(f=i(c,s));){var p=String(f[0]);d[m]=p,""===p&&(c.lastIndex=o(s,a(c.lastIndex),u)),m++}return 0===m?null:d}]}))},219:function(e,t,n){var r;r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var n=e.hasAttribute("readonly");n||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),n||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var r=window.getSelection(),a=document.createRange();a.selectNodeContents(e),r.removeAllRanges(),r.addRange(a),t=r.toString()}return t}},function(e,t){function n(){}n.prototype={on:function(e,t,n){var r=this.e||(this.e={});return(r[e]||(r[e]=[])).push({fn:t,ctx:n}),this},once:function(e,t,n){var r=this;function a(){r.off(e,a),t.apply(n,arguments)}return a._=t,this.on(e,a,n)},emit:function(e){for(var t=[].slice.call(arguments,1),n=((this.e||(this.e={}))[e]||[]).slice(),r=0,a=n.length;r<a;r++)n[r].fn.apply(n[r].ctx,t);return this},off:function(e,t){var n=this.e||(this.e={}),r=n[e],a=[];if(r&&t)for(var o=0,i=r.length;o<i;o++)r[o].fn!==t&&r[o].fn._!==t&&a.push(r[o]);return a.length?n[e]=a:delete n[e],this}},e.exports=n,e.exports.TinyEmitter=n},function(e,t,n){var r=n(3),a=n(4);e.exports=function(e,t,n){if(!e&&!t&&!n)throw new Error("Missing required arguments");if(!r.string(t))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(e))return function(e,t,n){return e.addEventListener(t,n),{destroy:function(){e.removeEventListener(t,n)}}}(e,t,n);if(r.nodeList(e))return function(e,t,n){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,n)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,n)}))}}}(e,t,n);if(r.string(e))return function(e,t,n){return a(document.body,e,t,n)}(e,t,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var n=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,t,n){var r=n(5);function a(e,t,n,r,a){var i=o.apply(this,arguments);return e.addEventListener(n,i,a),{destroy:function(){e.removeEventListener(n,i,a)}}}function o(e,t,n,a){return function(n){n.delegateTarget=r(n.target,t),n.delegateTarget&&a.call(e,n)}}e.exports=function(e,t,n,r,o){return"function"==typeof e.addEventListener?a.apply(null,arguments):"function"==typeof n?a.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return a(e,t,n,r,o)})))}},function(e,t){if("undefined"!=typeof Element&&!Element.prototype.matches){var n=Element.prototype;n.matches=n.matchesSelector||n.mozMatchesSelector||n.msMatchesSelector||n.oMatchesSelector||n.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.resolveOptions(t),this.initSelection()}return i(e,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var e=this,t="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=a()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=a()(this.target),this.copyText()}},{key:"copyText",value:function(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":o(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function(){return this._target}}]),e}(),c=n(1),s=n.n(c),u=n(2),f=n.n(u),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return r.resolveOptions(n),r.listenClick(e),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),m(t,[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=f()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(t),target:this.target(t),text:this.text(t),container:this.container,trigger:t,emitter:this})}},{key:"defaultAction",value:function(e){return h("action",e)}},{key:"defaultTarget",value:function(e){var t=h("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return h("text",e)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,n=!!document.queryCommandSupported;return t.forEach((function(e){n=n&&!!document.queryCommandSupported(e)})),n}}]),t}(s.a);function h(e,t){var n="data-clipboard-"+e;if(t.hasAttribute(n))return t.getAttribute(n)}t.default=p}]).default},e.exports=r()},220:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],r=t[2],a=t[3];if(n&&a){var o=[],i=(n=parseInt(n))<(a=parseInt(a))?1:-1;"-"!=r&&".."!=r&&"\u2025"!=r||(a+=i);for(var l=n;l!=a;l+=i)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4979],{2599:(e,n,s)=>{s.d(n,{Z:()=>o});s(7378);var t=s(7140);const r={tabItem:"tabItem_wHwb"};var a=s(4246);function o(e){let{children:n,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:s,children:n})}},8447:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(7378),r=s(7140),a=s(9169),o=s(3620),i=s(9749),c=s(8981),l=s(56),d=s(8796);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=h(e),[o,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[l,u]=m({queryString:s,groupId:r}),[j,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),b=(()=>{const e=l??j;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,a]),tabValues:a}}var g=s(362);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=s(4246);function f(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),r=i[s].value;r!==t&&(l(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=j(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},2970:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=s(4246),r=s(1670),a=s(8447),o=s(2599);const i={id:"troubleshooting",title:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},c=void 0,l={unversionedId:"troubleshooting",id:"version-29.6/troubleshooting",title:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0",description:"\u304a\u3084\u304a\u3084\u3001\u3046\u307e\u304f\u3044\u304d\u307e\u305b\u3093\u304b\uff1f Jest \u306b\u3064\u3044\u3066\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u306e\u306b\u3053\u306e\u30ac\u30a4\u30c9\u3092\u3054\u5229\u7528\u4e0b\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-29.6/Troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/ja/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"29.6",frontMatter:{id:"troubleshooting",title:"\u30c8\u30e9\u30d6\u30eb\u30b7\u30e5\u30fc\u30c6\u30a3\u30f3\u30b0"},sidebar:"docs",previous:{title:"Jest\u3078\u306e\u79fb\u884c",permalink:"/ja/docs/migration-guide"},next:{title:"\u30a2\u30fc\u30ad\u30c6\u30af\u30c1\u30e3",permalink:"/ja/docs/architecture"}},d={},u=[{value:"\u7406\u7531\u306f\u5206\u304b\u3089\u306a\u3044\u304c\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3059\u308b",id:"\u7406\u7531\u306f\u5206\u304b\u3089\u306a\u3044\u304c\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3059\u308b",level:2},{value:"VS Code\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b",id:"vs-code\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b",level:2},{value:"WebStorm\u3067\u306e\u30c7\u30d0\u30c3\u30b0",id:"webstorm\u3067\u306e\u30c7\u30d0\u30c3\u30b0",level:2},{value:"\u30ad\u30e3\u30c3\u30b7\u30e5\u95a2\u9023\u306e\u554f\u984c",id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u95a2\u9023\u306e\u554f\u984c",level:2},{value:"Promise\u304c\u89e3\u6c7a\u3055\u308c\u306a\u3044",id:"promise\u304c\u89e3\u6c7a\u3055\u308c\u306a\u3044",level:2},{value:"Watchman\u95a2\u9023\u306e\u554f\u984c",id:"watchman\u95a2\u9023\u306e\u554f\u984c",level:2},{value:"Docker\u304a\u3088\u3073/\u307e\u305f\u306fCI\u30b5\u30fc\u30d0\u4e0a\u3067\u30c6\u30b9\u30c8\u304c\u6975\u7aef\u306b\u9045\u304f\u306a\u308b",id:"docker\u304a\u3088\u3073\u307e\u305f\u306fci\u30b5\u30fc\u30d0\u4e0a\u3067\u30c6\u30b9\u30c8\u304c\u6975\u7aef\u306b\u9045\u304f\u306a\u308b",level:2},{value:"<code>coveragePathIgnorePatterns</code> \u304c\u52d5\u4f5c\u3057\u3066\u3044\u306a\u3044",id:"coveragepathignorepatterns-\u304c\u52d5\u4f5c\u3057\u3066\u3044\u306a\u3044",level:2},{value:"Defining Tests",id:"defining-tests",level:2},{value:"\u307e\u3060\u89e3\u6c7a\u3057\u307e\u305b\u3093\u304b\uff1f",id:"\u307e\u3060\u89e3\u6c7a\u3057\u307e\u305b\u3093\u304b",level:2}];function h(e){const n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",pre:"pre",admonition:"admonition",em:"em"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u304a\u3084\u304a\u3084\u3001\u3046\u307e\u304f\u3044\u304d\u307e\u305b\u3093\u304b\uff1f Jest \u306b\u3064\u3044\u3066\u306e\u554f\u984c\u3092\u89e3\u6c7a\u3059\u308b\u306e\u306b\u3053\u306e\u30ac\u30a4\u30c9\u3092\u3054\u5229\u7528\u4e0b\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u7406\u7531\u306f\u5206\u304b\u3089\u306a\u3044\u304c\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3059\u308b",children:"\u7406\u7531\u306f\u5206\u304b\u3089\u306a\u3044\u304c\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["Try using the ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"debugging support"})," built into Node. ",(0,t.jsx)(n.code,{children:"debugger;"}),"\u5ba3\u8a00\u3092\u30c6\u30b9\u30c8\u306e\u4efb\u610f\u306e\u7b87\u6240\u306b\u8a18\u8ff0\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u3067\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u3066\u4e0b\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30de\u30f3\u30c9\u3067Jest\u306f\u5916\u90e8\u304b\u3089\u306e\u30c7\u30d0\u30c3\u30ac\u3068\u63a5\u7d9a\u3067\u304d\u308b\u72b6\u614b\u306eNode\u30d7\u30ed\u30bb\u30b9\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u307e\u3059\u3002 \u30d7\u30ed\u30bb\u30b9\u306f\u30c7\u30d0\u30c3\u30ac\u304c\u63a5\u7d9a\u3055\u308c\u308b\u307e\u3067\u30dd\u30fc\u30ba\u3059\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u4e0b\u3055\u3044\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["Google Chrome \uff08\u3082\u3057\u304f\u306f Chromium \u30d9\u30fc\u30b9\u306e\u30d6\u30e9\u30a6\u30b6\uff09\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u3092\u958b\u3044\u3066\u3001",(0,t.jsx)(n.code,{children:"chrome://inspect"}),' \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3001 "Open Dedicated DevTools for Node" \u3092\u958b\u304d\u307e\u3059\u3002 \u305d\u3046\u3059\u308c\u3070\u63a5\u7d9a\u3067\u304d\u308b\u30a2\u30af\u30c6\u30a3\u30d6\u306a node \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306e\u4e00\u89a7\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002 \u4e0a\u8a18\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u305f\u5f8c\u3001\u7aef\u672b\u306b\u8868\u793a\u3055\u308c\u308b\u30a2\u30c9\u30ec\u30b9(\u901a\u5e38\u306f ',(0,t.jsx)(n.code,{children:"localhost:9229"}),"\u306e\u3088\u3046\u306a\u3082\u306e)\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 Chrome\u306eDevTools\u3092\u4f7f\u3063\u3066Jest\u3092\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["ChromeDeveloperTools\u304c\u8868\u793a\u3055\u308c\u3001Jest \u306e CLI\u30b9\u30af\u30ea\u30d7\u30c8\u306e\uff11\u884c\u76ee\u306b\u30d6\u30ec\u30fc\u30af\u30dd\u30a4\u30f3\u30c8\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\uff08\u3053\u308c\u306f\u958b\u767a\u8005\u30c4\u30fc\u30eb\u3092\u958b\u304f\u305f\u3081\u306e\u6642\u9593\u3092\u8a2d\u3051\u3066\u3001\u305d\u306e\u524d\u306b Jest \u304c\u5b9f\u884c\u3055\u308c\u3066\u3057\u307e\u3046\u306e\u3092\u9632\u3050\u305f\u3081\u306e\u3082\u306e\u3067\u3059\uff09\u3002 \u6b21\u306e\u5b9f\u884c\u306b\u9032\u3080\u306b\u306f\u753b\u9762\u306e\u4e0a\u90e8\u53f3\u5074\u306b\u3042\u308b\u518d\u751f\u30dc\u30bf\u30f3\u306e\u3088\u3046\u306a\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u307e\u3059\u3002 ",(0,t.jsx)(n.code,{children:"debugger"})," \u5ba3\u8a00\u3092\u542b\u3080\u30c6\u30b9\u30c8\u3092Jest\u304c\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001\u5b9f\u884c\u306f\u30dd\u30fc\u30ba\u3055\u308c\u73fe\u5728\u3044\u306e\u30b9\u30b3\u30fc\u30d7\u3068\u30b3\u30fc\u30eb\u30b9\u30bf\u30c3\u30af\u3092\u8abf\u3079\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--runInBand"})," cli option makes sure Jest runs the test in the same process rather than spawning processes for individual tests. \u901a\u5e38Jest\u306f\u30d7\u30ed\u30bb\u30b9\u3092\u307e\u305f\u3044\u3067\u4e26\u5217\u306b\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u307e\u3059\u304c\u3001\u540c\u6642\u306b\u8907\u6570\u306e\u30d7\u30ed\u30bb\u30b9\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u306e\u306f\u56f0\u96e3\u3060\u304b\u3089\u3067\u3059\u3002"]})}),"\n",(0,t.jsx)(n.h2,{id:"vs-code\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b",children:"VS Code\u3067\u30c7\u30d0\u30c3\u30b0\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["There are multiple ways to debug Jest tests with ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code's"})," built-in ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",children:"debugger"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"\u7d44\u307f\u8fbc\u307f\u306e\u30c7\u30d0\u30c3\u30ac\u3092\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u524d\u8ff0\u3057\u305f\u5f62\u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3057\u3066\u4e0b\u3055\u3044\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u305d\u3057\u3066\u4ee5\u4e0b\u306e ",(0,t.jsx)(n.code,{children:"launch.json"}),"\u306e\u8a2d\u5b9a\u306b\u3088\u308aVS Code\u306e\u30c7\u30d0\u30c3\u30ac\u3092\u8ffd\u52a0\u3057\u3066\u4e0b\u3055\u3044:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "attach",\n      "name": "Attach",\n      "port": 9229\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u81ea\u52d5\u7684\u306b\u8d77\u52d5\u3057\u3066\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3059\u308b\u30d7\u30ed\u30bb\u30b9\u306b\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u4ee5\u4e0b\u306e\u69cb\u6210\u3092\u4f7f\u7528\u3057\u3066\u4e0b\u3055\u3044:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/.bin/jest",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u3082\u3057\u304f\u306f Windows \u306e\u5834\u5408\u306f\u4ee5\u4e0b\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/jest/bin/jest.js",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Facebook\u306e",(0,t.jsx)(n.a,{href:"https://github.com/facebookincubator/create-react-app",children:(0,t.jsx)(n.code,{children:"create-react-app"})}),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u306a\u3089\u3001Jest\u306e\u30c6\u30b9\u30c8\u3092\u4ee5\u4e0b\u306e\u8a2d\u5b9a\u3067\u30c7\u30d0\u30c3\u30b0\u3067\u304d\u307e\u3059:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": [\n        "test",\n        "--runInBand",\n        "--no-cache",\n        "--env=jsdom",\n        "--watchAll=false"\n      ],\n      "cwd": "${workspaceRoot}",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Node\u306b\u3088\u308b\u30c7\u30d0\u30c3\u30b0\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"\u3053\u3053"}),"\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"webstorm\u3067\u306e\u30c7\u30d0\u30c3\u30b0",children:"WebStorm\u3067\u306e\u30c7\u30d0\u30c3\u30b0"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/webstorm/",children:"WebStorm"})," has built-in support for Jest. Read ",(0,t.jsx)(n.a,{href:"https://blog.jetbrains.com/webstorm/2018/10/testing-with-jest-in-webstorm/",children:"Testing With Jest in WebStorm"})," to learn more."]}),"\n",(0,t.jsx)(n.h2,{id:"\u30ad\u30e3\u30c3\u30b7\u30e5\u95a2\u9023\u306e\u554f\u984c",children:"\u30ad\u30e3\u30c3\u30b7\u30e5\u95a2\u9023\u306e\u554f\u984c"}),"\n",(0,t.jsx)(n.p,{children:"Jest\u304c\u30b3\u30fc\u30c9\u3092\u5909\u63db\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5909\u66f4\u3084\u3001Babel\u306e\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u3092\u8a8d\u8b58\u3067\u304d\u3066\u3044\u307e\u305b\u3093\u304b\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/ja/docs/cli#--cache",children:(0,t.jsx)(n.code,{children:"--no-cache"})}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u4ed8\u3051\u3066\u518d\u5b9f\u884c\u3057\u3066\u307f\u3066\u4e0b\u3055\u3044\u3002 Jest\u306f\u30c6\u30b9\u30c8\u5b9f\u884c\u306e\u9ad8\u901f\u5316\u306e\u305f\u3081\u306b\u5909\u63db\u3055\u308c\u305f\u30e2\u30b8\u30e5\u30fc\u30eb\u30d5\u30a1\u30a4\u30eb\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u307e\u3059\u3002 \u72ec\u81ea\u306e\u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30e9\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,t.jsx)(n.code,{children:"getCacheKey"}),"\u95a2\u6570\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u691c\u8a0e\u3057\u3066\u4e0b\u3055\u3044:",(0,t.jsx)(n.a,{href:"https://github.com/facebook/relay/blob/58cf36c73769690f0bbf90562707eadb062b029d/scripts/jest/preprocessor.js#L56-L61",children:"getCacheKey in Relay"}),"\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"promise\u304c\u89e3\u6c7a\u3055\u308c\u306a\u3044",children:"Promise\u304c\u89e3\u6c7a\u3055\u308c\u306a\u3044"}),"\n",(0,t.jsx)(n.p,{children:"promise\u304c\u5168\u304f\u89e3\u6c7a\u3055\u308c\u306a\u3044\u5834\u5408\u3001\u3053\u306e\u30a8\u30e9\u30fc\u304c\u6295\u3052\u3089\u308c\u308b\u3067\u3057\u3087\u3046:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"- Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u6700\u3082\u591a\u3044\u539f\u56e0\u306fPromise\u306e\u5b9f\u88c5\u304c\u7af6\u5408\u3057\u3066\u3044\u308b\u3053\u3068\u3067\u3059\u3002 Consider replacing the global promise implementation with your own, for example ",(0,t.jsx)(n.code,{children:"globalThis.Promise = jest.requireActual('promise');"})," and/or consolidate the used Promise libraries to a single one."]}),"\n",(0,t.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u306e\u5b9f\u884c\u304c\u9577\u6642\u9593\u304b\u304b\u308b\u5834\u5408\u306f\u3001",(0,t.jsx)(n.code,{children:"jest.setTimeout"})," \u3092\u547c\u3073\u51fa\u3057\u3066\u30bf\u30a4\u30e0\u30a2\u30a6\u30c8\u6642\u9593\u3092\u4f38\u3070\u3059\u3053\u3068\u3082\u691c\u8a0e\u3057\u305f\u304f\u306a\u308b\u3067\u3057\u3087\u3046\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.setTimeout(10000); // 10 second timeout\n"})}),"\n",(0,t.jsx)(n.h2,{id:"watchman\u95a2\u9023\u306e\u554f\u984c",children:"Watchman\u95a2\u9023\u306e\u554f\u984c"}),"\n",(0,t.jsxs)(n.p,{children:["Jest\u3092",(0,t.jsx)(n.a,{href:"/ja/docs/cli#--watchman",children:(0,t.jsx)(n.code,{children:"--no-watchman"})})," \u30aa\u30d7\u30b7\u30e7\u30f3\u4ed8\u304d\u3067\u5b9f\u884c\u3059\u308b\u304b \u69cb\u6210\u30aa\u30d7\u30b7\u30e7\u30f3\u3067",(0,t.jsx)(n.code,{children:"watchman"}),"\u3092",(0,t.jsx)(n.code,{children:"false"}),"\u306b\u8a2d\u5b9a\u3057\u3066\u307f\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://facebook.github.io/watchman/docs/troubleshooting",children:"watchman troubleshooting"}),"\u3082\u53c2\u7167\u3057\u3066\u4e0b\u3055\u3044\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"docker\u304a\u3088\u3073\u307e\u305f\u306fci\u30b5\u30fc\u30d0\u4e0a\u3067\u30c6\u30b9\u30c8\u304c\u6975\u7aef\u306b\u9045\u304f\u306a\u308b",children:"Docker\u304a\u3088\u3073/\u307e\u305f\u306fCI\u30b5\u30fc\u30d0\u4e0a\u3067\u30c6\u30b9\u30c8\u304c\u6975\u7aef\u306b\u9045\u304f\u306a\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["While Jest is most of the time extremely fast on modern multi-core computers with fast SSDs, it may be slow on certain setups as our users ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1395",children:"have"})," ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-260246008",children:"discovered"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Based on the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-262366820",children:"findings"}),", one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially."]}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u308c\u3092\u5b9f\u65bd\u3059\u308b\u306b\u306f",(0,t.jsx)(n.a,{href:"/ja/docs/cli#--runinband",children:(0,t.jsx)(n.code,{children:"--runInBand"})}),"\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u6307\u5b9a\u3057\u3066\u30c6\u30b9\u30c8\u3092\u540c\u3058\u30b9\u30ec\u30c3\u30c9\u3067\u5b9f\u884c\u3057\u3066\u4e0b\u3055\u3044\u3002"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --runInBand\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --runInBand\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test -- --runInBand\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u30c6\u30b9\u30c8\u5b9f\u884c\u6642\u9593\u3092\u9ad8\u901f\u5316\u3059\u308b\u3082\u3046\uff11\u3064\u306e\u6848\u3068\u3057\u3066\u306fTravis-CI\u306e\u3088\u3046\u306aCI\u30b5\u30fc\u30d0\u3067\u30ef\u30fc\u30ab\u30fc\u306e\u30d7\u30fc\u30eb\u6570\u3092\u6700\u5927",(0,t.jsx)(n.em,{children:"4"}),"\u307e\u3067\u306b\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3067\u3059\u3002 Travis-CI\u306b\u7279\u5b9a\u3059\u308b\u3068\u3001\u30c6\u30b9\u30c8\u306e\u5b9f\u884c\u6642\u9593\u3092\u534a\u5206\u306b\u3067\u304d\u307e\u3059\u3002 \u6ce8\u610f: \u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u5229\u7528\u3067\u304d\u308bTravis-CI\u306e ",(0,t.jsx)(n.em,{children:"\u30d5\u30ea\u30fc"}),"\u30d7\u30e9\u30f3\u306f\uff12CPU\u30b3\u30a2\u307e\u3067\u3057\u304b\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --maxWorkers=4\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --maxWorkers=4\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test -- --maxWorkers=4\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If you use GitHub Actions, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/SimenB/github-actions-cpu-cores",children:(0,t.jsx)(n.code,{children:"github-actions-cpu-cores"})})," to detect number of CPUs, and pass that to Jest."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- name: Get number of CPU cores\n  id: cpu-cores\n  uses: SimenB/github-actions-cpu-cores@v1\n- name: run tests\n  run: yarn jest --max-workers ${{ steps.cpu-cores.outputs.count }}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Another thing you can do is use the ",(0,t.jsx)(n.a,{href:"/ja/docs/cli#--shard",children:(0,t.jsx)(n.code,{children:"shard"})})," flag to parallelize the test run across multiple machines."]}),"\n",(0,t.jsxs)(n.h2,{id:"coveragepathignorepatterns-\u304c\u52d5\u4f5c\u3057\u3066\u3044\u306a\u3044",children:[(0,t.jsx)(n.code,{children:"coveragePathIgnorePatterns"})," \u304c\u52d5\u4f5c\u3057\u3066\u3044\u306a\u3044"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"babel-plugin-istanbul"})," \u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u4f7f\u7528\u3057\u3066\u3044\u306a\u3044\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002 Jest \u306f Istanbul \u3092\u30e9\u30c3\u30d7\u3059\u308b\u305f\u3081\u3001\u30ab\u30d0\u30ec\u30c3\u30b8\u3092\u53ce\u96c6\u3059\u308b\u306e\u306b\u3069\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u4f7f\u7528\u3059\u308b\u306e\u304b\u3092 Istanbul \u306b\u4f1d\u3048\u307e\u3059\u3002 ",(0,t.jsx)(n.code,{children:"babel-plugin-istanbul"})," \u3092\u4f7f\u7528\u3057\u305f\u5834\u5408\u3001Babel \u306b\u3088\u308a\u51e6\u7406\u3055\u308c\u308b\u5168\u3066\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30ab\u30d0\u30ec\u30c3\u30b8\u53ce\u96c6\u7528\u30b3\u30fc\u30c9\u3092\u5099\u3048\u3066\u3044\u308b\u306e\u3067\u3001",(0,t.jsx)(n.code,{children:"coveragePathIgnorePatterns"})," \u3067\u7121\u8996\u3055\u308c\u306a\u304f\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"defining-tests",children:"Defining Tests"}),"\n",(0,t.jsx)(n.p,{children:"Tests must be defined synchronously for Jest to be able to collect your tests."}),"\n",(0,t.jsx)(n.p,{children:"As an example to show why this is the case, imagine we wrote a test like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Don't do this it will not work\nsetTimeout(() => {\n  it('passes', () => expect(1).toBe(1));\n}, 0);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When Jest runs your test to collect the ",(0,t.jsx)(n.code,{children:"test"}),"s it will not find any because we have set the definition to happen asynchronously on the next tick of the event loop. This means when you are using ",(0,t.jsx)(n.code,{children:"test.each"})," you cannot set the table asynchronously within a ",(0,t.jsx)(n.code,{children:"beforeEach"})," / ",(0,t.jsx)(n.code,{children:"beforeAll"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"\u307e\u3060\u89e3\u6c7a\u3057\u307e\u305b\u3093\u304b",children:"\u307e\u3060\u89e3\u6c7a\u3057\u307e\u305b\u3093\u304b\uff1f"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/help",children:" Help"})," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var t=s(7378);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:a(e),t.createElement(r.Provider,{value:i},n)}}}]);
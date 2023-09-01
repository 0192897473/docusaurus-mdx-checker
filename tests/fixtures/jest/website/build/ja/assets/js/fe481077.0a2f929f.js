"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1271],{2599:(e,n,s)=>{s.d(n,{Z:()=>o});s(7378);var t=s(7140);const r={tabItem:"tabItem_wHwb"};var a=s(4246);function o(e){let{children:n,hidden:s,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,o),hidden:s,children:n})}},8447:(e,n,s)=>{s.d(n,{Z:()=>k});var t=s(7378),r=s(7140),a=s(9169),o=s(3620),l=s(9749),i=s(8981),c=s(56),d=s(8796);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function h(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,i._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function j(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=p(e),[o,i]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[c,u]=m({queryString:s,groupId:r}),[j,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),x=(()=>{const e=c??j;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&i(x)}),[x]);return{selectedValue:o,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=s(362);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=s(4246);function g(e){let{className:n,block:s,selectedValue:t,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,s=i.indexOf(n),r=l[s].value;r!==t&&(c(n),o(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=i.indexOf(e.currentTarget)+1;n=i[s]??i[0];break}case"ArrowLeft":{const s=i.indexOf(e.currentTarget)-1;n=i[s]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:l.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function k(e){const n=(0,b.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},8715:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=s(4246),r=s(1670),a=s(8447),o=s(2599);const l={id:"webpack",title:"Using with webpack"},i=void 0,c={unversionedId:"webpack",id:"webpack",title:"Using with webpack",description:"Jest\u306f webpack\u3067\u30a2\u30bb\u30c3\u30c8\u3084\u30b9\u30bf\u30a4\u30eb\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u4f5c\u696d\u3092\u7ba1\u7406\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 webpack\u306fJavaScript\u4ee3\u66ff\u8a00\u8a9e\u3068\u30c4\u30fc\u30eb\u306e\u62e1\u5f35\u7684\u306a\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306b\u52a0\u3048\u3066\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3001\u753b\u50cf\u3084\u30d5\u30a9\u30f3\u30c8\u306e\u3088\u3046\u306a\u30a2\u30bb\u30c3\u30c8\u306e\u7ba1\u7406\u3092\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u76f4\u63a5\u7d50\u5408\u3059\u308b\u306e\u3067\u3001\u4ed6\u306e\u540c\u69d8\u306e\u30c4\u30fc\u30eb\u3068\u6bd4\u3079\u3066\u5b9f\u306b\u30e6\u30cb\u30fc\u30af\u3067\u6311\u6226\u7684\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/Webpack.md",sourceDirName:".",slug:"/webpack",permalink:"/ja/docs/next/webpack",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"current",frontMatter:{id:"webpack",title:"Using with webpack"},sidebar:"docs",previous:{title:"ECMAScript \u30e2\u30b8\u30e5\u30fc\u30eb",permalink:"/ja/docs/next/ecmascript-modules"},next:{title:"puppeteer \u3092\u4f7f\u7528\u3059\u308b",permalink:"/ja/docs/next/puppeteer"}},d={},u=[{value:"webpack\u306e\u8a2d\u5b9a\u4f8b",id:"webpack\u306e\u8a2d\u5b9a\u4f8b",level:2},{value:"\u9759\u7684\u30a2\u30bb\u30c3\u30c8\u306e\u7ba1\u7406",id:"\u9759\u7684\u30a2\u30bb\u30c3\u30c8\u306e\u7ba1\u7406",level:3},{value:"CSS\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30e2\u30c3\u30af",id:"css\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30e2\u30c3\u30af",level:3},{value:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u63a2\u7d22\u3067\u304d\u308b\u3088\u3046\u306bJest\u3092\u8a2d\u5b9a\u3059\u308b",id:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u63a2\u7d22\u3067\u304d\u308b\u3088\u3046\u306bjest\u3092\u8a2d\u5b9a\u3059\u308b",level:3},{value:"Using with webpack",id:"using-with-webpack",level:2}];function p(e){const n=Object.assign({p:"p",a:"a",em:"em",h2:"h2",pre:"pre",code:"code",h3:"h3",admonition:"admonition"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Jest\u306f ",(0,t.jsx)(n.a,{href:"https://webpack.js.org/",children:"webpack"}),"\u3067\u30a2\u30bb\u30c3\u30c8\u3084\u30b9\u30bf\u30a4\u30eb\u3001\u30b3\u30f3\u30d1\u30a4\u30eb\u4f5c\u696d\u3092\u7ba1\u7406\u3059\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 webpack\u306fJavaScript\u4ee3\u66ff\u8a00\u8a9e\u3068\u30c4\u30fc\u30eb\u306e\u62e1\u5f35\u7684\u306a\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u306b\u52a0\u3048\u3066\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3001\u753b\u50cf\u3084\u30d5\u30a9\u30f3\u30c8\u306e\u3088\u3046\u306a\u30a2\u30bb\u30c3\u30c8\u306e\u7ba1\u7406\u3092\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u306b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u76f4\u63a5\u7d50\u5408\u3059\u308b\u306e\u3067\u3001\u4ed6\u306e\u540c\u69d8\u306e\u30c4\u30fc\u30eb\u3068\u6bd4\u3079\u3066",(0,t.jsx)(n.em,{children:"\u5b9f\u306b"}),"\u30e6\u30cb\u30fc\u30af\u3067\u6311\u6226\u7684\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"webpack\u306e\u8a2d\u5b9a\u4f8b",children:"webpack\u306e\u8a2d\u5b9a\u4f8b"}),"\n",(0,t.jsx)(n.p,{children:"\u4e00\u822c\u7684\u306a\u7a2e\u985e\u306ewebpack\u306e\u8a2d\u5b9a\u30d5\u30a1\u30a4\u30eb\u304b\u3089\u59cb\u3081\u3066\u3001Jest\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306b\u5909\u63db\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="webpack.config.js"',children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        exclude: ['node_modules'],\n        use: ['babel-loader'],\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader'],\n      },\n      {\n        test: /\\.gif$/,\n        type: 'asset/inline',\n      },\n      {\n        test: /\\.(ttf|eot|svg)$/,\n        type: 'asset/resource',\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      config$: './configs/app-config.js',\n      react: './vendor/react-master',\n    },\n    extensions: ['.js', '.jsx'],\n    modules: [\n      'node_modules',\n      'bower_components',\n      'shared',\n      '/shared/vendor/modules',\n    ],\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Babel \u3067\u5909\u63db\u3055\u308c\u305f JavaScript \u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308b\u5834\u5408\u306f\u3001 ",(0,t.jsx)(n.code,{children:"babel-jest"})," \u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u3053\u3068\u3067 ",(0,t.jsx)(n.a,{href:"/ja/docs/next/getting-started#using-babel",children:"Babel \u3078\u306e\u30b5\u30dd\u30fc\u30c8\u3092\u6709\u52b9\u306b\u3059\u308b"}),"\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 Babel \u4ee5\u5916\u306e JavaScript\u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30e9\u306f Jest \u306e ",(0,t.jsx)(n.a,{href:"/ja/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,t.jsx)(n.code,{children:"transform"})})," \u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u7ba1\u7406\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u9759\u7684\u30a2\u30bb\u30c3\u30c8\u306e\u7ba1\u7406",children:"\u9759\u7684\u30a2\u30bb\u30c3\u30c8\u306e\u7ba1\u7406"}),"\n",(0,t.jsx)(n.p,{children:"\u6b21\u306f\u3001\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3084\u753b\u50cf\u306a\u3069\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u7c21\u6f54\u306b\u7ba1\u7406\u3067\u304d\u308b\u3088\u3046\u306bJest\u3092\u8a2d\u5b9a\u3057\u307e\u3057\u3087\u3046\u3002 \u901a\u5e38\u3001\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30c6\u30b9\u30c8\u3067\u306f\u7279\u306b\u6271\u3044\u3065\u3089\u3044\u306e\u3067\u3001\u554f\u984c\u304c\u306a\u3044\u3088\u3046\u306b\u30e2\u30c3\u30af\u3057\u307e\u3059\u3002 \u3057\u304b\u3057\u3001CSS\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5229\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u30af\u30e9\u30b9\u540d\u53c2\u7167\u306e\u305f\u3081\u306e\u30d7\u30ed\u30ad\u30b7\u3092\u30e2\u30c3\u30af\u3057\u305f\u65b9\u304c\u826f\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u305d\u3057\u3066\u30e2\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u81ea\u8eab\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="__mocks__/styleMock.js"',children:"module.exports = {};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="__mocks__/fileMock.js"',children:"module.exports = 'test-file-stub';\n"})}),"\n",(0,t.jsx)(n.h3,{id:"css\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30e2\u30c3\u30af",children:"CSS\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30e2\u30c3\u30af"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/css-modules/css-modules",children:"CSS Modules"}),"\u3092\u30e2\u30c3\u30af\u3059\u308b\u306b\u306f",(0,t.jsx)(n.a,{href:"https://github.com/keyanzhang/identity-obj-proxy",children:"ES6 Proxy"}),"\u3092\u4f7f\u7528\u3057\u307e\u3059:"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev identity-obj-proxy\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev identity-obj-proxy\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev identity-obj-proxy\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["\u30b9\u30bf\u30a4\u30eb\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u5168\u3066\u306e\u30af\u30e9\u30b9\u540d\u53c2\u7167\u306f\u305d\u306e\u307e\u307e\u8fd4\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059(\u3064\u307e\u308a",(0,t.jsx)(n.code,{children:"styles.foobar === 'foobar'"}),"\u3068\u306a\u308a\u307e\u3059)\u3002 \u3053\u306e\u6319\u52d5\u306f React \u306e ",(0,t.jsx)(n.a,{href:"/ja/docs/next/snapshot-testing",children:"Snapshot \u306e\u30c6\u30b9\u30c8"}),"\u306b\u3068\u3066\u3082\u4fbf\u5229\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js (for CSS Modules)"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"moduleNameMapper"}),"\u3067\u306f\u4e0d\u5341\u5206\u306a\u5834\u5408\u306f\u3001Jest \u306e ",(0,t.jsx)(n.a,{href:"/ja/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,t.jsx)(n.code,{children:"transform"})}),"\u8a2d\u5b9a\u30aa\u30d7\u30b7\u30e7\u30f3\u3067\u30a2\u30bb\u30c3\u30c8\u306e\u5909\u63db\u65b9\u6cd5\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002 \u4f8b\u3048\u3070\u30d5\u30a1\u30a4\u30eb\u306e\u30d9\u30fc\u30b9\u30cd\u30fc\u30e0\u306b\u5909\u63db\u3057\u305f\u3044\u5834\u5408(",(0,t.jsx)(n.code,{children:"require('logo.jpg');"})," \u304b\u3089 ",(0,t.jsx)(n.code,{children:"'logo'"})," \u306b\u5909\u63db)\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u8a18\u8ff0\u3057\u3066\u304f\u3060\u3055\u3044:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js (for custom transformers and CSS Modules)"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Jest\u304c\u30b9\u30bf\u30a4\u30eb\u30b7\u30fc\u30c8\u3084\u753b\u50cf\u306e\u62e1\u5f35\u5b50\u306e\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u3092\u7121\u8996\u3057\u3066\u3001\u4ee3\u308f\u308a\u306b\u30e2\u30c3\u30af\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u3088\u3046\u306b\u8a2d\u5b9a\u3057\u307e\u3057\u305f\u3002 webpack\u306e\u8a2d\u5b9a\u3067\u6271\u3046\u30d5\u30a1\u30a4\u30eb\u30bf\u30a4\u30d7\u3092\u7167\u5408\u3059\u308b\u6b63\u898f\u8868\u73fe\u306f\u8abf\u6574\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["Remember to include the default ",(0,t.jsx)(n.code,{children:"babel-jest"})," transformer explicitly, if you wish to use it alongside with additional code preprocessors:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,t.jsx)(n.h3,{id:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u63a2\u7d22\u3067\u304d\u308b\u3088\u3046\u306bjest\u3092\u8a2d\u5b9a\u3059\u308b",children:"\u30bd\u30fc\u30b9\u30d5\u30a1\u30a4\u30eb\u3092\u63a2\u7d22\u3067\u304d\u308b\u3088\u3046\u306bJest\u3092\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u3053\u307e\u3067\u3067Jest\u306f\u30d5\u30a1\u30a4\u30eb\u306e\u51e6\u7406\u65b9\u6cd5\u3092\u7406\u89e3\u3057\u305f\u306e\u3067\u3001\u6b21\u306fJest\u306b\u30d5\u30a1\u30a4\u30eb\u3092 ",(0,t.jsx)(n.em,{children:"\u898b\u3064\u3051\u308b"}),"\u65b9\u6cd5\u3092\u6559\u3048\u3066\u3084\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 For webpack's ",(0,t.jsx)(n.code,{children:"modules"}),", and ",(0,t.jsx)(n.code,{children:"extensions"})," options there are direct analogs in Jest's ",(0,t.jsx)(n.code,{children:"moduleDirectories"})," and ",(0,t.jsx)(n.code,{children:"moduleFileExtensions"})," options."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"<rootDir>"})," is a special token that gets replaced by Jest with the root of your project. Most of the time this will be the folder where your ",(0,t.jsx)(n.code,{children:"package.json"})," is located unless you specify a custom ",(0,t.jsx)(n.a,{href:"/ja/docs/next/configuration#rootdir-string",children:(0,t.jsx)(n.code,{children:"rootDir"})})," option in your configuration."]})}),"\n",(0,t.jsxs)(n.p,{children:["Similarly, Jest's counterpart for Webpack's ",(0,t.jsx)(n.code,{children:"resolve.roots"})," (an alternative to setting ",(0,t.jsx)(n.code,{children:"NODE_PATH"}),") is ",(0,t.jsx)(n.code,{children:"modulePaths"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n"})}),"\n",(0,t.jsxs)(n.p,{children:["And finally, we have to handle the webpack ",(0,t.jsx)(n.code,{children:"alias"}),". For that, we can make use of the ",(0,t.jsx)(n.code,{children:"moduleNameMapper"})," option again."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n\n    '^react(.*)$': '<rootDir>/vendor/react-master$1',\n    '^config$': '<rootDir>/configs/app-config.js',\n  },\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u4ee5\u4e0a\u3067\u3059\uff01 webpack\u306f\u8907\u96d1\u3067\u67d4\u8edf\u306a\u30c4\u30fc\u30eb\u306a\u306e\u3067\u3001\u9069\u7528\u3059\u308b\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u5fc5\u8981\u3068\u3059\u308b\u3053\u3068\u306b\u5bfe\u5fdc\u3059\u308b\u305f\u3081\u306b\u3044\u304f\u3089\u304b\u8abf\u6574\u3092\u3057\u306a\u3051\u308c\u3070\u306a\u3089\u306a\u3044\u3067\u3057\u3087\u3046\u3002 \u5e78\u3044\u306b\u3082\u307b\u3068\u3093\u3069\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u3001Jest\u306fwebpack\u306e\u8a2d\u5b9a\u3092\u8abf\u6574\u3059\u308b\u3088\u308a\u3082\u5341\u5206\u306a\u67d4\u8edf\u6027\u3092\u6301\u3063\u3066\u3044\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["For more complex webpack configurations, you may also want to investigate projects such as: ",(0,t.jsx)(n.a,{href:"https://github.com/istarkov/babel-plugin-webpack-loaders",children:"babel-plugin-webpack-loaders"}),"."]})}),"\n",(0,t.jsx)(n.h2,{id:"using-with-webpack",children:"Using with webpack"}),"\n",(0,t.jsxs)(n.p,{children:["In addition to installing ",(0,t.jsx)(n.code,{children:"babel-jest"})," as described earlier, you'll need to add ",(0,t.jsx)(n.code,{children:"@babel/preset-env"})," like so:"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(o.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-env\n"})})}),(0,t.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @babel/preset-env\n"})})}),(0,t.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-env\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"Then, you'll want to configure Babel as follows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".babelrc"',children:'{\n  "presets": ["@babel/preset-env"]\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Jest caches files to speed up test execution. If you updated ",(0,t.jsx)(n.code,{children:".babelrc"})," and Jest is not working as expected, try clearing the cache by running ",(0,t.jsx)(n.code,{children:"jest --clearCache"}),"."]})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"import('some-file.js').then (module = >...)"}),"\u306e\u3088\u3046\u306b\u52d5\u7684\u30a4\u30f3\u30dd\u30fc\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5834\u5408\u306f\u3001 ",(0,t.jsx)(n.code,{children:"dynamic-import-node"})," \u30d7\u30e9\u30b0\u30a4\u30f3\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",metastring:'title=".babelrc"',children:'{\n  "presets": [["env", {"modules": false}]],\n\n  "plugins": ["syntax-dynamic-import"],\n\n  "env": {\n    "test": {\n      "plugins": ["dynamic-import-node"]\n    }\n  }\n}\n'})})]}),"\n",(0,t.jsxs)(n.p,{children:["For an example of how to use Jest with webpack with React, you can view one ",(0,t.jsx)(n.a,{href:"https://github.com/jenniferabowd/jest_webpack_example",children:"here"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>a});var t=s(7378);const r=t.createContext({});function a(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||o:a(e),t.createElement(r.Provider,{value:l},n)}}}]);
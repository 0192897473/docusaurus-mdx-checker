"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9900],{2599:(e,s,n)=>{n.d(s,{Z:()=>i});n(7378);var t=n(7140);const a={tabItem:"tabItem_wHwb"};var r=n(4246);function i(e){let{children:s,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:n,children:s})}},8447:(e,s,n)=>{n.d(s,{Z:()=>w});var t=n(7378),a=n(7140),r=n(9169),i=n(3620),l=n(9749),o=n(8981),c=n(56),d=n(8796);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:a}}=e;return{value:s,label:n,attributes:t,default:a}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o._X)(r),(0,t.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(a.location.search);s.set(r,e),a.replace({...a.location,search:s.toString()})}),[r,a])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,r=p(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:r}))),[c,u]=j({queryString:n,groupId:a}),[m,b]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,r]=(0,d.Nk)(n);return[a,(0,t.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=c??m;return h({value:e,tabValues:r})?e:null})();(0,l.Z)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=n(362);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=n(4246);function f(e){let{className:s,block:n,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const s=e.currentTarget,n=o.indexOf(s),a=l[n].value;a!==t&&(c(s),i(a))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>o.push(e),onKeyDown:u,onClick:d,...r,className:(0,a.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function y(e){const s=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(f,{...e,...s}),(0,x.jsx)(v,{...e,...s})]})}function w(e){const s=(0,b.Z)();return(0,x.jsx)(y,{...e,children:u(e.children)},String(s))}},7572:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var t=n(4246),a=n(1670),r=n(8447),i=n(2599);const l={id:"getting-started",title:"Primii pa\u0219i"},o=void 0,c={unversionedId:"getting-started",id:"version-29.4/getting-started",title:"Primii pa\u0219i",description:"Install Jest using your favorite package manager:",source:"@site/i18n/ro/docusaurus-plugin-content-docs/version-29.4/GettingStarted.md",sourceDirName:".",slug:"/getting-started",permalink:"/ro/docs/29.4/getting-started",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"29.4",frontMatter:{id:"getting-started",title:"Primii pa\u0219i"},sidebar:"docs",next:{title:"Utilizarea regulilor de potrivire",permalink:"/ro/docs/29.4/using-matchers"}},d={},u=[{value:"Rularea din linia de comand\u0103",id:"rularea-din-linia-de-comand\u0103",level:2},{value:"Informa\u021bii suplimentare",id:"informa\u021bii-suplimentare",level:2},{value:"Generate a basic configuration file",id:"generate-a-basic-configuration-file",level:3},{value:"Folosind Babel",id:"folosind-babel",level:3},{value:"Folosind Webpack",id:"folosind-webpack",level:3},{value:"Using Vite",id:"using-vite",level:3},{value:"Using Parcel",id:"using-parcel",level:3},{value:"Folosind TypeScript",id:"folosind-typescript",level:3},{value:"Via <code>babel</code>",id:"via-babel",level:4},{value:"Via <code>ts-jest</code>",id:"via-ts-jest",level:4},{value:"Type definitions",id:"type-definitions",level:4}];function p(e){const s=Object.assign({p:"p",pre:"pre",code:"code",strong:"strong",a:"a",h2:"h2",h3:"h3",admonition:"admonition",h4:"h4"},(0,a.ah)(),e.components),{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Install Jest using your favorite package manager:"}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev jest\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev jest\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev jest\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a ",(0,t.jsx)(s.code,{children:"sum.js"})," file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Then, create a file named ",(0,t.jsx)(s.code,{children:"sum.test.js"}),". This will contain our actual test:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Ad\u0103uga\u021bi sec\u021biunea urm\u0103toare \xeen fi\u0219ierul vostru ",(0,t.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Finally, run ",(0,t.jsx)(s.code,{children:"yarn test"})," or ",(0,t.jsx)(s.code,{children:"npm test"})," and Jest will print this message:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Tocmai a\u021bi scris cu succes primul test folosind Jest!"})}),"\n",(0,t.jsxs)(s.p,{children:["Testul acesta a folosit ",(0,t.jsx)(s.code,{children:"expect"})," \u0219i ",(0,t.jsx)(s.code,{children:"toBe"})," pentru a testa dac\u0103 dou\u0103 valori sunt identice. Pentru a afla mai multe lucruri pe care Jest le poate testa, vezi ",(0,t.jsx)(s.a,{href:"/ro/docs/29.4/using-matchers",children:"Utilizarea regulilor de potrivire"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"rularea-din-linia-de-comand\u0103",children:"Rularea din linia de comand\u0103"}),"\n",(0,t.jsxs)(s.p,{children:["You can run Jest directly from the CLI (if it's globally available in your ",(0,t.jsx)(s.code,{children:"PATH"}),", e.g. by ",(0,t.jsx)(s.code,{children:"yarn global add jest"})," or ",(0,t.jsx)(s.code,{children:"npm install jest --global"}),") with a variety of useful options."]}),"\n",(0,t.jsxs)(s.p,{children:["Iat\u0103 cum s\u0103 executa\u0163i Jest pe fi\u015fierele ",(0,t.jsx)(s.code,{children:"my-test"}),", folosind ",(0,t.jsx)(s.code,{children:"config.json"})," ca fi\u015fier de configurare \u015fi afi\u015farea unei notific\u0103ri native de sistem dup\u0103 rulare:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jest my-test --notify --config=config.json\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Dac\u0103 dori\u0163i s\u0103 afla\u0163i mai multe despre rularea ",(0,t.jsx)(s.code,{children:"jest"})," prin linia de comand\u0103, vezi pagina de ",(0,t.jsx)(s.a,{href:"/ro/docs/29.4/cli",children:"Op\u021biuni Jest pentru linia de comand\u0103"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"informa\u021bii-suplimentare",children:"Informa\u021bii suplimentare"}),"\n",(0,t.jsx)(s.h3,{id:"generate-a-basic-configuration-file",children:"Generate a basic configuration file"}),"\n",(0,t.jsx)(s.p,{children:"Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jest --init\n"})}),"\n",(0,t.jsx)(s.h3,{id:"folosind-babel",children:"Folosind Babel"}),"\n",(0,t.jsxs)(s.p,{children:["To use ",(0,t.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),", install required dependencies:"]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev babel-jest @babel/core @babel/preset-env\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Configure Babel to target your current version of Node by creating a ",(0,t.jsx)(s.code,{children:"babel.config.js"})," file in the root of your project:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ideal configuration for Babel will depend on your project. See ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/",children:"Babel's docs"})," for more details."]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{markdown:"span",children:(0,t.jsx)("strong",{children:"Making your Babel config jest-aware"})}),(0,t.jsxs)(s.p,{children:["Jest will set ",(0,t.jsx)(s.code,{children:"process.env.NODE_ENV"})," to ",(0,t.jsx)(s.code,{children:"'test'"})," if it's not set to something else. You can use that in your configuration to conditionally setup only the compilation needed for Jest, e.g."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = api => {\n  const isTest = api.env('test');\n  // You can use isTest to determine what presets and plugins to use.\n\n  return {\n    // ...\n  };\n};\n"})}),(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"babel-jest"})," is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. Pentru a evita acest comportament, ave\u0163i posibilitatea s\u0103 reini\u0163ializa\u0163i explicit op\u0163iunea de configurare ",(0,t.jsx)(s.code,{children:"transform"}),":"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {},\n};\n"})})]})]}),"\n",(0,t.jsx)(s.h3,{id:"folosind-webpack",children:"Folosind Webpack"}),"\n",(0,t.jsxs)(s.p,{children:["Jest poate fi utilizat \xeen proiecte care folosesc ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," pentru gestionarea fi\u0219ierelor statice, stiluri \u015fi compilare. webpack ofer\u0103 unele provoc\u0103ri unice fa\u021b\u0103 de alte instrumente. Urma\u021bi ",(0,t.jsx)(s.a,{href:"/ro/docs/29.4/webpack",children:"ghidul webpack"})," pentru a \xeencepe."]}),"\n",(0,t.jsx)(s.h3,{id:"using-vite",children:"Using Vite"}),"\n",(0,t.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/",children:"vite"})," to serve source code over native ESM to provide some frontend tooling, vite is an opinionated tool and does offer some out-of-the box workflows. Jest is not fully supported by vite due to how the ",(0,t.jsx)(s.a,{href:"https://github.com/vitejs/vite/issues/1955#issuecomment-776009094",children:"plugin system"})," from vite works, but there are some working examples for first-class jest integration using ",(0,t.jsx)(s.code,{children:"vite-jest"}),", since this is not fully supported, you might as well read the ",(0,t.jsxs)(s.a,{href:"https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests",children:["limitation of the ",(0,t.jsx)(s.code,{children:"vite-jest"})]}),". Refer to the ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/guide/",children:"vite guide"})," to get started."]}),"\n",(0,t.jsx)(s.h3,{id:"using-parcel",children:"Using Parcel"}),"\n",(0,t.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,t.jsx)(s.a,{href:"https://parceljs.org/",children:"parcel-bundler"})," to manage assets, styles, and compilation similar to webpack. Parcel requires zero configuration. Refer to the official ",(0,t.jsx)(s.a,{href:"https://parceljs.org/docs/",children:"docs"})," to get started."]}),"\n",(0,t.jsx)(s.h3,{id:"folosind-typescript",children:"Folosind TypeScript"}),"\n",(0,t.jsxs)(s.h4,{id:"via-babel",children:["Via ",(0,t.jsx)(s.code,{children:"babel"})]}),"\n",(0,t.jsxs)(s.p,{children:["Jest supports TypeScript, via Babel. First, make sure you followed the instructions on ",(0,t.jsx)(s.a,{href:"#using-babel",children:"using Babel"})," above. Next, install the ",(0,t.jsx)(s.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-typescript\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-typescript\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-typescript\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Then add ",(0,t.jsx)(s.code,{children:"@babel/preset-typescript"})," to the list of presets in your ",(0,t.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["However, there are some ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"caveats"})," to using TypeScript with Babel. Because TypeScript support in Babel is purely transpilation, Jest will not type-check your tests as they are run. If you want that, you can use ",(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," instead, or just run the TypeScript compiler ",(0,t.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"tsc"})," separately (or as part of your build process)."]}),"\n",(0,t.jsxs)(s.h4,{id:"via-ts-jest",children:["Via ",(0,t.jsx)(s.code,{children:"ts-jest"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev ts-jest\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev ts-jest\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev ts-jest\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["In order for Jest to transpile TypeScript with ",(0,t.jsx)(s.code,{children:"ts-jest"}),", you may also need to create a ",(0,t.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file",children:"configuration"})," file."]}),"\n",(0,t.jsx)(s.h4,{id:"type-definitions",children:"Type definitions"}),"\n",(0,t.jsxs)(s.p,{children:["There are two ways to have ",(0,t.jsx)(s.a,{href:"/ro/docs/29.4/api",children:"Jest global APIs"})," typed for test files written in TypeScript."]}),"\n",(0,t.jsxs)(s.p,{children:["You can use type definitions which ships with Jest and will update each time you update Jest. Install the ",(0,t.jsx)(s.code,{children:"@jest/globals"})," package:"]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @jest/globals\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @jest/globals\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @jest/globals\n"})})})]}),"\n",(0,t.jsx)(s.p,{children:"And import the APIs from it:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="sum.test.ts"',children:"import {describe, expect, test} from '@jest/globals';\nimport {sum} from './sum';\n\ndescribe('sum module', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["See the additional usage documentation of ",(0,t.jsxs)(s.a,{href:"/ro/docs/29.4/api#typescript-usage",children:[(0,t.jsx)(s.code,{children:"describe.each"}),"/",(0,t.jsx)(s.code,{children:"test.each"})]})," and ",(0,t.jsx)(s.a,{href:"/ro/docs/29.4/mock-function-api#typescript-usage",children:(0,t.jsx)(s.code,{children:"mock functions"})}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["Or you may choose to install the ",(0,t.jsx)(s.a,{href:"https://npmjs.com/package/@types/jest",children:(0,t.jsx)(s.code,{children:"@types/jest"})})," package. It provides types for Jest globals without a need to import them."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(i.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @types/jest\n"})})}),(0,t.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @types/jest\n"})})}),(0,t.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @types/jest\n"})})})]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"@types/jest"})," is a third party library maintained at ",(0,t.jsx)(s.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest",children:"DefinitelyTyped"}),", hence the latest Jest features or versions may not be covered yet. Try to match versions of Jest and ",(0,t.jsx)(s.code,{children:"@types/jest"})," as closely as possible. For example, if you are using Jest ",(0,t.jsx)(s.code,{children:"27.4.0"})," then installing ",(0,t.jsx)(s.code,{children:"27.4.x"})," of ",(0,t.jsx)(s.code,{children:"@types/jest"})," is ideal."]})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,a.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>r});var t=n(7378);const a=t.createContext({});function r(e){const s=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(a.Provider,{value:l},s)}}}]);
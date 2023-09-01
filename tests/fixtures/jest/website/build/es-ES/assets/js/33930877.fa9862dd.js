"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[803],{2599:(e,n,t)=>{t.d(n,{Z:()=>l});t(7378);var a=t(7140);const s={tabItem:"tabItem_wHwb"};var r=t(4246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,l),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7378),s=t(7140),r=t(9169),l=t(3620),o=t(9749),i=t(8981),c=t(56),d=t(8796);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,u]=p({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),j=(()=>{const e=c??b;return m({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=t(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=t(4246);function y(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==a&&(c(n),l(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function x(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(g,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,v.jsx)(x,{...e,children:u(e.children)},String(n))}},8849:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(4246),s=t(1670),r=t(8447),l=t(2599);const o={id:"dynamodb",title:"Usar Jest con DynamoDB"},i=void 0,c={unversionedId:"dynamodb",id:"version-29.4/dynamodb",title:"Usar Jest con DynamoDB",description:"Con las API Setup/Teardown Global y Ambiente As\xedncrono de Test , Jest puede funcionar sin problemas con DynamoDB.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/version-29.4/DynamoDB.md",sourceDirName:".",slug:"/dynamodb",permalink:"/es-ES/docs/29.4/dynamodb",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.4",frontMatter:{id:"dynamodb",title:"Usar Jest con DynamoDB"},sidebar:"docs",previous:{title:"Utilizando con MongoDB",permalink:"/es-ES/docs/29.4/mongodb"},next:{title:"Manipulaci\xf3n del DOM",permalink:"/es-ES/docs/29.4/tutorial-jquery"}},d={},u=[{value:"Utiliza el preset de jest-dynamodb",id:"utiliza-el-preset-de-jest-dynamodb",level:2}];function h(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Con las API ",(0,a.jsx)(n.a,{href:"/es-ES/docs/29.4/configuration#globalsetup-string",children:"Setup/Teardown Global"})," y ",(0,a.jsx)(n.a,{href:"/es-ES/docs/29.4/configuration#testenvironment-string",children:"Ambiente As\xedncrono de Test"})," , Jest puede funcionar sin problemas con ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/dynamodb/",children:"DynamoDB"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"utiliza-el-preset-de-jest-dynamodb",children:"Utiliza el preset de jest-dynamodb"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"Jest DynamoDB"})," proporciona toda la configuraci\xf3n necesaria para ejecutar test que usan DynamoDB."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Primero, instala ",(0,a.jsx)(n.code,{children:"@shelf/jest-dynamodb"})]}),"\n"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @shelf/jest-dynamodb\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @shelf/jest-dynamodb\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @shelf/jest-dynamodb\n"})})})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Specify preset in your Jest configuration:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "@shelf/jest-dynamodb"\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsx)(n.li,{children:"Configurar cliente DynamoDB"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["V\xe9ase ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property",children:"el API de crear tablas"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const {DocumentClient} = require('aws-sdk/clients/dynamodb');\n\nconst esTest = process.env.JEST_WORKER_ID;\nconst config = {\n  convertEmptyValues: true,\n  ...(esTest && {\n    endpoint: 'localhost:8000',\n    sslEnabled: false,\n    region: 'local-env',\n  }),\n};\n\nconst ddb = new DocumentClient(config);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"Escribe Tests"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"it('deber\xeda insertar elemento en la tabla', async () => {\n  await ddb\n    .put({TableName: 'archivos', Objeto: {id: '1', hola: 'mundo'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'archivos', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hola: 'mundo',\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"Escribe Tests"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"it('deber\xeda insertar elemento en la tabla', async () => {\n  await ddb\n    .put({TableName: 'archivos', Objeto: {id: '1', hola: 'mundo'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'archivos', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hola: 'mundo',\n  });\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"There's no need to load any dependencies."}),"\n",(0,a.jsxs)(n.p,{children:["Ve\xe1se ",(0,a.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"la documentaci\xf3n"})," para m\xe1s detalles."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>r});var a=t(7378);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||l:r(e),a.createElement(s.Provider,{value:o},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[90],{2599:(e,n,t)=>{t.d(n,{Z:()=>l});t(7378);var a=t(7140);const r={tabItem:"tabItem_wHwb"};var s=t(4246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7378),r=t(7140),s=t(9169),l=t(3620),o=t(9749),i=t(8981),c=t(56),u=t(8796);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=c??b;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var y=t(4246);function v(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(c(n),l(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function g(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function x(e){const n=b(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,y.jsx)(v,{...e,...n}),(0,y.jsx)(g,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(n))}},1919:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(4246),r=t(1670),s=t(8447),l=t(2599);const o={id:"dynamodb",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 DynamoDB"},i=void 0,c={unversionedId:"dynamodb",id:"version-29.4/dynamodb",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 DynamoDB",description:"\u0420\u0430\u0437\u043e\u043c \u0437 API Global Setup/Teardown \u0442\u0430 Async Test Environment, Jest \u043c\u043e\u0436\u0435 \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0437 DynamoDB.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.4/DynamoDB.md",sourceDirName:".",slug:"/dynamodb",permalink:"/uk/docs/29.4/dynamodb",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.4",frontMatter:{id:"dynamodb",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 DynamoDB"},sidebar:"docs",previous:{title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 MongoDB",permalink:"/uk/docs/29.4/mongodb"},next:{title:"\u041c\u0430\u043d\u0456\u043f\u0443\u043b\u044f\u0446\u0456\u044f DOM",permalink:"/uk/docs/29.4/tutorial-jquery"}},u={},d=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f jest-dynamodb Preset",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f-jest-dynamodb-preset",level:2}];function h(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["\u0420\u0430\u0437\u043e\u043c \u0437 API ",(0,a.jsx)(n.a,{href:"/uk/docs/29.4/configuration#globalsetup-string",children:"Global Setup/Teardown"})," \u0442\u0430 ",(0,a.jsx)(n.a,{href:"/uk/docs/29.4/configuration#testenvironment-string",children:"Async Test Environment"}),", Jest \u043c\u043e\u0436\u0435 \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0437 ",(0,a.jsx)(n.a,{href:"https://aws.amazon.com/dynamodb/",children:"DynamoDB"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f-jest-dynamodb-preset",children:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f jest-dynamodb Preset"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"Jest DynamoDB"})," \u043d\u0430\u0434\u0430\u0454 \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0443 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e, \u0449\u043e\u0431 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0432\u0430\u0448\u0456 \u0442\u0435\u0441\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e DynamoDB."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443, \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0456\u0442\u044c ",(0,a.jsx)(n.code,{children:"@shelf/jest-dynamodb"})]}),"\n"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @shelf/jest-dynamodb\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @shelf/jest-dynamodb\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @shelf/jest-dynamodb\n"})})})]}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"\u0412\u043a\u0430\u0436\u0456\u0442\u044c preset \u0443 \u0432\u0430\u0448\u0456\u0439 Jest \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "@shelf/jest-dynamodb"\n}\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["\u0421\u0442\u0432\u043e\u0440\u0456\u0442\u044c ",(0,a.jsx)(n.code,{children:"jest-dynamodb-config.js"})," \u0442\u0430 \u0437\u0430\u0434\u0430\u0439\u0442\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u0456 DynamoDB"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["\u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435 \u0432 ",(0,a.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB.html#createTable-property",children:"Create Table API"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  tables: [\n    {\n      TableName: `files`,\n      KeySchema: [{AttributeName: 'id', KeyType: 'HASH'}],\n      AttributeDefinitions: [{AttributeName: 'id', AttributeType: 'S'}],\n      ProvisionedThroughput: {ReadCapacityUnits: 1, WriteCapacityUnits: 1},\n    },\n    // \u0456 \u0442\u0430\u043a \u0434\u0430\u043b\u0456\n  ],\n};\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"4",children:["\n",(0,a.jsx)(n.li,{children:"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u043a\u043b\u0456\u0454\u043d\u0442 DynamoDB"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const {DocumentClient} = require('aws-sdk/clients/dynamodb');\n\nconst isTest = process.env.JEST_WORKER_ID;\nconst config = {\n  convertEmptyValues: true,\n  ...(isTest && {\n    endpoint: 'localhost:8000',\n    sslEnabled: false,\n    region: 'local-env',\n  }),\n};\n\nconst ddb = new DocumentClient(config);\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"5",children:["\n",(0,a.jsx)(n.li,{children:"\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0442\u0435\u0441\u0442\u0438"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"it('should insert item into table', async () => {\n  await ddb\n    .put({TableName: 'files', Item: {id: '1', hello: 'world'}})\n    .promise();\n\n  const {Item} = await ddb.get({TableName: 'files', Key: {id: '1'}}).promise();\n\n  expect(Item).toEqual({\n    id: '1',\n    hello: 'world',\n  });\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u041d\u0435\u043c\u0430\u0454 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456."}),"\n",(0,a.jsxs)(n.p,{children:["\u041f\u043e\u0434\u0440\u043e\u0431\u0438\u0446\u0456 \u0448\u0443\u043a\u0430\u0439\u0442\u0435 \u0432 ",(0,a.jsx)(n.a,{href:"https://github.com/shelfio/jest-dynamodb",children:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457"}),"."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(h,e)})):h(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var a=t(7378);const r=a.createContext({});function s(e){const n=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||l:s(e),a.createElement(r.Provider,{value:o},n)}}}]);
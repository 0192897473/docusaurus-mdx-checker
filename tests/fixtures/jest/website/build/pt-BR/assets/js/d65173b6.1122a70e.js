"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8312],{2599:(e,n,t)=>{t.d(n,{Z:()=>a});t(7378);var r=t(7140);const s={tabItem:"tabItem_wHwb"};var o=t(4246);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(7378),s=t(7140),o=t(9169),a=t(3620),l=t(9749),i=t(8981),c=t(56),u=t(8796);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[a,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[c,d]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=t(362);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=t(4246);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==r&&(c(n),a(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,s.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,j.jsx)(v,{...e,...n}),(0,j.jsx)(x,{...e,...n})]})}function y(e){const n=(0,f.Z)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},6795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=t(4246),s=t(1670),o=t(8447),a=t(2599);const l={id:"mongodb",title:"Using with MongoDB"},i=void 0,c={unversionedId:"mongodb",id:"version-29.5/mongodb",title:"Using with MongoDB",description:"Com Global Setup/Teardown e Async Test Environment APIs, Jest pode funcionar bem com MongoDB.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.5/MongoDB.md",sourceDirName:".",slug:"/mongodb",permalink:"/pt-BR/docs/29.5/mongodb",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.5",frontMatter:{id:"mongodb",title:"Using with MongoDB"},sidebar:"docs",previous:{title:"Using with puppeteer",permalink:"/pt-BR/docs/29.5/puppeteer"},next:{title:"Using with DynamoDB",permalink:"/pt-BR/docs/29.5/dynamodb"}},u={},d=[{value:"Use jest-mongodb Preset",id:"use-jest-mongodb-preset",level:2}];function h(e){const n=Object.assign({p:"p",a:"a",h2:"h2",ol:"ol",li:"li",code:"code",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Com ",(0,r.jsx)(n.a,{href:"/pt-BR/docs/29.5/configuration#globalsetup-string",children:"Global Setup/Teardown"})," e ",(0,r.jsx)(n.a,{href:"/pt-BR/docs/29.5/configuration#testenvironment-string",children:"Async Test Environment"})," APIs, Jest pode funcionar bem com ",(0,r.jsx)(n.a,{href:"https://www.mongodb.com/",children:"MongoDB"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"use-jest-mongodb-preset",children:"Use jest-mongodb Preset"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/shelfio/jest-mongodb",children:"O Jest MongoDB"})," fornece todas as configura\xe7\xf5es necess\xe1rias para executar seus testes usando o MongoDB."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Primeiro instale ",(0,r.jsx)(n.code,{children:"@shelf/jest-mongodb"})]}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(a.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @shelf/jest-mongodb\n"})})}),(0,r.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @shelf/jest-mongodb\n"})})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @shelf/jest-mongodb\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsx)(n.li,{children:"Specify preset in your Jest configuration:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "@shelf/jest-mongodb"\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Write your test"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"const {MongoClient} = require('mongodb');\n\ndescribe('insert', () => {\n  let connection;\n  let db;\n\n  beforeAll(async () => {\n    connection = await MongoClient.connect(globalThis.__MONGO_URI__, {\n      useNewUrlParser: true,\n      useUnifiedTopology: true,\n    });\n    db = await connection.db(globalThis.__MONGO_DB_NAME__);\n  });\n\n  afterAll(async () => {\n    await connection.close();\n  });\n\n  it('should insert a doc into collection', async () => {\n    const users = db.collection('users');\n\n    const mockUser = {_id: 'some-user-id', name: 'John'};\n    await users.insertOne(mockUser);\n\n    const insertedUser = await users.findOne({_id: 'some-user-id'});\n    expect(insertedUser).toEqual(mockUser);\n  });\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:"There's no need to load any dependencies."}),"\n",(0,r.jsxs)(n.p,{children:["Veja a ",(0,r.jsx)(n.a,{href:"https://github.com/shelfio/jest-mongodb",children:"documenta\xe7\xe3o"})," para detalhes (configurando a vers\xe3o do MongoBD, etc)."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>o});var r=t(7378);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(s.Provider,{value:l},n)}}}]);
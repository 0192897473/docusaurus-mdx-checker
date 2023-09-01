"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7814],{2599:(e,n,t)=>{t.d(n,{Z:()=>c});t(7378);var r=t(7140);const s={tabItem:"tabItem_wHwb"};var a=t(4246);function c(e){let{children:n,hidden:t,className:c}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,c),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7378),s=t(7140),a=t(9169),c=t(3620),l=t(9749),o=t(8981),i=t(56),d=t(8796);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,c.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[c,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,u]=m({queryString:t,groupId:s}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=i??b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,a]),tabValues:a}}var j=t(362);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=t(4246);function f(e){let{className:n,block:t,selectedValue:r,selectValue:c,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),s=l[t].value;s!==r&&(i(n),c(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},4381:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(4246),s=t(1670),a=t(8447),c=t(2599);const l={id:"tutorial-react",title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"},o=void 0,i={unversionedId:"tutorial-react",id:"version-29.6/tutorial-react",title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",description:"\u0412 Facebook \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c Jest \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.6/TutorialReact.md",sourceDirName:".",slug:"/tutorial-react",permalink:"/ru/docs/tutorial-react",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.6",frontMatter:{id:"tutorial-react",title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"},sidebar:"docs",previous:{title:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430",permalink:"/ru/docs/architecture"},next:{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React Native \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",permalink:"/ru/docs/tutorial-react-native"}},d={},u=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441 Create React App",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441-create-react-app",level:3},{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0431\u0435\u0437 Create React App",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0431\u0435\u0437-create-react-app",level:3},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043d\u0438\u043c\u043a\u043e\u0432",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438-\u043f\u043e\u043c\u043e\u0449\u0438-\u0441\u043d\u0438\u043c\u043a\u043e\u0432",level:3},{value:"Snapshot Testing with Mocks, Enzyme and React 16+",id:"snapshot-testing-with-mocks-enzyme-and-react-16",level:4},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 DOM",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-dom",level:3},{value:"@testing-library/react",id:"testing-libraryreact",level:4},{value:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0440\u044b",id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435-\u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0440\u044b",level:3}];function h(e){const n=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre",strong:"strong",admonition:"admonition",h4:"h4",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u0412 Facebook \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c Jest \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f ",(0,r.jsx)(n.a,{href:"https://reactjs.org/",children:"React"})," \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439."]}),"\n",(0,r.jsx)(n.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,r.jsx)(n.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0441-create-react-app",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0441 Create React App"}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u043d\u0430\u043a\u043e\u043c\u0438\u0442\u0435\u0441\u044c \u0441 React, \u043c\u044b \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.jsx)(n.a,{href:"https://create-react-app.dev/",children:"Create React App"}),". \u041e\u043d \u0433\u043e\u0442\u043e\u0432 \u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044e \u0438 ",(0,r.jsx)(n.a,{href:"https://create-react-app.dev/docs/running-tests/#docsNav",children:" \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Jest"}),"! \u0412\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c ",(0,r.jsx)(n.code,{children:"react-test-renderer"})," \u0434\u043b\u044f \u0440\u0435\u043d\u0434\u0435\u0440\u0438\u043d\u0433\u0430 \u0441\u043d\u0438\u043c\u043a\u043e\u0432."]}),"\n",(0,r.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev react-test-renderer\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev react-test-renderer\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev react-test-renderer\n"})})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430-\u0431\u0435\u0437-create-react-app",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0431\u0435\u0437 Create React App"}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435, \u0442\u043e \u0432\u0430\u043c \u043f\u043e\u043d\u0430\u0434\u043e\u0431\u0438\u0442\u0441\u044f \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0435 \u0445\u043e\u0440\u043e\u0448\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u043b\u043e \u0432 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u043d\u043e\u0441\u0442\u0438. \u041c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u043f\u0430\u043a\u0435\u0442 ",(0,r.jsx)(n.code,{children:"babel-jest"})," \u0438 Babel \u043f\u0440\u0435\u0436\u0434\u0435 \u0434\u043b\u044f ",(0,r.jsx)(n.code,{children:"react"}),", \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u0434 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f. \u0422\u0430\u043a\u0436\u0435 \u0441\u043c. ",(0,r.jsx)(n.a,{href:"/ru/docs/getting-started#using-babel",children:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 Babel"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"\u0417\u0430\u043f\u0443\u0441\u043a"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["\u0412\u0430\u0448 ",(0,r.jsx)(n.code,{children:"package.json"})," \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a (\u0433\u0434\u0435 ",(0,r.jsx)(n.code,{children:"<current-version>"})," \u044d\u0442\u043e \u0444\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043d\u043e\u043c\u0435\u0440 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438). \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043a\u0440\u0438\u043f\u0442\u044b \u0438 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0434\u043b\u044f Jest:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "dependencies": {\n    "react": "<current-version>",\n    "react-dom": "<current-version>"\n  },\n  "devDependencies": {\n    "@babel/preset-env": "<current-version>",\n    "@babel/preset-react": "<current-version>",\n    "babel-jest": "<current-version>",\n    "jest": "<current-version>",\n    "react-test-renderer": "<current-version>"\n  },\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    '@babel/preset-env',\n    ['@babel/preset-react', {runtime: 'automatic'}],\n  ],\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u0418 \u0432\u0441\u0435 \u0433\u043e\u0442\u043e\u0432\u043e!"})}),"\n",(0,r.jsx)(n.h3,{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438-\u043f\u043e\u043c\u043e\u0449\u0438-\u0441\u043d\u0438\u043c\u043a\u043e\u0432",children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043d\u0438\u043c\u043a\u043e\u0432"}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0434\u0438\u043c ",(0,r.jsx)(n.a,{href:"/ru/docs/snapshot-testing",children:"\u0442\u0435\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u0441\u043d\u0438\u043c\u043e\u043a"})," \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 Link, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442 \u0433\u0438\u043f\u0435\u0440\u0441\u0441\u044b\u043b\u043a\u0438:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.js"',children:"import {useState} from 'react';\n\nconst STATUS = {\n  HOVERED: 'hovered',\n  NORMAL: 'normal',\n};\n\nexport default function Link({page, children}) {\n  const [status, setStatus] = useState(STATUS.NORMAL);\n\n  const onMouseEnter = () => {\n    setStatus(STATUS.HOVERED);\n  };\n\n  const onMouseLeave = () => {\n    setStatus(STATUS.NORMAL);\n  };\n\n  return (\n    <a\n      className={status}\n      href={page || '#'}\n      onMouseEnter={onMouseEnter}\n      onMouseLeave={onMouseLeave}\n    >\n      {children}\n    </a>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Examples are using Function components, but Class components can be tested in the same way. ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components",children:"React: Function and Class Components"}),". ",(0,r.jsx)(n.strong,{children:"Reminders"})," that with Class components, we expect Jest to be used to test props and not methods directly."]})}),"\n",(0,r.jsx)(n.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435\u0440 \u0442\u0435\u0441\u0442\u043e\u0432 React \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043d\u0438\u043c\u043a\u043e\u0432 Jest \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c \u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0435\u0433\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u0441\u043d\u0438\u043c\u043a\u0430:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.test.js"',children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('changes the class when hovered', () => {\n  const component = renderer.create(\n    <Link page=\"http://www.facebook.com\">Facebook</Link>,\n  );\n  let tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseEnter();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseLeave();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you run ",(0,r.jsx)(n.code,{children:"yarn test"})," or ",(0,r.jsx)(n.code,{children:"jest"}),", this will produce an output file like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Link.test.js.snap"',children:'exports[`changes the class when hovered 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 2`] = `\n<a\n  className="hovered"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 3`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0442\u0435\u0441\u0442\u043e\u0432, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0432\u043d\u0435\u043d \u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u043c \u0441\u043d\u0438\u043c\u043a\u043e\u043c. \u042d\u0442\u043e\u0442 \u0441\u043d\u0438\u043c\u043e\u043a \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u043d\u0435\u0441\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0432\u0435\u0440\u0441\u0438\u0439 \u043d\u0430\u0440\u044f\u0434\u0443 \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u0434\u0435. \u041a\u043e\u0433\u0434\u0430 \u0442\u0435\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u0441\u043d\u0438\u043c\u043a\u0438 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0432\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435 \u044d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043d\u0435\u0442. \u0415\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Jest \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,r.jsx)(n.code,{children:"jest -u"})," \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043d\u0438\u043c\u043a\u043e\u0432."]}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"examples/snapshot"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"snapshot-testing-with-mocks-enzyme-and-react-16",children:"Snapshot Testing with Mocks, Enzyme and React 16+"}),"\n",(0,r.jsx)(n.p,{children:"There's a caveat around snapshot testing when using Enzyme and React 16+. If you mock out a module using the following style:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');\n"})}),"\n",(0,r.jsx)(n.p,{children:"Then you will see warnings in the console:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"Warning: <SomeComponent /> is using uppercase HTML. Always use lowercase HTML tags in React.\n\n# Or:\nWarning: The tag <SomeComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.\n"})}),"\n",(0,r.jsx)(n.p,{children:"React 16 triggers these warnings due to how it checks element types, and the mocked module fails these checks. Your options are:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Render as text. This way you won't see the props passed to the mock component in the snapshot, but it's straightforward: js jest.mock('./SomeComponent', () => () => 'SomeComponent');","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('./SomeComponent', () => () => 'SomeComponent');\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Render as a custom element. DOM \"custom elements\" aren't checked for anything and shouldn't fire warnings. They are lowercase and have a dash in the name.","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"tsx\n jest.mock('./Widget', () =&#062; () =&#062; <mock-widget />);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Use ",(0,r.jsx)(n.code,{children:"react-test-renderer"}),". The test renderer doesn't care about element types and will happily accept e.g. ",(0,r.jsx)(n.code,{children:"SomeComponent"}),". You could check snapshots using the test renderer, and check component behavior separately using Enzyme."]}),"\n",(0,r.jsxs)(n.li,{children:["Disable warnings all together (should be done in your jest setup file):","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction'));\n"})}),"\n","Disable warnings all together (should be done in your jest setup file): js jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction')); This shouldn't normally be your option of choice as useful warnings could be lost. However, in some cases, for example when testing react-native's components we are rendering react-native tags into the DOM and many warnings are irrelevant. Another option is to swizzle the console.warn and suppress specific warnings."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-dom",children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 DOM"}),"\n",(0,r.jsxs)(n.p,{children:["If you'd like to assert, and manipulate your rendered components you can use ",(0,r.jsx)(n.a,{href:"https://github.com/testing-library/react-testing-library",children:"@testing-library/react"}),", ",(0,r.jsx)(n.a,{href:"https://enzymejs.github.io/enzyme/",children:"Enzyme"}),", or React's ",(0,r.jsx)(n.a,{href:"https://reactjs.org/docs/test-utils.html",children:"TestUtils"}),". The following example use ",(0,r.jsx)(n.code,{children:"@testing-library/react"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"testing-libraryreact",children:"@testing-library/react"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(c.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @testing-library/react\n"})})}),(0,r.jsx)(c.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @testing-library/react\n"})})}),(0,r.jsx)(c.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @testing-library/react\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u0443\u0435\u043c \u0447\u0435\u043a\u0431\u043e\u043a\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u0434\u0432\u0443\u043c\u044f \u043b\u0435\u0439\u0431\u043b\u0430\u043c\u0438:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="CheckboxWithLabel.js"',children:"import {useState} from 'react';\n\nexport default function CheckboxWithLabel({labelOn, labelOff}) {\n  const [isChecked, setIsChecked] = useState(false);\n\n  const onChange = () => {\n    setIsChecked(!isChecked);\n  };\n\n  return (\n    <label>\n      <input type=\"checkbox\" checked={isChecked} onChange={onChange} />\n      {isChecked ? labelOn : labelOff}\n    </label>\n  );\n}\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',children:"import {cleanup, fireEvent, render} from '@testing-library/react';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\n// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher\n// unmount and cleanup DOM after the test is finished.\nafterEach(cleanup);\n\nit('CheckboxWithLabel changes the text after click', () => {\n  const {queryByLabelText, getByLabelText} = render(\n    <CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />,\n  );\n\n  expect(queryByLabelText(/off/i)).toBeTruthy();\n\n  fireEvent.click(getByLabelText(/off/i));\n\n  expect(queryByLabelText(/on/i)).toBeTruthy();\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-testing-library",children:"examples/react-testing-library"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435-\u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0440\u044b",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0440\u044b"}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u0435\u043d \u0431\u043e\u043b\u0435\u0435 \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b, \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0441\u0432\u043e\u0439 \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0440. \u0412\u043c\u0435\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f ",(0,r.jsx)(n.code,{children:"babel-jest"}),"\u0437\u0434\u0435\u0441\u044c \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d \u043f\u0440\u0438\u043c\u0435\u0440 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f ",(0,r.jsx)(n.code,{children:"@babel/core"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="custom-transformer.js"',children:"'use strict';\n\nconst {transform} = require('@babel/core');\nconst jestPreset = require('babel-preset-jest');\n\nmodule.exports = {\n  process(src, filename) {\n    const result = transform(src, {\n      filename,\n      presets: [jestPreset],\n    });\n\n    return result || src;\n  },\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u0430\u043a\u0435\u0442\u044b ",(0,r.jsx)(n.code,{children:"babel-core"})," \u0438 ",(0,r.jsx)(n.code,{children:"babel-preset-jest"}),", \u0447\u0442\u043e\u0431\u044b \u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u043b."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 Jest, \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043a\u043e\u0434 \u0432 \u0432\u0430\u0448\u0443 Jest \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e: ",(0,r.jsx)(n.code,{children:'"transform": {"\\\\.js$": "path/to/custom-transformer.js"}'}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0442\u043e\u0440 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 Babel \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,r.jsx)(n.code,{children:"babel-jest"})," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0445 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: ['my-custom-preset'],\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,r.jsx)(n.a,{href:"/ru/docs/code-transformation#writing-custom-transformers",children:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"})," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0439 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var r=t(7378);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||c:a(e),r.createElement(s.Provider,{value:l},n)}}}]);
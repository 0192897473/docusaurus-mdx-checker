"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8338],{2599:(e,s,n)=>{n.d(s,{Z:()=>l});n(7378);var t=n(7140);const r={tabItem:"tabItem_wHwb"};var a=n(4246);function l(e){let{children:s,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,l),hidden:n,children:s})}},8447:(e,s,n)=>{n.d(s,{Z:()=>w});var t=n(7378),r=n(7140),a=n(9169),l=n(3620),i=n(9749),c=n(8981),d=n(56),o=n(8796);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,d.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function p(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const r=(0,l.k6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(a),(0,t.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function x(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,a=u(e),[l,c]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!p({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:a}))),[d,h]=j({queryString:n,groupId:r}),[x,b]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,o.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),m=(()=>{const e=d??x;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{m&&c(m)}),[m]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=n(362);const m={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=n(4246);function v(e){let{className:s,block:n,selectedValue:t,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),o=e=>{const s=e.currentTarget,n=c.indexOf(s),r=i[n].value;r!==t&&(d(s),l(r))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>c.push(e),onKeyDown:h,onClick:o,...a,className:(0,r.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(v,{...e,...s}),(0,g.jsx)(f,{...e,...s})]})}function w(e){const s=(0,b.Z)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(s))}},3978:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var t=n(4246),r=n(1670),a=n(8447),l=n(2599);const i={id:"getting-started",title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"},c=void 0,d={unversionedId:"getting-started",id:"version-29.5/getting-started",title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b",description:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Jest \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u043e\u0432:",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.5/GettingStarted.md",sourceDirName:".",slug:"/getting-started",permalink:"/ru/docs/29.5/getting-started",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.5",frontMatter:{id:"getting-started",title:"\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b"},sidebar:"docs",next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439",permalink:"/ru/docs/29.5/using-matchers"}},o={},h=[{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0438\u0437-\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439-\u0441\u0442\u0440\u043e\u043a\u0438",level:2},{value:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e-\u0444\u0430\u0439\u043b\u0430-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",level:3},{value:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Babel",id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-babel",level:3},{value:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Webpack",id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-webpack",level:3},{value:"Using Vite",id:"using-vite",level:3},{value:"Using Parcel",id:"using-parcel",level:3},{value:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c TypeScript",id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-typescript",level:3},{value:"\u0427\u0435\u0440\u0435\u0437 <code>babel</code>",id:"\u0447\u0435\u0440\u0435\u0437-babel",level:4},{value:"\u0427\u0435\u0440\u0435\u0437 <code>ts-jest</code>",id:"\u0447\u0435\u0440\u0435\u0437-ts-jest",level:4},{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432",id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0442\u0438\u043f\u043e\u0432",level:4}];function u(e){const s=Object.assign({p:"p",pre:"pre",code:"code",strong:"strong",a:"a",h2:"h2",h3:"h3",admonition:"admonition",h4:"h4"},(0,r.ah)(),e.components),{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 Jest \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0432\u0430\u0448 \u043b\u044e\u0431\u0438\u043c\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u043f\u0430\u043a\u0435\u0442\u043e\u0432:"}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev jest\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev jest\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev jest\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u0430\u043f\u0438\u0448\u0435\u043c \u0442\u0435\u0441\u0442 \u0434\u043b\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0441\u043a\u043b\u0430\u0434\u044b\u0432\u0430\u0435\u0442 \u0434\u0432\u0430 \u0447\u0438\u0441\u043b\u0430. \u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b ",(0,t.jsx)(s.code,{children:"sum.js"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0417\u0430\u0442\u0435\u043c \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0444\u0430\u0439\u043b \u0441 \u0438\u043c\u0435\u043d\u0435\u043c ",(0,t.jsx)(s.code,{children:"sum.test.js"}),". \u041e\u043d \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0441\u0430\u043c \u0442\u0435\u0441\u0442:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437\u0434\u0435\u043b \u0432 ",(0,t.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["\u041d\u0430\u043a\u043e\u043d\u0435\u0446, \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"yarn test"})," \u0438\u043b\u0438 ",(0,t.jsx)(s.code,{children:"npm run test"})," \u0438 Jest \u0432\u044b\u0432\u0435\u0434\u0435\u0442 \u044d\u0442\u043e \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u0412\u044b \u0442\u043e\u043b\u044c\u043a\u043e \u0447\u0442\u043e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043b\u0438 \u043f\u0435\u0440\u0432\u044b\u0439 \u0442\u0435\u0441\u0442 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Jest!"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,t.jsx)(s.code,{children:"expect"})," \u0438 ",(0,t.jsx)(s.code,{children:"toBe"})," \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0438\u0434\u0435\u043d\u0442\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0434\u0432\u0443\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439. \u0427\u0442\u043e\u0431\u044b \u0443\u0437\u043d\u0430\u0442\u044c \u043e\u0431 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0445 \u0432\u0435\u0449\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Jest, \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,t.jsx)(s.a,{href:"/ru/docs/29.5/using-matchers",children:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0438\u0437-\u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439-\u0441\u0442\u0440\u043e\u043a\u0438",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438"}),"\n",(0,t.jsxs)(s.p,{children:["\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Jest \u043f\u0440\u044f\u043c\u043e \u0438\u0437 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 (\u0435\u0441\u043b\u0438 \u043e\u043d \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0432 ",(0,t.jsx)(s.code,{children:"PATH"}),", \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 ",(0,t.jsx)(s.code,{children:"yarn global add jest"})," \u0438\u043b\u0438 ",(0,t.jsx)(s.code,{children:"npm install jest --global"}),") \u0441 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e\u043c \u043f\u043e\u043b\u0435\u0437\u043d\u044b\u0445 \u043e\u043f\u0446\u0438\u0439."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0412\u043e\u0442 \u0442\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Jest \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0445 \u0441 ",(0,t.jsx)(s.code,{children:"my-test"}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,t.jsx)(s.code,{children:"config.json"})," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0438 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0443\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f \u041e\u0421 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jest my-test --notify --config=config.json\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 ",(0,t.jsx)(s.code,{children:"jest"})," \u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435, \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 ",(0,t.jsx)(s.a,{href:"/ru/docs/29.5/cli",children:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 Jest"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"\u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f",children:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f"}),"\n",(0,t.jsx)(s.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e-\u0444\u0430\u0439\u043b\u0430-\u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u043e\u0432\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438"}),"\n",(0,t.jsx)(s.p,{children:"\u0418\u0441\u0445\u043e\u0434\u044f \u0438\u0437 \u0432\u0430\u0448\u0438\u0445 \u043d\u0443\u0436\u0434, Jest \u0437\u0430\u0434\u0430\u0441\u0442 \u0432\u0430\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u0441\u043e\u0437\u0434\u0430\u0441\u0442 \u0431\u0430\u0437\u043e\u0432\u044b\u0439 \u0444\u0430\u0439\u043b \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0441 \u043a\u0440\u0430\u0442\u043a\u0438\u043c \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\u043c \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0439 \u043e\u043f\u0446\u0438\u0438:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jest --init\n"})}),"\n",(0,t.jsx)(s.h3,{id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-babel",children:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Babel"}),"\n",(0,t.jsxs)(s.p,{children:["\u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0441 ",(0,t.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),", \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 yarn:"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev babel-jest @babel/core @babel/preset-env\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 Babel \u043d\u0430 \u0432\u0430\u0448\u0443 \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e Node Js, \u0441\u043e\u0437\u0434\u0430\u0432 \u0444\u0430\u0439\u043b ",(0,t.jsx)(s.code,{children:"babel.config.js"})," \u0432 \u043a\u043e\u0440\u043d\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ideal configuration for Babel will depend on your project. See ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/",children:"Babel's docs"})," for more details."]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{markdown:"span",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.strong,{children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438 \u0434\u043b\u044f Babel \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Jest"})})}),(0,t.jsxs)(s.p,{children:["Jest \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442 \u0434\u043b\u044f ",(0,t.jsx)(s.code,{children:"process.env.NODE_ENV"})," \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 ",(0,t.jsx)(s.code,{children:"'test'"})," \u0435\u0441\u043b\u0438 \u043d\u0435 \u0443\u043a\u0430\u0437\u0430\u043d\u043e \u0434\u0440\u0443\u0433\u043e\u0435. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0446\u0438\u044e, \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430 Jest, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = api => {\n  const isTest = api.env('test');\n  // You can use isTest to determine what presets and plugins to use.\n\n  return {\n    // ...\n  };\n};\n"})}),(0,t.jsxs)(s.admonition,{type:"note",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"babel-jest"})," is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. \u0414\u043b\u044f \u043e\u0431\u0445\u043e\u0434\u0430 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u044f\u0432\u043d\u043e \u0441\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u043f\u0446\u0438\u044e ",(0,t.jsx)(s.code,{children:"transform"})," \u0432 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {},\n};\n"})})]})]}),"\n",(0,t.jsx)(s.h3,{id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-webpack",children:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c Webpack"}),"\n",(0,t.jsxs)(s.p,{children:["Jest \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u0441\u0443\u0440\u0441\u0430\u043c\u0438, \u0441\u0442\u0438\u043b\u044f\u043c\u0438 \u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0435\u0439. Webpack \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0438\u0432\u043d\u043e\u0441\u0438\u0442 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u0441\u043f\u043e\u0441\u043e\u0431\u043d\u044b\u0435 \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430\u043c, \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \u0441 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438. \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u0440\u0430\u0437\u0434\u0435\u043b\u0443 ",(0,t.jsx)(s.a,{href:"/ru/docs/29.5/webpack",children:"\u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u043e \u043f\u043e \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 Webpack"})," \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043d\u0438\u043c."]}),"\n",(0,t.jsx)(s.h3,{id:"using-vite",children:"Using Vite"}),"\n",(0,t.jsxs)(s.p,{children:["Jest can be used in projects that use ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/",children:"vite"})," to serve source code over native ESM to provide some frontend tooling, vite is an opinionated tool and does offer some out-of-the box workflows. Jest is not fully supported by vite due to how the ",(0,t.jsx)(s.a,{href:"https://github.com/vitejs/vite/issues/1955#issuecomment-776009094",children:"plugin system"})," from vite works, but there are some working examples for first-class jest integration using ",(0,t.jsx)(s.code,{children:"vite-jest"}),", since this is not fully supported, you might as well read the ",(0,t.jsxs)(s.a,{href:"https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests",children:["limitation of the ",(0,t.jsx)(s.code,{children:"vite-jest"})]}),". Refer to the ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/guide/",children:"vite guide"})," to get started."]}),"\n",(0,t.jsx)(s.h3,{id:"using-parcel",children:"Using Parcel"}),"\n",(0,t.jsxs)(s.p,{children:["Jest \u043c\u043e\u0436\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0432 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 ",(0,t.jsx)(s.a,{href:"https://parceljs.org/",children:"parcel-bundler"})," \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438, \u0441\u0442\u0438\u043b\u044f\u043c\u0438 \u0438 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0435\u0439 \u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e webpack Parcel \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435\u0441\u044c \u043a \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 ",(0,t.jsx)(s.a,{href:"https://parceljs.org/docs/",children:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438"})," \u0434\u043b\u044f \u043d\u0430\u0447\u0430\u043b\u0430 \u0440\u0430\u0431\u043e\u0442\u044b."]}),"\n",(0,t.jsx)(s.h3,{id:"\u0441-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c-typescript",children:"\u0421 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c TypeScript"}),"\n",(0,t.jsxs)(s.h4,{id:"\u0447\u0435\u0440\u0435\u0437-babel",children:["\u0427\u0435\u0440\u0435\u0437 ",(0,t.jsx)(s.code,{children:"babel"})]}),"\n",(0,t.jsxs)(s.p,{children:["Jest \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 TypeScript, \u0447\u0435\u0440\u0435\u0437 Babel. \u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0443\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0432\u044b \u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0438\u044f\u043c \u043f\u043e ",(0,t.jsx)(s.a,{href:"#using-babel",children:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 Babel"})," \u0432\u044b\u0448\u0435. \u0414\u0430\u043b\u0435\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,t.jsx)(s.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-typescript\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-typescript\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-typescript\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["\u0417\u0430\u0442\u0435\u043c \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 ",(0,t.jsx)(s.code,{children:"@babel/preset-typescript"})," \u0432 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0435\u0441\u0435\u0442\u043e\u0432 \u0432 \u0432\u0430\u0448 ",(0,t.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u041e\u0434\u043d\u0430\u043a\u043e, \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"\u043f\u043e\u0434\u0432\u043e\u0434\u043d\u044b\u0445 \u043a\u0430\u043c\u043d\u0435\u0439"})," \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 TypeScript \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 Babel. \u041f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 TypeScript \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432 Babel \u0447\u0435\u0440\u0435\u0437 \u0442\u0440\u0430\u043d\u0441\u043f\u0438\u043b\u044f\u0446\u0438\u044e, Jest \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u044f\u0442\u044c \u0442\u0438\u043f\u044b \u0432\u0430\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u0430\u0445 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u044b. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," \u0432\u0437\u0430\u043c\u0435\u043d, \u0438\u043b\u0438 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0442\u043e\u0440 TypeScript ",(0,t.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"tsc"})," \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e (\u0438\u043b\u0438 \u043a\u0430\u043a \u0447\u0430\u0441\u0442\u044c \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430 \u0441\u0431\u043e\u0440\u043a\u0438)."]}),"\n",(0,t.jsxs)(s.h4,{id:"\u0447\u0435\u0440\u0435\u0437-ts-jest",children:["\u0427\u0435\u0440\u0435\u0437 ",(0,t.jsx)(s.code,{children:"ts-jest"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," \u044d\u0442\u043e \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0440 TypeScript \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0438\u0441\u0445\u043e\u0434\u043d\u044b\u0445 \u043a\u0430\u0440\u0442 Jest, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c Jest \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432, \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 TypeScript."]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev ts-jest\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev ts-jest\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev ts-jest\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["In order for Jest to transpile TypeScript with ",(0,t.jsx)(s.code,{children:"ts-jest"}),", you may also need to create a ",(0,t.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file",children:"configuration"})," file."]}),"\n",(0,t.jsx)(s.h4,{id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f-\u0442\u0438\u043f\u043e\u0432",children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0442\u0438\u043f\u043e\u0432"}),"\n",(0,t.jsxs)(s.p,{children:["There are two ways to have ",(0,t.jsx)(s.a,{href:"/ru/docs/29.5/api",children:"Jest global APIs"})," typed for test files written in TypeScript."]}),"\n",(0,t.jsxs)(s.p,{children:["You can use type definitions which ships with Jest and will update each time you update Jest. Install the ",(0,t.jsx)(s.code,{children:"@jest/globals"})," package:"]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @jest/globals\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @jest/globals\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @jest/globals\n"})})})]}),"\n",(0,t.jsx)(s.p,{children:"And import the APIs from it:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="sum.test.ts"',children:"import {describe, expect, test} from '@jest/globals';\nimport {sum} from './sum';\n\ndescribe('sum module', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});\n"})}),"\n",(0,t.jsx)(s.admonition,{type:"tip",children:(0,t.jsxs)(s.p,{children:["See the additional usage documentation of ",(0,t.jsxs)(s.a,{href:"/ru/docs/29.5/api#typescript-usage",children:[(0,t.jsx)(s.code,{children:"describe.each"}),"/",(0,t.jsx)(s.code,{children:"test.each"})]})," and ",(0,t.jsx)(s.a,{href:"/ru/docs/29.5/mock-function-api#typescript-usage",children:(0,t.jsx)(s.code,{children:"mock functions"})}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["Or you may choose to install the ",(0,t.jsx)(s.a,{href:"https://npmjs.com/package/@types/jest",children:(0,t.jsx)(s.code,{children:"@types/jest"})})," package. It provides types for Jest globals without a need to import them."]}),"\n",(0,t.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @types/jest\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @types/jest\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @types/jest\n"})})})]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"@types/jest"})," is a third party library maintained at ",(0,t.jsx)(s.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest",children:"DefinitelyTyped"}),", hence the latest Jest features or versions may not be covered yet. Try to match versions of Jest and ",(0,t.jsx)(s.code,{children:"@types/jest"})," as closely as possible. For example, if you are using Jest ",(0,t.jsx)(s.code,{children:"27.4.0"})," then installing ",(0,t.jsx)(s.code,{children:"27.4.x"})," of ",(0,t.jsx)(s.code,{children:"@types/jest"})," is ideal."]})})]})}const p=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>a});var t=n(7378);const r=t.createContext({});function a(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||l:a(e),t.createElement(r.Provider,{value:i},s)}}}]);
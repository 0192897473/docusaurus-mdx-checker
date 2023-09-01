"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7871],{2599:(e,n,t)=>{t.d(n,{Z:()=>o});t(7378);var r=t(7140);const s={tabItem:"tabItem_wHwb"};var a=t(4246);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(7378),s=t(7140),a=t(9169),o=t(3620),l=t(9749),i=t(8981),u=t(56),p=t(8796);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[u,c]=m({queryString:t,groupId:s}),[j,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,p.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=u??j;return h({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,a]),tabValues:a}}var g=t(362);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var f=t(4246);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),p=e=>{const n=e.currentTarget,t=i.indexOf(n),s=l[t].value;s!==r&&(u(n),o(s))},c=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:c,onClick:p,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=j(e);return(0,f.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function _(e){const n=(0,g.Z)();return(0,f.jsx)(w,{...e,children:c(e.children)},String(n))}},9565:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var r=t(4246),s=t(1670),a=t(8447),o=t(2599);const l={id:"puppeteer",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 puppeteer"},i=void 0,u={unversionedId:"puppeteer",id:"version-29.6/puppeteer",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 puppeteer",description:"\u0417\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Global Setup/Teardown \u0442\u0430 Async Test Environment APIs, Jest \u043c\u043e\u0436\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0437 puppeteer.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.6/Puppeteer.md",sourceDirName:".",slug:"/puppeteer",permalink:"/uk/docs/puppeteer",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.6",frontMatter:{id:"puppeteer",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 puppeteer"},sidebar:"docs",previous:{title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 webpack",permalink:"/uk/docs/webpack"},next:{title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 MongoDB",permalink:"/uk/docs/mongodb"}},p={},c=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f jest-puppeteer",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e-\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f-jest-puppeteer",level:2},{value:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0431\u0435\u0437 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 jest-puppeteer",id:"\u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439-\u043f\u0440\u0438\u043a\u043b\u0430\u0434-\u0431\u0435\u0437-\u0448\u0430\u0431\u043b\u043e\u043d\u0443-jest-puppeteer",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",admonition:"admonition",code:"code",h2:"h2",ol:"ol",li:"li",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u0417\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,r.jsx)(n.a,{href:"/uk/docs/configuration#globalsetup-string",children:"Global Setup/Teardown"})," \u0442\u0430 ",(0,r.jsx)(n.a,{href:"/uk/docs/configuration#testenvironment-string",children:"Async Test Environment"})," APIs, Jest \u043c\u043e\u0436\u0435 \u043a\u043e\u0440\u0435\u043a\u0442\u043d\u043e \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0437 ",(0,r.jsx)(n.a,{href:"https://github.com/GoogleChrome/puppeteer",children:"puppeteer"}),"."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u043e\u043a\u0440\u0438\u0442\u0442\u044f \u043a\u043e\u0434\u0443 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Puppeteer \u043d\u0430 \u0434\u0430\u043d\u0438\u0439 \u0447\u0430\u0441 \u043d\u0435\u043c\u043e\u0436\u043b\u0438\u0432\u0435, \u044f\u043a\u0449\u043e \u0432\u0430\u0448 \u0442\u0435\u0441\u0442 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 ",(0,r.jsx)(n.code,{children:"page.$eval"}),", ",(0,r.jsx)(n.code,{children:"page.$$eval"})," \u0430\u0431\u043e ",(0,r.jsx)(n.code,{children:"page.evaluate"})," \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u043f\u0435\u0440\u0435\u0445\u0456\u0434\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0437\u0430 \u043c\u0435\u0436\u0430\u043c\u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u0456 Jest. Check out ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/7962#issuecomment-495272339",children:"issue #7962"})," on GitHub for a workaround."]})}),"\n",(0,r.jsx)(n.h2,{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e-\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f-jest-puppeteer",children:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f jest-puppeteer"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"Jest Puppeteer"})," \u043d\u0430\u0434\u0430\u0454 \u0432\u0441\u044e \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0443 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e, \u0449\u043e\u0431 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0432\u0430\u0448\u0456 \u0442\u0435\u0441\u0442\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Puppeteer."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0421\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u0456\u0442\u044c ",(0,r.jsx)(n.code,{children:"jest-puppeteer"})]}),"\n"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest-puppeteer\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest-puppeteer\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest-puppeteer\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["\u0414\u043e\u0434\u0430\u0439\u0442\u0435 preset \u0443 \u0432\u0430\u0448\u0456\u0439 ",(0,r.jsx)(n.a,{href:"/uk/docs/configuration",children:"Jest \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457"}),":"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "jest-puppeteer"\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\u0421\u0442\u0432\u043e\u0440\u0456\u0442\u044c \u0442\u0435\u0441\u0442"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"describe('Google', () => {\n  beforeAll(async () => {\n    await page.goto('https://google.com');\n});\n\n  it('should be titled \"Google\"', async () => {\n    await expect(page.title()).resolves.toMatch('Google');\n});\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041d\u0435\u043c\u0430\u0454 \u043f\u043e\u0442\u0440\u0435\u0431\u0438 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u0437\u0430\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u0456. Puppeteer's ",(0,r.jsx)(n.code,{children:"page"})," and ",(0,r.jsx)(n.code,{children:"browser"})," \u043a\u043b\u0430\u0441\u0438 \u0431\u0443\u0434\u0443\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u0456"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0414\u0438\u0432\u0456\u0442\u044c\u0441\u044f ",(0,r.jsx)(n.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044e"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439-\u043f\u0440\u0438\u043a\u043b\u0430\u0434-\u0431\u0435\u0437-\u0448\u0430\u0431\u043b\u043e\u043d\u0443-jest-puppeteer",children:"\u0421\u043f\u0435\u0446\u0456\u0430\u043b\u044c\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0431\u0435\u0437 \u0448\u0430\u0431\u043b\u043e\u043d\u0443 jest-puppeteer"}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u0438 \u0442\u0430\u043a\u043e \u0436 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 puppeteer \u0437 \u043d\u0443\u043b\u044f. \u041e\u0441\u043d\u043e\u0432\u043d\u0430 \u0456\u0434\u0435\u044f:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0442\u0430 \u0441\u043a\u043e\u0440\u0438\u0433\u0443\u0432\u0430\u0442\u0438 \u043a\u0456\u043d\u0446\u0435\u0432\u0443 \u0442\u043e\u0447\u043a\u0443 \u0432\u0435\u0431\u0441\u043e\u043a\u0435\u0442\u0443 puppeteer \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Global Setup"}),"\n",(0,r.jsx)(n.li,{children:"\u043f\u0456\u0434'\u0454\u0434\u043d\u0430\u0442\u0438\u0441\u044f \u0434\u043e puppeteer \u0437 \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430"}),"\n",(0,r.jsx)(n.li,{children:"\u0437\u0430\u043a\u0440\u0438\u0442\u0438 puppeteer \u0437 Global Teardown"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u041e\u0441\u044c \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u0441\u043a\u0440\u0438\u043f\u0442\u0443 \u0434\u043b\u044f GlobalSetup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="setup.js"',children:"const {mkdir, writeFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nmodule.exports = async function () {\n  const browser = await puppeteer.launch();\n  // \u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443, \u0430\u0431\u0438 \u043f\u043e\u0442\u0456\u043c \u0437\u043d\u0435\u0441\u0442\u0438 \u0439\u043e\u0433\u043e\n  // \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0438\u0439 this \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u043b\u0438\u0448\u0435 \u043f\u0456\u0434 \u0447\u0430\u0441 \u0437\u043d\u0435\u0441\u0435\u043d\u043d\u044f, \u043d\u0435 \u0432 TestEnvironments\n  globalThis.__BROWSER_GLOBAL__ = browser;\n\n  // \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u043e\u0432\u043e\u0457 \u0441\u0438\u0441\u0442\u0435\u043c\u0438 \u0434\u043b\u044f \u043d\u0430\u0434\u0430\u043d\u043d\u044f wsEndpoint \u0434\u043b\u044f TestEnvironments\n  await mkdir(DIR, {recursive: true});\n  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u0414\u0430\u043b\u0456 \u043d\u0430\u043c \u0442\u0440\u0435\u0431\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044c\u043a\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u0435 \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435 \u0434\u043b\u044f puppeteer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="puppeteer_environment.js"',children:"const {readFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\nconst NodeEnvironment = require('jest-environment-node').TestEnvironment;\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nclass PuppeteerEnvironment extends NodeEnvironment {\n  constructor(config) {\n    super(config);\n  }\n\n  async setup() {\n    await super.setup();\n    // \u043e\u0442\u0440\u0438\u043c\u0443\u0454\u043c\u043e wsEndpoint\n    const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8');\n    if (!wsEndpoint) {\n      throw new Error('wsEndpoint not found');\n    }\n\n    // \u043f\u0456\u0434'\u0454\u0434\u043d\u0443\u0454\u043c\u043e\u0441\u044c \u0434\u043e puppeteer\n    this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({\n      browserWSEndpoint: wsEndpoint,\n    });\n  }\n\n  async teardown() {\n    if (this.global.__BROWSER_GLOBAL__) {\n      this.global.__BROWSER_GLOBAL__.disconnect();\n    }\n    await super.teardown();\n  }\n\n  getVmContext() {\n    return super.getVmContext();\n  }\n}\n\nmodule.exports = PuppeteerEnvironment;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0430\u0440\u0435\u0448\u0442\u0456 \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u0437\u0430\u043a\u0440\u0438\u0442\u0438 \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 puppeteer \u0442\u0430 \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0444\u0430\u0439\u043b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="teardown.js"',children:"const fs = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\nmodule.exports = async function () {\n  // \u0437\u0430\u043a\u0440\u0438\u0432\u0430\u0454\u043c\u043e \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0443\n  await globalThis.__BROWSER_GLOBAL__.close();\n\n  // \u0432\u0438\u0447\u0438\u0449\u0430\u0454\u043c\u043e \u0444\u0430\u0439\u043b wsEndpoint\n  await fs.rm(DIR, {recursive: true, force: true});\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u041f\u0456\u0441\u043b\u044f \u0432\u0441\u0456\u0445 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c, \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u043f\u0438\u0441\u0430\u0442\u0438 \u0442\u0435\u0441\u0442\u0438 \u044f\u043a:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="test.js"',children:"const timeout = 5000;\n\ndescribe(\n  '/ (Home Page)',\n  () => {\n    let page;\n    beforeAll(async () => {\n      page = await globalThis.__BROWSER_GLOBAL__.newPage();\n      await page.goto('https://google.com');\n    }, timeout);\n\n    it('should load without error', async () => {\n      const text = await page.evaluate(() => document.body.textContent);\n      expect(text).toContain('google');\n    });\n  },\n  timeout,\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, set ",(0,r.jsx)(n.code,{children:"jest.config.js"})," to read from these files. (",(0,r.jsx)(n.code,{children:"jest-puppeteer"})," preset \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u0449\u043e\u0441\u044c \u043d\u0430 \u0437\u0440\u0430\u0437\u043e\u043a \u0446\u044c\u043e\u0433\u043e \u043f\u0456\u0434 \u043a\u0430\u043f\u043e\u0442\u043e\u043c.)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  globalSetup: './setup.js',\n  globalTeardown: './teardown.js',\n  testEnvironment: './puppeteer_environment.js',\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041e\u0441\u044c \u043a\u043e\u0434 ",(0,r.jsx)(n.a,{href:"https://github.com/xfumihiro/jest-puppeteer-example",children:"\u043f\u043e\u0432\u043d\u0438\u0439 \u0440\u043e\u0431\u043e\u0447\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>a});var r=t(7378);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||o:a(e),r.createElement(s.Provider,{value:l},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2797],{2599:(e,n,t)=>{t.d(n,{Z:()=>l});t(7378);var r=t(7140);const s={tabItem:"tabItem_wHwb"};var a=t(4246);function l(e){let{children:n,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,l),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7378),s=t(7140),a=t(9169),l=t(3620),u=t(9749),o=t(8981),i=t(56),c=t(8796);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,l.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,d]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),j=(()=>{const e=i??b;return p({value:e,tabValues:a})?e:null})();(0,u.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=t(4246);function g(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:u}=e;const o=[],{blockElementScrollPositionUntilNextRender:i}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),s=u[t].value;s!==r&&(i(n),l(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",j.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(g,{...e,...n}),(0,v.jsx)(x,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(n))}},7408:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var r=t(4246),s=t(1670),a=t(8447),l=t(2599);const u={id:"tutorial-jquery",title:"\u041c\u0430\u043d\u0456\u043f\u0443\u043b\u044f\u0446\u0456\u044f DOM"},o=void 0,i={unversionedId:"tutorial-jquery",id:"version-29.5/tutorial-jquery",title:"\u041c\u0430\u043d\u0456\u043f\u0443\u043b\u044f\u0446\u0456\u044f DOM",description:"\u0406\u043d\u0448\u0438\u0439 \u043a\u043b\u0430\u0441 \u0444\u0443\u043d\u043a\u0446\u0456\u0439, \u044f\u043a\u0438\u0439 \u0447\u0430\u0441\u0442\u043e \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0430\u0436\u043a\u0438\u043c \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f - \u0446\u0435 \u043a\u043e\u0434, \u0449\u043e \u043d\u0430\u043f\u0440\u044f\u043c\u0443 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0454 \u0437 DOM. \u041f\u043e\u0433\u043b\u044f\u043d\u0435\u043c\u043e, \u044f\u043a \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043a\u043e\u0434\u0443 jQuery, \u0449\u043e \u0441\u043b\u0443\u0445\u0430\u0454 \u043f\u043e\u0434\u0456\u044e click, \u043e\u0442\u0440\u0438\u043c\u0443\u0454 \u0434\u0435\u044f\u043a\u0456 \u0434\u0430\u043d\u0456 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0442\u0430 \u0437\u043c\u0456\u043d\u044e\u0454 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 span.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.5/TutorialjQuery.md",sourceDirName:".",slug:"/tutorial-jquery",permalink:"/uk/docs/29.5/tutorial-jquery",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.5",frontMatter:{id:"tutorial-jquery",title:"\u041c\u0430\u043d\u0456\u043f\u0443\u043b\u044f\u0446\u0456\u044f DOM"},sidebar:"docs",previous:{title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0437 DynamoDB",permalink:"/uk/docs/29.5/dynamodb"},next:{title:"\u041f\u043b\u0430\u0433\u0456\u043d\u0438 \u0441\u043f\u043e\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f",permalink:"/uk/docs/29.5/watch-plugins"}},c={},d=[];function h(e){const n=Object.assign({p:"p",pre:"pre",code:"code",a:"a"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u0406\u043d\u0448\u0438\u0439 \u043a\u043b\u0430\u0441 \u0444\u0443\u043d\u043a\u0446\u0456\u0439, \u044f\u043a\u0438\u0439 \u0447\u0430\u0441\u0442\u043e \u0432\u0432\u0430\u0436\u0430\u0454\u0442\u044c\u0441\u044f \u0432\u0430\u0436\u043a\u0438\u043c \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f - \u0446\u0435 \u043a\u043e\u0434, \u0449\u043e \u043d\u0430\u043f\u0440\u044f\u043c\u0443 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0454 \u0437 DOM. \u041f\u043e\u0433\u043b\u044f\u043d\u0435\u043c\u043e, \u044f\u043a \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442 \u043a\u043e\u0434\u0443 jQuery, \u0449\u043e \u0441\u043b\u0443\u0445\u0430\u0454 \u043f\u043e\u0434\u0456\u044e click, \u043e\u0442\u0440\u0438\u043c\u0443\u0454 \u0434\u0435\u044f\u043a\u0456 \u0434\u0430\u043d\u0456 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e \u0442\u0430 \u0437\u043c\u0456\u043d\u044e\u0454 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 span."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="displayUser.js"',children:"'use strict';\n\nconst $ = require('jquery');\nconst fetchCurrentUser = require('./fetchCurrentUser.js');\n\n$('#button').click(() => {\n  fetchCurrentUser(user => {\n    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');\n    $('#username').text(user.fullName + ' - ' + loggedText);\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0417\u043d\u043e\u0432\u0443 \u0436 \u0442\u0430\u043a\u0438, \u043c\u0438 \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u043c\u043e \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u0439 \u0444\u0430\u0439\u043b \u0432 ",(0,r.jsx)(n.code,{children:"__tests__ /"})," \u043f\u0430\u043f\u0446\u0456:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/displayUser-test.js"',children:"'use strict';\n\njest.mock('../fetchCurrentUser');\n\ntest('displays a user after a click', () => {\n  // \u0412\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0454\u043c\u043e body \u043d\u0430\u0448\u043e\u0433\u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0443\n  document.body.innerHTML =\n    '<div>' +\n    '  <span id=\"username\" />' +\n    '  <button id=\"button\" />' +\n    '</div>';\n\n  // \u0426\u0435\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043c\u0430\u0454 \u043f\u043e\u0431\u0456\u0447\u043d\u0438\u0439 \u0435\u0444\u0435\u043a\u0442\n  require('../displayUser');\n\n  const $ = require('jquery');\n  const fetchCurrentUser = require('../fetchCurrentUser');\n\n  // \u0412\u043a\u0430\u0437\u0443\u0454\u043c\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u0457-\u0456\u043c\u0456\u0442\u0430\u0446\u0456\u0457 fetchCurrentUser \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454\n  // \u0457\u0457 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u0438\u0439 \u0432\u0438\u043a\u043b\u0438\u043a \u0437 \u0434\u0435\u044f\u043a\u0438\u043c\u0438 \u0434\u0430\u043d\u0438\u043c\u0438\n  fetchCurrentUser.mockImplementation(cb => {\n    cb({\n      fullName: 'Johnny Cash',\n      loggedIn: true,\n    });\n  });\n\n  // \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u043c\u043e jquery \u0434\u043b\u044f \u0441\u0438\u043c\u0443\u043b\u044f\u0446\u0456\u0457 \u043d\u0430\u0442\u0438\u0441\u043a\u0430\u043d\u043d\u044f \u043a\u043d\u043e\u043f\u043a\u0438\n  $('#button').click();\n\n  // \u0421\u0442\u0432\u0435\u0440\u0434\u0436\u0443\u0454\u043c\u043e, \u0449\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u044f fetchCurrentUser function \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u043b\u0430\u0441\u044c, \u0442\u0430\n  // \u0432\u043d\u0443\u0442\u0440\u0456\u0448\u043d\u0456\u0439 \u0442\u0435\u043a\u0441\u0442 #username span \u043e\u043d\u043e\u0432\u0438\u0432\u0441\u044f \u0437\u0433\u0456\u0434\u043d\u043e \u0437 \u043d\u0430\u0448\u0438\u043c\u0438 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f\u043c\u0438.\n  expect(fetchCurrentUser).toBeCalled();\n  expect($('#username').text()).toBe('Johnny Cash - Logged In');\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u041c\u0438 \u0441\u0442\u0432\u043e\u0440\u044e\u0454\u043c\u043e \u043c\u043e\u043a \u0434\u043b\u044f ",(0,r.jsx)(n.code,{children:"fetchCurrentUser.js"}),", \u0442\u043e\u043c\u0443 \u043d\u0430\u0448 \u0442\u0435\u0441\u0442 \u043d\u0435 \u0440\u043e\u0431\u0438\u0442\u044c \u0441\u043f\u0440\u0430\u0432\u0436\u043d\u0456\u0445 \u043c\u0435\u0440\u0435\u0436\u0435\u0432\u0438\u0445 \u0437\u0430\u043f\u0438\u0442\u0456\u0432, \u0430 \u043e\u0442\u0440\u0438\u043c\u0443\u0454 \u0456\u043c\u0456\u0442\u0430\u0446\u0456\u044e \u0434\u0430\u043d\u0438\u0445 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e. \u0426\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0443\u0454, \u0449\u043e \u043d\u0430\u0448 \u0442\u0435\u0441\u0442 \u043c\u043e\u0436\u043d\u0430 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u0437\u0430 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434\u0430\u0445, \u0430 \u043d\u0435 \u0441\u0435\u043a\u0443\u043d\u0434 \u0456 \u0433\u0430\u0440\u0430\u043d\u0442\u0443\u0454 \u0432\u0438\u0441\u043e\u043a\u0443 \u0448\u0432\u0438\u0434\u043a\u0456\u0441\u0442\u044c \u0456\u043d\u0442\u0435\u0440\u0430\u0446\u0456\u0457 \u044e\u043d\u0456\u0442-\u0442\u0435\u0441\u0442\u0456\u0432."]}),"\n",(0,r.jsxs)(n.p,{children:["\u0422\u0430\u043a\u043e\u0436, \u0444\u0443\u043d\u043a\u0446\u0456\u044f, \u0449\u043e \u0442\u0435\u0441\u0442\u0443\u0454\u0442\u044c\u0441\u044f, \u043f\u0456\u0434\u043f\u0438\u0441\u0443\u0454\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u043e\u0434\u0456\u0457 DOM \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 ",(0,r.jsx)(n.code,{children:"#button"}),", \u0442\u043e\u043c\u0443 \u043d\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0448 DOM \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u0443. ",(0,r.jsx)(n.code,{children:"jsdom"})," \u0442\u0430 \u043f\u0430\u043a\u0435\u0442 ",(0,r.jsx)(n.code,{children:"jest-environment-jsdom"})," \u0456\u043c\u0456\u0442\u0443\u044e\u0442\u044c \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435 DOM \u0430\u043d\u0430\u043b\u043e\u0433\u0456\u0447\u043d\u043e \u0434\u043e \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044f \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!"]}),"\n",(0,r.jsxs)(n.p,{children:["\u0429\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u0440\u043e\u0431\u043e\u0442\u0443 \u0437 ",(0,r.jsx)(n.a,{href:"/uk/docs/29.5/configuration#testenvironment-string",children:"\u0442\u0435\u0441\u0442\u043e\u0432\u0438\u043c \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0435\u043c"})," JSDOM, \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0439 \u043f\u0430\u043a\u0435\u0442 ",(0,r.jsx)(n.code,{children:"jest-environment-jsdom"}),", \u044f\u043a\u0449\u043e \u0446\u044c\u043e\u0433\u043e \u0432\u0436\u0435 \u043d\u0435 \u0437\u0440\u043e\u0431\u043b\u0435\u043d\u043e:"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(l.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest-environment-jsdom\n"})})}),(0,r.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest-environment-jsdom\n"})})}),(0,r.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest-environment-jsdom\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/jquery",children:"examples/jquery"}),"."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>u,ah:()=>a});var r=t(7378);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function u({components:e,children:n,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||l:a(e),r.createElement(s.Provider,{value:u},n)}}}]);
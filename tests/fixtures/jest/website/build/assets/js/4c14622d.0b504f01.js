"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5895],{2599:(e,t,n)=>{n.d(t,{Z:()=>o});n(7378);var r=n(7140);const a={tabItem:"tabItem_wHwb"};var s=n(4246);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},8447:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7378),a=n(7140),s=n(9169),o=n(3620),l=n(9749),i=n(8981),u=n(56),c=n(8796);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=p({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),j=(()=>{const e=u??f;return m({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{j&&i(j)}),[j]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=n(4246);function g(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,v.jsx)(g,{...e,...t}),(0,v.jsx)(y,{...e,...t})]})}function w(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},5479:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var r=n(4246),a=n(1670),s=n(8447),o=n(2599);const l={id:"tutorial-jquery",title:"DOM Manipulation"},i=void 0,u={unversionedId:"tutorial-jquery",id:"tutorial-jquery",title:"DOM Manipulation",description:"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let's see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.",source:"@site/../docs/TutorialjQuery.md",sourceDirName:".",slug:"/tutorial-jquery",permalink:"/docs/next/tutorial-jquery",draft:!1,unlisted:!1,editUrl:"https://github.com/jestjs/jest/edit/main/website/../docs/TutorialjQuery.md",tags:[],version:"current",lastUpdatedBy:"Frazer Smith",lastUpdatedAt:1692104444,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"tutorial-jquery",title:"DOM Manipulation"},sidebar:"docs",previous:{title:"Using with DynamoDB",permalink:"/docs/next/dynamodb"},next:{title:"Watch Plugins",permalink:"/docs/next/watch-plugins"}},c={},d=[];function h(e){const t=Object.assign({p:"p",pre:"pre",code:"code",a:"a"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let's see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="displayUser.js"',children:"'use strict';\n\nconst $ = require('jquery');\nconst fetchCurrentUser = require('./fetchCurrentUser.js');\n\n$('#button').click(() => {\n  fetchCurrentUser(user => {\n    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');\n    $('#username').text(user.fullName + ' - ' + loggedText);\n  });\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["Again, we create a test file in the ",(0,r.jsx)(t.code,{children:"__tests__/"})," folder:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/displayUser-test.js"',children:"'use strict';\n\njest.mock('../fetchCurrentUser');\n\ntest('displays a user after a click', () => {\n  // Set up our document body\n  document.body.innerHTML =\n    '<div>' +\n    '  <span id=\"username\" />' +\n    '  <button id=\"button\" />' +\n    '</div>';\n\n  // This module has a side-effect\n  require('../displayUser');\n\n  const $ = require('jquery');\n  const fetchCurrentUser = require('../fetchCurrentUser');\n\n  // Tell the fetchCurrentUser mock function to automatically invoke\n  // its callback with some data\n  fetchCurrentUser.mockImplementation(cb => {\n    cb({\n      fullName: 'Johnny Cash',\n      loggedIn: true,\n    });\n  });\n\n  // Use jquery to emulate a click on our button\n  $('#button').click();\n\n  // Assert that the fetchCurrentUser function was called, and that the\n  // #username span's inner text was updated as we'd expect it to.\n  expect(fetchCurrentUser).toBeCalled();\n  expect($('#username').text()).toBe('Johnny Cash - Logged In');\n});\n"})}),"\n",(0,r.jsxs)(t.p,{children:["We are mocking ",(0,r.jsx)(t.code,{children:"fetchCurrentUser.js"})," so that our test doesn't make a real network request but instead resolves to mock data locally. This ensures that our test can complete in milliseconds rather than seconds and guarantees a fast unit test iteration speed."]}),"\n",(0,r.jsxs)(t.p,{children:["Also, the function being tested adds an event listener on the ",(0,r.jsx)(t.code,{children:"#button"})," DOM element, so we need to set up our DOM correctly for the test. ",(0,r.jsx)(t.code,{children:"jsdom"})," and the ",(0,r.jsx)(t.code,{children:"jest-environment-jsdom"})," package simulate a DOM environment as if you were in the browser. This means that every DOM API that we call can be observed in the same way it would be observed in a browser!"]}),"\n",(0,r.jsxs)(t.p,{children:["To get started with the JSDOM ",(0,r.jsx)(t.a,{href:"/docs/next/configuration#testenvironment-string",children:"test environment"}),", the ",(0,r.jsx)(t.code,{children:"jest-environment-jsdom"})," package must be installed if it's not already:"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npm install --save-dev jest-environment-jsdom\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn add --dev jest-environment-jsdom\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"pnpm add --save-dev jest-environment-jsdom\n"})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The code for this example is available at ",(0,r.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/jquery",children:"examples/jquery"}),"."]})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},1670:(e,t,n)=>{n.d(t,{Zo:()=>l,ah:()=>s});var r=n(7378);const a=r.createContext({});function s(e){const t=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function l({components:e,children:t,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||o:s(e),r.createElement(a.Provider,{value:l},t)}}}]);
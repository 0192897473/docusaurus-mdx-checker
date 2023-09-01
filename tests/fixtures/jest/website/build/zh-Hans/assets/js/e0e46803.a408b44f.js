"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3456],{1353:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=s(4246),n=s(1670),r=s(9563);const i={id:"upgrading-to-jest29",title:"From v28 to v29"},d=void 0,c={unversionedId:"upgrading-to-jest29",id:"version-29.6/upgrading-to-jest29",title:"From v28 to v29",description:"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-29.6/UpgradingToJest29.md",sourceDirName:".",slug:"/upgrading-to-jest29",permalink:"/zh-Hans/docs/upgrading-to-jest29",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.6",frontMatter:{id:"upgrading-to-jest29",title:"From v28 to v29"},sidebar:"docs",previous:{title:"Testing Web Frameworks",permalink:"/zh-Hans/docs/testing-frameworks"}},a={},l=[{value:"Compatibility",id:"compatibility",level:2},{value:"Snapshot format",id:"snapshot-format",level:2},{value:"JSDOM upgrade",id:"jsdom-upgrade",level:2},{value:"<code>pretty-format</code>",id:"pretty-format",level:2},{value:"<code>jest-mock</code>",id:"jest-mock",level:3},{value:"TypeScript",id:"typescript",level:2},{value:"<code>jest.mocked()</code>",id:"jestmocked",level:3}];function h(e){const t=Object.assign({p:"p",admonition:"admonition",a:"a",h2:"h2",code:"code",pre:"pre",h3:"h3"},(0,n.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["See ",(0,o.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2900",children:"changelog"})," for the full list of changes."]})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Upgrading from an older version? You can see the upgrade guide from v27 to v28 ",(0,o.jsx)(t.a,{href:"/docs/28.x/upgrading-to-jest28",children:"here"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,o.jsx)(t.p,{children:"The supported Node versions are 14.15, 16.10, 18.0 and above."}),"\n",(0,o.jsx)(t.h2,{id:"snapshot-format",children:"Snapshot format"}),"\n",(0,o.jsxs)(t.p,{children:["As announced in the ",(0,o.jsx)(t.a,{href:"/blog/2022/04/25/jest-28#future",children:"Jest 28 blog post"}),", Jest 29 has changed the default snapshot formatting to ",(0,o.jsx)(t.code,{children:"{escapeString: false, printBasicPrototype: false}"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you want to keep the old behavior, you can set the ",(0,o.jsx)(t.code,{children:"snapshotFormat"})," property to:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-diff",children:"+ snapshotFormat: {\n+   escapeString: true,\n+   printBasicPrototype: true\n+ }\n"})}),"\n",(0,o.jsx)(t.h2,{id:"jsdom-upgrade",children:"JSDOM upgrade"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"jest-environment-jsdom"})," has upgraded ",(0,o.jsx)(t.code,{children:"jsdom"})," from v19 to v20."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you use ",(0,o.jsx)(t.code,{children:"jest-environment-jsdom"}),", the minimum TypeScript version is set to ",(0,o.jsx)(t.code,{children:"4.5"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["Notably, ",(0,o.jsx)(t.code,{children:"jsdom@20"})," includes support for ",(0,o.jsx)(t.code,{children:"crypto.getRandomValues()"}),", which means packages like ",(0,o.jsx)(t.code,{children:"uuid"})," and ",(0,o.jsx)(t.code,{children:"nanoid"}),", which doesn't work properly in Jest@28, can work without extra polyfills."]}),"\n",(0,o.jsx)(t.h2,{id:"pretty-format",children:(0,o.jsx)(t.code,{children:"pretty-format"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ConvertAnsi"})," plugin is removed from ",(0,o.jsx)(t.code,{children:"pretty-format"})," package in favour of ",(0,o.jsx)(t.a,{href:"https://github.com/mrazauskas/jest-serializer-ansi-escapes",children:(0,o.jsx)(t.code,{children:"jest-serializer-ansi-escapes"})}),"."]}),"\n",(0,o.jsx)(t.h3,{id:"jest-mock",children:(0,o.jsx)(t.code,{children:"jest-mock"})}),"\n",(0,o.jsxs)(t.p,{children:["Exports of ",(0,o.jsx)(t.code,{children:"Mocked*"})," utility types from ",(0,o.jsx)(t.code,{children:"jest-mock"})," package have changed. ",(0,o.jsx)(t.code,{children:"MaybeMockedDeep"})," and ",(0,o.jsx)(t.code,{children:"MaybeMocked"})," now are exported as ",(0,o.jsx)(t.code,{children:"Mocked"})," and ",(0,o.jsx)(t.code,{children:"MockedShallow"})," respectively; only deep mocked variants of ",(0,o.jsx)(t.code,{children:"MockedClass"}),", ",(0,o.jsx)(t.code,{children:"MockedFunction"})," and ",(0,o.jsx)(t.code,{children:"MockedObject"})," are exposed."]}),"\n",(0,o.jsx)(t.h2,{id:"typescript",children:"TypeScript"}),"\n","\n","\n",(0,o.jsx)(r.ZP,{}),"\n",(0,o.jsx)(t.h3,{id:"jestmocked",children:(0,o.jsx)(t.code,{children:"jest.mocked()"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"MockFunctionAPI.md/#jestmockedsource-options",children:(0,o.jsx)(t.code,{children:"jest.mocked()"})})," helper method now wraps types of deep members of passed object by default. If you have used the method with ",(0,o.jsx)(t.code,{children:"true"})," as the second argument, remove it to avoid type errors:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-diff",children:"- const mockedObject = jest.mocked(someObject, true);\n+ const mockedObject = jest.mocked(someObject);\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To have the old shallow mocked behavior, pass ",(0,o.jsx)(t.code,{children:"{shallow: true}"})," as the second argument:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-diff",children:"- const mockedObject = jest.mocked(someObject);\n+ const mockedObject = jest.mocked(someObject, {shallow: true});\n"})})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},9563:(e,t,s)=>{s.d(t,{ZP:()=>i});var o=s(4246),n=s(1670);function r(e){const t=Object.assign({admonition:"admonition",p:"p",pre:"pre",code:"code",a:"a"},(0,n.ah)(),e.components);return(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"The TypeScript examples from this page will only work as documented if you explicitly import Jest APIs:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:"import {expect, jest, test} from '@jest/globals';\n"})}),(0,o.jsxs)(t.p,{children:["Consult the ",(0,o.jsx)(t.a,{href:"/zh-Hans/docs/getting-started#using-typescript",children:"Getting Started"})," guide for details on how to setup Jest with TypeScript."]})]})}const i=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(r,e)})):r(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>d,ah:()=>r});var o=s(7378);const n=o.createContext({});function r(e){const t=o.useContext(n);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function d({components:e,children:t,disableParentContext:s}){let d;return d=s?"function"==typeof e?e({}):e||i:r(e),o.createElement(n.Provider,{value:d},t)}}}]);
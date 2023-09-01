"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3127],{8512:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>n,metadata:()=>a,toc:()=>h});var o=s(4246),i=s(1670);const n={id:"migration-guide",title:"Migrating to Jest"},r=void 0,a={unversionedId:"migration-guide",id:"version-29.5/migration-guide",title:"Migrating to Jest",description:"If you'd like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:",source:"@site/versioned_docs/version-29.5/MigrationGuide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/docs/29.5/migration-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/jestjs/jest/edit/main/website/versioned_docs/version-29.5/MigrationGuide.md",tags:[],version:"29.5",lastUpdatedBy:"Simen Bekkhus",lastUpdatedAt:1678109491,formattedLastUpdatedAt:"Mar 6, 2023",frontMatter:{id:"migration-guide",title:"Migrating to Jest"},sidebar:"docs",previous:{title:"Watch Plugins",permalink:"/docs/29.5/watch-plugins"},next:{title:"Troubleshooting",permalink:"/docs/29.5/troubleshooting"}},c={},h=[{value:"jest-codemods",id:"jest-codemods",level:2}];function d(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"If you'd like to try out Jest with an existing codebase, there are a number of ways to convert to Jest:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If you are using Jasmine, or a Jasmine like API (for example ",(0,o.jsx)(t.a,{href:"https://mochajs.org",children:"Mocha"}),"), Jest should be mostly compatible, which makes it less complicated to migrate to."]}),"\n",(0,o.jsx)(t.li,{children:"If you are using AVA, Expect.js (by Automattic), Jasmine, Mocha, proxyquire, Should.js or Tape you can automatically migrate with Jest Codemods (see below)."}),"\n",(0,o.jsxs)(t.li,{children:["If you like ",(0,o.jsx)(t.a,{href:"http://chaijs.com/",children:"chai"}),", you can upgrade to Jest and continue using chai. However, we recommend trying out Jest's assertions and their failure messages. Jest Codemods can migrate from chai (see below)."]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"jest-codemods",children:"jest-codemods"}),"\n",(0,o.jsxs)(t.p,{children:["If you are using ",(0,o.jsx)(t.a,{href:"https://github.com/avajs/ava",children:"AVA"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/chaijs/chai",children:"Chai"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/Automattic/expect.js",children:"Expect.js (by Automattic)"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/jasmine/jasmine",children:"Jasmine"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/mochajs/mocha",children:"Mocha"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/thlorenz/proxyquire",children:"proxyquire"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/shouldjs/should.js",children:"Should.js"}),", ",(0,o.jsx)(t.a,{href:"https://github.com/substack/tape",children:"Tape"}),", or ",(0,o.jsx)(t.a,{href:"https://sinonjs.org/",children:"Sinon"})," you can use the third-party ",(0,o.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"jest-codemods"})," to do most of the dirty migration work. It runs a code transformation on your codebase using ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/jscodeshift",children:"jscodeshift"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"To transform your existing tests, navigate to the project containing the tests and run:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"npx jest-codemods\n"})}),"\n",(0,o.jsxs)(t.p,{children:["More information can be found at ",(0,o.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"https://github.com/skovhus/jest-codemods"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>n});var o=s(7378);const i=o.createContext({});function n(e){const t=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:n(e),o.createElement(i.Provider,{value:a},t)}}}]);
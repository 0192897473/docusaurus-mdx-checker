"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4462],{8348:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>d});var i=s(4246),o=s(1670);const a={id:"migration-guide",title:"Migrarea spre Jest"},r=void 0,n={unversionedId:"migration-guide",id:"migration-guide",title:"Migrarea spre Jest",description:"Dac\u0103 dori\u0163i s\u0103 \xeencerca\u0163i Jest pe un cod existent, exist\u0103 mai multe moduri de a conversie la Jest:",source:"@site/i18n/ro/docusaurus-plugin-content-docs/current/MigrationGuide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/ro/docs/next/migration-guide",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"current",frontMatter:{id:"migration-guide",title:"Migrarea spre Jest"},sidebar:"docs",previous:{title:"Watch Plugins",permalink:"/ro/docs/next/watch-plugins"},next:{title:"Rezolvarea problemelor",permalink:"/ro/docs/next/troubleshooting"}},c={},d=[{value:"jest-codemods",id:"jest-codemods",level:2}];function h(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Dac\u0103 dori\u0163i s\u0103 \xeencerca\u0163i Jest pe un cod existent, exist\u0103 mai multe moduri de a conversie la Jest:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["If you are using Jasmine, or a Jasmine like API (for example ",(0,i.jsx)(t.a,{href:"https://mochajs.org",children:"Mocha"}),"), Jest should be mostly compatible, which makes it less complicated to migrate to."]}),"\n",(0,i.jsx)(t.li,{children:"Dac\u0103 utiliza\u021bi AVA, Expect.js (de la Automattic), Jasmine, Mocha, proxyquire, Should.js sau Tape pute\u0163i migra automat cu Jest Codemods (a se vedea mai jos)."}),"\n",(0,i.jsxs)(t.li,{children:["Dac\u0103 v\u0103 place ",(0,i.jsx)(t.a,{href:"http://chaijs.com/",children:"chai"}),", pute\u021bi face upgrade la Jest \u015fi continua s\u0103 utiliza\u021bi chai. Cu toate acestea, v\u0103 recomand\u0103m s\u0103 \xeencerca\u021bi aser\u021biunile \u015fi mesajele de eroare din Jest. Jest Codemods pot migra de la chai (a se vedea mai jos)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"jest-codemods",children:"jest-codemods"}),"\n",(0,i.jsxs)(t.p,{children:["If you are using ",(0,i.jsx)(t.a,{href:"https://github.com/avajs/ava",children:"AVA"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/chaijs/chai",children:"Chai"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/Automattic/expect.js",children:"Expect.js (by Automattic)"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/jasmine/jasmine",children:"Jasmine"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mochajs/mocha",children:"Mocha"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/thlorenz/proxyquire",children:"proxyquire"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/shouldjs/should.js",children:"Should.js"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/substack/tape",children:"Tape"}),", or ",(0,i.jsx)(t.a,{href:"https://sinonjs.org/",children:"Sinon"})," you can use the third-party ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"jest-codemods"})," to do most of the dirty migration work. Execut\u0103 o transformare a codului voastru folosind ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/jscodeshift",children:"jscodeshift"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Pentru a transforma testele existente, naviga\u0163i la proiectul care con\u0163ine teste \u015fi rula\u021bi:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npx jest-codemods\n"})}),"\n",(0,i.jsxs)(t.p,{children:["More information can be found at ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"https://github.com/skovhus/jest-codemods"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(h,e)})):h(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>n,ah:()=>a});var i=s(7378);const o=i.createContext({});function a(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function n({components:e,children:t,disableParentContext:s}){let n;return n=s?"function"==typeof e?e({}):e||r:a(e),i.createElement(o.Provider,{value:n},t)}}}]);
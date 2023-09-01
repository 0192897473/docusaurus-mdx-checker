"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2068],{8597:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>d});var o=t(4246),i=t(1670);const n={id:"migration-guide",title:"Migrando a Jest"},a=void 0,r={unversionedId:"migration-guide",id:"version-29.6/migration-guide",title:"Migrando a Jest",description:"Si deseas probar Jest con un proyecto de c\xf3digo existente, hay un n\xfamero de maneras de convertir-lo a Jest:",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/version-29.6/MigrationGuide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/es-ES/docs/migration-guide",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.6",frontMatter:{id:"migration-guide",title:"Migrando a Jest"},sidebar:"docs",previous:{title:"Watch Plugins",permalink:"/es-ES/docs/watch-plugins"},next:{title:"Soluci\xf3n de problemas",permalink:"/es-ES/docs/troubleshooting"}},c={},d=[{value:"jest-codemods",id:"jest-codemods",level:2}];function h(e){const s=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code"},(0,i.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.p,{children:"Si deseas probar Jest con un proyecto de c\xf3digo existente, hay un n\xfamero de maneras de convertir-lo a Jest:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["If you are using Jasmine, or a Jasmine like API (for example ",(0,o.jsx)(s.a,{href:"https://mochajs.org",children:"Mocha"}),"), Jest should be mostly compatible, which makes it less complicated to migrate to."]}),"\n",(0,o.jsx)(s.li,{children:"If you are using AVA, Expect.js (by Automattic), Jasmine, Mocha, proxyquire, Should.js or Tape you can automatically migrate with Jest Codemods (see below)."}),"\n",(0,o.jsxs)(s.li,{children:["Si te gusta ",(0,o.jsx)(s.a,{href:"http://chaijs.com/",children:"chai"}),", puedes actualizar a Jest y seguir usando chai. Sin embargo, te recomendamos probar las asserciones de Jest y los mensajes de error. Jest Codemods puede migrarse desde chai (v\xe9ase abajo)."]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"jest-codemods",children:"jest-codemods"}),"\n",(0,o.jsxs)(s.p,{children:["If you are using ",(0,o.jsx)(s.a,{href:"https://github.com/avajs/ava",children:"AVA"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/chaijs/chai",children:"Chai"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/Automattic/expect.js",children:"Expect.js (by Automattic)"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/jasmine/jasmine",children:"Jasmine"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/mochajs/mocha",children:"Mocha"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/thlorenz/proxyquire",children:"proxyquire"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/shouldjs/should.js",children:"Should.js"}),", ",(0,o.jsx)(s.a,{href:"https://github.com/substack/tape",children:"Tape"}),", or ",(0,o.jsx)(s.a,{href:"https://sinonjs.org/",children:"Sinon"})," you can use the third-party ",(0,o.jsx)(s.a,{href:"https://github.com/skovhus/jest-codemods",children:"jest-codemods"})," to do most of the dirty migration work. Se ejecuta una transformaci\xf3n del c\xf3digo en su base de c\xf3digo usando ",(0,o.jsx)(s.a,{href:"https://github.com/facebook/jscodeshift",children:" jscodeshift"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Para transformar los tests existentes, navega al proyecto que contiene los tests y ejecuta:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npx jest-codemods\n"})}),"\n",(0,o.jsxs)(s.p,{children:["More information can be found at ",(0,o.jsx)(s.a,{href:"https://github.com/skovhus/jest-codemods",children:"https://github.com/skovhus/jest-codemods"}),"."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,o.jsx)(s,Object.assign({},e,{children:(0,o.jsx)(h,e)})):h(e)}},1670:(e,s,t)=>{t.d(s,{Zo:()=>r,ah:()=>n});var o=t(7378);const i=o.createContext({});function n(e){const s=o.useContext(i);return o.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function r({components:e,children:s,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||a:n(e),o.createElement(i.Provider,{value:r},s)}}}]);
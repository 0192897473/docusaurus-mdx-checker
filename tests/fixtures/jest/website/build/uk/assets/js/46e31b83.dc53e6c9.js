"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2229],{5260:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>a});var i=s(4246),o=s(1670);const n={id:"migration-guide",title:"\u041c\u0456\u0433\u0440\u0430\u0446\u0456\u044f \u043d\u0430 Jest"},c=void 0,r={unversionedId:"migration-guide",id:"version-29.6/migration-guide",title:"\u041c\u0456\u0433\u0440\u0430\u0446\u0456\u044f \u043d\u0430 Jest",description:"\u042f\u043a\u0449\u043e \u0431 \u0432\u0438 \u0445\u043e\u0442\u0456\u043b\u0438 \u0441\u043f\u043e\u0431\u0443\u0432\u0430\u0442\u0438 Jext \u043d\u0430 \u0456\u0441\u043d\u0443\u044e\u0447\u0456\u0439 \u0431\u0430\u0437\u0456 \u043a\u043e\u0434\u0443, \u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0448\u043b\u044f\u0445\u0456\u0432 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0443 \u043d\u0430 Jest:",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.6/MigrationGuide.md",sourceDirName:".",slug:"/migration-guide",permalink:"/uk/docs/migration-guide",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.6",frontMatter:{id:"migration-guide",title:"\u041c\u0456\u0433\u0440\u0430\u0446\u0456\u044f \u043d\u0430 Jest"},sidebar:"docs",previous:{title:"\u041f\u043b\u0430\u0433\u0456\u043d\u0438 \u0441\u043f\u043e\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f",permalink:"/uk/docs/watch-plugins"},next:{title:"\u0412\u0438\u0440\u0456\u0448\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0431\u043b\u0435\u043c",permalink:"/uk/docs/troubleshooting"}},h={},a=[{value:"jest-codemods",id:"jest-codemods",level:2}];function d(e){const t=Object.assign({p:"p",ul:"ul",li:"li",a:"a",h2:"h2",pre:"pre",code:"code"},(0,o.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"\u042f\u043a\u0449\u043e \u0431 \u0432\u0438 \u0445\u043e\u0442\u0456\u043b\u0438 \u0441\u043f\u043e\u0431\u0443\u0432\u0430\u0442\u0438 Jext \u043d\u0430 \u0456\u0441\u043d\u0443\u044e\u0447\u0456\u0439 \u0431\u0430\u0437\u0456 \u043a\u043e\u0434\u0443, \u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0448\u043b\u044f\u0445\u0456\u0432 \u043f\u0435\u0440\u0435\u0445\u043e\u0434\u0443 \u043d\u0430 Jest:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\u042f\u043a\u0449\u043e \u0432\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0454\u0442\u0435\u0441\u044c Jasmine \u0447\u0438 \u043f\u043e\u0434\u0456\u0431\u043d\u0438\u043c API (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, ",(0,i.jsx)(t.a,{href:"https://mochajs.org",children:"Mocha"}),"), Jest \u043c\u0430\u0454 \u0432\u0435\u043b\u0438\u043a\u0438\u0439 \u0432\u0456\u0434\u0441\u043e\u0442\u043e\u043a \u0441\u0443\u043c\u0456\u0441\u043d\u043e\u0441\u0442\u0456, \u0449\u043e \u0441\u043f\u0440\u043e\u0449\u0443\u0454 \u043f\u0440\u043e\u0446\u0435\u0441 \u043c\u0456\u0433\u0440\u0430\u0446\u0456\u0457."]}),"\n",(0,i.jsx)(t.li,{children:"\u042f\u043a\u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 AVA, Expect.js (by Automattic), Jasmine, Mocha, proxyquire, Should.js \u0430\u0431\u043e Tape, \u043c\u0456\u0433\u0440\u0430\u0446\u0456\u044f \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Jest Codemods (\u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f \u043d\u0438\u0436\u0447\u0435)."}),"\n",(0,i.jsxs)(t.li,{children:["\u042f\u043a\u0449\u043e \u0432\u0438 \u043b\u044e\u0431\u0438\u0442\u0435 ",(0,i.jsx)(t.a,{href:"http://chaijs.com/",children:"chai"}),", \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u043d\u043e\u0432\u0438\u0442\u0438\u0441\u044c \u0434\u043e Jest \u0442\u0430 \u043f\u0440\u043e\u0434\u043e\u0432\u0436\u0443\u0432\u0430\u0442\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 chai. \u0422\u0430 \u0432\u0436\u0435 \u0436 \u043c\u0438 \u0431\u0438 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0432\u0430\u043b\u0438 \u0432\u0430\u043c \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438, \u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0456 \u0432 Jest \u0430 \u0442\u0430\u043a\u043e\u0436 \u0456\u0445 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u0440\u043e \u043f\u043e\u043c\u0438\u043b\u043a\u0438. Jest Codemods \u043c\u043e\u0436\u0435 \u043c\u0456\u0433\u0440\u0443\u0432\u0430\u0442\u0438 \u0437 chai (\u0434\u0438\u0432\u0456\u0442\u044c\u0441\u044f \u043d\u0438\u0436\u0447\u0435)."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"jest-codemods",children:"jest-codemods"}),"\n",(0,i.jsxs)(t.p,{children:["\u042f\u043a\u0449\u043e \u0432\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0454\u0442\u0435\u0441\u044c ",(0,i.jsx)(t.a,{href:"https://github.com/avajs/ava",children:"AVA"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/chaijs/chai",children:"Chai"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/Automattic/expect.js",children:"Expect.js (by Automattic)"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/jasmine/jasmine",children:"Jasmine"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/mochajs/mocha",children:"Mocha"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/thlorenz/proxyquire",children:"proxyquire"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/shouldjs/should.js",children:"Should.js"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/substack/tape",children:"Tape"})," \u0430\u0431\u043e ",(0,i.jsx)(t.a,{href:"https://sinonjs.org/",children:"Sinon"}),", \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0456 ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"jest-codemods"})," \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0431\u0456\u043b\u044c\u0448\u043e\u0441\u0442\u0456 \u043a\u0440\u043e\u043f\u0456\u0442\u043a\u043e\u0457 \u0440\u043e\u0431\u043e\u0442\u0438 \u043f\u0456\u0434 \u0447\u0430\u0441 \u043c\u0456\u0433\u0440\u0430\u0446\u0456\u0457. \u0426\u0435\u0439 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0432\u0438\u043a\u043e\u043d\u0430\u0454 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044e \u043a\u043e\u0434\u0443 \u0432\u0430\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u0456\u0432 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u044e\u0447\u0438 ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/jscodeshift",children:"jscodeshift"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"\u0429\u043e\u0431 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0443\u0432\u0430\u0442\u0438 \u0456\u0441\u043d\u0443\u044e\u0447\u0456 \u0442\u0435\u0441\u0442\u0438, \u043f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0432 \u043a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u043e\u0435\u043a\u0442\u0443 \u0437 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u0439\u0442\u0435 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"npx jest-codemods\n"})}),"\n",(0,i.jsxs)(t.p,{children:["More information can be found at ",(0,i.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods",children:"https://github.com/skovhus/jest-codemods"}),"."]})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>r,ah:()=>n});var i=s(7378);const o=i.createContext({});function n(e){const t=i.useContext(o);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function r({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||c:n(e),i.createElement(o.Provider,{value:r},t)}}}]);
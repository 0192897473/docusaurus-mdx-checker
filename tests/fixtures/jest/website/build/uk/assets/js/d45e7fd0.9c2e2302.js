"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5321],{7294:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(4246),a=t(1670);const c={id:"setup-teardown",title:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0442\u0430 \u043e\u0447\u0438\u0441\u0442\u043a\u0430"},o=void 0,r={unversionedId:"setup-teardown",id:"setup-teardown",title:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0442\u0430 \u043e\u0447\u0438\u0441\u0442\u043a\u0430",description:"\u0427\u0430\u0441\u0442\u043e \u043f\u0456\u0434 \u0447\u0430\u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0442\u0435\u0441\u0442\u0456\u0432 \u0454 \u043f\u0435\u0432\u043d\u0430 \u043f\u0456\u0434\u043e\u0442\u043e\u0432\u0447\u0430 \u0440\u043e\u0431\u043e\u0442\u0430, \u044f\u043a\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0442\u0435\u0441\u0442\u0456\u0432 \u0430 \u0442\u0430\u043a\u043e\u0436 \u043f\u0435\u0432\u043d\u0430 \u0444\u0456\u043d\u0430\u043b\u044c\u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0430, \u044f\u043a\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043f\u0456\u0441\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u0456\u0432. Jest \u043d\u0430\u0434\u0430\u0454 \u0434\u043e\u043f\u043e\u043c\u0456\u0436\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457, \u0449\u043e\u0431 \u0432\u043f\u043e\u0440\u0430\u0442\u0438\u0441\u044c \u0437 \u0446\u0438\u043c.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/current/SetupAndTeardown.md",sourceDirName:".",slug:"/setup-teardown",permalink:"/uk/docs/next/setup-teardown",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"current",frontMatter:{id:"setup-teardown",title:"\u041f\u0456\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0442\u0430 \u043e\u0447\u0438\u0441\u0442\u043a\u0430"},sidebar:"docs",previous:{title:"\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443",permalink:"/uk/docs/next/asynchronous"},next:{title:"\u0424\u0443\u043d\u043a\u0446\u0456\u0457-\u0456\u043c\u0456\u0442\u0430\u0446\u0456\u0457",permalink:"/uk/docs/next/mock-functions"}},i={},l=[{value:"\u041f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u043d\u044f \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c",id:"\u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u043d\u044f-\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c",level:2},{value:"\u041e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f",id:"\u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u0435-\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f",level:2},{value:"\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443",id:"\u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443",level:2},{value:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f",id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f",level:2},{value:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u0440\u0430\u0434\u0438",id:"\u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0456-\u043f\u043e\u0440\u0430\u0434\u0438",level:2}];function d(e){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",em:"em",admonition:"admonition"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u0427\u0430\u0441\u0442\u043e \u043f\u0456\u0434 \u0447\u0430\u0441 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043d\u044f \u0442\u0435\u0441\u0442\u0456\u0432 \u0454 \u043f\u0435\u0432\u043d\u0430 \u043f\u0456\u0434\u043e\u0442\u043e\u0432\u0447\u0430 \u0440\u043e\u0431\u043e\u0442\u0430, \u044f\u043a\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043f\u0435\u0440\u0435\u0434 \u0437\u0430\u043f\u0443\u0441\u043a\u043e\u043c \u0442\u0435\u0441\u0442\u0456\u0432 \u0430 \u0442\u0430\u043a\u043e\u0436 \u043f\u0435\u0432\u043d\u0430 \u0444\u0456\u043d\u0430\u043b\u044c\u043d\u0430 \u0440\u043e\u0431\u043e\u0442\u0430, \u044f\u043a\u0430 \u043f\u043e\u0432\u0438\u043d\u043d\u0430 \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0430 \u043f\u0456\u0441\u043b\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0442\u0435\u0441\u0442\u0456\u0432. Jest \u043d\u0430\u0434\u0430\u0454 \u0434\u043e\u043f\u043e\u043c\u0456\u0436\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457, \u0449\u043e\u0431 \u0432\u043f\u043e\u0440\u0430\u0442\u0438\u0441\u044c \u0437 \u0446\u0438\u043c."}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u043d\u044f-\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0435\u043d\u043d\u044f \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u044c"}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u043f\u0435\u0432\u043d\u0456 \u0437\u0430\u0434\u0430\u0447\u0456, \u044f\u043a\u0456 \u0432\u0438 \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u0449\u043e\u0440\u0430\u0437\u0443 \u0434\u043b\u044f \u0431\u0430\u0433\u0430\u0442\u044c\u043e\u0445 \u0442\u0435\u0441\u0442\u0456\u0432, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"beforeEach"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"afterEach"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043f\u0440\u0438\u043f\u0443\u0441\u0442\u0438\u043c\u043e, \u0449\u043e \u043a\u0456\u043b\u044c\u043a\u0430 \u0442\u0435\u0441\u0442\u0456\u0432 \u0432\u0437\u0430\u0454\u043c\u043e\u0434\u0456\u0454 \u0437 \u0431\u0430\u0437\u043e\u044e \u0434\u0430\u043d\u0438\u0445 \u043c\u0456\u0441\u0442. \u0423 \u0432\u0430\u0441 \u0454 \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"initializeCityDatabase()"}),", \u044f\u043a\u0438\u0439 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u043d\u0438\u0439 \u043f\u0435\u0440\u0435\u0434 \u043a\u043e\u0436\u043d\u0438\u043c \u0442\u0435\u0441\u0442\u043e\u043c \u0456 \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"clearCityDatabase()"}),", \u044f\u043a\u0438\u0439 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u043d\u0438\u0439 \u043f\u0456\u0441\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0443. \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0435:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  initializeCityDatabase();\n});\n\nafterEach(() => {\n  clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"beforeEach"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"afterEach"})," \u043c\u043e\u0436\u0443\u0442\u044c \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0442\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0438\u0439 \u043a\u043e\u0434 \u0442\u0430\u043a \u0441\u0430\u043c\u043e, \u044f\u043a \u0456 ",(0,s.jsx)(n.a,{href:"/uk/docs/next/asynchronous",children:"\u0442\u0435\u0441\u0442\u0438"})," - \u043e\u0442\u0440\u0438\u043c\u0443\u044e\u0447\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 ",(0,s.jsx)(n.code,{children:"done"})," \u0430\u0431\u043e \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0447\u0438 \u043f\u0440\u043e\u043c\u0456\u0441. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0449\u043e \u0444\u0443\u043d\u043a\u0446\u0456\u044f ",(0,s.jsx)(n.code,{children:"initializeCityDatabase()"})," \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043f\u0440\u043e\u043c\u0456\u0441, \u044f\u043a\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0454\u0442\u044c\u0441\u044f, \u043a\u043e\u043b\u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u0438\u0445 \u0431\u0443\u0434\u0435 \u0456\u043d\u0456\u0446\u0456\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u0430, \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438 \u0446\u0435\u0439 \u043f\u0440\u043e\u043c\u0456\u0441:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  return initializeCityDatabase();\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u0435-\u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f",children:"\u041e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["\u0406\u043d\u043a\u043e\u043b\u0438 \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0434 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u043b\u0438\u0448\u0435 \u043e\u0434\u0438\u043d \u0440\u0430\u0437 \u043d\u0430 \u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u0444\u0430\u0439\u043b\u0430. \u0426\u0435 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043e\u044e, \u044f\u043a\u0449\u043e \u0446\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0435 \u0456, \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u043d\u043e, \u0432\u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0439\u043e\u0433\u043e \u0456\u043d\u043b\u0430\u0439\u043d\u043e\u0432\u043e. Jest \u043d\u0430\u0434\u0430\u0454 \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"beforeAll"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"afterAll"})," \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u0432 \u0442\u0430\u043a\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044f\u0445."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0449\u043e ",(0,s.jsx)(n.code,{children:"initializeCityDatabase()"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"clearCityDatabase()"})," \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u044e\u0442\u044c \u043f\u0440\u043e\u043c\u0456\u0441\u0438, \u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u0438\u0445 \u043c\u0456\u0441\u0442 \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u0430 \u0432 \u0440\u0456\u0437\u043d\u0438\u0445 \u0442\u0435\u0441\u0442\u0430\u0445, \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u043d\u0430\u0448 \u043a\u043e\u0434 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeAll(() => {\n  return initializeCityDatabase();\n});\n\nafterAll(() => {\n  return clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443",children:"\u041e\u0431\u043c\u0435\u0436\u0435\u043d\u043d\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443"}),"\n",(0,s.jsxs)(n.p,{children:["\u0425\u0443\u043a\u0438 \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0433\u043e \u0440\u0456\u0432\u043d\u044f ",(0,s.jsx)(n.code,{children:"before*"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"after*"})," \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0434\u043e \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0443 \u0432 \u0444\u0430\u0439\u043b\u0456. \u0417\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0456 \u0445\u0443\u043a\u0438 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u0431\u043b\u043e\u043a\u0443 ",(0,s.jsx)(n.code,{children:"describe"})," \u0437\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u044e\u0442\u044c\u0441\u044f \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043e \u0442\u0435\u0441\u0442\u0456\u0432 \u0432 \u043c\u0435\u0436\u0430\u0445 \u0446\u044c\u043e\u0433\u043e \u0431\u043b\u043e\u043a\u0443."]}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0443\u044f\u0432\u0456\u043c\u043e, \u0449\u043e \u0443 \u043d\u0430\u0441 \u0454 \u043d\u0435 \u0442\u0456\u043b\u044c\u043a\u0438 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u0438\u0445 \u043c\u0456\u0441\u0442, \u0430\u043b\u0435 \u0456 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u0438\u0445 \u0457\u0436\u0456. \u041c\u0438 \u043c\u043e\u0433\u043b\u0438 \u0431 \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0440\u0456\u0437\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0434\u043b\u044f \u0440\u0456\u0437\u043d\u0438\u0445 \u0442\u0435\u0441\u0442\u0456\u0432:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u0417\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043e \u0432\u0441\u0456\u0445 \u0442\u0435\u0441\u0442\u0456\u0432 \u0443 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u0444\u0430\u0439\u043b\u0456\nbeforeEach(() => {\n  return initializeCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n\ndescribe('matching cities to foods', () => {\n  // \u0417\u0430\u0441\u0442\u043e\u0441\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043e \u0442\u0435\u0441\u0442\u0456\u0432 \u0432 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u0431\u043b\u043e\u0446\u0456 desribe\n  beforeEach(() => {\n    return initializeFoodDatabase();\n  });\n\n  test('Vienna <3 veal', () => {\n    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);\n  });\n\n  test('San Juan <3 plantains', () => {\n    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0417\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443, \u0449\u043e \u0432\u0435\u0440\u0445\u043d\u044c\u043e\u0440\u0456\u0432\u043d\u0435\u0432\u0438\u0439 ",(0,s.jsx)(n.code,{children:"beforeEach"})," \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0435\u0434 ",(0,s.jsx)(n.code,{children:"beforeEach"})," \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u0431\u043b\u043e\u043a\u0443 ",(0,s.jsx)(n.code,{children:"describe"}),". \u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u043d\u0438\u0436\u0447\u0435 \u043c\u043e\u0436\u0435 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u0442\u0438 \u043f\u0440\u043e\u0456\u043b\u044e\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0432\u0441\u0456\u0445 \u0431\u043b\u043e\u043a\u0456\u0432."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeAll(() => console.log('1 - beforeAll'));\nafterAll(() => console.log('1 - afterAll'));\nbeforeEach(() => console.log('1 - beforeEach'));\nafterEach(() => console.log('1 - afterEach'));\n\ntest('', () => console.log('1 - test'));\n\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll'));\n  afterAll(() => console.log('2 - afterAll'));\n  beforeEach(() => console.log('2 - beforeEach'));\n  afterEach(() => console.log('2 - afterEach'));\n\n  test('', () => console.log('2 - test'));\n});\n\n// 1 - beforeAll\n// 1 - beforeEach\n// 1 - test\n// 1 - afterEach\n// 2 - beforeAll\n// 1 - beforeEach\n// 2 - beforeEach\n// 2 - test\n// 2 - afterEach\n// 1 - afterEach\n// 2 - afterAll\n// 1 - afterAll\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f",children:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["Jest \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u0432\u0441\u0456 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0438 \u0431\u043b\u043e\u043a\u0456\u0432 describe \u0443 \u0444\u0430\u0439\u043b\u0456 \u0437 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 ",(0,s.jsx)(n.em,{children:"\u043f\u0435\u0440\u0435\u0434 \u0442\u0438\u043c"}),", \u044f\u043a \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u0442\u0435\u0441\u0442. \u0426\u0435 \u0449\u0435 \u043e\u0434\u043d\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430 \u043d\u0430\u043b\u0430\u0448\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0442\u0435\u0441\u0442\u0438 \u0442\u0430 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0443 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u043e\u0431\u0440\u043e\u0431\u043d\u0438\u043a\u0456\u0432 ",(0,s.jsx)(n.code,{children:"before*"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"after*"}),", \u0430 \u043d\u0435 \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u0431\u043b\u043e\u043a\u0456\u0432 ",(0,s.jsx)(n.code,{children:"describe"}),". \u041f\u0456\u0441\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u0432\u0441\u0456\u0445 \u0431\u043b\u043e\u043a\u0456\u0432 ",(0,s.jsx)(n.code,{children:"describe"}),", \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c, Jest \u043f\u043e\u0441\u043b\u0456\u0434\u043e\u0432\u043d\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454 \u0432\u0441\u0456 \u0442\u0435\u0441\u0442\u0438 \u0432 \u0442\u043e\u043c\u0443 \u043f\u043e\u0440\u044f\u0434\u043a\u0443, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0432\u043e\u043d\u0438 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u044e\u0442\u044c\u0441\u044f \u0432 \u043a\u043e\u0434\u0456, \u043e\u0447\u0456\u043a\u0443\u0454 \u043d\u0430 \u0457\u0445 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u044f \u0442\u0430 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u043e\u0447\u0438\u0441\u0442\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u0442\u0438\u043c, \u044f\u043a \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044f \u0434\u0430\u043b\u0456."]}),"\n",(0,s.jsx)(n.p,{children:"\u0420\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0442\u0435\u0441\u0442 \u0444\u0430\u0439\u043b \u0442\u0430 \u0439\u043e\u0433\u043e \u0432\u0438\u0432\u0456\u0434:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"describe('describe outer', () => {\n  console.log('describe outer-a');\n\n  describe('describe inner 1', () => {\n    console.log('describe inner 1');\n\n    test('test 1', () => console.log('test 1'));\n  });\n\n  console.log('describe outer-b');\n\n  test('test 2', () => console.log('test 2'));\n\n  describe('describe inner 2', () => {\n    console.log('describe inner 2');\n\n    test('test 3', () => console.log('test 3'));\n  });\n\n  console.log('describe outer-c');\n});\n\n// describe outer-a\n// describe inner 1\n// describe outer-b\n// describe inner 2\n// describe outer-c\n// test 1\n// test 2\n// test 3\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a \u0456 \u0431\u043b\u043e\u043a\u0438 ",(0,s.jsx)(n.code,{children:"describe"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"test"}),", Jest \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454 \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"before*"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"after*"})," \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0456\u0457. \u0417\u0432\u0435\u0440\u043d\u0456\u0442\u044c \u0443\u0432\u0430\u0433\u0443, \u0449\u043e \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"after*"})," \u043e\u0445\u043e\u043f\u043b\u044e\u044e\u0447\u043e\u0433\u043e \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0443 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u044e\u0442\u044c\u0441\u044f \u043f\u0435\u0440\u0448\u0438\u043c\u0438. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 \u0442\u0430 \u0437\u043d\u0435\u0441\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438, \u044f\u043a\u0456 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u044c \u043e\u0434\u0438\u043d \u0432\u0456\u0434 \u043e\u0434\u043d\u043e\u0433\u043e:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeEach(() => console.log('connection setup'));\nbeforeEach(() => console.log('database setup'));\n\nafterEach(() => console.log('database teardown'));\nafterEach(() => console.log('connection teardown'));\n\ntest('test 1', () => console.log('test 1'));\n\ndescribe('extra', () => {\n  beforeEach(() => console.log('extra database setup'));\n  afterEach(() => console.log('extra database teardown'));\n\n  test('test 2', () => console.log('test 2'));\n});\n\n// connection setup\n// database setup\n// test 1\n// database teardown\n// connection teardown\n\n// connection setup\n// database setup\n// extra database setup\n// test 2\n// extra database teardown\n// database teardown\n// connection teardown\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c \u0442\u0435\u0441\u0442\u0456\u0432 ",(0,s.jsx)(n.code,{children:"jasmine2"}),", \u0432\u0456\u0437\u044c\u043c\u0456\u0442\u044c \u0434\u043e \u0443\u0432\u0430\u0433\u0438, \u0449\u043e \u0432\u0456\u043d \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454 \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"after*"})," \u0443 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u043e\u043c\u0443 \u043f\u043e\u0440\u044f\u0434\u043a\u0443 \u0434\u0435\u043a\u043b\u0430\u0440\u0430\u0446\u0456\u0457. \u0429\u043e\u0431 \u043c\u0430\u0442\u0438 \u043e\u0434\u043d\u0430\u043a\u043e\u0432\u0438\u0439 \u0432\u0438\u0432\u0456\u0434, \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u0432\u0438\u0449\u0435 \u043f\u0440\u0438\u043a\u043b\u0430\u0434 \u043f\u043e\u0432\u0438\u043d\u0435\u043d \u0431\u0443\u0442\u0438 \u0437\u043c\u0456\u043d\u0435\u043d\u0438\u0439 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u0447\u0438\u043d\u043e\u043c:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"  beforeEach(() => console.log('connection setup'));\n+ afterEach(() => console.log('connection teardown'));\n\n  beforeEach(() => console.log('database setup'));\n+ afterEach(() => console.log('database teardown'));\n\n- afterEach(() => console.log('database teardown'));\n- afterEach(() => console.log('connection teardown'));\n\n  // ...\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0456-\u043f\u043e\u0440\u0430\u0434\u0438",children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0456 \u043f\u043e\u0440\u0430\u0434\u0438"}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0442\u0435\u0441\u0442 \u043f\u0430\u0434\u0430\u0454, \u043e\u0434\u043d\u0430 \u0437 \u043f\u0435\u0440\u0448\u0438\u0445 \u0440\u0435\u0447\u0435\u0439, \u044f\u043a\u0443 \u0432\u0430\u0440\u0442\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 - \u0446\u0435 \u0447\u0438 \u043f\u0430\u0434\u0430\u0454 \u0446\u0435\u0439 \u0442\u0435\u0441\u0442, \u044f\u043a\u0449\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u043b\u0438\u0448\u0435 \u0432\u0456\u043d. \u0429\u043e\u0431 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0438 \u0442\u0456\u043b\u044c\u043a\u0438 \u043e\u0434\u0438\u043d \u0442\u0435\u0441\u0442 \u0437 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Jest, \u0442\u0438\u043c\u0447\u0430\u0441\u043e\u0432\u043e \u0437\u043c\u0456\u043d\u0456\u0442\u044c \u0432\u0438\u043a\u043b\u0438\u043a ",(0,s.jsx)(n.code,{children:"test"})," \u043d\u0430 ",(0,s.jsx)(n.code,{children:"test.only"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test.only('this will be the only test that runs', () => {\n  expect(true).toBe(false);\n});\n\ntest('this test will not run', () => {\n  expect('A').toBe('A');\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0443 \u0432\u0430\u0441 \u0454 \u0442\u0435\u0441\u0442, \u044f\u043a\u0438\u0439 \u0447\u0430\u0441\u0442\u043e \u043f\u0430\u0434\u0430\u0454, \u043a\u043e\u043b\u0438 \u0432\u0456\u043d \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u0456\u043d\u0448\u0438\u043c\u0438 \u0442\u0435\u0441\u0442\u0430\u043c\u0438 \u0432 \u043d\u0430\u0431\u043e\u0440\u0456, \u0430\u043b\u0435 \u043d\u0435 \u043f\u0430\u0434\u0430\u0454, \u043a\u043e\u043b\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u0438\u0439 \u043b\u0438\u0448\u0435 \u0432\u0456\u043d, \u0432\u0435\u043b\u0438\u043a\u0430 \u0439\u043c\u043e\u0432\u0456\u0440\u043d\u0456\u0441\u0442\u044c, \u0449\u043e \u043d\u0430 \u043d\u044c\u043e\u0433\u043e \u0432\u043f\u043b\u0438\u0432\u0430\u0454 \u0449\u043e\u0441\u044c \u0437 \u0456\u043d\u0448\u0438\u0445 \u0442\u0435\u0441\u0442\u0456\u0432. \u0427\u0430\u0441\u0442\u043e \u0446\u0435 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043f\u0440\u0430\u0432\u0438\u0442\u0438, \u043e\u0447\u0438\u0441\u0442\u0438\u0432\u0448\u0438 \u0441\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u0441\u0442\u0430\u043d \u0437 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,s.jsx)(n.code,{children:"beforeEach"}),". \u042f\u043a\u0449\u043e \u0432\u0438 \u043d\u0435 \u0432\u043f\u0435\u0432\u043d\u0435\u043d\u0456, \u0447\u0438 \u0437\u043c\u0456\u043d\u044e\u0454\u0442\u044c\u0441\u044f \u044f\u043a\u0438\u0439\u0441\u044c \u0441\u043f\u0456\u043b\u044c\u043d\u0438\u0439 \u0441\u0442\u0430\u043d, \u043c\u043e\u0436\u043d\u0430 \u0442\u0430\u043a\u043e\u0436 \u0441\u043f\u0440\u043e\u0431\u0443\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"beforeEach"}),", \u0432 \u044f\u043a\u043e\u043c\u0443 \u043b\u043e\u0433\u0443\u044e\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u0456."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>c});var s=t(7378);const a=s.createContext({});function c(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:c(e),s.createElement(a.Provider,{value:r},n)}}}]);
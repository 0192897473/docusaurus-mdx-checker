"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4942],{5248:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4246),a=t(1670);const o={id:"setup-teardown",title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430"},c=void 0,r={unversionedId:"setup-teardown",id:"version-29.5/setup-teardown",title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430",description:"\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u043e\u0432 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u0442\u0435\u0441\u0442, \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e \u0435\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044e. Jest \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.5/SetupAndTeardown.md",sourceDirName:".",slug:"/setup-teardown",permalink:"/ru/docs/29.5/setup-teardown",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.5",frontMatter:{id:"setup-teardown",title:"\u041f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0430 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430"},sidebar:"docs",previous:{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430",permalink:"/ru/docs/29.5/asynchronous"},next:{title:"Mock-\u0444\u0443\u043d\u043a\u0446\u0438\u0438",permalink:"/ru/docs/29.5/mock-functions"}},i={},l=[{value:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0430\u044f\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0430\u044f\u0441\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",level:2},{value:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",level:2},{value:"\u041e\u0431\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",id:"\u043e\u0431\u0449\u0438\u0435-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",level:2}];function d(e){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",em:"em",admonition:"admonition"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u0427\u0430\u0441\u0442\u043e \u043f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0442\u0435\u0441\u0442\u043e\u0432 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0434\u0435\u043b\u0430\u0442\u044c \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0434\u043e \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u0441\u044f \u0442\u0435\u0441\u0442, \u0438 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u043f\u043e \u0435\u0433\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044e. Jest \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0441\u043f\u043e\u043c\u043e\u0433\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439."}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0430\u044f\u0441\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u041f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0430\u044f\u0441\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,s.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043a\u0430\u043a\u0430\u044f-\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u0434\u043b\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0442\u0435\u0441\u0442\u043e\u0432, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"beforeEach"})," \u0438 ",(0,s.jsx)(n.code,{children:"afterEach"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c, \u0447\u0442\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u0435\u0441\u0442\u043e\u0432 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0442 \u0441 \u0431\u0430\u0437\u043e\u0439 \u0433\u043e\u0440\u043e\u0434\u043e\u0432. \u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"initializeCityDatabase()"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u043d \u043f\u0435\u0440\u0435\u0434 \u043a\u0430\u0436\u0434\u044b\u043c \u0442\u0435\u0441\u0442\u043e\u043c, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043c\u0435\u0442\u043e\u0434 ",(0,s.jsx)(n.code,{children:"clearCityDatabase()"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u044b\u0437\u0432\u0430\u043d \u043f\u043e\u0441\u043b\u0435 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u0438\u0437 \u043d\u0438\u0445. \u042d\u0442\u043e \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  initializeCityDatabase();\n});\n\nafterEach(() => {\n  clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"beforeEach"})," \u0438 ",(0,s.jsx)(n.code,{children:"afterEach"})," \u043c\u043e\u0433\u0443\u0442 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c \u043a\u043e\u0434\u043e\u043c \u0442\u0430\u043a\u0436\u0435, \u043a\u0430\u043a \u044d\u0442\u043e \u0434\u0435\u043b\u0430\u044e\u0442 ",(0,s.jsx)(n.a,{href:"/ru/docs/29.5/asynchronous",children:"\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0435 \u0442\u0435\u0441\u0442\u044b"})," - \u043e\u043d\u0438 \u043c\u043e\u0433\u0443\u0442 \u043b\u0438\u0431\u043e \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u044e ",(0,s.jsx)(n.code,{children:"done"})," \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0430, \u043b\u0438\u0431\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0442\u044c promise. \u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u0435\u0441\u043b\u0438 ",(0,s.jsx)(n.code,{children:"initializeCityDatabase()"})," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 promise, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 resolve, \u043a\u043e\u0433\u0434\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043d\u0438\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0430, \u043d\u0430\u043c \u0431\u044b \u0445\u043e\u0442\u0435\u043b\u043e\u0441\u044c \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u044d\u0442\u043e\u0442 promise:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  return initializeCityDatabase();\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0435\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f-\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u0415\u0434\u0438\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0443\u0436\u043d\u044b \u0435\u0434\u0438\u043d\u043e\u0436\u0434\u044b \u0432 \u043d\u0430\u0447\u0430\u043b\u0435 \u0444\u0430\u0439\u043b\u0430. \u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u044d\u0442\u043e \u043a\u0430\u0441\u0430\u0435\u0442\u0441\u044f \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043a\u043e\u0433\u0434\u0430 \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u0434 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e, \u0438 \u0432\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u0438\u043d\u043b\u0430\u0439\u043d\u0438\u0442\u044c \u0435\u0433\u043e. Jest \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"beforeAll"})," \u0438 ",(0,s.jsx)(n.code,{children:"afterAll"})," \u0434\u043b\u044f \u0442\u0430\u043a\u0438\u0445 \u0441\u043b\u0443\u0447\u0430\u0435\u0432."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0431\u044b \u043e\u0431\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,s.jsx)(n.code,{children:"initializeCityDatabase()"})," \u0438 ",(0,s.jsx)(n.code,{children:"clearCityDatabase()"})," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u043b\u0438 promises, \u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0433\u043b\u0430 \u0431\u044b\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0430 \u043c\u0435\u0436\u0434\u0443 \u0442\u0435\u0441\u0442\u0430\u043c\u0438, \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043d\u0430\u0448 \u0442\u0435\u0441\u0442\u043e\u0432\u044b\u0439 \u043a\u043e\u0434:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeAll(() => {\n  return initializeCityDatabase();\n});\n\nafterAll(() => {\n  return clearCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"}),"\n",(0,s.jsxs)(n.p,{children:["The top level ",(0,s.jsx)(n.code,{children:"before*"})," and ",(0,s.jsx)(n.code,{children:"after*"})," hooks apply to every test in a file. The hooks declared inside a ",(0,s.jsx)(n.code,{children:"describe"})," block apply only to the tests within that ",(0,s.jsx)(n.code,{children:"describe"})," block."]}),"\n",(0,s.jsx)(n.p,{children:"\u041a \u043f\u0440\u0438\u043c\u0435\u0440\u0443, \u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c \u0443 \u043d\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0430\u0437\u0430 \u0433\u043e\u0440\u043e\u0434\u043e\u0432, \u043d\u043e \u0438 \u0431\u0430\u0437\u0430 \u043f\u0440\u043e\u0434\u043e\u0432\u043e\u043b\u044c\u0441\u0442\u0432\u0438\u044f. \u041c\u044b \u043c\u043e\u0433\u043b\u0438 \u0431\u044b \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0443\u044e \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u043a\u0443 \u043a \u0440\u0430\u0437\u043d\u044b\u043c \u0442\u0435\u0441\u0442\u0430\u043c:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u0442\u0435\u0441\u0442\u0430\u043c \u0432 \u044d\u0442\u043e\u043c \u0444\u0430\u0439\u043b\u0435\nbeforeEach(() => {\n  return initializeCityDatabase();\n});\n\ntest('city database has Vienna', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('city database has San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n\ndescribe('matching cities to foods', () => {\n  // \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u043a \u0442\u0435\u0441\u0442\u0430\u043c \u0432 \u044d\u0442\u043e\u043c describe \u0431\u043b\u043e\u043a\u0435\n  beforeEach(() => {\n    return initializeFoodDatabase();\n  });\n\n  test('Vienna <3 veal', () => {\n    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);\n  });\n\n  test('San Juan <3 plantains', () => {\n    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e ",(0,s.jsx)(n.code,{children:"beforeEach"}),", \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0438\u0439\u0441\u044f \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0432\u044b\u0448\u0435, \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u0441\u044f \u0434\u043e ",(0,s.jsx)(n.code,{children:"beforeEach"}),", \u043d\u0430\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 ",(0,s.jsx)(n.code,{children:"describe"})," \u0431\u043b\u043e\u043a\u0430. \u041f\u0440\u0438\u043c\u0435\u0440 \u043d\u0438\u0436\u0435 \u0438\u043b\u043b\u044e\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u0442 \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u0432\u0441\u0435\u0445 \u0431\u043b\u043e\u043a\u043e\u0432 (\u0445\u0443\u043a\u043e\u0432)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeAll(() => console.log('1 - beforeAll'));\nafterAll(() => console.log('1 - afterAll'));\nbeforeEach(() => console.log('1 - beforeEach'));\nafterEach(() => console.log('1 - afterEach'));\ntest('', () => console.log('1 - test'));\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll'));\n  afterAll(() => console.log('2 - afterAll'));\n  beforeEach(() => console.log('2 - beforeEach'));\n  afterEach(() => console.log('2 - afterEach'));\n  test('', () => console.log('2 - test'));\n});\n\n// 1 - beforeAll\n// 1 - beforeEach\n// 1 - test\n// 1 - afterEach\n// 2 - beforeAll\n// 1 - beforeEach\n// 2 - beforeEach\n// 2 - test\n// 2 - afterEach\n// 1 - afterEach\n// 2 - afterAll\n// 1 - afterAll\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u043e\u0440\u044f\u0434\u043e\u043a-\u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f",children:"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["Jest \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 ",(0,s.jsx)(n.code,{children:"describe"})," \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 ",(0,s.jsx)(n.em,{children:"\u0434\u043e \u0442\u043e\u0433\u043e"}),", \u043a\u0430\u043a \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0449\u0435\u043d \u043a\u0430\u043a\u043e\u0439-\u043b\u0438\u0431\u043e \u0442\u0435\u0441\u0442. \u042d\u0442\u043e \u0435\u0449\u0435 \u043e\u0434\u043d\u0430 \u043f\u0440\u0438\u0447\u0438\u043d\u0430, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u0442\u044c \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0438 \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u044e\u0449\u0438\u0435 \u0440\u0430\u0431\u043e\u0442\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 ",(0,s.jsx)(n.code,{children:"before*"})," \u0438 ",(0,s.jsx)(n.code,{children:"after*"}),", \u0432\u043c\u0435\u0441\u0442\u043e \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0442\u044c \u0438\u0445 \u0432\u043d\u0443\u0442\u0440\u0438 \u0431\u043b\u043e\u043a\u043e\u0432 ",(0,s.jsx)(n.code,{children:"describe"}),". \u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0430\u0442\u0441\u044f \u0432\u0441\u0435 ",(0,s.jsx)(n.code,{children:"describe"})," \u0431\u043b\u043e\u043a\u0438, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e Jest \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442 \u0432\u0441\u0435 \u0442\u0435\u0441\u0442\u044b \u043f\u043e\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0432 \u0442\u043e\u043c \u043f\u043e\u0440\u044f\u0434\u043a\u0435, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043e\u043d\u0438 \u0431\u044b\u043b\u0438 \u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u044b \u043d\u0430 \u044d\u0442\u0430\u043f\u0435 \u0441\u0431\u043e\u0440\u0430, \u043e\u0436\u0438\u0434\u0430\u044f, \u043f\u043e\u043a\u0430 \u043a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u043d\u0438\u0445 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0441\u044f \u0438 \u0431\u0443\u0434\u0435\u0442 \u0443\u0431\u0440\u0430\u043d, \u043f\u0440\u0435\u0436\u0434\u0435 \u0447\u0435\u043c \u0434\u0432\u0438\u0433\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043b\u044c\u0448\u0435."]}),"\n",(0,s.jsx)(n.p,{children:"\u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0435\u0433\u043e \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"describe('describe outer', () => {\n  console.log('describe outer-a');\n\n  describe('describe inner 1', () => {\n    console.log('describe inner 1');\n\n    test('test 1', () => console.log('test 1'));\n  });\n\n  console.log('describe outer-b');\n\n  test('test 2', () => console.log('test 2'));\n\n  describe('describe inner 2', () => {\n    console.log('describe inner 2');\n\n    test('test 3', () => console.log('test 3'));\n  });\n\n  console.log('describe outer-c');\n});\n\n// describe outer-a\n// describe inner 1\n// describe outer-b\n// describe inner 2\n// describe outer-c\n// test 1\n// test 2\n// test 3\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Jest \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u0442 \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"before*"})," \u0438 ",(0,s.jsx)(n.code,{children:"after*"})," \u0432 \u043f\u043e\u0440\u044f\u0434\u043a\u0435 \u0438\u0445 \u043e\u0431\u044a\u044f\u0432\u043b\u0435\u043d\u0438\u044f, \u0442\u043e\u0447\u043d\u043e \u0442\u0430\u043a \u0436\u0435, \u043a\u0430\u043a \u0431\u043b\u043e\u043a\u0438 ",(0,s.jsx)(n.code,{children:"describe"})," \u0438 ",(0,s.jsx)(n.code,{children:"test"}),". \u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435, \u0447\u0442\u043e \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0432\u044b\u0437\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u0445\u0443\u043a\u0438 ",(0,s.jsx)(n.code,{children:"after*"})," \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u043e\u0442 \u043a\u0430\u043a \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0438\u0442\u044c \u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0435\u0441\u0443\u0440\u0441\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0437\u0430\u0432\u0438\u0441\u044f\u0442 \u0434\u0440\u0443\u0433 \u043e\u0442 \u0434\u0440\u0443\u0433\u0430:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"beforeEach(() => console.log('connection setup'));\nbeforeEach(() => console.log('database setup'));\n\nafterEach(() => console.log('database teardown'));\nafterEach(() => console.log('connection teardown'));\n\ntest('test 1', () => console.log('test 1'));\n\ndescribe('extra', () => {\n  beforeEach(() => console.log('extra database setup'));\n  afterEach(() => console.log('extra database teardown'));\n\n  test('test 2', () => console.log('test 2'));\n});\n\n// connection setup\n// database setup\n// test 1\n// database teardown\n// connection teardown\n\n// connection setup\n// database setup\n// extra database setup\n// test 2\n// extra database teardown\n// database teardown\n// connection teardown\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["If you are using ",(0,s.jsx)(n.code,{children:"jasmine2"})," test runner, take into account that it calls the ",(0,s.jsx)(n.code,{children:"after*"})," hooks in the reverse order of declaration. To have identical output, the above example should be altered like this:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-diff",children:"  beforeEach(() => console.log('connection setup'));\n+ afterEach(() => console.log('connection teardown'));\n\n  beforeEach(() => console.log('database setup'));\n+ afterEach(() => console.log('database teardown'));\n\n- afterEach(() => console.log('database teardown'));\n- afterEach(() => console.log('connection teardown'));\n\n  // ...\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u043e\u0431\u0449\u0438\u0435-\u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438",children:"\u041e\u0431\u0449\u0438\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u0438"}),"\n",(0,s.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0442\u0435\u0441\u0442 \u043f\u0430\u0434\u0430\u0435\u0442, \u0432 \u043f\u0435\u0440\u0432\u0443\u044e \u043e\u0447\u0435\u0440\u0435\u0434\u044c \u043d\u0443\u0436\u043d\u043e \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c, \u0447\u0442\u043e \u043e\u043d \u043f\u0430\u0434\u0430\u0435\u0442, \u0431\u0443\u0434\u0443\u0447\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c \u0432 \u043e\u0434\u0438\u043d\u043e\u0447\u043a\u0443. \u0412 Jest \u044d\u0442\u043e \u043b\u0435\u0433\u043a\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c: \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043f\u043e\u043c\u0435\u043d\u044f\u0439\u0442\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 ",(0,s.jsx)(n.code,{children:"test"})," \u043d\u0430 ",(0,s.jsx)(n.code,{children:"test.only"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test.only('this will be the only test that runs', () => {\n  expect(true).toBe(false);\n});\n\ntest('this test will not run', () => {\n  expect('A').toBe('A');\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0435\u0441\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0447\u0430\u0441\u0442\u043e \u043f\u0430\u0434\u0430\u0435\u0442 \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043d\u0430\u0431\u043e\u0440\u0430 \u0442\u0435\u0441\u0442\u043e\u0432, \u043d\u043e \u043d\u0435 \u043f\u0430\u0434\u0430\u0435\u0442 \u0431\u0443\u0434\u0443\u0447\u0438 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u043c \u0432 \u043e\u0434\u0438\u043d\u043e\u0447\u043a\u0443, \u0437\u043d\u0430\u0447\u0438\u0442, \u0447\u0442\u043e-\u0442\u043e \u0438\u0437 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0442\u0435\u0441\u0442\u0430 \u043c\u0435\u0448\u0430\u0435\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u043c\u0443. \u0427\u0430\u0441\u0442\u043e \u044d\u0442\u043e \u043b\u0435\u0433\u043a\u043e \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442\u044c, \u043e\u0447\u0438\u0449\u0430\u044f \u043e\u0431\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0432\u043d\u0443\u0442\u0440\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 ",(0,s.jsx)(n.code,{children:"beforeEach"}),". \u0415\u0441\u043b\u0438 \u043d\u0435\u0442 \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043d\u0443\u0436\u043d\u043e \u043b\u0438 \u043e\u0447\u0438\u0449\u0430\u0442\u044c \u043e\u0431\u0449\u0435\u0435 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435, \u043c\u043e\u0436\u043d\u043e \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f ",(0,s.jsx)(n.code,{children:"beforeEach"})," \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u043b\u043e\u0433\u043e\u0432 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>o});var s=t(7378);const a=s.createContext({});function o(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:o(e),s.createElement(a.Provider,{value:r},n)}}}]);
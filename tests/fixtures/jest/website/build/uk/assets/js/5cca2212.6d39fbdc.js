"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2752],{7938:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>d,toc:()=>r});var s=t(4246),o=t(1670);const c={id:"using-matchers",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043c\u0430\u0442\u0447\u0435\u0440\u0456\u0432"},i=void 0,d={unversionedId:"using-matchers",id:"version-29.4/using-matchers",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043c\u0430\u0442\u0447\u0435\u0440\u0456\u0432",description:"Jest \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u0442\u0430\u043a \u0437\u0432\u0430\u043d\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438. \u0426\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043e\u043f\u0438\u0441\u0443\u0454 \u0434\u0435\u044f\u043a\u0456 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438. \u041f\u043e\u0432\u043d\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457 expect API.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.4/UsingMatchers.md",sourceDirName:".",slug:"/using-matchers",permalink:"/uk/docs/29.4/using-matchers",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.4",frontMatter:{id:"using-matchers",title:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f \u043c\u0430\u0442\u0447\u0435\u0440\u0456\u0432"},sidebar:"docs",previous:{title:"\u041f\u043e\u0447\u0430\u0442\u043e\u043a \u0440\u043e\u0431\u043e\u0442\u0438",permalink:"/uk/docs/29.4/getting-started"},next:{title:"\u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0443",permalink:"/uk/docs/29.4/asynchronous"}},l={},r=[{value:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438",id:"\u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0456-\u043c\u0430\u0442\u0447\u0435\u0440\u0438",level:2},{value:"\u041f\u0440\u0430\u0432\u0434\u0438\u0432\u0456\u0441\u0442\u044c",id:"\u043f\u0440\u0430\u0432\u0434\u0438\u0432\u0456\u0441\u0442\u044c",level:2},{value:"\u0427\u0438\u0441\u043b\u0430",id:"\u0447\u0438\u0441\u043b\u0430",level:2},{value:"\u0420\u044f\u0434\u043a\u0438",id:"\u0440\u044f\u0434\u043a\u0438",level:2},{value:"\u041c\u0430\u0441\u0438\u0432\u0438 \u0442\u0430 \u0456\u0442\u0435\u0440\u043e\u0432\u0430\u043d\u0456 \u043e\u0431\u2019\u0454\u043a\u0442\u0438",id:"\u043c\u0430\u0441\u0438\u0432\u0438-\u0442\u0430-\u0456\u0442\u0435\u0440\u043e\u0432\u0430\u043d\u0456-\u043e\u0431\u0454\u043a\u0442\u0438",level:2},{value:"\u0412\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",level:2},{value:"\u0411\u0456\u043b\u044c\u0448\u0435 \u0437\u0430 \u0442\u0435\u043c\u043e\u044e",id:"\u0431\u0456\u043b\u044c\u0448\u0435-\u0437\u0430-\u0442\u0435\u043c\u043e\u044e",level:2}];function a(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",admonition:"admonition",ul:"ul",li:"li"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Jest \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 \u0442\u0430\u043a \u0437\u0432\u0430\u043d\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438 \u0434\u043b\u044f \u0442\u043e\u0433\u043e, \u0449\u043e\u0431 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0440\u0456\u0437\u043d\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438. \u0426\u0435\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043e\u043f\u0438\u0441\u0443\u0454 \u0434\u0435\u044f\u043a\u0456 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438. \u041f\u043e\u0432\u043d\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0438\u0439 \u0432 ",(0,s.jsxs)(n.a,{href:"/uk/docs/29.4/expect",children:["\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457 ",(0,s.jsx)(n.code,{children:"expect"})," API"]}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u0433\u0430\u043b\u044c\u043d\u0456-\u043c\u0430\u0442\u0447\u0435\u0440\u0438",children:"\u0417\u0430\u0433\u0430\u043b\u044c\u043d\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438"}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430\u0439\u043f\u0440\u043e\u0441\u0442\u0456\u0448\u0438\u0439 \u0441\u043f\u043e\u0441\u0456\u0431 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u2013 \u0446\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u043d\u0430 \u0442\u043e\u0447\u043d\u0443 \u0440\u0456\u0432\u043d\u0456\u0441\u0442\u044c."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('two plus two is four', () => {\n  expect(2 + 2).toBe(4);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u0446\u044c\u043e\u043c\u0443 \u043a\u043e\u0434\u0456, ",(0,s.jsx)(n.code,{children:"expect(2 + 2)"}),' \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454 \u043e\u0431\u2019\u0454\u043a\u0442 "\u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u044f". \u042f\u043a \u043f\u0440\u0430\u0432\u0438\u043b\u043e, \u0432\u0430\u043c \u043d\u0435 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0440\u043e\u0431\u0438\u0442\u0438 \u043d\u0456\u0447\u043e\u0433\u043e \u0437 \u0446\u0438\u043c\u0438 \u043e\u0431\u2019\u0454\u043a\u0442\u0430\u043c\u0438, \u043e\u043a\u0440\u0456\u043c \u0432\u0438\u043a\u043b\u0438\u043a\u0443 \u043c\u0430\u0442\u0447\u0435\u0440\u0430 \u0434\u043b\u044f \u043d\u0438\u0445. \u0412 \u0446\u044c\u043e\u043c\u0443 \u043a\u043e\u0434\u0456, ',(0,s.jsx)(n.code,{children:".toBe(4)"})," - \u0446\u0435 \u043c\u0430\u0442\u0447\u0435\u0440. \u041a\u043e\u043b\u0438 Jest \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e, \u0432\u0456\u043d \u0432\u0456\u0434\u0441\u043b\u0456\u0434\u043a\u043e\u0432\u0443\u0454 \u0432\u0441\u0456 \u043c\u0430\u0442\u0447\u0435\u0440\u0438, \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0430 \u044f\u043a\u0438\u0445 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u043b\u0430 \u043f\u043e\u043c\u0438\u043b\u043a\u0443, \u0449\u043e \u0434\u0430\u0454 \u0437\u043c\u043e\u0433\u0443 \u0432\u0438\u0432\u043e\u0434\u0438\u0442\u0438 \u0434\u043b\u044f \u0432\u0430\u0441 \u0437\u0440\u043e\u0437\u0443\u043c\u0456\u043b\u0456 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toBe"})," \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 ",(0,s.jsx)(n.code,{children:"Object.is"})," \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u0438 \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0456\u043d\u043d\u044f. \u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043e\u0431\u2019\u0454\u043a\u0442\u0430, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:" toEqual"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('object assignment', () => {\n  const data = {one: 1};\n  data['two'] = 2;\n  expect(data).toEqual({one: 1, two: 2});\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toEqual"})," \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454 \u043a\u043e\u0436\u043d\u0435 \u043f\u043e\u043b\u0435 \u043e\u0431\u2019\u0454\u043a\u0442\u0430 \u0430\u0431\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u043c\u0430\u0441\u0438\u0432\u0443."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toEqual"})," \u0456\u0433\u043d\u043e\u0440\u0443\u0454 \u043a\u043b\u044e\u0447\u0456 \u043e\u0431'\u0454\u043a\u0442\u0443 \u0437 ",(0,s.jsx)(n.code,{children:"undefined"})," \u0432\u043b\u0430\u0441\u0442\u0438\u0432\u043e\u0441\u0442\u044f\u043c\u0438, ",(0,s.jsx)(n.code,{children:"undefined"})," \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0438 \u043c\u0430\u0441\u0438\u0432\u0443, \u0432\u043c\u0456\u0441\u0442 \u043c\u0430\u0441\u0438\u0432\u0443 \u0430\u0431\u043e \u0440\u043e\u0437\u0431\u0456\u0436\u043d\u0456\u0441\u0442\u044c \u0442\u0438\u043f\u0456\u0432 \u043e\u0431'\u0454\u043a\u0442\u0456\u0432. \u0410\u0431\u0438 \u0446\u0435 \u0432\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:"toStrictEqual"}),"."]})}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u0456\u0441\u0442\u044c \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0456\u043d\u043d\u044f \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,s.jsx)(n.code,{children:"not"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('adding positive numbers is not zero', () => {\n  for (let a = 1; a < 10; a++) {\n    for (let b = 1; b < 10; b++) {\n      expect(a + b).not.toBe(0);\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043f\u0440\u0430\u0432\u0434\u0438\u0432\u0456\u0441\u0442\u044c",children:"\u041f\u0440\u0430\u0432\u0434\u0438\u0432\u0456\u0441\u0442\u044c"}),"\n",(0,s.jsxs)(n.p,{children:["\u0406\u043d\u043a\u043e\u043b\u0438 \u0432 \u0442\u0435\u0441\u0442\u0430\u0445 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0440\u043e\u0437\u0440\u0456\u0437\u043d\u044f\u0442\u0438 ",(0,s.jsx)(n.code,{children:"undefined"}),", ",(0,s.jsx)(n.code,{children:"null"})," \u0456 ",(0,s.jsx)(n.code,{children:"false"}),", \u0430 \u0456\u043d\u043a\u043e\u043b\u0438 \u0457\u0445 \u043d\u0435 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u043e\u0431\u0440\u043e\u0431\u043b\u044f\u0442\u0438 \u043f\u043e-\u0440\u0456\u0437\u043d\u043e\u043c\u0443. Jest \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0432 \u0441\u0435\u0431\u0435 \u0445\u0435\u043b\u043f\u0435\u0440\u0438, \u044f\u043a\u0456 \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442\u044c \u0432\u0430\u043c \u0437\u0440\u043e\u0431\u0438\u0442\u0438 \u0441\u0430\u043c\u0435 \u0442\u0435, \u0449\u043e \u0432\u0430\u043c \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeNull"})," \u043f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"null"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeUndefined"})," \u043f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0442\u0456\u043b\u044c\u043a\u0438 \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeDefined"})," \u043f\u0440\u043e\u0442\u0438\u043b\u0435\u0436\u043d\u0438\u0439 \u0434\u043e ",(0,s.jsx)(n.code,{children:"toBeUndefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeTruthy"})," \u043f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f ",(0,s.jsx)(n.code,{children:"if"})," \u0442\u0440\u0430\u043a\u0442\u0443\u0454 \u044f\u043a true"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeFalsy"})," \u043f\u0456\u0434\u0445\u043e\u0434\u0438\u0442\u044c \u0434\u043b\u044f \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f, \u044f\u043a\u0435 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0446\u0456\u044f ",(0,s.jsx)(n.code,{children:"if"})," \u0442\u0440\u0430\u043a\u0442\u0443\u0454 \u044f\u043a false"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('null', () => {\n  const n = null;\n  expect(n).toBeNull();\n  expect(n).toBeDefined();\n  expect(n).not.toBeUndefined();\n  expect(n).not.toBeTruthy();\n  expect(n).toBeFalsy();\n});\n\ntest('zero', () => {\n  const z = 0;\n  expect(z).not.toBeNull();\n  expect(z).toBeDefined();\n  expect(z).not.toBeUndefined();\n  expect(z).not.toBeTruthy();\n  expect(z).toBeFalsy();\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u0412\u0430\u0440\u0442\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u043c\u0430\u0442\u0447\u0435\u0440\u0438, \u044f\u043a\u0456 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448 \u0442\u043e\u0447\u043d\u043e \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u044e\u0442\u044c \u0442\u043e\u043c\u0443, \u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435, \u0449\u043e\u0431 \u0432\u0430\u0448 \u043a\u043e\u0434 \u0440\u043e\u0431\u0438\u0432."}),"\n",(0,s.jsx)(n.h2,{id:"\u0447\u0438\u0441\u043b\u0430",children:"\u0427\u0438\u0441\u043b\u0430"}),"\n",(0,s.jsx)(n.p,{children:"\u0411\u0456\u043b\u044c\u0448\u0456\u0441\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u0456\u0432 \u0434\u043b\u044f \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0447\u0438\u0441\u0435\u043b \u043c\u0430\u044e\u0442\u044c \u0435\u043a\u0432\u0456\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0438\u0439 \u043c\u0430\u0442\u0447\u0435\u0440."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('two plus two', () => {\n  const value = 2 + 2;\n  expect(value).toBeGreaterThan(3);\n  expect(value).toBeGreaterThanOrEqual(3.5);\n  expect(value).toBeLessThan(5);\n  expect(value).toBeLessThanOrEqual(4.5);\n\n  // toBe \u0456 toEqual \u0435\u043a\u0432\u0456\u0432\u0430\u043b\u0435\u043d\u0442\u043d\u0456 \u0434\u043b\u044f \u0447\u0438\u0441\u0435\u043b\n  expect(value).toBe(4);\n  expect(value).toEqual(4);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u044f \u0447\u0438\u0441\u0435\u043b \u0437 \u043f\u043b\u0430\u0432\u0430\u044e\u0447\u043e\u044e \u043a\u0440\u0430\u043f\u043a\u043e\u044e \u0432\u043e\u043a\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:"toBeCloseTo"})," \u0437\u0430\u043c\u0456\u0441\u0442\u044c ",(0,s.jsx)(n.code,{children:"toEqual"}),". \u0426\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u0432\u0430\u0448\u0438\u043c \u0442\u0435\u0441\u0442\u0430\u043c \u043d\u0435 \u0437\u0430\u043b\u0435\u0436\u0430\u0442\u0438 \u0432\u0456\u0434 \u0434\u0440\u0456\u0431\u043d\u0438\u0445 \u043f\u043e\u043c\u0438\u043b\u043e\u043a \u043e\u043a\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044f."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('adding floating point numbers', () => {\n  const value = 0.1 + 0.2;\n  expect(value).toBe(0.3);    // \u0426\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0446\u044e\u0454 \u0447\u0435\u0440\u0435\u0437 \u043f\u043e\u043c\u0438\u043b\u043a\u0443 \u043e\u043a\u0433\u0440\u0443\u0433\u043b\u0435\u043d\u043d\u044f!\n  expect(value).toBeCloseTo(0.3); // \u0426\u0435 \u0441\u043f\u0440\u0430\u0446\u044e\u0454.\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0440\u044f\u0434\u043a\u0438",children:"\u0420\u044f\u0434\u043a\u0438"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438 \u0440\u044f\u0434\u043a\u0438 \u0437\u0430 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u0438\u043c\u0438 \u0432\u0438\u0440\u0430\u0437\u0430\u043c\u0438 \u0437 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,s.jsx)(n.code,{children:"toMatch"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('there is no I in team', () => {\n  expect('team').not.toMatch(/I/);\n});\n\ntest('but there is a \"stop\" in Christoph', () => {\n  expect('Christoph').toMatch(/stop/);\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u043c\u0430\u0441\u0438\u0432\u0438-\u0442\u0430-\u0456\u0442\u0435\u0440\u043e\u0432\u0430\u043d\u0456-\u043e\u0431\u0454\u043a\u0442\u0438",children:"\u041c\u0430\u0441\u0438\u0432\u0438 \u0442\u0430 \u0456\u0442\u0435\u0440\u043e\u0432\u0430\u043d\u0456 \u043e\u0431\u2019\u0454\u043a\u0442\u0438"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438, \u0447\u0438 \u043c\u0430\u0441\u0438\u0432 \u0430\u0431\u043e \u0456\u0442\u0435\u0440\u043e\u0432\u0430\u043d\u0438\u0439 \u043e\u0431\u2019\u0454\u043a\u0442 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u043f\u0435\u0432\u043d\u0438\u0439 \u0435\u043b\u0435\u043c\u0435\u043d\u0442 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e ",(0,s.jsx)(n.code,{children:"toContain"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const shoppingList = [\n  'diapers',\n  'kleenex',\n  'trash bags',\n  'paper towels',\n  'milk',\n];\n\ntest('the shopping list has milk on it', () => {\n  expect(shoppingList).toContain('milk');\n  expect(new Set(shoppingList)).toContain('milk');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f",children:"\u0412\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f"}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438, \u0447\u0438 \u043f\u0435\u0432\u043d\u0430 \u0444\u0443\u043d\u043a\u0446\u0456\u044f \u043a\u0438\u0434\u0430\u0454 \u0432\u0438\u043a\u043b\u044e\u0447\u0435\u043d\u043d\u044f \u043f\u0456\u0434 \u0447\u0430\u0441 \u0432\u0438\u043a\u043b\u0438\u043a\u0443, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0439\u0442\u0435 ",(0,s.jsx)(n.code,{children:"toThrow"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function compileAndroidCode() {\n  throw new Error('you are using the wrong JDK!');\n}\n\ntest('compiling android goes as expected', () => {\n  expect(() => compileAndroidCode()).toThrow();\n  expect(() => compileAndroidCode()).toThrow(Error);\n\n  // \u0422\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u043d\u0430 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0440\u044f\u0434\u043e\u043a, \u0449\u043e \u043c\u0430\u0454 \u043c\u0456\u0441\u0442\u0438\u0442\u0438\u0441\u044c \u0443 \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u0456 \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0447\u0438 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443 \u0432\u0438\u0440\u0430\u0437\u0456\n  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');\n  expect(() => compileAndroidCode()).toThrow(/JDK/);\n\n  // \u0410\u0431\u043e \u043c\u043e\u0436\u043d\u0430 \u0437\u043d\u0430\u0439\u0442\u0438 \u0442\u043e\u0447\u043d\u0435 \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0456\u043d\u043d\u044f \u0434\u043b\u044f \u043f\u043e\u0432\u0456\u0434\u043e\u043c\u043b\u0435\u043d\u043d\u044f \u043f\u043e\u043c\u0438\u043b\u043a\u0438 \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u0433\u043e \u0432\u0438\u0440\u0430\u0437\u0443, \u044f\u043a \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u043e \u043d\u0438\u0436\u0447\u0435\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // \u0422\u0435\u0441\u0442 \u043f\u0440\u043e\u0432\u0430\u043b\u044e\u0454\u0442\u044c\u0441\u044f\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // \u0422\u0435\u0441\u0442 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u0442\u044c\n});\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["The function that throws an exception needs to be invoked within a wrapping function otherwise the ",(0,s.jsx)(n.code,{children:"toThrow"})," assertion will fail."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0431\u0456\u043b\u044c\u0448\u0435-\u0437\u0430-\u0442\u0435\u043c\u043e\u044e",children:"\u0411\u0456\u043b\u044c\u0448\u0435 \u0437\u0430 \u0442\u0435\u043c\u043e\u044e"}),"\n",(0,s.jsxs)(n.p,{children:["\u0426\u0435 \u043b\u0438\u0448\u0435 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456\u0432. \u0414\u043b\u044f \u043f\u043e\u0432\u043d\u043e\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0443 \u043c\u0430\u0442\u0447\u0435\u0440\u0456\u0432 \u0437\u0432\u0435\u0440\u043d\u0456\u0442\u044c\u0441\u044f \u0434\u043e ",(0,s.jsx)(n.a,{href:"/uk/docs/29.4/expect",children:"\u0434\u043e\u0432\u0456\u0434\u043a\u043e\u0432\u043e\u0457 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u0457"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0425\u043e\u0440\u043e\u0448\u0438\u043c \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0438\u043c \u043a\u0440\u043e\u043a\u043e\u043c \u043c\u043e\u0436\u0435 \u0431\u0443\u0442\u0438 \u0432\u0438\u0432\u0447\u0435\u043d\u043d\u044f \u0442\u043e\u0433\u043e, \u044f\u043a Jest \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 ",(0,s.jsx)(n.a,{href:"/uk/docs/29.4/asynchronous",children:"\u0442\u0435\u0441\u0442\u0443\u0432\u0430\u0442\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0438\u0439 \u043a\u043e\u0434"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(a,e)})):a(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>d,ah:()=>c});var s=t(7378);const o=s.createContext({});function c(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function d({components:e,children:n,disableParentContext:t}){let d;return d=t?"function"==typeof e?e({}):e||i:c(e),s.createElement(o.Provider,{value:d},n)}}}]);
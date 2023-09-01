"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8021],{8898:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var t=n(4246),r=n(1670);const c={id:"tutorial-async",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c\u044e"},a=void 0,i={unversionedId:"tutorial-async",id:"tutorial-async",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c\u044e",description:"\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 Babel \u0432 Jest, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 \u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/ru/docs/next/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"current",frontMatter:{id:"tutorial-async",title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c\u044e"},sidebar:"docs",previous:{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043d\u0438\u043c\u043a\u043e\u0432",permalink:"/ru/docs/next/snapshot-testing"},next:{title:"Timer Mocks",permalink:"/ru/docs/next/timer-mocks"}},o={},l=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a",id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\u0412\u043e-\u043f\u0435\u0440\u0432\u044b\u0445 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 Babel \u0432 Jest, \u043a\u0430\u043a \u043e\u043f\u0438\u0441\u0430\u043d\u043e \u0432 \u0440\u0443\u043a\u043e\u0432\u043e\u0434\u0441\u0442\u0432\u0435 ",(0,t.jsx)(s.a,{href:"/ru/docs/next/getting-started#using-babel",children:"\u041f\u0440\u0438\u0441\u0442\u0443\u043f\u0430\u044f \u043a \u0440\u0430\u0431\u043e\u0442\u0435"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u0437 API \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0412 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u043e\u0439 \u0432\u044b\u0448\u0435 \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u044b \u043e\u0436\u0438\u0434\u0430\u0435\u043c, \u0447\u0442\u043e \u043c\u043e\u0434\u0443\u043b\u044c ",(0,t.jsx)(s.code,{children:"request.js"})," \u0432\u0435\u0440\u043d\u0451\u0442 \u043f\u0440\u043e\u043c\u0438\u0441. \u041c\u044b \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u043c \u0432\u044b\u0437\u043e\u0432 \u0441 ",(0,t.jsx)(s.code,{children:"then"}),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0438\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0422\u0435\u043f\u0435\u0440\u044c \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u043c \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044e ",(0,t.jsx)(s.code,{children:"request.js"}),", \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0438\u0434\u0435\u0442 \u0432 \u0441\u0435\u0442\u044c \u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // \u041f\u0440\u0438\u043c\u0435\u0440 HTTP \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0434\u043b\u044f \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f\n    // \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u0437 API.\n    // \u0414\u043b\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u043c\u043e\u043a \u0438\u0437 __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => data += _data);\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0418\u0437-\u0437\u0430 \u0442\u043e\u0433\u043e \u0447\u0442\u043e \u043c\u044b \u043d\u0435 \u0445\u043e\u0442\u0438\u043c \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a \u0441\u0435\u0442\u0438 \u0432 \u043d\u0430\u0448\u0435\u043c \u0442\u0435\u0441\u0442\u0435, \u043c\u044b \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0441\u043e\u0437\u0434\u0430\u0434\u0438\u043c \u043c\u043e\u043a \u0434\u043b\u044f \u043d\u0430\u0448\u0435\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f ",(0,t.jsx)(s.code,{children:"request.js"})," \u0432 \u043f\u0430\u043f\u043a\u0435 ",(0,t.jsx)(s.code,{children:"__mocks__"})," (\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0430\u043f\u043a\u0438 \u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043a \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443 ",(0,t.jsx)(s.code,{children:"__MOCKS__"})," \u043d\u0435 \u0441\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442). \u041e\u043d \u043c\u043e\u0436\u0435\u0442 \u0432\u044b\u0433\u043b\u044f\u0434\u0435\u0442\u044c \u043f\u0440\u0438\u043c\u0435\u0440\u043d\u043e \u0442\u0430\u043a:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043d\u0430\u043f\u0438\u0448\u0435\u043c \u0442\u0435\u0441\u0442 \u0434\u043b\u044f \u043d\u0430\u0448\u0435\u0439 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// \u0414\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d \u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u043c\u044b\u0439 \u043f\u0440\u043e\u043c\u0438\u0441.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u041c\u044b \u0432\u044b\u0437\u044b\u0432\u0430\u0435\u043c ",(0,t.jsx)(s.code,{children:"jest.mock('../request')"}),", \u0447\u0442\u043e\u0431\u044b \u0443\u043a\u0430\u0437\u0430\u0442\u044c Jest \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430\u0448 \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043a. ",(0,t.jsx)(s.code,{children:"it"})," \u043e\u0436\u0438\u0434\u0430\u0435\u0442, \u0447\u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u043c, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432 \u0438\u0442\u043e\u0433\u0435 \u0431\u0443\u0434\u0435\u0442 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u0442\u043e\u043b\u044c\u043a\u043e \u0446\u0435\u043f\u043e\u0447\u0435\u043a \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432, \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0438 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c ",(0,t.jsx)(s.code,{children:"expect"})," \u0432 \u043b\u044e\u0431\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442, \u043f\u043e\u043a\u0430 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0432\u044b \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u043f\u0440\u043e\u043c\u0438\u0441."]}),"\n",(0,t.jsx)(s.h2,{id:"resolves",children:(0,t.jsx)(s.code,{children:".resolves"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u0435\u043d\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f ",(0,t.jsx)(s.code,{children:"resolves"})," \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u043c\u0438\u0441\u0430 \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043b\u044e\u0431\u044b\u043c \u0434\u0440\u0443\u0433\u0438\u043c \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u0435\u043c. \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u043c\u0438\u0441 \u043e\u0442\u043a\u043b\u043e\u043d\u0451\u043d, \u0442\u043e \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,t.jsxs)(s.h2,{id:"asyncawait",children:[(0,t.jsx)(s.code,{children:"async"}),"/",(0,t.jsx)(s.code,{children:"await"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u0422\u0430\u043a\u0436\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441\u0430 ",(0,t.jsx)(s.code,{children:"async"}),"/",(0,t.jsx)(s.code,{children:"await"}),". \u0412\u043e\u0442 \u0442\u0430\u043a \u043c\u043e\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u043f\u0440\u0438\u043c\u0435\u0440\u044b:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// async/await \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u044b.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["\u0427\u0442\u043e\u0431\u044b \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u044c async/await \u0432 \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,t.jsx)(s.code,{children:"@babel/preset-env"})})," \u0438 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u044d\u0442\u0443 \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432 \u0444\u0430\u0439\u043b\u0435 ",(0,t.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430-\u043e\u0448\u0438\u0431\u043e\u043a",children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043e\u0448\u0438\u0431\u043e\u043a"}),"\n",(0,t.jsxs)(s.p,{children:["\u041e\u0448\u0438\u0431\u043a\u0438 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043f\u043e\u0439\u043c\u0430\u043d\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043c\u0435\u0442\u043e\u0434\u0430 ",(0,t.jsx)(s.code,{children:".catch"}),". \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b ",(0,t.jsx)(s.code,{children:"expect.assertions"}),", \u0447\u0442\u043e\u0431\u044b \u0443\u0431\u0435\u0434\u0438\u0442\u044c\u0441\u044f, \u0447\u0442\u043e \u0432\u044b\u0437\u0432\u0430\u043d\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0435 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0439. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435, \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d\u043d\u044b\u0439 \u043f\u0440\u043e\u043c\u0438\u0441 \u043d\u0435 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0442 \u0442\u0435\u0441\u0442:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e Promise.catch.\nit('\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0435\u0442 \u043e\u0448\u0438\u0431\u043a\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043f\u0440\u043e\u043c\u0438\u0441\u043e\u0432', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: '\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 ID 2 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d.',\n    }),\n  );\n});\n\n// \u0418\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f async/await.\nit('\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a \u0441 async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,t.jsx)(s.h2,{id:"rejects",children:(0,t.jsx)(s.code,{children:".rejects"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:".rejects"})," \u0445\u044d\u043b\u043f\u0435\u0440 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a ",(0,t.jsx)(s.code,{children:".resolves"})," \u0445\u044d\u043b\u043f\u0435\u0440. \u0415\u0441\u043b\u0438 \u043f\u0440\u043e\u043c\u0438\u0441 \u0431\u0443\u0434\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d, \u0442\u043e \u0442\u0435\u0441\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u0440\u0435\u0440\u0432\u0451\u0442\u0441\u044f. ",(0,t.jsx)(s.code,{children:"expect.assertions(number)"})," \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c, \u043d\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0442\u043e\u0447\u043d\u043e\u0433\u043e \u0447\u0438\u0441\u043b\u0430 ",(0,t.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"\u043f\u0440\u043e\u0432\u0435\u0440\u043e\u043a"})," \u0432\u044b\u0437\u0432\u0430\u043d\u043d\u044b\u0445 \u0432\u043e \u0432\u0440\u0435\u043c\u044f \u0442\u0435\u0441\u0442\u0430. \u0412 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u043e\u043c \u0441\u043b\u0443\u0447\u0430\u0435 \u043b\u0435\u0433\u043a\u043e \u0437\u0430\u0431\u044b\u0442\u044c ",(0,t.jsx)(s.code,{children:"return"}),"/",(0,t.jsx)(s.code,{children:"await"})," \u0432 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0430\u0445 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c ",(0,t.jsx)(s.code,{children:".resolves"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// \u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u0445 \u043e\u0448\u0438\u0431\u043e\u043a \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e `.rejects`.\nit('\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a \u0441 rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// \u0418\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 async/await \u0441 `.rejects`.\nit('\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0448\u0438\u0431\u043e\u043a \u0441 async/await \u0438 rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The code for this example is available at ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0442\u0430\u0439\u043c\u0435\u0440\u044b, \u043a\u0430\u043a, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,t.jsx)(s.code,{children:"setTimeout"}),", \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u043d\u0430 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044e ",(0,t.jsx)(s.a,{href:"/ru/docs/next/timer-mocks",children:"Timer mocks"}),"."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>c});var t=n(7378);const r=t.createContext({});function c(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:c(e),t.createElement(r.Provider,{value:i},s)}}}]);
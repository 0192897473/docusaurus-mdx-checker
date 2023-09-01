"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6927],{5049:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=t(4246),r=t(1670);const a={id:"tutorial-async",title:"\u5f02\u6b65\u793a\u4f8b"},o=void 0,i={unversionedId:"tutorial-async",id:"version-29.6/tutorial-async",title:"\u5f02\u6b65\u793a\u4f8b",description:"\u9996\u5148, \u50cf Getting Started \u91cc\u9762\u6240\u8bf4\u7684\u90a3\u6837, \u542f\u7528babel\u7684\u652f\u6301",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-29.6/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/zh-Hans/docs/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.6",frontMatter:{id:"tutorial-async",title:"\u5f02\u6b65\u793a\u4f8b"},sidebar:"docs",previous:{title:"\u5feb\u7167\u6d4b\u8bd5",permalink:"/zh-Hans/docs/snapshot-testing"},next:{title:"\u8ba1\u65f6\u5668\u6a21\u62df",permalink:"/zh-Hans/docs/timer-mocks"}},c={},l=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"\u9519\u8bef\u5904\u7406",id:"\u9519\u8bef\u5904\u7406",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u9996\u5148, \u50cf ",(0,n.jsx)(s.a,{href:"/zh-Hans/docs/getting-started#using-babel",children:"Getting Started"})," \u91cc\u9762\u6240\u8bf4\u7684\u90a3\u6837, \u542f\u7528babel\u7684\u652f\u6301"]}),"\n",(0,n.jsx)(s.p,{children:"Let's implement a module that fetches user data from an API and returns the user name."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In the above implementation, we expect the ",(0,n.jsx)(s.code,{children:"request.js"})," module to return a promise. We chain a call to ",(0,n.jsx)(s.code,{children:"then"})," to receive the user name. We chain a call to ",(0,n.jsx)(s.code,{children:"then"})," to receive the user name."]}),"\n",(0,n.jsxs)(s.p,{children:["Now imagine an implementation of ",(0,n.jsx)(s.code,{children:"request.js"})," that goes to the network and fetches some user data:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // This module is being mocked in __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Because we don't want to go to the network in our test, we are going to create a manual mock for our ",(0,n.jsx)(s.code,{children:"request.js"})," module in the ",(0,n.jsx)(s.code,{children:"__mocks__"})," folder (the folder is case-sensitive, ",(0,n.jsx)(s.code,{children:"__MOCKS__"})," will not work). \u5c31\u50cf\u662f\u8fd9\u6837: \u5c31\u50cf\u662f\u8fd9\u6837:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"\u73b0\u5728\u6211\u4eec\u5c31\u6765\u7f16\u5199\u6211\u4eec\u7684\u5f02\u6b65\u51fd\u6570\u7684\u6d4b\u8bd5"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["\u6211\u4eec\u8c03\u7528 ",(0,n.jsx)(s.code,{children:"jest.mock('../request ')"})," \u544a\u8bc9jest \u4f7f\u7528\u6211\u4eec\u624b\u52a8\u7684\u521b\u5efa\u7684\u6a21\u62df\u6570\u636e\u3002 \u901a\u8fc7 ",(0,n.jsx)(s.code,{children:"resolves"}),"\u80fd\u66f4\u52a0\u7b80\u5355\u5730\u89e3\u6790\u4e00\u4e2afulfilled \u6001\u7684 Promise\u7684\u8fd4\u56de\u503c. \u5982\u679cPromise\u662frejected\u6001\u7684\u8bdd, \u65ad\u8a00\u5c06\u4f1a\u8fd4\u56de\u5931\u8d25. ",(0,n.jsx)(s.code,{children:"it"})," \u65ad\u8a00\u7684\u662f\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2aPromise\u5bf9\u8c61. You can chain as many Promises as you like and call ",(0,n.jsx)(s.code,{children:"expect"})," at any time, as long as you return a Promise at the end."]}),"\n",(0,n.jsx)(s.h2,{id:"resolves",children:(0,n.jsx)(s.code,{children:".resolves"})}),"\n",(0,n.jsxs)(s.p,{children:["There is a less verbose way using ",(0,n.jsx)(s.code,{children:"resolves"})," to unwrap the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"asyncawait",children:[(0,n.jsx)(s.code,{children:"async"}),"/",(0,n.jsx)(s.code,{children:"await"})]}),"\n",(0,n.jsxs)(s.p,{children:["Writing tests using the ",(0,n.jsx)(s.code,{children:"async"}),"/",(0,n.jsx)(s.code,{children:"await"})," syntax is also possible. Here is how you'd write the same examples from before: Here is how you'd write the same examples from before:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// \u4f7f\u7528async/await\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To enable async/await in your project, install ",(0,n.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,n.jsx)(s.code,{children:"@babel/preset-env"})})," and enable the feature in your ",(0,n.jsx)(s.code,{children:"babel.config.js"})," file."]}),"\n",(0,n.jsx)(s.h2,{id:"\u9519\u8bef\u5904\u7406",children:"\u9519\u8bef\u5904\u7406"}),"\n",(0,n.jsxs)(s.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,n.jsx)(s.code,{children:".catch"})," \u65b9\u6cd5\u5904\u7406\u9519\u8bef\u3002 \u8bf7\u786e\u4fdd\u6dfb\u52a0 ",(0,n.jsx)(s.code,{children:"expect.assertions"})," \u6765\u9a8c\u8bc1\u4e00\u5b9a\u6570\u91cf\u7684\u65ad\u8a00\u88ab\u8c03\u7528\u3002 \u5426\u5219\u4e00\u4e2afulfilled\u6001\u7684Promise \u4e0d\u4f1a\u8ba9\u6d4b\u8bd5\u5931\u8d25\ufe30"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"//\u7528 Promise.catch \u6d4b\u8bd5\u4e00\u4e2a\u5f02\u6b65\u7684\u9519\u8bef\n//\u7528 Promise.catch \u6d4b\u8bd5\u4e00\u4e2a\u5f02\u6b65\u7684\u9519\u8bef\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,n.jsx)(s.h2,{id:"rejects",children:(0,n.jsx)(s.code,{children:".rejects"})}),"\n",(0,n.jsxs)(s.p,{children:["The",(0,n.jsx)(s.code,{children:".rejects"})," helper works like the ",(0,n.jsx)(s.code,{children:".resolves"})," helper. \u5982\u679c Promise \u88ab\u62d2\u7edd\uff0c\u5219\u6d4b\u8bd5\u5c06\u81ea\u52a8\u5931\u8d25\u3002 \u5982\u679c Promise \u88ab\u62d2\u7edd\uff0c\u5219\u6d4b\u8bd5\u5c06\u81ea\u52a8\u5931\u8d25\u3002 ",(0,n.jsx)(s.code,{children:"expect.assertions(number)"})," is not required but recommended to verify that a certain number of ",(0,n.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"})," are called during a test. It is otherwise easy to forget to ",(0,n.jsx)(s.code,{children:"return"}),"/",(0,n.jsx)(s.code,{children:"await"})," the ",(0,n.jsx)(s.code,{children:".resolves"})," assertions."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// \u7528`.rejects`.\u6765\u6d4b\u8bd5\u4e00\u4e2a\u5f02\u6b65\u7684\u9519\u8bef\n// \u7528`.rejects`.\u6765\u6d4b\u8bd5\u4e00\u4e2a\u5f02\u6b65\u7684\u9519\u8bef\nit('tests error with rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// \u6216\u8005\u4e0easync/await \u4e00\u8d77\u4f7f\u7528 `.rejects`.\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The code for this example is available at ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["If you'd like to test timers, like ",(0,n.jsx)(s.code,{children:"setTimeout"}),", take a look at the ",(0,n.jsx)(s.a,{href:"/zh-Hans/docs/timer-mocks",children:"Timer mocks"})," documentation."]})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},1670:(e,s,t)=>{t.d(s,{Zo:()=>i,ah:()=>a});var n=t(7378);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function i({components:e,children:s,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:a(e),n.createElement(r.Provider,{value:i},s)}}}]);
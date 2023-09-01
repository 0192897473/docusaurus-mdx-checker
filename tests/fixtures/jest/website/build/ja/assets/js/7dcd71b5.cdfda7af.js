"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4485],{6763:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=n(4246),t=n(1670);const c={id:"tutorial-async",title:"\u975e\u540c\u671f\u306e\u4e8b\u4f8b"},a=void 0,i={unversionedId:"tutorial-async",id:"version-29.5/tutorial-async",title:"\u975e\u540c\u671f\u306e\u4e8b\u4f8b",description:"\u307e\u305a\u3001Getting Started \u30ac\u30a4\u30c9\u306b\u7e8f\u3081\u3089\u308c\u3066\u3044\u308b\u3088\u3046\u306b Jest \u3067 Babel \u306e\u30b5\u30dd\u30fc\u30c8\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-29.5/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/ja/docs/29.5/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"29.5",frontMatter:{id:"tutorial-async",title:"\u975e\u540c\u671f\u306e\u4e8b\u4f8b"},sidebar:"docs",previous:{title:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",permalink:"/ja/docs/29.5/snapshot-testing"},next:{title:"\u30bf\u30a4\u30de\u30fc\u30e2\u30c3\u30af",permalink:"/ja/docs/29.5/timer-mocks"}},o={},d=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"\u30a8\u30e9\u30fc\u51e6\u7406",id:"\u30a8\u30e9\u30fc\u51e6\u7406",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function l(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["\u307e\u305a\u3001",(0,r.jsx)(s.a,{href:"/ja/docs/29.5/getting-started#using-babel",children:"Getting Started"})," \u30ac\u30a4\u30c9\u306b\u7e8f\u3081\u3089\u308c\u3066\u3044\u308b\u3088\u3046\u306b Jest \u3067 Babel \u306e\u30b5\u30dd\u30fc\u30c8\u3092\u6709\u52b9\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.p,{children:"API\u304b\u3089\u30e6\u30fc\u30b6\u306e\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3057\u3066\u30e6\u30fc\u30b6\u540d\u3092\u8fd4\u3059\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u5b9f\u88c5\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u4e0a\u8a18\u306e\u5b9f\u88c5\u3067\u306f\u3001",(0,r.jsx)(s.code,{children:"request.js"}),"\u30e2\u30b8\u30e5\u30fc\u30eb\u304cpromise\u3092\u8fd4\u5374\u3057\u307e\u3059\u3002 \u305d\u308c\u306b\u30c1\u30a7\u30fc\u30f3\u3057\u3066",(0,r.jsx)(s.code,{children:"then"}),"\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u30e6\u30fc\u30b6\u30fc\u540d\u3092\u53d7\u3051\u53d6\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(s.p,{children:["\u3053\u3053\u3067\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u7d4c\u7531\u3067\u30e6\u30fc\u30b6\u306e\u30c7\u30fc\u30bf\u3092\u53d6\u5f97\u3059\u308b ",(0,r.jsx)(s.code,{children:"request.js"})," \u306e\u5b9f\u88c5\u3092\u60f3\u50cf\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // This module is being mocked in __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u30c6\u30b9\u30c8\u3067\u306f\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3078\u306e\u63a5\u7d9a\u306f\u884c\u3044\u305f\u304f\u306a\u3044\u306e\u3067\u3001 ",(0,r.jsx)(s.code,{children:"request.js"}),"\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af\u3092",(0,r.jsx)(s.code,{children:"__mocks__"}),"\u30d5\u30a9\u30eb\u30c0\u306b\u4f5c\u6210\u3059\u308b\u3053\u3068\u306b\u3057\u307e\u3059\uff08\u3053\u306e\u30d5\u30a9\u30eb\u30c0\u540d\u306f\u5c0f\u6587\u5b57\u306e\u5fc5\u8981\u304c\u3042\u308a\u3001",(0,r.jsx)(s.code,{children:"__MOCKS__"})," \u3067\u306f\u52d5\u4f5c\u3057\u307e\u305b\u3093\uff09\u3002 \u3053\u3093\u306a\u611f\u3058\u306e\u3082\u306e\u3067\u3057\u3087\u3046\u304b:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u6b21\u306b\u975e\u540c\u671f\u6a5f\u80fd\u306e\u30c6\u30b9\u30c8\u3092\u66f8\u3044\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af\u3092\u4f7f\u7528\u3059\u308b\u3088\u3046\u306b",(0,r.jsx)(s.code,{children:"jest.mock('../request')"}),"\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002 ",(0,r.jsx)(s.code,{children:"it"}),"\u306f\u623b\u308a\u5024\u304c\u89e3\u6c7a\u3055\u308c\u3088\u3046\u3068\u3057\u3066\u3044\u308bPromise\u3067\u3042\u308b\u3053\u3068\u3092\u671f\u5f85\u3057\u307e\u3059\u3002 \u6700\u5f8c\u306bPromise\u3092\u8fd4\u3059\u9650\u308a\u3001\u4efb\u610f\u306e\u6570\u3060\u3051Promise\u3092\u30c1\u30a7\u30fc\u30f3\u3057\u3066\u4efb\u610f\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067",(0,r.jsx)(s.code,{children:"expect"})," \u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"resolves",children:(0,r.jsx)(s.code,{children:".resolves"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"resolves"}),"\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u4ed6\u306e\u3044\u304b\u306a\u308b\u30de\u30c3\u30c1\u30e3\u3068\u5171\u306b\u6210\u529f\u3057\u305fpromise\u306e\u5024\u3092\u53d6\u308a\u51fa\u3059\u305f\u3081\u306e\u8a18\u8ff0\u91cf\u3092\u6e1b\u3089\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 promise\u304creject\u3055\u308c\u305f\u5834\u5408\u306f\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u306f\u5931\u6557\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"asyncawait",children:[(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"}),"\u30b7\u30f3\u30bf\u30c3\u30af\u30b9\u3092\u4f7f\u7528\u3057\u305f\u30c6\u30b9\u30c8\u3082\u53ef\u80fd\u3067\u3059\u3002 \u4ee5\u4e0b\u306b\u524d\u8ff0\u3057\u305f\u4f8b\u3068\u540c\u3058\u3082\u306e\u3092",(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"}),"\u3067\u3069\u306e\u3088\u3046\u306b\u66f8\u304f\u304b\u3092\u793a\u3057\u307e\u3059:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// async/await can be used.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067",(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"}),"\u3092\u6709\u52b9\u306b\u3059\u308b\u306b\u306f\u3001",(0,r.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,r.jsx)(s.code,{children:"@babel-preset-env"})}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001 ",(0,r.jsx)(s.code,{children:"babel.config.js"}),"\u30d5\u30a1\u30a4\u30eb\u3067\u6a5f\u80fd\u3092\u6709\u52b9\u5316\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(s.h2,{id:"\u30a8\u30e9\u30fc\u51e6\u7406",children:"\u30a8\u30e9\u30fc\u51e6\u7406"}),"\n",(0,r.jsxs)(s.p,{children:["\u30a8\u30e9\u30fc\u306f ",(0,r.jsx)(s.code,{children:".catch"})," \u30e1\u30bd\u30c3\u30c9\u3067\u51e6\u7406\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u60f3\u5b9a\u3057\u305f\u6570\u306e\u30a2\u30b5\u30fc\u30b7\u30e7\u30f3\u304c\u547c\u3070\u308c\u305f\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u305f\u3081\u3001",(0,r.jsx)(s.code,{children:"expect.assertions"}),"\u3092\u5fc5\u305a\u8ffd\u52a0\u3057\u3066\u4e0b\u3055\u3044\u3002 \u3055\u3082\u306a\u3051\u308c\u3070promise\u304creject\u3055\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u306b\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3057\u305f\u3068\u5224\u5b9a\u3055\u308c\u307e\u305b\u3093:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using Promise.catch.\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,r.jsx)(s.h2,{id:"rejects",children:(0,r.jsx)(s.code,{children:".rejects"})}),"\n",(0,r.jsxs)(s.p,{children:["\u3053\u306e",(0,r.jsx)(s.code,{children:".rejects"})," \u30d8\u30eb\u30d1\u30fc\u306f",(0,r.jsx)(s.code,{children:".resolves"})," \u30d8\u30eb\u30d1\u30fc\u3068\u540c\u69d8\u306b\u52d5\u4f5c\u3057\u307e\u3059\u3002 promise\u304c\u6210\u529f\u3057\u305f\u5834\u5408\u306f\u3001\u30c6\u30b9\u30c8\u306f\u81ea\u52d5\u7684\u306b\u5931\u6557\u3057\u307e\u3059\u3002 ",(0,r.jsx)(s.code,{children:"expect.assertions(number)"})," \u306f\u5fc5\u9808\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u304c\u3001\u30c6\u30b9\u30c8\u4e2d\u306b\u7279\u5b9a\u306e\u6570\u306e",(0,r.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"}),"\u304c\u547c\u3073\u51fa\u3055\u308c\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002 \u3053\u308c\u3092\u5229\u7528\u3059\u308b\u7406\u7531\u3068\u3057\u3066\u306f\u3001 ",(0,r.jsx)(s.code,{children:".resolves"})," \u306e\u7d50\u679c\u3092",(0,r.jsx)(s.code,{children:"return"}),"/",(0,r.jsx)(s.code,{children:"await"})," \u3059\u308b\u3053\u3068\u3092\u5fd8\u308c\u3066\u3057\u307e\u3046\u3053\u3068\u304c\u826f\u304f\u3042\u308b\u304b\u3089\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using `.rejects`.\nit('tests error with rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// Or using async/await with `.rejects`.\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The code for this example is available at ",(0,r.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"setTimeout"})," \u306e\u3088\u3046\u306a\u30bf\u30a4\u30de\u30fc\u3092\u30c6\u30b9\u30c8\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,r.jsx)(s.a,{href:"/ja/docs/29.5/timer-mocks",children:"Timer mocks"})," \u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u8aad\u3093\u3067\u4e0b\u3055\u3044\u3002"]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>c});var r=n(7378);const t=r.createContext({});function c(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||a:c(e),r.createElement(t.Provider,{value:i},s)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5328],{7368:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=t(4246),r=t(1670);const a={id:"tutorial-async",title:"Un exemplu asincron"},i=void 0,o={unversionedId:"tutorial-async",id:"version-29.4/tutorial-async",title:"Un exemplu asincron",description:"\xcen primul r\xe2nd, activeaz\u0103 suportul Babel \xeen Jest dup\u0103 documenta\u021bia din ghidul No\u0163iuni de baz\u0103.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/version-29.4/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/ro/docs/29.4/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"29.4",frontMatter:{id:"tutorial-async",title:"Un exemplu asincron"},sidebar:"docs",previous:{title:"Testarea de imagine",permalink:"/ro/docs/29.4/snapshot-testing"},next:{title:"Dubluri de timp",permalink:"/ro/docs/29.4/timer-mocks"}},c={},l=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"Tratarea erorilor",id:"tratarea-erorilor",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\xcen primul r\xe2nd, activeaz\u0103 suportul Babel \xeen Jest dup\u0103 documenta\u021bia din ghidul ",(0,n.jsx)(s.a,{href:"/ro/docs/29.4/getting-started#using-babel",children:"No\u0163iuni de baz\u0103"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Let's implement a module that fetches user data from an API and returns the user name."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["In the above implementation, we expect the ",(0,n.jsx)(s.code,{children:"request.js"})," module to return a promise. We chain a call to ",(0,n.jsx)(s.code,{children:"then"})," to receive the user name."]}),"\n",(0,n.jsxs)(s.p,{children:["Now imagine an implementation of ",(0,n.jsx)(s.code,{children:"request.js"})," that goes to the network and fetches some user data:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // This module is being mocked in __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Because we don't want to go to the network in our test, we are going to create a manual mock for our ",(0,n.jsx)(s.code,{children:"request.js"})," module in the ",(0,n.jsx)(s.code,{children:"__mocks__"})," folder (the folder is case-sensitive, ",(0,n.jsx)(s.code,{children:"__MOCKS__"})," will not work). Acesta ar putea ar\u0103ta \xeen felul urm\u0103tor:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,n.jsx)(s.p,{children:"Acum haide\u021bi sa scriem un test pentru func\u0163ionalitatea noastr\u0103 asincron\u0103."}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Apel\u0103m ",(0,n.jsx)(s.code,{children:"jest.mock('.. /request')"})," s\u0103-i spunem lui Jest s\u0103 foloseasc\u0103 mock-ul nostru creat manual. Se a\u015fteapt\u0103 ca valoarea returnat\u0103 s\u0103 fie o promisiune care urmeaz\u0103 s\u0103 fie rezolvat\u0103. You can chain as many Promises as you like and call ",(0,n.jsx)(s.code,{children:"expect"})," at any time, as long as you return a Promise at the end."]}),"\n",(0,n.jsx)(s.h2,{id:"resolves",children:(0,n.jsx)(s.code,{children:".resolves"})}),"\n",(0,n.jsxs)(s.p,{children:["There is a less verbose way using ",(0,n.jsx)(s.code,{children:"resolves"})," to unwrap the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,n.jsxs)(s.h2,{id:"asyncawait",children:[(0,n.jsx)(s.code,{children:"async"}),"/",(0,n.jsx)(s.code,{children:"await"})]}),"\n",(0,n.jsxs)(s.p,{children:["Writing tests using the ",(0,n.jsx)(s.code,{children:"async"}),"/",(0,n.jsx)(s.code,{children:"await"})," syntax is also possible. Here is how you'd write the same examples from before:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// async/await can be used.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To enable async/await in your project, install ",(0,n.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,n.jsx)(s.code,{children:"@babel/preset-env"})})," and enable the feature in your ",(0,n.jsx)(s.code,{children:"babel.config.js"})," file."]}),"\n",(0,n.jsx)(s.h2,{id:"tratarea-erorilor",children:"Tratarea erorilor"}),"\n",(0,n.jsxs)(s.p,{children:["Erorile pot fi tratate prin metoda ",(0,n.jsx)(s.code,{children:".catch"}),". Asigura\u0163i-v\u0103 c\u0103 utiliza\u021bi ",(0,n.jsx)(s.code,{children:"expect.assertions"})," pentru a verifica c\u0103 un anumit num\u0103r de aser\u021biuni sunt executate. Altfel o promisiune rezolvat\u0103 nu ar e\u015fua testul:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using Promise.catch.\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,n.jsx)(s.h2,{id:"rejects",children:(0,n.jsx)(s.code,{children:".rejects"})}),"\n",(0,n.jsxs)(s.p,{children:["The",(0,n.jsx)(s.code,{children:".rejects"})," helper works like the ",(0,n.jsx)(s.code,{children:".resolves"})," helper. \xcen cazul \xeen care promisiunea este \xeendeplinit\u0103, testul va e\u015fua automat. ",(0,n.jsx)(s.code,{children:"expect.assertions(number)"})," is not required but recommended to verify that a certain number of ",(0,n.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"})," are called during a test. It is otherwise easy to forget to ",(0,n.jsx)(s.code,{children:"return"}),"/",(0,n.jsx)(s.code,{children:"await"})," the ",(0,n.jsx)(s.code,{children:".resolves"})," assertions."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using `.rejects`.\nit('tests error with rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// Or using async/await with `.rejects`.\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The code for this example is available at ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["If you'd like to test timers, like ",(0,n.jsx)(s.code,{children:"setTimeout"}),", take a look at the ",(0,n.jsx)(s.a,{href:"/ro/docs/29.4/timer-mocks",children:"Timer mocks"})," documentation."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},1670:(e,s,t)=>{t.d(s,{Zo:()=>o,ah:()=>a});var n=t(7378);const r=n.createContext({});function a(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:a(e),n.createElement(r.Provider,{value:o},s)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5513],{8905:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(4246),t=n(1670);const a={id:"tutorial-async",title:"Un ejemplo de Async"},o=void 0,i={unversionedId:"tutorial-async",id:"version-29.6/tutorial-async",title:"Un ejemplo de Async",description:"En primer lugar, habilita el soporte de Babel en Jest como se indica en la gu\xeda.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/version-29.6/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/es-ES/docs/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.6",frontMatter:{id:"tutorial-async",title:"Un ejemplo de Async"},sidebar:"docs",previous:{title:"Test con Instant\xe1nea",permalink:"/es-ES/docs/snapshot-testing"},next:{title:"Mocks Temporizados",permalink:"/es-ES/docs/timer-mocks"}},c={},l=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"Manejo de errores",id:"manejo-de-errores",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,t.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:["En primer lugar, habilita el soporte de Babel en Jest como se indica en ",(0,r.jsx)(s.a,{href:"/es-ES/docs/getting-started#using-babel",children:"la gu\xeda"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Vamos a implementar un m\xf3dulo que extraiga datos de usuario de una API y devuelva el nombre de usuario."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["En la implementaci\xf3n anterior, esperamos que el m\xf3dulo ",(0,r.jsx)(s.code,{children:"request.js"})," devuelva una promesa. We chain a call to ",(0,r.jsx)(s.code,{children:"then"})," to receive the user name."]}),"\n",(0,r.jsxs)(s.p,{children:["Now imagine an implementation of ",(0,r.jsx)(s.code,{children:"request.js"})," that goes to the network and fetches some user data:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // This is an example of an http request, for example to fetch\n    // user data from an API.\n    // This module is being mocked in __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Because we don't want to go to the network in our test, we are going to create a manual mock for our ",(0,r.jsx)(s.code,{children:"request.js"})," module in the ",(0,r.jsx)(s.code,{children:"__mocks__"})," folder (the folder is case-sensitive, ",(0,r.jsx)(s.code,{children:"__MOCKS__"})," will not work). Podr\xeda ser algo como esto:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `User with ${userID} not found.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,r.jsx)(s.p,{children:"Ahora vamos a escribir un test para nuestra funcionalidad as\xedncrona."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// The assertion for a promise must be returned.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["Llamamos ",(0,r.jsx)(s.code,{children:"jest.mock('.. /request ')"})," a Jest a utilizar nuestro mock manual. Se espera ",(0,r.jsx)(s.code,{children:"it"})," que el valor devuelto a una promise que va a resolverse. You can chain as many Promises as you like and call ",(0,r.jsx)(s.code,{children:"expect"})," at any time, as long as you return a Promise at the end."]}),"\n",(0,r.jsx)(s.h2,{id:"resolves",children:(0,r.jsx)(s.code,{children:".resolves"})}),"\n",(0,r.jsxs)(s.p,{children:["There is a less verbose way using ",(0,r.jsx)(s.code,{children:"resolves"})," to unwrap the value of a fulfilled promise together with any other matcher. If the promise is rejected, the assertion will fail."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"asyncawait",children:[(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"})]}),"\n",(0,r.jsxs)(s.p,{children:["Writing tests using the ",(0,r.jsx)(s.code,{children:"async"}),"/",(0,r.jsx)(s.code,{children:"await"})," syntax is also possible. Here is how you'd write the same examples from before:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// async/await can be used.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["To enable async/await in your project, install ",(0,r.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,r.jsx)(s.code,{children:"@babel/preset-env"})})," and enable the feature in your ",(0,r.jsx)(s.code,{children:"babel.config.js"})," file."]}),"\n",(0,r.jsx)(s.h2,{id:"manejo-de-errores",children:"Manejo de errores"}),"\n",(0,r.jsxs)(s.p,{children:["Los errores pueden ser gestionados usando el m\xe9todo ",(0,r.jsx)(s.code,{children:".catch"}),". Aseg\xfarate de a\xf1adir ",(0,r.jsx)(s.code,{children:"expect.assertions"})," para verificar que un cierto n\xfamero de afirmaciones est\xe1n siendo llamadas. De lo contrario una promesa cumplida no har\xe1 que el test falle:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using Promise.catch.\nit('tests error with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'User with 2 not found.',\n    }),\n  );\n});\n\n// Or using async/await.\nit('tests error with async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'User with 1 not found.',\n    });\n  }\n});\n"})}),"\n",(0,r.jsx)(s.h2,{id:"rejects",children:(0,r.jsx)(s.code,{children:".rejects"})}),"\n",(0,r.jsxs)(s.p,{children:["The",(0,r.jsx)(s.code,{children:".rejects"})," helper works like the ",(0,r.jsx)(s.code,{children:".resolves"})," helper. Si se cumple la promesa, el test fallar\xe1 autom\xe1ticamente. ",(0,r.jsx)(s.code,{children:"expect.assertions(number)"})," is not required but recommended to verify that a certain number of ",(0,r.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"})," are called during a test. It is otherwise easy to forget to ",(0,r.jsx)(s.code,{children:"return"}),"/",(0,r.jsx)(s.code,{children:"await"})," the ",(0,r.jsx)(s.code,{children:".resolves"})," assertions."]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-js",children:"// Testing for async errors using `.rejects`.\nit('tests error with rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n\n// Or using async/await with `.rejects`.\nit('tests error with async/await and rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'User with 3 not found.',\n  });\n});\n"})}),"\n",(0,r.jsxs)(s.p,{children:["The code for this example is available at ",(0,r.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If you'd like to test timers, like ",(0,r.jsx)(s.code,{children:"setTimeout"}),", take a look at the ",(0,r.jsx)(s.a,{href:"/es-ES/docs/timer-mocks",children:"Timer mocks"})," documentation."]})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>a});var r=n(7378);const t=r.createContext({});function a(e){const s=r.useContext(t);return r.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||o:a(e),r.createElement(t.Provider,{value:i},s)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5132],{9807:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(4246),r=n(1670);const a={id:"tutorial-async",title:"Un exemple Async"},i=void 0,o={unversionedId:"tutorial-async",id:"version-29.5/tutorial-async",title:"Un exemple Async",description:"Tout d\u2019abord, activez le support de Babel dans Jest comme indiqu\xe9 dans le guide Mise en route.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-29.5/TutorialAsync.md",sourceDirName:".",slug:"/tutorial-async",permalink:"/fr/docs/29.5/tutorial-async",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.5",frontMatter:{id:"tutorial-async",title:"Un exemple Async"},sidebar:"docs",previous:{title:"Test Snapshot",permalink:"/fr/docs/29.5/snapshot-testing"},next:{title:"Simulateurs de temporisation",permalink:"/fr/docs/29.5/timer-mocks"}},c={},l=[{value:"<code>.resolves</code>",id:"resolves",level:2},{value:"<code>async</code>/<code>await</code>",id:"asyncawait",level:2},{value:"Gestion des erreurs",id:"gestion-des-erreurs",level:2},{value:"<code>.rejects</code>",id:"rejects",level:2}];function u(e){const s=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Tout d\u2019abord, activez le support de Babel dans Jest comme indiqu\xe9 dans le guide ",(0,t.jsx)(s.a,{href:"/fr/docs/29.5/getting-started#using-babel",children:"Mise en route"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Impl\xe9mentons un module qui r\xe9cup\xe8re les donn\xe9es utilisateur d'une API et retourne le nom de l'utilisateur."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="user.js"',children:"import request from './request';\n\nexport function getUserName(userID) {\n  return request(`/users/${userID}`).then(user => user.name);\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Dans l'impl\xe9mentation ci-dessus, nous attendons du module ",(0,t.jsx)(s.code,{children:"request.js"})," qu'il renvoie une promesse. Nous encha\xeenons un appel \xe0 ",(0,t.jsx)(s.code,{children:"then"})," pour recevoir le nom de l'utilisateur."]}),"\n",(0,t.jsxs)(s.p,{children:["Imaginez maintenant une impl\xe9mentation de ",(0,t.jsx)(s.code,{children:"request.js"})," qui se connecte au r\xe9seau et r\xe9cup\xe8re certaines donn\xe9es utilisateur\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="request.js"',children:"const http = require('http');\n\nexport default function request(url) {\n  return new Promise(resolve => {\n    // Ceci est un exemple de requ\xeate http, par exemple pour r\xe9cup\xe9rer\n    // des donn\xe9es utilisateur \xe0 partir d'une API.\n    // Ce module est simul\xe9 dans __mocks__/request.js\n    http.get({path: url}, response => {\n      let data = '';\n      response.on('data', _data => (data += _data));\n      response.on('end', () => resolve(data));\n    });\n  });\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Comme nous ne voulons pas aller sur le r\xe9seau dans notre test, nous allons cr\xe9er un simulateur manuel pour notre module ",(0,t.jsx)(s.code,{children:"request.js"})," dans le dossier ",(0,t.jsx)(s.code,{children:"__mocks__"})," (le dossier est sensible \xe0 la casse, ",(0,t.jsx)(s.code,{children:"__MOCKS__"})," ne fonctionnera pas). Il pourrait ressembler \xe0 ceci\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/request.js"',children:"const users = {\n  4: {name: 'Mark'},\n  5: {name: 'Paul'},\n};\n\nexport default function request(url) {\n  return new Promise((resolve, reject) => {\n    const userID = parseInt(url.substr('/users/'.length), 10);\n    process.nextTick(() =>\n      users[userID]\n        ? resolve(users[userID])\n        : reject({\n            error: `Utilisateur avec ${userID} non trouv\xe9.`,\n          }),\n    );\n  });\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"Maintenant, \xe9crivons un test pour notre fonctionnalit\xe9 asynchrone."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="__tests__/user-test.js"',children:"jest.mock('../request');\n\nimport * as user from '../user';\n\n// L'assertion d'une promesse doit \xeatre retourn\xe9e.\nit('works with promises', () => {\n  expect.assertions(1);\n  return user.getUserName(4).then(data => expect(data).toBe('Mark'));\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Nous appelons ",(0,t.jsx)(s.code,{children:"jest.mock('../request')"})," pour dire \xe0 Jest d'utiliser notre simulateur manuel. ",(0,t.jsx)(s.code,{children:"it"})," s'attend \xe0 ce que la valeur de retour soit une promesse qui va \xeatre r\xe9solue. Vous pouvez encha\xeener autant de promesses que vous le souhaitez et appeler ",(0,t.jsx)(s.code,{children:"expect"})," \xe0 tout moment, tant que vous retournez une promesse \xe0 la fin."]}),"\n",(0,t.jsx)(s.h2,{id:"resolves",children:(0,t.jsx)(s.code,{children:".resolves"})}),"\n",(0,t.jsxs)(s.p,{children:["Il existe un moyen moins verbeux utilisant ",(0,t.jsx)(s.code,{children:"resolves"})," pour d\xe9cortiquer la valeur d'une promesse remplie avec tout autre comparateur. Si la promesse est rejet\xe9e, l'assertion \xe9chouera."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"it('works with resolves', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,t.jsxs)(s.h2,{id:"asyncawait",children:[(0,t.jsx)(s.code,{children:"async"}),"/",(0,t.jsx)(s.code,{children:"await"})]}),"\n",(0,t.jsxs)(s.p,{children:["L'\xe9criture de tests utilisant la syntaxe ",(0,t.jsx)(s.code,{children:"async"}),"/",(0,t.jsx)(s.code,{children:"await"})," est \xe9galement possible. Voici comment \xe9crire les m\xeames exemples que pr\xe9c\xe9demment\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// async/wait peut \xeatre utilis\xe9.\nit('works with async/await', async () => {\n  expect.assertions(1);\n  const data = await user.getUserName(4);\n  expect(data).toBe('Mark');\n});\n\n// async/await can also be used with `.resolves`.\nit('works with async/await and resolves', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(5)).resolves.toBe('Paul');\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Pour activer async/await dans votre projet, installez ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-preset-env",children:(0,t.jsx)(s.code,{children:"@babel/preset-env"})})," et activez la fonctionnalit\xe9 dans votre fichier ",(0,t.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"gestion-des-erreurs",children:"Gestion des erreurs"}),"\n",(0,t.jsxs)(s.p,{children:["Les erreurs peuvent \xeatre trait\xe9es en utilisant la m\xe9thode ",(0,t.jsx)(s.code,{children:".catch"}),". Assurez-vous de rajouter ",(0,t.jsx)(s.code,{children:"expect.assertions"})," pour v\xe9rifier qu'un certain nombre d'assertions sont appel\xe9es. Sinon une promesse accomplie ne passerait pas le test\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Tests d'erreurs asynchrones en utilisant Promise.catch.\nit('teste l'erreur avec des promesses', () => {\n  expect.assertions(1);\n  return user.getUserName(2).catch(e =>\n    expect(e).toEqual({\n      error: 'Utilisateur avec 2 non trouv\xe9.',\n    }),\n  );\n});\n\n// Ou en utilisant async/await.\nit('teste l'erreur avec async/await', async () => {\n  expect.assertions(1);\n  try {\n    await user.getUserName(1);\n  } catch (e) {\n    expect(e).toEqual({\n      error: 'Utilisateur avec 1 non trouv\xe9.',\n    });\n  }\n});\n"})}),"\n",(0,t.jsx)(s.h2,{id:"rejects",children:(0,t.jsx)(s.code,{children:".rejects"})}),"\n",(0,t.jsxs)(s.p,{children:["La fonction d'aide ",(0,t.jsx)(s.code,{children:".rejects"})," fonctionne comme la fonction d'aide ",(0,t.jsx)(s.code,{children:".resolves"}),". Si la promesse est accomplie, le test \xe9choue automatiquement. ",(0,t.jsx)(s.code,{children:"expect.assertions(number)"})," n'est pas obligatoire mais recommand\xe9 pour v\xe9rifier qu'un certain nombre d'",(0,t.jsx)(s.a,{href:"expect#expectassertionsnumber",children:"assertions"})," sont appel\xe9es pendant un test. Il est par ailleurs facile d'oublier de ",(0,t.jsx)(s.code,{children:"return"}),"/",(0,t.jsx)(s.code,{children:"await"})," les assertions ",(0,t.jsx)(s.code,{children:".resolves"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"// Tests d'erreurs asynchrones en utilisant `.rejects`.\nit('teste l'erreur avec rejects', () => {\n  expect.assertions(1);\n  return expect(user.getUserName(3)).rejects.toEqual({\n    error: 'Utilisateur avec 3 non trouv\xe9.',\n  });\n});\n\n// Ou en utilisant async/await avec `.rejects`.\nit('teste l'erreur avec async/await et rejects', async () => {\n  expect.assertions(1);\n  await expect(user.getUserName(3)).rejects.toEqual({\n    error: 'Utilisateur avec 3 non trouv\xe9.',\n  });\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The code for this example is available at ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/async",children:"examples/async"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous souhaitez tester les minuteurs, comme ",(0,t.jsx)(s.code,{children:"setTimeout"}),", jetez un coup d'\u0153il \xe0 la documentation ",(0,t.jsx)(s.a,{href:"/fr/docs/29.5/timer-mocks",children:"simulateurs de temporisation"}),"."]})]})}const d=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>o,ah:()=>a});var t=n(7378);const r=t.createContext({});function a(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function o({components:e,children:s,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:a(e),t.createElement(r.Provider,{value:o},s)}}}]);
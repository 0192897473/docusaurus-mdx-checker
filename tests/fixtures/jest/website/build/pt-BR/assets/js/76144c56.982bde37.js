"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7381],{1340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4246),a=n(1670);const o={id:"jest-platform",title:"Plataforma Jest"},i=void 0,r={unversionedId:"jest-platform",id:"jest-platform",title:"Plataforma Jest",description:"You can cherry pick specific features of Jest and use them as standalone packages. Here's a list of the available packages:",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/JestPlatform.md",sourceDirName:".",slug:"/jest-platform",permalink:"/pt-BR/docs/next/jest-platform",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"current",frontMatter:{id:"jest-platform",title:"Plataforma Jest"},sidebar:"docs",previous:{title:"Fun\xe7\xf5es de Simula\xe7\xe3o",permalink:"/pt-BR/docs/next/mock-functions"},next:{title:"Jest Community",permalink:"/pt-BR/docs/next/jest-community"}},l={},c=[{value:"jest-changed-files",id:"jest-changed-files",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"jest-diff",id:"jest-diff",level:2},{value:"Exemplo",id:"exemplo-1",level:3},{value:"jest-docblock",id:"jest-docblock",level:2},{value:"Exemplo",id:"exemplo-2",level:3},{value:"jest-get-type",id:"jest-get-type",level:2},{value:"Exemplo",id:"exemplo-3",level:3},{value:"jest-validate",id:"jest-validate",level:2},{value:"Exemplo",id:"exemplo-4",level:3},{value:"jest-worker",id:"jest-worker",level:2},{value:"Exemplo",id:"exemplo-5",level:3},{value:"pretty-format",id:"pretty-format",level:2},{value:"Exemplo",id:"exemplo-6",level:3}];function d(e){const t=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",a:"a"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"You can cherry pick specific features of Jest and use them as standalone packages. Here's a list of the available packages:"}),"\n",(0,s.jsx)(t.h2,{id:"jest-changed-files",children:"jest-changed-files"}),"\n",(0,s.jsx)(t.p,{children:"Tool for identifying modified files in a git/hg repository. Exports two functions:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"getChangedFilesForRoots"})," returns a promise that resolves to an object with the changed files and repos."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"findRepos"})," returns a promise that resolves to a set of repositories contained in the specified path."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const {getChangedFilesForRoots} = require('jest-changed-files');\n\n// imprime o conjunto de arquivos modificados desde o \xfaltimo commit no reposit\xf3rio atual\ngetChangedFilesForRoots(['./'], {\n  lastCommit: true,\n}).then(result => console.log(result.changedFiles));\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about ",(0,s.jsx)(t.code,{children:"jest-changed-files"})," in the ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-changed-files/README.md",children:"readme file"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"jest-diff",children:"jest-diff"}),"\n",(0,s.jsx)(t.p,{children:'Tool for visualizing changes in data. Exports a function that compares two values of any type and returns a "pretty-printed" string illustrating the difference between the two arguments.'}),"\n",(0,s.jsx)(t.h3,{id:"exemplo-1",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const {diff} = require('jest-diff');\n\nconst a = {a: {b: {c: 5}}};\nconst b = {a: {b: {c: 6}}};\n\nconst result = diff(a, b);\n\n// print diff\nconsole.log(result);\n"})}),"\n",(0,s.jsx)(t.h2,{id:"jest-docblock",children:"jest-docblock"}),"\n",(0,s.jsx)(t.p,{children:"Tool for extracting and parsing the comments at the top of a JavaScript file. Exports various functions to manipulate the data inside the comment block."}),"\n",(0,s.jsx)(t.h3,{id:"exemplo-2",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const {parseWithComments} = require('jest-docblock');\n\nconst code = `\n/**\n * This is a sample\n *\n * @flow\n */\n\n console.log('Hello World!');\n`;\n\nconst parsed = parseWithComments(code);\n\n// prints an object with two attributes: comments and pragmas.\nconsole.log(parsed);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about ",(0,s.jsx)(t.code,{children:"jest-docblock"})," in the ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-docblock/README.md",children:"readme file"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"jest-get-type",children:"jest-get-type"}),"\n",(0,s.jsx)(t.p,{children:"Module that identifies the primitive type of any JavaScript value. Exports a function that returns a string with the type of the value passed as argument."}),"\n",(0,s.jsx)(t.h3,{id:"exemplo-3",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const {getType} = require('jest-get-type');\n\nconst array = [1, 2, 3];\nconst nullValue = null;\nconst undefinedValue = undefined;\n\n// prints 'array'\nconsole.log(getType(array));\n// prints 'null'\nconsole.log(getType(nullValue));\n// prints 'undefined'\nconsole.log(getType(undefinedValue));\n"})}),"\n",(0,s.jsx)(t.h2,{id:"jest-validate",children:"jest-validate"}),"\n",(0,s.jsx)(t.p,{children:"Ferramenta para validar configura\xe7\xf5es enviadas por usu\xe1rios. Exports a function that takes two arguments: the user's configuration and an object containing an example configuration and other options. The return value is an object with two attributes:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"hasDeprecationWarnings"}),", a boolean indicating whether the submitted configuration has deprecation warnings,"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"isValid"}),", um booleano que indica se a configura\xe7\xe3o est\xe1 correta ou n\xe3o."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"exemplo-4",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const {validate} = require('jest-validate');\n\nconst configByUser = {\n  transform: '<rootDir>/node_modules/my-custom-transform',\n};\n\nconst result = validate(configByUser, {\n  comment: '  Documentation: http://custom-docs.com',\n  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},\n});\n\nconsole.log(result);\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about ",(0,s.jsx)(t.code,{children:"jest-validate"})," in the ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-validate/README.md",children:"readme file"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"jest-worker",children:"jest-worker"}),"\n",(0,s.jsxs)(t.p,{children:["M\xf3dulo utilizado para a paraleliza\xe7\xe3o de tarefas. Exports a class ",(0,s.jsx)(t.code,{children:"JestWorker"})," that takes the path of Node.js module and lets you call the module's exported methods as if they were class methods, returning a promise that resolves when the specified method finishes its execution in a forked process."]}),"\n",(0,s.jsx)(t.h3,{id:"exemplo-5",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="heavy-task.js"',children:"module.exports = {\n  myHeavyTask: args => {\n    // long running CPU intensive task.\n  },\n};\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="main.js"',children:"async function main() {\n  const worker = new Worker(require.resolve('./heavy-task.js'));\n\n  // run 2 tasks in parallel with different arguments\n  const results = await Promise.all([\n    worker.myHeavyTask({foo: 'bar'}),\n    worker.myHeavyTask({bar: 'foo'}),\n  ]);\n\n  console.log(results);\n}\n\nmain();\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about ",(0,s.jsx)(t.code,{children:"jest-worker"})," in the ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-worker/README.md",children:"readme file"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"pretty-format",children:"pretty-format"}),"\n",(0,s.jsx)(t.p,{children:"Exports a function that converts any JavaScript value into a human-readable string. Supports all built-in JavaScript types out of the box and allows extension for application-specific types via user-defined plugins."}),"\n",(0,s.jsx)(t.h3,{id:"exemplo-6",children:"Exemplo"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const {format: prettyFormat} = require('pretty-format');\n\nconst val = {object: {}};\nval.circularReference = val;\nval[Symbol('foo')] = 'foo';\nval.map = new Map([['prop', 'value']]);\nval.array = [-0, Infinity, NaN];\n\nconsole.log(prettyFormat(val));\n"})}),"\n",(0,s.jsxs)(t.p,{children:["You can read more about ",(0,s.jsx)(t.code,{children:"pretty-format"})," in the ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/packages/pretty-format/README.md",children:"readme file"}),"."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,t,n)=>{n.d(t,{Zo:()=>r,ah:()=>o});var s=n(7378);const a=s.createContext({});function o(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function r({components:e,children:t,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||i:o(e),s.createElement(a.Provider,{value:r},t)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9950],{4765:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>j,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var t=s(4246),r=s(1670);const l={id:"jest-platform",title:"Jest \u5e73\u53f0\u5de5\u5177"},a=void 0,o={unversionedId:"jest-platform",id:"jest-platform",title:"Jest \u5e73\u53f0\u5de5\u5177",description:"\u4f60\u53ef\u4ee5\u81ea\u7531\u9009\u62e9Jest\u7684\u7279\u5b9a\u529f\u80fd\uff0c\u5e76\u72ec\u7acb\u4f7f\u7528\u8fd9\u4e9b\u5305\u3002 \u4e0b\u9762\u662f\u53ef\u7528\u7684\u8f6f\u4ef6\u5305\u5217\u8868\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/JestPlatform.md",sourceDirName:".",slug:"/jest-platform",permalink:"/zh-Hans/docs/next/jest-platform",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"current",frontMatter:{id:"jest-platform",title:"Jest \u5e73\u53f0\u5de5\u5177"},sidebar:"docs",previous:{title:"\u6a21\u62df\u51fd\u6570",permalink:"/zh-Hans/docs/next/mock-functions"},next:{title:"Jest Community",permalink:"/zh-Hans/docs/next/jest-community"}},i={},c=[{value:"jest-changed-files",id:"jest-changed-files",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"jest-diff",id:"jest-diff",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-1",level:3},{value:"jest-docblock",id:"jest-docblock",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-2",level:3},{value:"jest-get-type",id:"jest-get-type",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-3",level:3},{value:"jest-validate",id:"jest-validate",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-4",level:3},{value:"jest-worker",id:"jest-worker",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-5",level:3},{value:"pretty-format",id:"pretty-format",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50-6",level:3}];function d(e){const n=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",code:"code",h3:"h3",pre:"pre",a:"a"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u81ea\u7531\u9009\u62e9Jest\u7684\u7279\u5b9a\u529f\u80fd\uff0c\u5e76\u72ec\u7acb\u4f7f\u7528\u8fd9\u4e9b\u5305\u3002 \u4e0b\u9762\u662f\u53ef\u7528\u7684\u8f6f\u4ef6\u5305\u5217\u8868\uff1a"}),"\n",(0,t.jsx)(n.h2,{id:"jest-changed-files",children:"jest-changed-files"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u8bc6\u522b git/hg \u5b58\u50a8\u5e93\u4e2d\u5df2\u4fee\u6539\u6587\u4ef6\u7684\u5de5\u5177\u3002 \u5bfc\u51fa\u4e24\u4e2a\u51fd\u6570\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getChangedFilesForRoots"})," \u8fd4\u56de\u4e00\u4e2aresolved\u72b6\u6001\u7684Promise\uff0c\u6b64Promise\u5305\u542b\u4fee\u6539\u6587\u4ef6\u548c\u4ed3\u5e93\u4fe1\u606f\u3002"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"findRepos"})," \u8fd4\u56de\u4e00\u4e2aresolved\u72b6\u6001\u7684Promise\uff0c\u6b64Promise\u5305\u542b\u6307\u5b9a\u8def\u5f84\u7684\u4e00\u7ec4\u4ed3\u5e93\u6570\u636e\u3002"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {getChangedFilesForRoots} = require('jest-changed-files');\n\n// \u6253\u5370\u51fa\u5f53\u524d\u76ee\u5f55\u6700\u540e\u4fee\u6539\u8fc7\u7684\u4e00\u7ec4\u6587\u4ef6\ngetChangedFilesForRoots(['./'], {\n  lastCommit: true,\n}).then(result => console.log(result.changedFiles));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about ",(0,t.jsx)(n.code,{children:"jest-changed-files"})," in the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-changed-files/README.md",children:"readme file"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"jest-diff",children:"jest-diff"}),"\n",(0,t.jsx)(n.p,{children:"\u6570\u636e\u66f4\u6539\u7684\u53ef\u89c6\u5316\u5de5\u5177\u3002 \u8f93\u51fa\u4e00\u4e2a\u51fd\u6570\uff0c\u4e24\u4e2a\u4efb\u4f55\u7c7b\u578b\u7684\u503c\u8f93\u5165\u8be5\u51fd\u6570\u540e\uff0c\u8fd4\u56de\u4e00\u4e2a\u201c\u8f83\u6613\u8bfb\u201d\u7684\u5b57\u7b26\u4e32\u6765\u5c55\u73b0\u5176\u533a\u522b\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50-1",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {diff} = require('jest-diff');\n\nconst a = {a: {b: {c: 5}}};\nconst b = {a: {b: {c: 6}}};\n\nconst result = diff(a, b);\n\n// \u6253\u5370\u4e24\u4e2a\u503c\u7684\u5dee\u5f02\nconsole.log(result);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"jest-docblock",children:"jest-docblock"}),"\n",(0,t.jsx)(n.p,{children:"\u63d0\u53d6\u548c\u89e3\u6790 JavaScript \u6587\u4ef6\u9876\u90e8\u6ce8\u91ca\u7684\u5de5\u5177\uff0c \u5bfc\u51fa\u5404\u79cd\u51fd\u6570\u6765\u64cd\u4f5c\u6ce8\u91ca\u5757\u5185\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50-2",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {parseWithComments} = require('jest-docblock');\n\nconst code = `\n/**\n * This is a sample\n *\n * @flow\n */\n\n console.log('Hello World!');\n`;\n\nconst parsed = parseWithComments(code);\n\n// \u6253\u5370\u4e00\u4e2a\u5305\u542b\u4e24\u4e2a\u5c5e\u6027\u7684\u5bf9\u8c61: comments and pragmas.\nconsole.log(parsed);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about ",(0,t.jsx)(n.code,{children:"jest-docblock"})," in the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-docblock/README.md",children:"readme file"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"jest-get-type",children:"jest-get-type"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u8bc6\u522b\u4efb\u4f55 JavaScript \u503c\u7684\u539f\u59cb\u7c7b\u578b\u7684\u6a21\u5757\uff0c \u6a21\u5757\u5bfc\u51fa\u4e86\u4e00\u4e2a\u53ef\u4ee5\u8bc6\u522b\u4f20\u5165\u53c2\u6570\u7c7b\u578b\u5e76\u5c06\u7c7b\u578b\u4ee5\u5b57\u7b26\u4e32\u4f5c\u4e3a\u8fd4\u56de\u503c\u7684\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50-3",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {getType} = require('jest-get-type');\n\nconst array = [1, 2, 3];\nconst nullValue = null;\nconst undefinedValue = undefined;\n\n// prints 'array'\nconsole.log(getType(array));\n// prints 'null'\nconsole.log(getType(nullValue));\n// prints 'undefined'\nconsole.log(getType(undefinedValue));\n"})}),"\n",(0,t.jsx)(n.h2,{id:"jest-validate",children:"jest-validate"}),"\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u9a8c\u8bc1\u7528\u6237\u63d0\u4ea4\u7684\u914d\u7f6e\u7684\u5de5\u5177\u3002 \u5bfc\u51fa\u4e00\u4e2a\u8981\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\u7684\u51fd\u6570\uff1a\u4e00\u4e2a\u662f\u7528\u6237\u7684\u914d\u7f6e\uff0c\u53e6\u4e00\u4e2a\u662f\u5305\u542b\u793a\u4f8b\u914d\u7f6e\u548c\u5176\u4ed6\u9009\u9879\u7684\u5bf9\u8c61\u3002 \u8be5\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u5177\u6709\u4e24\u4e2a\u5c5e\u6027\u7684\u5bf9\u8c61\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hasDeprecationWarnings"}),"\uff0c\u5e03\u5c14\u503c\uff0c\u63d0\u793a\u4f60\u63d0\u4ea4\u7684\u914d\u7f6e\u662f\u5426\u6709\u5f03\u7528\u8b66\u544a"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isValid"}),", \u5e03\u5c14\u503c, \u63d0\u793a\u914d\u7f6e\u662f\u5426\u6b63\u786e"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50-4",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {validate} = require('jest-validate');\n\nconst configByUser = {\n  transform: '<rootDir>/node_modules/my-custom-transform',\n};\n\nconst result = validate(configByUser, {\n  comment: '  Documentation: http://custom-docs.com',\n  exampleConfig: {transform: '<rootDir>/node_modules/babel-jest'},\n});\n\nconsole.log(result);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about ",(0,t.jsx)(n.code,{children:"jest-validate"})," in the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-validate/README.md",children:"readme file"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"jest-worker",children:"jest-worker"}),"\n",(0,t.jsxs)(n.p,{children:["\u7528\u4e8e\u4efb\u52a1\u5e76\u884c\u5316\u7684\u6a21\u5757\u3002 \u5bfc\u51fa\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"Worker"})," \u7c7b\uff0c\u4f20\u5165 Node.js \u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u8ba9\u4f60\u8c03\u7528\u6a21\u5757\u5bfc\u51fa\u7684\u65b9\u6cd5\uff0c\u5c31\u50cf\u662f\u8fd9\u4e2a\u7c7b\u7684\u65b9\u6cd5\u4e00\u6837\uff0c\u8fd4\u56de\u4e00\u4e2a\u627f\u8bfa\uff0c\u5f53\u6307\u5b9a\u7684\u65b9\u6cd5\u5728\u5206\u652f\u8fdb\u7a0b\u91cc\u6267\u884c\u5b8c\u6210\u7684\u65f6\u5019\u5c31\u4f1a\u89e3\u6790\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50-5",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="heavy-task.js"',children:"module.exports = {\n  myHeavyTask: args => {\n    // \u957f\u65f6\u95f4\u8fd0\u884c\u7684CPU\u5bc6\u96c6\u578b\u4efb\u52a1\n  },\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="main.js"',children:"async function main() {\n  const worker = new Worker(require.resolve('./heavy-task.js'));\n\n  // \u4f20\u5165\u4e0d\u540c\u53c2\u6570\u5e76\u884c\u8fd0\u884c\u4e24\u4e2a\u4efb\u52a1\n  const results = await Promise.all([\n    worker.myHeavyTask({foo: 'bar'}),\n    worker.myHeavyTask({bar: 'foo'}),\n  ]);\n\n  console.log(results);\n}\n\nmain();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about ",(0,t.jsx)(n.code,{children:"jest-worker"})," in the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-worker/README.md",children:"readme file"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"pretty-format",children:"pretty-format"}),"\n",(0,t.jsx)(n.p,{children:"\u5bfc\u51fa\u4e00\u4e2a\u5c06\u4efb\u4f55 JavaScript \u503c\u8f6c\u6362\u4e3a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\u7684\u51fd\u6570\u3002 \u5929\u751f\u5c31\u652f\u6301\u6240\u6709 JavaScript \u7c7b\u578b\uff0c\u53ef\u4ee5\u901a\u8fc7\u7528\u6237\u81ea\u5b9a\u4e49\u63d2\u4ef6\u6765\u62d3\u5c55\u9488\u5bf9\u7279\u5b9a\u5e94\u7528\u7684\u7c7b\u578b\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f8b\u5b50-6",children:"\u4f8b\u5b50"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const {format: prettyFormat} = require('pretty-format');\n\nconst val = {object: {}};\nval.circularReference = val;\nval[Symbol('foo')] = 'foo';\nval.map = new Map([['prop', 'value']]);\nval.array = [-0, Infinity, NaN];\n\nconsole.log(prettyFormat(val));\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can read more about ",(0,t.jsx)(n.code,{children:"pretty-format"})," in the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/pretty-format/README.md",children:"readme file"}),"."]})]})}const j=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>o,ah:()=>l});var t=s(7378);const r=t.createContext({});function l(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function o({components:e,children:n,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||a:l(e),t.createElement(r.Provider,{value:o},n)}}}]);
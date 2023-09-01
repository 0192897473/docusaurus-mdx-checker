"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1114],{7778:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(4246),o=n(1670);const r={id:"ecmascript-modules",title:"\u041c\u043e\u0434\u0443\u043b\u0438 ECMAScript"},i=void 0,c={unversionedId:"ecmascript-modules",id:"version-29.6/ecmascript-modules",title:"\u041c\u043e\u0434\u0443\u043b\u0438 ECMAScript",description:"Jest ships with experimental support for ECMAScript Modules (ESM).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.6/ECMAScriptModules.md",sourceDirName:".",slug:"/ecmascript-modules",permalink:"/ru/docs/ecmascript-modules",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.6",frontMatter:{id:"ecmascript-modules",title:"\u041c\u043e\u0434\u0443\u043b\u0438 ECMAScript"},sidebar:"docs",previous:{title:"\u041e\u0431\u0445\u043e\u0434\u0438\u043c \u0438\u043c\u043c\u0438\u0442\u0430\u0446\u0438\u0438 \u043c\u043e\u0434\u0443\u043b\u0435\u0439",permalink:"/ru/docs/bypassing-module-mocks"},next:{title:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 \u0441 Webpack",permalink:"/ru/docs/webpack"}},l={},d=[{value:"\u0420\u0430\u0437\u043b\u0438\u0447\u0438\u044f \u043c\u0435\u0436\u0434\u0443 ESM \u0438 CommonJS",id:"\u0440\u0430\u0437\u043b\u0438\u0447\u0438\u044f-\u043c\u0435\u0436\u0434\u0443-esm-\u0438-commonjs",level:2},{value:"Module mocking in ESM",id:"module-mocking-in-esm",level:2}];function a(e){const s=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a",code:"code",ol:"ol",li:"li",em:"em",h2:"h2",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{type:"caution",children:[(0,t.jsxs)(s.p,{children:["Jest ships with ",(0,t.jsx)(s.strong,{children:"experimental"})," support for ECMAScript Modules (ESM)."]}),(0,t.jsxs)(s.p,{children:["The implementation may have bugs and lack features. For the latest status check out the ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"issue"})," and the ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/labels/ES%20Modules",children:"label"})," on the issue tracker."]}),(0,t.jsxs)(s.p,{children:["Also note that the APIs Jest uses to implement ESM support are still ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/vm.html#vm_class_vm_module",children:"considered experimental by Node"})," (as of version ",(0,t.jsx)(s.code,{children:"18.8.0"}),")."]})]}),"\n",(0,t.jsx)(s.p,{children:"With the warnings out of the way, this is how you activate ESM support in your tests."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Ensure you either disable ",(0,t.jsx)(s.a,{href:"/ru/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:"code transforms"})," by passing ",(0,t.jsx)(s.code,{children:"transform: {}"})," or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"node"})," with ",(0,t.jsx)(s.code,{children:"--experimental-vm-modules"}),", e.g. ",(0,t.jsx)(s.code,{children:"node --experimental-vm-modules node_modules/jest/bin/jest.js"})," or ",(0,t.jsx)(s.code,{children:"NODE_OPTIONS=--experimental-vm-modules npx jest"})," etc."]}),"\n",(0,t.jsxs)(s.p,{children:["\u0412 Windows \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c ",(0,t.jsx)(s.a,{href:"https://github.com/kentcdodds/cross-env",children:(0,t.jsx)(s.code,{children:"cross-env"})})," \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0441\u0440\u0435\u0434\u044b."]}),"\n",(0,t.jsxs)(s.p,{children:["If you use Yarn, you can use ",(0,t.jsx)(s.code,{children:"yarn node --experimental-vm-modules $(yarn bin jest)"}),". This command will also work if you use ",(0,t.jsx)(s.a,{href:"https://yarnpkg.com/features/pnp",children:"Yarn Plug'n'Play"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If your codebase includes ESM imports from ",(0,t.jsx)(s.code,{children:"*.wasm"})," files, you do ",(0,t.jsx)(s.em,{children:"not"})," need to pass ",(0,t.jsx)(s.code,{children:"--experimental-wasm-modules"})," to ",(0,t.jsx)(s.code,{children:"node"}),". Current implementation of WebAssembly imports in Jest relies on experimental VM modules, however, this may change in the future."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Beyond that, we attempt to follow ",(0,t.jsx)(s.code,{children:"node"}),'\'s logic for activating "ESM mode" (such as looking at ',(0,t.jsx)(s.code,{children:"type"})," in ",(0,t.jsx)(s.code,{children:"package.json"})," or ",(0,t.jsx)(s.code,{children:".mjs"})," files), see ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/esm.html#esm_enabling",children:"their docs"})," for details."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["If you want to treat other file extensions (such as ",(0,t.jsx)(s.code,{children:".jsx"})," or ",(0,t.jsx)(s.code,{children:".ts"}),") as ESM, please use the ",(0,t.jsxs)(s.a,{href:"/ru/docs/configuration#extensionstotreatasesm-arraystring",children:[(0,t.jsx)(s.code,{children:"extensionsToTreatAsEsm"})," option"]}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u0440\u0430\u0437\u043b\u0438\u0447\u0438\u044f-\u043c\u0435\u0436\u0434\u0443-esm-\u0438-commonjs",children:"\u0420\u0430\u0437\u043b\u0438\u0447\u0438\u044f \u043c\u0435\u0436\u0434\u0443 ESM \u0438 CommonJS"}),"\n",(0,t.jsxs)(s.p,{children:["\u0411\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e \u0440\u0430\u0437\u043b\u0438\u0447\u0438\u0439 \u043e\u0431\u044a\u044f\u0441\u043d\u044f\u044e\u0442\u0441\u044f \u0432 ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u0438 Node"}),", \u043d\u043e \u0432 \u0434\u043e\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043a \u0443\u043f\u043e\u043c\u044f\u043d\u0443\u0442\u044b\u043c \u0432 \u043d\u0435\u0439 \u0432\u0435\u0449\u0430\u043c, Jest \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u0432\u043e \u0432\u0441\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u044f\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b - \u043e\u0431\u044a\u0435\u043a\u0442 ",(0,t.jsx)(s.a,{href:"/ru/docs/jest-object",children:(0,t.jsx)(s.code,{children:"jest"})}),". To access this object in ESM, you need to import it from the ",(0,t.jsx)(s.code,{children:"@jest/globals"})," module or use ",(0,t.jsx)(s.code,{children:"import.meta"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import {jest} from '@jest/globals';\n\njest.useFakeTimers();\n\n// etc.\n\n// alternatively\nimport.meta.jest.useFakeTimers();\n\n// jest === import.meta.jest => true\n"})}),"\n",(0,t.jsx)(s.h2,{id:"module-mocking-in-esm",children:"Module mocking in ESM"}),"\n",(0,t.jsxs)(s.p,{children:["Since ESM evaluates static ",(0,t.jsx)(s.code,{children:"import"})," statements before looking at the code, the hoisting of ",(0,t.jsx)(s.code,{children:"jest.mock"})," calls that happens in CJS won't work for ESM. To mock modules in ESM, you need to use ",(0,t.jsx)(s.code,{children:"require"})," or dynamic ",(0,t.jsx)(s.code,{children:"import()"})," after ",(0,t.jsx)(s.code,{children:"jest.mock"})," calls to load the mocked modules - the same applies to modules which load the mocked modules."]}),"\n",(0,t.jsxs)(s.p,{children:["ESM mocking is supported through ",(0,t.jsx)(s.code,{children:"jest.unstable_mockModule"}),". As the name suggests, this API is still work in progress, please follow ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/10025",children:"this issue"})," for updates."]}),"\n",(0,t.jsxs)(s.p,{children:["The usage of ",(0,t.jsx)(s.code,{children:"jest.unstable_mockModule"})," is essentially the same as ",(0,t.jsx)(s.code,{children:"jest.mock"})," with two differences: the factory function is required and it can be sync or async:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import {jest} from '@jest/globals';\n\njest.unstable_mockModule('node:child_process', () => ({\n  execSync: jest.fn(),\n  // etc.\n}));\n\nconst {execSync} = await import('node:child_process');\n\n// etc.\n"})}),"\n",(0,t.jsxs)(s.p,{children:["For mocking CJS modules, you should continue to use ",(0,t.jsx)(s.code,{children:"jest.mock"}),". See the example below:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="main.cjs"',children:"const {BrowserWindow, app} = require('electron');\n\n// etc.\n\nmodule.exports = {example};\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="main.test.cjs"',children:"import {createRequire} from 'node:module';\nimport {jest} from '@jest/globals';\n\nconst require = createRequire(import.meta.url);\n\njest.mock('electron', () => ({\n  app: {\n    on: jest.fn(),\n    whenReady: jest.fn(() => Promise.resolve()),\n  },\n  BrowserWindow: jest.fn().mockImplementation(() => ({\n    // partial mocks.\n  })),\n}));\n\nconst {BrowserWindow} = require('electron');\nconst exported = require('./main.cjs');\n\n// alternatively\nconst {BrowserWindow} = (await import('electron')).default;\nconst exported = await import('./main.cjs');\n\n// etc.\n"})})]})}const m=function(e={}){const{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>r});var t=n(7378);const o=t.createContext({});function r(e){const s=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(o.Provider,{value:c},s)}}}]);
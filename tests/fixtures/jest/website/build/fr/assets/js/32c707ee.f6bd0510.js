"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6843],{3480:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var t=n(4246),o=n(1670);const r={id:"ecmascript-modules",title:"Modules ECMAScript"},i=void 0,c={unversionedId:"ecmascript-modules",id:"ecmascript-modules",title:"Modules ECMAScript",description:"Jest ships with experimental support for ECMAScript Modules (ESM).",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ECMAScriptModules.md",sourceDirName:".",slug:"/ecmascript-modules",permalink:"/fr/docs/next/ecmascript-modules",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"current",frontMatter:{id:"ecmascript-modules",title:"Modules ECMAScript"},sidebar:"docs",previous:{title:"Contournement des modules simul\xe9s",permalink:"/fr/docs/next/bypassing-module-mocks"},next:{title:"Utilisation avec webpack",permalink:"/fr/docs/next/webpack"}},l={},d=[{value:"Diff\xe9rences entre ESM et CommonJS",id:"diff\xe9rences-entre-esm-et-commonjs",level:2},{value:"Module mocking in ESM",id:"module-mocking-in-esm",level:2}];function a(e){const s=Object.assign({admonition:"admonition",p:"p",strong:"strong",a:"a",code:"code",ol:"ol",li:"li",em:"em",h2:"h2",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.admonition,{title:"attention",type:"caution",children:[(0,t.jsxs)(s.p,{children:["Jest ships with ",(0,t.jsx)(s.strong,{children:"experimental"})," support for ECMAScript Modules (ESM)."]}),(0,t.jsxs)(s.p,{children:["The implementation may have bugs and lack features. For the latest status check out the ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"issue"})," and the ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/labels/ES%20Modules",children:"label"})," on the issue tracker."]}),(0,t.jsxs)(s.p,{children:["Also note that the APIs Jest uses to implement ESM support are still ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/vm.html#vm_class_vm_module",children:"considered experimental by Node"})," (as of version ",(0,t.jsx)(s.code,{children:"18.8.0"}),")."]})]}),"\n",(0,t.jsx)(s.p,{children:"Une fois les avertissements lev\xe9s, voici comment activer le support ESM dans vos tests."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Ensure you either disable ",(0,t.jsx)(s.a,{href:"/fr/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:"code transforms"})," by passing ",(0,t.jsx)(s.code,{children:"transform: {}"})," or otherwise configure your transformer to emit ESM rather than the default CommonJS (CJS)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Execute ",(0,t.jsx)(s.code,{children:"node"})," with ",(0,t.jsx)(s.code,{children:"--experimental-vm-modules"}),", e.g. ",(0,t.jsx)(s.code,{children:"node --experimental-vm-modules node_modules/jest/bin/jest.js"})," or ",(0,t.jsx)(s.code,{children:"NODE_OPTIONS=--experimental-vm-modules npx jest"})," etc."]}),"\n",(0,t.jsxs)(s.p,{children:["Sous Windows, vous pouvez utiliser ",(0,t.jsx)(s.a,{href:"https://github.com/kentcdodds/cross-env",children:(0,t.jsx)(s.code,{children:"cross-env"})})," pour pouvoir d\xe9finir des variables d'environnement."]}),"\n",(0,t.jsxs)(s.p,{children:["Si vous utilisez Yarn, vous pouvez utiliser ",(0,t.jsx)(s.code,{children:"yarn node --experimental-vm-modules $(yarn bin jest)"}),". Cette commande fonctionnera \xe9galement si vous utilisez ",(0,t.jsx)(s.a,{href:"https://yarnpkg.com/features/pnp",children:"Yarn Plug'n'Play"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If your codebase includes ESM imports from ",(0,t.jsx)(s.code,{children:"*.wasm"})," files, you do ",(0,t.jsx)(s.em,{children:"not"})," need to pass ",(0,t.jsx)(s.code,{children:"--experimental-wasm-modules"})," to ",(0,t.jsx)(s.code,{children:"node"}),". Current implementation of WebAssembly imports in Jest relies on experimental VM modules, however, this may change in the future."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Au-del\xe0, nous essayons de suivre la logique de ",(0,t.jsx)(s.code,{children:"node"})," pour activer le \xab\xa0mode ESM\xa0\xbb (comme regarder ",(0,t.jsx)(s.code,{children:"type"})," dans les fichiers ",(0,t.jsx)(s.code,{children:"package.json"})," ou ",(0,t.jsx)(s.code,{children:".mjs"}),"), consultez ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/esm.html#esm_enabling",children:"leurs docs"})," pour plus de d\xe9tails."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Si vous souhaitez traiter d'autres extensions de fichiers (comme ",(0,t.jsx)(s.code,{children:".jsx"})," ou ",(0,t.jsx)(s.code,{children:".ts"}),") en tant que ESM, veuillez utiliser l'option ",(0,t.jsx)(s.a,{href:"/fr/docs/next/configuration#extensionstotreatasesm-arraystring",children:(0,t.jsx)(s.code,{children:"extensionsToTreatAsEsm"})}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"diff\xe9rences-entre-esm-et-commonjs",children:"Diff\xe9rences entre ESM et CommonJS"}),"\n",(0,t.jsxs)(s.p,{children:["La plupart des diff\xe9rences sont expliqu\xe9es dans ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"la documentation de Node"}),", mais en plus des choses qui y sont mentionn\xe9es, Jest injecte une variable sp\xe9ciale dans tous les fichiers ex\xe9cut\xe9s - l'",(0,t.jsxs)(s.a,{href:"/fr/docs/next/jest-object",children:["objet ",(0,t.jsx)(s.code,{children:"jest"})]}),". Pour acc\xe9der \xe0 cet objet dans ESM, vous devez l'importer depuis le module ",(0,t.jsx)(s.code,{children:"@jest/globals"})," ou utiliser ",(0,t.jsx)(s.code,{children:"import.meta"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import {jest} from '@jest/globals';\n\njest.useFakeTimers();\n\n// etc.\n\n// alternativement\nimport.meta.jest.useFakeTimers();\n\n// jest === import.meta.jest => true\n"})}),"\n",(0,t.jsx)(s.h2,{id:"module-mocking-in-esm",children:"Module mocking in ESM"}),"\n",(0,t.jsxs)(s.p,{children:["Puisque ESM \xe9value les d\xe9clarations statiques ",(0,t.jsx)(s.code,{children:"import"})," avant de regarder le code, le hoisting des appels ",(0,t.jsx)(s.code,{children:"jest.mock"})," qui se produit dans CJS ne fonctionnera pas pour ESM. Pour simuler des modules en ESM, vous devez utiliser un ",(0,t.jsx)(s.code,{children:"require"})," ou un ",(0,t.jsx)(s.code,{children:"import()"})," dynamique apr\xe8s les appels ",(0,t.jsx)(s.code,{children:"jest.mock"})," pour charger les modules simul\xe9s - il en va de m\xeame pour les modules qui chargent les modules simul\xe9s."]}),"\n",(0,t.jsxs)(s.p,{children:["La simulation ESM est support\xe9e par ",(0,t.jsx)(s.code,{children:"jest.unstable_mockModule"}),". As the name suggests, this API is still work in progress, please follow ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/10025",children:"this issue"})," for updates."]}),"\n",(0,t.jsxs)(s.p,{children:["L'utilisation de ",(0,t.jsx)(s.code,{children:"jest.unstable_mockModule"})," est essentiellement la m\xeame que ",(0,t.jsx)(s.code,{children:"jest.mock"})," avec deux diff\xe9rences\xa0: la fonctionfactory est requise et elle peut \xeatre synchrone ou asynchrone\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"import {jest} from '@jest/globals';\n\njest.unstable_mockModule('node:child_process', () => ({\n  execSync: jest.fn(),\n  // etc.\n}));\n\nconst {execSync} = await import('node:child_process');\n\n// etc.\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Pour la simulation des modules CJS, vous devez continuer \xe0 utiliser ",(0,t.jsx)(s.code,{children:"jest.mock"}),". Voir l'exemple ci-dessous\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="main.cjs"',children:"const {BrowserWindow, app} = require('electron');\n\n// etc.\n\nmodule.exports = {example};\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",metastring:'title="main.test.cjs"',children:"import {createRequire} from 'node:module';\nimport {jest} from '@jest/globals';\n\nconst require = createRequire(import.meta.url);\n\njest.mock('electron', () => ({\n  app: {\n    on: jest.fn(),\n    whenReady: jest.fn(() => Promise.resolve()),\n  },\n  BrowserWindow: jest.fn().mockImplementation(() => ({\n    // partial mocks.\n  })),\n}));\n\nconst {BrowserWindow} = require('electron');\nconst exported = require('./main.cjs');\n\n// alternatively\nconst {BrowserWindow} = (await import('electron')).default;\nconst exported = await import('./main.cjs');\n\n// etc.\n"})})]})}const u=function(e={}){const{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(a,e)})):a(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>c,ah:()=>r});var t=n(7378);const o=t.createContext({});function r(e){const s=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const i={};function c({components:e,children:s,disableParentContext:n}){let c;return c=n?"function"==typeof e?e({}):e||i:r(e),t.createElement(o.Provider,{value:c},s)}}}]);
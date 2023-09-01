"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6582],{1275:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var s=r(4246),o=r(1670);const t={id:"code-transformation",title:"Transformaci\xf3n de c\xf3digo"},a=void 0,i={unversionedId:"code-transformation",id:"version-29.6/code-transformation",title:"Transformaci\xf3n de c\xf3digo",description:"Jest ejecuta el c\xf3digo en su proyecto JavaScript, pero si utilizas alguna sintaxis no compatible con Node de forma nativa (como JSX, TypeScript, Vue template), entonces debes transformar ese c\xf3digo en JavaScript plano, similar a lo que har\xedas al compilar para el Navegador.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/version-29.6/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/es-ES/docs/code-transformation",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.6",frontMatter:{id:"code-transformation",title:"Transformaci\xf3n de c\xf3digo"},sidebar:"api",previous:{title:"Environment Variables",permalink:"/es-ES/docs/environment-variables"}},c={},d=[{value:"Defaults",id:"defaults",level:2},{value:"Escribiendo transformadores personalizados",id:"escribiendo-transformadores-personalizados",level:2},{value:"Ejemplos",id:"ejemplos",level:3},{value:"TypeScript with type checking",id:"typescript-with-type-checking",level:3},{value:"Transforming images to their path",id:"transforming-images-to-their-path",level:4}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",admonition:"admonition",pre:"pre",em:"em",h3:"h3",h4:"h4"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Jest ejecuta el c\xf3digo en su proyecto JavaScript, pero si utilizas alguna sintaxis no compatible con Node de forma nativa (como JSX, TypeScript, Vue template), entonces debes transformar ese c\xf3digo en JavaScript plano, similar a lo que har\xedas al compilar para el Navegador."}),"\n",(0,s.jsxs)(n.p,{children:["Jest soporta esto gracias a la opci\xf3n de configuraci\xf3n ",(0,s.jsx)(n.a,{href:"/es-ES/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,s.jsx)(n.code,{children:"transform"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Un transformador es un m\xf3dulo que proporciona un m\xe9todo para transformar archivos fuente. Por ejemplo, si quieres utilizar una nueva funcionalidad del idioma en sus m\xf3dulos o pruebas que a\xfan no son compatible con Node, podr\xeda utilizar un preprocesador de c\xf3digo que transpilar\xeda una versi\xf3n futura de JavaScript a una actual."}),"\n",(0,s.jsx)(n.p,{children:"Jest almacenar\xe1 en cach\xe9 el resultado de una transformaci\xf3n e intentar\xe1 invalidar ese resultado basado en una serie de factores, como el origen del archivo que se est\xe1 transformando y cambiando la configuraci\xf3n."}),"\n",(0,s.jsx)(n.h2,{id:"defaults",children:"Defaults"}),"\n",(0,s.jsxs)(n.p,{children:["Jest ships with one transformer out of the box \u2013 ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/packages/babel-jest#setup",children:(0,s.jsx)(n.code,{children:"babel-jest"})}),". Cargar\xe1 la configuraci\xf3n de Babel de su proyecto y transformar\xe1 cualquier archivo que coincida con la Expresi\xf3n regular ",(0,s.jsx)(n.code,{children:"/\\.[jt]sx?$/"})," (en otras palabras, cualquier archivo ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".jsx"}),", ",(0,s.jsx)(n.code,{children:".ts"})," o ",(0,s.jsx)(n.code,{children:".tsx"}),"). In addition, ",(0,s.jsx)(n.code,{children:"babel-jest"})," will inject the Babel plugin necessary for mock hoisting talked about in ",(0,s.jsx)(n.a,{href:"/es-ES/docs/manual-mocks#using-with-es-module-imports",children:"ES Module mocking"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Recuerde incluir expl\xedcitamente el transformador predeterminado ",(0,s.jsx)(n.code,{children:"babel-jest"}),", si desea usarlo junto con preprocesadores de c\xf3digo adicionales:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"escribiendo-transformadores-personalizados",children:"Escribiendo transformadores personalizados"}),"\n",(0,s.jsx)(n.p,{children:"You can write your own transformer. The API of a transformer is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * The value is:\n   * - `false` if Jest runs without Node ESM flag `--experimental-vm-modules`\n   * - `true` if the file extension is defined in [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * and Jest runs with Node ESM flag `--experimental-vm-modules`\n   *\n   * See more at https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  instrument: boolean;\n  /** Cached file system which is used by `jest-runtime` to improve performance. */\n  cacheFS: Map<string, string>;\n  /** Jest configuration of currently running project. */\n  config: ProjectConfig;\n  /** Versi\xf3n Stringified del `config` - \xfatil en el busting de cach\xe9. */\n  configString: string;\n  /** Transformer configuration passed through `transform` option by the user. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Las definiciones anteriores fueron recortadas por brevedad. Full code can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-transform/src/types.ts",children:"Jest repo on GitHub"})," (remember to choose the right tag/commit for your version of Jest)."]})}),"\n",(0,s.jsxs)(n.p,{children:["Hay un par de maneras en que puedes importar c\xf3digo en Jest - usando Common JS (",(0,s.jsx)(n.code,{children:"require"}),") o los M\xf3dulos ECMAScript (",(0,s.jsx)(n.code,{children:"import"})," - que existe en versiones est\xe1ticas y din\xe1micas). Jest pasa archivos a trav\xe9s de transformaci\xf3n de c\xf3digo bajo demanda (por ejemplo, cuando se eval\xfaa una ",(0,s.jsx)(n.code,{children:"necesidad"})," o ",(0,s.jsx)(n.code,{children:"importaci\xf3n"}),'). Este proceso, tambi\xe9n conocido como "transpilaci\xf3n", podr\xeda suceder ',(0,s.jsx)(n.em,{children:"sincr\xf3nicamente"})," (en el caso de ",(0,s.jsx)(n.code,{children:"requerir"}),"), o ",(0,s.jsx)(n.em,{children:"de forma asincr\xf3nica"})," (en el caso de ",(0,s.jsx)(n.code,{children:"importar"})," o ",(0,s.jsx)(n.code,{children:"importar()"}),", el \xfaltimo de los cuales tambi\xe9n funciona desde m\xf3dulos Common JS). Por esta raz\xf3n, la interfaz expone ambos pares de m\xe9todos para procesos asincr\xf3nicos y sincr\xf3nicos: ",(0,s.jsx)(n.code,{children:"proceso{Async}"})," y ",(0,s.jsx)(n.code,{children:"getCacheKey{Async}"}),". Este \xfaltimo es llamado para averiguar si necesitamos llamar al ",(0,s.jsx)(n.code,{children:"proceso{Async}"})," en absoluto."]}),"\n",(0,s.jsxs)(n.p,{children:["Asynchronous transpilation can fall back to the synchronous ",(0,s.jsx)(n.code,{children:"process"})," call if ",(0,s.jsx)(n.code,{children:"processAsync"})," is unimplemented, but synchronous transpilation cannot use the asynchronous ",(0,s.jsx)(n.code,{children:"processAsync"})," call. If your codebase is ESM only, implementing the async variants are sufficient. Otherwise, if any code is loaded through ",(0,s.jsx)(n.code,{children:"require"})," (including ",(0,s.jsx)(n.code,{children:"createRequire"})," from within ESM), then you need to implement the synchronous ",(0,s.jsx)(n.code,{children:"process"})," variant."]}),"\n",(0,s.jsxs)(n.p,{children:["Be aware that ",(0,s.jsx)(n.code,{children:"node_modules"})," is not transpiled with default config, the ",(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})," setting must be modified in order to do so."]}),"\n",(0,s.jsxs)(n.p,{children:["Semi-related to this are the supports flags we pass (see ",(0,s.jsx)(n.code,{children:"CallerTransformOptions"})," above), but those should be used within the transform to figure out if it should return ESM or CJS, and has no direct bearing on sync vs async"]}),"\n",(0,s.jsxs)(n.p,{children:["Though not required, we ",(0,s.jsx)(n.em,{children:"highly recommend"})," implementing ",(0,s.jsx)(n.code,{children:"getCacheKey"})," as well, so we do not waste resources transpiling when we could have read its previous result from disk. You can use ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@jest/create-cache-key-function",children:(0,s.jsx)(n.code,{children:"@jest/create-cache-key-function"})})," to help implement it."]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of having your custom transformer implement the ",(0,s.jsx)(n.code,{children:"Transformer"})," interface directly, you can choose to export ",(0,s.jsx)(n.code,{children:"createTransformer"}),", a factory function to dynamically create transformers. This is to allow having a transformer config in your jest config."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/es-ES/docs/ecmascript-modules",children:"ECMAScript module"})," support is indicated by the passed in ",(0,s.jsx)(n.code,{children:"supports*"})," options. Specifically ",(0,s.jsx)(n.code,{children:"supportsDynamicImport: true"})," means the transformer can return ",(0,s.jsx)(n.code,{children:"import()"})," expressions, which is supported by both ESM and CJS. If ",(0,s.jsx)(n.code,{children:"supportsStaticESM: true"})," it means top level ",(0,s.jsx)(n.code,{children:"import"})," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's docs"})," for details on the differences."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Make sure ",(0,s.jsx)(n.code,{children:"process{Async}"})," method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower."]}),(0,s.jsxs)(n.p,{children:["During the development of a transformer it can be useful to run Jest with ",(0,s.jsx)(n.code,{children:"--no-cache"})," to frequently ",(0,s.jsx)(n.a,{href:"/es-ES/docs/troubleshooting#caching-issues",children:"delete cache"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,s.jsx)(n.h3,{id:"typescript-with-type-checking",children:"TypeScript with type checking"}),"\n",(0,s.jsxs)(n.p,{children:["While ",(0,s.jsx)(n.code,{children:"babel-jest"})," by default will transpile TypeScript files, Babel will not verify the types. If you want that you can use ",(0,s.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:(0,s.jsx)(n.code,{children:"ts-jest"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"transforming-images-to-their-path",children:"Transforming images to their path"}),"\n",(0,s.jsx)(n.p,{children:"Importing images is a way to include them in your browser bundle, but they are not valid JavaScript. One way of handling it in Jest is to replace the imported value with its filename."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},1670:(e,n,r)=>{r.d(n,{Zo:()=>i,ah:()=>t});var s=r(7378);const o=s.createContext({});function t(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||a:t(e),s.createElement(o.Provider,{value:i},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3097],{3264:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(4246),s=n(1670);const a={id:"code-transformation",title:"Transforma\xe7\xe3o de C\xf3digo"},t=void 0,i={unversionedId:"code-transformation",id:"code-transformation",title:"Transforma\xe7\xe3o de C\xf3digo",description:"O Jest roda o c\xf3digo do seu projeto como JavaScript, mas se voc\xea usa alguma sintaxe n\xe3o suportada pelo Node.js nativamente (como JSX, tipos do TypeScript, templates do Vue e etc.), ent\xe3o voc\xea vai precisar transformar esse c\xf3digo em JavaScript puro, de maneira similar ao que voc\xea faria quando construindo para navegadores.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/pt-BR/docs/next/code-transformation",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"current",frontMatter:{id:"code-transformation",title:"Transforma\xe7\xe3o de C\xf3digo"},sidebar:"api",previous:{title:"Vari\xe1veis de Ambiente",permalink:"/pt-BR/docs/next/environment-variables"}},c={},d=[{value:"Padr\xf5es",id:"padr\xf5es",level:2},{value:"Escrevendo transformadores personalizados",id:"escrevendo-transformadores-personalizados",level:2},{value:"Exemplos",id:"exemplos",level:3},{value:"TypeScript com verifica\xe7\xe3o de tipo",id:"typescript-com-verifica\xe7\xe3o-de-tipo",level:3},{value:"Transformando imagens em seu path",id:"transformando-imagens-em-seu-path",level:4}];function m(e){const o=Object.assign({p:"p",a:"a",code:"code",h2:"h2",admonition:"admonition",pre:"pre",em:"em",h3:"h3",h4:"h4"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"O Jest roda o c\xf3digo do seu projeto como JavaScript, mas se voc\xea usa alguma sintaxe n\xe3o suportada pelo Node.js nativamente (como JSX, tipos do TypeScript, templates do Vue e etc.), ent\xe3o voc\xea vai precisar transformar esse c\xf3digo em JavaScript puro, de maneira similar ao que voc\xea faria quando construindo para navegadores."}),"\n",(0,r.jsxs)(o.p,{children:["Jest suporta isso atrav\xe9s da op\xe7\xe3o de configura\xe7\xe3o ",(0,r.jsx)(o.a,{href:"/pt-BR/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,r.jsx)(o.code,{children:"transform"})}),"."]}),"\n",(0,r.jsx)(o.p,{children:"Um transformador \xe9 um m\xf3dulo que fornece uma fun\xe7\xe3o s\xedncrona para transformar os arquivos de origem. Por exemplo, se voc\xea quisesse poder utilizar uma nova funcionalidade da linguagem nos seus m\xf3dulos ou testes que ainda n\xe3o \xe9 suportada pelo Node, voc\xea pode adicionar um de muitos compiladores que compilam uma vers\xe3o futura do JavaScript para uma atual."}),"\n",(0,r.jsx)(o.p,{children:"O Jest vai armazenar em cache o resultado de uma transforma\xe7\xe3o e tentar invalidar aquele resultado com base em v\xe1rios fatores, como a fonte do arquivo que est\xe1 sendo transformado e a altera\xe7\xe3o de configura\xe7\xe3o."}),"\n",(0,r.jsx)(o.h2,{id:"padr\xf5es",children:"Padr\xf5es"}),"\n",(0,r.jsxs)(o.p,{children:["Jest ships with one transformer out of the box \u2013 ",(0,r.jsx)(o.a,{href:"https://github.com/jestjs/jest/tree/main/packages/babel-jest#setup",children:(0,r.jsx)(o.code,{children:"babel-jest"})}),". Ele carregar\xe1 a configura\xe7\xe3o Babel do seu projeto e transformar\xe1 qualquer arquivo correspondente ao ",(0,r.jsx)(o.code,{children:"/\\.[jt]sx?$/"})," RegExp (em outras palavras, qualquer ",(0,r.jsx)(o.code,{children:". s"}),", ",(0,r.jsx)(o.code,{children:".jsx"}),", ",(0,r.jsx)(o.code,{children:".ts"})," ou ",(0,r.jsx)(o.code,{children:".tsx"})," arquivo). Al\xe9m disso, ",(0,r.jsx)(o.code,{children:"babel-jest"})," injetar\xe1 o plugin Babel, necess\xe1rio para criar simula\xe7\xe3o (mock, em ingl\xeas), como falado em ",(0,r.jsx)(o.a,{href:"/pt-BR/docs/next/manual-mocks#using-with-es-module-imports",children:"Simula\xe7\xf5es em M\xf3dulos ES"}),"."]}),"\n",(0,r.jsxs)(o.admonition,{type:"tip",children:[(0,r.jsxs)(o.p,{children:["Lembre-se de incluir o transformador padr\xe3o ",(0,r.jsx)(o.code,{children:"babel-jest"})," explicitamente, se desejar us\xe1-lo com pr\xe9-processadores de c\xf3digo adicionais:"]}),(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,r.jsx)(o.h2,{id:"escrevendo-transformadores-personalizados",children:"Escrevendo transformadores personalizados"}),"\n",(0,r.jsx)(o.p,{children:"You can write your own transformer. The API of a transformer is as follows:"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-ts",children:"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: booleano;\n  /**\n   * O valor \xe9:\n   * - `false` se Jest rodar sem argumento Node ESM `--experimental-vm-modules`\n   * - `true` se a extens\xe3o do arquivo estiver definida em [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * e Jest rodar com argumento  Node ESM `--experimental-vm-modules`\n   *\n   * Veja mais em https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: booleano;\n  instrumentos: booleano;\n  /** Sistema de arquivos em cache \xe9 usado pelo `jest-runtime` para melhorar o desempenho. */\n  cacheFS: Map<string, string>;\n  /** Jest configuration of currently running project. */\n  config: ProjectConfig;\n  /** Stringified version of the `config` - useful in cache busting. */\n  configString: string;\n  /** Transformer configuration passed through `transform` option by the user. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n"})}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:["As defini\xe7\xf5es acima foram encurtadas por brevidade. Full code can be found in ",(0,r.jsx)(o.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-transform/src/types.ts",children:"Jest repo on GitHub"})," (remember to choose the right tag/commit for your version of Jest)."]})}),"\n",(0,r.jsxs)(o.p,{children:["H\xe1 algumas maneiras de importar c\xf3digo para o Jest - usando Common JS (",(0,r.jsx)(o.code,{children:"require"}),") ou M\xf3dulos ECMAScript (",(0,r.jsx)(o.code,{children:"import"})," - que existem em vers\xf5es est\xe1ticas e din\xe2micas). Jest passa os arquivos atrav\xe9s da transforma\xe7\xe3o de c\xf3digo na demanda (por exemplo, quando um ",(0,r.jsx)(o.code,{children:"require"})," ou ",(0,r.jsx)(o.code,{children:"import"}),' \xe9 avaliado). Este processo, tamb\xe9m conhecido como "transpila\xe7\xe3o", pode acontecer ',(0,r.jsx)(o.em,{children:"sincronizadamente"})," (no caso de ",(0,r.jsx)(o.code,{children:"require"}),"), ou ",(0,r.jsx)(o.em,{children:"asynchronously"})," (no caso de ",(0,r.jsx)(o.code,{children:"import"})," ou ",(0,r.jsx)(o.code,{children:"import()"}),", o \xfaltimo dos quais tamb\xe9m funciona com m\xf3dulos Common JS). Por esta raz\xe3o, a interface exp\xf5e os dois pares de m\xe9todos para processos ass\xedncronos e s\xedncronos: ",(0,r.jsx)(o.code,{children:"process{Async}"})," e ",(0,r.jsx)(o.code,{children:"getCacheKey{Async}"}),". O \xfaltimo \xe9 chamado para descobrir se precisamos chamar o ",(0,r.jsx)(o.code,{children:"process{Async}"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Asynchronous transpilation can fall back to the synchronous ",(0,r.jsx)(o.code,{children:"process"})," call if ",(0,r.jsx)(o.code,{children:"processAsync"})," is unimplemented, but synchronous transpilation cannot use the asynchronous ",(0,r.jsx)(o.code,{children:"processAsync"})," call. If your codebase is ESM only, implementing the async variants are sufficient. Otherwise, if any code is loaded through ",(0,r.jsx)(o.code,{children:"require"})," (including ",(0,r.jsx)(o.code,{children:"createRequire"})," from within ESM), then you need to implement the synchronous ",(0,r.jsx)(o.code,{children:"process"})," variant."]}),"\n",(0,r.jsxs)(o.p,{children:["Be aware that ",(0,r.jsx)(o.code,{children:"node_modules"})," is not transpiled with default config, the ",(0,r.jsx)(o.code,{children:"transformIgnorePatterns"})," setting must be modified in order to do so."]}),"\n",(0,r.jsxs)(o.p,{children:["Semi-related to this are the supports flags we pass (see ",(0,r.jsx)(o.code,{children:"CallerTransformOptions"})," above), but those should be used within the transform to figure out if it should return ESM or CJS, and has no direct bearing on sync vs async"]}),"\n",(0,r.jsxs)(o.p,{children:["Though not required, we ",(0,r.jsx)(o.em,{children:"highly recommend"})," implementing ",(0,r.jsx)(o.code,{children:"getCacheKey"})," as well, so we do not waste resources transpiling when we could have read its previous result from disk. You can use ",(0,r.jsx)(o.a,{href:"https://www.npmjs.com/package/@jest/create-cache-key-function",children:(0,r.jsx)(o.code,{children:"@jest/create-cache-key-function"})})," to help implement it."]}),"\n",(0,r.jsxs)(o.p,{children:["Instead of having your custom transformer implement the ",(0,r.jsx)(o.code,{children:"Transformer"})," interface directly, you can choose to export ",(0,r.jsx)(o.code,{children:"createTransformer"}),", a factory function to dynamically create transformers. This is to allow having a transformer config in your jest config."]}),"\n",(0,r.jsx)(o.admonition,{type:"note",children:(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/pt-BR/docs/next/ecmascript-modules",children:"ECMAScript module"})," support is indicated by the passed in ",(0,r.jsx)(o.code,{children:"supports*"})," options. Specifically ",(0,r.jsx)(o.code,{children:"supportsDynamicImport: true"})," means the transformer can return ",(0,r.jsx)(o.code,{children:"import()"})," expressions, which is supported by both ESM and CJS. If ",(0,r.jsx)(o.code,{children:"supportsStaticESM: true"})," it means top level ",(0,r.jsx)(o.code,{children:"import"})," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,r.jsx)(o.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's docs"})," for details on the differences."]})}),"\n",(0,r.jsxs)(o.admonition,{type:"tip",children:[(0,r.jsxs)(o.p,{children:["Certifique-se de que ",(0,r.jsx)(o.code,{children:"processs{Async}"})," o m\xe9todo retorna o mapa de origem juntamente com o c\xf3digo transformado, portanto, \xe9 poss\xedvel relatar informa\xe7\xe3o de linha com precis\xe3o na cobertura de c\xf3digo e erros de teste. Inline source maps also work but are slower."]}),(0,r.jsxs)(o.p,{children:["Durante o desenvolvimento de um transformador pode ser \xfatil executar Jest com ",(0,r.jsx)(o.code,{children:"--no-cache"})," para frequentemente ",(0,r.jsx)(o.a,{href:"/pt-BR/docs/next/troubleshooting#caching-issues",children:"delete cache"}),"."]})]}),"\n",(0,r.jsx)(o.h3,{id:"exemplos",children:"Exemplos"}),"\n",(0,r.jsx)(o.h3,{id:"typescript-com-verifica\xe7\xe3o-de-tipo",children:"TypeScript com verifica\xe7\xe3o de tipo"}),"\n",(0,r.jsxs)(o.p,{children:["While ",(0,r.jsx)(o.code,{children:"babel-jest"})," by default will transpile TypeScript files, Babel will not verify the types. If you want that you can use ",(0,r.jsx)(o.a,{href:"https://github.com/kulshekhar/ts-jest",children:(0,r.jsx)(o.code,{children:"ts-jest"})}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"transformando-imagens-em-seu-path",children:"Transformando imagens em seu path"}),"\n",(0,r.jsx)(o.p,{children:"Importing images is a way to include them in your browser bundle, but they are not valid JavaScript. One way of handling it in Jest is to replace the imported value with its filename."}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})})]})}const l=function(e={}){const{wrapper:o}=Object.assign({},(0,s.ah)(),e.components);return o?(0,r.jsx)(o,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},1670:(e,o,n)=>{n.d(o,{Zo:()=>i,ah:()=>a});var r=n(7378);const s=r.createContext({});function a(e){const o=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const t={};function i({components:e,children:o,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||t:a(e),r.createElement(s.Provider,{value:i},o)}}}]);
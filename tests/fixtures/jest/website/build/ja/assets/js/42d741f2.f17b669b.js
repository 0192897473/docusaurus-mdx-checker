"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1723],{5626:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=r(4246),o=r(1670);const t={id:"code-transformation",title:"\u30b3\u30fc\u30c9\u306e\u5909\u63db"},i=void 0,a={unversionedId:"code-transformation",id:"code-transformation",title:"\u30b3\u30fc\u30c9\u306e\u5909\u63db",description:"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/ja/docs/next/code-transformation",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"current",frontMatter:{id:"code-transformation",title:"\u30b3\u30fc\u30c9\u306e\u5909\u63db"},sidebar:"api",previous:{title:"\u74b0\u5883\u5909\u6570",permalink:"/ja/docs/next/environment-variables"}},c={},d=[{value:"\u30c7\u30d5\u30a9\u30eb\u30c8",id:"\u30c7\u30d5\u30a9\u30eb\u30c8",level:2},{value:"Writing custom transformers",id:"writing-custom-transformers",level:2},{value:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4f8b",id:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4f8b",level:3},{value:"\u578b\u30c1\u30a7\u30c3\u30af\u4ed8\u304dTypeScript",id:"\u578b\u30c1\u30a7\u30c3\u30af\u4ed8\u304dtypescript",level:3},{value:"\u753b\u50cf\u3092\u30d1\u30b9\u306b\u5909\u63db\u3059\u308b",id:"\u753b\u50cf\u3092\u30d1\u30b9\u306b\u5909\u63db\u3059\u308b",level:4}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",admonition:"admonition",pre:"pre",em:"em",h3:"h3",h4:"h4"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Jest runs the code in your project as JavaScript, but if you use some syntax not supported by Node out of the box (such as JSX, TypeScript, Vue templates) then you'll need to transform that code into plain JavaScript, similar to what you would do when building for browsers."}),"\n",(0,s.jsxs)(n.p,{children:["Jest supports this via the ",(0,s.jsx)(n.a,{href:"/ja/docs/next/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,s.jsx)(n.code,{children:"transform"})})," configuration option."]}),"\n",(0,s.jsx)(n.p,{children:"A transformer is a module that provides a method for transforming source files. For example, if you wanted to be able to use a new language feature in your modules or tests that aren't yet supported by Node, you might plug in a code preprocessor that would transpile a future version of JavaScript to a current one."}),"\n",(0,s.jsx)(n.p,{children:"Jest\u306f\u5909\u63db\u306e\u7d50\u679c\u3092\u30ad\u30e3\u30c3\u30b7\u30e5\u3057\u3001\u5909\u63db\u3055\u308c\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u30bd\u30fc\u30b9\u3084\u8a2d\u5b9a\u306e\u5909\u66f4\u306a\u3069\u3001\u591a\u304f\u306e\u8981\u56e0\u306b\u57fa\u3065\u3044\u3066\u305d\u306e\u7d50\u679c\u3092\u7121\u52b9\u306b\u3057\u3088\u3046\u3068\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u30c7\u30d5\u30a9\u30eb\u30c8",children:"\u30c7\u30d5\u30a9\u30eb\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:["Jest ships with one transformer out of the box \u2013 ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/packages/babel-jest#setup",children:(0,s.jsx)(n.code,{children:"babel-jest"})}),". It will load your project's Babel configuration and transform any file matching the ",(0,s.jsx)(n.code,{children:"/\\.[jt]sx?$/"})," RegExp (in other words, any ",(0,s.jsx)(n.code,{children:".js"}),", ",(0,s.jsx)(n.code,{children:".jsx"}),", ",(0,s.jsx)(n.code,{children:".ts"})," or ",(0,s.jsx)(n.code,{children:".tsx"})," file). In addition, ",(0,s.jsx)(n.code,{children:"babel-jest"})," will inject the Babel plugin necessary for mock hoisting talked about in ",(0,s.jsx)(n.a,{href:"/ja/docs/next/manual-mocks#using-with-es-module-imports",children:"ES Module mocking"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Remember to include the default ",(0,s.jsx)(n.code,{children:"babel-jest"})," transformer explicitly, if you wish to use it alongside with additional code preprocessors:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"writing-custom-transformers",children:"Writing custom transformers"}),"\n",(0,s.jsx)(n.p,{children:"You can write your own transformer. The API of a transformer is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * The value is:\n   * - `false` if Jest runs without Node ESM flag `--experimental-vm-modules`\n   * - `true` if the file extension is defined in [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * and Jest runs with Node ESM flag `--experimental-vm-modules`\n   *\n   * See more at https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  instrument: boolean;\n  /** Cached file system which is used by `jest-runtime` to improve performance. */\n  cacheFS: Map<string, string>;\n  /** Jest configuration of currently running project. */\n  config: ProjectConfig;\n  /** Stringified version of the `config` - useful in cache busting. */\n  configString: string;\n  /** Transformer configuration passed through `transform` option by the user. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The definitions above were trimmed down for brevity. Full code can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-transform/src/types.ts",children:"Jest repo on GitHub"})," (remember to choose the right tag/commit for your version of Jest)."]})}),"\n",(0,s.jsxs)(n.p,{children:["There are a couple of ways you can import code into Jest - using Common JS (",(0,s.jsx)(n.code,{children:"require"}),") or ECMAScript Modules (",(0,s.jsx)(n.code,{children:"import"})," - which exists in static and dynamic versions). Jest passes files through code transformation on demand (for instance when a ",(0,s.jsx)(n.code,{children:"require"})," or ",(0,s.jsx)(n.code,{children:"import"}),' is evaluated). This process, also known as "transpilation", might happen ',(0,s.jsx)(n.em,{children:"synchronously"})," (in the case of ",(0,s.jsx)(n.code,{children:"require"}),"), or ",(0,s.jsx)(n.em,{children:"asynchronously"})," (in the case of ",(0,s.jsx)(n.code,{children:"import"})," or ",(0,s.jsx)(n.code,{children:"import()"}),", the latter of which also works from Common JS modules). For this reason, the interface exposes both pairs of methods for asynchronous and synchronous processes: ",(0,s.jsx)(n.code,{children:"process{Async}"})," and ",(0,s.jsx)(n.code,{children:"getCacheKey{Async}"}),". The latter is called to figure out if we need to call ",(0,s.jsx)(n.code,{children:"process{Async}"})," at all."]}),"\n",(0,s.jsxs)(n.p,{children:["Asynchronous transpilation can fall back to the synchronous ",(0,s.jsx)(n.code,{children:"process"})," call if ",(0,s.jsx)(n.code,{children:"processAsync"})," is unimplemented, but synchronous transpilation cannot use the asynchronous ",(0,s.jsx)(n.code,{children:"processAsync"})," call. If your codebase is ESM only, implementing the async variants are sufficient. Otherwise, if any code is loaded through ",(0,s.jsx)(n.code,{children:"require"})," (including ",(0,s.jsx)(n.code,{children:"createRequire"})," from within ESM), then you need to implement the synchronous ",(0,s.jsx)(n.code,{children:"process"})," variant."]}),"\n",(0,s.jsxs)(n.p,{children:["Be aware that ",(0,s.jsx)(n.code,{children:"node_modules"})," is not transpiled with default config, the ",(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})," setting must be modified in order to do so."]}),"\n",(0,s.jsxs)(n.p,{children:["Semi-related to this are the supports flags we pass (see ",(0,s.jsx)(n.code,{children:"CallerTransformOptions"})," above), but those should be used within the transform to figure out if it should return ESM or CJS, and has no direct bearing on sync vs async"]}),"\n",(0,s.jsxs)(n.p,{children:["Though not required, we ",(0,s.jsx)(n.em,{children:"highly recommend"})," implementing ",(0,s.jsx)(n.code,{children:"getCacheKey"})," as well, so we do not waste resources transpiling when we could have read its previous result from disk. You can use ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@jest/create-cache-key-function",children:(0,s.jsx)(n.code,{children:"@jest/create-cache-key-function"})})," to help implement it."]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of having your custom transformer implement the ",(0,s.jsx)(n.code,{children:"Transformer"})," interface directly, you can choose to export ",(0,s.jsx)(n.code,{children:"createTransformer"}),", a factory function to dynamically create transformers. This is to allow having a transformer config in your jest config."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/ja/docs/next/ecmascript-modules",children:"ECMAScript module"})," support is indicated by the passed in ",(0,s.jsx)(n.code,{children:"supports*"})," options. Specifically ",(0,s.jsx)(n.code,{children:"supportsDynamicImport: true"})," means the transformer can return ",(0,s.jsx)(n.code,{children:"import()"})," expressions, which is supported by both ESM and CJS. If ",(0,s.jsx)(n.code,{children:"supportsStaticESM: true"})," it means top level ",(0,s.jsx)(n.code,{children:"import"})," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's docs"})," for details on the differences."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Make sure ",(0,s.jsx)(n.code,{children:"process{Async}"})," method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower."]}),(0,s.jsxs)(n.p,{children:["During the development of a transformer it can be useful to run Jest with ",(0,s.jsx)(n.code,{children:"--no-cache"})," to frequently ",(0,s.jsx)(n.a,{href:"/ja/docs/next/troubleshooting#caching-issues",children:"delete cache"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4f8b",children:"\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4f8b"}),"\n",(0,s.jsx)(n.h3,{id:"\u578b\u30c1\u30a7\u30c3\u30af\u4ed8\u304dtypescript",children:"\u578b\u30c1\u30a7\u30c3\u30af\u4ed8\u304dTypeScript"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"babel-jest"}),"\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067TypeScript\u30d5\u30a1\u30a4\u30eb\u3092\u30c8\u30e9\u30f3\u30b9\u30d1\u30a4\u30eb\u3057\u307e\u3059\u304c\u3001Babel\u306f\u30bf\u30a4\u30d7\u3092\u691c\u8a3c\u3057\u307e\u305b\u3093\u3002 \u305d\u3046\u3057\u305f\u3044\u5834\u5408\u306f\u3001 ",(0,s.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:(0,s.jsx)(n.code,{children:"ts-jest"})}),"\u3092\u4f7f\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u753b\u50cf\u3092\u30d1\u30b9\u306b\u5909\u63db\u3059\u308b",children:"\u753b\u50cf\u3092\u30d1\u30b9\u306b\u5909\u63db\u3059\u308b"}),"\n",(0,s.jsx)(n.p,{children:"\u753b\u50cf\u306e\u30a4\u30f3\u30dd\u30fc\u30c8\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u30d0\u30f3\u30c9\u30eb\u306b\u542b\u3081\u308b\uff11\u3064\u306e\u65b9\u6cd5\u3067\u3059\u304c\u3001\u6709\u52b9\u306aJavaScript\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002 Jest\u3067\u3053\u308c\u3092\u6271\u3046\u4e00\u3064\u306e\u65b9\u6cd5\u306f\u3001\u30a4\u30f3\u30dd\u30fc\u30c8\u3055\u308c\u305f\u5024\u3092\u305d\u306e\u30d5\u30a1\u30a4\u30eb\u540d\u3067\u7f6e\u304d\u63db\u3048\u308b\u3053\u3068\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},1670:(e,n,r)=>{r.d(n,{Zo:()=>a,ah:()=>t});var s=r(7378);const o=s.createContext({});function t(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function a({components:e,children:n,disableParentContext:r}){let a;return a=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(o.Provider,{value:a},n)}}}]);
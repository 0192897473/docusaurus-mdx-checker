"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4684],{3668:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=r(4246),o=r(1670);const t={id:"code-transformation",title:"\u4ee3\u7801\u8f6c\u6362"},i=void 0,c={unversionedId:"code-transformation",id:"version-29.5/code-transformation",title:"\u4ee3\u7801\u8f6c\u6362",description:"Jest \u4f1a\u5728\u9879\u76ee\u91cc\u4ee5\u539f\u59cb\u7684 JavaScript \u6267\u884c\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u7528\u4e86\u4e00\u4e9b Node \u73af\u5883\u4e0d\u652f\u6301\u7684\u8bed\u6cd5 (\u6bd4\u5982 JSX, TypeScript, Vue \u6a21\u677f\u8bed\u6cd5)\uff0c\u90a3\u5c31\u8981\u628a\u4f60\u7684\u4ee3\u7801\u8f6c\u8bd1\u6210\u539f\u59cb\u7684 JavaScript\uff0c\u8fd9\u5c31\u8ddf\u4f60\u5728\u6784\u5efa\u6d4f\u89c8\u5668\u524d\u7aef\u4ee3\u7801\u65f6\u8981\u505a\u7684\u8f6c\u8bd1\u5de5\u4f5c\u4e00\u6837\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-29.5/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/zh-Hans/docs/29.5/code-transformation",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.5",frontMatter:{id:"code-transformation",title:"\u4ee3\u7801\u8f6c\u6362"},sidebar:"api",previous:{title:"\u73af\u5883\u53d8\u91cf",permalink:"/zh-Hans/docs/29.5/environment-variables"}},a={},d=[{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",level:2},{value:"\u7f16\u5199\u81ea\u5b9a\u4e49Transformers",id:"\u7f16\u5199\u81ea\u5b9a\u4e49transformers",level:2},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3},{value:"\u68c0\u67e5\u5e26\u6709\u7c7b\u578b\u7684TypeScript",id:"\u68c0\u67e5\u5e26\u6709\u7c7b\u578b\u7684typescript",level:3},{value:"\u5c06\u56fe\u7247\u8f6c\u6362\u4e3a\u5176\u8def\u5f84",id:"\u5c06\u56fe\u7247\u8f6c\u6362\u4e3a\u5176\u8def\u5f84",level:4}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",admonition:"admonition",pre:"pre",em:"em",h3:"h3",h4:"h4"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Jest \u4f1a\u5728\u9879\u76ee\u91cc\u4ee5\u539f\u59cb\u7684 JavaScript \u6267\u884c\uff0c\u6240\u4ee5\u5982\u679c\u4f60\u7528\u4e86\u4e00\u4e9b Node \u73af\u5883\u4e0d\u652f\u6301\u7684\u8bed\u6cd5 (\u6bd4\u5982 JSX, TypeScript, Vue \u6a21\u677f\u8bed\u6cd5)\uff0c\u90a3\u5c31\u8981\u628a\u4f60\u7684\u4ee3\u7801\u8f6c\u8bd1\u6210\u539f\u59cb\u7684 JavaScript\uff0c\u8fd9\u5c31\u8ddf\u4f60\u5728\u6784\u5efa\u6d4f\u89c8\u5668\u524d\u7aef\u4ee3\u7801\u65f6\u8981\u505a\u7684\u8f6c\u8bd1\u5de5\u4f5c\u4e00\u6837\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["Jest \u63d0\u4f9b ",(0,s.jsx)(n.a,{href:"/zh-Hans/docs/29.5/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,s.jsx)(n.code,{children:"transform"})})," \u914d\u7f6e\u6765\u652f\u6301 Js \u8f6c\u8bd1\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8f6c\u8bd1\u5668\uff08Transformer\uff09 \u662f\u4e00\u4e2a\u80fd\u63d0\u4f9b\u8f6c\u8bd1\u6e90\u4ee3\u7801\u80fd\u529b\u7684\u6a21\u5757\u3002 \u4e3e\u4e2a\u4f8b\u5b50\uff0c\u5047\u5982\u4f60\u60f3\u5728\u4f60\u7684\u4e1a\u52a1\u548c\u6d4b\u8bd5\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e00\u4e9b\u8fd8\u6ca1\u88ab Node \u652f\u6301\u7684\u65b0\u8bed\u8a00\u7279\u6027\uff0c\u4f60\u53ef\u4ee5\u5f15\u5165\u4e00\u4e2a\u4ee3\u7801\u9884\u5904\u7406\u5668\u6765\u5c06\u65b0\u7248\u672c\u7684 JavaScript \u8f6c\u8bd1\u6210\u5f53\u524d\u652f\u6301\u7684\u7248\u672c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Jest\u5c06\u4f1a\u7f13\u5b58\u8f6c\u6362\u540e\u7684\u7ed3\u679c\uff0c\u5e76\u4e14\u8bd5\u56fe\u8ba9\u591a\u65b9\u56e0\u7d20\uff08\u6bd4\u5982\u6b63\u5728\u8f6c\u6362\u7684\u6587\u4ef6\u6e90\u548c\u914d\u7f6e\u4fe1\u606f\u88ab\u4fee\u6539\u7b49\uff09\u9020\u6210\u7684\u7ed3\u679c\u65e0\u6548"}),"\n",(0,s.jsx)(n.h2,{id:"\u9ed8\u8ba4\u503c",children:"\u9ed8\u8ba4\u503c"}),"\n",(0,s.jsxs)(n.p,{children:["Jest ships with one transformer out of the box \u2013 ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/packages/babel-jest#setup",children:(0,s.jsx)(n.code,{children:"babel-jest"})}),". \u5b83\u4f1a\u52a0\u8f7d\u4f60\u9879\u76ee\u7684 Babel \u914d\u7f6e\uff0c\u7136\u540e\u8f6c\u8bd1\u6240\u6709\u80fd\u6b63\u786e\u5339\u914d ",(0,s.jsx)(n.code,{children:"/\\.[jt]sx?$/"})," \u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6587\u4ef6(\u4e5f\u5373\u6240\u6709 ",(0,s.jsx)(n.code,{children:".js"}),"\uff0c",(0,s.jsx)(n.code,{children:".jsx"}),"\uff0c",(0,s.jsx)(n.code,{children:".ts"})," \u6216 ",(0,s.jsx)(n.code,{children:".tsx"})," \u6587\u4ef6)\u3002 \u6b64\u5916\uff0c",(0,s.jsx)(n.code,{children:"babel-jest"}),"\u8fd8\u5c06\u4f1a\u6ce8\u5165 ",(0,s.jsx)(n.a,{href:"/zh-Hans/docs/29.5/manual-mocks#using-with-es-module-imports",children:"ES Module mocking"}),"\u4e2d\u6240\u63d0\u5230\u7684Babel\u63d2\u4ef6\u3002"]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u8bb0\u4f4f\uff0c\u5982\u679c\u4f60\u60f3\u5c06\u5b83\u548c\u5176\u4ed6\u4ee3\u7801\u9884\u5904\u7406\u5668\u4e00\u8d77\u4f7f\u7528\uff0c\u90a3\u5fc5\u987b\u8981\u663e\u5f0f\u5730\u5f15\u5165\u9ed8\u8ba4\u7684 ",(0,s.jsx)(n.code,{children:"babel-jest"})," \u8f6c\u8bd1\u5668\uff0c"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u7f16\u5199\u81ea\u5b9a\u4e49transformers",children:"\u7f16\u5199\u81ea\u5b9a\u4e49Transformers"}),"\n",(0,s.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u7f16\u5199\u4e13\u5c5e\u7684Transformer\uff0c Transformer\u7684API\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * The value is:\n   * - `false` if Jest runs without Node ESM flag `--experimental-vm-modules`\n   * - `true` if the file extension is defined in [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * and Jest runs with Node ESM flag `--experimental-vm-modules`\n   *\n   * See more at https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  instrument: boolean;\n  /** Cached file system which is used by `jest-runtime` to improve performance. */\n  cacheFS: Map<string, string>;\n  /** Jest configuration of currently running project. */\n  config: ProjectConfig;\n  /** Stringified version of the `config` - useful in cache busting. */\n  configString: string;\n  /** Transformer configuration passed through `transform` option by the user. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u7b80\u6d01\u8d77\u89c1\uff0c\u4e0a\u9762\u67d0\u4e9b\u7c7b\u578b\u6ca1\u6709\u5b8c\u5168\u5217\u51fa\u3002 Full code can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-transform/src/types.ts",children:"Jest repo on GitHub"})," (remember to choose the right tag/commit for your version of Jest)."]})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 Jest \u65f6\uff0c\u6709\u51e0\u79cd\u5f15\u5165\u6a21\u5757\u7684\u65b9\u5f0f - \u4f7f\u7528 Common JS (",(0,s.jsx)(n.code,{children:"require"}),") \u6216\u8005 ECMAScript Modules (",(0,s.jsx)(n.code,{children:"import"})," -\u9759\u6001\u548c\u52a8\u6001\u5f15\u5165) Jest \u4f1a\u6309\u9700\u628a\u6587\u4ef6\u4f20\u7ed9\u8f6c\u8bd1\u5668 (\u6bd4\u5982\uff0c\u5f53\u68c0\u6d4b\u5230 ",(0,s.jsx)(n.code,{children:"require"})," \u6216 ",(0,s.jsx)(n.code,{children:"import"}),' \u7684\u65f6\u5019) \u8fd9\u4e2a\u8fc7\u7a0b\u4e5f\u79f0\u4e3a "\u8f6c\u8bd1"\uff0c\u53ef\u80fd\u662f_\u540c\u6b65_ (\u4f7f\u7528',(0,s.jsx)(n.code,{children:"require"})," \u7684\u65f6\u5019) \u8fdb\u884c\u7684\uff0c\u4e5f\u53ef\u80fd\u662f_\u5f02\u6b65_\u8fdb\u884c\u7684 (\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"import"})," \u6216 ",(0,s.jsx)(n.code,{children:"import()"})," \u7684\u65f6\u5019\uff0c\u540e\u8005\u4e5f\u9002\u7528\u4e8e Common JS \u6a21\u5757) \u56e0\u6b64\uff0c\u8fd9\u4e2a\u63a5\u53e3\u4e5f\u66b4\u9732\u4e86\u5f02\u6b65\u548c\u540c\u6b65\u8fc7\u7a0b\u7684\u4e24\u5bf9\u65b9\u6cd5: ",(0,s.jsx)(n.code,{children:"process{Async}"})," \u548c ",(0,s.jsx)(n.code,{children:"getCacheKey{Async}"})," \u540e\u8005\u4e5f\u53ef\u4ee5\u7528\u6765\u68c0\u67e5\u6211\u4eec\u662f\u5426\u771f\u7684\u9700\u8981\u8c03\u7528 ",(0,s.jsx)(n.code,{children:"process{Async}"})]}),"\n",(0,s.jsxs)(n.p,{children:["Asynchronous transpilation can fall back to the synchronous ",(0,s.jsx)(n.code,{children:"process"})," call if ",(0,s.jsx)(n.code,{children:"processAsync"})," is unimplemented, but synchronous transpilation cannot use the asynchronous ",(0,s.jsx)(n.code,{children:"processAsync"})," call. If your codebase is ESM only, implementing the async variants are sufficient. Otherwise, if any code is loaded through ",(0,s.jsx)(n.code,{children:"require"})," (including ",(0,s.jsx)(n.code,{children:"createRequire"})," from within ESM), then you need to implement the synchronous ",(0,s.jsx)(n.code,{children:"process"})," variant."]}),"\n",(0,s.jsxs)(n.p,{children:["Be aware that ",(0,s.jsx)(n.code,{children:"node_modules"})," is not transpiled with default config, the ",(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})," setting must be modified in order to do so."]}),"\n",(0,s.jsxs)(n.p,{children:["Semi-related to this are the supports flags we pass (see ",(0,s.jsx)(n.code,{children:"CallerTransformOptions"})," above), but those should be used within the transform to figure out if it should return ESM or CJS, and has no direct bearing on sync vs async"]}),"\n",(0,s.jsxs)(n.p,{children:["Though not required, we ",(0,s.jsx)(n.em,{children:"highly recommend"})," implementing ",(0,s.jsx)(n.code,{children:"getCacheKey"})," as well, so we do not waste resources transpiling when we could have read its previous result from disk. \u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@jest/create-cache-key-function",children:(0,s.jsx)(n.code,{children:"@jest/create-cache-key-function"})}),"\u6765\u5e2e\u52a9\u4f60\u5b9e\u73b0\u5b83"]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of having your custom transformer implement the ",(0,s.jsx)(n.code,{children:"Transformer"})," interface directly, you can choose to export ",(0,s.jsx)(n.code,{children:"createTransformer"}),", a factory function to dynamically create transformers. This is to allow having a transformer config in your jest config."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh-Hans/docs/29.5/ecmascript-modules",children:"ECMAScript module"})," support is indicated by the passed in ",(0,s.jsx)(n.code,{children:"supports*"})," options. \u5177\u4f53\u6765\u8bf4",(0,s.jsx)(n.code,{children:"supportsDynamicImport: true"})," \u8868\u793a\u7684\u662f\u8fd9\u4e2atransformer\u53ef\u4ee5\u8fd4\u56deESM\u548cCJS\u90fd\u652f\u6301\u7684",(0,s.jsx)(n.code,{children:"import()"}),"\u8868\u8fbe\u5f0f\u3002 \u800c ",(0,s.jsx)(n.code,{children:"supportsStaticESM: true"})," \u5219\u8868\u793a\u7684\u662f\u652f\u6301\u6700\u9ad8\u7ea7\u522b\u7684",(0,s.jsx)(n.code,{children:"import"}),"\u8bed\u53e5\uff0c\u4ee3\u7801\u5c06\u88ab\u89e3\u91ca\u4e3aESM\u800c\u4e0d\u662fCJS\u3002 \u9605\u8bfb ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's docs"}),"\u4e86\u89e3ESM\u548cCJS\u4e4b\u95f4\u7684\u5177\u4f53\u5dee\u5f02\u4fe1\u606f"]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Make sure ",(0,s.jsx)(n.code,{children:"process{Async}"})," method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower."]}),(0,s.jsxs)(n.p,{children:["During the development of a transformer it can be useful to run Jest with ",(0,s.jsx)(n.code,{children:"--no-cache"})," to frequently ",(0,s.jsx)(n.a,{href:"/zh-Hans/docs/29.5/troubleshooting#caching-issues",children:"delete cache"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,s.jsx)(n.h3,{id:"\u68c0\u67e5\u5e26\u6709\u7c7b\u578b\u7684typescript",children:"\u68c0\u67e5\u5e26\u6709\u7c7b\u578b\u7684TypeScript"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"babel-jest"}),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4f1a\u4f20\u8f93TypeScript\u6587\u4ef6\uff0c\u4f46Babel\u5e76\u4e0d\u4f1a\u5bf9\u7c7b\u578b\u6821\u9a8c\u3002 \u5982\u679c\u4f60\u9700\u8981\u6821\u9a8c\u7c7b\u578b\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:(0,s.jsx)(n.code,{children:"ts-jest"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"\u5c06\u56fe\u7247\u8f6c\u6362\u4e3a\u5176\u8def\u5f84",children:"\u5c06\u56fe\u7247\u8f6c\u6362\u4e3a\u5176\u8def\u5f84"}),"\n",(0,s.jsx)(n.p,{children:"\u5bfc\u5165\u56fe\u50cf\u662f\u5c06\u5176\u5305\u542b\u5728\u6d4f\u89c8\u5668\u5305\u4e2d\u7684\u4e00\u79cd\u65b9\u6cd5\uff0c\u4f46\u5b83\u4eec\u4e0d\u662f\u6709\u6548\u7684JavaScript\u3002 \u5728Jest\u4e2d\u6709\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u662f\u5c06\u5b83\u4eec\u7684\u6587\u4ef6\u540d\u66ff\u6362\u6210\u5bfc\u5165\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},1670:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>t});var s=r(7378);const o=s.createContext({});function t(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(o.Provider,{value:c},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3374],{5796:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var s=r(4246),o=r(1670);const t={id:"code-transformation",title:"\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043a\u043e\u0434\u0443"},i=void 0,c={unversionedId:"code-transformation",id:"version-29.5/code-transformation",title:"\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043a\u043e\u0434\u0443",description:'Jest \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u043a\u043e\u0434 \u0443 \u0432\u0430\u0448\u043e\u043c\u0443 \u043f\u0440\u043e\u0454\u043a\u0442\u0456 \u044f\u043a JavaScript. \u041f\u0440\u043e\u0442\u0435, \u044f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441, \u044f\u043a\u0438\u0439 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f Node "\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438" (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, JSX, TypeScript, \u0448\u0430\u0431\u043b\u043e\u043d\u0438 Vue), \u0442\u043e \u0441\u043b\u0456\u0434 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0446\u0435\u0439 \u043a\u043e\u0434 \u0443 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0438\u0439 JavaScript, \u043f\u043e\u0434\u0456\u0431\u043d\u0438\u0439 \u0434\u043e \u0442\u043e\u0433\u043e, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456\u0432.',source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.5/CodeTransformation.md",sourceDirName:".",slug:"/code-transformation",permalink:"/uk/docs/29.5/code-transformation",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.5",frontMatter:{id:"code-transformation",title:"\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043a\u043e\u0434\u0443"},sidebar:"api",previous:{title:"\u0417\u043c\u0456\u043d\u043d\u0456 \u043e\u0442\u043e\u0447\u0435\u043d\u043d\u044f",permalink:"/uk/docs/29.5/environment-variables"}},a={},d=[{value:"\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0456 \u043e\u043f\u0446\u0456\u0457",id:"\u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0456-\u043e\u043f\u0446\u0456\u0457",level:2},{value:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0456\u0432",id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0432\u043b\u0430\u0441\u043d\u0438\u0445-\u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0456\u0432",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:3},{value:"TypeScript \u0437 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u043e\u044e \u0442\u0438\u043f\u0443",id:"typescript-\u0437-\u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u043e\u044e-\u0442\u0438\u043f\u0443",level:3},{value:"\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u043d\u0430 \u0457\u0445 \u0448\u043b\u044f\u0445",id:"\u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c-\u043d\u0430-\u0457\u0445-\u0448\u043b\u044f\u0445",level:4}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",admonition:"admonition",pre:"pre",em:"em",h3:"h3",h4:"h4"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:'Jest \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u043a\u043e\u0434 \u0443 \u0432\u0430\u0448\u043e\u043c\u0443 \u043f\u0440\u043e\u0454\u043a\u0442\u0456 \u044f\u043a JavaScript. \u041f\u0440\u043e\u0442\u0435, \u044f\u043a\u0449\u043e \u0432\u0438 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u0435 \u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441, \u044f\u043a\u0438\u0439 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u0454\u0442\u044c\u0441\u044f Node "\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438" (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, JSX, TypeScript, \u0448\u0430\u0431\u043b\u043e\u043d\u0438 Vue), \u0442\u043e \u0441\u043b\u0456\u0434 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0446\u0435\u0439 \u043a\u043e\u0434 \u0443 \u0437\u0432\u0438\u0447\u0430\u0439\u043d\u0438\u0439 JavaScript, \u043f\u043e\u0434\u0456\u0431\u043d\u0438\u0439 \u0434\u043e \u0442\u043e\u0433\u043e, \u0449\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456\u0432.'}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 Jest \u0446\u0435 \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e \u043e\u043f\u0446\u0456\u0457 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 ",(0,s.jsx)(n.a,{href:"/uk/docs/29.5/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,s.jsx)(n.code,{children:"transform"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447 \u2014 \u0446\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u0449\u043e \u043d\u0430\u0434\u0430\u0454 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u0438\u0445\u0456\u0434\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u0456\u0432. \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0431\u0438 \u0432\u0430\u043c \u0431\u0443\u043b\u043e \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438 \u043d\u043e\u0432\u0456 \u043c\u043e\u0436\u043b\u0438\u0432\u043e\u0441\u0442\u0456 \u043c\u043e\u0432\u0438 \u0432 \u0432\u0430\u0448\u0438\u0445 \u043c\u043e\u0434\u0443\u043b\u044f\u0445 \u0430\u0431\u043e \u0442\u0435\u0441\u0442\u0430\u0445, \u044f\u043a\u0456 \u0449\u0435 \u043d\u0435 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u0443\u044e\u0442\u044c\u0441\u044f Node, \u0432\u0438 \u0431 \u043c\u043e\u0433\u043b\u0438 \u043f\u0456\u0434'\u0454\u0434\u043d\u0430\u0442\u0438 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440 \u043a\u043e\u0434\u0443, \u044f\u043a\u0438\u0439 \u043f\u0435\u0440\u0435\u043a\u043b\u0430\u0434\u0435 \u0439\u043e\u0433\u043e \u0437 \u043c\u0430\u0439\u0431\u0443\u0442\u043d\u044c\u043e\u0457 \u0432\u0435\u0440\u0441\u0456\u0457 JavaScript \u043d\u0430 \u043f\u043e\u0442\u043e\u0447\u043d\u0443."}),"\n",(0,s.jsx)(n.p,{children:"Jest \u0437\u0430\u043a\u0435\u0448\u0443\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0442\u0430 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0442\u0438\u043c\u0435 \u0439\u043e\u0433\u043e \u0434\u0456\u0439\u0441\u043d\u0456\u0441\u0442\u044c \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0456 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u043e\u0445 \u0444\u0430\u043a\u0442\u043e\u0440\u0456\u0432, \u0442\u0430\u043a\u0438\u0445, \u044f\u043a \u0434\u0436\u0435\u0440\u0435\u043b\u043e \u0444\u0430\u0439\u043b\u0443, \u0449\u043e \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0443\u0454\u0442\u044c\u0441\u044f, \u0442\u0430 \u0437\u043c\u0456\u043d\u0430 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457."}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0456-\u043e\u043f\u0446\u0456\u0457",children:"\u0412\u0431\u0443\u0434\u043e\u0432\u0430\u043d\u0456 \u043e\u043f\u0446\u0456\u0457"}),"\n",(0,s.jsxs)(n.p,{children:["Jest ships with one transformer out of the box \u2013 ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/packages/babel-jest#setup",children:(0,s.jsx)(n.code,{children:"babel-jest"})}),". \u0412\u0456\u043d \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454 Babel \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e \u0432\u0430\u0448\u043e\u0433\u043e \u043f\u0440\u043e\u0454\u043a\u0442\u0443 \u0442\u0430 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0454 \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 \u0444\u0430\u0439\u043b, \u044f\u043a\u0438\u0439 \u0432\u0456\u0434\u043f\u043e\u0432\u0456\u0434\u0430\u0454 \u0440\u0435\u0433\u0443\u043b\u044f\u0440\u043d\u043e\u043c\u0443 \u0432\u0438\u0440\u0430\u0437\u0443 ",(0,s.jsx)(n.code,{children:"/\\.[jt]sx?$/"})," (\u0456\u043d\u0448\u0438\u043c\u0438 \u0441\u043b\u043e\u0432\u0430\u043c\u0438, \u0431\u0443\u0434\u044c-\u044f\u043a\u0438\u0439 ",(0,s.jsx)(n.code,{children:". s"}),", ",(0,s.jsx)(n.code,{children:".jsx"}),", ",(0,s.jsx)(n.code,{children:".ts"})," \u0430\u0431\u043e ",(0,s.jsx)(n.code,{children:".tsx"})," \u0444\u0430\u0439\u043b). \u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u043e, ",(0,s.jsx)(n.code,{children:"babel-jest"})," \u0434\u043e\u0434\u0430\u0441\u0442\u044c \u043f\u043b\u0430\u0433\u0456\u043d Babel, \u043d\u0435\u043e\u0431\u0445\u0456\u0434\u043d\u0438\u0439 \u0434\u043b\u044f \u0456\u043c\u0456\u0442\u0430\u0446\u0456\u0457 \u043f\u0456\u0434\u043d\u044f\u0442\u0442\u044f, \u043f\u0440\u043e \u044f\u043a\u0443 \u0439\u0434\u0435 \u043c\u043e\u0432\u0430 \u0432 ",(0,s.jsx)(n.a,{href:"/uk/docs/29.5/manual-mocks#using-with-es-module-imports",children:"ES Module mocking"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["\u041d\u0435 \u0437\u0430\u0431\u0443\u0434\u044c\u0442\u0435 \u044f\u0432\u043d\u043e \u0434\u043e\u0434\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"babel-jest"}),", \u044f\u043a\u0449\u043e \u0432\u0438 \u0445\u043e\u0447\u0435\u0442\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0439\u043e\u0433\u043e \u0440\u0430\u0437\u043e\u043c \u0437 \u0434\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u043c\u0438 \u043f\u0440\u0435\u043f\u0440\u043e\u0446\u0435\u0441\u043e\u0440\u0430\u043c\u0438 \u043a\u043e\u0434\u0443:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0432\u043b\u0430\u0441\u043d\u0438\u0445-\u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0456\u0432",children:"\u0421\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0432\u043b\u0430\u0441\u043d\u0438\u0445 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0456\u0432"}),"\n",(0,s.jsx)(n.p,{children:"You can write your own transformer. The API of a transformer is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"interface TransformOptions<TransformerConfig = unknown> {\n  supportsDynamicImport: boolean;\n  supportsExportNamespaceFrom: boolean;\n  /**\n   * \u0417\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0434\u043e\u0440\u0456\u0432\u043d\u044e\u0454:\n   * - `false`, \u044f\u043a\u0449\u043e Jest \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0431\u0435\u0437 \u043f\u0440\u0430\u043f\u043e\u0440\u0443 Node ESM `--experimental-vm-modules`\n   * - `true`, \u044f\u043a\u0449\u043e \u0440\u043e\u0437\u0448\u0438\u0440\u0435\u043d\u043d\u044f \u0444\u0430\u0439\u043b\u0443 \u0432\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0432 [extensionsToTreatAsEsm](Configuration.md#extensionstotreatasesm-arraystring)\n   * \u0442\u0430 Jest \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0437 \u043f\u0440\u0430\u043f\u043e\u0440\u043e\u043c Node ESM `--experimental-vm-modules`\n   *\n   * \u0414\u0435\u0442\u0430\u043b\u044c\u043d\u0456\u0448\u0435 \u0442\u0443\u0442 https://jestjs.io/docs/next/ecmascript-modules\n   */\n  supportsStaticESM: boolean;\n  supportsTopLevelAwait: boolean;\n  instrument: boolean;\n  /** \u041a\u0435\u0448\u043e\u0432\u0430\u043d\u0430 \u0444\u0430\u0439\u043b\u043e\u0432\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430, \u044f\u043a\u0443 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454 `jest-runtime` \u0434\u043b\u044f \u043f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0456. */\n  cacheFS: Map<string, string>;\n  /** Jest \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u043d\u0438\u043d\u0456 \u0437\u0430\u043f\u0443\u0449\u0435\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0454\u043a\u0442\u0443. */\n  config: ProjectConfig;\n  /** \u0420\u044f\u0434\u043a\u043e\u0432\u0430 \u0432\u0435\u0440\u0441\u0456\u044f `config` - \u043a\u043e\u0440\u0438\u0441\u043d\u0430 \u0434\u043b\u044f \u0441\u043a\u0438\u0434\u0430\u043d\u043d\u044f \u043a\u0435\u0448\u0443. */\n  configString: string;\n  /** \u041a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044f \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0430, \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0430 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0435\u043c \u0447\u0435\u0440\u0435\u0437 `transform`. */\n  transformerConfig: TransformerConfig;\n}\n\ntype TransformedSource = {\n  code: string;\n  map?: RawSourceMap | string | null;\n};\n\ninterface SyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ninterface AsyncTransformer<TransformerConfig = unknown> {\n  canInstrument?: boolean;\n\n  getCacheKey?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => string;\n\n  getCacheKeyAsync?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<string>;\n\n  process?: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => TransformedSource;\n\n  processAsync: (\n    sourceText: string,\n    sourcePath: string,\n    options: TransformOptions<TransformerConfig>,\n  ) => Promise<TransformedSource>;\n}\n\ntype Transformer<TransformerConfig = unknown> =\n  | SyncTransformer<TransformerConfig>\n  | AsyncTransformer<TransformerConfig>;\n\ntype TransformerCreator<\n  X extends Transformer<TransformerConfig>,\n  TransformerConfig = unknown,\n> = (transformerConfig?: TransformerConfig) => X;\n\ntype TransformerFactory<X extends Transformer> = {\n  createTransformer: TransformerCreator<X>;\n};\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u0417\u0430\u0434\u043b\u044f \u0441\u0442\u0438\u0441\u043b\u043e\u0441\u0442\u0456, \u043d\u0430\u0432\u0435\u0434\u0435\u043d\u0438\u0439 \u0432\u0438\u0449\u0435 \u043a\u043e\u0434 \u0431\u0443\u0432 \u0441\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u0438\u0439. Full code can be found in ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/packages/jest-transform/src/types.ts",children:"Jest repo on GitHub"})," (remember to choose the right tag/commit for your version of Jest)."]})}),"\n",(0,s.jsxs)(n.p,{children:["\u0406\u0441\u043d\u0443\u0454 \u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u043f\u043e\u0441\u043e\u0431\u0456\u0432 \u0456\u043c\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043a\u043e\u0434 \u0443 Jest - \u0437\u0430 \u0434\u043e\u043f\u043e\u043c\u043e\u0433\u043e\u044e Common JS (",(0,s.jsx)(n.code,{children:"require"}),") \u0430\u0431\u043e \u043c\u043e\u0434\u0443\u043b\u0456\u0432 ECMAScript (",(0,s.jsx)(n.code,{children:"import"}),", \u044f\u043a\u0438\u0439 \u0456\u0441\u043d\u0443\u0454 \u0432 \u0441\u0442\u0430\u0442\u0438\u0447\u043d\u0456\u0439 \u0442\u0430 \u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u0456\u0439 \u0432\u0435\u0440\u0441\u0456\u044f\u0445). \u0417\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c, Jest \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u0430\u0454 \u0444\u0430\u0439\u043b\u0438 \u0447\u0435\u0440\u0435\u0437 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043a\u043e\u0434\u0443 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043a\u043e\u043b\u0438 \u0432\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f ",(0,s.jsx)(n.code,{children:"require"})," \u0430\u0431\u043e ",(0,s.jsx)(n.code,{children:"import"}),'). \u0426\u0435\u0439 \u043f\u0440\u043e\u0446\u0435\u0441, \u0432\u0456\u0434\u043e\u043c\u0438\u0439 \u044f\u043a "\u0442\u0440\u0430\u043d\u0441\u043f\u0456\u043b\u044f\u0446\u0456\u044f", \u043c\u043e\u0436\u0435 \u0432\u0456\u0434\u0431\u0443\u0432\u0430\u0442\u0438\u0441\u044f ',(0,s.jsx)(n.em,{children:"\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e"})," (\u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443 ",(0,s.jsx)(n.code,{children:"require"}),"), \u0430\u0431\u043e ",(0,s.jsx)(n.em,{children:"\u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e"})," (\u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443 ",(0,s.jsx)(n.code,{children:"import"})," \u0430\u0431\u043e ",(0,s.jsx)(n.code,{children:"import()"}),"; \u043e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0442\u0430\u043a\u043e\u0436 \u043c\u043e\u0436\u0435 \u0432\u0438\u043a\u043e\u043d\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0437 Common JS \u043c\u043e\u0434\u0443\u043b\u0456\u0432). \u0417 \u0446\u0456\u0454\u0457 \u043f\u0440\u0438\u0447\u0438\u043d\u0438, \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u043f\u0456\u0434\u0434\u0430\u0454 \u043e\u0431\u0438\u0434\u0432\u0456 \u043f\u0430\u0440\u0438 \u043c\u0435\u0442\u043e\u0434\u0456\u0432 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u043c\u0443 \u0442\u0430 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0446\u0435\u0441\u0430\u043c: ",(0,s.jsx)(n.code,{children:"process{Async}"})," \u0442\u0430 ",(0,s.jsx)(n.code,{children:"getCacheKey{Async}"}),". \u041e\u0441\u0442\u0430\u043d\u043d\u0456\u0439 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454\u0442\u044c\u0441\u044f, \u0449\u043e\u0431 \u0437'\u044f\u0441\u0443\u0432\u0430\u0442\u0438, \u0447\u0438 \u0442\u0440\u0435\u0431\u0430 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"process{Async}"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u0456\u043b\u044f\u0446\u0456\u044f \u043c\u043e\u0436\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044f \u0434\u043e \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e ",(0,s.jsx)(n.code,{children:"\u043f\u0440\u043e\u0446\u0435\u0441\u0443"})," \u0432\u0438\u043a\u043b\u0438\u043a\u0443, \u044f\u043a\u0449\u043e ",(0,s.jsx)(n.code,{children:"processAsync"})," \u043d\u0435 \u0440\u0435\u0430\u043b\u0456\u0437\u043e\u0432\u0430\u043d\u043e, \u0430\u043b\u0435 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u043f\u0456\u043b\u044f\u0446\u0456\u044f \u043d\u0435 \u043c\u043e\u0436\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0438\u0439 ",(0,s.jsx)(n.code,{children:"processAsync"})," \u0432\u0438\u043a\u043b\u0438\u043a. \u042f\u043a\u0449\u043e ESM \u0454 \u0432\u0430\u0448\u043e\u044e \u043a\u043e\u0434\u043e\u0432\u043e\u044e \u0431\u0430\u0437\u043e\u044e, \u0434\u043e\u0441\u0442\u0430\u0442\u043d\u044c\u043e \u0440\u0435\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0456 \u0432\u0430\u0440\u0456\u0430\u043d\u0442\u0438. \u0406\u043d\u0430\u043a\u0448\u0435, \u044f\u043a\u0449\u043e \u0431\u0443\u0434\u044c-\u044f\u043a\u0443 \u0447\u0430\u0441\u0442\u0438\u043d\u0443 \u043a\u043e\u0434\u0443 \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 ",(0,s.jsx)(n.code,{children:"require"})," (",(0,s.jsx)(n.code,{children:"createRequire"})," \u0437 ESM \u0432\u043a\u043b\u044e\u0447\u043d\u043e), \u0434\u043e\u0432\u0435\u0434\u0435\u0442\u044c\u0441\u044f \u043f\u0440\u043e\u043f\u0438\u0441\u0443\u0432\u0430\u0442\u0438 \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0438\u0439 \u0432\u0430\u0440\u0456\u0430\u043d\u0442 ",(0,s.jsx)(n.code,{children:"process"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u041c\u0430\u0439\u0442\u0435 \u043d\u0430 \u0443\u0432\u0430\u0437\u0456, \u0449\u043e ",(0,s.jsx)(n.code,{children:"node_modules"})," \u043d\u0435 \u0442\u0440\u0430\u043d\u0441\u043f\u0456\u043b\u044e\u0454\u0442\u044c\u0441\u044f \u0437 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f\u043c \u0437\u0430 \u0437\u0430\u043c\u043e\u0432\u0447\u0443\u0432\u0430\u043d\u043d\u044f\u043c, \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043f\u043e\u0432\u0438\u043d\u043d\u0456 \u0431\u0443\u0442\u0438 \u0437\u043c\u0456\u043d\u0435\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f ",(0,s.jsx)(n.code,{children:"transformIgnorePatterns"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0427\u0430\u0441\u0442\u043a\u043e\u0432\u043e \u0434\u043e \u0446\u044c\u043e\u0433\u043e \u043f\u0440\u0438\u0447\u0435\u0442\u043d\u0456 \u043f\u0440\u0430\u043f\u043e\u0440\u0438 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0438, \u044f\u043a\u0456 \u043c\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u0454\u043c\u043e (",(0,s.jsx)(n.code,{children:"CallerTransformOptions"}),", \u044f\u043a \u043f\u0440\u0438\u043a\u043b\u0430\u0434), \u0430\u043b\u0435 \u0432\u043e\u043d\u0438 \u043c\u0430\u044e\u0442\u044c \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044c \u0432\u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f, \u0430\u0431\u0438 \u0437\u0440\u043e\u0437\u0443\u043c\u0456\u0442\u0438, \u043f\u043e\u0432\u0435\u0440\u0442\u0430\u0454\u0442\u044c\u0441\u044f ESM \u0447\u0438 CJS, \u0442\u0430 \u043d\u0435 \u0432\u043f\u043b\u0438\u0432\u0430\u044e\u0442\u044c \u043d\u0430 \u043f\u0438\u0442\u0430\u043d\u043d\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u0456."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0425\u043e\u0447 \u0446\u0435 \u0439 \u043d\u0435 \u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e, \u043c\u0438 ",(0,s.jsx)(n.em,{children:"\u0434\u0443\u0436\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0454\u043c\u043e"})," \u0440\u0435\u0430\u043b\u0456\u0437\u0443\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"getCacheKey"}),", \u0430\u0431\u0438 \u043d\u0435 \u0432\u0438\u0442\u0440\u0430\u0447\u0430\u0442\u0438 \u0440\u0435\u0441\u0443\u0440\u0441\u0438 \u043d\u0430 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043a\u043e\u0434\u0443 \u0442\u0430 \u0437\u0447\u0438\u0442\u0430\u0442\u0438 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u0456\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437 \u0434\u0438\u0441\u043a\u0430. You can use ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@jest/create-cache-key-function",children:(0,s.jsx)(n.code,{children:"@jest/create-cache-key-function"})})," to help implement it."]}),"\n",(0,s.jsxs)(n.p,{children:["\u0417\u0430\u043c\u0456\u0441\u0442\u044c \u043f\u0440\u044f\u043c\u043e\u0457 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u0443 \u0432\u0430\u0448\u043e\u043c\u0443 \u0432\u043b\u0430\u0441\u043d\u043e\u043c\u0443 \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0456 \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0443 ",(0,s.jsx)(n.code,{children:"Transformer"}),", \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"createTransformer"})," - \u0444\u0430\u0431\u0440\u0438\u0447\u043d\u0438\u0439 \u043c\u0435\u0442\u043e\u0434 \u0434\u043b\u044f \u0434\u0438\u043d\u0430\u043c\u0456\u0447\u043d\u043e\u0433\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0456\u0432. \u0426\u0435 \u0434\u043e\u0437\u0432\u043e\u043b\u0438\u0442\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e \u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u044e\u0432\u0430\u0447\u0430 \u0443 \u0432\u0430\u0448\u0456\u0439 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 Jest."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\u041d\u0430 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0443 ",(0,s.jsx)(n.a,{href:"/uk/docs/29.5/ecmascript-modules",children:"\u043c\u043e\u0434\u0443\u043b\u044e ECMAScript"})," \u0432\u043a\u0430\u0437\u0443\u044e\u0442\u044c \u043e\u043f\u0446\u0456\u0457, \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u0456 \u0432 ",(0,s.jsx)(n.code,{children:"supports*"}),". Specifically ",(0,s.jsx)(n.code,{children:"supportsDynamicImport: true"})," means the transformer can return ",(0,s.jsx)(n.code,{children:"import()"})," expressions, which is supported by both ESM and CJS. If ",(0,s.jsx)(n.code,{children:"supportsStaticESM: true"})," it means top level ",(0,s.jsx)(n.code,{children:"import"})," statements are supported and the code will be interpreted as ESM and not CJS. See ",(0,s.jsx)(n.a,{href:"https://nodejs.org/api/esm.html#esm_differences_between_es_modules_and_commonjs",children:"Node's docs"})," for details on the differences."]})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Make sure ",(0,s.jsx)(n.code,{children:"process{Async}"})," method returns source map alongside with transformed code, so it is possible to report line information accurately in code coverage and test errors. Inline source maps also work but are slower."]}),(0,s.jsxs)(n.p,{children:["During the development of a transformer it can be useful to run Jest with ",(0,s.jsx)(n.code,{children:"--no-cache"})," to frequently ",(0,s.jsx)(n.a,{href:"/uk/docs/29.5/troubleshooting#caching-issues",children:"delete cache"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",children:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\n",(0,s.jsx)(n.h3,{id:"typescript-\u0437-\u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u043e\u044e-\u0442\u0438\u043f\u0443",children:"TypeScript \u0437 \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u043a\u043e\u044e \u0442\u0438\u043f\u0443"}),"\n",(0,s.jsxs)(n.p,{children:["While ",(0,s.jsx)(n.code,{children:"babel-jest"})," by default will transpile TypeScript files, Babel will not verify the types. If you want that you can use ",(0,s.jsx)(n.a,{href:"https://github.com/kulshekhar/ts-jest",children:(0,s.jsx)(n.code,{children:"ts-jest"})}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"\u043f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f-\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c-\u043d\u0430-\u0457\u0445-\u0448\u043b\u044f\u0445",children:"\u041f\u0435\u0440\u0435\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u044c \u043d\u0430 \u0457\u0445 \u0448\u043b\u044f\u0445"}),"\n",(0,s.jsx)(n.p,{children:"Importing images is a way to include them in your browser bundle, but they are not valid JavaScript. One way of handling it in Jest is to replace the imported value with its filename."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},1670:(e,n,r)=>{r.d(n,{Zo:()=>c,ah:()=>t});var s=r(7378);const o=s.createContext({});function t(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:r}){let c;return c=r?"function"==typeof e?e({}):e||i:t(e),s.createElement(o.Provider,{value:c},n)}}}]);
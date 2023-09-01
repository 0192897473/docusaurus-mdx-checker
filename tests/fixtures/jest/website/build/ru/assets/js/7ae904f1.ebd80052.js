"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8535],{9269:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(4246),i=t(1670);const o={title:"Jest 26: Tick Tock",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},r=void 0,l={permalink:"/ru/blog/2020/05/05/jest-26",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2020-05-05-jest-26.md",source:"@site/i18n/ru/docusaurus-plugin-content-blog/2020-05-05-jest-26.md",title:"Jest 26: Tick Tock",description:"\u041a\u043e\u0433\u0434\u0430 \u043c\u044b \u043d\u0430\u0447\u0430\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0435\u043b\u044b\u0432\u0430\u0442\u044c Jest \u043f\u044f\u0442\u044c \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434, \u043d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c \u0431\u044b\u043b\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u043d\u043e\u0432\u0438\u0447\u043a\u043e\u0432, \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0447\u0442\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0431\u044b\u043b Jest 15, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0432\u044f\u0437\u0430\u043b \u0432\u0441\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b \u0445\u043e\u0440\u043e\u0448\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043b\u044e\u0434\u044f\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c Jest \u0447\u0430\u0441\u0442\u043e \u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438. \u041e\u0434\u043d\u0430\u043a\u043e, \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u043a, \u0442\u0430\u043a \u043a\u0430\u043a Jest \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u0432\u0430\u0448\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u044b.",date:"2020-05-05T00:00:00.000Z",formattedDate:"5 \u043c\u0430\u044f 2020 \u0433.",tags:[],readingTime:6.055,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 26: Tick Tock",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442\u0430 Jest",permalink:"/ru/blog/2021/03/09/jest-website-upgrade"},nextItem:{title:"Jest 25: \ud83d\ude80 Laying foundations for the future",permalink:"/ru/blog/2020/01/21/jest-25"}},a={authorsImageUrls:[void 0]},c=[{value:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0444\u0438\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0442\u0430\u0439\u043c\u0435\u0440\u0430",id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0444\u0438\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e-\u0442\u0430\u0439\u043c\u0435\u0440\u0430",level:2},{value:"A new way to consume Jest - <code>@jest/globals</code>",id:"a-new-way-to-consume-jest---jestglobals",level:2},{value:"\u041d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 M1",id:"\u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f-\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430-m1",level:2},{value:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 Jest 26",id:"\u0434\u0440\u0443\u0433\u0438\u0435-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f-\u0432-jest-26",level:2},{value:"Stay Safe",id:"stay-safe",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",strong:"strong",ul:"ul",li:"li",code:"code",blockquote:"blockquote",pre:"pre",h2:"h2",em:"em"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["\u041a\u043e\u0433\u0434\u0430 \u043c\u044b \u043d\u0430\u0447\u0430\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0435\u043b\u044b\u0432\u0430\u0442\u044c Jest \u043f\u044f\u0442\u044c \u043b\u0435\u0442 \u043d\u0430\u0437\u0430\u0434, \u043d\u0430\u0448\u0430 \u0446\u0435\u043b\u044c \u0431\u044b\u043b\u0430 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u0435\u0437 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0434\u043b\u044f \u043d\u043e\u0432\u0438\u0447\u043a\u043e\u0432, \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u0442\u0441\u044f \u043f\u043e\u0447\u0442\u0438 \u0434\u043b\u044f \u0432\u0441\u0435\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u043e\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445. \u041e\u0434\u043d\u0438\u043c \u0438\u0437 \u0440\u0435\u043b\u0438\u0437\u043e\u0432 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430 \u0431\u044b\u043b ",(0,n.jsx)(s.a,{href:"/blog/2016/09/01/jest-15",children:"Jest 15"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0432\u044f\u0437\u0430\u043b \u0432\u0441\u0435 \u0432\u043c\u0435\u0441\u0442\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b \u0445\u043e\u0440\u043e\u0448\u0438\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u043b\u044e\u0434\u044f\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c Jest \u0447\u0430\u0441\u0442\u043e \u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438. \u041e\u0434\u043d\u0430\u043a\u043e, \u044d\u0442\u043e\u0442 \u043f\u043e\u0434\u0445\u043e\u0434 \u0438\u043c\u0435\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u043e\u0439 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u043a, \u0442\u0430\u043a \u043a\u0430\u043a Jest \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0435\u0442 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u0432 \u0432\u0430\u0448\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u0430\u043c \u043d\u0435 \u043d\u0443\u0436\u043d\u044b."]}),"\n",(0,n.jsxs)(s.p,{children:["\u0421\u0435\u0439\u0447\u0430\u0441 \u043c\u044b \u043d\u0430\u0447\u0438\u043d\u0430\u0435\u043c \u0443\u0441\u0442\u0440\u0430\u043d\u044f\u0442\u044c \u044d\u0442\u043e\u0442 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u043a \u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u043d\u0430\u0434 \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435\u043c \u0440\u0430\u0437\u043c\u0435\u0440\u0430 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0438 Jest'\u0430, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044f \u0435\u0433\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0435\u043c\u044b\u043c. \u041c\u044b \u0432\u043d\u0435\u0441\u043b\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 ",(0,n.jsx)(s.strong,{children:"\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432"})," \u0432 Jest 26:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"[expect, jest-mock, pretty-format]"})," Remove ",(0,n.jsx)(s.code,{children:"ES5"})," build files with a new minimum of support of ES2015 (Node 8) which were only used for browser builds (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9945",children:"#9945"}),")"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"}),": \u0421 \u044d\u0442\u0438\u043c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435\u043c \u043c\u044b \u0432\u043e\u0437\u043b\u0430\u0433\u0430\u0435\u043c \u043d\u0430 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u0442\u0440\u0430\u0433\u0438\u0432\u0430\u0435\u043c\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432, \u0430 \u043d\u0435 Jest \u043f\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0438\u0445 \u0438\u0437 \u043a\u043e\u0440\u043e\u0431\u043a\u0438, \u0442\u0430\u043a \u043a\u0430\u043a \u043e\u043d\u0438 \u0437\u043d\u0430\u044e\u0442 \u0441\u0432\u043e\u0438 \u0446\u0435\u043b\u0435\u0432\u044b\u0435 \u0441\u0440\u0435\u0434\u044b \u043d\u0430\u0438\u043b\u0443\u0447\u0448\u0438\u043c \u043e\u0431\u0440\u0430\u0437\u043e\u043c. \u0415\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435, \u043c\u044b \u043e\u0442\u043a\u0440\u044b\u0442\u044b \u0434\u043b\u044f \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0438\u0445 \u0432 \u0432\u0438\u0434\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u0430\u043a\u0435\u0442\u043e\u0432. PR-\u044b \u043f\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0442\u0441\u044f!"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"[jest-config, jest-resolve]"})," Remove support for ",(0,n.jsx)(s.code,{children:"browser"})," field (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9943",children:"#9943"}),")"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"\u041c\u0438\u0433\u0440\u0430\u0446\u0438\u044f"}),": \u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u0435 ",(0,n.jsx)(s.code,{children:"browser-resolve"})," \u043c\u043e\u0434\u0443\u043b\u044c \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044e:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'  {\n    "jest": {\n      "resolver": "<rootDir>/resolver.js"\n    }\n  }\n'})}),"\n"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-js",children:"// resolver.js\nconst browserResolve = require('browser-resolve');\n\nmodule.exports = browserResolve.sync;\n"})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["TypeScript definitions requires a minimum of TypeScript v3.8 (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9823",children:"#9823"}),")"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u0421 \u0432\u044b\u0448\u0435\u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 Jest 26 \u0442\u0435\u043f\u0435\u0440\u044c \u0432\u0435\u0441\u0438\u0442 4 MiB \u043c\u0435\u043d\u044c\u0448\u0435, \u0447\u0435\u043c 25.5.4 Jest (53 \u2192 49 MiB). \u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0438\u043c\u0435\u0439\u0442\u0435 \u0432 \u0432\u0438\u0434\u0443, \u0447\u0442\u043e \u043c\u043d\u043e\u0433\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a Babel \u0443\u0436\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0447\u0430\u0441\u0442\u044c\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430. \u0420\u0430\u0437\u043c\u0435\u0440 Jest \u0431\u044b\u043b \u0443\u043c\u0435\u043d\u044c\u0448\u0435\u043d \u043d\u0430 1.2 MiB (4.3 -> 3.1 MiB)."}),"\n",(0,n.jsxs)(s.p,{children:["While this is a good start, it isn\u2019t enough to make Jest meaningfully leaner. We are planning on gradually reducing Jest's and its dependency tree size by up to 70%. Most of the changes to reduce Jest\u2019s default setup will be small breaking changes and we want to bring the community with us as much as possible. Therefore we will make the following changes in Jest 27 and Jest 28 using a ",(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Tick%E2%80%93tock_model",children:'\u201cTick-Tock" release process'}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:['Jest 27 will ship with a new test runner "',(0,n.jsx)(s.code,{children:"jest-circus"}),'" and the Node.js environment by default. ',(0,n.jsx)(s.code,{children:"jest-jasmine2"})," and ",(0,n.jsx)(s.code,{children:"jest-environment-jsdom"})," will still be bundled so users can keep using them by changing one-line each in the configuration."]}),"\n",(0,n.jsxs)(s.li,{children:["Jest 28 will remove ",(0,n.jsx)(s.code,{children:"jest-jasmine2"})," and ",(0,n.jsx)(s.code,{children:"jest-environment-jsdom"})," from the default distribution of Jest. The packages will still be actively maintained as part of the Jest project and be published separately. Users will need to install these packages to use them."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Upon upgrading to these major releases, Jest will guide you through the necessary changes. If you\u2019d like to get ahead and migrate to the new defaults now, and your project does not require a DOM environment, you can upgrade to Jest 26 and add the following configuration options:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "jest": {\n    "testEnvironment": "node",\n    "testRunner": "jest-circus/runner"\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Jest will continue to ship with ",(0,n.jsx)(s.code,{children:"babel-jest"})," enabled by default. It currently powers a few Jest features beyond compiling modern JavaScript syntax to something understood by current versions of Node.js and browsers: It also powers Jest's code coverage and mocking of ES modules. Jest currently ships with experimental support for ",(0,n.jsx)(s.a,{href:"/blog/2020/01/21/jest-25#v8-code-coverage",children:"V8 coverage"})," and native support for ES Modules (more on that below!). It is not possible to mock static ES Modules per the specification without transforming the code first, so we will be encouraging patterns that work without the transformation we use Babel for today. Once V8 coverage and native ESM support stabilizes in Jest, we will also be able remove ",(0,n.jsx)(s.code,{children:"babel-jest"})," as a default but we will keep maintaining it."]}),"\n",(0,n.jsx)(s.h2,{id:"\u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430-\u0444\u0438\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e-\u0442\u0430\u0439\u043c\u0435\u0440\u0430",children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0444\u0438\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0442\u0430\u0439\u043c\u0435\u0440\u0430"}),"\n",(0,n.jsxs)(s.p,{children:["With Jest 26 we are shipping a new implementation of fake timers based on ",(0,n.jsx)(s.code,{children:"@sinonjs/fake-timers"}),". We've wanted to do this for years and are happy this has finally progressed far enough to support all of Jest's existing fake timer use cases."]}),"\n",(0,n.jsxs)(s.p,{children:["The new implementation comes with extra features such as mocking ",(0,n.jsx)(s.code,{children:"Date"}),", ",(0,n.jsx)(s.code,{children:"queueMicrotask"})," and more, see ",(0,n.jsx)(s.a,{href:"https://github.com/sinonjs/fake-timers/blob/master/README.md",children:"this README"}),". It works transparently using the existing timer APIs like ",(0,n.jsx)(s.code,{children:"jest.runAllTimers()"})," \u2013 check out the documentation ",(0,n.jsx)(s.a,{href:"/docs/timer-mocks",children:"on our website"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["We are confident this implementation is ready for prime time, however we don't want to force people to rewrite their tests if they depend on subtle differences between the old and new implementation. In Jest 26, this new implementation will remain ",(0,n.jsx)(s.em,{children:"opt-in"})," and can be activated by calling ",(0,n.jsx)(s.code,{children:"jest.useFakeTimers('modern')"})," or by passing ",(0,n.jsx)(s.code,{children:"modern"})," to the ",(0,n.jsx)(s.code,{children:"timers"})," option in your config if you opted all tests into fake timers previously."]}),"\n",(0,n.jsxs)(s.p,{children:['In Jest 27 we will swap the default to the new "modern" implementation but we will keep supporting and maintaining the legacy implementation which can be used by calling ',(0,n.jsx)(s.code,{children:"jest.useFakeTimers('legacy')"}),". If you are unsure whether you'll be able to upgrade all your tests by the time Jest 27 rolls out, you can add this to your tests now to keep the old behavior."]}),"\n",(0,n.jsxs)(s.p,{children:["We'd like to thank ",(0,n.jsx)(s.a,{href:"https://github.com/fatso83",children:"Carl-Erik Kopseng"}),", ",(0,n.jsx)(s.a,{href:"https://github.com/benjamingr",children:"Benjamin Gruenbaum"})," and other maintainers of ",(0,n.jsx)(s.code,{children:"@sinonjs/fake-timers"})," for their help and patience when working with us to make this happen! ",(0,n.jsx)(s.em,{children:"Exciting"}),"."]}),"\n",(0,n.jsxs)(s.h2,{id:"a-new-way-to-consume-jest---jestglobals",children:["A new way to consume Jest - ",(0,n.jsx)(s.code,{children:"@jest/globals"})]}),"\n",(0,n.jsxs)(s.p,{children:["Jest has relied on globals popularized by the Jasmine testing framework and others such as ",(0,n.jsx)(s.code,{children:"describe"}),", ",(0,n.jsx)(s.code,{children:"it"}),", ",(0,n.jsx)(s.code,{children:"test"})," and ",(0,n.jsx)(s.code,{children:"expect"}),". While this is a widely used pattern, many people have expressed their preference for importing testing related functions instead. To support this use case, we added a new package ",(0,n.jsx)(s.code,{children:"@jest/globals"})," that can be used to import testing functions: ",(0,n.jsx)(s.code,{children:"import {expect, jest, test} from '@jest/globals';"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Caveats:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Currently the globals still exist in the environment but we will introduce a mode to disable globals in the future. Similarly, you cannot use ",(0,n.jsx)(s.code,{children:"const jest = require('@jest/globals')"})," as you'll get declaration errors because the ",(0,n.jsx)(s.code,{children:"jest"})," variable is still a global for now."]}),"\n",(0,n.jsx)(s.li,{children:"There is currently no way to add custom matchers to the TypeScript definitions when using globals like this."}),"\n",(0,n.jsx)(s.li,{children:"While this allows running tests without globals, it does not allow running tests without Jest's test runner at this time."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"\u043d\u0430\u0442\u0438\u0432\u043d\u0430\u044f-\u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430-m1",children:"\u041d\u0430\u0442\u0438\u0432\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 M1"}),"\n",(0,n.jsxs)(s.p,{children:["As mentioned in the ",(0,n.jsx)(s.a,{href:"/blog/2020/01/21/jest-25#ecmascript-modules-support",children:"Jest 25 blog post"})," we have been working on native support for ECMAScript Modules. It is not stable yet but it is ready to be tested. We'd love to hear your feedback and bug reports! For an overview of the current state you can check out ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"this issue"}),", or browse all issues with that label ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/labels/ES%20Modules",children:"ES Modules"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"\u0434\u0440\u0443\u0433\u0438\u0435-\u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f-\u0432-jest-26",children:"\u0414\u0440\u0443\u0433\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 Jest 26"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Dropped support for Node 8 (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9423",children:"#9423"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"[jest-environment-jsdom]"})," Upgrade ",(0,n.jsx)(s.code,{children:"jsdom"})," to v16 (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9606",children:"#9606"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"[jest-runtime]"})," Remove long-deprecated ",(0,n.jsx)(s.code,{children:"require.requireActual"})," and ",(0,n.jsx)(s.code,{children:"require.requireMock"})," methods (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9854",children:"#9854"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"[jest-haste-map]"})," Removed ",(0,n.jsx)(s.code,{children:"providesModuleNodeModules"})," (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/8535",children:"#8535"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"[jest-circus]"})," Fail tests if a test takes a done callback and have return values (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/9129",children:"#9129"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"[jest-circus]"})," Throw a proper error if a test / hooks is defined asynchronously (",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/pull/8096",children:"#8096"}),")"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"stay-safe",children:"Stay Safe"}),"\n",(0,n.jsxs)(s.p,{children:["\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0432\u0441\u0435 \u043c\u044b \u043f\u0435\u0440\u0435\u0436\u0438\u0432\u0430\u0435\u043c \u043e\u0447\u0435\u043d\u044c \u0442\u044f\u0436\u0435\u043b\u043e\u0435 \u0432\u0440\u0435\u043c\u044f. \u0415\u0441\u043b\u0438 \u0432\u044b \u0438\u043c\u0435\u0435\u0442\u0435 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438 \u0441 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u043e\u0439 \u0442\u043e\u0447\u043a\u0438 \u0437\u0440\u0435\u043d\u0438\u044f, \u043c\u044b \u0441\u043e\u0432\u0435\u0442\u0443\u0435\u043c \u043f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c ",(0,n.jsx)(s.a,{href:"https://opencollective.com/jest",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0439 \u043a\u043e\u043b\u043b\u0435\u043a\u0442\u0438\u0432\u043d\u044b\u0439 \u0444\u043e\u043d\u0434 Jest"}),", \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u043c\u043e\u0447\u044c \u043d\u043e\u0432\u044b\u043c \u0438 \u0434\u0430\u0432\u043d\u0438\u043c \u0443\u0447\u0430\u0441\u0442\u043d\u0438\u043a\u0430\u043c. We place ",(0,n.jsx)(s.a,{href:"https://github.com/jestjs/jest/issues?q=is%3Aissue+is%3Aopen+bounty+label%3A%22Has+Bounty%22",children:"bounties on some issues"})," and are open to offering a bounty on any of our current open issues - you can mention that an issue should have a bounty in the issue or contact ",(0,n.jsx)(s.a,{href:"https://twitter.com/cpojer",children:"@cpojer via private message on Twitter"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Please stay safe."})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},1670:(e,s,t)=>{t.d(s,{Zo:()=>l,ah:()=>o});var n=t(7378);const i=n.createContext({});function o(e){const s=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const r={};function l({components:e,children:s,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:o(e),n.createElement(i.Provider,{value:l},s)}}}]);
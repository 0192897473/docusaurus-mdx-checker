"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4811],{5723:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var r=s(4246),n=s(1670);const a={title:"Jest 20: \ud83d\udc96 \u041f\u0440\u0438\u0454\u043c\u043d\u0435 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f & \ud83c\udfc3\ud83c\udffd \u0411\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},i=void 0,o={permalink:"/uk/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",source:"@site/i18n/uk/docusaurus-plugin-content-blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",title:"Jest 20: \ud83d\udc96 \u041f\u0440\u0438\u0454\u043c\u043d\u0435 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f & \ud83c\udfc3\ud83c\udffd \u0411\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c",description:"\u041a\u0456\u043b\u044c\u043a\u0430 \u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0442\u043e\u043c\u0443 \u043c\u0438 \u0430\u043d\u043e\u043d\u0441\u0443\u0432\u0430\u043b\u0438 Jest 19, \u044f\u043a\u0438\u0439 \u043c\u0430\u0432 \u0432\u0430\u0436\u043b\u0438\u0432\u0456 \u043d\u043e\u0432\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0442\u0430 \u0431\u0443\u0432 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0440\u0435\u043b\u0456\u0437\u043e\u043c Jest \u043d\u0430 \u0442\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442. Jest 20 \u043c\u0430\u0454 \u043f\u043e\u0434\u0432\u0456\u0439\u043d\u0443 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u043c\u0456\u043d \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u044e \u0432\u0435\u0440\u0441\u0456\u0454\u044e \u0442\u0430 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0432\u043d\u0456\u0441\u0442\u044e \u043f\u0435\u0440\u0435\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c \u0442\u0435\u0441\u0442\u0456\u0432, \u0434\u043e\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u0438\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u0439 API. \u041d\u043e\u0432\u0438\u0439 \u0440\u0435\u043b\u0456\u0437 \u043d\u0430\u0434\u0430\u0454 \u043d\u043e\u0432\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 \u043f\u0440\u043e\u0454\u043a\u0442\u0456\u0432, \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u0435 \u0437\u0430\u0431\u0435\u0440\u0435 \u0431\u0430\u0433\u0430\u0442\u043e \u0447\u0430\u0441\u0443. \u041e\u043a\u0440\u0456\u043c \u0411\u0435\u0437\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u043e\u0433\u043e JavaScript \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u043c\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u043c\u043e, \u0449\u043e Jest \u0442\u0435\u043f\u0435\u0440 \u043d\u0430\u0434\u0430\u0454 \u0427\u0443\u0434\u043e\u0432\u0438\u0439 \u0414\u043e\u0441\u0432\u0456\u0434 \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f JavaScript. \u0420\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0433\u043b\u0438\u0431\u0448\u0435 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0456 \u043d\u043e\u0432\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0442\u0430 \u0437\u043c\u0456\u043d\u0438:",date:"2017-05-06T00:00:00.000Z",formattedDate:"6 \u0442\u0440\u0430\u0432\u043d\u044f 2017 \u0440.",tags:[],readingTime:5.195,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 20: \ud83d\udc96 \u041f\u0440\u0438\u0454\u043c\u043d\u0435 \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f & \ud83c\udfc3\ud83c\udffd \u0411\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"Jest 22: \u041f\u0440\u0430\u0432\u043a\u0438 & \u041a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044c\u043a\u0456 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0446\u0456",permalink:"/uk/blog/2017/12/18/jest-22"},nextItem:{title:"\ud83c\udccf Jest 19: \u041f\u043e\u0433\u043b\u0438\u0431\u043b\u0435\u043d\u0438\u0439 \u0440\u0435\u0436\u0438\u043c \u0441\u043f\u043e\u0441\u0442\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f & \u041f\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0457 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0438",permalink:"/uk/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"}},c={authorsImageUrls:[void 0]},h=[{value:"\u0411\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c &amp; \u0417\u043c\u0456\u043d\u0430 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457",id:"\u0431\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439-\u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c--\u0437\u043c\u0456\u043d\u0430-\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457",level:2}];function l(t){const e=Object.assign({p:"p",a:"a",strong:"strong",h2:"h2",img:"img"},(0,n.ah)(),t.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:["\u041a\u0456\u043b\u044c\u043a\u0430 \u043c\u0456\u0441\u044f\u0446\u0456\u0432 \u0442\u043e\u043c\u0443 \u043c\u0438 \u0430\u043d\u043e\u043d\u0441\u0443\u0432\u0430\u043b\u0438 ",(0,r.jsx)(e.a,{href:"/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements",children:"Jest 19"}),", \u044f\u043a\u0438\u0439 \u043c\u0430\u0432 \u0432\u0430\u0436\u043b\u0438\u0432\u0456 \u043d\u043e\u0432\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0442\u0430 \u0431\u0443\u0432 \u043d\u0430\u0439\u0431\u0456\u043b\u044c\u0448\u0438\u043c \u0440\u0435\u043b\u0456\u0437\u043e\u043c Jest \u043d\u0430 \u0442\u043e\u0439 \u043c\u043e\u043c\u0435\u043d\u0442. Jest 20 \u043c\u0430\u0454 \u043f\u043e\u0434\u0432\u0456\u0439\u043d\u0443 \u043a\u0456\u043b\u044c\u043a\u0456\u0441\u0442\u044c \u0437\u043c\u0456\u043d \u0443 \u043f\u043e\u0440\u0456\u0432\u043d\u044f\u043d\u043d\u0456 \u0437 \u043f\u043e\u043f\u0435\u0440\u0435\u0434\u043d\u044c\u043e\u044e \u0432\u0435\u0440\u0441\u0456\u0454\u044e \u0442\u0430 \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0432\u043d\u0456\u0441\u0442\u044e \u043f\u0435\u0440\u0435\u0440\u043e\u0431\u043b\u0435\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c \u0442\u0435\u0441\u0442\u0456\u0432, \u0434\u043e\u0434\u0430\u0454\u0442\u044c\u0441\u044f \u043d\u043e\u0432\u0438\u0439 \u0442\u0435\u0441\u0442\u043e\u0432\u0438\u0439 API. \u041d\u043e\u0432\u0438\u0439 \u0440\u0435\u043b\u0456\u0437 \u043d\u0430\u0434\u0430\u0454 \u043d\u043e\u0432\u0438\u0439 \u0440\u0456\u0432\u0435\u043d\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u0442\u0430 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457 \u043f\u0440\u043e\u0454\u043a\u0442\u0456\u0432, \u043f\u0440\u0438 \u0446\u044c\u043e\u043c\u0443 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f \u043d\u0435 \u0437\u0430\u0431\u0435\u0440\u0435 \u0431\u0430\u0433\u0430\u0442\u043e \u0447\u0430\u0441\u0443. \u041e\u043a\u0440\u0456\u043c \u0411\u0435\u0437\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u043e\u0433\u043e JavaScript \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f, \u043c\u0438 \u0432\u0432\u0430\u0436\u0430\u0454\u043c\u043e, \u0449\u043e Jest \u0442\u0435\u043f\u0435\u0440 \u043d\u0430\u0434\u0430\u0454 ",(0,r.jsx)(e.strong,{children:"\u0427\u0443\u0434\u043e\u0432\u0438\u0439 \u0414\u043e\u0441\u0432\u0456\u0434 \u0422\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f JavaScript"}),". \u0420\u043e\u0437\u0433\u043b\u044f\u043d\u0435\u043c\u043e \u0433\u043b\u0438\u0431\u0448\u0435 \u043d\u0430\u0439\u043a\u0440\u0430\u0449\u0456 \u043d\u043e\u0432\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0442\u0430 \u0437\u043c\u0456\u043d\u0438:"]}),"\n",(0,r.jsx)(e.h2,{id:"\u0431\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439-\u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c--\u0437\u043c\u0456\u043d\u0430-\u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457",children:"\u0411\u0430\u0433\u0430\u0442\u043e\u043f\u0440\u043e\u0454\u043a\u0442\u043d\u0438\u0439 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c & \u0417\u043c\u0456\u043d\u0430 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u0457"}),"\n",(0,r.jsxs)(e.p,{children:["\u0414\u043e \u0441\u044c\u043e\u0433\u043e\u0434\u043d\u0456, Jest \u043c\u0456\u0433 \u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u043b\u0438\u0448\u0435 \u0432 \u043e\u0434\u043d\u043e\u043c\u0443 \u043f\u0440\u043e\u0454\u043a\u0442\u0456 \u0437\u0430 \u0440\u0430\u0437. \u0426\u0435 \u043c\u043e\u0436\u0435 \u043f\u0435\u0440\u0435\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0432\u0430\u0442\u0438 \u043f\u0440\u043e\u0446\u0435\u0441, \u044f\u043a\u0449\u043e \u0432\u0438 \u043f\u0440\u0430\u0446\u044e\u0454\u0442\u0435 \u043d\u0430\u0434 \u0431\u0430\u0433\u0430\u0442\u044c\u043c\u0430 \u043c\u0430\u043b\u0438\u043c\u0438 \u043f\u0440\u043e\u0454\u043a\u0442\u0430\u043c\u0438, \u043a\u043e\u0436\u0435\u043d \u0437 \u044f\u043a\u0438\u0445 \u043c\u0430\u0454 \u0432\u043b\u0430\u0441\u043d\u0456 \u043d\u0430\u043b\u0430\u0448\u0442\u0443\u0432\u0430\u043d\u043d\u044f \u0442\u0430 \u043a\u043e\u043d\u0444\u0456\u0433\u0443\u0440\u0430\u0446\u0456\u044e. \u0412 Jest 20, \u043c\u0438 \u043f\u043e\u0432\u043d\u0456\u0441\u0442\u044e \u043f\u0435\u0440\u0435\u043f\u0438\u0441\u0430\u043b\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u0432\u0435\u0446\u044c \u0442\u0435\u0441\u0442\u0456\u0432 \u0434\u043b\u044f \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0443\u0441\u043a\u0443 \u0431\u0430\u0433\u0430\u0442\u043e \u043f\u0440\u043e\u0454\u043a\u0442\u0456\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c\u0443 \u0435\u043a\u0437\u0435\u043c\u043f\u043b\u044f\u0440\u0456 Jest; \u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u044f\u043a\u0449\u043e \u0432\u0438 \u043f\u0440\u0430\u0446\u044e\u0454\u0442\u0435 \u0437 \u0444\u0440\u043e\u043d\u0442\u043e\u043c React frontend \u0456 \u0431\u0435\u043a\u043e\u043c node.js. \u041e\u0441\u044c \u0432\u0456\u0434\u0435\u043e \u0437 Jest, \u0449\u043e \u0432\u0438\u043a\u043e\u043d\u0443\u0454 \u0442\u0435\u0441\u0442\u0438 \u0434\u043b\u044f ",(0,r.jsx)(e.a,{href:"https://github.com/facebook/react",children:"React"})," ",(0,r.jsx)(e.a,{href:"https://github.com/facebook/relay",children:"Relay"}),", ",(0,r.jsx)(e.a,{href:"https://github.com/yarnpkg/yarn",children:"Yarn"})," \u0456 Jest \u043e\u0434\u043d\u043e\u0447\u0430\u0441\u043d\u043e:"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"multi-runner",src:s(4902).Z+"",width:"839",height:"520"})})]})}const u=function(t={}){const{wrapper:e}=Object.assign({},(0,n.ah)(),t.components);return e?(0,r.jsx)(e,Object.assign({},t,{children:(0,r.jsx)(l,t)})):l(t)}},4902:(t,e,s)=>{s.d(e,{Z:()=>r});const r=s.p+"assets/images/20-multi-runner-bca686433b2cb63c147951eedce67538.gif"},1670:(t,e,s)=>{s.d(e,{Zo:()=>o,ah:()=>a});var r=s(7378);const n=r.createContext({});function a(t){const e=r.useContext(n);return r.useMemo((()=>"function"==typeof t?t(e):{...e,...t}),[e,t])}const i={};function o({components:t,children:e,disableParentContext:s}){let o;return o=s?"function"==typeof t?t({}):t||i:a(t),r.createElement(n.Provider,{value:o},e)}}}]);
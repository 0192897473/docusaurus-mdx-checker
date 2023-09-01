"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3622],{4572:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>h});var n=s(4246),r=s(1670);const a={title:"Jest 29: \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},o=void 0,i={permalink:"/ja/blog/2022/08/25/jest-29",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2022-08-25-jest-29.md",source:"@site/i18n/ja/docusaurus-plugin-content-blog/2022-08-25-jest-29.md",title:"Jest 29: \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4",description:"Just 28 \u304b\u3089\u6570\u30ab\u6708\u5f8c\u3057\u304b\u7d4c\u3063\u3066\u3044\u307e\u305b\u3093\u304c\u3001Jest 29 \u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3057\u305f\u3002 Jest 28 \u30d6\u30ed\u30b0\u8a18\u4e8b\u3067\u8aac\u660e\u3057\u305f\u3088\u3046\u306b\u3001\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3067\u304d\u308b\u3060\u3051\u30b9\u30e0\u30fc\u30ba\u306a\u3082\u306e\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u306f\u7834\u58ca\u7684\u5909\u66f4\u304c\u3044\u304f\u3064\u304b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002",date:"2022-08-25T00:00:00.000Z",formattedDate:"2022\u5e748\u670825\u65e5",tags:[],readingTime:1.345,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB",imageURL:"https://avatars.githubusercontent.com/u/1404810"}],frontMatter:{title:"Jest 29: \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5909\u66f4",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},unlisted:!1,nextItem:{title:"Jest joins OpenJS Foundation",permalink:"/ja/blog/2022/05/11/jest-joins-openjs"}},c={authorsImageUrls:[void 0]},h=[];function l(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Just 28 \u304b\u3089\u6570\u30ab\u6708\u5f8c\u3057\u304b\u7d4c\u3063\u3066\u3044\u307e\u305b\u3093\u304c\u3001Jest 29 \u304c\u30ea\u30ea\u30fc\u30b9\u3055\u308c\u307e\u3057\u305f\u3002 ",(0,n.jsx)(t.a,{href:"/blog/2022/04/25/jest-28#future",children:"Jest 28 \u30d6\u30ed\u30b0\u8a18\u4e8b"}),"\u3067\u8aac\u660e\u3057\u305f\u3088\u3046\u306b\u3001\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3092\u3067\u304d\u308b\u3060\u3051\u30b9\u30e0\u30fc\u30ba\u306a\u3082\u306e\u306b\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u306e\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u306f\u7834\u58ca\u7684\u5909\u66f4\u304c\u3044\u304f\u3064\u304b\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.p,{children:"The only breaking changes that should be noticeable are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Node \u30d0\u30fc\u30b8\u30e7\u30f3 12 \u304a\u3088\u3073 17 \u306e\u30b5\u30dd\u30fc\u30c8\u7d42\u4e86\u3002\u3044\u305a\u308c\u3082 EOL \u3092\u8fce\u3048\u307e\u3057\u305f\u3002"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"snapshotFormat"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u6b21\u306e\u3088\u3046\u306b\u5909\u66f4\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"+ snapshotFormat: {\n+   escapeString: false,\n+   printBasicPrototype: false\n+ }\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-environment-jsdom"})," \u304c ",(0,n.jsx)(t.code,{children:"jsdom"})," \u3092 v19 \u304b\u3089 v20 \u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u307e\u3057\u305f\u3002"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Jest \u304c\u516c\u958b\u3059\u308b\u578b\u306b\u3082\u3044\u304f\u3064\u304b\u5909\u66f4\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u304a\u305d\u3089\u304f (\u9858\u308f\u304f\u3070\uff01) \u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u306e\u59a8\u3052\u306b\u306a\u308b\u3082\u306e\u306f\u4f55\u3082\u3042\u308a\u307e\u305b\u3093\u3002 \u8a73\u7d30\u306f",(0,n.jsx)(t.a,{href:"/docs/upgrading-to-jest29",children:"\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30ac\u30a4\u30c9"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsxs)(t.p,{children:["\u7834\u58ca\u7684\u5909\u66f4\u306b\u3064\u3044\u3066\u306f\u4ee5\u4e0a\u3067\u3059\u3079\u3066\u3067\u3059\u3002 Jest 28 \u304b\u3089\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30d1\u30b9\u304c\u30b9\u30e0\u30fc\u30ba\u306a\u3082\u306e\u3067\u3042\u308b\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059\u3002 Please see the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2900",children:"changelog"})," for other changes."]}),"\n",(0,n.jsx)(t.p,{children:"Thanks for reading, and happy Jesting! \ud83c\udccf"})]})}const u=function(e={}){const{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>a});var n=s(7378);const r=n.createContext({});function a(e){const t=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||o:a(e),n.createElement(r.Provider,{value:i},t)}}}]);
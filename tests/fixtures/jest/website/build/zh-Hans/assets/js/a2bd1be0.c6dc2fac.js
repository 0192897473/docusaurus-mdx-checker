"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7673],{2863:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=s(4246),o=s(1670);const a={title:"Jest 29: Snapshot format changes",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},r=void 0,i={permalink:"/zh-Hans/blog/2022/08/25/jest-29",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2022-08-25-jest-29.md",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/2022-08-25-jest-29.md",title:"Jest 29: Snapshot format changes",description:"Jest 29 is here, just a few short months after Jest 28. As mentioned in the Jest 28 blog post, this version contains just a couple of breaking changes, in order to make the upgrade as smooth as possible.",date:"2022-08-25T00:00:00.000Z",formattedDate:"2022\u5e748\u670825\u65e5",tags:[],readingTime:.74,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB",imageURL:"https://avatars.githubusercontent.com/u/1404810"}],frontMatter:{title:"Jest 29: Snapshot format changes",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},unlisted:!1,nextItem:{title:"Jest joins OpenJS Foundation",permalink:"/zh-Hans/blog/2022/05/11/jest-joins-openjs"}},h={authorsImageUrls:[void 0]},c=[];function l(e){const t=Object.assign({p:"p",a:"a",ul:"ul",li:"li",code:"code",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Jest 29 is here, just a few short months after Jest 28. As mentioned in the ",(0,n.jsx)(t.a,{href:"/blog/2022/04/25/jest-28#future",children:"Jest 28 blog post"}),", this version contains just a couple of breaking changes, in order to make the upgrade as smooth as possible."]}),"\n",(0,n.jsx)(t.p,{children:"The only breaking changes that should be noticeable are:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Node versions 12 and 17 are dropped, both of which are EOL"}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"snapshotFormat"})," property is changed to:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-diff",children:"+ snapshotFormat: {\n+   escapeString: false,\n+   printBasicPrototype: false\n+ }\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"jest-environment-jsdom"})," has upgraded ",(0,n.jsx)(t.code,{children:"jsdom"})," from v19 to v20"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["There are certain changes to the types exposed by Jest, but probably (hopefully!) nothing that should impede the upgrade. Please see the ",(0,n.jsx)(t.a,{href:"/docs/upgrading-to-jest29",children:"upgrade guide"})," for more details."]}),"\n",(0,n.jsxs)(t.p,{children:["That's it for breaking changes! Hopefully this means the upgrade path from Jest 28 is smooth. Please see the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2900",children:"changelog"})," for other changes."]}),"\n",(0,n.jsx)(t.p,{children:"Thanks for reading, and happy Jesting! \ud83c\udccf"})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>a});var n=s(7378);const o=n.createContext({});function a(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:a(e),n.createElement(o.Provider,{value:i},t)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[924],{7068:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(4246),s=o(1670);const a={title:"Jest 13.0: Flow & REPL",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},r=void 0,i={permalink:"/pt-BR/blog/2016/06/22/jest-13",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2016-06-22-jest-13.md",source:"@site/i18n/pt-BR/docusaurus-plugin-content-blog/2016-06-22-jest-13.md",title:"Jest 13.0: Flow & REPL",description:"Today we are happy to announce the next major release of Jest. We have made major changes to Jest which are going to benefit you and all of Facebook's JavaScript test infrastructure. Most importantly, we added static types to all of Jest's code during a recent Jest hackathon at Facebook. Fifteen people worked for a day and night to add Flow types to Jest and to add new features to Jest. The Flow types serve two purposes: First, we believe that code is written to be read. Most of the time, code is written only once but read by dozens of people over the course of years. Adding static types to the project helps document the code and helps explain some of the architecture in Jest. Second, adding static types makes maintenance easier and will allow us to more confidently refactor parts of Jest without fear of breakages.",date:"2016-06-22T00:00:00.000Z",formattedDate:"22 de junho de 2016",tags:[],readingTime:2.565,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 13.0: Flow & REPL",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"Jest 14.0: React Tree Snapshot Testing",permalink:"/pt-BR/blog/2016/07/27/jest-14"},nextItem:{title:"Jest 11.0",permalink:"/pt-BR/blog/2016/04/12/jest-11"}},d={authorsImageUrls:[void 0]},l=[{value:"New and improved features",id:"new-and-improved-features",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",code:"code",h2:"h2",ul:"ul",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Today we are happy to announce the next major release of Jest. We have made major changes to Jest which are going to benefit you and all of Facebook's JavaScript test infrastructure. Most importantly, we added static types to all of Jest's code during a recent Jest hackathon at Facebook. Fifteen people worked for a day and night to add ",(0,n.jsx)(t.a,{href:"https://flowtype.org/",children:"Flow"})," types to Jest and to add new features to Jest. The Flow types serve two purposes: First, we believe that code is written to be read. Most of the time, code is written only once but read by dozens of people over the course of years. Adding static types to the project helps document the code and helps explain some of the architecture in Jest. Second, adding static types makes maintenance easier and will allow us to more confidently refactor parts of Jest without fear of breakages."]}),"\n",(0,n.jsx)(t.p,{children:"The Flow project has evolved a lot within Facebook and has been successfully adopted across many of our frameworks and almost all of our product code. Adoption can be parallelized incredibly well \u2013 it can be done file-by-file until enough of the codebase is well-typed. Then, Flow provides real value and helps guide through large changes. Through this, many small edge cases and bugs were found."}),"\n",(0,n.jsxs)(t.p,{children:["With the help of ",(0,n.jsx)(t.a,{href:"https://github.com/lerna/lerna",children:"lerna"}),", we continued to modularize the Jest project. With just a small ",(0,n.jsx)(t.a,{href:"https://github.com/lerna/lerna#lernajson",children:"update to the configuration"}),", Flow and lerna now get along well with each other. Splitting up Jest into packages helped us rethink module boundaries and enabled us to ship useful ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/packages",children:"packages"})," standalone: The ",(0,n.jsx)(t.code,{children:"jest-runtime"})," and ",(0,n.jsx)(t.code,{children:"jest-repl"})," cli tools now allow you to run scripts in a sandboxed Jest environment, enabling you to run and debug your app from the command line. This is especially helpful for projects that use Facebook's ",(0,n.jsx)(t.code,{children:"@providesModule"})," module convention. To get started, just install ",(0,n.jsx)(t.code,{children:"jest-repl"})," and run it in the same folder you normally run your tests in! We also published a ",(0,n.jsx)(t.code,{children:"jest-changed-files"})," package that finds changed files in version control for either git or hg, a common thing in developer tools."]}),"\n",(0,n.jsx)(t.h2,{id:"new-and-improved-features",children:"New and improved features"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Added a notification plugin that shows a test run notification when using ",(0,n.jsx)(t.code,{children:"--notify"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Added a ",(0,n.jsx)(t.code,{children:"browser"})," config option to properly resolve npm packages with a browser field in ",(0,n.jsx)(t.code,{children:"package.json"})," if you are writing tests for client side apps."]}),"\n",(0,n.jsx)(t.li,{children:"Improved \u201cno tests found message\u201d which will now report which tests were found and how they were filtered."}),"\n",(0,n.jsxs)(t.li,{children:["Added ",(0,n.jsx)(t.code,{children:"jest.isMockFunction(jest.fn())"})," to test for mock functions."]}),"\n",(0,n.jsx)(t.li,{children:"Improved test reporter printing and added a test failure summary when running many tests."}),"\n",(0,n.jsxs)(t.li,{children:["Added support for mocking virtual modules through ",(0,n.jsx)(t.code,{children:"jest.mock('Module', implementation, {virtual: true})"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Removed the ",(0,n.jsx)(t.code,{children:".haste_cache"})," folder. Jest now uses the operating system's preferred temporary file location."]}),"\n",(0,n.jsx)(t.li,{children:"Added the duration of individual tests in verbose mode."}),"\n",(0,n.jsx)(t.li,{children:"Added the ability to record snapshots in Jest. We'll be publishing a separate blog post about this feature soon."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, we have received a complete website redesign done by Matthew Johnston and added documentation for using ",(0,n.jsx)(t.a,{href:"/docs/webpack",children:"Jest with webpack"}),". Happy Jesting!"]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},1670:(e,t,o)=>{o.d(t,{Zo:()=>i,ah:()=>a});var n=o(7378);const s=n.createContext({});function a(e){const t=n.useContext(s);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:o}){let i;return i=o?"function"==typeof e?e({}):e||r:a(e),n.createElement(s.Provider,{value:i},t)}}}]);
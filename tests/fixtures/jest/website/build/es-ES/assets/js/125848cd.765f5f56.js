"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1583],{695:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var n=s(4246),i=s(1670);const o={title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",author:"Tim Seckinger",authorURL:"https://github.com/jeysal",authorImageURL:"https://avatars.githubusercontent.com/u/16069751"},r=void 0,a={permalink:"/es-ES/blog/2021/05/25/jest-27",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2021-05-25-jest-27.md",source:"@site/i18n/es-ES/docusaurus-plugin-content-blog/2021-05-25-jest-27.md",title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",description:"In the Jest 26 blog post about a year ago, we announced that after two major releases with few breaking changes, Jest 27 will flip some switches to set better defaults for projects that are new or can migrate smoothly. This gives us the opportunity to remove some packages from the default distribution of Jest 28 and publish them as separately installable and pluggable modules instead. Everyone on the new defaults can benefit from a smaller install size, while people needing these packages can still install them separately.",date:"2021-05-25T00:00:00.000Z",formattedDate:"25 de mayo de 2021",tags:[],readingTime:6.54,hasTruncateMarker:!0,authors:[{name:"Tim Seckinger",url:"https://github.com/jeysal",imageURL:"https://avatars.githubusercontent.com/u/16069751"}],frontMatter:{title:"Jest 27: New Defaults for Jest, 2021 edition \u23e9",author:"Tim Seckinger",authorURL:"https://github.com/jeysal",authorImageURL:"https://avatars.githubusercontent.com/u/16069751"},unlisted:!1,prevItem:{title:"Jest 28: Shedding weight and improving compatibility \ud83e\udef6",permalink:"/es-ES/blog/2022/04/25/jest-28"},nextItem:{title:"Jest Website Upgrade",permalink:"/es-ES/blog/2021/03/09/jest-website-upgrade"}},l={authorsImageUrls:[void 0]},h=[{value:"Feature updates",id:"feature-updates",level:2},{value:"Flipping defaults",id:"flipping-defaults",level:2},{value:"Features coming with breaking changes",id:"features-coming-with-breaking-changes",level:2},{value:"Miscellaneous breaking changes",id:"miscellaneous-breaking-changes",level:2}];function c(e){const t=Object.assign({p:"p",a:"a",h2:"h2",strong:"strong",img:"img",br:"br",code:"code",ul:"ul",li:"li",em:"em"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["In the ",(0,n.jsx)(t.a,{href:"/blog/2020/05/05/jest-26",children:"Jest 26 blog post"})," about a year ago, we announced that after two major releases with few breaking changes, Jest 27 will flip some switches to set better defaults for projects that are new or can migrate smoothly. This gives us the opportunity to remove some packages from the default distribution of Jest 28 and publish them as separately installable and pluggable modules instead. Everyone on the new defaults can benefit from a smaller install size, while people needing these packages can still install them separately."]}),"\n",(0,n.jsxs)(t.p,{children:["With the first major change of defaults since the ",(0,n.jsx)(t.a,{href:"/blog/2016/09/01/jest-15",children:"New Defaults for Jest"})," that came with the seminal version 15, Jest 27 is now here, to keep Jest fast, lean, and relevant in the future. We will explain those changes of defaults and other notable breaking changes in this post, but first, let's get into some exciting new features!"]}),"\n",(0,n.jsx)(t.h2,{id:"feature-updates",children:"Feature updates"}),"\n",(0,n.jsxs)(t.p,{children:["Firstly, the interactive mode you may know from reviewing and updating failed snapshots can now also be used to ",(0,n.jsx)(t.strong,{children:"step through failed tests"})," one at a time. Credit goes to first-time contributor ",(0,n.jsx)(t.a,{href:"https://github.com/NullDivision",children:"@NullDivision"})," for ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/10858",children:"implementing"})," this feature!"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Interactive failed test run",src:s(1021).Z+"",width:"2416",height:"1289"})}),"\n",(0,n.jsxs)(t.p,{children:["Speaking of snapshots, one of the more exciting features we've shipped in recent years are Inline Snapshots, which ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/6380",children:"landed"})," in a minor release of Jest 23 almost three years ago. However, they came with the restriction that projects wanting to utilize them must be using ",(0,n.jsx)(t.a,{href:"https://prettier.io/",children:"Prettier"})," to format their code, because that's what Jest would use to make sure the file it writes the snapshots into remains properly formatted.",(0,n.jsx)(t.br,{}),"\n","And so for most of these years, we've had a ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/7792",children:"pull request"})," in the pipeline to eliminate this restriction and allow using ",(0,n.jsx)(t.strong,{children:"Inline Snapshots without Prettier"}),". It has amassed well above a hundred comments, not even taking into account PRs split out from it and landed first, and even changed owner once after the initial submission by another first-time contributor, ",(0,n.jsx)(t.a,{href:"https://github.com/mmkal",children:"@mmkal"})," under the hilarious working title 'Uglier Inline Snapshots'. With the stellar rise of Prettier in recent times, this improvement is now maybe less needed than back in 2018, but still, we know that feeling of getting into a project that does not use Prettier, and suddenly not being able to use inline snapshots anymore. Nevermore!"]}),"\n",(0,n.jsxs)(t.p,{children:["The main reason why it took us so long to land this was, somewhat surprisingly, an out of memory error on our build pipeline. It turns out that the dependencies we load for each test file to perform the parsing, snapshot insertion, and printing do incur a significant time and memory overhead.",(0,n.jsx)(t.br,{}),"\n","So with some ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/9898",children:"tricks"}),", we've ",(0,n.jsx)(t.strong,{children:"speed up the initialization per test file"})," by roughly 70% compared to Jest 26. Note that you will almost certainly not see this big of a performance improvement on your project\u2014you would need a lot of test files that each run very quickly to best notice this, and the overhead when using a ",(0,n.jsx)(t.a,{href:"/docs/configuration#testenvironment-string",children:"JSDOM environment"})," dwarfs any such improvement."]}),"\n",(0,n.jsxs)(t.p,{children:["In other news, the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/9430",children:"native ESM support"})," is progressing, but some major complexities, for instance around mocking, are still ahead of us, and we continue to observe the migration to ESM as a huge ecosystem effort, where Node and a lot of crucial tools and packages all have to rely on each other to deliver an overall compelling experience.",(0,n.jsx)(t.br,{}),"\n","ESM support ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/11167",children:"for plugging modules into Jest"})," is more advanced\u2014custom runners, reporters, watch plugins, and many other modules can already be loaded as ES modules."]}),"\n",(0,n.jsxs)(t.p,{children:["We've also merged ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/9351",children:"a PR"})," to be able to deal with test files symlinked into the test directory, a feature much wanted by users of ",(0,n.jsx)(t.a,{href:"https://bazel.build/",children:"Bazel"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/9504",children:"Another PR"})," enabled ",(0,n.jsxs)(t.a,{href:"/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:[(0,n.jsx)(t.code,{children:"transform"}),"s"]})," to be asynchronous, a requirement to support transpilation through tools such as ",(0,n.jsx)(t.a,{href:"https://esbuild.github.io/",children:"esbuild"}),", ",(0,n.jsx)(t.a,{href:"https://www.snowpack.dev/",children:"Snowpack"}),", and ",(0,n.jsx)(t.a,{href:"https://vitejs.dev/",children:"Vite"})," effectively."]}),"\n",(0,n.jsx)(t.h2,{id:"flipping-defaults",children:"Flipping defaults"}),"\n",(0,n.jsxs)(t.p,{children:["Up until now, if you were using Jest in its default configuration, you were\u2014perhaps unknowingly\u2014running some code forked many years ago from the test runner ",(0,n.jsx)(t.a,{href:"https://jasmine.github.io/2.0/introduction",children:"Jasmine 2.0"})," that provides test framework functions such as ",(0,n.jsx)(t.code,{children:"describe"}),", ",(0,n.jsx)(t.code,{children:"it"}),", and ",(0,n.jsx)(t.code,{children:"beforeEach"}),". In 2017, ",(0,n.jsx)(t.a,{href:"https://github.com/aaronabramov",children:"Aaron Abramov"})," ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/3668",children:"initially wrote"})," a ",(0,n.jsx)(t.strong,{children:"replacement for the Jasmine code"})," called ",(0,n.jsx)(t.code,{children:"jest-circus"}),", meant to improve error messages, maintainability, and extensibility.",(0,n.jsx)(t.br,{}),"\n","After years of large-scale use at Facebook and of course in Jest itself, as well as recent adoption in ",(0,n.jsx)(t.code,{children:"create-react-app"}),", we are now confident that ",(0,n.jsx)(t.code,{children:"jest-circus"})," is highly compatible with ",(0,n.jsx)(t.code,{children:"jest-jasmine2"})," and should work in most environments with little to no migration work. There may be minor differences in execution order and strictness, but we expect no major upgrade difficulties other than for code relying on Jasmine-specific APIs such as ",(0,n.jsx)(t.code,{children:"jasmine.getEnv()"}),". If you rely extensively on such APIs, you can opt back in to the Jasmine-based test runner by ",(0,n.jsx)(t.a,{href:"/docs/configuration#testrunner-string",children:"configuring"})," ",(0,n.jsx)(t.code,{children:'"testRunner": "jest-jasmine2"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Running tests in a ",(0,n.jsx)(t.a,{href:"/docs/configuration#testenvironment-string",children:"JSDOM environment"})," incurs a significant performance overhead. Because this was the default behavior of Jest unless otherwise configured up until now, users who are writing Node apps, for example, may not even know they are given an expensive DOM environment that they do not even need.",(0,n.jsx)(t.br,{}),"\n","For this reason, we are ",(0,n.jsx)(t.strong,{children:"changing the default test environment"})," from ",(0,n.jsx)(t.code,{children:'"jsdom"'})," to ",(0,n.jsx)(t.code,{children:'"node"'}),". If you are affected by this change because you use DOM APIs and do not have the test environment explicitly configured, you should be receiving an error when e.g. ",(0,n.jsx)(t.code,{children:"document"})," is accessed, and you can configure ",(0,n.jsx)(t.code,{children:'"testEnvironment": "jsdom"'})," or use ",(0,n.jsx)(t.a,{href:"/docs/configuration#testenvironment-string",children:"per-file environment configuration"})," to resolve this.",(0,n.jsx)(t.br,{}),"\n","For mixed projects where some tests require a DOM environment but others don't, we recommend using the fast ",(0,n.jsx)(t.code,{children:'"node"'})," environment by default and declaring exactly those tests that need the DOM using ",(0,n.jsx)(t.a,{href:"/docs/configuration#testenvironment-string",children:"docblocks"}),".",(0,n.jsx)(t.br,{}),"\n","In the next major, we plan to also eliminate ",(0,n.jsx)(t.code,{children:"jest-jasmine2"})," and ",(0,n.jsx)(t.code,{children:"jest-environment-jsdom"})," from the Jest dependency tree and require them to be installed explicitly, so that many users can profit from a smaller install size with less clutter that they don't need."]}),"\n",(0,n.jsxs)(t.p,{children:["Another default that we are changing affects Fake Timers aka ",(0,n.jsx)(t.a,{href:"/docs/timer-mocks",children:"Timer Mocks"}),'. We introduced an opt-in "modern" implementation of Fake Timers in Jest 26 accessed transparently through the same API, but with much more comprehensive mocking, such as for ',(0,n.jsx)(t.code,{children:"Date"})," and ",(0,n.jsx)(t.code,{children:"queueMicrotask"}),".",(0,n.jsx)(t.br,{}),"\n","This ",(0,n.jsx)(t.strong,{children:"modern fake timers implementation will now be the default"}),". If you are among the unlucky few who are affected by the subtle implementation differences too heavily to migrate, you can get back the old implementation using ",(0,n.jsx)(t.code,{children:'jest.useFakeTimers("legacy")'})," or, if you are enabling fake timers globally via ",(0,n.jsx)(t.a,{href:"/docs/configuration#timers-string",children:"configuration"}),", ",(0,n.jsx)(t.code,{children:'"timers": "legacy"'}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"features-coming-with-breaking-changes",children:"Features coming with breaking changes"}),"\n",(0,n.jsx)(t.p,{children:"We introduced a few more small breaking changes to help you avoid mistakes by disallowing some things that can easily happen unintentionally:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["The same ",(0,n.jsx)(t.code,{children:"done"})," test callback may not be called more than once,"]}),"\n",(0,n.jsxs)(t.li,{children:["calling ",(0,n.jsx)(t.code,{children:"done"})," and returning a Promise may not be combined,"]}),"\n",(0,n.jsxs)(t.li,{children:["a ",(0,n.jsx)(t.code,{children:"describe"})," block must not return anything,"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["and we ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/10512",children:"made some TypeScript types stricter"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Modules used in the following configuration options are now transformed like the rest of your code, which may be breaking if you relied on them being loaded as-is:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"testEnvironment"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"runner"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"testRunner"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:"snapshotResolver"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"miscellaneous-breaking-changes",children:"Miscellaneous breaking changes"}),"\n",(0,n.jsx)(t.p,{children:"We removed some long-deprecated functions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jest.addMatchers"})," (use ",(0,n.jsx)(t.code,{children:"expect.extend"})," instead)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jest.resetModuleRegistry"})," (use ",(0,n.jsx)(t.code,{children:"jest.resetModules"})," instead)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"jest.runTimersToTime"})," (use ",(0,n.jsx)(t.code,{children:"jest.advanceTimersByTime"})," instead)"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["A lot of Jest's packages have been migrated to use ESM-style exports (although they are still shipped as CommonJS), so if you consume e.g. ",(0,n.jsx)(t.code,{children:"pretty-format"})," directly, you may need to adjust your import to a ",(0,n.jsx)(t.code,{children:"default"})," import."]}),"\n",(0,n.jsxs)(t.p,{children:["We dropped support for Node 13\u2014but Jest always supports the ",(0,n.jsx)(t.em,{children:"Current"})," and all ",(0,n.jsx)(t.em,{children:"LTS"})," ",(0,n.jsx)(t.a,{href:"https://nodejs.org/en/about/releases/",children:"Node versions"}),", and Jest 27 continues to support Node 10, which only recently became unmaintained."]}),"\n",(0,n.jsxs)(t.p,{children:["As always, the full changelog and list of breaking changes can be ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2700",children:"viewed here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["Finally, we'd like to thank the community for once again awarding Jest a sky-high satisfaction rating of 96% in the ",(0,n.jsx)(t.a,{href:"https://2020.stateofjs.com/en-US/technologies/testing/",children:"State of JS 2020"})," survey! Stay safe everyone, and we hope you continue to enjoy using Jest in the years and versions to come! \ud83c\udccf"]})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},1021:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/27-interactive-failures-e22e3b31b285188ed65f6432cb21df30.png"},1670:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>o});var n=s(7378);const i=n.createContext({});function o(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:o(e),n.createElement(i.Provider,{value:a},t)}}}]);
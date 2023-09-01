"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4838],{261:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=s(4246),o=s(1670);const i={title:"Jest 22: Refinements & Custom Runners",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},r=void 0,a={permalink:"/pt-BR/blog/2017/12/18/jest-22",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2017-12-18-jest-22.md",source:"@site/i18n/pt-BR/docusaurus-plugin-content-blog/2017-12-18-jest-22.md",title:"Jest 22: Refinements & Custom Runners",description:"Today we are announcing a new major version of Jest which refines almost all parts of Jest to provide a more solid testing foundation. Together with the Jest community we made a number of changes across the board that will help you get more out of Jest. We are also graduating the custom runners feature out of the experimental stage and added a new package, jest-worker, for parallelizing work across multiple processes. We have compiled a list of highlights below but make sure to check out the (as always) massive changelog.",date:"2017-12-18T00:00:00.000Z",formattedDate:"18 de dezembro de 2017",tags:[],readingTime:7.11,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB"}],frontMatter:{title:"Jest 22: Refinements & Custom Runners",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorFBID:0x5af3c395182e},unlisted:!1,prevItem:{title:"Jest 23: \ud83d\udd25 Blazing Fast Delightful Testing",permalink:"/pt-BR/blog/2018/05/29/jest-23-blazing-fast-delightful-testing"},nextItem:{title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",permalink:"/pt-BR/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner"}},h={authorsImageUrls:[void 0]},l=[{value:"Good bye Node 4 &amp; welcome JSDOM 11",id:"good-bye-node-4--welcome-jsdom-11",level:2},{value:"Custom Runners + Easy parallelization with <code>jest-worker</code>",id:"custom-runners--easy-parallelization-with-jest-worker",level:2},{value:"Codeframe in test failures",id:"codeframe-in-test-failures",level:2},{value:"Easier testing of errors thrown in async code",id:"easier-testing-of-errors-thrown-in-async-code",level:2},{value:"Asynchronous test environments",id:"asynchronous-test-environments",level:2},{value:"Experimental Leak Detection",id:"experimental-leak-detection",level:2},{value:"Watch Mode Refinements",id:"watch-mode-refinements",level:2},{value:"<strong>Babel 7 support</strong>",id:"babel-7-support",level:2},{value:"Mock function improvements",id:"mock-function-improvements",level:2},{value:"Highlights from Jest 21",id:"highlights-from-jest-21",level:2},{value:"Jest Community",id:"jest-community",level:2}];function c(e){const t=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre",img:"img",strong:"strong",ol:"ol",li:"li",em:"em",ul:"ul"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Today we are announcing a new major version of Jest which refines almost all parts of Jest to provide a more solid testing foundation. Together with the Jest community we made a number of changes across the board that will help you get more out of Jest. We are also graduating the custom runners feature out of the experimental stage and added a new package, ",(0,n.jsx)(t.code,{children:"jest-worker"}),", for parallelizing work across multiple processes. We have compiled a list of highlights below but make sure to check out the (as always) ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md",children:"massive changelog"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"good-bye-node-4--welcome-jsdom-11",children:"Good bye Node 4 & welcome JSDOM 11"}),"\n",(0,n.jsxs)(t.p,{children:["With this release we are dropping support for Node 4, mainly because one of our main dependencies, JSDOM, ended their support. Jest now comes out of the box with JSDOM 11 which features better support for SVGs, ",(0,n.jsx)(t.code,{children:"requestAnimationFrame"}),", ",(0,n.jsx)(t.code,{children:"URL"})," and ",(0,n.jsx)(t.code,{children:"URLSearchParams"})," built in, and ",(0,n.jsx)(t.a,{href:"https://github.com/jsdom/jsdom/blob/master/Changelog.md",children:"much more"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"custom-runners--easy-parallelization-with-jest-worker",children:["Custom Runners + Easy parallelization with ",(0,n.jsx)(t.code,{children:"jest-worker"})]}),"\n",(0,n.jsxs)(t.p,{children:["In Jest 21 we introduced the concept of custom Jest runners. Since then, Rogelio, one of Jest's core contributors, built a number of useful runners: If you have many existing tests written using another framework but you'd like to immediately benefit from Jest's features, check out ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/jest-runner-mocha",children:"jest-runner-mocha"}),". If you have a large codebase that needs linting, ",(0,n.jsx)(t.a,{href:"https://twitter.com/lencioni/status/907398856756695040",children:"you may get a significant speedup"})," if you run eslint within Jest using ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/jest-runner-eslint",children:"jest-runner-eslint"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To gain more of fine-grained control over heavy tasks parallelization (e.g. transforming files or crawling the file system), we designed a new library perfectly suited for the job. We developed a modern, Promise-based module with an approachable API, called ",(0,n.jsx)(t.code,{children:"jest-worker"}),", that allows you to delegate to child processes those intensive functions. As ",(0,n.jsx)(t.code,{children:"jest-worker"}),", like any other Jest package, is a part of the Jest platform, you can use it however you like even without ever using Jest itself. You'll find more in the documentation ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/jest-worker",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["To get a better understanding of custom runners and Jest as a platform, make sure to check out Rogelio's talk from Reactive Conf 2017: ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?v=NtjyeojAOBs",children:"Jest as a Platform"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"codeframe-in-test-failures",children:"Codeframe in test failures"}),"\n",(0,n.jsx)(t.p,{children:"In order to more easily identify which assertion is failing your test, we've added a code frame showing the context where the assertion is in order to focus on your own code. See the following example test:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test('some test', () => {\n  function someFunctionWhichShouldThrow() {\n    if (false) {\n      throw new Error();\n    }\n\n    return 'success!';\n  }\n\n  expect(someFunctionWhichShouldThrow).toThrow();\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"In Jest 21, we would display the following error:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"failure in Jest 21",src:s(3450).Z+"",width:"972",height:"650"})}),"\n",(0,n.jsx)(t.p,{children:"In Jest 22, we have added a codeframe, giving more context to the failing assertions. We have also cleaned up the stack trace to remove more clutter than ever."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"failure in Jest 22",src:s(5005).Z+"",width:"938",height:"744"})}),"\n",(0,n.jsx)(t.h2,{id:"easier-testing-of-errors-thrown-in-async-code",children:"Easier testing of errors thrown in async code"}),"\n",(0,n.jsxs)(t.p,{children:["You can now use ",(0,n.jsx)(t.code,{children:"toThrow"})," and ",(0,n.jsx)(t.code,{children:"toThrowErrorMatchingSnapshot"})," on promise rejections in the same way you can on synchronous errors."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"async function throwingFunction() {\n  throw new Error('This failed');\n}\n\ntest('asynchronous rejection', async () => {\n  await expect(throwingFunction()).rejects.toThrowErrorMatchingSnapshot();\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"asynchronous-test-environments",children:"Asynchronous test environments"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.a,{href:"https://github.com/GoogleChrome/puppeteer/",children:"Puppeteer"}),", a way of programmatically interacting with a real Chromium Browser, was announced by the Google Chrome team in August, many wanted to be able to use Jest to write their tests running them in Chrome. The community have helped us out making this possible by allowing asynchronous test environments. We are still working on making this experience as good as possible, but please see ",(0,n.jsx)(t.a,{href:"/docs/puppeteer",children:"this guide"})," for how to use Puppeteer with Jest, starting today."]}),"\n",(0,n.jsx)(t.h2,{id:"experimental-leak-detection",children:"Experimental Leak Detection"}),"\n",(0,n.jsxs)(t.p,{children:["We added an experimental ",(0,n.jsx)(t.code,{children:"--detectLeaks"})," setting to Jest that will let you know if your internal environment instance is leaked after a test execution. It will also warn you when your test suite tries to require a file after the test has finished, meaning you forgot to wait for all async operations or left something not properly cleaned. This will however not discover leaks in user land code, only in test land code; although the technology used behind it can help you (see ",(0,n.jsx)(t.code,{children:"jest-leak-detector"}),"). If you are reporting a bug about Jest's memory usage, please provide a repro where ",(0,n.jsx)(t.code,{children:"--detectLeaks"})," will make the test suite fail. We ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/4970",children:"started building a better sandboxing mechanism"})," for Jest but it's not ready yet to be enabled by default. If you'd like to help, please reach out to us on discord!"]}),"\n",(0,n.jsx)(t.h2,{id:"watch-mode-refinements",children:"Watch Mode Refinements"}),"\n",(0,n.jsxs)(t.p,{children:["When using watch mode, there is now a way to ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/4886",children:"focus only on tests that previously failed"}),". In this mode, Jest will not re-run previously passing tests which should help you iron out all test failures. Additionally, ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/4841",children:"we added a plugin system to watch mode"}),". By adding modules to ",(0,n.jsx)(t.code,{children:"watchPlugins"})," in your configuration you can extend the features of the watch mode."]}),"\n",(0,n.jsx)(t.h2,{id:"babel-7-support",children:(0,n.jsx)(t.strong,{children:"Babel 7 support"})}),"\n",(0,n.jsxs)(t.p,{children:["Jest uses Babel under the hood to power code coverage and advanced mocking features. With Jest 22, it also supports the upcoming Babel 7. You'll find more in the documentation ",(0,n.jsx)(t.a,{href:"/docs/getting-started#using-babel",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"mock-function-improvements",children:"Mock function improvements"}),"\n",(0,n.jsxs)(t.p,{children:["There has been a couple of changes to mock functions in Jest 22, making them even easier to use. Firstly, we added a ",(0,n.jsx)(t.a,{href:"/docs/mock-function-api#mockfnmocknamevalue",children:(0,n.jsx)(t.code,{children:"mockName"})})," property allowing you to name your mocks, which is useful in assertion failures. We have also made the Jest mock function serializable in ",(0,n.jsx)(t.code,{children:"pretty-format"}),", meaning that you can snapshot test mocks. In Jest 21, ",(0,n.jsx)(t.code,{children:"expect(jest.fn()).toMatchSnapshot()"})," would serialize to ",(0,n.jsx)(t.code,{children:"[Function]"}),", in Jest 22, you might get something like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"test('my mocking test', () => {\n  const mock = jest.fn().mockName('myMock');\n\n  mock('hello', {foo: 'bar'});\n\n  expect(mock).toMatchSnapshot();\n});\n\n// Serializes to:\n\nexports[`my mocking test 1`] = `\n[MockFunction myMock] {\n  \"calls\": Array [\n    Array [\n      \"hello\",\n      Object {\n        \"foo\": \"bar\",\n      },\n    ],\n  ],\n}\n`;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"highlights-from-jest-21",children:"Highlights from Jest 21"}),"\n",(0,n.jsx)(t.p,{children:"Jest 21 was released back in September, and we unfortunately never got around to write a blog post. So here is a quick summary of the main changes in version 21:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Use expect and jest-mock in the browser:"})," ",(0,n.jsx)(t.a,{href:"https://github.com/mjackson",children:"Michael Jackson"})," donated his excellent ",(0,n.jsx)(t.a,{href:"https://github.com/mjackson/expect",children:(0,n.jsx)(t.code,{children:"expect"})})," package to the Jest project. As part of that transition, the Jest core team, with much help from ",(0,n.jsx)(t.a,{href:"https://github.com/skovhus/",children:"Kenneth Skovhus"}),", made both ",(0,n.jsx)(t.code,{children:"jest-matchers"})," (renamed to ",(0,n.jsx)(t.code,{children:"expect"}),") and ",(0,n.jsx)(t.code,{children:"jest-mock"})," work in browsers. This means that while you cannot use Jest itself in browsers (",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/848",children:"yet"}),"), you can use its awesome assertions and mocks for instance as replacements for Chai and Sinon running in Mocha tests. If you are migrating from earlier ",(0,n.jsx)(t.code,{children:"expect"})," to the new Jest-powered ",(0,n.jsx)(t.code,{children:"expect"}),", you can use ",(0,n.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods/",children:(0,n.jsx)(t.code,{children:"jest-codemods"})})," to automate the migration."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"MIT License:"})," We changed Jest's license to MIT. ",(0,n.jsx)(t.em,{children:"Yay!"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fail test suites on async errors:"})," Jest used to have a bug that made it crash when errors were thrown in certain parts of async code. This was fixed by community contributors."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Faster startup:"})," With Jest 21 we fine tuned Jest's startup to be more than 50% faster. The large overhead of Jest when running it on a small and fast test was always an issue for us and now this shouldn't be a reason to hold you back from using Jest any longer."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"jest-community",children:"Jest Community"}),"\n",(0,n.jsx)(t.p,{children:"The community around Jest is working hard to make the testing experience even greater. These are separate projects from the main Jest project, but we want to highlight some of our personal favorites here."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/americanexpress/jest-image-snapshot",children:"jest-image-snapshot"})," \u2013 custom matcher to compare images with snapshots by American Express developers"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," \u2013 all you need to successfully run Jest within TypeScript project by ",(0,n.jsx)(t.a,{href:"https://github.com/kulshekhar/ts-jest",children:"@kulshekhar"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods/",children:"jest-codemods"})," \u2013 migrate your tests from other frameworks to Jest with ease"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/negativetwelve/jest-plugins",children:"jest-plugins"})," \u2013 a new community project oriented around simplifying setting up test environment for specific tools, like React, or providing some handy utilities"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["We'd also like to announce that recently we launched a new place for high quality Jest additions \u2013 ",(0,n.jsx)(t.a,{href:"https://github.com/jest-community",children:"jest-community"}),". It's a new GitHub organization already featuring our favorite projects, like ",(0,n.jsx)(t.a,{href:"https://github.com/jest-community/vscode-jest",children:"vscode-jest"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/jest-community/jest-extended",children:"jest-extended"}),", to name a few, curated by Jest maintainers and collaborators. We've even migrated our ",(0,n.jsx)(t.a,{href:"https://github.com/jest-community/eslint-plugin-jest",children:"eslint-plugin-jest"})," there, and already see some great contributions, which are published independently at a faster pace."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Jest Community",src:s(140).Z+"",width:"2004",height:"1090"})}),"\n",(0,n.jsx)(t.p,{children:"Community projects under one organisation are also a great way for us to experiment on things like automated releases, which we'd like to explore for Jest as well. They also enable us to share some common things between them, like the shape of the README for example (thanks to the webpack Community for the idea), making it easier to learn and use for all of us."}),"\n",(0,n.jsx)(t.p,{children:"If you have something awesome to share, feel free to reach out to us! We'd love to share your project here."})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}},140:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/22-community-2b148613668cb789c0215015bfbc10c7.png"},3450:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/22-failure-21-a7eb296a994d13405234955abd946adc.png"},5005:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/22-failure-22-2dfad8dd25ea9b4b87a9359658f5eab4.png"},1670:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>i});var n=s(7378);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||r:i(e),n.createElement(o.Provider,{value:a},t)}}}]);
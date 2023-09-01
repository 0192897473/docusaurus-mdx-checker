"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4e3],{3554:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var i=s(4246),n=s(1670);const o={title:"Jest 15.0: New Defaults for Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},a=void 0,r={permalink:"/blog/2016/09/01/jest-15",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2016-09-01-jest-15.md",source:"@site/blog/2016-09-01-jest-15.md",title:"Jest 15.0: New Defaults for Jest",description:"We spent the past year making Jest faster, easier to configure, added tons of features and built snapshot testing. However, there were two areas where we invested very little we can move fast and improve the framework for Facebook and the open source community at light-speed. Jest's goal is to come with batteries included and to require as little configuration as necessary. We recently got a chance to explain our philosophy on a create-react-app issue.",date:"2016-09-01T00:00:00.000Z",formattedDate:"September 1, 2016",tags:[],readingTime:7.205,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 15.0: New Defaults for Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"Jest 16.0: Turbocharged CLI & Community Update",permalink:"/blog/2016/10/03/jest-16"},nextItem:{title:"Jest 14.0: React Tree Snapshot Testing",permalink:"/blog/2016/07/27/jest-14"}},l={authorsImageUrls:[void 0]},c=[{value:"New CLI error messages and summaries",id:"new-cli-error-messages-and-summaries",level:2},{value:"New watch command",id:"new-watch-command",level:2},{value:"jest-react-native improvements",id:"jest-react-native-improvements",level:2},{value:"Buffered Console Messages",id:"buffered-console-messages",level:2},{value:"Disabled Automocking",id:"disabled-automocking",level:2},{value:"Test File Patterns",id:"test-file-patterns",level:2},{value:"Module Registry Persistence",id:"module-registry-persistence",level:2},{value:"Real vs Fake Timers",id:"real-vs-fake-timers",level:2},{value:"setupEnvScriptFile vs setupFiles",id:"setupenvscriptfile-vs-setupfiles",level:2},{value:"Rewritten Code Coverage Support",id:"rewritten-code-coverage-support",level:2},{value:"Other Improvements",id:"other-improvements",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",img:"img",pre:"pre",strong:"strong",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["We spent the past year making Jest ",(0,i.jsx)(t.a,{href:"/blog/2016/03/11/javascript-unit-testing-performance",children:"faster"}),", ",(0,i.jsx)(t.a,{href:"/blog/2016/04/12/jest-11",children:"easier to configure"}),", ",(0,i.jsx)(t.a,{href:"/blog/2016/06/22/jest-13",children:"added tons of features"})," and built ",(0,i.jsx)(t.a,{href:"/blog/2016/07/27/jest-14",children:"snapshot testing"}),". However, there were two areas where we invested very little: the CLI output and user experience. With Jest 15 we are changing the framework radically to make it easier to use both for beginners and experienced users. We are excited that our investment in Jest is now paying off: we can move fast and improve the framework for Facebook and the open source community at light-speed. Jest's goal is to come with batteries included and to require as little configuration as necessary. We recently got a chance to explain our philosophy on a ",(0,i.jsx)(t.a,{href:"https://github.com/facebookincubator/create-react-app/pull/250#issuecomment-237098619",children:"create-react-app issue"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The most important change to talk about is a set of ",(0,i.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/1511",children:"new defaults"}),". If you are an existing Jest user you will very likely need to update your configuration for Jest 15. In most cases it will simplify your setup and Jest will provide useful error messages during the upgrade. All of the new defaults can be disabled to suit your needs, but we still consider the disabled features critical for Jest in certain situations and will continue to use and support them at Facebook long-term. Our ",(0,i.jsx)(t.a,{href:"/docs/api",children:"API documentation"})," was also completely rewritten to reflect these changes. ",(0,i.jsx)(t.a,{href:"https://github.com/facebook/react/pull/7625/files",children:"This pull request for React"})," highlights some of the changes necessary for existing projects."]}),"\n",(0,i.jsx)(t.h2,{id:"new-cli-error-messages-and-summaries",children:"New CLI error messages and summaries"}),"\n",(0,i.jsxs)(t.p,{children:["As part of our effort to remove Jasmine incrementally within Jest, replacing all Jasmine matchers was almost completed. A lot of time was spent tweaking every error message for every matcher to give the best signal to users when a test is failing \u2013 the time when Jest should provide the most value to you. In addition to printing the expected and received values, a diff is printed for the ",(0,i.jsx)(t.code,{children:"toBe"})," and ",(0,i.jsx)(t.code,{children:"toEqual"})," matchers to help spot mistakes. More colors were added and relevant files from stack traces are highlighted more prominently."]}),"\n",(0,i.jsxs)(t.p,{children:["Here is a comparison of the before and after on a light terminal: ",(0,i.jsx)(t.img,{alt:"failure1",src:s(7233).Z+"",width:"2414",height:"1422"})," It also works well with darker colors: ",(0,i.jsx)(t.img,{alt:"failure2",src:s(6039).Z+"",width:"2442",height:"850"})]}),"\n",(0,i.jsx)(t.h2,{id:"new-watch-command",children:"New watch command"}),"\n",(0,i.jsxs)(t.p,{children:["We completely rewrote ",(0,i.jsx)(t.code,{children:"jest --watch"})," to be more interactive. It can now switch between running all tests or only test files related to changed files by pressing ",(0,i.jsx)(t.code,{children:"a"})," or ",(0,i.jsx)(t.code,{children:"o"}),". By pressing ",(0,i.jsx)(t.code,{children:"p"})," a prompt appears that allows to specify a test pattern to focus on a specific set of files. Snapshot tests can be updated by pressing ",(0,i.jsx)(t.code,{children:"u"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"watch",src:s(5598).Z+"",width:"858",height:"575"})}),"\n",(0,i.jsx)(t.h2,{id:"jest-react-native-improvements",children:"jest-react-native improvements"}),"\n",(0,i.jsxs)(t.p,{children:["Mocks for ",(0,i.jsx)(t.code,{children:"ListView"}),", ",(0,i.jsx)(t.code,{children:"TextInput"}),", ",(0,i.jsx)(t.code,{children:"ActivityIndicator"}),", ",(0,i.jsx)(t.code,{children:"ScrollView"})," and more were added. The existing mocks were updated to use the real implementations and existing snapshots likely have to be updated when upgrading to Jest 15. A ",(0,i.jsx)(t.code,{children:"mockComponent"})," function was added to ",(0,i.jsx)(t.code,{children:"jest-react-native"})," that can be used to mock native components:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"jest.mock('MyNativeComponent', () => {\n  const jestReactNative = require('jest-react-native');\n  return jestReactNative.mockComponent('MyNativeComponent');\n});\n"})}),"\n",(0,i.jsx)(t.p,{children:"There have also been a number of improvements around mocking images, the fetch module and other native APIs."}),"\n",(0,i.jsx)(t.h2,{id:"buffered-console-messages",children:"Buffered Console Messages"}),"\n",(0,i.jsx)(t.p,{children:"Jest parallelizes test runs across workers to maximize performance. Previously Jest used to forward console messages from workers to the parent and printed them immediately. When running multiple tests in parallel, it was often hard to find out which test and which module was calling a log function. In Jest 15, all console messages are buffered and printed together with individual test results. In addition the file and line number of the log call is printed so the code can easily be inspected."}),"\n",(0,i.jsxs)(t.p,{children:["Compare the output of the previous version of Jest and Jest 15: ",(0,i.jsx)(t.img,{alt:"console",src:s(8208).Z+"",width:"2358",height:"1162"})]}),"\n",(0,i.jsx)(t.h2,{id:"disabled-automocking",children:"Disabled Automocking"}),"\n",(0,i.jsxs)(t.p,{children:["Automocking is now disabled by default in Jest. This is by far the most confusing feature for new users and in many ways it doesn't make sense for small projects. We introduced automocking at Facebook and it worked great for us when unit testing was adopted in a large existing code base with few existing tests, but over time it felt like people spent more time fighting with mocked/unmocked modules than it would have taken them to write a test normally. We also noticed that library authors often require a huge number of basic modules that always have to be manually unmocked. Even for Jest itself we realized that the majority of tests had automocking disabled manually. We still believe that explicit automocking can be incredibly valuable. This change simply trades implicit mocks for explicit mocks via calls to ",(0,i.jsx)(t.code,{children:"jest.mock(moduleName)"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you would still like to use automocking by default, enable the ",(0,i.jsx)(t.code,{children:"automock"})," setting in your configuration or manually call ",(0,i.jsx)(t.code,{children:"jest.enableAutomock()"})," in your test or setup file."]}),"\n",(0,i.jsx)(t.h2,{id:"test-file-patterns",children:"Test File Patterns"}),"\n",(0,i.jsxs)(t.p,{children:["Not everyone uses the same convention of using a ",(0,i.jsx)(t.code,{children:"__tests__"})," folder to store tests. Jest 15 also looks for files ending in ",(0,i.jsx)(t.code,{children:".spec.js"})," or ",(0,i.jsx)(t.code,{children:".test.js"}),", two popular community standards. Jest 15 also removes the ",(0,i.jsx)(t.code,{children:"testDirectoryName"})," and ",(0,i.jsx)(t.code,{children:"testFileExtensions"})," configuration options and asks users to switch to the ",(0,i.jsx)(t.code,{children:"testRegex"})," option when the old configuration options are used."]}),"\n",(0,i.jsx)(t.h2,{id:"module-registry-persistence",children:"Module Registry Persistence"}),"\n",(0,i.jsxs)(t.p,{children:["Jest used to implicitly reset all modules before each test and we recommended requiring modules in ",(0,i.jsx)(t.code,{children:"beforeEach"})," or inside of tests. This is useful when modules have local state that shouldn't be shared between tests. However, two big shifts happened: ES modules with the top-level ",(0,i.jsx)(t.code,{children:"import"})," syntax and a renewed interest in writing stateless functional modules."]}),"\n",(0,i.jsxs)(t.p,{children:["This has lead to numerous incompatibilities. We also noticed that at Facebook we weren't even using this implicit reset. Instead we relied on explicit calls to ",(0,i.jsx)(t.code,{children:"jest.resetModules()"})," which puts engineers in control on when to wipe away all state."]}),"\n",(0,i.jsx)(t.p,{children:"Here is an example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",children:"const React1 = require('react');\njest.resetModules();\nconst React2 = require('react');\n\nReact1 !== React2; // These two are separate copies of React.\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The call to ",(0,i.jsx)(t.code,{children:"resetModules"})," wipes away the require cache. A second call to require the same module will result in a new instantiation of the same module and all of its dependencies. This feature is especially useful when dealing with modules that have side effects, like ",(0,i.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/3bbf32a239fc4aad8cc6928a787f235bd86fecac/packages/jest-haste-map/src/__tests__/index-test.js#L64",children:"jest-haste-map"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We believe it is better to put users in control so we disabled the implicit reset. Modules can be reset using ",(0,i.jsx)(t.code,{children:"jest.resetModules()"})," in code and the ",(0,i.jsx)(t.code,{children:"resetModules"})," option can be enabled in the configuration to bring back the previous behavior."]}),"\n",(0,i.jsx)(t.h2,{id:"real-vs-fake-timers",children:"Real vs Fake Timers"}),"\n",(0,i.jsxs)(t.p,{children:["By default Jest used to mock all timer functions like ",(0,i.jsx)(t.code,{children:"setTimeout"})," or ",(0,i.jsx)(t.code,{children:"process.nextTick"})," and provided an API ",(0,i.jsx)(t.code,{children:"jest.runAllTimers()"})," to advance timers programatically. This is useful when a piece of code sets a long timeout that we don't want to wait for in a test."]}),"\n",(0,i.jsxs)(t.p,{children:["However we found that most of the time the use cases are quite isolated. ",(0,i.jsx)(t.a,{href:"/docs/tutorial-async",children:"Async programming"})," has also become much simpler in our test runner. Jest now uses the real timers by default."]}),"\n",(0,i.jsxs)(t.p,{children:["You can still override this by specifying ",(0,i.jsx)(t.code,{children:'"timers": "fake"'})," in the configuration or by calling ",(0,i.jsx)(t.code,{children:"jest.useRealTimers()"})," and ",(0,i.jsx)(t.code,{children:"jest.useFakeTimers()"})," global switches."]}),"\n",(0,i.jsx)(t.h2,{id:"setupenvscriptfile-vs-setupfiles",children:"setupEnvScriptFile vs setupFiles"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"setupEnvScriptFile"})," configuration option has been deprecated for a while. Jest 15 removes it completely and replaces it with ",(0,i.jsx)(t.code,{children:"setupFiles"}),". This option expects an array of file paths that are loaded in order before a test file is executed."]}),"\n",(0,i.jsx)(t.h2,{id:"rewritten-code-coverage-support",children:"Rewritten Code Coverage Support"}),"\n",(0,i.jsxs)(t.p,{children:["Code coverage in Jest can be used through ",(0,i.jsx)(t.code,{children:"jest --coverage"})," and requires no additional packages or configuration. Code coverage support was completely rewritten and a new ",(0,i.jsx)(t.code,{children:"collectCoverageFrom"})," option was added to collect code coverage information from entire projects, including ",(0,i.jsx)(t.strong,{children:"untested files"}),". Note that this option uses globs as we are hoping to further simplify configuration options in the future and provide a simpler alternative to regular expressions. See Jest's ",(0,i.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/9088f6517813f6c089cf52e980d6579511dcde88/package.json#L47",children:"package.json"})," for an example."]}),"\n",(0,i.jsx)(t.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,i.jsx)(t.p,{children:"A huge number of other improvements were also made:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Improved performance of small test runs."}),"\n",(0,i.jsx)(t.li,{children:"Jest now uses verbose mode when only a single test file is executed."}),"\n",(0,i.jsxs)(t.li,{children:["Added an ",(0,i.jsx)(t.code,{children:"--env"})," option to override the configured test environment."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"moduleNameMapper"})," now uses a resolution algorithm."]}),"\n",(0,i.jsx)(t.li,{children:"Jest now works with paths that have special characters in them, like parenthesis."}),"\n",(0,i.jsxs)(t.li,{children:["Added ",(0,i.jsx)(t.code,{children:"global.global"})," to the node environment."]}),"\n",(0,i.jsxs)(t.li,{children:["Fixed ",(0,i.jsx)(t.code,{children:"babel-plugin-jest-hoist"}),"'s invalid error when a random user function was called ",(0,i.jsx)(t.code,{children:"mock"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Fix ",(0,i.jsx)(t.code,{children:"testEnvironment"})," resolution to prefer ",(0,i.jsx)(t.code,{children:"jest-environment-{name}"})," instead of ",(0,i.jsx)(t.code,{children:"{name}"})," only. This prevents a module collision when using ",(0,i.jsx)(t.code,{children:"jsdom"})," as test environment."]}),"\n",(0,i.jsx)(t.li,{children:"Improvements to Jest's own test infra by merging integration and unit tests. Code coverage is now collected for Jest."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["We are happy when looking back at all the changes we have made together with the help from the community and couldn't be more excited to make Jest even better over the course of the next few months. Please ",(0,i.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues",children:"file an issue"})," if something isn't working as expected and send us pull requests."]}),"\n",(0,i.jsxs)(t.p,{children:["Next up: ",(0,i.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/1480",children:"Concurrent Reporter"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?(0,i.jsx)(t,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}},8208:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/15-console-5050b2c2d39cedc5bff49baa56bb78a3.png"},7233:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/15-failure1-18a216b24eb5641ffe2f700795be8738.png"},6039:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/15-failure2-0638fb4e0e8ef964763fab8c4bebd23c.png"},5598:(e,t,s)=>{s.d(t,{Z:()=>i});const i=s.p+"assets/images/15-watch-951ac33b263d3ee8522e35b8836b1f88.gif"},1670:(e,t,s)=>{s.d(t,{Zo:()=>r,ah:()=>o});var i=s(7378);const n=i.createContext({});function o(e){const t=i.useContext(n);return i.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:o(e),i.createElement(n.Provider,{value:r},t)}}}]);
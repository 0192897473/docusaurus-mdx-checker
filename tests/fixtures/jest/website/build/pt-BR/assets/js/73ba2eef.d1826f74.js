"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6516],{3886:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var n=s(4246),o=s(1670);const i={title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},a=void 0,r={permalink:"/pt-BR/blog/2017/05/06/jest-20-delightful-testing-multi-project-runner",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",source:"@site/i18n/pt-BR/docusaurus-plugin-content-blog/2017-05-06-jest-20-delightful-testing-multi-project-runner.md",title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",description:"A few months ago we announced Jest 19 which came with major new features and was the biggest Jest release until today. Jest 20 has twice the amount of changes compared to the previous version, features a complete rewrite of the test runner, adds new testing APIs. The new release enables a new level of customization and configuration for projects all while making it effortless to upgrade. Beyond Painless JavaScript Testing, we believe Jest is now delivering a Delightful JavaScript Testing experience. Let's take a look at the best new features and changes in depth:",date:"2017-05-06T00:00:00.000Z",formattedDate:"6 de maio de 2017",tags:[],readingTime:6.325,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 20: \ud83d\udc96 Delightful Testing & \ud83c\udfc3\ud83c\udffd Multi-Project-Runner",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"Jest 22: Refinements & Custom Runners",permalink:"/pt-BR/blog/2017/12/18/jest-22"},nextItem:{title:"\ud83c\udccf Jest 19: Immersive Watch Mode & Test Platform Improvements",permalink:"/pt-BR/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements"}},l={authorsImageUrls:[void 0]},c=[{value:"Multi-Project-Runner &amp; Configuration Overhaul",id:"multi-project-runner--configuration-overhaul",level:2},{value:"New &amp; Improved Testing APIs",id:"new--improved-testing-apis",level:2},{value:"Breaking Changes",id:"breaking-changes",level:2},{value:"Other Improvements",id:"other-improvements",level:2},{value:"Talks about Jest",id:"talks-about-jest",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",strong:"strong",h2:"h2",img:"img",code:"code",pre:"pre",ul:"ul",li:"li",em:"em"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A few months ago we announced ",(0,n.jsx)(t.a,{href:"/blog/2017/02/21/jest-19-immersive-watch-mode-test-platform-improvements",children:"Jest 19"})," which came with major new features and was the biggest Jest release until today. Jest 20 has twice the amount of changes compared to the previous version, features a complete rewrite of the test runner, adds new testing APIs. The new release enables a new level of customization and configuration for projects all while making it effortless to upgrade. Beyond Painless JavaScript Testing, we believe Jest is now delivering a ",(0,n.jsx)(t.strong,{children:"Delightful JavaScript Testing experience"}),". Let's take a look at the best new features and changes in depth:"]}),"\n",(0,n.jsx)(t.h2,{id:"multi-project-runner--configuration-overhaul",children:"Multi-Project-Runner & Configuration Overhaul"}),"\n",(0,n.jsxs)(t.p,{children:["Until now, Jest could only operate in one project at a time. This is often cumbersome if you are working on many smaller projects that each have their own setup and configuration. With Jest 20, we rewrote the test runner completely to run many projects at the same time within a single instance of Jest, for example if you are working on a React frontend and a node.js backend. Here is a video of Jest running tests for ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react",children:"React"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/relay",children:"Relay"}),", ",(0,n.jsx)(t.a,{href:"https://github.com/yarnpkg/yarn",children:"Yarn"})," and Jest all at the same time:"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"multi-runner",src:s(4902).Z+"",width:"839",height:"520"})}),"\n",(0,n.jsx)(t.p,{children:"Jest is now collapsing the usage guide after the first test run to save vertical space in the terminal."}),"\n",(0,n.jsxs)(t.p,{children:["Further, we completely overhauled how the configuration system works inside of Jest. You can now pass any configuration option through the CLI to overwrite the ones specified in your configuration file. Along with that, we changed Jest to look for a ",(0,n.jsx)(t.code,{children:"jest.config.js"})," file by default which means you are now able to define a Jest configuration using JavaScript as well as being able to configure it through ",(0,n.jsx)(t.code,{children:"package.json"})," like before. Through the addition of all these new features, you are now able to combine Jest in more powerful ways than ever before. For example, if you would like to find out which tests Jest would run given a set of changed files from a commit across multiple projects in a monorepo, you can combine cli arguments like this now:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'$ jest --projects projectA projectB --listTests --findRelatedTests projectA/banana.js projectB/kiwi.js\n[\n  "projectA/banana.test.js",\n  "projectB/kiwi.test.js",\n  "projectB/pineapple.test.js",\n]\n'})}),"\n",(0,n.jsx)(t.p,{children:"This is especially useful for continuous integration (CI) systems where you may want to only run a subset of tests for Pull Requests to prevent Jest from running thousands of test files on every small change."}),"\n",(0,n.jsx)(t.p,{children:"Finally, we are now properly mapping code coverage when using TypeScript and we are running code coverage for untested files in worker processes which yields significant speed ups for this feature."}),"\n",(0,n.jsx)(t.h2,{id:"new--improved-testing-apis",children:"New & Improved Testing APIs"}),"\n",(0,n.jsx)(t.p,{children:"We made a number of additions and improvements to the testing APIs which will help write more effective tests. We'd like to point out that all of these improvements were made entirely by community members!"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Better async testing:"})," Added new async/Promise support through resolves/rejects modifiers on expect: ",(0,n.jsx)(t.code,{children:"expect(Promise(\u2026)).resolves.toEqual(\u2026)"}),". ",(0,n.jsx)(t.a,{href:"/docs/expect#resolves",children:"See documentation"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.strong,{children:["Expect ",(0,n.jsx)(t.code,{children:"n"})," assertions:"]})," Along with the existing ",(0,n.jsx)(t.code,{children:"expect.assertions(n)"}),", the new ",(0,n.jsx)(t.code,{children:"expect.hasAssertions()"})," can be used to ensure a test has at least one assertion."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Lint Plugin:"})," A ",(0,n.jsx)(t.code,{children:"valid-expect"})," rule was added to ",(0,n.jsx)(t.code,{children:"eslint-plugin-jest"})," to ensure that an assertion is called after invoking ",(0,n.jsx)(t.code,{children:"expect"}),". This will prevent mistakes like a stray ",(0,n.jsx)(t.code,{children:"expect(banana);"})," with a missing assertion call."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Pretty-Format Plugins:"})," A number of new pretty-format plugins were added to Jest. We now pretty-print ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/immutable-js/",children:"Immutable.js"})," data structures and HtmlElements in assertion failures and snapshots."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Custom Environment:"})," It is now possible to add a ",(0,n.jsx)(t.code,{children:"@jest-environment node|jsdom"})," annotation to the doc-block comment of a test file to use a test environment different from the default for individual tests."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Here is an example of all how all the new APIs together will make testing more delightful:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"/**\n * @jest-environment node\n */\n\ntest('compares apples and bananas', async () => {\n  expect.hasAssertions(); // Ensure this test has at least one assertion.\n\n  await expect(\n    Promise.resolve(Immutable.Map({apples: 1, bananas: 2})),\n  ).resolves.toEqual(Immutable.Map({apples: 1, bananas: 3}));\n\n  expect('banana'); // valid-expect in eslint-plugin-jest will show an error.\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"This example will print a test failure similar to this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"testing-apis",src:s(7765).Z+"",width:"2164",height:"1638"})}),"\n",(0,n.jsx)(t.h2,{id:"breaking-changes",children:"Breaking Changes"}),"\n",(0,n.jsx)(t.p,{children:"As with every major release, we are making a number of breaking changes to make larger changes in the future possible and to push the testing experience to a new level. This time, we tried our best to only break APIs that we don't expect to affect the majority of Jest's users:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fork of Jasmine 2.5:"})," We finally decided to fork Jasmine itself and take ownership over Jest's own test runner. This will allow us to improve all aspects of the unit testing experience in the future but for now we are focused on incremental rewrites and reducing the API surface. If you see a test breaking as a result of a Jasmine API that is now missing, there should be an equivalent feature on the ",(0,n.jsx)(t.code,{children:"jest"})," or ",(0,n.jsx)(t.code,{children:"expect"})," objects. As such, we have removed many Jasmine features that aren't generally used in most codebases."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"New Snapshots on CI:"})," Snapshots must always be committed along with the test and the modules they are testing. We changed Jest to not save new snapshots automatically in Continuous Integration (CI) environments or when the ",(0,n.jsx)(t.code,{children:"--ci"})," flag is specified. To overwrite this behavior, which is generally not recommended, the ",(0,n.jsx)(t.code,{children:"--updateSnapshot"})," flag can be used."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Babel-Polyfill:"})," Jest used to load ",(0,n.jsx)(t.code,{children:"babel-polyfill"})," automatically when using babel-jest which resulted in memory leaks inside of Jest. In most versions of node, it is not necessary to load ",(0,n.jsx)(t.code,{children:"babel-polyfill"})," so we removed this auto-inclusion and instead changed Jest to only include ",(0,n.jsx)(t.code,{children:"regenerator-runtime"})," by default, which is commonly used to support async/await in older versions of Node.js. If you need ",(0,n.jsx)(t.code,{children:"babel-polyfill"}),", you can manually require it in your setup files."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"other-improvements",children:"Other Improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Documentation:"})," Documentation is critical to share best practices and teach everyone how to write effective tests which will lead to better software. Over the last few weeks we have also expanded Jest's documentation to include a Snapshot Testing FAQ, a guide with information about how to use Jest with common JavaScript libraries as well as we documented the new features mentioned above."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Translations:"})," We are now asking for your help to ",(0,n.jsx)(t.a,{href:"https://crowdin.com/project/jest-v2",children:"translate the Jest documentation"})," to make it easier for people to learn how to use Jest."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Custom Reporters:"})," Jest now supports custom test reporters through the ",(0,n.jsx)(t.code,{children:"reporters"})," configuration option. You can finally customize the output of Jest as well as integrate it with other tools by generating reports in formats such as XML. ",(0,n.jsx)(t.a,{href:"/docs/configuration#reporters-array-modulename-modulename-options",children:"See documentation"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Codebase Health:"})," It was only possible iterate so quickly in Jest because we spent a significant amount of time on the health of the codebase. We were one of the early adopters of ",(0,n.jsx)(t.a,{href:"https://github.com/prettier/prettier",children:"prettier"}),", we notably increased flow coverage, forked Jasmine to improve our test runner library and we rewrote and refactored significant portions of Jest itself to set up Jest for success in the future."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Bugfixes:"})," As always, we made plenty of bugfixes in Jest. The full changelog can be found in the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#jest-2000",children:"Jest repository"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"talks-about-jest",children:"Talks about Jest"}),"\n",(0,n.jsx)(t.p,{children:"Recently the Jest core team and other contributors started to talk more about Jest and the experience of working on Jest at conferences:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Rogelio Guzman did a talk about ",(0,n.jsx)(t.a,{href:"https://www.youtube.com/watch?time_continue=416&v=HAuXJVI_bUs",children:"Jest Snapshots and Beyond"})," at React Conf."]}),"\n",(0,n.jsxs)(t.li,{children:["I spoke about ",(0,n.jsx)(t.a,{href:"https://developers.facebook.com/videos/f8-2017/building-high-quality-javascript-tools/",children:"Building High-Quality JavaScript Tools"})," at Facebook's F8 conference."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.em,{children:["As always, this release couldn't have been possible without you, the JavaScript community. We are incredibly grateful that we get the opportunity to work on improving JavaScript testing together. If you'd like to contribute to Jest, please don't hesitate to reach out to us on ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest",children:"GitHub"})," or on ",(0,n.jsx)(t.a,{href:"https://discord.gg/j6FKKQQrW9",children:"Discord"}),"."]})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},4902:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/20-multi-runner-bca686433b2cb63c147951eedce67538.gif"},7765:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/20-testing-apis-d1ff5d93e72e0aedc768bd40bd179e96.png"},1670:(e,t,s)=>{s.d(t,{Zo:()=>r,ah:()=>i});var n=s(7378);const o=n.createContext({});function i(e){const t=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const a={};function r({components:e,children:t,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||a:i(e),n.createElement(o.Provider,{value:r},t)}}}]);
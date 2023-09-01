"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6990],{8405:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=s(4246),i=s(1670);const r={title:"2016 in Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},o=void 0,a={permalink:"/blog/2016/12/15/2016-in-jest",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2016-12-15-2016-in-jest.md",source:"@site/blog/2016-12-15-2016-in-jest.md",title:"2016 in Jest",description:"2016 was a big year for JavaScript testing with Jest. In the first six months of the year we rewrote Jest and built a solid foundation to significantly improve performance and the developer experience of testing JavaScript code. We flow-typed the entire codebase, built a ton of integration tests for Jest itself and adopted lerna to turn Jest from a framework into a Painless JavaScript Testing platform.",date:"2016-12-15T00:00:00.000Z",formattedDate:"December 15, 2016",tags:[],readingTime:7.065,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"2016 in Jest",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"A Great Developer Experience",permalink:"/blog/2017/01/30/a-great-developer-experience"},nextItem:{title:"Jest 16.0: Turbocharged CLI & Community Update",permalink:"/blog/2016/10/03/jest-16"}},d={authorsImageUrls:[void 0]},c=[{value:"repl.it with Jest integration",id:"replit-with-jest-integration",level:2},{value:"Community Update",id:"community-update",level:2},{value:"New features, changes and fixes in Jest 17 &amp; 18",id:"new-features-changes-and-fixes-in-jest-17--18",level:2},{value:"Plans for Jest in H1 2017",id:"plans-for-jest-in-h1-2017",level:2}];function h(e){const t=Object.assign({p:"p",a:"a",em:"em",h2:"h2",ul:"ul",li:"li",strong:"strong",code:"code"},(0,i.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["2016 was a big year for JavaScript testing with Jest. In the first six months of the year we rewrote Jest and built a solid foundation to significantly improve performance and the developer experience of testing JavaScript code. We flow-typed the entire codebase, built a ton of integration tests for Jest itself and adopted ",(0,n.jsx)(t.a,{href:"https://lernajs.io/",children:"lerna"})," to turn Jest from a framework into a ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/packages",children:(0,n.jsx)(t.em,{children:"Painless JavaScript Testing platform"})}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The newly created ",(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/react-test-renderer",children:"react-test-renderer"})," finally enabled testing of react-native components. Through the jest-react-native preset (now merged directly into react-native) Jest now works out of the box for any React project and comes pre-configured in ",(0,n.jsx)(t.a,{href:"https://github.com/facebookincubator/create-react-app",children:"create-react-app"})," and ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native",children:"react-native"})," projects. We integrated core pieces of Jest into ",(0,n.jsx)(t.a,{href:"https://github.com/facebook/react-native/tree/main/packager/react-packager/src",children:"react-native's packager"})," and the completely new snapshot testing feature has since been used outside of Jest: It was integrated with React Storybook as \u201c",(0,n.jsx)(t.a,{href:"https://github.com/storybooks/storyshots",children:"storyshots"}),"\u201d and is being adopted by other test runners like ",(0,n.jsx)(t.a,{href:"https://github.com/avajs/ava/pull/1113",children:"ava"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/packages/pretty-format",children:"pretty-format"})," project was rewritten with performance in mind to drive Jest's snapshot feature, was recently merged into Jest's monorepo and is also helpful in other ",(0,n.jsx)(t.a,{href:"https://github.com/avajs/ava/pull/1154",children:"test runners"}),". Nowadays Jest is much more about collecting different ideas and solutions to testing than it is about one specific implementation of a test framework."]}),"\n",(0,n.jsxs)(t.p,{children:["I'd like to deeply thank all the people that have ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/graphs/contributors?from=2016-01-01&to=2016-12-14&type=c",children:"contributed to Jest this year"}),", both from the open source community and at Facebook: Dmitrii Abramov, Cristian Carlesso, Dan Abramov, Daniel Lo Nigro, Maxim Derbin, Evan Scott, Forbes Lindesay, Keyan Zhang and 60 more people. We'd also like to welcome ",(0,n.jsx)(t.a,{href:"https://twitter.com/thymikee",children:"Micha\u0142 Pierzcha\u0142a (@thymikee)"})," as first official external contributor to Jest. He's been doing a great job managing the issues and PRs on the repo. If you'd like to start contributing to Jest, we have a bunch of ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+bug%22",children:"good first tasks"})," and we are always happy to help on our ",(0,n.jsx)(t.a,{href:"https://discord.gg/j6FKKQQrW9",children:"discord channel"}),"."]}),"\n",(0,n.jsxs)(t.h2,{id:"replit-with-jest-integration",children:[(0,n.jsx)(t.a,{href:"http://repl.it/",children:"repl.it"})," with Jest integration"]}),"\n",(0,n.jsxs)(t.p,{children:["Amjad Massad ",(0,n.jsx)(t.a,{href:"https://repl.it/languages/jest",children:"built a Jest container"})," so you can now try out Jest directly in the browser. You can use it from now on when creating GitHub issues which should help troubleshoot problems more quickly. Amjad and Haya are building ",(0,n.jsx)(t.a,{href:"http://repl.it/",children:"repl.it"})," to democratize programming by building powerful yet simple tools and platforms for educators, learners, and developers. They are also ",(0,n.jsx)(t.a,{href:"https://repl.it/site/jobs",children:"hiring talented engineers"}),"!"]}),"\n",(0,n.jsx)("div",{class:"jest-repl",children:(0,n.jsx)("iframe",{src:"https://repl.it/languages/jest?lite=true"})}),"\n",(0,n.jsx)(t.h2,{id:"community-update",children:"Community Update"}),"\n",(0,n.jsxs)(t.p,{children:["We feel incredibly humbled that 100+ companies ",(0,n.jsx)(t.a,{href:"https://twitter.com/cpojer/status/803965499407290369",children:"have adopted Jest"})," in the last six months. Companies like Twitter, Pinterest, Paypal, nytimes, IBM (Watson), Spotify, eBay, SoundCloud, Intuit, FormidableLabs, Automattic, Trivago and Microsoft have either fully or partially switched to Jest for their JavaScript testing needs. Thank you very much for giving this project a chance. We would also like to thank everyone who went to conferences and meetups to speak about Jest and to everyone who is writing blog posts about how Jest is or isn't working for them!"]}),"\n",(0,n.jsx)(t.p,{children:"Here is what happened in the community in the last two months:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Jason Bonta and Dmitrii Abramov ",(0,n.jsx)(t.a,{href:"https://twitter.com/abramov_dmitrii/status/805913874704674816",children:"redefined the \u201ctesting pyramid\u201d"})," we were talking a lot about at Facebook."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/skovhus/jest-codemods#jest-codemods",children:"jest-codemods"})," now allows you to painlessly migrate from Mocha, Tape and Ava to Jest."]}),"\n",(0,n.jsxs)(t.li,{children:["The React team announced ",(0,n.jsx)(t.a,{href:"https://facebook.github.io/react/blog/2016/11/16/react-v15.4.0.html",children:"improvements to the react-test-renderer"})," in 15.4.0."]}),"\n",(0,n.jsxs)(t.li,{children:["Orta Therox build an amazing ",(0,n.jsx)(t.a,{href:"https://github.com/orta/vscode-jest#the-aim",children:"vscode-jest integration"})," and donated the code for editor support to Jest."]}),"\n",(0,n.jsxs)(t.li,{children:["Pavithra Kodmad is documenting ",(0,n.jsx)(t.a,{href:"http://pksjce.github.io/2016/12/08/notes-on-jest",children:"Flipkarts adoption of Jest"})," and shares some getting started tips."]}),"\n",(0,n.jsxs)(t.li,{children:["Kent C. Dodds wrote about ",(0,n.jsx)(t.a,{href:"https://medium.com/@kentcdodds/migrating-to-jest-881f75366e7e#.ticf0wchu",children:"migrating to Jest at Paypal"})," and Jason Brown ",(0,n.jsx)(t.a,{href:"http://browniefed.com/blog/migrating-ava-to-jest/",children:"wrote about migrating to Jest as well"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Ben McCormick wrote about ",(0,n.jsx)(t.a,{href:"http://benmccormick.org/2016/12/10/saving-time-with-jest/",children:"saving time with Jest"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Eric Clemmons wrote about ",(0,n.jsx)(t.a,{href:"https://medium.com/@ericclemmons/jest-snapshots-for-storybook-5bf36b5e5a3a",children:"snapshots and storybook integration"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Edvin Erikson wrote about ",(0,n.jsx)(t.a,{href:"https://medium.com/@edvinerikson/getting-jest-output-in-tap-format-6e07dc2c484c#.1l4edixhl",children:"getting Tap output in Jest"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/guigrpa/jest-html#jest-html--",children:"jest-html"})," can bring snapshot diffing to your browser."]}),"\n",(0,n.jsxs)(t.li,{children:["There were a few ",(0,n.jsx)(t.a,{href:"https://news.ycombinator.com/item?id=13128146",children:"great conversations on hackernews"})," about Jest."]}),"\n",(0,n.jsxs)(t.li,{children:["The community started a great discussion about the ",(0,n.jsx)(t.a,{href:"https://github.com/airbnb/enzyme/issues/715",children:"future of enzyme"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Ruben Oostinga wrote about ",(0,n.jsx)(t.a,{href:"https://medium.com/@RubenOostinga/combining-chai-and-jest-matchers-d12d1ffd0303#.87si0ra2h",children:"combining chai and Jest matchers"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Emil Ong wrote about why ",(0,n.jsx)(t.a,{href:"https://engineering.haus.com/why-tdding-your-frontend-feels-pointless-5f710fea7325#.pql79knnm",children:"\u201cTDD'ing your frontend seems pointless\u201d"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Nate Hunzaker wrote about ",(0,n.jsx)(t.a,{href:"https://www.viget.com/articles/acceptance-testing-react-apps-with-jest-and-nightmare",children:"end-to-end testing with Jest and Nightmare"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://medium.com/aya-experience/testing-an-angularjs-app-with-jest-3029a613251#.h9badqevy",children:"Using Jest with Angular just works"})," according to Matthieu Lux."]}),"\n",(0,n.jsxs)(t.li,{children:["A fantastic conversation about the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues/2197",children:"purpose of snapshot testing"})," is happening right now."]}),"\n",(0,n.jsxs)(t.li,{children:["Dmitrii made a new ",(0,n.jsx)(t.a,{href:"https://twitter.com/abramov_dmitrii/status/806613542447157248",children:"music video with his metal band"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://yarnpkg.com/en/package/lazyspec",children:"lazyspec"})," can help you create smoke tests quickly if you are introducing tests to an existing codebase."]}),"\n",(0,n.jsxs)(t.li,{children:["Patrick Stapfer did a lightning talk about ",(0,n.jsx)(t.a,{href:"https://twitter.com/ryyppy/status/803871975995277312",children:"vim and Jest"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Mark Dalgleish was ",(0,n.jsx)(t.a,{href:"https://twitter.com/markdalgleish/status/806608159527747584",children:"commenting on the value of snapshot testing"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"new-features-changes-and-fixes-in-jest-17--18",children:"New features, changes and fixes in Jest 17 & 18"}),"\n",(0,n.jsxs)(t.p,{children:["Jest was initially created more than five years ago and as such an old framework it has accumulated some technical debt. This is why we tend to make breaking changes more often than may seem necessary: We believe it is important to incrementally reduce technical debt to ensure that Jest as a project stays maintainable long-term. We didn't announce Jest 17 in a blog post and if you haven't upgraded to it in the last month you may find the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md",children:"changelog"})," useful."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Breaking:"})," Removed ",(0,n.jsx)(t.code,{children:"pit"})," in favor of ",(0,n.jsx)(t.code,{children:"it"})," or ",(0,n.jsx)(t.code,{children:"test"})," and ",(0,n.jsx)(t.code,{children:"mockImpl"})," in favor of ",(0,n.jsx)(t.code,{children:"jest.fn()"})," or ",(0,n.jsx)(t.code,{children:"mockImplementation"})," ."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Breaking:"})," Renamed ",(0,n.jsx)(t.code,{children:"--jsonOutputFile"})," to ",(0,n.jsx)(t.code,{children:"--outputFile"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Breaking:"})," Updated ",(0,n.jsx)(t.code,{children:"testRegex"})," to include ",(0,n.jsx)(t.code,{children:"test.js"})," and ",(0,n.jsx)(t.code,{children:"spec.js"})," files."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Breaking:"})," Replaced ",(0,n.jsx)(t.code,{children:"scriptPreprocessor"})," with the new ",(0,n.jsx)(t.code,{children:"transform"})," option."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Breaking:"})," The ",(0,n.jsx)(t.code,{children:"testResultsProcessor"})," function is now required to return the modified results."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Potentially Breaking:"})," Properly resolve ",(0,n.jsx)(t.code,{children:"snapshotSerializers"}),", ",(0,n.jsx)(t.code,{children:"setupFiles"}),", ",(0,n.jsx)(t.code,{children:"transform"}),", ",(0,n.jsx)(t.code,{children:"testRunner"})," and ",(0,n.jsx)(t.code,{children:"testResultsProcessor"})," with a resolution algorithm instead of using ",(0,n.jsx)(t.code,{children:"path.resolve"}),". This mainly means that ",(0,n.jsx)(t.code,{children:"<rootDir>"})," is no longer needed for these options."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"pretty-format"})," and ",(0,n.jsx)(t.code,{children:"jest-editor-support"})," were merged into Jest."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"expect.any"}),", ",(0,n.jsx)(t.code,{children:"expect.anything"}),", ",(0,n.jsx)(t.code,{children:"expect.objectContaining"}),", ",(0,n.jsx)(t.code,{children:"expect.arrayContaining"}),", ",(0,n.jsx)(t.code,{children:"expect.stringMatching"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"--testResultsProcessor"})," is now exposed through the cli."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," Implemented file watching in ",(0,n.jsx)(t.code,{children:"jest-haste-map"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," Usage of Jest in watch mode can be hidden through ",(0,n.jsx)(t.code,{children:"JEST_HIDE_USAGE"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"expect.assertions(number)"})," which will ensure that a specified amount of assertions is made in one test."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:".toMatchSnapshot(?string)"})," feature to give snapshots a name."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"toMatchObject"}),", ",(0,n.jsx)(t.code,{children:"toHaveProperty"})," , ",(0,n.jsx)(t.code,{children:"toHaveLength"})," matchers."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"expect.extend"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," Added support for custom snapshots serializers."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," Big diffs are now collapsed by default in snapshots and assertions. Added ",(0,n.jsx)(t.code,{children:"--expand"})," (or ",(0,n.jsx)(t.code,{children:"-e"}),") to show the full diff."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"jest.resetAllMocks"})," which replaces ",(0,n.jsx)(t.code,{children:"jest.clearAllMocks"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Added:"})," ",(0,n.jsx)(t.code,{children:"--json"})," now includes information about individual tests inside a file."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," ",(0,n.jsx)(t.code,{children:"test.concurrent"})," unhandled promise rejections."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," ",(0,n.jsx)(t.code,{children:"babel-plugin-jest-hoist"})," when using ",(0,n.jsx)(t.code,{children:"jest.mock"})," with three arguments."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," The ",(0,n.jsx)(t.code,{children:"JSON"})," global in ",(0,n.jsx)(t.code,{children:"jest-environment-node"})," now comes from the vm context instead of the parent context."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Jest does not print stack traces from babel any longer."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Fake timers are reset when ",(0,n.jsx)(t.code,{children:"FakeTimers.useTimers()"})," is called."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Regular expressions are properly escaped in snapshots."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Improved pretty printing of large objects."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," ",(0,n.jsx)(t.code,{children:"NaN% Failed"})," in the OS notification when using ",(0,n.jsx)(t.code,{children:"--notify"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," The first test run without cached timings will now use separate processes instead of running in band."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," ",(0,n.jsx)(t.code,{children:"Map"}),"/",(0,n.jsx)(t.code,{children:"Set"})," comparisons."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," ",(0,n.jsx)(t.code,{children:"test.concurrent"})," now works with ",(0,n.jsx)(t.code,{children:"--testNamePattern"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Improved ",(0,n.jsx)(t.code,{children:".toContain"})," matcher."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Properly resolve modules with platform extensions on react-native."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," global built in objects in ",(0,n.jsx)(t.code,{children:"jest-environment-node"})," now work properly."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Create mock objects in the vm context instead of the parent context."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," ",(0,n.jsx)(t.code,{children:".babelrc"})," is now part of the transform cache key in ",(0,n.jsx)(t.code,{children:"babel-jest"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," docblock parsing with haste modules."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Exit with the proper code when the coverage threshold is not reached."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fixed:"})," Jest now clears the entire scrollback in watch mode."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Deprecated:"})," ",(0,n.jsx)(t.code,{children:"jest-react-native"})," was deprecated and now forwards ",(0,n.jsx)(t.code,{children:"react-native"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"plans-for-jest-in-h1-2017",children:"Plans for Jest in H1 2017"}),"\n",(0,n.jsxs)(t.p,{children:["Six months ago ",(0,n.jsx)(t.a,{href:"/blog/2016/07/27/jest-14#what-s-next-for-jest",children:"we shared our plans for Jest"})," and we are happy that we were able to execute well on almost all of them. For the next six months, here is what we are planning:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Instant feedback:"})," ",(0,n.jsx)(t.a,{href:"https://nuclide.io/",children:"Nuclide"})," integration and an improved and ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/pull/2324#issuecomment-267149669",children:"faster watch mode"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Improved developer experience:"})," new mocking APIs and improved assertions."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Better performance and memory usage:"})," analyze Jest and be more conscious about efficiency."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Snapshot Improvements:"})," snapshot approval mode, syntax highlighting and improved ",(0,n.jsx)(t.code,{children:"react-test-renderer"})," APIs."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," We'll overhaul the website and documentation and add a Jest cheat sheet."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We won't be providing timelines or estimates for these features and we may not actually get to all of these things. If you'd like to help make these things a reality, send us issues and pull requests with your ideas and let's work on improving Jest together in 2017."})]})}const l=function(e={}){const{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},1670:(e,t,s)=>{s.d(t,{Zo:()=>a,ah:()=>r});var n=s(7378);const i=n.createContext({});function r(e){const t=n.useContext(i);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function a({components:e,children:t,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||o:r(e),n.createElement(i.Provider,{value:a},t)}}}]);
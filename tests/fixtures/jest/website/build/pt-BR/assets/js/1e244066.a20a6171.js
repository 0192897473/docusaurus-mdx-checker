"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7157],{7718:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=s(4246),a=s(1670);const o={title:"Jest 14.0: React Tree Snapshot Testing",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},r=void 0,i={permalink:"/pt-BR/blog/2016/07/27/jest-14",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2016-07-27-jest-14.md",source:"@site/i18n/pt-BR/docusaurus-plugin-content-blog/2016-07-27-jest-14.md",title:"Jest 14.0: React Tree Snapshot Testing",description:"One of Jest's philosophies is to provide an integrated \u201czero-configuration\u201d experience. We want to make it as frictionless as possible to write good tests that are useful. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in stable and healthy code bases.",date:"2016-07-27T00:00:00.000Z",formattedDate:"27 de julho de 2016",tags:[],readingTime:5.35,hasTruncateMarker:!0,authors:[{name:"Christoph Nakazawa",url:"http://twitter.com/cpojer"}],frontMatter:{title:"Jest 14.0: React Tree Snapshot Testing",author:"Christoph Nakazawa",authorURL:"http://twitter.com/cpojer",authorFBID:0x5af311d9a1c8},unlisted:!1,prevItem:{title:"Jest 15.0: New Defaults for Jest",permalink:"/pt-BR/blog/2016/09/01/jest-15"},nextItem:{title:"Jest 13.0: Flow & REPL",permalink:"/pt-BR/blog/2016/06/22/jest-13"}},h={authorsImageUrls:[void 0]},c=[{value:"Experimental React Native support",id:"experimental-react-native-support",level:2},{value:"Why snapshot testing?",id:"why-snapshot-testing",level:2},{value:"What&#39;s next for Jest",id:"whats-next-for-jest",level:2}];function l(e){const t=Object.assign({p:"p",a:"a",pre:"pre",code:"code",img:"img",h2:"h2",ul:"ul",li:"li",em:"em",admonition:"admonition",strong:"strong",blockquote:"blockquote"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"One of Jest's philosophies is to provide an integrated \u201czero-configuration\u201d experience. We want to make it as frictionless as possible to write good tests that are useful. We observed that when engineers are provided with ready-to-use tools, they end up writing more tests, which in turn results in stable and healthy code bases."}),"\n",(0,n.jsxs)(t.p,{children:["One of the big open questions was how to write React tests efficiently. There are plenty of tools such as ",(0,n.jsx)(t.a,{href:"https://facebook.github.io/react/docs/test-utils.html",children:"ReactTestUtils"})," and ",(0,n.jsx)(t.a,{href:"https://enzymejs.github.io/enzyme/",children:"enzyme"}),". Both of these tools are great and are actively being used. However engineers frequently told us that they spend more time writing a test than the component itself. As a result many people stopped writing tests altogether which eventually led to instabilities. Engineers told us all they wanted was to make sure their components don't change unexpectedly."]}),"\n",(0,n.jsxs)(t.p,{children:["Together with the React team we created a new test renderer for React and added snapshot testing to Jest. Consider this ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/link.test.js",children:"example test"})," for a simple ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Link.js",children:"Link component"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"import renderer from 'react-test-renderer';\ntest('Link renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,n.jsxs)(t.p,{children:["The first time this test is run, Jest creates a ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/__snapshots__/link.test.js.snap",children:"snapshot file"})," that looks like this:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'exports[`Link renders correctly 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function bound _onMouseEnter]}\n  onMouseLeave={[Function bound _onMouseLeave]}>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,n.jsxs)(t.p,{children:["The snapshot artifact should be committed alongside code changes. We use ",(0,n.jsx)(t.a,{href:"https://github.com/thejameskyle/pretty-format",children:"pretty-format"})," to make snapshots human-readable during code review. Em execu\xe7\xf5es de teste subsequentes Jest simplesmente ir\xe1 comparar a sa\xedda renderizada com o snapshot anterior. Se coincidirem, o teste passar\xe1. If they don't match, either the implementation has changed and the snapshot needs to be updated with ",(0,n.jsx)(t.code,{children:"jest -u"}),", or the test runner found a bug in your code that should be fixed."]}),"\n",(0,n.jsx)(t.p,{children:"If we change the address the Link component in our example is pointing to, Jest will print this output:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"snapshot-testing",src:s(1780).Z+"",width:"1450",height:"546"})}),"\n",(0,n.jsxs)(t.p,{children:["Now you know that you either need to accept the changes with ",(0,n.jsx)(t.code,{children:"jest -u"}),", or fix the component if the changes were unintentional. To try out this functionality, please clone the ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"snapshot example"}),", modify the Link component and run Jest. We updated the ",(0,n.jsx)(t.a,{href:"/docs/tutorial-react",children:"React Tutorial"})," with a new guide for snapshot testing."]}),"\n",(0,n.jsxs)(t.p,{children:["This feature was built by ",(0,n.jsx)(t.a,{href:"https://twitter.com/soprano",children:"Ben Alpert"})," and ",(0,n.jsx)(t.a,{href:"https://twitter.com/kentaromiura",children:"Cristian Carlesso"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"experimental-react-native-support",children:"Experimental React Native support"}),"\n",(0,n.jsxs)(t.p,{children:["By building a test renderer that targets no specific platform we are finally able to support a full, unmocked version of React Native. We are excited to launch experimental React Native support for Jest through the ",(0,n.jsx)(t.code,{children:"jest-react-native"})," package."]}),"\n",(0,n.jsxs)(t.p,{children:["You can start using Jest with react-native by running ",(0,n.jsx)(t.code,{children:"yarn add --dev jest-react-native"})," and by adding the preset to your Jest configuration:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-json",children:'"jest": {\n  "preset": "jest-react-native"\n}\n'})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/tutorial-react-native#content",children:"Tutorial and setup guide"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-native",children:"Example project"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsxs)(t.a,{href:"https://github.com/bartonhammond/snowflake/pull/110",children:["Example pull request for ",(0,n.jsx)(t.em,{children:"snowflake"})]}),", a popular react-native open source library."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["The preset currently only implements the minimal set of configuration necessary to get started with React Native testing. We are hoping for community contributions to improve this project. Please try it and file ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/issues",children:"issues"})," or send pull requests!"]})}),"\n",(0,n.jsx)(t.h2,{id:"why-snapshot-testing",children:"Why snapshot testing?"}),"\n",(0,n.jsx)(t.p,{children:"For Facebook's native apps we use a system called \u201csnapshot testing\u201d: a snapshot test system that renders UI components, takes a screenshot and subsequently compares a recorded screenshot with changes made by an engineer. If the screenshots don't match, there are two possibilities: either the change is unexpected or the screenshot can be updated to the new version of the UI component."}),"\n",(0,n.jsx)(t.p,{children:"While this was the solution we wanted for the web, we also found many problems with such end-to-end tests that snapshot integration tests solve:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"No flakiness:"})," Because tests are run in a command line runner instead of a real browser or on a real phone, the test runner doesn't have to wait for builds, spawn browsers, load a page and drive the UI to get a component into the expected state which tends to be flaky and the test results become noisy."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Fast iteration speed:"})," Engineers want to get results in less than a second rather than waiting for minutes or even hours. If tests don't run quickly like in most end-to-end frameworks, engineers don't run them at all or don't bother writing them in the first place."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Debugging:"})," It's easy to step into the code of an integration test in JS instead of trying to recreate the screenshot test scenario and debugging what happened in the visual diff."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Because we believe snapshot testing can be useful beyond Jest we split the feature into a ",(0,n.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/packages/jest-snapshot",children:"jest-snapshot"})," package. We are happy to work with the community to make it more generic so it can be integrated with other test runners and share concepts and infrastructure with each other."]}),"\n",(0,n.jsx)(t.p,{children:"Finally, here is a quote of a Facebook engineer describing how snapshot testing changed his unit testing experience:"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u201cOne of the most challenging aspects of my project was keeping the input and output files for each test case in sync. Each little change in functionality could cause all the output files to change. With snapshot testing I do not need the output files, the snapshots are generated for free by Jest! I can simply inspect how Jest updates the snapshots rather than making the changes manually.\u201d \u2013 ",(0,n.jsx)(t.a,{href:"https://github.com/kyldvs",children:"Kyle Davis"})," working on ",(0,n.jsx)(t.a,{href:"https://github.com/kyldvs/fjs",children:"fjs"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"whats-next-for-jest",children:"What's next for Jest"}),"\n",(0,n.jsxs)(t.p,{children:["Recently ",(0,n.jsx)(t.a,{href:"https://twitter.com/aarondjents",children:"Aaron Abramov"})," has joined the Jest team full time to improve our unit and integration test infrastructure for Facebook's ads products. For the next few months the Jest team is planning major improvements in these areas:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Replace Jasmine:"})," Jasmine is slowing us down and is not being very actively developed. We started replacing all the Jasmine matchers and are excited to add new features and drop this dependency."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Code Coverage:"})," When Jest was originally created, tools such as babel didn't exist. Our code coverage support has a bunch of edge cases and isn't always working properly. We are rewriting it to address all the current problems with coverage."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Developer Experience:"})," This ranges from improving the setup process, the debugging experience to CLI improvements and more documentation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Mocking:"})," The mocking system, especially around manual mocks, is not working well and is confusing. We hope to make it more strict and easier to understand."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Performance:"})," Further performance improvements especially for really large codebases are being worked on."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"As always, if you have questions or if you are excited to help out, please reach out to us!"})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},1780:(e,t,s)=>{s.d(t,{Z:()=>n});const n=s.p+"assets/images/snapshot-8de6b9bafc9754f21e3c61604fc0623c.png"},1670:(e,t,s)=>{s.d(t,{Zo:()=>i,ah:()=>o});var n=s(7378);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:o(e),n.createElement(a.Provider,{value:i},t)}}}]);
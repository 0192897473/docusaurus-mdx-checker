"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2749],{2599:(e,n,s)=>{s.d(n,{Z:()=>a});s(7378);var t=s(7140);const r={tabItem:"tabItem_wHwb"};var o=s(4246);function a(e){let{children:n,hidden:s,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:s,children:n})}},8447:(e,n,s)=>{s.d(n,{Z:()=>w});var t=s(7378),r=s(7140),o=s(9169),a=s(3620),i=s(9749),l=s(8981),c=s(56),u=s(8796);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function g(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l._X)(o),(0,t.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,o=h(e),[a,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:s,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,u.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:r}),j=(()=>{const e=c??m;return g({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=s(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=s(4246);function f(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,s=l.indexOf(n),r=i[s].value;r!==t&&(c(n),a(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,r.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},9452:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=s(4246),r=s(1670),o=s(8447),a=s(2599);const i={id:"troubleshooting",title:"Troubleshooting"},l=void 0,c={unversionedId:"troubleshooting",id:"version-29.6/troubleshooting",title:"Troubleshooting",description:"Uh oh, something went wrong? Use this guide to resolve issues with Jest.",source:"@site/versioned_docs/version-29.6/Troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/jestjs/jest/edit/main/website/versioned_docs/version-29.6/Troubleshooting.md",tags:[],version:"29.6",lastUpdatedBy:"Frazer Smith",lastUpdatedAt:1692104444,formattedLastUpdatedAt:"Aug 15, 2023",frontMatter:{id:"troubleshooting",title:"Troubleshooting"},sidebar:"docs",previous:{title:"Migrating to Jest",permalink:"/docs/migration-guide"},next:{title:"Architecture",permalink:"/docs/architecture"}},u={},d=[{value:"Tests are Failing and You Don&#39;t Know Why",id:"tests-are-failing-and-you-dont-know-why",level:2},{value:"Debugging in VS Code",id:"debugging-in-vs-code",level:2},{value:"Debugging in WebStorm",id:"debugging-in-webstorm",level:2},{value:"Caching Issues",id:"caching-issues",level:2},{value:"Unresolved Promises",id:"unresolved-promises",level:2},{value:"Watchman Issues",id:"watchman-issues",level:2},{value:"Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server.",id:"tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server",level:2},{value:"<code>coveragePathIgnorePatterns</code> seems to not have any effect.",id:"coveragepathignorepatterns-seems-to-not-have-any-effect",level:2},{value:"Defining Tests",id:"defining-tests",level:2},{value:"Still unresolved?",id:"still-unresolved",level:2}];function h(e){const n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",pre:"pre",admonition:"admonition",em:"em"},(0,r.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Uh oh, something went wrong? Use this guide to resolve issues with Jest."}),"\n",(0,t.jsx)(n.h2,{id:"tests-are-failing-and-you-dont-know-why",children:"Tests are Failing and You Don't Know Why"}),"\n",(0,t.jsxs)(n.p,{children:["Try using the ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"debugging support"})," built into Node. Place a ",(0,t.jsx)(n.code,{children:"debugger;"})," statement in any of your tests, and then, in your project's directory, run:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will run Jest in a Node process that an external debugger can connect to. Note that the process will pause until the debugger has connected to it."}),"\n",(0,t.jsxs)(n.p,{children:["To debug in Google Chrome (or any Chromium-based browser), open your browser and go to ",(0,t.jsx)(n.code,{children:"chrome://inspect"}),' and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to. Click on the address displayed in the terminal (usually something like ',(0,t.jsx)(n.code,{children:"localhost:9229"}),") after running the above command, and you will be able to debug Jest using Chrome's DevTools."]}),"\n",(0,t.jsxs)(n.p,{children:['The Chrome Developer Tools will be displayed, and a breakpoint will be set at the first line of the Jest CLI script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Click the button that looks like a "play" button in the upper right hand side of the screen to continue execution. When Jest executes the test that contains the ',(0,t.jsx)(n.code,{children:"debugger"})," statement, execution will pause and you can examine the current scope and call stack."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--runInBand"})," cli option makes sure Jest runs the test in the same process rather than spawning processes for individual tests. Normally Jest parallelizes test runs across processes but it is hard to debug many processes at the same time."]})}),"\n",(0,t.jsx)(n.h2,{id:"debugging-in-vs-code",children:"Debugging in VS Code"}),"\n",(0,t.jsxs)(n.p,{children:["There are multiple ways to debug Jest tests with ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code's"})," built-in ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",children:"debugger"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"To attach the built-in debugger, run your tests as aforementioned:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Then attach VS Code's debugger using the following ",(0,t.jsx)(n.code,{children:"launch.json"})," config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "attach",\n      "name": "Attach",\n      "port": 9229\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"To automatically launch and attach to a process running your tests, use the following configuration:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/.bin/jest",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"or the following for Windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/jest/bin/jest.js",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are using Facebook's ",(0,t.jsx)(n.a,{href:"https://github.com/facebookincubator/create-react-app",children:(0,t.jsx)(n.code,{children:"create-react-app"})}),", you can debug your Jest tests with the following configuration:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": [\n        "test",\n        "--runInBand",\n        "--no-cache",\n        "--env=jsdom",\n        "--watchAll=false"\n      ],\n      "cwd": "${workspaceRoot}",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["More information on Node debugging can be found ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"debugging-in-webstorm",children:"Debugging in WebStorm"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/webstorm/",children:"WebStorm"})," has built-in support for Jest. Read ",(0,t.jsx)(n.a,{href:"https://blog.jetbrains.com/webstorm/2018/10/testing-with-jest-in-webstorm/",children:"Testing With Jest in WebStorm"})," to learn more."]}),"\n",(0,t.jsx)(n.h2,{id:"caching-issues",children:"Caching Issues"}),"\n",(0,t.jsx)(n.p,{children:"The transform script was changed or Babel was updated and the changes aren't being recognized by Jest?"}),"\n",(0,t.jsxs)(n.p,{children:["Retry with ",(0,t.jsx)(n.a,{href:"/docs/cli#--cache",children:(0,t.jsx)(n.code,{children:"--no-cache"})}),". Jest caches transformed module files to speed up test execution. If you are using your own custom transformer, consider adding a ",(0,t.jsx)(n.code,{children:"getCacheKey"})," function to it: ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/relay/blob/58cf36c73769690f0bbf90562707eadb062b029d/scripts/jest/preprocessor.js#L56-L61",children:"getCacheKey in Relay"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"unresolved-promises",children:"Unresolved Promises"}),"\n",(0,t.jsx)(n.p,{children:"If a promise doesn't resolve at all, this error might be thrown:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"- Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Most commonly this is being caused by conflicting Promise implementations. Consider replacing the global promise implementation with your own, for example ",(0,t.jsx)(n.code,{children:"globalThis.Promise = jest.requireActual('promise');"})," and/or consolidate the used Promise libraries to a single one."]}),"\n",(0,t.jsxs)(n.p,{children:["If your test is long running, you may want to consider to increase the timeout by calling ",(0,t.jsx)(n.code,{children:"jest.setTimeout"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.setTimeout(10000); // 10 second timeout\n"})}),"\n",(0,t.jsx)(n.h2,{id:"watchman-issues",children:"Watchman Issues"}),"\n",(0,t.jsxs)(n.p,{children:["Try running Jest with ",(0,t.jsx)(n.a,{href:"/docs/cli#--watchman",children:(0,t.jsx)(n.code,{children:"--no-watchman"})})," or set the ",(0,t.jsx)(n.code,{children:"watchman"})," configuration option to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Also see ",(0,t.jsx)(n.a,{href:"https://facebook.github.io/watchman/docs/troubleshooting",children:"watchman troubleshooting"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"tests-are-extremely-slow-on-docker-andor-continuous-integration-ci-server",children:"Tests are Extremely Slow on Docker and/or Continuous Integration (CI) server."}),"\n",(0,t.jsxs)(n.p,{children:["While Jest is most of the time extremely fast on modern multi-core computers with fast SSDs, it may be slow on certain setups as our users ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1395",children:"have"})," ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-260246008",children:"discovered"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Based on the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-262366820",children:"findings"}),", one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially."]}),"\n",(0,t.jsxs)(n.p,{children:["In order to do this you can run tests in the same thread using ",(0,t.jsx)(n.a,{href:"/docs/cli#--runinband",children:(0,t.jsx)(n.code,{children:"--runInBand"})}),":"]}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --runInBand\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --runInBand\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test -- --runInBand\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Another alternative to expediting test execution time on Continuous Integration Servers such as Travis-CI is to set the max worker pool to ~",(0,t.jsx)(n.em,{children:"4"}),". Specifically on Travis-CI, this can reduce test execution time in half. Note: The Travis CI ",(0,t.jsx)(n.em,{children:"free"})," plan available for open source projects only includes 2 CPU cores."]}),"\n",(0,t.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --maxWorkers=4\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --maxWorkers=4\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test -- --maxWorkers=4\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If you use GitHub Actions, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/SimenB/github-actions-cpu-cores",children:(0,t.jsx)(n.code,{children:"github-actions-cpu-cores"})})," to detect number of CPUs, and pass that to Jest."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- name: Get number of CPU cores\n  id: cpu-cores\n  uses: SimenB/github-actions-cpu-cores@v1\n- name: run tests\n  run: yarn jest --max-workers ${{ steps.cpu-cores.outputs.count }}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Another thing you can do is use the ",(0,t.jsx)(n.a,{href:"/docs/cli#--shard",children:(0,t.jsx)(n.code,{children:"shard"})})," flag to parallelize the test run across multiple machines."]}),"\n",(0,t.jsxs)(n.h2,{id:"coveragepathignorepatterns-seems-to-not-have-any-effect",children:[(0,t.jsx)(n.code,{children:"coveragePathIgnorePatterns"})," seems to not have any effect."]}),"\n",(0,t.jsxs)(n.p,{children:["Make sure you are not using the ",(0,t.jsx)(n.code,{children:"babel-plugin-istanbul"})," plugin. Jest wraps Istanbul, and therefore also tells Istanbul what files to instrument with coverage collection. When using ",(0,t.jsx)(n.code,{children:"babel-plugin-istanbul"}),", every file that is processed by Babel will have coverage collection code, hence it is not being ignored by ",(0,t.jsx)(n.code,{children:"coveragePathIgnorePatterns"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"defining-tests",children:"Defining Tests"}),"\n",(0,t.jsx)(n.p,{children:"Tests must be defined synchronously for Jest to be able to collect your tests."}),"\n",(0,t.jsx)(n.p,{children:"As an example to show why this is the case, imagine we wrote a test like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Don't do this it will not work\nsetTimeout(() => {\n  it('passes', () => expect(1).toBe(1));\n}, 0);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When Jest runs your test to collect the ",(0,t.jsx)(n.code,{children:"test"}),"s it will not find any because we have set the definition to happen asynchronously on the next tick of the event loop. This means when you are using ",(0,t.jsx)(n.code,{children:"test.each"})," you cannot set the table asynchronously within a ",(0,t.jsx)(n.code,{children:"beforeEach"})," / ",(0,t.jsx)(n.code,{children:"beforeAll"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"still-unresolved",children:"Still unresolved?"}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"/help",children:"Help"}),"."]})]})}const g=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>o});var t=s(7378);const r=t.createContext({});function o(e){const n=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:o(e),t.createElement(r.Provider,{value:i},n)}}}]);
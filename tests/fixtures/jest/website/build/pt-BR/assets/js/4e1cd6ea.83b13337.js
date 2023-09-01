"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[58],{4563:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(4246),o=t(1670);const i={id:"watch-plugins",title:"Watch Plugins"},r=void 0,l={unversionedId:"watch-plugins",id:"version-29.6/watch-plugins",title:"Watch Plugins",description:"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/WatchPlugins.md",sourceDirName:".",slug:"/watch-plugins",permalink:"/pt-BR/docs/watch-plugins",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"watch-plugins",title:"Watch Plugins"},sidebar:"docs",previous:{title:"Manipula\xe7\xe3o DOM",permalink:"/pt-BR/docs/tutorial-jquery"},next:{title:"Migrando para o Jest",permalink:"/pt-BR/docs/migration-guide"}},a={},c=[{value:"Watch Plugin Interface",id:"watch-plugin-interface",level:2},{value:"Hooking into Jest",id:"hooking-into-jest",level:2},{value:"<code>apply(jestHooks)</code>",id:"applyjesthooks",level:3},{value:"<code>jestHooks.shouldRunTestSuite(testSuiteInfo)</code>",id:"jesthooksshouldruntestsuitetestsuiteinfo",level:4},{value:"<code>jestHooks.onTestRunComplete(results)</code>",id:"jesthooksontestruncompleteresults",level:4},{value:"<code>jestHooks.onFileChange({projects})</code>",id:"jesthooksonfilechangeprojects",level:4},{value:"Watch Menu Integration",id:"watch-menu-integration",level:2},{value:"<code>getUsageInfo(globalConfig)</code>",id:"getusageinfoglobalconfig",level:3},{value:"<code>run(globalConfig, updateConfigAndRun)</code>",id:"runglobalconfig-updateconfigandrun",level:3},{value:"Authorized configuration keys",id:"authorized-configuration-keys",level:4},{value:"Customization",id:"customization",level:2},{value:"Choosing a good key",id:"choosing-a-good-key",level:2},{value:"When a conflict happens",id:"when-a-conflict-happens",level:3}];function d(e){const n=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",em:"em",admonition:"admonition",a:"a",strong:"strong"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow."}),"\n",(0,s.jsx)(n.h2,{id:"watch-plugin-interface",children:"Watch Plugin Interface"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  // Add hooks to Jest lifecycle events\n  apply(jestHooks) {}\n\n  // Get the prompt information for interactive plugins\n  getUsageInfo(globalConfig) {}\n\n  // Executed when the key from `getUsageInfo` is input\n  run(globalConfig, updateConfigAndRun) {}\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"hooking-into-jest",children:"Hooking into Jest"}),"\n",(0,s.jsxs)(n.p,{children:["To connect your watch plugin to Jest, add its path under ",(0,s.jsx)(n.code,{children:"watchPlugins"})," in your Jest configuration:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  // ...\n  watchPlugins: ['path/to/yourWatchPlugin'],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Custom watch plugins can add hooks to Jest events. These hooks can be added either with or without having an interactive key in the watch mode menu."}),"\n",(0,s.jsx)(n.h3,{id:"applyjesthooks",children:(0,s.jsx)(n.code,{children:"apply(jestHooks)"})}),"\n",(0,s.jsxs)(n.p,{children:["Jest hooks can be attached by implementing the ",(0,s.jsx)(n.code,{children:"apply"})," method. This method receives a ",(0,s.jsx)(n.code,{children:"jestHooks"})," argument that allows the plugin to hook into specific parts of the lifecycle of a test run."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {}\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Below are the hooks available in Jest."}),"\n",(0,s.jsx)(n.h4,{id:"jesthooksshouldruntestsuitetestsuiteinfo",children:(0,s.jsx)(n.code,{children:"jestHooks.shouldRunTestSuite(testSuiteInfo)"})}),"\n",(0,s.jsxs)(n.p,{children:["Returns a boolean (or ",(0,s.jsx)(n.code,{children:"Promise<boolean>"})," for handling asynchronous operations) to specify if a test should be run or not."]}),"\n",(0,s.jsx)(n.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.shouldRunTestSuite(testSuiteInfo => {\n      return testSuiteInfo.testPath.includes('my-keyword');\n    });\n\n    // or a promise\n    jestHooks.shouldRunTestSuite(testSuiteInfo => {\n      return Promise.resolve(testSuiteInfo.testPath.includes('my-keyword'));\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"jesthooksontestruncompleteresults",children:(0,s.jsx)(n.code,{children:"jestHooks.onTestRunComplete(results)"})}),"\n",(0,s.jsx)(n.p,{children:"Gets called at the end of every test run. It has the test results as an argument."}),"\n",(0,s.jsx)(n.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.onTestRunComplete(results => {\n      this._hasSnapshotFailure = results.snapshot.failure;\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"jesthooksonfilechangeprojects",children:(0,s.jsx)(n.code,{children:"jestHooks.onFileChange({projects})"})}),"\n",(0,s.jsx)(n.p,{children:"Gets called whenever there is a change in the file system"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"projects: Array<config: ProjectConfig, testPaths: Array<string>"}),": Includes all the test paths that Jest is watching."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Por exemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.onFileChange(({projects}) => {\n      this._projects = projects;\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"watch-menu-integration",children:"Watch Menu Integration"}),"\n",(0,s.jsxs)(n.p,{children:["Custom watch plugins can also add or override functionality to the watch menu by specifying a key/prompt pair in ",(0,s.jsx)(n.code,{children:"getUsageInfo"})," method and a ",(0,s.jsx)(n.code,{children:"run"})," method for the execution of the key."]}),"\n",(0,s.jsx)(n.h3,{id:"getusageinfoglobalconfig",children:(0,s.jsx)(n.code,{children:"getUsageInfo(globalConfig)"})}),"\n",(0,s.jsxs)(n.p,{children:["To add a key to the watch menu, implement the ",(0,s.jsx)(n.code,{children:"getUsageInfo"})," method, returning a key and the prompt:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  getUsageInfo(globalConfig) {\n    return {\n      key: 's',\n      prompt: 'do something',\n    };\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This will add a line in the watch mode menu ",(0,s.jsxs)(n.em,{children:["(",(0,s.jsx)(n.code,{children:"\u203a Press s to do something."}),")"]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Watch Usage\n \u203a Press p to filter by a filename regex pattern.\n \u203a Press t to filter by a test name regex pattern.\n \u203a Press q to quit watch mode.\n \u203a Press s to do something. // <-- This is our plugin\n \u203a Press Enter to trigger a test run.\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If the key for your plugin already exists as a default key, your plugin will override that key."})}),"\n",(0,s.jsx)(n.h3,{id:"runglobalconfig-updateconfigandrun",children:(0,s.jsx)(n.code,{children:"run(globalConfig, updateConfigAndRun)"})}),"\n",(0,s.jsxs)(n.p,{children:["To handle key press events from the key returned by ",(0,s.jsx)(n.code,{children:"getUsageInfo"}),", you can implement the ",(0,s.jsx)(n.code,{children:"run"})," method. This method returns a ",(0,s.jsx)(n.code,{children:"Promise<boolean>"})," that can be resolved when the plugin wants to return control to Jest. The ",(0,s.jsx)(n.code,{children:"boolean"})," specifies if Jest should rerun the tests after it gets the control back."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/v29.2.1/packages/jest-types/src/Config.ts#L358-L422",children:(0,s.jsx)(n.code,{children:"globalConfig"})}),": A representation of Jest's current global configuration"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"updateConfigAndRun"}),": Allows you to trigger a test run while the interactive plugin is running."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  run(globalConfig, updateConfigAndRun) {\n    // do something.\n  }\n}\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you do call ",(0,s.jsx)(n.code,{children:"updateConfigAndRun"}),", your ",(0,s.jsx)(n.code,{children:"run"})," method should not resolve to a truthy value, as that would trigger a double-run."]})}),"\n",(0,s.jsx)(n.h4,{id:"authorized-configuration-keys",children:"Authorized configuration keys"}),"\n",(0,s.jsxs)(n.p,{children:["For stability and safety reasons, only part of the global configuration keys can be updated with ",(0,s.jsx)(n.code,{children:"updateConfigAndRun"}),". The current white list is as follows:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#bail-number--boolean",children:(0,s.jsx)(n.code,{children:"bail"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"cli#--changedsince",children:(0,s.jsx)(n.code,{children:"changedSince"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#collectcoverage-boolean",children:(0,s.jsx)(n.code,{children:"collectCoverage"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#collectcoveragefrom-array",children:(0,s.jsx)(n.code,{children:"collectCoverageFrom"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#coveragedirectory-string",children:(0,s.jsx)(n.code,{children:"coverageDirectory"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#coveragereporters-arraystring",children:(0,s.jsx)(n.code,{children:"coverageReporters"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#notify-boolean",children:(0,s.jsx)(n.code,{children:"notify"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#notifymode-string",children:(0,s.jsx)(n.code,{children:"notifyMode"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#onlyfailures-boolean",children:(0,s.jsx)(n.code,{children:"onlyFailures"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#reporters-arraymodulename--modulename-options",children:(0,s.jsx)(n.code,{children:"reporters"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"cli#--testnamepatternregex",children:(0,s.jsx)(n.code,{children:"testNamePattern"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"cli#--testpathpatternregex",children:(0,s.jsx)(n.code,{children:"testPathPattern"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"cli#--updatesnapshot",children:(0,s.jsx)(n.code,{children:"updateSnapshot"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"configuration#verbose-boolean",children:(0,s.jsx)(n.code,{children:"verbose"})})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,s.jsx)(n.p,{children:"Plugins can be customized via your Jest configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  // ...\n  watchPlugins: [\n    [\n      'path/to/yourWatchPlugin',\n      {\n        key: 'k', // <- your custom key\n        prompt: 'show a custom prompt',\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Recommended config names:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"key"}),": Modifies the plugin key."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"prompt"}),": Allows user to customize the text in the plugin prompt."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If the user provided a custom configuration, it will be passed as an argument to the plugin constructor."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  constructor({config}) {}\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"choosing-a-good-key",children:"Choosing a good key"}),"\n",(0,s.jsxs)(n.p,{children:["Jest allows third-party plugins to override some of its built-in feature keys, but not all. Specifically, the following keys are ",(0,s.jsx)(n.strong,{children:"not overwritable"}),"\xa0:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"c"})," (clears filter patterns)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"i"})," (updates non-matching snapshots interactively)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"q"})," (quits)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"u"})," (updates all non-matching snapshots)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"w"})," (displays watch mode usage / available actions)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The following keys for built-in functionality ",(0,s.jsx)(n.strong,{children:"can be overwritten"}),"\xa0:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"p"})," (test filename pattern)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"t"})," (test name pattern)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Any key not used by built-in functionality can be claimed, as you would expect. Try to avoid using keys that are difficult to obtain on various keyboards (e.g. ",(0,s.jsx)(n.code,{children:"\xe9"}),", ",(0,s.jsx)(n.code,{children:"\u20ac"}),"), or not visible by default (e.g. many Mac keyboards do not have visual hints for characters such as ",(0,s.jsx)(n.code,{children:"|"}),", ",(0,s.jsx)(n.code,{children:"\\"}),", ",(0,s.jsx)(n.code,{children:"["}),", etc.)"]}),"\n",(0,s.jsx)(n.h3,{id:"when-a-conflict-happens",children:"When a conflict happens"}),"\n",(0,s.jsx)(n.p,{children:"Should your plugin attempt to overwrite a reserved key, Jest will error out with a descriptive message, something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\nWatch plugin YourFaultyPlugin attempted to register key `q`, that is reserved internally for quitting watch mode. Please change the configuration key for this plugin.\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Third-party plugins are also forbidden to overwrite a key reserved already by another third-party plugin present earlier in the configured plugins list (",(0,s.jsx)(n.code,{children:"watchPlugins"})," array setting). When this happens, you\u2019ll also get an error message that tries to help you fix that:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"\nWatch plugins YourFaultyPlugin and TheirFaultyPlugin both attempted to register key `x`. Please change the key configuration for one of the conflicting plugins to avoid overlap.\n\n"})})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>i});var s=t(7378);const o=s.createContext({});function i(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||r:i(e),s.createElement(o.Provider,{value:l},n)}}}]);
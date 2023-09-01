"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8809],{6734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(4246),s=n(1670);const a={id:"tutorial-react-native",title:"\u6d4b\u8bd5React Native\u7a0b\u5e8f"},r=void 0,i={unversionedId:"tutorial-react-native",id:"tutorial-react-native",title:"\u6d4b\u8bd5React Native\u7a0b\u5e8f",description:"\u5728 Facebook\uff0c\u6211\u4eec\u4f7f\u7528 Jest \u6d4b\u8bd5 React \u5e94\u7528\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/TutorialReactNative.md",sourceDirName:".",slug:"/tutorial-react-native",permalink:"/zh-Hans/docs/next/tutorial-react-native",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"current",frontMatter:{id:"tutorial-react-native",title:"\u6d4b\u8bd5React Native\u7a0b\u5e8f"},sidebar:"docs",previous:{title:"\u6d4b\u8bd5React\u7a0b\u5e8f",permalink:"/zh-Hans/docs/next/tutorial-react"},next:{title:"Testing Web Frameworks",permalink:"/zh-Hans/docs/next/testing-frameworks"}},c={},l=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"Snapshot Test",id:"snapshot-test",level:2},{value:"\u9884\u8bbe\u914d\u7f6e",id:"\u9884\u8bbe\u914d\u7f6e",level:2},{value:"\u73af\u5883",id:"\u73af\u5883",level:3},{value:"transformIgnorePatterns customization",id:"transformignorepatterns-customization",level:3},{value:"setupFiles",id:"setupfiles",level:3},{value:"moduleNameMapper",id:"modulenamemapper",level:3},{value:"Tips",id:"tips",level:2},{value:"Mock native modules using jest.mock",id:"mock-native-modules-using-jestmock",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",admonition:"admonition",h3:"h3",strong:"strong"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["\u5728 Facebook\uff0c\u6211\u4eec\u4f7f\u7528 Jest \u6d4b\u8bd5 ",(0,o.jsx)(t.a,{href:"https://reactnative.dev/",children:"React"})," \u5e94\u7528\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["\u9605\u8bfb\u4ee5\u4e0b\u7cfb\u5217\u6587\u7ae0\u6765\u6df1\u5165\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Jest \u6d4b\u8bd5\u4e00\u4e2a\u771f\u5b9e\u7684 React Native \u793a\u4f8b\u5e94\u7528\uff1a",(0,o.jsx)(t.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/",children:"\u7b2c\u4e00\u7bc7\uff1a Jest \u2013 Snapshot come into play"})," \u548c ",(0,o.jsx)(t.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/",children:"\u7b2c\u4e8c\u7bc7\uff1a Jest \u2013 Redux Snapshots for your Actions and Reducers"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,o.jsxs)(t.p,{children:["Starting from react-native version 0.38, a Jest setup is included by default when running ",(0,o.jsx)(t.code,{children:"react-native init"}),". The following configuration should be automatically added to your package.json file: The following configuration should be automatically added to your package.json file:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u7528 ",(0,o.jsx)(t.code,{children:"yarn test"})," \u6765\u8fd0\u884c Jest \u6d4b\u8bd5\u3002"]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["If you are upgrading your react-native application and previously used the ",(0,o.jsx)(t.code,{children:"jest-react-native"})," preset, remove the dependency from your ",(0,o.jsx)(t.code,{children:"package.json"})," file and change the preset to ",(0,o.jsx)(t.code,{children:"react-native"})," instead."]})}),"\n",(0,o.jsx)(t.h2,{id:"snapshot-test",children:"Snapshot Test"}),"\n",(0,o.jsxs)(t.p,{children:["\u4e0b\u9762\u6765\u4e3a\u4e00\u4e2a\u5165\u95e8\u7684\u5c0f\u578b\u7ec4\u4ef6\u521b\u5efa\u4e00\u4e2a",(0,o.jsx)(t.a,{href:"/zh-Hans/docs/next/snapshot-testing",children:"\u5feb\u7167\u6d4b\u8bd5"}),"\uff0c\u5b83\u7684\u5185\u90e8\u6709\u4e9bView\u3001Text\u7ec4\u4ef6\u548c\u4e00\u4e9b\u6837\u5f0f\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="Intro.js"',children:"import React, {Component} from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\n\nclass Intro extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.welcome}>Welcome to React Native!</Text>\n        <Text style={styles.instructions}>\n          This is a React Native snapshot test.\n        </Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  instructions: {\n    color: '#333333',\n    marginBottom: 5,\n    textAlign: 'center',\n  },\n  welcome: {\n    fontSize: 20,\n    margin: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Intro;\n"})}),"\n",(0,o.jsx)(t.p,{children:"\u73b0\u5728\uff0c\u4f7f\u7528React\u7684test renderer\u548cJest\u7684\u5feb\u7167\u7279\u6027\u6765\u548c\u7ec4\u4ef6\u4ea4\u4e92\uff0c\u83b7\u5f97\u6e32\u67d3\u7ed3\u679c\u548c\u751f\u6210\u5feb\u7167\u6587\u4ef6\uff1a"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",metastring:'title="__tests__/Intro-test.js"',children:"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Intro from '../Intro';\n\ntest('renders correctly', () => {\n  const tree = renderer.create(<Intro />).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,o.jsxs)(t.p,{children:["\u5f53\u4f60\u8fd0\u884c ",(0,o.jsx)(t.code,{children:"npm test"})," \u6216\u8005 ",(0,o.jsx)(t.code,{children:"jest"}),"\uff0c\u5c06\u4ea7\u751f\u4e00\u4e2a\u50cf\u4e0b\u9762\u7684\u6587\u4ef6\uff1a"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Intro-test.js.snap"',children:'exports[`Intro renders correctly 1`] = `\n<View\n  style={\n    Object {\n      "alignItems": "center",\n      "backgroundColor": "#F5FCFF",\n      "flex": 1,\n      "justifyContent": "center",\n    }\n  }>\n  <Text\n    style={\n      Object {\n        "fontSize": 20,\n        "margin": 10,\n        "textAlign": "center",\n      }\n    }>\n    Welcome to React Native!\n  </Text>\n  <Text\n    style={\n      Object {\n        "color": "#333333",\n        "marginBottom": 5,\n        "textAlign": "center",\n      }\n    }>\n    This is a React Native snapshot test.\n  </Text>\n</View>\n`;\n'})}),"\n",(0,o.jsxs)(t.p,{children:["\u4e0b\u6b21\u4f60\u8fd0\u884c\u6d4b\u8bd5\u65f6\uff0c\u6e32\u67d3\u7684\u7ed3\u679c\u5c06\u4f1a\u548c\u4e4b\u524d\u521b\u5efa\u7684\u5feb\u7167\u8fdb\u884c\u6bd4\u8f83\u3002 \u4ee3\u7801\u53d8\u52a8\u65f6\uff0c\u5feb\u7167\u4e5f\u5e94\u8be5\u88ab\u63d0\u4ea4\u3002 \u5f53\u5feb\u7167\u6d4b\u8bd5\u5931\u8d25\uff0c\u4f60\u9700\u8981\u53bb\u68c0\u67e5\u662f\u5426\u662f\u4f60\u60f3\u8981\u6216\u4e0d\u60f3\u8981\u7684\u53d8\u52a8\u3002 \u5982\u679c\u53d8\u52a8\u7b26\u5408\u9884\u671f\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,o.jsx)(t.code,{children:"jest -u"}),"\u8c03\u7528Jest\u4ece\u800c\u91cd\u5199\u5b58\u5728\u7684\u5feb\u7167\u3002"]}),"\n",(0,o.jsxs)(t.p,{children:["The code for this example is available at ",(0,o.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-native",children:"examples/react-native"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"\u9884\u8bbe\u914d\u7f6e",children:"\u9884\u8bbe\u914d\u7f6e"}),"\n",(0,o.jsx)(t.p,{children:"Preset\u662f\u57fa\u4e8e\u6211\u4eec\u5728Facebook\u7684\u7ecf\u9a8c\u751f\u6210\u7684\u4e00\u5957\u57fa\u672c\u914d\u7f6e\uff0c\u5e76\u4e14\u53ef\u81ea\u5b9a\u4e49\u8986\u76d6\u3002 \u6240\u6709\u7684\u914d\u7f6e\u9879\u90fd\u53ef\u4ee5\u88ab\u91cd\u5199\u3002"}),"\n",(0,o.jsx)(t.h3,{id:"\u73af\u5883",children:"\u73af\u5883"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"react-native"})," ships with a Jest preset, so the ",(0,o.jsx)(t.code,{children:"jest.preset"})," field of your ",(0,o.jsx)(t.code,{children:"package.json"})," should point to ",(0,o.jsx)(t.code,{children:"react-native"}),". The preset is a node environment that mimics the environment of a React Native app. Because it doesn't load any DOM or browser APIs, it greatly improves Jest's startup time. The preset is a node environment that mimics the environment of a React Native app. Because it doesn't load any DOM or browser APIs, it greatly improves Jest's startup time."]}),"\n",(0,o.jsx)(t.h3,{id:"transformignorepatterns-customization",children:"transformIgnorePatterns customization"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"configuration.html#transformignorepatterns-arraystring",children:(0,o.jsx)(t.code,{children:"transformIgnorePatterns"})})," option can be used to specify which files shall be transformed by Babel. Many react-native npm modules unfortunately don't pre-compile their source code before publishing. Many ",(0,o.jsx)(t.code,{children:"react-native"})," npm modules unfortunately don't pre-compile their source code before publishing."]}),"\n",(0,o.jsxs)(t.p,{children:["By default the ",(0,o.jsx)(t.code,{children:"jest-react-native"})," preset only processes the project's own source files and ",(0,o.jsx)(t.code,{children:"react-native"}),". If you have npm dependencies that have to be transformed you can customize this configuration option by including modules other than ",(0,o.jsx)(t.code,{children:"react-native"})," by grouping them and separating them with the ",(0,o.jsx)(t.code,{children:"|"})," operator:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": [\n    "node_modules/(?!(react-native|my-project|react-native-button)/)"\n  ]\n}\n'})}),"\n",(0,o.jsxs)(t.p,{children:["You can test which paths would match (and thus be excluded from transformation) with a tool ",(0,o.jsx)(t.a,{href:"https://regex101.com/r/JsLIDM/1",children:"like this"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"transformIgnorePatterns"})," will exclude a file from transformation if the path matches against ",(0,o.jsx)(t.strong,{children:"any"})," pattern provided. Splitting into multiple patterns could therefore have unintended results if you are not careful. In the example below, the exclusion (also known as a negative lookahead assertion) for ",(0,o.jsx)(t.code,{children:"foo"})," and ",(0,o.jsx)(t.code,{children:"bar"})," cancel each other out:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": ["node_modules/(?!foo/)", "node_modules/(?!bar/)"] // not what you want\n}\n'})}),"\n",(0,o.jsx)(t.h3,{id:"setupfiles",children:"setupFiles"}),"\n",(0,o.jsxs)(t.p,{children:["If you'd like to provide additional configuration for every test file, the ",(0,o.jsxs)(t.a,{href:"configuration.html#setupfiles-array",children:[(0,o.jsx)(t.code,{children:"setupFiles"})," configuration option"]})," can be used to specify setup scripts."]}),"\n",(0,o.jsx)(t.h3,{id:"modulenamemapper",children:"moduleNameMapper"}),"\n",(0,o.jsxs)(t.p,{children:["\u53ef\u4ee5\u4f7f\u7528 ",(0,o.jsxs)(t.a,{href:"configuration.html#modulenamemapper-objectstring-string--arraystring",children:[" ",(0,o.jsx)(t.code,{children:"modulenamemapper"})," "]})," \u5c06\u6a21\u5757\u8def\u5f84\u6620\u5c04\u5230\u5176\u4ed6\u6a21\u5757\u3002 By default the preset maps all images to an image stub module but if a module cannot be found this configuration option can help:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'{\n  "moduleNameMapper": {\n    "my-module.js": "<rootDir>/path/to/my-module.js"\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(t.h3,{id:"mock-native-modules-using-jestmock",children:"Mock native modules using jest.mock"}),"\n",(0,o.jsxs)(t.p,{children:["The Jest preset built into ",(0,o.jsx)(t.code,{children:"react-native"})," comes with a few default mocks that are applied on a react-native repository. However, some react-native components or third party components rely on native code to be rendered. In such cases, Jest's manual mocking system can help to mock out the underlying implementation. However, some react-native components or third party components rely on native code to be rendered. In such cases, Jest's manual mocking system can help to mock out the underlying implementation."]}),"\n",(0,o.jsxs)(t.p,{children:["For example, if your code depends on a third party native video component called ",(0,o.jsx)(t.code,{children:"react-native-video"})," you might want to stub it out with a manual mock like this:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('react-native-video', () => 'Video');\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This will render the component as ",(0,o.jsx)(t.code,{children:"<Video {...props} />"})," with all of its props in the snapshot output. \u60f3\u4e86\u89e3\u66f4\u591a\u8fd8\u53ef\u4ee5\u9605\u8bfb ",(0,o.jsx)(t.a,{href:"tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16",children:"caveats around Enzyme and React 16"}),". \u60f3\u4e86\u89e3\u66f4\u591a\u8fd8\u53ef\u4ee5\u9605\u8bfb ",(0,o.jsx)(t.a,{href:"tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16",children:"caveats around Enzyme and React 16"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"Sometimes you need to provide a more complex manual mock. Sometimes you need to provide a more complex manual mock. For example if you'd like to forward the prop types or static fields of a native component to a mock, you can return a different React component from a mock through this helper from jest-react-native:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('path/to/MyNativeComponent', () => {\n  const mockComponent = require('react-native/jest/mockComponent');\n  return mockComponent('path/to/MyNativeComponent');\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"Or if you'd like to create your own manual mock, you can do something like this:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"jest.mock('Text', () => {\n  const RealComponent = jest.requireActual('Text');\n  const React = require('react');\n  class Text extends React.Component {\n    render() {\n      return React.createElement('Text', this.props, this.props.children);\n    }\n  }\n  Text.propTypes = RealComponent.propTypes;\n  return Text;\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"In other cases you may want to mock a native module that isn't a React component. The same technique can be applied. We recommend inspecting the native module's source code and logging the module when running a react native app on a real device and then modeling a manual mock after the real module. The same technique can be applied. We recommend inspecting the native module's source code and logging the module when running a react native app on a real device and then modeling a manual mock after the real module."}),"\n",(0,o.jsxs)(t.p,{children:["If you end up mocking the same modules over and over it is recommended to define these mocks in a separate file and add it to the list of ",(0,o.jsx)(t.code,{children:"setupFiles"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(d,e)})):d(e)}},1670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var o=n(7378);const s=o.createContext({});function a(e){const t=o.useContext(s);return o.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:a(e),o.createElement(s.Provider,{value:i},t)}}}]);
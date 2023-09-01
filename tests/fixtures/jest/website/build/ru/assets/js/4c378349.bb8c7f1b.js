"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1671],{9499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var s=n(4246),o=n(1670);const a={id:"tutorial-react-native",title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React Native \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"},r=void 0,i={unversionedId:"tutorial-react-native",id:"version-29.4/tutorial-react-native",title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React Native \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",description:"At Facebook, we use Jest to test React Native applications.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.4/TutorialReactNative.md",sourceDirName:".",slug:"/tutorial-react-native",permalink:"/ru/docs/29.4/tutorial-react-native",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.4",frontMatter:{id:"tutorial-react-native",title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React Native \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"},sidebar:"docs",previous:{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 React \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439",permalink:"/ru/docs/29.4/tutorial-react"},next:{title:"Testing Web Frameworks",permalink:"/ru/docs/29.4/testing-frameworks"}},c={},l=[{value:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",level:2},{value:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043d\u0438\u043c\u043a\u043e\u0432",id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438-\u043f\u043e\u043c\u043e\u0449\u0438-\u0441\u043d\u0438\u043c\u043a\u043e\u0432",level:2},{value:"Preset configuration",id:"preset-configuration",level:2},{value:"\u041e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435",id:"\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435",level:3},{value:"transformIgnorePatterns customization",id:"transformignorepatterns-customization",level:3},{value:"setupFiles",id:"setupfiles",level:3},{value:"moduleNameMapper",id:"modulenamemapper",level:3},{value:"\u0421\u043e\u0432\u0435\u0442\u044b",id:"\u0441\u043e\u0432\u0435\u0442\u044b",level:2},{value:"Mock native modules using jest.mock",id:"mock-native-modules-using-jestmock",level:3}];function d(e){const t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",admonition:"admonition",h3:"h3",strong:"strong"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["At Facebook, we use Jest to test ",(0,s.jsx)(t.a,{href:"https://reactnative.dev/",children:"React Native"})," applications."]}),"\n",(0,s.jsxs)(t.p,{children:["Get a deeper insight into testing a working React Native app example by reading the following series: ",(0,s.jsx)(t.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/",children:"Part 1: Jest \u2013 Snapshot come into play"})," and ",(0,s.jsx)(t.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/",children:"Part 2: Jest \u2013 Redux Snapshots for your Actions and Reducers"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430"}),"\n",(0,s.jsxs)(t.p,{children:["\u041d\u0430\u0447\u0438\u043d\u0430\u044f \u0441 react-native \u0432\u0435\u0440\u0441\u0438\u0438 0.38, \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e, \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 Jest \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u043f\u0440\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u044b ",(0,s.jsx)(t.code,{children:"react-native init"}),". \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u0442\u044c \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430 \u0432 \u0432\u0430\u0448 \u0444\u0430\u0439\u043b package.json:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"yarn test"})," to run tests with Jest."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsxs)(t.p,{children:["If you are upgrading your react-native application and previously used the ",(0,s.jsx)(t.code,{children:"jest-react-native"})," preset, remove the dependency from your ",(0,s.jsx)(t.code,{children:"package.json"})," file and change the preset to ",(0,s.jsx)(t.code,{children:"react-native"})," instead."]})}),"\n",(0,s.jsx)(t.h2,{id:"\u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-\u043f\u0440\u0438-\u043f\u043e\u043c\u043e\u0449\u0438-\u0441\u043d\u0438\u043c\u043a\u043e\u0432",children:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u0438 \u043f\u043e\u043c\u043e\u0449\u0438 \u0441\u043d\u0438\u043c\u043a\u043e\u0432"}),"\n",(0,s.jsxs)(t.p,{children:["Let's create a ",(0,s.jsx)(t.a,{href:"/ru/docs/29.4/snapshot-testing",children:"snapshot test"})," for a small intro component with a few views and text components and some styles:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="Intro.js"',children:"import React, {Component} from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\n\nclass Intro extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.welcome}>Welcome to React Native!</Text>\n        <Text style={styles.instructions}>\n          This is a React Native snapshot test.\n        </Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  instructions: {\n    color: '#333333',\n    marginBottom: 5,\n    textAlign: 'center',\n  },\n  welcome: {\n    fontSize: 20,\n    margin: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Intro;\n"})}),"\n",(0,s.jsx)(t.p,{children:"\u0422\u0435\u043f\u0435\u0440\u044c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c \u0440\u0435\u043d\u0434\u0435\u0440\u0435\u0440 \u0442\u0435\u0441\u0442\u043e\u0432 React \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043d\u0438\u043c\u043a\u043e\u0432 Jest \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u043c \u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u0430 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0435\u0433\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f, \u0430 \u0442\u0430\u043a\u0436\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0444\u0430\u0439\u043b\u0430 \u0441\u043d\u0438\u043c\u043a\u0430:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",metastring:'title="__tests__/Intro-test.js"',children:"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Intro from '../Intro';\n\ntest('renders correctly', () => {\n  const tree = renderer.create(<Intro />).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["When you run ",(0,s.jsx)(t.code,{children:"yarn test"})," or ",(0,s.jsx)(t.code,{children:"jest"}),", this will produce an output file like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Intro-test.js.snap"',children:'exports[`Intro renders correctly 1`] = `\n<View\n  style={\n    Object {\n      "alignItems": "center",\n      "backgroundColor": "#F5FCFF",\n      "flex": 1,\n      "justifyContent": "center",\n    }\n  }>\n  <Text\n    style={\n      Object {\n        "fontSize": 20,\n        "margin": 10,\n        "textAlign": "center",\n      }\n    }>\n    Welcome to React Native!\n  </Text>\n  <Text\n    style={\n      Object {\n        "color": "#333333",\n        "marginBottom": 5,\n        "textAlign": "center",\n      }\n    }>\n    This is a React Native snapshot test.\n  </Text>\n</View>\n`;\n'})}),"\n",(0,s.jsxs)(t.p,{children:["\u041f\u0440\u0438 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c \u0437\u0430\u043f\u0443\u0441\u043a\u0435 \u0442\u0435\u0441\u0442\u043e\u0432, \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u043c\u044b\u0439 \u0432\u044b\u0432\u043e\u0434 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0432\u043d\u0435\u043d \u0441 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u043c \u0441\u043d\u0438\u043c\u043a\u043e\u043c. \u042d\u0442\u043e\u0442 \u0441\u043d\u0438\u043c\u043e\u043a \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0437\u0430\u043d\u0435\u0441\u0442\u0438 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0432\u0435\u0440\u0441\u0438\u0439 \u043d\u0430\u0440\u044f\u0434\u0443 \u0441 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043a\u043e\u0434\u0435. \u041a\u043e\u0433\u0434\u0430 \u0442\u0435\u0441\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u0441\u043d\u0438\u043c\u043a\u0438 \u043f\u0440\u043e\u0432\u0430\u043b\u0438\u0432\u0430\u0435\u0442\u0441\u044f, \u0432\u0430\u043c \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435 \u044d\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u043d\u0435\u0442. \u0415\u0441\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u0432\u0438\u0434\u0435\u043d\u043d\u044b\u0435, \u0442\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c Jest \u043a\u043e\u043c\u0430\u043d\u0434\u043e\u0439 ",(0,s.jsx)(t.code,{children:"jest -u"})," \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0438 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0441\u043d\u0438\u043c\u043a\u043e\u0432."]}),"\n",(0,s.jsxs)(t.p,{children:["The code for this example is available at ",(0,s.jsx)(t.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-native",children:"examples/react-native"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"preset-configuration",children:"Preset configuration"}),"\n",(0,s.jsx)(t.p,{children:"The preset sets up the environment and is very opinionated and based on what we found to be useful at Facebook. All of the configuration options can be overwritten just as they can be customized when no preset is used."}),"\n",(0,s.jsx)(t.h3,{id:"\u043e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435",children:"\u041e\u043a\u0440\u0443\u0436\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"react-native"})," ships with a Jest preset, so the ",(0,s.jsx)(t.code,{children:"jest.preset"})," field of your ",(0,s.jsx)(t.code,{children:"package.json"})," should point to ",(0,s.jsx)(t.code,{children:"react-native"}),". The preset is a node environment that mimics the environment of a React Native app. Because it doesn't load any DOM or browser APIs, it greatly improves Jest's startup time."]}),"\n",(0,s.jsx)(t.h3,{id:"transformignorepatterns-customization",children:"transformIgnorePatterns customization"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"configuration.html#transformignorepatterns-arraystring",children:(0,s.jsx)(t.code,{children:"transformIgnorePatterns"})})," option can be used to specify which files shall be transformed by Babel. Many ",(0,s.jsx)(t.code,{children:"react-native"})," npm modules unfortunately don't pre-compile their source code before publishing."]}),"\n",(0,s.jsxs)(t.p,{children:["By default the ",(0,s.jsx)(t.code,{children:"jest-react-native"})," preset only processes the project's own source files and ",(0,s.jsx)(t.code,{children:"react-native"}),". If you have npm dependencies that have to be transformed you can customize this configuration option by including modules other than ",(0,s.jsx)(t.code,{children:"react-native"})," by grouping them and separating them with the ",(0,s.jsx)(t.code,{children:"|"})," operator:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": [\n    "node_modules/(?!(react-native|my-project|react-native-button)/)"\n  ]\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["You can test which paths would match (and thus be excluded from transformation) with a tool ",(0,s.jsx)(t.a,{href:"https://regex101.com/r/JsLIDM/1",children:"like this"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"transformIgnorePatterns"})," will exclude a file from transformation if the path matches against ",(0,s.jsx)(t.strong,{children:"any"})," pattern provided. Splitting into multiple patterns could therefore have unintended results if you are not careful. In the example below, the exclusion (also known as a negative lookahead assertion) for ",(0,s.jsx)(t.code,{children:"foo"})," and ",(0,s.jsx)(t.code,{children:"bar"})," cancel each other out:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": ["node_modules/(?!foo/)", "node_modules/(?!bar/)"] // not what you want\n}\n'})}),"\n",(0,s.jsx)(t.h3,{id:"setupfiles",children:"setupFiles"}),"\n",(0,s.jsxs)(t.p,{children:["If you'd like to provide additional configuration for every test file, the ",(0,s.jsxs)(t.a,{href:"configuration.html#setupfiles-array",children:[(0,s.jsx)(t.code,{children:"setupFiles"})," configuration option"]})," can be used to specify setup scripts."]}),"\n",(0,s.jsx)(t.h3,{id:"modulenamemapper",children:"moduleNameMapper"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.a,{href:"configuration.html#modulenamemapper-objectstring-string--arraystring",children:(0,s.jsx)(t.code,{children:"moduleNameMapper"})})," can be used to map a module path to a different module. By default the preset maps all images to an image stub module but if a module cannot be found this configuration option can help:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'{\n  "moduleNameMapper": {\n    "my-module.js": "<rootDir>/path/to/my-module.js"\n  }\n}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"\u0441\u043e\u0432\u0435\u0442\u044b",children:"\u0421\u043e\u0432\u0435\u0442\u044b"}),"\n",(0,s.jsx)(t.h3,{id:"mock-native-modules-using-jestmock",children:"Mock native modules using jest.mock"}),"\n",(0,s.jsxs)(t.p,{children:["The Jest preset built into ",(0,s.jsx)(t.code,{children:"react-native"})," comes with a few default mocks that are applied on a react-native repository. However, some react-native components or third party components rely on native code to be rendered. In such cases, Jest's manual mocking system can help to mock out the underlying implementation."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, if your code depends on a third party native video component called ",(0,s.jsx)(t.code,{children:"react-native-video"})," you might want to stub it out with a manual mock like this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"jest.mock('react-native-video', () => 'Video');\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This will render the component as ",(0,s.jsx)(t.code,{children:"<Video {...props} />"})," with all of its props in the snapshot output. See also ",(0,s.jsx)(t.a,{href:"tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16",children:"caveats around Enzyme and React 16"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Sometimes you need to provide a more complex manual mock. For example if you'd like to forward the prop types or static fields of a native component to a mock, you can return a different React component from a mock through this helper from jest-react-native:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"jest.mock('path/to/MyNativeComponent', () => {\n  const mockComponent = require('react-native/jest/mockComponent');\n  return mockComponent('path/to/MyNativeComponent');\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Or if you'd like to create your own manual mock, you can do something like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"jest.mock('Text', () => {\n  const RealComponent = jest.requireActual('Text');\n  const React = require('react');\n  class Text extends React.Component {\n    render() {\n      return React.createElement('Text', this.props, this.props.children);\n    }\n  }\n  Text.propTypes = RealComponent.propTypes;\n  return Text;\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"In other cases you may want to mock a native module that isn't a React component. The same technique can be applied. We recommend inspecting the native module's source code and logging the module when running a react native app on a real device and then modeling a manual mock after the real module."}),"\n",(0,s.jsxs)(t.p,{children:["If you end up mocking the same modules over and over it is recommended to define these mocks in a separate file and add it to the list of ",(0,s.jsx)(t.code,{children:"setupFiles"}),"."]})]})}const h=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,t,n)=>{n.d(t,{Zo:()=>i,ah:()=>a});var s=n(7378);const o=s.createContext({});function a(e){const t=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const r={};function i({components:e,children:t,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||r:a(e),s.createElement(o.Provider,{value:i},t)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5696],{9590:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=t(4246),r=t(1670);const a={id:"tutorial-react-native",title:"React Native\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8"},o=void 0,c={unversionedId:"tutorial-react-native",id:"tutorial-react-native",title:"React Native\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8",description:"Facebook\u3067\u306f\u3001Jest\u3092\u4f7f\u7528\u3057\u3066 React Native \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/TutorialReactNative.md",sourceDirName:".",slug:"/tutorial-react-native",permalink:"/ja/docs/next/tutorial-react-native",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ja",tags:[],version:"current",frontMatter:{id:"tutorial-react-native",title:"React Native\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8"},sidebar:"docs",previous:{title:"React\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8",permalink:"/ja/docs/next/tutorial-react"},next:{title:"Web \u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u306e\u30c6\u30b9\u30c8",permalink:"/ja/docs/next/testing-frameworks"}},i={},l=[{value:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",level:2},{value:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",id:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",level:2},{value:"\u30d7\u30ea\u30bb\u30c3\u30c8\u8a2d\u5b9a",id:"\u30d7\u30ea\u30bb\u30c3\u30c8\u8a2d\u5b9a",level:2},{value:"\u74b0\u5883",id:"\u74b0\u5883",level:3},{value:"transformIgnorePatterns \u306e\u30ab\u30b9\u30bf\u30e0",id:"transformignorepatterns-\u306e\u30ab\u30b9\u30bf\u30e0",level:3},{value:"setupFiles",id:"setupfiles",level:3},{value:"moduleNameMapper",id:"modulenamemapper",level:3},{value:"Tips",id:"tips",level:2},{value:"jest.mock \u3092\u4f7f\u3063\u3066\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e2\u30c3\u30af\u3059\u308b",id:"jestmock-\u3092\u4f7f\u3063\u3066\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e2\u30c3\u30af\u3059\u308b",level:3}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",admonition:"admonition",h3:"h3",strong:"strong"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Facebook\u3067\u306f\u3001Jest\u3092\u4f7f\u7528\u3057\u3066 ",(0,s.jsx)(n.a,{href:"https://reactnative.dev/",children:"React Native"})," \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u52d5\u304f React Native \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u30c6\u30b9\u30c8\u306b\u95a2\u3059\u308b\u3088\u308a\u6df1\u3044\u77e5\u898b\u306f\u4ee5\u4e0b\u306e\u30b7\u30ea\u30fc\u30ba\u3092\u8aad\u3080\u3053\u3068\u3067\u5f97\u3066\u304f\u3060\u3055\u3044: ",(0,s.jsx)(n.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/",children:"Part 1: Jest \u2013 Snapshot come into play"}),"\u3001",(0,s.jsx)(n.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/",children:"Part 2: Jest \u2013 Redux Snapshots for your Actions and Reducers"})]}),"\n",(0,s.jsx)(n.h2,{id:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",children:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,s.jsxs)(n.p,{children:["react-native 0.38 \u3088\u308a ",(0,s.jsx)(n.code,{children:"react-native init"})," \u30b3\u30de\u30f3\u30c9\u306b Jest \u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u4ee5\u4e0b\u306e\u8a2d\u5b9a\u304c\u81ea\u52d5\u7684\u306b package.json \u30d5\u30a1\u30a4\u30eb\u306b\u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"yarn test"})," \u3092\u5b9f\u884c\u3059\u308b\u3060\u3051\u3067\u3001Jest \u3067\u30c6\u30b9\u30c8\u3092\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you are upgrading your react-native application and previously used the ",(0,s.jsx)(n.code,{children:"jest-react-native"})," preset, remove the dependency from your ",(0,s.jsx)(n.code,{children:"package.json"})," file and change the preset to ",(0,s.jsx)(n.code,{children:"react-native"})," instead."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8",children:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8"}),"\n",(0,s.jsxs)(n.p,{children:["\u3055\u3042 ",(0,s.jsx)(n.a,{href:"/ja/docs/next/snapshot-testing",children:"\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8"})," \u3092\u3044\u304f\u3064\u304b\u306e\u30d3\u30e5\u30fc\u3068\u30c6\u30ad\u30b9\u30c8\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u3082\u3064\u30b5\u30f3\u30d7\u30eb\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5bfe\u3057\u3066\u4f5c\u308a\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="Intro.js"',children:"import React, {Component} from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\n\nclass Intro extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.welcome}>Welcome to React Native!</Text>\n        <Text style={styles.instructions}>\n          This is a React Native snapshot test.\n        </Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  instructions: {\n    color: '#333333',\n    marginBottom: 5,\n    textAlign: 'center',\n  },\n  welcome: {\n    fontSize: 20,\n    margin: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Intro;\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u306e\u3084\u308a\u53d6\u308a\u3068\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u51fa\u529b\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3057\u3066\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001React\u306e\u30c6\u30b9\u30c8\u30ec\u30f3\u30c0\u30e9\u30fc\u3068Jest\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u6a5f\u80fd\u3092\u5229\u7528\u3057\u307e\u3057\u3087\u3046:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/Intro-test.js"',children:"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Intro from '../Intro';\n\ntest('renders correctly', () => {\n  const tree = renderer.create(<Intro />).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"yarn test"})," \u307e\u305f\u306f ",(0,s.jsx)(n.code,{children:"jest"}),"\u3092\u5b9f\u884c\u3059\u308b\u3068\u3001\u3053\u306e\u3088\u3046\u306a\u30d5\u30a1\u30a4\u30eb\u304c\u51fa\u529b\u3055\u308c\u307e\u3059:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Intro-test.js.snap"',children:'exports[`Intro renders correctly 1`] = `\n<View\n  style={\n    Object {\n      "alignItems": "center",\n      "backgroundColor": "#F5FCFF",\n      "flex": 1,\n      "justifyContent": "center",\n    }\n  }>\n  <Text\n    style={\n      Object {\n        "fontSize": 20,\n        "margin": 10,\n        "textAlign": "center",\n      }\n    }>\n    Welcome to React Native!\n  </Text>\n  <Text\n    style={\n      Object {\n        "color": "#333333",\n        "marginBottom": 5,\n        "textAlign": "center",\n      }\n    }>\n    This is a React Native snapshot test.\n  </Text>\n</View>\n`;\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u6b21\u56de\u306e\u30c6\u30b9\u30c8\u3067\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u51fa\u529b\u306f\u524d\u306b\u4f5c\u6210\u3055\u308c\u305f\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3068\u6bd4\u8f03\u3055\u308c\u307e\u3059\u3002 \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u306f\u3001\u30b3\u30fc\u30c9\u306e\u5909\u66f4\u306b\u6cbf\u3063\u3066\u30b3\u30df\u30c3\u30c8\u3055\u308c\u308b\u3079\u304d\u3067\u3059\u3002 \u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u30c6\u30b9\u30c8\u304c\u5931\u6557\u3057\u305f\u5834\u5408\u3001\u305d\u308c\u304c\u610f\u56f3\u7684\u306a\u5909\u66f4\u304b\u3069\u3046\u304b\u3092\u70b9\u691c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002 \u5909\u66f4\u304c\u4e88\u60f3\u3055\u308c\u305f\u3082\u306e\u3067\u3042\u308c\u3070",(0,s.jsx)(n.code,{children:"jest -u"}),"\u30b3\u30de\u30f3\u30c9\u3067Jest\u3092\u5b9f\u884c\u3057\u3066\u65e2\u5b58\u306e\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u3092\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["The code for this example is available at ",(0,s.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-native",children:"examples/react-native"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u30d7\u30ea\u30bb\u30c3\u30c8\u8a2d\u5b9a",children:"\u30d7\u30ea\u30bb\u30c3\u30c8\u8a2d\u5b9a"}),"\n",(0,s.jsx)(n.p,{children:"\u30d7\u30ea\u30bb\u30c3\u30c8\u306f\u74b0\u5883\u3092\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3057\u307e\u3059\u304c\u3001\u305d\u308c\u306f\u3068\u3066\u3082\u504f\u3063\u3066\u304a\u308a Facebook \u306b\u304a\u3044\u3066\u6709\u7528\u3067\u3042\u308b\u3068\u308f\u304b\u3063\u305f\u3082\u306e\u3092\u30d9\u30fc\u30b9\u306b\u3057\u3066\u3044\u307e\u3059\u3002 \u305f\u3060\u3001\u3059\u3079\u3066\u306e\u8a2d\u5b9a\u5024\u306f\u4e0a\u66f8\u304d\u53ef\u80fd\u3067\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u3063\u3066\u306a\u3044\u5834\u5408\u3067\u3082\u305d\u308c\u306b\u5408\u308f\u305b\u3066\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u74b0\u5883",children:"\u74b0\u5883"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"react-native"})," \u306f Jest \u30d7\u30ea\u30bb\u30c3\u30c8\u3068\u3068\u3082\u306b\u63d0\u4f9b\u3055\u308c\u3066\u3044\u308b\u306e\u3067\u3001 ",(0,s.jsx)(n.code,{children:"package.json"})," \u306e ",(0,s.jsx)(n.code,{children:"jest.preset"})," \u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u306f",(0,s.jsx)(n.code,{children:"react-native"})," \u304c\u6307\u5b9a\u3055\u308c\u3066\u3044\u308b\u3079\u304d\u3067\u3059\u3002 \u30d7\u30ea\u30bb\u30c3\u30c8\u306f node \u74b0\u5883\u3067\u3042\u308a React Native \u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u74b0\u5883\u3092\u6a21\u5023\u3057\u307e\u3059\u3002 \u305d\u306e\u305f\u3081\u4e00\u5207\u306e DOM \u3084 \u30d6\u30e9\u30a6\u30b6 API \u3092\u30ed\u30fc\u30c9\u3057\u306a\u3044\u305f\u3081\u3001Jest \u306e\u8d77\u52d5\u6642\u9593\u3092\u5927\u304d\u304f\u5411\u4e0a\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"transformignorepatterns-\u306e\u30ab\u30b9\u30bf\u30e0",children:"transformIgnorePatterns \u306e\u30ab\u30b9\u30bf\u30e0"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"configuration#transformignorepatterns-arraystring",children:(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})})," option can be used to specify which files shall be transformed by Babel. Many ",(0,s.jsx)(n.code,{children:"react-native"})," npm modules unfortunately don't pre-compile their source code before publishing."]}),"\n",(0,s.jsxs)(n.p,{children:["By default the ",(0,s.jsx)(n.code,{children:"jest-react-native"})," preset only processes the project's own source files and ",(0,s.jsx)(n.code,{children:"react-native"}),". If you have npm dependencies that have to be transformed you can customize this configuration option by including modules other than ",(0,s.jsx)(n.code,{children:"react-native"})," by grouping them and separating them with the ",(0,s.jsx)(n.code,{children:"|"})," operator:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": [\n    "node_modules/(?!(react-native|my-project|react-native-button)/)"\n  ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You can test which paths would match (and thus be excluded from transformation) with a tool ",(0,s.jsx)(n.a,{href:"https://regex101.com/r/JsLIDM/1",children:"like this"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transformIgnorePatterns"})," will exclude a file from transformation if the path matches against ",(0,s.jsx)(n.strong,{children:"any"})," pattern provided. Splitting into multiple patterns could therefore have unintended results if you are not careful. In the example below, the exclusion (also known as a negative lookahead assertion) for ",(0,s.jsx)(n.code,{children:"foo"})," and ",(0,s.jsx)(n.code,{children:"bar"})," cancel each other out:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": ["node_modules/(?!foo/)", "node_modules/(?!bar/)"] // not what you want\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"setupfiles",children:"setupFiles"}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3057\u3042\u306a\u305f\u304c\u5404\u30c6\u30b9\u30c8\u30d5\u30a1\u30a4\u30eb\u306b\u5bfe\u3057\u3066\u8ffd\u52a0\u8a2d\u5b9a\u3092\u884c\u3044\u305f\u3044\u5834\u5408\u306f\u3001",(0,s.jsxs)(n.a,{href:"configuration#setupfiles-array",children:[(0,s.jsx)(n.code,{children:"setupFiles"})," \u8a2d\u5b9a\u5024"]})," \u3092\u4f7f\u3063\u3066\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6307\u5b9a\u3059\u308b\u3053\u3068\u304c\u5229\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"modulenamemapper",children:"moduleNameMapper"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"configuration#modulenamemapper-objectstring-string--arraystring",children:(0,s.jsx)(n.code,{children:"moduleNameMapper"})})," \u3092\u4f7f\u3046\u3068\u3042\u308b\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30d1\u30b9\u3092\u5225\u306e\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u30de\u30c3\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30d7\u30ea\u30bb\u30c3\u30c8\u306f\u3059\u3079\u3066\u306e\u30a4\u30e1\u30fc\u30b8\u3092\u30a4\u30e1\u30fc\u30b8\u30b9\u30bf\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u306b\u30de\u30c3\u30d7\u3057\u3066\u3044\u307e\u3059\u304c\u3082\u3057\u30e2\u30b8\u30e5\u30fc\u30eb\u304c\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u3053\u306e\u8a2d\u5b9a\u5024\u304c\u5f79\u7acb\u3064\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "moduleNameMapper": {\n    "my-module.js": "<rootDir>/path/to/my-module.js"\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsx)(n.h3,{id:"jestmock-\u3092\u4f7f\u3063\u3066\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e2\u30c3\u30af\u3059\u308b",children:"jest.mock \u3092\u4f7f\u3063\u3066\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e2\u30c3\u30af\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"react-native"})," \u306b\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308b Jest \u30d7\u30ea\u30bb\u30c3\u30c8\u306f\u3044\u304f\u3064\u304b\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30e2\u30c3\u30af\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u305d\u308c\u3089\u306f react-native \u30ec\u30dd\u30b8\u30c8\u30ea\u306b\u3082\u9069\u7528\u3055\u308c\u3066\u3044\u307e\u3059\u3002 However, some react-native components or third party components rely on native code to be rendered. \u305d\u306e\u3088\u3046\u306a\u5834\u5408\u306b\u306f\u3001Jest \u306e\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af\u30b7\u30b9\u30c6\u30e0\u3092\u4f7f\u3063\u3066\u5185\u90e8\u306e\u5b9f\u88c5\u90e8\u5206\u3092\u30e2\u30c3\u30af\u3059\u308b\u3053\u3068\u3067\u554f\u984c\u3092\u56de\u907f\u3067\u304d\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u4f8b\u3048\u3070\u3001\u3082\u3057\u3042\u306a\u305f\u306e\u30b3\u30fc\u30c9\u304c ",(0,s.jsx)(n.code,{children:"react-native-video"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30d3\u30c7\u30aa\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u4f9d\u5b58\u3057\u3066\u3044\u305f\u5834\u5408\u3001\u3042\u306a\u305f\u306f\u305d\u308c\u3092\u30e2\u30c3\u30af\u95a2\u6570\u3067\u7f6e\u304d\u63db\u3048\u305f\u304f\u306a\u308b\u304b\u3082\u3057\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"jest.mock('react-native-video', () => 'Video');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u3053\u308c\u306f\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u305d\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u3059\u3079\u3066\u306e props \u3068\u3068\u3082\u306b ",(0,s.jsx)(n.code,{children:"<Video {...props} />"})," \u3068\u3057\u3066\u30b9\u30ca\u30c3\u30d7\u30b7\u30e7\u30c3\u30c8\u51fa\u529b\u306e\u4e2d\u3067\u63cf\u753b\u3057\u307e\u3059\u3002 Enzyme \u3068 React 16 ",(0,s.jsx)(n.a,{href:"tutorial-react#snapshot-testing-with-mocks-enzyme-and-react-16",children:"\u306b\u3064\u3044\u3066\u306e\u6ce8\u610f\u4e8b\u9805\u3082\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u3068\u304d\u306b\u3088\u308a\u8907\u96d1\u306a\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af\u3092\u5fc5\u8981\u3068\u3059\u308b\u5834\u5408\u3082\u3042\u308b\u3067\u3057\u3087\u3046\u3002 \u4f8b\u3048\u3070\u3001\u3082\u3057\u3042\u306a\u305f\u304c\u30cd\u30a4\u30c6\u30a3\u30d6\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e prop types \u3082\u3057\u304f\u306f\u9759\u7684\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u30e2\u30c3\u30af\u306b\u6e21\u3057\u305f\u3044\u5834\u5408\u306b\u3001jest-react-native \u306e\u30d8\u30eb\u30d1\u30fc\u3092\u4f7f\u3063\u3066\u5225\u306e React \u30e2\u30c3\u30af\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8fd4\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"jest.mock('path/to/MyNativeComponent', () => {\n  const mockComponent = require('react-native/jest/mockComponent');\n  return mockComponent('path/to/MyNativeComponent');\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u3082\u3057\u304f\u306f\u3001\u3042\u306a\u305f\u304c\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af\u3092\u4f5c\u308a\u305f\u3044\u5834\u5408\u306f\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u3057\u3066\u4f5c\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"jest.mock('Text', () => {\n  const RealComponent = jest.requireActual('Text');\n  const React = require('react');\n  class Text extends React.Component {\n    render() {\n      return React.createElement('Text', this.props, this.props.children);\n    }\n  }\n  Text.propTypes = RealComponent.propTypes;\n  return Text;\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5225\u306e\u30b1\u30fc\u30b9\u3068\u3057\u3066\u3001React \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u306a\u3044\u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u30e2\u30c3\u30af\u3057\u305f\u3044\u30b1\u30fc\u30b9\u304c\u3042\u308a\u307e\u3059\u3002 \u305d\u306e\u30b1\u30fc\u30b9\u3067\u3082\u540c\u3058\u30c6\u30af\u30cb\u30c3\u30af\u304c\u4f7f\u3048\u307e\u3059\u3002 \u30cd\u30a4\u30c6\u30a3\u30d6\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u3092\u3088\u304f\u8abf\u3079\u3066\u3001\u5b9f\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u969b\u306b\u52d5\u304b\u3057\u306a\u304c\u3089\u30e2\u30b8\u30e5\u30fc\u30eb\u306e\u30ed\u30b0\u3092\u53d6\u3063\u3066\u3001\u30de\u30cb\u30e5\u30a2\u30eb\u30e2\u30c3\u30af\u3092\u8a2d\u8a08\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u3082\u3057\u3042\u306a\u305f\u304c\u540c\u3058\u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u4f55\u5ea6\u3082\u30e2\u30c3\u30af\u3059\u308b\u3053\u3068\u306b\u306a\u3063\u305f\u3089\u3001\u305d\u306e\u30e2\u30c3\u30af\u306f\u5225\u30d5\u30a1\u30a4\u30eb\u306b\u5b9a\u7fa9\u3057\u3066\u305d\u308c\u3092 ",(0,s.jsx)(n.code,{children:"setupFiles"})," \u30ea\u30b9\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u3092\u304a\u3059\u3059\u3081\u3057\u307e\u3059\u3002"]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>a});var s=t(7378);const r=s.createContext({});function a(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:a(e),s.createElement(r.Provider,{value:c},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1711],{8131:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=t(4246),o=t(1670);const s={id:"tutorial-react-native",title:"Testando Apps React Native"},r=void 0,i={unversionedId:"tutorial-react-native",id:"version-29.5/tutorial-react-native",title:"Testando Apps React Native",description:"At Facebook, we use Jest to test React Native applications.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.5/TutorialReactNative.md",sourceDirName:".",slug:"/tutorial-react-native",permalink:"/pt-BR/docs/29.5/tutorial-react-native",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.5",frontMatter:{id:"tutorial-react-native",title:"Testando Apps React Native"},sidebar:"docs",previous:{title:"Testando Apps React",permalink:"/pt-BR/docs/29.5/tutorial-react"},next:{title:"Testing Web Frameworks",permalink:"/pt-BR/docs/29.5/testing-frameworks"}},c={},d=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:2},{value:"Teste Snapshot",id:"teste-snapshot",level:2},{value:"Configura\xe7\xe3o predefinida",id:"configura\xe7\xe3o-predefinida",level:2},{value:"Ambiente",id:"ambiente",level:3},{value:"personaliza\xe7\xe3o de transformIgnorePatterns",id:"personaliza\xe7\xe3o-de-transformignorepatterns",level:3},{value:"setupFiles",id:"setupfiles",level:3},{value:"moduleNameMapper",id:"modulenamemapper",level:3},{value:"Dicas",id:"dicas",level:2},{value:"Simule (mock, em ingl\xeas) m\xf3dulos nativos usando jest.mock",id:"simule-mock-em-ingl\xeas-m\xf3dulos-nativos-usando-jestmock",level:3}];function l(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",admonition:"admonition",h3:"h3",strong:"strong"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["At Facebook, we use Jest to test ",(0,a.jsx)(n.a,{href:"https://reactnative.dev/",children:"React Native"})," applications."]}),"\n",(0,a.jsxs)(n.p,{children:["Obtenha uma vis\xe3o mais profunda em como testar um app React Native de exemplo lendo a seguinte s\xe9rie: ",(0,a.jsx)(n.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-1-snapshots-come-into-play/",children:"Parte 1: Jest \u2013 Snapshot entra em jogo (em ingl\xeas)"})," e ",(0,a.jsx)(n.a,{href:"https://callstack.com/blog/testing-react-native-with-the-new-jest-part-2-redux-snapshots-for-your-actions-and-reducers/",children:"Parte 2: Jest \u2013 Snapshots Redux para suas Actions e Reducers (em ingl\xeas)"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"instala\xe7\xe3o",children:"Instala\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["A partir da vers\xe3o 0.38 de react-native, uma instala\xe7\xe3o Jest \xe9 inclu\xedda por padr\xe3o, ao executar ",(0,a.jsx)(n.code,{children:"react-native init"}),". A seguinte configura\xe7\xe3o deve ser automaticamente adicionada ao seu arquivo package.json:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  },\n  "jest": {\n    "preset": "react-native"\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Run ",(0,a.jsx)(n.code,{children:"yarn test"})," to run tests with Jest."]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["If you are upgrading your react-native application and previously used the ",(0,a.jsx)(n.code,{children:"jest-react-native"})," preset, remove the dependency from your ",(0,a.jsx)(n.code,{children:"package.json"})," file and change the preset to ",(0,a.jsx)(n.code,{children:"react-native"})," instead."]})}),"\n",(0,a.jsx)(n.h2,{id:"teste-snapshot",children:"Teste Snapshot"}),"\n",(0,a.jsxs)(n.p,{children:["Vamos criar um ",(0,a.jsx)(n.a,{href:"/pt-BR/docs/29.5/snapshot-testing",children:"teste snapshot"}),' para um pequeno componente "intro" com alguns "views" e componentes de texto e alguns estilos:']}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="Intro.js"',children:"import React, {Component} from 'react';\nimport {StyleSheet, Text, View} from 'react-native';\n\nclass Intro extends Component {\n  render() {\n    return (\n      <View style={styles.container}>\n        <Text style={styles.welcome}>Welcome to React Native!</Text>\n        <Text style={styles.instructions}>\n          This is a React Native snapshot test.\n        </Text>\n      </View>\n    );\n  }\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    alignItems: 'center',\n    backgroundColor: '#F5FCFF',\n    flex: 1,\n    justifyContent: 'center',\n  },\n  instructions: {\n    color: '#333333',\n    marginBottom: 5,\n    textAlign: 'center',\n  },\n  welcome: {\n    fontSize: 20,\n    margin: 10,\n    textAlign: 'center',\n  },\n});\n\nexport default Intro;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Agora vamos usar o renderizador de teste do React e o recurso de snapshot do Jest para interagir com o componente e capturar a sa\xedda renderizada e criar um arquivo de snapshot:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/Intro-test.js"',children:"import React from 'react';\nimport renderer from 'react-test-renderer';\nimport Intro from '../Intro';\n\ntest('renders correctly', () => {\n  const tree = renderer.create(<Intro />).toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Ao executar ",(0,a.jsx)(n.code,{children:"yarn test"})," ou ",(0,a.jsx)(n.code,{children:"jest"}),", ser\xe1 produzido um arquivo de sa\xedda como a seguir:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Intro-test.js.snap"',children:'exports[`Intro renders correctly 1`] = `\n<View\n  style={\n    Object {\n      "alignItems": "center",\n      "backgroundColor": "#F5FCFF",\n      "flex": 1,\n      "justifyContent": "center",\n    }\n  }>\n  <Text\n    style={\n      Object {\n        "fontSize": 20,\n        "margin": 10,\n        "textAlign": "center",\n      }\n    }>\n    Welcome to React Native!\n  </Text>\n  <Text\n    style={\n      Object {\n        "color": "#333333",\n        "marginBottom": 5,\n        "textAlign": "center",\n      }\n    }>\n    This is a React Native snapshot test.\n  </Text>\n</View>\n`;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Da pr\xf3xima vez que voc\xea executar os testes, a sa\xedda renderizada ser\xe1 comparada ao snapshot criado anteriormente. O snapshot deve ser comitado junto \xe0s altera\xe7\xf5es de c\xf3digo. Quando um teste de snapshot falhar, \xe9 preciso inspecionar se trata-se de uma mudan\xe7a pretendida ou n\xe3o intencional. Se a mudan\xe7a \xe9 esperada, pode-se invocar Jest com ",(0,a.jsx)(n.code,{children:"jest -u"})," para substituir o snapshot existente."]}),"\n",(0,a.jsxs)(n.p,{children:["The code for this example is available at ",(0,a.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-native",children:"examples/react-native"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"configura\xe7\xe3o-predefinida",children:"Configura\xe7\xe3o predefinida"}),"\n",(0,a.jsx)(n.p,{children:"A predefini\xe7\xe3o configura o ambiente e \xe9 muito opinativa e baseada no que tem se mostrado ser \xfatil no Facebook. Todas as op\xe7\xf5es de configura\xe7\xe3o podem ser substitu\xeddas assim como eles podem ser personalizados quando nenhuma predefini\xe7\xe3o \xe9 usada."}),"\n",(0,a.jsx)(n.h3,{id:"ambiente",children:"Ambiente"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"react-native"})," vem com uma pr\xe9-defini\xe7\xe3o Jest, ent\xe3o o campo ",(0,a.jsx)(n.code,{children:"jest.preset"})," de seu ",(0,a.jsx)(n.code,{children:"package.json"})," deve apontar para ",(0,a.jsx)(n.code,{children:"react-native"}),". A predefini\xe7\xe3o \xe9 um ambiente node que imita o ambiente de um app React Native. Porque ele n\xe3o carrega nenhum DOM ou APIs de navegador, melhora consideravelmente o tempo de inicializa\xe7\xe3o do Jest."]}),"\n",(0,a.jsx)(n.h3,{id:"personaliza\xe7\xe3o-de-transformignorepatterns",children:"personaliza\xe7\xe3o de transformIgnorePatterns"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"configuration.html#transformignorepatterns-arraystring",children:(0,a.jsx)(n.code,{children:"transformIgnorePatterns"})})," option can be used to specify which files shall be transformed by Babel. Many ",(0,a.jsx)(n.code,{children:"react-native"})," npm modules unfortunately don't pre-compile their source code before publishing."]}),"\n",(0,a.jsxs)(n.p,{children:["By default the ",(0,a.jsx)(n.code,{children:"jest-react-native"})," preset only processes the project's own source files and ",(0,a.jsx)(n.code,{children:"react-native"}),". If you have npm dependencies that have to be transformed you can customize this configuration option by including modules other than ",(0,a.jsx)(n.code,{children:"react-native"})," by grouping them and separating them with the ",(0,a.jsx)(n.code,{children:"|"})," operator:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": [\n    "node_modules/(?!(react-native|my-project|react-native-button)/)"\n  ]\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["You can test which paths would match (and thus be excluded from transformation) with a tool ",(0,a.jsx)(n.a,{href:"https://regex101.com/r/JsLIDM/1",children:"like this"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"transformIgnorePatterns"})," will exclude a file from transformation if the path matches against ",(0,a.jsx)(n.strong,{children:"any"})," pattern provided. Splitting into multiple patterns could therefore have unintended results if you are not careful. In the example below, the exclusion (also known as a negative lookahead assertion) for ",(0,a.jsx)(n.code,{children:"foo"})," and ",(0,a.jsx)(n.code,{children:"bar"})," cancel each other out:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "transformIgnorePatterns": ["node_modules/(?!foo/)", "node_modules/(?!bar/)"] // not what you want\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"setupfiles",children:"setupFiles"}),"\n",(0,a.jsxs)(n.p,{children:["Se voc\xea gostaria de fornecer configura\xe7\xe3o adicional para cada arquivo de teste, a ",(0,a.jsxs)(n.a,{href:"configuration.html#setupfiles-array",children:["op\xe7\xe3o de configura\xe7\xe3o ",(0,a.jsx)(n.code,{children:"setupFiles"})]})," pode ser usada para especificar os scripts de instala\xe7\xe3o."]}),"\n",(0,a.jsx)(n.h3,{id:"modulenamemapper",children:"moduleNameMapper"}),"\n",(0,a.jsxs)(n.p,{children:["O ",(0,a.jsxs)(n.a,{href:"configuration.html#modulenamemapper-objectstring-string--arraystring",children:[" ",(0,a.jsx)(n.code,{children:"moduleNameMapper"})]})," pode ser usado para mapear um caminho de m\xf3dulo para um m\xf3dulo diferente. Por padr\xe3o a predefini\xe7\xe3o mapeia todas as imagens para um m\xf3dulo de esbo\xe7o de imagem, mas se um m\xf3dulo n\xe3o pode ser encontrado esta op\xe7\xe3o de configura\xe7\xe3o pode ajudar:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "moduleNameMapper": {\n    "my-module.js": "<rootDir>/path/to/my-module.js"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"dicas",children:"Dicas"}),"\n",(0,a.jsx)(n.h3,{id:"simule-mock-em-ingl\xeas-m\xf3dulos-nativos-usando-jestmock",children:"Simule (mock, em ingl\xeas) m\xf3dulos nativos usando jest.mock"}),"\n",(0,a.jsxs)(n.p,{children:["A predefini\xe7\xe3o Jest interna do ",(0,a.jsx)(n.code,{children:"react-native"})," vem com algumas simula\xe7\xf5es (mocks, em ingl\xeas) padr\xe3o que s\xe3o aplicadas em um reposit\xf3rio react-native. However, some react-native components or third party components rely on native code to be rendered. Em tais casos, o sistema manual de simula\xe7\xe3o do Jest pode ajudar a simular a implementa\xe7\xe3o subjacente."]}),"\n",(0,a.jsxs)(n.p,{children:["Por exemplo, se seu c\xf3digo depende de um componente de v\xeddeo nativo de terceiros chamado ",(0,a.jsx)(n.code,{children:"react-native-video"})," conv\xe9m esbo\xe7ar ele com um simula\xe7\xe3o manual como esta:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.mock('react-native-video', () => 'Video');\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Isto ir\xe1 renderizar o componente como ",(0,a.jsx)(n.code,{children:"<Video {...props} />"})," com todas as suas propriedades no snapshot de sa\xedda. See also ",(0,a.jsx)(n.a,{href:"tutorial-react.html#snapshot-testing-with-mocks-enzyme-and-react-16",children:"caveats around Enzyme and React 16"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"\xc0s vezes voc\xea precisa fornecer uma simula\xe7\xe3o manual mais complexa. Por exemplo, se voc\xea gostaria de transmitir os tipos das propriedades ou campos est\xe1ticos de um componente nativo para uma simula\xe7\xe3o (mock, em ingl\xeas), voc\xea pode retornar um componente React diferente a partir de uma simula\xe7\xe3o atrav\xe9s deste auxiliar do jest-react-native:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.mock('path/to/MyNativeComponent', () => {\n  const mockComponent = require('react-native/jest/mockComponent');\n  return mockComponent('path/to/MyNativeComponent');\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Ou se voc\xea gostaria de criar sua pr\xf3pria simula\xe7\xe3o manual, voc\xea pode fazer algo parecido com isto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.mock('Text', () => {\n  const RealComponent = jest.requireActual('Text');\n  const React = require('react');\n  class Text extends React.Component {\n    render() {\n      return React.createElement('Text', this.props, this.props.children);\n    }\n  }\n  Text.propTypes = RealComponent.propTypes;\n  return Text;\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"Em outros casos, voc\xea pode querer simular um m\xf3dulo nativo que n\xe3o seja um componente React. A mesma t\xe9cnica pode ser aplicada. N\xf3s recomendamos inspecionar o c\xf3digo-fonte do m\xf3dulo nativo e registrar o m\xf3dulo ao executar um aplicativo react native em um dispositivo real e ent\xe3o modelar uma simula\xe7\xe3o manual ap\xf3s o m\xf3dulo real."}),"\n",(0,a.jsxs)(n.p,{children:["Se voc\xea acabar por simular os mesmos m\xf3dulos repetidamente vez ap\xf3s vez \xe9 recomend\xe1vel definir estas simula\xe7\xf5es em um arquivo separado e adicion\xe1-lo \xe0 lista de ",(0,a.jsx)(n.code,{children:"setupFiles"}),"."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(l,e)})):l(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>s});var a=t(7378);const o=a.createContext({});function s(e){const n=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||r:s(e),a.createElement(o.Provider,{value:i},n)}}}]);
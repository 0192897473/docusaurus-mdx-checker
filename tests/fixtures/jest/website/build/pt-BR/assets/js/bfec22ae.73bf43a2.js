"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[389],{2599:(e,s,n)=>{n.d(s,{Z:()=>t});n(7378);var a=n(7140);const o={tabItem:"tabItem_wHwb"};var r=n(4246);function t(e){let{children:s,hidden:n,className:t}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,t),hidden:n,children:s})}},8447:(e,s,n)=>{n.d(s,{Z:()=>y});var a=n(7378),o=n(7140),r=n(9169),t=n(3620),i=n(9749),l=n(8981),c=n(56),d=n(8796);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:o}}=e;return{value:s,label:n,attributes:a,default:o}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function h(e){let{queryString:s=!1,groupId:n}=e;const o=(0,t.k6)(),r=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(o.location.search);s.set(r,e),o.replace({...o.location,search:s.toString()})}),[r,o])]}function j(e){const{defaultValue:s,queryString:n=!1,groupId:o}=e,r=p(e),[t,l]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:r}))),[c,u]=h({queryString:n,groupId:o}),[j,f]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[o,r]=(0,d.Nk)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=c??j;return m({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var f=n(362);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=n(4246);function x(e){let{className:s,block:n,selectedValue:a,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),d=e=>{const s=e.currentTarget,n=l.indexOf(s),o=i[n].value;o!==a&&(c(s),t(o))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;s=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;s=l[n]??l[l.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},s),children:i.map((e=>{let{value:s,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:o}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==o})))})}function w(e){const s=j(e);return(0,b.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...e,...s}),(0,b.jsx)(v,{...e,...s})]})}function y(e){const s=(0,f.Z)();return(0,b.jsx)(w,{...e,children:u(e.children)},String(s))}},8997:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(4246),o=n(1670),r=n(8447),t=n(2599);const i={id:"webpack",title:"Usando com webpack"},l=void 0,c={unversionedId:"webpack",id:"version-29.6/webpack",title:"Usando com webpack",description:"Jest pode ser usado em projetos que usam webpack para gerenciar assets, estilos e compila\xe7\xe3o. webpack de fato oferece alguns desafios \xfanicos sobre outras ferramentas, pois integra-se diretamente com sua aplica\xe7\xe3o para permitir o gerenciamento de estilos, assets como imagens e fontes, juntamente com o ecossistema expansivo de ferramentas e linguagens para ser compiladas em JavaScript.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/Webpack.md",sourceDirName:".",slug:"/webpack",permalink:"/pt-BR/docs/webpack",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"webpack",title:"Usando com webpack"},sidebar:"docs",previous:{title:"M\xf3dulos ECMAScript",permalink:"/pt-BR/docs/ecmascript-modules"},next:{title:"Using with puppeteer",permalink:"/pt-BR/docs/puppeteer"}},d={},u=[{value:"Um exemplo de webpack",id:"um-exemplo-de-webpack",level:2},{value:"Manipula\xe7\xe3o de assets est\xe1ticos",id:"manipula\xe7\xe3o-de-assets-est\xe1ticos",level:3},{value:"Simulando CSS Modules",id:"simulando-css-modules",level:3},{value:"Configurando Jest para encontrar nossos arquivos",id:"configurando-jest-para-encontrar-nossos-arquivos",level:3},{value:"Usando com webpack",id:"usando-com-webpack",level:2}];function p(e){const s=Object.assign({p:"p",a:"a",em:"em",h2:"h2",pre:"pre",code:"code",h3:"h3",admonition:"admonition"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["Jest pode ser usado em projetos que usam ",(0,a.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," para gerenciar assets, estilos e compila\xe7\xe3o. webpack ",(0,a.jsx)(s.em,{children:"de fato"})," oferece alguns desafios \xfanicos sobre outras ferramentas, pois integra-se diretamente com sua aplica\xe7\xe3o para permitir o gerenciamento de estilos, assets como imagens e fontes, juntamente com o ecossistema expansivo de ferramentas e linguagens para ser compiladas em JavaScript."]}),"\n",(0,a.jsx)(s.h2,{id:"um-exemplo-de-webpack",children:"Um exemplo de webpack"}),"\n",(0,a.jsx)(s.p,{children:"Vamos come\xe7ar com um tipo comum de arquivo de configura\xe7\xe3o webpack e traduzi-lo para uma instala\xe7\xe3o de Jest."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="webpack.config.js"',children:"module.exports = {\n  module: {\n    rules: [\n      {\n        test: /\\.jsx?$/,\n        exclude: ['node_modules'],\n        use: ['babel-loader'],\n      },\n      {\n        test: /\\.css$/,\n        use: ['style-loader', 'css-loader'],\n      },\n      {\n        test: /\\.gif$/,\n        type: 'asset/inline',\n      },\n      {\n        test: /\\.(ttf|eot|svg)$/,\n        type: 'asset/resource',\n      },\n    ],\n  },\n  resolve: {\n    alias: {\n      config$: './configs/app-config.js',\n      react: './vendor/react-master',\n    },\n    extensions: ['.js', '.jsx'],\n    modules: [\n      'node_modules',\n      'bower_components',\n      'shared',\n      '/shared/vendor/modules',\n    ],\n  },\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["If you have JavaScript files that are transformed by Babel, you can ",(0,a.jsx)(s.a,{href:"/pt-BR/docs/getting-started#using-babel",children:"enable support for Babel"})," by installing the ",(0,a.jsx)(s.code,{children:"babel-jest"})," plugin. Non-Babel JavaScript transformations can be handled with Jest's ",(0,a.jsx)(s.a,{href:"/pt-BR/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,a.jsx)(s.code,{children:"transform"})})," config option."]}),"\n",(0,a.jsx)(s.h3,{id:"manipula\xe7\xe3o-de-assets-est\xe1ticos",children:"Manipula\xe7\xe3o de assets est\xe1ticos"}),"\n",(0,a.jsx)(s.p,{children:"Em seguida, vamos configurar o Jest para manipular elegantemente arquivos de assets, tais como folhas de estilo e imagens. Normalmente, esses arquivos n\xe3o s\xe3o particularmente \xfateis em testes, por isso podemos com seguran\xe7a fazer a simula\xe7\xe3o (mock, em ingl\xeas) deles. No entanto, se voc\xea estiver usando CSS Modules \xe9 melhor simular (mock, em ingl\xeas) de um proxy para suas pesquisas className."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n  },\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"E os pr\xf3prios arquivos de simula\xe7\xe3o (mock, em ingl\xeas):"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/styleMock.js"',children:"module.exports = {};\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="__mocks__/fileMock.js"',children:"module.exports = 'test-file-stub';\n"})}),"\n",(0,a.jsx)(s.h3,{id:"simulando-css-modules",children:"Simulando CSS Modules"}),"\n",(0,a.jsxs)(s.p,{children:["Voc\xea pode usar um ",(0,a.jsx)(s.a,{href:"https://github.com/keyanzhang/identity-obj-proxy",children:"Proxy ES6"})," para simular (mock, em ingl\xeas) ",(0,a.jsx)(s.a,{href:"https://github.com/css-modules/css-modules",children:"CSS Modules"}),":"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(t.Z,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev identity-obj-proxy\n"})})}),(0,a.jsx)(t.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev identity-obj-proxy\n"})})}),(0,a.jsx)(t.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev identity-obj-proxy\n"})})})]}),"\n",(0,a.jsxs)(s.p,{children:["Em seguida, todas as suas pesquisas className no objeto de estilos ser\xe3o retornadas como s\xe3o (por exemplo, ",(0,a.jsx)(s.code,{children:"styles.foobar = = = 'foobar'"}),"). Isto \xe9 muito \xfatil para ",(0,a.jsx)(s.a,{href:"/pt-BR/docs/snapshot-testing",children:"Teste de Snapshot"})," em React."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js (for CSS Modules)"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/__mocks__/fileMock.js',\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["If ",(0,a.jsx)(s.code,{children:"moduleNameMapper"})," cannot fulfill your requirements, you can use Jest's ",(0,a.jsx)(s.a,{href:"/pt-BR/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object",children:(0,a.jsx)(s.code,{children:"transform"})})," config option to specify how assets are transformed. For example, a transformer that returns the basename of a file (such that ",(0,a.jsx)(s.code,{children:"require('logo.jpg');"})," returns ",(0,a.jsx)(s.code,{children:"'logo'"}),") can be written as:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="fileTransformer.js"',children:"const path = require('path');\n\nmodule.exports = {\n  process(sourceText, sourcePath, options) {\n    return {\n      code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,\n    };\n  },\n};\n"})}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js (for custom transformers and CSS Modules)"',children:"module.exports = {\n  moduleNameMapper: {\n    '\\\\.(css|less)$': 'identity-obj-proxy',\n  },\n  transform: {\n    '\\\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':\n      '<rootDir>/fileTransformer.js',\n  },\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"N\xf3s dissemos para Jest ignorar arquivos que correspondam a uma folha de estilo ou extens\xe3o de imagem, e em vez disso, exigem nossos arquivos de simula\xe7\xe3o (mock, em ingl\xeas). Voc\xea pode ajustar a express\xe3o regular para coincidir com os tipos de arquivo que sua configura\xe7\xe3o do webpack lida."}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:["Lembre-se de incluir o transformador padr\xe3o ",(0,a.jsx)(s.code,{children:"babel-jest"})," explicitamente, se desejar us\xe1-lo com pr\xe9-processadores de c\xf3digo adicionais:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'"transform": {\n  "\\\\.[jt]sx?$": "babel-jest",\n  "\\\\.css$": "some-css-transformer",\n}\n'})})]}),"\n",(0,a.jsx)(s.h3,{id:"configurando-jest-para-encontrar-nossos-arquivos",children:"Configurando Jest para encontrar nossos arquivos"}),"\n",(0,a.jsxs)(s.p,{children:["Agora que Jest sabe como processar nossos arquivos, precisamos inform\xe1-lo como ",(0,a.jsx)(s.em,{children:"encontrar"})," eles. For webpack's ",(0,a.jsx)(s.code,{children:"modules"}),", and ",(0,a.jsx)(s.code,{children:"extensions"})," options there are direct analogs in Jest's ",(0,a.jsx)(s.code,{children:"moduleDirectories"})," and ",(0,a.jsx)(s.code,{children:"moduleFileExtensions"})," options."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n"})}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.code,{children:"<rootDir>"})," is a special token that gets replaced by Jest with the root of your project. Most of the time this will be the folder where your ",(0,a.jsx)(s.code,{children:"package.json"})," is located unless you specify a custom ",(0,a.jsx)(s.a,{href:"/pt-BR/docs/configuration#rootdir-string",children:(0,a.jsx)(s.code,{children:"rootDir"})})," option in your configuration."]})}),"\n",(0,a.jsxs)(s.p,{children:["Similarly, Jest's counterpart for Webpack's ",(0,a.jsx)(s.code,{children:"resolve.roots"})," (an alternative to setting ",(0,a.jsx)(s.code,{children:"NODE_PATH"}),") is ",(0,a.jsx)(s.code,{children:"modulePaths"}),"."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n  },\n};\n"})}),"\n",(0,a.jsxs)(s.p,{children:["And finally, we have to handle the webpack ",(0,a.jsx)(s.code,{children:"alias"}),". For that, we can make use of the ",(0,a.jsx)(s.code,{children:"moduleNameMapper"})," option again."]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",metastring:'title="jest.config.js"',children:"module.exports = {\n  modulePaths: ['/shared/vendor/modules'],\n  moduleFileExtensions: ['js', 'jsx'],\n  moduleDirectories: ['node_modules', 'bower_components', 'shared'],\n\n  moduleNameMapper: {\n    '\\\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',\n    '\\\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',\n\n    '^react(.*)$': '<rootDir>/vendor/react-master$1',\n    '^config$': '<rootDir>/configs/app-config.js',\n  },\n};\n"})}),"\n",(0,a.jsx)(s.p,{children:"\xc9 isso! webpack \xe9 uma ferramenta complexa e flex\xedvel, ent\xe3o voc\xea pode ter que fazer alguns ajustes para atender \xe0s necessidades espec\xedficas do seu aplicativo. Felizmente, na maioria dos projetos, Jest deve ser flex\xedvel o suficiente para lidar com sua configura\xe7\xe3o do webpack."}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["For more complex webpack configurations, you may also want to investigate projects such as: ",(0,a.jsx)(s.a,{href:"https://github.com/istarkov/babel-plugin-webpack-loaders",children:"babel-plugin-webpack-loaders"}),"."]})}),"\n",(0,a.jsx)(s.h2,{id:"usando-com-webpack",children:"Usando com webpack"}),"\n",(0,a.jsxs)(s.p,{children:["In addition to installing ",(0,a.jsx)(s.code,{children:"babel-jest"})," as described earlier, you'll need to add ",(0,a.jsx)(s.code,{children:"@babel/preset-env"})," like so:"]}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(t.Z,{value:"npm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-env\n"})})}),(0,a.jsx)(t.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-env\n"})})}),(0,a.jsx)(t.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-env\n"})})})]}),"\n",(0,a.jsx)(s.p,{children:"Then, you'll want to configure Babel as follows:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",metastring:'title=".babelrc"',children:'{\n  "presets": ["@babel/preset-env"]\n}\n'})}),"\n",(0,a.jsx)(s.admonition,{type:"tip",children:(0,a.jsxs)(s.p,{children:["Jest caches files to speed up test execution. If you updated ",(0,a.jsx)(s.code,{children:".babelrc"})," and Jest is not working as expected, try clearing the cache by running ",(0,a.jsx)(s.code,{children:"jest --clearCache"}),"."]})}),"\n",(0,a.jsxs)(s.admonition,{type:"tip",children:[(0,a.jsxs)(s.p,{children:["If you use dynamic imports (",(0,a.jsx)(s.code,{children:"import('some-file.js').then(module => ...)"}),"), you need to enable the ",(0,a.jsx)(s.code,{children:"dynamic-import-node"})," plugin."]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",metastring:'title=".babelrc"',children:'{\n  "presets": [["env", {"modules": false}]],\n\n  "plugins": ["syntax-dynamic-import"],\n\n  "env": {\n    "test": {\n      "plugins": ["dynamic-import-node"]\n    }\n  }\n}\n'})})]}),"\n",(0,a.jsxs)(s.p,{children:["For an example of how to use Jest with webpack with React, you can view one ",(0,a.jsx)(s.a,{href:"https://github.com/jenniferabowd/jest_webpack_example",children:"here"}),"."]})]})}const m=function(e={}){const{wrapper:s}=Object.assign({},(0,o.ah)(),e.components);return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>i,ah:()=>r});var a=n(7378);const o=a.createContext({});function r(e){const s=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const t={};function i({components:e,children:s,disableParentContext:n}){let i;return i=n?"function"==typeof e?e({}):e||t:r(e),a.createElement(o.Provider,{value:i},s)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7472],{2599:(e,s,a)=>{a.d(s,{Z:()=>o});a(7378);var n=a(7140);const r={tabItem:"tabItem_wHwb"};var t=a(4246);function o(e){let{children:s,hidden:a,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a,children:s})}},8447:(e,s,a)=>{a.d(s,{Z:()=>w});var n=a(7378),r=a(7140),t=a(9169),o=a(3620),i=a(9749),l=a(8981),c=a(56),d=a(8796);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:a}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:a,attributes:n,default:r}}=e;return{value:s,label:a,attributes:n,default:r}}))}(a);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,a])}function h(e){let{value:s,tabValues:a}=e;return a.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:a}=e;const r=(0,o.k6)(),t=function(e){let{queryString:s=!1,groupId:a}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:s,groupId:a});return[(0,l._X)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function j(e){const{defaultValue:s,queryString:a=!1,groupId:r}=e,t=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[c,u]=m({queryString:a,groupId:r}),[j,x]=function(e){let{groupId:s}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,d.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&t.set(e)}),[a,t])]}({groupId:r}),b=(()=>{const e=c??j;return h({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,t]),tabValues:t}}var x=a(362);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=a(4246);function v(e){let{className:s,block:a,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const s=e.currentTarget,a=l.indexOf(s),r=i[a].value;r!==n&&(c(s),o(r))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;s=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;s=l[a]??l[l.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},s),children:i.map((e=>{let{value:s,label:a,attributes:t}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:u,onClick:d,...t,className:(0,r.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":n===s}),children:a??s},s)}))})}function f(e){let{lazy:s,children:a,selectedValue:r}=e;const t=(Array.isArray(a)?a:[a]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=j(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...s}),(0,g.jsx)(f,{...e,...s})]})}function w(e){const s=(0,x.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(s))}},5398:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(4246),r=a(1670),t=a(8447),o=a(2599);const i={id:"getting-started",title:"Iniciando"},l=void 0,c={unversionedId:"getting-started",id:"version-29.6/getting-started",title:"Iniciando",description:"Instale Jest usando seu gerenciador de pacotes favorito:",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/GettingStarted.md",sourceDirName:".",slug:"/getting-started",permalink:"/pt-BR/docs/getting-started",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"getting-started",title:"Iniciando"},sidebar:"docs",next:{title:"Usando Matchers",permalink:"/pt-BR/docs/using-matchers"}},d={},u=[{value:"Executando a partir da linha de comando",id:"executando-a-partir-da-linha-de-comando",level:2},{value:"Configura\xe7\xe3o adicional",id:"configura\xe7\xe3o-adicional",level:2},{value:"Gerando um arquivo de configura\xe7\xe3o b\xe1sico",id:"gerando-um-arquivo-de-configura\xe7\xe3o-b\xe1sico",level:3},{value:"Usando Babel",id:"usando-babel",level:3},{value:"Usando webpack",id:"usando-webpack",level:3},{value:"Usando Vite",id:"usando-vite",level:3},{value:"Usando Parcel",id:"usando-parcel",level:3},{value:"Usando TypeScript",id:"usando-typescript",level:3},{value:"Via <code>babel</code>",id:"via-babel",level:4},{value:"Via <code>ts-jest</code>",id:"via-ts-jest",level:4},{value:"Defini\xe7\xf5es de tipo",id:"defini\xe7\xf5es-de-tipo",level:4}];function p(e){const s=Object.assign({p:"p",pre:"pre",code:"code",strong:"strong",a:"a",h2:"h2",h3:"h3",admonition:"admonition",h4:"h4"},(0,r.ah)(),e.components),{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Instale Jest usando seu gerenciador de pacotes favorito:"}),"\n",(0,n.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev jest\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add --dev jest\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev jest\n"})})})]}),"\n",(0,n.jsxs)(s.p,{children:["Vamos come\xe7ar por escrever um teste para uma fun\xe7\xe3o hipot\xe9tica que soma dois n\xfameros. Primeiro, crie um arquivo ",(0,n.jsx)(s.code,{children:"sum.js"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Em seguida, crie um arquivo chamado ",(0,n.jsx)(s.code,{children:"sum.test.js"}),". Este ir\xe1 conter o nosso teste real:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"const sum = require('./sum');\n\ntest('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Adicione a seguinte se\xe7\xe3o ao seu ",(0,n.jsx)(s.code,{children:"package.json"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Por fim, execute ",(0,n.jsx)(s.code,{children:"yarn test"})," ou ",(0,n.jsx)(s.code,{children:"npm run test"})," e o Jest ir\xe1 imprimir a seguinte mensagem:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Voc\xea escreveu com sucesso seu primeiro teste usando Jest!"})}),"\n",(0,n.jsxs)(s.p,{children:["Este teste usou ",(0,n.jsx)(s.code,{children:"expect"})," e ",(0,n.jsx)(s.code,{children:"toBe"})," para testar que dois valores eram exatamente id\xeanticos. Para saber mais sobre as outras coisas que Jest pode testar, consulte ",(0,n.jsx)(s.a,{href:"/pt-BR/docs/using-matchers",children:"Usando Matchers"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"executando-a-partir-da-linha-de-comando",children:"Executando a partir da linha de comando"}),"\n",(0,n.jsxs)(s.p,{children:["Voc\xea pode executar Jest diretamente da CLI (se ele estiver dispon\xedvel globalmente em seu ",(0,n.jsx)(s.code,{children:"PATH"}),", por exemplo: ",(0,n.jsx)(s.code,{children:"yarn global add jest"})," ou ",(0,n.jsx)(s.code,{children:"npm install -g jest"}),") com uma variedade de comandos \xfateis."]}),"\n",(0,n.jsxs)(s.p,{children:["Aqui vemos como executar Jest em arquivos que correspondam ao ",(0,n.jsx)(s.code,{children:"my-test"}),", usando ",(0,n.jsx)(s.code,{children:"config.json"})," como um arquivo de configura\xe7\xe3o e exibir uma notifica\xe7\xe3o nativa no Sistema Operacional ap\xf3s a execu\xe7\xe3o:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"jest my-test --notify --config=config.json\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Se voc\xea gostaria de aprender mais sobre como executar ",(0,n.jsx)(s.code,{children:"jest"})," atrav\xe9s da linha de comando, d\xea uma olhada na p\xe1gina ",(0,n.jsx)(s.a,{href:"/pt-BR/docs/cli",children:" Op\xe7\xf5es de CLI Jest"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"configura\xe7\xe3o-adicional",children:"Configura\xe7\xe3o adicional"}),"\n",(0,n.jsx)(s.h3,{id:"gerando-um-arquivo-de-configura\xe7\xe3o-b\xe1sico",children:"Gerando um arquivo de configura\xe7\xe3o b\xe1sico"}),"\n",(0,n.jsx)(s.p,{children:"Com base no seu projeto, o Jest far\xe1 algumas perguntas e ir\xe1 criar um arquivo b\xe1sico de configura\xe7\xe3o com uma breve descri\xe7\xe3o para cada op\xe7\xe3o:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"jest --init\n"})}),"\n",(0,n.jsx)(s.h3,{id:"usando-babel",children:"Usando Babel"}),"\n",(0,n.jsxs)(s.p,{children:["Para usar ",(0,n.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),", instale as depend\xeancias necess\xe1rias:"]}),"\n",(0,n.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add --dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev babel-jest @babel/core @babel/preset-env\n"})})})]}),"\n",(0,n.jsxs)(s.p,{children:["Configure o Babel para marcar a sua vers\xe3o atual do Node criando um arquivo ",(0,n.jsx)(s.code,{children:"babel.config.js"})," na raiz do seu projeto:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The ideal configuration for Babel will depend on your project. See ",(0,n.jsx)(s.a,{href:"https://babeljs.io/docs/en/",children:"Babel's docs"})," for more details."]}),"\n",(0,n.jsxs)(a,{children:[(0,n.jsx)("summary",{markdown:"span",children:(0,n.jsx)("strong",{children:(0,n.jsx)(s.strong,{children:"Making your Babel config jest-aware"})})}),(0,n.jsxs)(s.p,{children:["Jest definir\xe1 ",(0,n.jsx)(s.code,{children:"process.env.NODE_ENV"})," para ",(0,n.jsx)(s.code,{children:"'test'"})," se n\xe3o estiver definido para outra coisa. Voc\xea pode usar isso em sua configura\xe7\xe3o para configurar condicionalmente apenas a compila\xe7\xe3o necess\xe1ria para Jest, por exemplo."]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = api => {\n  const isTest = api.env('test');\n  // You can use isTest to determine what presets and plugins to use.\n\n  return {\n    // ...\n  };\n};\n"})}),(0,n.jsxs)(s.admonition,{type:"note",children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"babel-jest"})," \xe9 instalado automaticamente quando instalar Jest e ir\xe1 automaticamente transformar arquivos caso uma configura\xe7\xe3o de babel existir em seu projeto. Para evitar esse comportamento, voc\xea pode redefinir explicitamente a op\xe7\xe3o de configura\xe7\xe3o de ",(0,n.jsx)(s.code,{children:"transform"}),":"]}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {},\n};\n"})})]})]}),"\n",(0,n.jsx)(s.h3,{id:"usando-webpack",children:"Usando webpack"}),"\n",(0,n.jsxs)(s.p,{children:["Jest pode ser usado em projetos que usam ",(0,n.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," para gerenciar assets, estilos e compila\xe7\xe3o. webpack oferece alguns desafios \xfanicos em rela\xe7\xe3o \xe0 outras ferramentas. Consulte o ",(0,n.jsx)(s.a,{href:"/pt-BR/docs/webpack",children:"guia do webpack"})," para come\xe7ar."]}),"\n",(0,n.jsx)(s.h3,{id:"usando-vite",children:"Usando Vite"}),"\n",(0,n.jsxs)(s.p,{children:["Jest pode ser utilizado em projetos que usam ",(0,n.jsx)(s.a,{href:"https://vitejs.dev/",children:"vite"})," para servir c\xf3digo-fonte a partir de ESM nativo, fornecendo algumas ferramentas do frontend, vite \xe9 uma ferramenta opinativa e oferece alguns workflows diferenciados. Jest n\xe3o \xe9 totalmente suportado pelo vite devido a como o ",(0,n.jsx)(s.a,{href:"https://github.com/vitejs/vite/issues/1955#issuecomment-776009094",children:"sistema de plugins"})," do vite funciona, mas h\xe1 alguns exemplos para a integra\xe7\xe3o de primeira classe usando ",(0,n.jsx)(s.code,{children:"vite-jest"}),". J\xe1 que isto n\xe3o \xe9 totalmente suportado, voc\xea deve ler tamb\xe9m a ",(0,n.jsxs)(s.a,{href:"https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests",children:["limita\xe7\xe3o do ",(0,n.jsx)(s.code,{children:"vite-jest"})]}),". Consulte o ",(0,n.jsx)(s.a,{href:"https://vitejs.dev/guide/",children:"guia de vite"})," para come\xe7ar."]}),"\n",(0,n.jsx)(s.h3,{id:"usando-parcel",children:"Usando Parcel"}),"\n",(0,n.jsxs)(s.p,{children:["Jest pode ser usado em projetos que usam ",(0,n.jsx)(s.a,{href:"https://parceljs.org/",children:"parcel-bundler"})," para gerenciar ativos, estilos, e compila\xe7\xe3o semelhante ao webpack. Parcel requer configura\xe7\xe3o zero. Veja a ",(0,n.jsx)(s.a,{href:"https://parceljs.org/docs/",children:"documenta\xe7\xe3o"})," oficial para come\xe7ar."]}),"\n",(0,n.jsx)(s.h3,{id:"usando-typescript",children:"Usando TypeScript"}),"\n",(0,n.jsxs)(s.h4,{id:"via-babel",children:["Via ",(0,n.jsx)(s.code,{children:"babel"})]}),"\n",(0,n.jsxs)(s.p,{children:["O Jest suporta TypeScript, via Babel. Primeiro certifique-se que voc\xea seguir as instru\xe7\xf5es em ",(0,n.jsx)(s.a,{href:"#using-babel",children:"usando o Babel"})," acima. Em seguida, instale o ",(0,n.jsx)(s.code,{children:"@babel/preset-typescript"}),":"]}),"\n",(0,n.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-typescript\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-typescript\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-typescript\n"})})})]}),"\n",(0,n.jsxs)(s.p,{children:["Ent\xe3o adicione o ",(0,n.jsx)(s.code,{children:"@babel/preset-typescript"})," \xe0 lista de presets em seu ",(0,n.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["No entanto, h\xe1 algumas ",(0,n.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"ressalvas"})," para usar TypeScript com Babel. Como o suporte para TypeScript em Babel \xe9 puramente transpila\xe7\xe3o, Jest n\xe3o ir\xe1 checar seus testes enquanto eles s\xe3o executados. Se voc\xea quiser isso, voc\xea pode usar ",(0,n.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," em vez disso. ou apenas execute o compilador TypeScript ",(0,n.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"tsc"})," separadamente (ou como parte de seu processo de compila\xe7\xe3o)."]}),"\n",(0,n.jsxs)(s.h4,{id:"via-ts-jest",children:["Via ",(0,n.jsx)(s.code,{children:"ts-jest"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," is a TypeScript preprocessor with source map support for Jest that lets you use Jest to test projects written in TypeScript."]}),"\n",(0,n.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev ts-jest\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add --dev ts-jest\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev ts-jest\n"})})})]}),"\n",(0,n.jsxs)(s.p,{children:["Para que Jest interprete TypeScript com ",(0,n.jsx)(s.code,{children:"ts-jest"}),", talvez voc\xea precise criar um arquivo ",(0,n.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file",children:"de configura\xe7\xe3o"}),"."]}),"\n",(0,n.jsx)(s.h4,{id:"defini\xe7\xf5es-de-tipo",children:"Defini\xe7\xf5es de tipo"}),"\n",(0,n.jsxs)(s.p,{children:["Existem duas maneiras de ter ",(0,n.jsx)(s.a,{href:"/pt-BR/docs/api",children:"Jest global APIs"})," tipado para arquivos de teste escritos em TypeScript."]}),"\n",(0,n.jsxs)(s.p,{children:["Voc\xea pode usar as defini\xe7\xf5es de tipo que j\xe1 vem com o Jest e ser\xe3o atualizadas a cada vez que voc\xea atualizar o Jest. Instale o pacote ",(0,n.jsx)(s.code,{children:"@jest/globals"}),":"]}),"\n",(0,n.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @jest/globals\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @jest/globals\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @jest/globals\n"})})})]}),"\n",(0,n.jsx)(s.p,{children:"E importe as APIs de:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",metastring:'title="sum.test.ts"',children:"import {describe, expect, test} from '@jest/globals';\nimport {sum} from './sum';\n\ndescribe('sum module', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});\n"})}),"\n",(0,n.jsx)(s.admonition,{type:"tip",children:(0,n.jsxs)(s.p,{children:["Veja a documenta\xe7\xe3o de uso adicional de ",(0,n.jsxs)(s.a,{href:"/pt-BR/docs/api#typescript-usage",children:[(0,n.jsx)(s.code,{children:"describe.each"}),"/",(0,n.jsx)(s.code,{children:"test.each"})]})," e ",(0,n.jsx)(s.a,{href:"/pt-BR/docs/mock-function-api#typescript-usage",children:(0,n.jsx)(s.code,{children:"fun\xe7\xf5es de simula\xe7\xe3o (mock, em ingl\xeas)"})}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:["Ou voc\xea pode escolher instalar o pacote ",(0,n.jsx)(s.a,{href:"https://npmjs.com/package/@types/jest",children:(0,n.jsx)(s.code,{children:"@types/jest"})}),". Ele fornece tipos para os globais do Jest sem necessidade de import\xe1-los."]}),"\n",(0,n.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(o.Z,{value:"npm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @types/jest\n"})})}),(0,n.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @types/jest\n"})})}),(0,n.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @types/jest\n"})})})]}),"\n",(0,n.jsx)(s.admonition,{type:"info",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"@types/jest"})," is a third party library maintained at ",(0,n.jsx)(s.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest",children:"DefinitelyTyped"}),", hence the latest Jest features or versions may not be covered yet. Tente coincidir com vers\xf5es do Jest e ",(0,n.jsx)(s.code,{children:"@types/jest"})," o mais pr\xf3ximo poss\xedvel. Por exemplo, se voc\xea estiver usando a vers\xe3o 27.4.0 do ",(0,n.jsx)(s.code,{children:"jest"}),", ent\xe3o instalar ",(0,n.jsx)(s.code,{children:"27.4.x"})," de ",(0,n.jsx)(s.code,{children:"@types/jest"})," \xe9 ideal."]})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(p,e)})):p(e)}},1670:(e,s,a)=>{a.d(s,{Zo:()=>i,ah:()=>t});var n=a(7378);const r=n.createContext({});function t(e){const s=n.useContext(r);return n.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function i({components:e,children:s,disableParentContext:a}){let i;return i=a?"function"==typeof e?e({}):e||o:t(e),n.createElement(r.Provider,{value:i},s)}}}]);
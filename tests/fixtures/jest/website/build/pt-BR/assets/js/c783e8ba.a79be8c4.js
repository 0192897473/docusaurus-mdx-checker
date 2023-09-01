"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4624],{2599:(e,n,s)=>{s.d(n,{Z:()=>a});s(7378);var t=s(7140);const o={tabItem:"tabItem_wHwb"};var r=s(4246);function a(e){let{children:n,hidden:s,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.Z)(o.tabItem,a),hidden:s,children:n})}},8447:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(7378),o=s(7140),r=s(9169),a=s(3620),i=s(9749),c=s(8981),l=s(56),d=s(8796);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:o}}=e;return{value:n,label:s,attributes:t,default:o}}))}(s);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const o=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:o}=e,r=h(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[l,u]=m({queryString:s,groupId:o}),[g,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,d.Nk)(s);return[o,(0,t.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:o}),j=(()=>{const e=l??g;return p({value:e,tabValues:r})?e:null})();(0,i.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),b(e)}),[u,b,r]),tabValues:r}}var b=s(362);const j={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var x=s(4246);function f(e){let{className:n,block:s,selectedValue:t,selectValue:a,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,r.o5)(),d=e=>{const n=e.currentTarget,s=c.indexOf(n),o=i[s].value;o!==t&&(l(n),a(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,o.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:o}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(v,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},3946:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=s(4246),o=s(1670),r=s(8447),a=s(2599);const i={id:"troubleshooting",title:"Resolu\xe7\xe3o de Problemas"},c=void 0,l={unversionedId:"troubleshooting",id:"version-29.5/troubleshooting",title:"Resolu\xe7\xe3o de Problemas",description:"H\xe3, algo deu errado? Use este guia para resolver problemas com Jest.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.5/Troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/pt-BR/docs/29.5/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.5",frontMatter:{id:"troubleshooting",title:"Resolu\xe7\xe3o de Problemas"},sidebar:"docs",previous:{title:"Migrando para o Jest",permalink:"/pt-BR/docs/29.5/migration-guide"},next:{title:"Arquitetura",permalink:"/pt-BR/docs/29.5/architecture"}},d={},u=[{value:"Testes est\xe3o falhando e voc\xea n\xe3o sabe por que",id:"testes-est\xe3o-falhando-e-voc\xea-n\xe3o-sabe-por-que",level:2},{value:"Depura\xe7\xe3o no VS Code",id:"depura\xe7\xe3o-no-vs-code",level:2},{value:"Depura\xe7\xe3o no WebStorm",id:"depura\xe7\xe3o-no-webstorm",level:2},{value:"Problemas de Cache",id:"problemas-de-cache",level:2},{value:"Promessas n\xe3o resolvidas",id:"promessas-n\xe3o-resolvidas",level:2},{value:"Problemas com Watchman",id:"problemas-com-watchman",level:2},{value:"Testes s\xe3o extremamente lentos no Docker e/ou servidor de Integra\xe7\xe3o Cont\xednua (CI, Continuous Integration).",id:"testes-s\xe3o-extremamente-lentos-no-docker-eou-servidor-de-integra\xe7\xe3o-cont\xednua-ci-continuous-integration",level:2},{value:"<code>coveragePathIgnorePatterns</code> parece n\xe3o ter nenhum efeito.",id:"coveragepathignorepatterns-parece-n\xe3o-ter-nenhum-efeito",level:2},{value:"Defining Tests",id:"defining-tests",level:2},{value:"Ainda sem resolu\xe7\xe3o?",id:"ainda-sem-resolu\xe7\xe3o",level:2}];function h(e){const n=Object.assign({p:"p",h2:"h2",a:"a",code:"code",pre:"pre",admonition:"admonition",em:"em"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"H\xe3, algo deu errado? Use este guia para resolver problemas com Jest."}),"\n",(0,t.jsx)(n.h2,{id:"testes-est\xe3o-falhando-e-voc\xea-n\xe3o-sabe-por-que",children:"Testes est\xe3o falhando e voc\xea n\xe3o sabe por que"}),"\n",(0,t.jsxs)(n.p,{children:["Try using the ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"debugging support"})," built into Node. Coloque uma instru\xe7\xe3o ",(0,t.jsx)(n.code,{children:"debugger;"})," em qualquer um dos seus testes e em seguida, no diret\xf3rio do seu projeto, execute:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,t.jsx)(n.p,{children:"This will run Jest in a Node process that an external debugger can connect to. Note that the process will pause until the debugger has connected to it."}),"\n",(0,t.jsxs)(n.p,{children:["To debug in Google Chrome (or any Chromium-based browser), open your browser and go to ",(0,t.jsx)(n.code,{children:"chrome://inspect"}),' and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to. Click on the address displayed in the terminal (usually something like ',(0,t.jsx)(n.code,{children:"localhost:9229"}),") after running the above command, and you will be able to debug Jest using Chrome's DevTools."]}),"\n",(0,t.jsxs)(n.p,{children:['The Chrome Developer Tools will be displayed, and a breakpoint will be set at the first line of the Jest CLI script (this is done to give you time to open the developer tools and to prevent Jest from executing before you have time to do so). Clique no bot\xe3o que se parece com um bot\xe3o "play" no lado superior direito da tela para continuar a execu\xe7\xe3o. Quando Jest executa o teste que cont\xe9m a instru\xe7\xe3o ',(0,t.jsx)(n.code,{children:"debugger"}),", a execu\xe7\xe3o far\xe1 uma pausa e voc\xea pode examinar o escopo atual e a pilha de chamada."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"--runInBand"})," cli option makes sure Jest runs the test in the same process rather than spawning processes for individual tests. Normalmente Jest paraleliza execu\xe7\xe3o de testes atrav\xe9s de processos, mas \xe9 dif\xedcil de depurar v\xe1rios processos ao mesmo tempo."]})}),"\n",(0,t.jsx)(n.h2,{id:"depura\xe7\xe3o-no-vs-code",children:"Depura\xe7\xe3o no VS Code"}),"\n",(0,t.jsxs)(n.p,{children:["There are multiple ways to debug Jest tests with ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com",children:"Visual Studio Code's"})," built-in ",(0,t.jsx)(n.a,{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging",children:"debugger"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Para anexar o depurador embutido, execute os testes, como foi mencionado anteriormente:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"node --inspect-brk node_modules/.bin/jest --runInBand [any other arguments here]\nor on Windows\nnode --inspect-brk ./node_modules/jest/bin/jest.js --runInBand [any other arguments here]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Em seguida, anexe depurador do VS Code usando a configura\xe7\xe3o ",(0,t.jsx)(n.code,{children:"launch.json"})," a seguir:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "attach",\n      "name": "Attach",\n      "port": 9229\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Para iniciar automaticamente e anexar a um processo executando os seus testes, use a seguinte configura\xe7\xe3o:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/.bin/jest",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"or the following for Windows:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug Jest Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeArgs": [\n        "--inspect-brk",\n        "${workspaceRoot}/node_modules/jest/bin/jest.js",\n        "--runInBand"\n      ],\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Se voc\xea estiver usando o ",(0,t.jsxs)(n.a,{href:"https://github.com/facebookincubator/create-react-app",children:[" ",(0,t.jsx)(n.code,{children:"create-react-app"})]})," do Facebook, voc\xea pode depurar seus testes Jesta com a seguinte configura\xe7\xe3o:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "name": "Debug CRA Tests",\n      "type": "node",\n      "request": "launch",\n      "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/react-scripts",\n      "args": [\n        "test",\n        "--runInBand",\n        "--no-cache",\n        "--env=jsdom",\n        "--watchAll=false"\n      ],\n      "cwd": "${workspaceRoot}",\n      "console": "integratedTerminal",\n      "internalConsoleOptions": "neverOpen"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Mais informa\xe7\xf5es sobre depura\xe7\xe3o do Node podem ser encontradas ",(0,t.jsx)(n.a,{href:"https://nodejs.org/api/debugger.html",children:"aqui"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"depura\xe7\xe3o-no-webstorm",children:"Depura\xe7\xe3o no WebStorm"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://www.jetbrains.com/webstorm/",children:"WebStorm"})," has built-in support for Jest. Read ",(0,t.jsx)(n.a,{href:"https://blog.jetbrains.com/webstorm/2018/10/testing-with-jest-in-webstorm/",children:"Testing With Jest in WebStorm"})," to learn more."]}),"\n",(0,t.jsx)(n.h2,{id:"problemas-de-cache",children:"Problemas de Cache"}),"\n",(0,t.jsx)(n.p,{children:"The transform script was changed or Babel was updated and the changes aren't being recognized by Jest?"}),"\n",(0,t.jsxs)(n.p,{children:["Tente novamente com ",(0,t.jsx)(n.a,{href:"/pt-BR/docs/29.5/cli#--cache",children:(0,t.jsx)(n.code,{children:"--no-cache"})}),". Jest armazena em cache os arquivos de m\xf3dulo transformados para acelerar a execu\xe7\xe3o de testes. If you are using your own custom transformer, consider adding a ",(0,t.jsx)(n.code,{children:"getCacheKey"})," function to it: ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/relay/blob/58cf36c73769690f0bbf90562707eadb062b029d/scripts/jest/preprocessor.js#L56-L61",children:"getCacheKey in Relay"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"promessas-n\xe3o-resolvidas",children:"Promessas n\xe3o resolvidas"}),"\n",(0,t.jsx)(n.p,{children:"Se uma promessa n\xe3o \xe9 resolvida de forma alguma, esse erro pode ser lan\xe7ado:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"- Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.`\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Mais comumente, isso \xe9 causado por implementa\xe7\xf5es conflitantes de Promessa. Consider replacing the global promise implementation with your own, for example ",(0,t.jsx)(n.code,{children:"globalThis.Promise = jest.requireActual('promise');"})," and/or consolidate the used Promise libraries to a single one."]}),"\n",(0,t.jsxs)(n.p,{children:["If your test is long running, you may want to consider to increase the timeout by calling ",(0,t.jsx)(n.code,{children:"jest.setTimeout"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"jest.setTimeout(10000); // 10 segundos de timeout\n"})}),"\n",(0,t.jsx)(n.h2,{id:"problemas-com-watchman",children:"Problemas com Watchman"}),"\n",(0,t.jsxs)(n.p,{children:["Try running Jest with ",(0,t.jsx)(n.a,{href:"/pt-BR/docs/29.5/cli#--watchman",children:(0,t.jsx)(n.code,{children:"--no-watchman"})})," or set the ",(0,t.jsx)(n.code,{children:"watchman"})," configuration option to ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Tamb\xe9m consulte ",(0,t.jsx)(n.a,{href:"https://facebook.github.io/watchman/docs/troubleshooting",children:" solucionando problemas do watchman"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"testes-s\xe3o-extremamente-lentos-no-docker-eou-servidor-de-integra\xe7\xe3o-cont\xednua-ci-continuous-integration",children:"Testes s\xe3o extremamente lentos no Docker e/ou servidor de Integra\xe7\xe3o Cont\xednua (CI, Continuous Integration)."}),"\n",(0,t.jsxs)(n.p,{children:["While Jest is most of the time extremely fast on modern multi-core computers with fast SSDs, it may be slow on certain setups as our users ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1395",children:"have"})," ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-260246008",children:"discovered"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Based on the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/1524#issuecomment-262366820",children:"findings"}),", one way to mitigate this issue and improve the speed by up to 50% is to run tests sequentially."]}),"\n",(0,t.jsxs)(n.p,{children:['Para isso, voc\xea pode executar testes na mesma "thread" usando ',(0,t.jsx)(n.a,{href:"/pt-BR/docs/29.5/cli#--runinband",children:(0,t.jsx)(n.code,{children:"--runInBand"})}),":"]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --runInBand\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --runInBand\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --runInBand\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test -- --runInBand\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Another alternative to expediting test execution time on Continuous Integration Servers such as Travis-CI is to set the max worker pool to ~",(0,t.jsx)(n.em,{children:"4"}),". Especificamente no Travis-CI, isto pode reduzir o tempo de execu\xe7\xe3o de teste pela metade. Nota: O plano ",(0,t.jsx)(n.em,{children:"gratuito"})," de Travis CI dispon\xedvel para projetos de c\xf3digo aberto inclui apenas 2 n\xfacleos de CPU."]}),"\n",(0,t.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nnpm test -- --maxWorkers=4\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\nyarn test --maxWorkers=4\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Using Jest CLI\njest --maxWorkers=4\n\n# Using your package manager's `test` script (e.g. with create-react-app)\npnpm test -- --maxWorkers=4\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["If you use GitHub Actions, you can use ",(0,t.jsx)(n.a,{href:"https://github.com/SimenB/github-actions-cpu-cores",children:(0,t.jsx)(n.code,{children:"github-actions-cpu-cores"})})," to detect number of CPUs, and pass that to Jest."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"- name: Get number of CPU cores\n  id: cpu-cores\n  uses: SimenB/github-actions-cpu-cores@v1\n- name: run tests\n  run: yarn jest --max-workers ${{ steps.cpu-cores.outputs.count }}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Another thing you can do is use the ",(0,t.jsx)(n.a,{href:"/pt-BR/docs/29.5/cli#--shard",children:(0,t.jsx)(n.code,{children:"shard"})})," flag to parallelize the test run across multiple machines."]}),"\n",(0,t.jsxs)(n.h2,{id:"coveragepathignorepatterns-parece-n\xe3o-ter-nenhum-efeito",children:[(0,t.jsx)(n.code,{children:"coveragePathIgnorePatterns"})," parece n\xe3o ter nenhum efeito."]}),"\n",(0,t.jsxs)(n.p,{children:["Certifique-se de que voc\xea n\xe3o est\xe1 usando o plugin de ",(0,t.jsx)(n.code,{children:"babel-plugin-Istambul"}),". Jest wraps Istanbul, and therefore also tells Istanbul what files to instrument with coverage collection. When using ",(0,t.jsx)(n.code,{children:"babel-plugin-istanbul"}),", every file that is processed by Babel will have coverage collection code, hence it is not being ignored by ",(0,t.jsx)(n.code,{children:"coveragePathIgnorePatterns"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"defining-tests",children:"Defining Tests"}),"\n",(0,t.jsx)(n.p,{children:"Tests must be defined synchronously for Jest to be able to collect your tests."}),"\n",(0,t.jsx)(n.p,{children:"As an example to show why this is the case, imagine we wrote a test like so:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// Don't do this it will not work\nsetTimeout(() => {\n  it('passes', () => expect(1).toBe(1));\n}, 0);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["When Jest runs your test to collect the ",(0,t.jsx)(n.code,{children:"test"}),"s it will not find any because we have set the definition to happen asynchronously on the next tick of the event loop. This means when you are using ",(0,t.jsx)(n.code,{children:"test.each"})," you cannot set the table asynchronously within a ",(0,t.jsx)(n.code,{children:"beforeEach"})," / ",(0,t.jsx)(n.code,{children:"beforeAll"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ainda-sem-resolu\xe7\xe3o",children:"Ainda sem resolu\xe7\xe3o?"}),"\n",(0,t.jsxs)(n.p,{children:["Consulte a ",(0,t.jsx)(n.a,{href:"/help.html",children:"ajuda"}),"."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(h,e)})):h(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var t=s(7378);const o=t.createContext({});function r(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:r(e),t.createElement(o.Provider,{value:i},n)}}}]);
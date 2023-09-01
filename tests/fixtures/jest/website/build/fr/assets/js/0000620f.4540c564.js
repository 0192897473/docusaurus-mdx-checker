"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7334],{2599:(e,s,n)=>{n.d(s,{Z:()=>a});n(7378);var t=n(7140);const r={tabItem:"tabItem_wHwb"};var i=n(4246);function a(e){let{children:s,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,a),hidden:n,children:s})}},8447:(e,s,n)=>{n.d(s,{Z:()=>z});var t=n(7378),r=n(7140),i=n(9169),a=n(3620),l=n(9749),c=n(8981),o=n(56),d=n(8796);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return u(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,o.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function h(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const r=(0,a.k6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,c._X)(i),(0,t.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})}),[i,r])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,i=p(e),[a,c]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:i}))),[o,u]=j({queryString:n,groupId:r}),[m,x]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,i]=(0,d.Nk)(n);return[r,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),b=(()=>{const e=o??m;return h({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{b&&c(b)}),[b]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,i]),tabValues:i}}var x=n(362);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var v=n(4246);function g(e){let{className:s,block:n,selectedValue:t,selectValue:a,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),d=e=>{const s=e.currentTarget,n=c.indexOf(s),r=l[n].value;r!==t&&(o(s),a(r))},u=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;s=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;s=c[n]??c[c.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,r.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function f(e){let{lazy:s,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function y(e){const s=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...e,...s}),(0,v.jsx)(f,{...e,...s})]})}function z(e){const s=(0,x.Z)();return(0,v.jsx)(y,{...e,children:u(e.children)},String(s))}},2648:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=n(4246),r=n(1670),i=n(8447),a=n(2599);const l={id:"getting-started",title:"Premiers pas"},c=void 0,o={unversionedId:"getting-started",id:"version-29.4/getting-started",title:"Premiers pas",description:"Installez Jest en utilisant votre gestionnaire de paquets favori\xa0:",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-29.4/GettingStarted.md",sourceDirName:".",slug:"/getting-started",permalink:"/fr/docs/29.4/getting-started",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.4",frontMatter:{id:"getting-started",title:"Premiers pas"},sidebar:"docs",next:{title:"Utilisation des comparateurs",permalink:"/fr/docs/29.4/using-matchers"}},d={},u=[{value:"Ex\xe9cution en mode ligne de commande",id:"ex\xe9cution-en-mode-ligne-de-commande",level:2},{value:"Configuration additionnelle",id:"configuration-additionnelle",level:2},{value:"G\xe9n\xe9rez un fichier de configuration de base",id:"g\xe9n\xe9rez-un-fichier-de-configuration-de-base",level:3},{value:"Utilisez Babel",id:"utilisez-babel",level:3},{value:"Utilisez Webpack",id:"utilisez-webpack",level:3},{value:"Utilisation de Vite",id:"utilisation-de-vite",level:3},{value:"Utilisation de Parcel",id:"utilisation-de-parcel",level:3},{value:"Utilisez TypeScript",id:"utilisez-typescript",level:3},{value:"Via <code>babel</code>",id:"via-babel",level:4},{value:"Via <code>ts-jest</code>",id:"via-ts-jest",level:4},{value:"D\xe9finitions de type",id:"d\xe9finitions-de-type",level:4}];function p(e){const s=Object.assign({p:"p",pre:"pre",code:"code",strong:"strong",a:"a",h2:"h2",h3:"h3",admonition:"admonition",h4:"h4"},(0,r.ah)(),e.components),{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Installez Jest en utilisant votre gestionnaire de paquets favori\xa0:"}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev jest\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev jest\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev jest\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Commen\xe7ons par \xe9crire un test pour une hypoth\xe9tique fonction qui additionne deux nombres. Tout d\u2019abord, cr\xe9ez un fichier ",(0,t.jsx)(s.code,{children:"sum.js"}),"\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"function sum(a, b) {\n  return a + b;\n}\nmodule.exports = sum;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Ensuite, cr\xe9ez un fichier nomm\xe9 ",(0,t.jsx)(s.code,{children:"sum.test.js"}),". Il s'agit de notre test actuel :"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:"test('adds 1 + 2 to equal 3', () => {\n  expect(sum(1, 2)).toBe(3);\n});\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Ajoutez la section suivante \xe0 votre ",(0,t.jsx)(s.code,{children:"package.json"}),"\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,t.jsxs)(s.p,{children:["Enfin, lancez ",(0,t.jsx)(s.code,{children:"yarn test"})," ou ",(0,t.jsx)(s.code,{children:"npm test"})," et Jest affichera ce message\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"PASS  ./sum.test.js\n\u2713 adds 1 + 2 to equal 3 (5ms)\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Vous venez d'\xe9crire votre premier test avec Jest avec succ\xe8s\xa0!"})}),"\n",(0,t.jsxs)(s.p,{children:["Ce test utilise ",(0,t.jsx)(s.code,{children:"expect"})," et ",(0,t.jsx)(s.code,{children:"toBe"})," pour tester que deux valeurs sont exactement identiques. Pour conna\xeetre les autres \xe9l\xe9ments que Jest peut tester, consultez ",(0,t.jsx)(s.a,{href:"/fr/docs/29.4/using-matchers",children:"Utilisation des comparateurs"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"ex\xe9cution-en-mode-ligne-de-commande",children:"Ex\xe9cution en mode ligne de commande"}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez ex\xe9cuter Jest directement depuis le CLI (si celui-ci est globalement disponible dans votre ",(0,t.jsx)(s.code,{children:"PATH"}),", par exemple ",(0,t.jsx)(s.code,{children:"yarn global add jest"})," ou ",(0,t.jsx)(s.code,{children:"npm install jest --global"}),") avec une vari\xe9t\xe9 d'options utiles."]}),"\n",(0,t.jsxs)(s.p,{children:["Voici comment ex\xe9cuter Jest sur des fichiers correspondant \xe0 ",(0,t.jsx)(s.code,{children:"my-test"}),", en utilisant ",(0,t.jsx)(s.code,{children:"config.json"})," comme fichier de configuration et afficher une notification de l'OS natif apr\xe8s l'ex\xe9cution\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jest my-test --notify --config=config.json\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Si vous souhaitez en apprendre davantage sur l'ex\xe9cution de ",(0,t.jsx)(s.code,{children:"jest"})," en mode ligne de commande, consultez la page ",(0,t.jsx)(s.a,{href:"/fr/docs/29.4/cli",children:"Options CLI de Jest"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"configuration-additionnelle",children:"Configuration additionnelle"}),"\n",(0,t.jsx)(s.h3,{id:"g\xe9n\xe9rez-un-fichier-de-configuration-de-base",children:"G\xe9n\xe9rez un fichier de configuration de base"}),"\n",(0,t.jsx)(s.p,{children:"Bas\xe9 sur votre projet, Jest vous posera quelques questions et cr\xe9era un fichier de configuration de base avec une courte description pour chaque option\xa0:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"jest --init\n"})}),"\n",(0,t.jsx)(s.h3,{id:"utilisez-babel",children:"Utilisez Babel"}),"\n",(0,t.jsxs)(s.p,{children:["Pour utiliser ",(0,t.jsx)(s.a,{href:"https://babeljs.io/",children:"Babel"}),", installez les d\xe9pendances requises\xa0:"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev babel-jest @babel/core @babel/preset-env\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev babel-jest @babel/core @babel/preset-env\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Configurez Babel pour cibler votre version actuelle de Node en cr\xe9ant un fichier ",(0,t.jsx)(s.code,{children:"babel.config.js"})," \xe0 la racine de votre projet\xa0:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ideal configuration for Babel will depend on your project. See ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/",children:"Babel's docs"})," for more details."]}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{markdown:"span",children:(0,t.jsx)("strong",{children:"Faites en sorte que votre configuration Babel soit adapt\xe9e \xe0 Jest"})}),(0,t.jsxs)(s.p,{children:["Jest d\xe9finira ",(0,t.jsx)(s.code,{children:"process.env.NODE_ENV"})," avec ",(0,t.jsx)(s.code,{children:"'test'"})," s'il n'est pas d\xe9fini avec quelque chose d'autre. Vous pouvez l'utiliser dans votre configuration pour param\xe9trer de mani\xe8re conditionnelle uniquement la compilation n\xe9cessaire pour Jest, par exemple."]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = api => {\n  const isTest = api. nv('test');\n  // Vous pouvez utiliser isTest pour d\xe9terminer les presets et les plugins \xe0 utiliser.\n\n  return {\n    // ...\n  };\n};\n"})}),(0,t.jsxs)(s.admonition,{title:"remarque",type:"note",children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"babel-jest"})," is automatically installed when installing Jest and will automatically transform files if a babel configuration exists in your project. Pour \xe9viter ce r\xe9sultat, vous pouvez r\xe9initialiser explicitement l'option de configuration ",(0,t.jsx)(s.code,{children:"transform"}),"\xa0:"]}),(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  transform: {},\n};\n"})})]})]}),"\n",(0,t.jsx)(s.h3,{id:"utilisez-webpack",children:"Utilisez Webpack"}),"\n",(0,t.jsxs)(s.p,{children:["Jest peut \xeatre utilis\xe9 dans les projets qui utilisent ",(0,t.jsx)(s.a,{href:"https://webpack.js.org/",children:"webpack"})," pour g\xe9rer les ressources, les styles et la compilation. webpack offre quelques d\xe9fis singuliers par rapport \xe0 d'autres outils. Consultez le ",(0,t.jsx)(s.a,{href:"/fr/docs/29.4/webpack",children:"guide webpack"})," pour commencer."]}),"\n",(0,t.jsx)(s.h3,{id:"utilisation-de-vite",children:"Utilisation de Vite"}),"\n",(0,t.jsxs)(s.p,{children:["Jest peut \xeatre utilis\xe9 dans des projets qui utilisent ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/",children:"vite"})," pour servir le code source sur l'ESM natif afin de fournir certains outils frontaux. Vite est un outil subjectif et offre quelques flux de travail pr\xeats \xe0 l'emploi. Jest n'est pas enti\xe8rement support\xe9 par vite \xe0 cause de la fa\xe7on dont le ",(0,t.jsx)(s.a,{href:"https://github.com/vitejs/vite/issues/1955#issuecomment-776009094",children:"syst\xe8me de plugins"})," de vite fonctionne, mais il y a quelques exemples fonctionnels pour une int\xe9gration de premi\xe8re classe en utilisant ",(0,t.jsx)(s.code,{children:"vite-jest"}),", comme ce n'est pas enti\xe8rement support\xe9, vous pourriez aussi lire la ",(0,t.jsxs)(s.a,{href:"https://github.com/sodatea/vite-jest/tree/main/packages/vite-jest#limitations-and-differences-with-commonjs-tests",children:["limitation de ",(0,t.jsx)(s.code,{children:"vite-jest"})]}),". Reportez-vous au ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/guide/",children:"guide vite"})," pour commencer."]}),"\n",(0,t.jsx)(s.h3,{id:"utilisation-de-parcel",children:"Utilisation de Parcel"}),"\n",(0,t.jsxs)(s.p,{children:["Jest peut \xeatre utilis\xe9 dans les projets qui utilisent ",(0,t.jsx)(s.a,{href:"https://parceljs.org/",children:"parcel-bundler"})," pour g\xe9rer les ressources, les styles et la compilation de mani\xe8re similaire \xe0 webpack. Parcel n\xe9cessite aucune configuration. Reportez-vous \xe0 la ",(0,t.jsx)(s.a,{href:"https://parceljs.org/docs/",children:"documentation"})," officielle pour commencer."]}),"\n",(0,t.jsx)(s.h3,{id:"utilisez-typescript",children:"Utilisez TypeScript"}),"\n",(0,t.jsxs)(s.h4,{id:"via-babel",children:["Via ",(0,t.jsx)(s.code,{children:"babel"})]}),"\n",(0,t.jsxs)(s.p,{children:["Jest prend en charge TypeScript, via Babel. Tout d'abord, assurez-vous d'avoir suivi les instructions sur ",(0,t.jsx)(s.a,{href:"#using-babel",children:"l'utilisation de Babel"})," ci-dessus. Ensuite, installez ",(0,t.jsx)(s.code,{children:"@babel/preset-typescript"}),"\xa0:"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @babel/preset-typescript\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @babel/preset-typescript\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @babel/preset-typescript\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Ensuite, ajoutez ",(0,t.jsx)(s.code,{children:"@babel/preset-typescript"})," \xe0 la liste des presets dans votre ",(0,t.jsx)(s.code,{children:"babel.config.js"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    ['@babel/preset-env', {targets: {node: 'current'}}],\n    // highlight-next-line\n    '@babel/preset-typescript',\n  ],\n};\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Toutefois, l'utilisation de TypeScript avec Babel pr\xe9sente quelques ",(0,t.jsx)(s.a,{href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats",children:"inconv\xe9nients"}),". La prise en charge de TypeScript dans Babel \xe9tant purement une transpilation, Jest ne v\xe9rifiera pas le typage de vos tests lors de leur ex\xe9cution. Si vous souhaitez cela, vous pouvez \xe0 la place utiliser ",(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"}),", ou simplement ex\xe9cuter le compilateur TypeScript ",(0,t.jsx)(s.a,{href:"https://www.typescriptlang.org/docs/handbook/compiler-options.html",children:"tsc"})," s\xe9par\xe9ment (ou dans le prolongement de votre processus de construction)."]}),"\n",(0,t.jsxs)(s.h4,{id:"via-ts-jest",children:["Via ",(0,t.jsx)(s.code,{children:"ts-jest"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/kulshekhar/ts-jest",children:"ts-jest"})," est un pr\xe9processeur TypeScript avec la prise en charge de source map pour Jest qui vous permet d'utiliser Jest pour tester les projets \xe9crits en TypeScript."]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev ts-jest\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev ts-jest\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev ts-jest\n"})})})]}),"\n",(0,t.jsxs)(s.p,{children:["Afin que Jest puisse transpiler TypeScript avec ",(0,t.jsx)(s.code,{children:"ts-jest"}),", vous aurez besoin de cr\xe9er un ",(0,t.jsx)(s.a,{href:"https://kulshekhar.github.io/ts-jest/docs/getting-started/installation#jest-config-file",children:"fichier de configuration "}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"d\xe9finitions-de-type",children:"D\xe9finitions de type"}),"\n",(0,t.jsxs)(s.p,{children:["Il existe deux fa\xe7ons d'avoir les ",(0,t.jsx)(s.a,{href:"/fr/docs/29.4/api",children:"API globales Jest"})," typ\xe9es pour les fichiers de test \xe9crits en TypeScript."]}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez utiliser les d\xe9finitions de types qui sont livr\xe9es avec Jest et seront mises \xe0 jour chaque fois que vous mettez \xe0 jour Jest. Installez le paquet ",(0,t.jsx)(s.code,{children:"@jest/globals"}),":"]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @jest/globals\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @jest/globals\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @jest/globals\n"})})})]}),"\n",(0,t.jsx)(s.p,{children:"Et importez les API depuis le paquet :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-ts",metastring:'title="sum.test.ts"',children:"import {describe, expect, test} from '@jest/globals';\nimport {sum} from './sum';\n\ndescribe('sum module', () => {\n  test('adds 1 + 2 to equal 3', () => {\n    expect(sum(1, 2)).toBe(3);\n  });\n});\n"})}),"\n",(0,t.jsx)(s.admonition,{title:"astuce",type:"tip",children:(0,t.jsxs)(s.p,{children:["Consultez la documentation d'utilisation suppl\xe9mentaire de ",(0,t.jsxs)(s.a,{href:"/fr/docs/29.4/api#typescript-usage",children:[(0,t.jsx)(s.code,{children:"describe.each"}),"/",(0,t.jsx)(s.code,{children:"test.each"})]})," et des ",(0,t.jsx)(s.a,{href:"/fr/docs/29.4/mock-function-api#typescript-usage",children:(0,t.jsx)(s.code,{children:"fonctions simul\xe9es"})}),"."]})}),"\n",(0,t.jsxs)(s.p,{children:["Ou vous pouvez choisir d'installer le paquet ",(0,t.jsx)(s.a,{href:"https://npmjs.com/package/@types/jest",children:(0,t.jsx)(s.code,{children:"@types/jest"})}),". Il fournit des types pour les globales Jest sans devoir les importer."]}),"\n",(0,t.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(a.Z,{value:"npm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"npm install --save-dev @types/jest\n"})})}),(0,t.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"yarn add --dev @types/jest\n"})})}),(0,t.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"pnpm add --save-dev @types/jest\n"})})})]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"@types/jest"})," is a third party library maintained at ",(0,t.jsx)(s.a,{href:"https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/jest",children:"DefinitelyTyped"}),", hence the latest Jest features or versions may not be covered yet. Essayez de faire correspondre les versions de Jest et ",(0,t.jsx)(s.code,{children:"@types/jest"})," aussi proche que possible. Par exemple, si vous utilisez Jest ",(0,t.jsx)(s.code,{children:"27.4.0"})," alors l'installation ",(0,t.jsx)(s.code,{children:"27.4.x"})," de ",(0,t.jsx)(s.code,{children:"@types/jest"})," est id\xe9al."]})})]})}const h=function(e={}){const{wrapper:s}=Object.assign({},(0,r.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(p,e)})):p(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>l,ah:()=>i});var t=n(7378);const r=t.createContext({});function i(e){const s=t.useContext(r);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const a={};function l({components:e,children:s,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||a:i(e),t.createElement(r.Provider,{value:l},s)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6385],{2599:(e,n,t)=>{t.d(n,{Z:()=>a});t(7378);var r=t(7140);const s={tabItem:"tabItem_wHwb"};var o=t(4246);function a(e){let{children:n,hidden:t,className:a}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>_});var r=t(7378),s=t(7140),o=t(9169),a=t(3620),i=t(9749),l=t(8981),u=t(56),p=t(8796);function c(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function j(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=d(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[u,c]=m({queryString:t,groupId:s}),[j,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,p.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=u??j;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),f(e)}),[c,f,o]),tabValues:o}}var f=t(362);const g={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var b=t(4246);function x(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),p=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(u(n),a(s))},c=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:c,onClick:p,...o,className:(0,s.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=j(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(x,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,b.jsx)(w,{...e,children:c(e.children)},String(n))}},8150:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var r=t(4246),s=t(1670),o=t(8447),a=t(2599);const i={id:"puppeteer",title:"Utilisation avec puppeteer"},l=void 0,u={unversionedId:"puppeteer",id:"version-29.4/puppeteer",title:"Utilisation avec puppeteer",description:"Gr\xe2ce aux API Global Setup/Teardown et Async Test Environment, Jest peut fonctionner sans probl\xe8me avec puppeteer.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-29.4/Puppeteer.md",sourceDirName:".",slug:"/puppeteer",permalink:"/fr/docs/29.4/puppeteer",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.4",frontMatter:{id:"puppeteer",title:"Utilisation avec puppeteer"},sidebar:"docs",previous:{title:"Utilisation avec webpack",permalink:"/fr/docs/29.4/webpack"},next:{title:"Utilisation avec MongoDB",permalink:"/fr/docs/29.4/mongodb"}},p={},c=[{value:"Utilisez le preset jest-puppeteer",id:"utilisez-le-preset-jest-puppeteer",level:2},{value:"Exemple personnalis\xe9 sans preset jest-puppeteer",id:"exemple-personnalis\xe9-sans-preset-jest-puppeteer",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",admonition:"admonition",code:"code",h2:"h2",ol:"ol",li:"li",pre:"pre"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Gr\xe2ce aux API ",(0,r.jsx)(n.a,{href:"/fr/docs/29.4/configuration#globalsetup-string",children:"Global Setup/Teardown"})," et ",(0,r.jsx)(n.a,{href:"/fr/docs/29.4/configuration#testenvironment-string",children:"Async Test Environment"}),", Jest peut fonctionner sans probl\xe8me avec ",(0,r.jsx)(n.a,{href:"https://github.com/GoogleChrome/puppeteer",children:"puppeteer"}),"."]}),"\n",(0,r.jsx)(n.admonition,{title:"remarque",type:"note",children:(0,r.jsxs)(n.p,{children:["La g\xe9n\xe9ration de couverture de code pour les fichiers de test \xe0 l'aide de Puppeteer n'est actuellement pas possible si votre test utilise ",(0,r.jsx)(n.code,{children:"page.$eval"}),", ",(0,r.jsx)(n.code,{children:"page.$$eval"})," ou ",(0,r.jsx)(n.code,{children:"page.evaluate"})," car la fonction pass\xe9e est ex\xe9cut\xe9e en dehors de la port\xe9e de Jest. Check out ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/issues/7962#issuecomment-495272339",children:"issue #7962"})," on GitHub for a workaround."]})}),"\n",(0,r.jsx)(n.h2,{id:"utilisez-le-preset-jest-puppeteer",children:"Utilisez le preset jest-puppeteer"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"Jest Puppeteer"})," fournit toute la configuration requise pour ex\xe9cuter vos tests en utilisant Puppeteer."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Tout d'abord, installez ",(0,r.jsx)(n.code,{children:"jest-puppeteer"})]}),"\n"]}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(a.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest-puppeteer\n"})})}),(0,r.jsx)(a.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest-puppeteer\n"})})}),(0,r.jsx)(a.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest-puppeteer\n"})})})]}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Sp\xe9cifiez le preset dans votre ",(0,r.jsx)(n.a,{href:"/fr/docs/29.4/configuration",children:"configuration Jest"}),"\xa0:"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "preset": "jest-puppeteer"\n}\n'})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"\xc9crivez votre test"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"describe('Google', () => {\n  beforeAll(async () => {\n    await page.goto('https://google.com');\n  });\n\n  it('doit \xeatre titr\xe9 \"Google\"', async () => {\n    await expect(page.title()).resolves.toMatch('Google');\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Il n'y a pas besoin de charger des d\xe9pendances. Les classes ",(0,r.jsx)(n.code,{children:"page"})," et ",(0,r.jsx)(n.code,{children:"navigateur"})," de Puppeteer seront automatiquement expos\xe9es"]}),"\n",(0,r.jsxs)(n.p,{children:["Consultez ",(0,r.jsx)(n.a,{href:"https://github.com/smooth-code/jest-puppeteer",children:"la documentation"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"exemple-personnalis\xe9-sans-preset-jest-puppeteer",children:"Exemple personnalis\xe9 sans preset jest-puppeteer"}),"\n",(0,r.jsx)(n.p,{children:"Vous pouvez \xe9galement brancher votre puppeteer \xe0 partir de z\xe9ro. L'id\xe9e de base est\xa0:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"lancer & exposer le endpoint websocket de puppeteer avec Global Setup"}),"\n",(0,r.jsx)(n.li,{children:"se connecter \xe0 puppeteer depuis chaque environnement de test"}),"\n",(0,r.jsx)(n.li,{children:"fermer puppeteer avec Global Teardown"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Voici un exemple du script GlobalSetup"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="setup.js"',children:"const {mkdir, writeFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nmodule.exports = async function () {\n  const browser = await puppeteer.launch();\n  // stocke l'instance du navigateur pour pouvoir la d\xe9monter plus tard\n  // ce global n'est disponible que lors du d\xe9montage, mais pas dans TestEnvironments.\n  globalThis.__BROWSER_GLOBAL__ = browser;\n\n  // utilise le syst\xe8me de fichiers pour exposer le wsEndpoint pour TestEnvironments\n  await mkdir(DIR, {recursive: true});\n  await writeFile(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ensuite, nous avons besoin d'un environnement de test personnalis\xe9 pour puppeteer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="puppeteer_environment.js"',children:"const {readFile} = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\nconst puppeteer = require('puppeteer');\nconst NodeEnvironment = require('jest-environment-node').TestEnvironment;\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\n\nclass PuppeteerEnvironment extends NodeEnvironment {\n  constructor(config) {\n    super(config);\n  }\n\n  async setup() {\n    await super.setup();\n    // get the wsEndpoint\n    const wsEndpoint = await readFile(path.join(DIR, 'wsEndpoint'), 'utf8');\n    if (!wsEndpoint) {\n      throw new Error('wsEndpoint not found');\n    }\n\n    // connect to puppeteer\n    this.global.__BROWSER_GLOBAL__ = await puppeteer.connect({\n      browserWSEndpoint: wsEndpoint,\n    });\n  }\n\n  async teardown() {\n    if (this.global.__BROWSER_GLOBAL__) {\n      this.global.__BROWSER_GLOBAL__.disconnect();\n    }\n    await super.teardown();\n  }\n\n  getVmContext() {\n    return super.getVmContext();\n  }\n}\n\nmodule.exports = PuppeteerEnvironment;\n"})}),"\n",(0,r.jsx)(n.p,{children:"Enfin, nous pouvons fermer l'instance puppeteer et nettoyer le fichier"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="teardown.js"',children:"const fs = require('fs').promises;\nconst os = require('os');\nconst path = require('path');\n\nconst DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');\nmodule.exports = async function () {\n  // ferme l'instance du navigateur\n  await globalThis.__BROWSER_GLOBAL__.close();\n\n  // nettoie le fichier wsEndpoint\n  await fs.rm(DIR, {recursive: true, force: true});\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"Avec toutes les choses mises en place, nous pouvons maintenant \xe9crire nos tests comme ceci\xa0:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="test.js"',children:"const timeout = 5000;\n\ndescribe(\n  '/ (Home Page)',\n  () => {\n    let page;\n    beforeAll(async () => {\n      page = await globalThis.__BROWSER_GLOBAL__.newPage();\n      await page.goto('https://google.com');\n    }, timeout);\n\n    it('doit \xeatre charg\xe9 sans erreur', async () => {\n      const text = await page.evaluate(() => document.body.textContent);\n      expect(text).toContain('google');\n    });\n  },\n  timeout,\n);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Enfin, configurez ",(0,r.jsx)(n.code,{children:"jest.config.js"})," pour lire ces fichiers. (Le preset ",(0,r.jsx)(n.code,{children:"jest-puppeteer"})," fait quelque chose comme \xe7a sous le capot.)"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  globalSetup: './setup.js',\n  globalTeardown: './teardown.js',\n  testEnvironment: './puppeteer_environment.js',\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Voici le code de ",(0,r.jsx)(n.a,{href:"https://github.com/xfumihiro/jest-puppeteer-example",children:"l'exemple de travail complet"}),"."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>o});var r=t(7378);const s=r.createContext({});function o(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||a:o(e),r.createElement(s.Provider,{value:i},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2937],{2599:(e,n,t)=>{t.d(n,{Z:()=>u});t(7378);var r=t(7140);const s={tabItem:"tabItem_wHwb"};var a=t(4246);function u(e){let{children:n,hidden:t,className:u}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,u),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>q});var r=t(7378),s=t(7140),a=t(9169),u=t(3620),o=t(9749),i=t(8981),l=t(56),c=t(8796);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const s=(0,u.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=m(e),[u,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,d]=h({queryString:t,groupId:s}),[f,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),b=(()=>{const e=l??f;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:u,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=t(362);const b={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var j=t(4246);function g(e){let{className:n,block:t,selectedValue:r,selectValue:u,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),s=o[t].value;s!==r&&(l(n),u(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(x,{...e,...n})]})}function q(e){const n=(0,v.Z)();return(0,j.jsx)(y,{...e,children:d(e.children)},String(n))}},505:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=t(4246),s=t(1670),a=t(8447),u=t(2599);const o={id:"tutorial-jquery",title:"Manipulation du DOM"},i=void 0,l={unversionedId:"tutorial-jquery",id:"version-29.6/tutorial-jquery",title:"Manipulation du DOM",description:"Une autre classe de fonctions qui est souvent consid\xe9r\xe9e comme difficile \xe0 tester est le code qui manipule directement le DOM. Voyons comment nous pouvons tester le bout de code jQuery suivant qui \xe9coute un \xe9v\xe9nement de clic, r\xe9cup\xe8re des donn\xe9es de mani\xe8re asynchrone et d\xe9finit le contenu d'un span.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-29.6/TutorialjQuery.md",sourceDirName:".",slug:"/tutorial-jquery",permalink:"/fr/docs/tutorial-jquery",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.6",frontMatter:{id:"tutorial-jquery",title:"Manipulation du DOM"},sidebar:"docs",previous:{title:"Utilisation avec DynamoDB",permalink:"/fr/docs/dynamodb"},next:{title:"Plugins de surveillance",permalink:"/fr/docs/watch-plugins"}},c={},d=[];function m(e){const n=Object.assign({p:"p",pre:"pre",code:"code",a:"a"},(0,s.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Une autre classe de fonctions qui est souvent consid\xe9r\xe9e comme difficile \xe0 tester est le code qui manipule directement le DOM. Voyons comment nous pouvons tester le bout de code jQuery suivant qui \xe9coute un \xe9v\xe9nement de clic, r\xe9cup\xe8re des donn\xe9es de mani\xe8re asynchrone et d\xe9finit le contenu d'un span."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="displayUser.js"',children:"'use strict';\n\nconst $ = require('jquery');\nconst fetchCurrentUser = require('./fetchCurrentUser.js');\n\n$('#button').click(() => {\n  fetchCurrentUser(user => {\n    const loggedText = 'Logged ' + (user.loggedIn ? 'In' : 'Out');\n    $('#username').text(user.fullName + ' - ' + loggedText);\n  });\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Encore une fois, nous cr\xe9ons un fichier de test dans le dossier ",(0,r.jsx)(n.code,{children:"__tests__/"}),"\xa0:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/displayUser-test.js"',children:"'use strict';\n\njest.mock('../fetchCurrentUser');\n\ntest('affiche un utilisateur apr\xe8s un clic', () => {\n  // configure le body du document\n  document.body.innerHTML =\n    '<div>' +\n    '  <span id=\"username\" />' +\n    '  <button id=\"button\" />' +\n    '</div>';\n\n  // Ce module a un effet de bord\n  require('../displayUser');\n\n  const $ = require('jquery');\n  const fetchCurrentUser = require('../fetchCurrentUser');\n\n  // Dit \xe0 la fonction simul\xe9e fetchCurrentUser de faire appel automatiquement \xe0\n  // son callback avec des donn\xe9es\n  fetchCurrentUser.mockImplementation(cb => {\n    cb({\n      fullName: 'Johnny Cash',\n      loggedIn: true,\n    });\n  });\n\n  // Utilise jquery pour \xe9muler un clic sur notre bouton\n  $('#button').click();\n\n  // V\xe9rifie que la fonction fetchCurrentUser a \xe9t\xe9 appel\xe9e et que\n  // le texte interne du span #username a \xe9t\xe9 mis \xe0 jour comme nous l'attendions.\n  expect(fetchCurrentUser).toBeCalled();\n  expect($('#username').text()).toBe('Johnny Cash - Logged In');\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Nous simulons ",(0,r.jsx)(n.code,{children:"fetchCurrentUser.js"})," pour que notre test ne fasse pas une vraie requ\xeate r\xe9seau mais se r\xe9solve localement avec des donn\xe9es simul\xe9es. Cela permet \xe0 notre test de se terminer au bout de quelques millisecondes plut\xf4t qu'en secondes et garantit une vitesse d'it\xe9ration rapide du test unitaire."]}),"\n",(0,r.jsxs)(n.p,{children:["Aussi, la fonction test\xe9e ajoute un \xe9couteur d'\xe9v\xe9nements sur l'\xe9l\xe9ment DOM ",(0,r.jsx)(n.code,{children:"#button"}),", nous devons donc configurer notre DOM correctement pour le test. ",(0,r.jsx)(n.code,{children:"jsdom"})," et le paquet ",(0,r.jsx)(n.code,{children:"jest-environment-jsdom"})," simulent un environnement DOM comme si vous \xe9tiez dans le navigateur. Cela signifie que chaque API du DOM que nous appelons peut \xeatre observ\xe9e de la m\xeame mani\xe8re qu'elle le serait dans un navigateur\xa0!"]}),"\n",(0,r.jsxs)(n.p,{children:["Pour commencer avec ",(0,r.jsx)(n.a,{href:"/fr/docs/configuration#testenvironment-string",children:"l'environnement de test"})," de JSDOM, le paquet ",(0,r.jsx)(n.code,{children:"jest-environment-jsdom"})," doit \xeatre install\xe9 si ce n'est pas d\xe9j\xe0 le cas\xa0:"]}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(u.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest-environment-jsdom\n"})})}),(0,r.jsx)(u.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest-environment-jsdom\n"})})}),(0,r.jsx)(u.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest-environment-jsdom\n"})})})]}),"\n",(0,r.jsxs)(n.p,{children:["The code for this example is available at ",(0,r.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/jquery",children:"examples/jquery"}),"."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(m,e)})):m(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>a});var r=t(7378);const s=r.createContext({});function a(e){const n=r.useContext(s);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const u={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||u:a(e),r.createElement(s.Provider,{value:o},n)}}}]);
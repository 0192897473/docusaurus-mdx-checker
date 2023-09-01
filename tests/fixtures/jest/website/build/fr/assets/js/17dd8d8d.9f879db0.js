"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[9192],{3553:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(4246),t=n(1670);const o={id:"manual-mocks",title:"Simulations manuelles"},l=void 0,r={unversionedId:"manual-mocks",id:"manual-mocks",title:"Simulations manuelles",description:"Les simulations manuelles sont utilis\xe9es pour remplacer une fonctionnalit\xe9 par des donn\xe9es simul\xe9es. Par exemple, au lieu d'acc\xe9der \xe0 une ressource distante comme un site web ou une base de donn\xe9es, vous pouvez cr\xe9er une simulation manuelle qui vous permet d'utiliser des donn\xe9es factices. Cela permet de s'assurer que vos tests seront rapides et non bancals.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/ManualMocks.md",sourceDirName:".",slug:"/manual-mocks",permalink:"/fr/docs/next/manual-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"current",frontMatter:{id:"manual-mocks",title:"Simulations manuelles"},sidebar:"docs",previous:{title:"Simulateurs de temporisation",permalink:"/fr/docs/next/timer-mocks"},next:{title:"Simulations de classe ES6",permalink:"/fr/docs/next/es6-class-mocks"}},a={},d=[{value:"Simulation des modules utilisateurs",id:"simulation-des-modules-utilisateurs",level:2},{value:"Simulation des modules Node",id:"simulation-des-modules-node",level:2},{value:"Exemples",id:"exemples",level:2},{value:"Utilisation avec les importations de modules ES",id:"utilisation-avec-les-importations-de-modules-es",level:2},{value:"Simulation de m\xe9thodes qui ne sont pas impl\xe9ment\xe9es dans JSDOM",id:"simulation-de-m\xe9thodes-qui-ne-sont-pas-impl\xe9ment\xe9es-dans-jsdom",level:2}];function u(e){const s=Object.assign({p:"p",h2:"h2",code:"code",admonition:"admonition",strong:"strong",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Les simulations manuelles sont utilis\xe9es pour remplacer une fonctionnalit\xe9 par des donn\xe9es simul\xe9es. Par exemple, au lieu d'acc\xe9der \xe0 une ressource distante comme un site web ou une base de donn\xe9es, vous pouvez cr\xe9er une simulation manuelle qui vous permet d'utiliser des donn\xe9es factices. Cela permet de s'assurer que vos tests seront rapides et non bancals."}),"\n",(0,i.jsx)(s.h2,{id:"simulation-des-modules-utilisateurs",children:"Simulation des modules utilisateurs"}),"\n",(0,i.jsxs)(s.p,{children:["Les simulations manuelles sont d\xe9finies en \xe9crivant un module dans un sous-r\xe9pertoire ",(0,i.jsx)(s.code,{children:"__mocks__/"})," imm\xe9diatement adjacent au module. Par exemple, pour simuler un module appel\xe9 ",(0,i.jsx)(s.code,{children:"user"})," dans le r\xe9pertoire ",(0,i.jsx)(s.code,{children:"models"}),", cr\xe9ez un fichier appel\xe9 ",(0,i.jsx)(s.code,{children:"user.js"})," et placez-le dans le r\xe9pertoire ",(0,i.jsx)(s.code,{children:"models/__mocks__"}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"attention",type:"caution",children:(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"__mocks__"})," folder is case-sensitive, so naming the directory ",(0,i.jsx)(s.code,{children:"__MOCKS__"})," will break on some systems."]})}),"\n",(0,i.jsx)(s.admonition,{title:"remarque",type:"note",children:(0,i.jsxs)(s.p,{children:["Lorsque nous avons besoin de ce module dans nos tests (ce qui signifie que nous voulons utiliser la simulation manuelle au lieu de l'impl\xe9mentation r\xe9elle), l'appel explicite de ",(0,i.jsx)(s.code,{children:"jest.mock('./nomModule')"})," est ",(0,i.jsx)(s.strong,{children:"exig\xe9"}),"."]})}),"\n",(0,i.jsx)(s.h2,{id:"simulation-des-modules-node",children:"Simulation des modules Node"}),"\n",(0,i.jsxs)(s.p,{children:["Si le module que vous simulez est un module Node (par exemple : ",(0,i.jsx)(s.code,{children:"lodash"}),"), le simulateur doit \xeatre plac\xe9 dans le r\xe9pertoire ",(0,i.jsx)(s.code,{children:"__mocks__"})," adjacent \xe0 ",(0,i.jsx)(s.code,{children:"node_modules"})," (sauf si vous avez configur\xe9 [",(0,i.jsx)(s.code,{children:"roots"}),"](Configuration. md#roots-arraystring) pour pointer vers un dossier autre que la racine du projet) et sera ",(0,i.jsx)(s.strong,{children:"automatiquement"})," simul\xe9. Il n'est pas n\xe9cessaire d'appeler explicitement ",(0,i.jsx)(s.code,{children:"jest.mock('nom_module')"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:["Les modules \xe9tendus (\xe9galement appel\xe9s ",(0,i.jsx)(s.a,{href:"https://docs.npmjs.com/cli/v6/using-npm/scope",children:"paquets \xe9tendus"}),") peuvent \xeatre simul\xe9s en cr\xe9ant un fichier dans une structure de r\xe9pertoire qui correspond au nom du module \xe9tendu. Par exemple, pour simuler un module \xe9tendu appel\xe9 ",(0,i.jsx)(s.code,{children:"@scope/nom-du-projet"}),", cr\xe9ez un fichier \xe0 ",(0,i.jsx)(s.code,{children:"__mocks__/@scope/nom-du-projet.js"}),", en cr\xe9ant le r\xe9pertoire ",(0,i.jsx)(s.code,{children:"@scope/"})," en cons\xe9quence."]}),"\n",(0,i.jsx)(s.admonition,{title:"attention",type:"caution",children:(0,i.jsxs)(s.p,{children:["If we want to mock Node's built-in modules (e.g.: ",(0,i.jsx)(s.code,{children:"fs"})," or ",(0,i.jsx)(s.code,{children:"path"}),"), then explicitly calling e.g. ",(0,i.jsx)(s.code,{children:"jest.mock('path')"})," is ",(0,i.jsx)(s.strong,{children:"required"}),", because built-in modules are not mocked by default."]})}),"\n",(0,i.jsx)(s.h2,{id:"exemples",children:"Exemples"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2514\u2500\u2500 fs.js\n\u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u251c\u2500\u2500 node_modules\n\u2514\u2500\u2500 views\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Lorsqu'une simulation manuelle existe pour un module donn\xe9, le syst\xe8me de modules de Jest utilisera ce module lors de l'appel explicite de ",(0,i.jsx)(s.code,{children:"jest.mock('nomModule')"}),". Cependant, lorsque ",(0,i.jsx)(s.code,{children:"automock"})," est d\xe9fini \xe0 ",(0,i.jsx)(s.code,{children:"true"}),", l'impl\xe9mentation de la simulation manuelle sera utilis\xe9e au lieu de la simulation cr\xe9\xe9e automatiquement, m\xeame si ",(0,i.jsx)(s.code,{children:"jest.mock('nomModule')"})," n'est pas appel\xe9. Pour ne pas adopter ce comportement, vous devrez appeler explicitement ",(0,i.jsx)(s.code,{children:"jest.unmock('nomModule')"})," dans les tests qui doivent utiliser l'impl\xe9mentation r\xe9elle du module."]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsxs)(s.p,{children:["In order to mock properly, Jest needs ",(0,i.jsx)(s.code,{children:"jest.mock('moduleName')"})," to be in the same scope as the ",(0,i.jsx)(s.code,{children:"require/import"})," statement."]})}),"\n",(0,i.jsxs)(s.p,{children:["Voici un exemple fictif o\xf9 nous avons un module qui fournit un r\xe9capitulatif de tous les fichiers d'un r\xe9pertoire donn\xe9. Dans ce cas, nous utilisons le module ",(0,i.jsx)(s.code,{children:"fs"})," de base (int\xe9gr\xe9)."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",metastring:'title="FileSummarizer.js"',children:"'use strict';\n\nconst fs = require('fs');\n\nfunction summarizeFilesInDirectorySync(directory) {\n  return fs.readdirSync(directory).map(fileName => ({\n    directory,\n    fileName,\n  }));\n}\n\nexports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Puisque nous souhaitons que nos tests \xe9vitent de toucher le disque (ce qui est plut\xf4t lent et fragile), nous cr\xe9ons un objet de simulation manuelle pour le module ",(0,i.jsx)(s.code,{children:"fs"})," en \xe9tendant un objet de simulation automatique. Notre simulation manuelle impl\xe9mentera des versions personnalis\xe9es des API ",(0,i.jsx)(s.code,{children:"fs"})," sur lesquelles nous pourrons nous appuyer pour nos tests\xa0:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",metastring:'title="__mocks__/fs.js"',children:"'use strict';\n\nconst path = require('path');\n\nconst fs = jest.createMockFromModule('fs');\n\n// Il s'agit d'une fonction personnalis\xe9e que nos tests peuvent utiliser pendant la pr\xe9paration pour sp\xe9cifier\n// \xe0 quoi doivent ressembler les fichiers sur le syst\xe8me de fichiers \"fictif\" lorsque\n// l'une des APIs `fs` est utilis\xe9e.\nlet mockFiles = Object.create(null);\nfunction __setMockFiles(newMockFiles) {\n  mockFiles = Object.create(null);\n  for (const file in newMockFiles) {\n    const dir = path.dirname(file);\n\n    if (!mockFiles[dir]) {\n      mockFiles[dir] = [];\n    }\n    mockFiles[dir].push(path.basename(file));\n  }\n}\n\n// Une version personnalis\xe9e de `readdirSync' qui lit \xe0 partir\n// de la liste de fichiers simul\xe9s d\xe9finie via __setMockFiles\nfunction readdirSync(directoryPath) {\n  return mockFiles[directoryPath] || [];\n}\n\nfs.__setMockFiles = __setMockFiles;\nfs.readdirSync = readdirSync;\n\nmodule.exports = fs;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Maintenant, nous \xe9crivons notre test. In this case ",(0,i.jsx)(s.code,{children:"jest.mock('fs')"})," must be called explicitly, because ",(0,i.jsx)(s.code,{children:"fs"})," is Node\u2019s built-in module:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",metastring:'title="__tests__/FileSummarizer-test.js"',children:"'use strict';\n\njest.mock('fs');\n\ndescribe('listFilesInDirectorySync', () => {\n  const MOCK_FILE_INFO = {\n    '/path/to/file1.js': 'console.log(\"contenu de file1\");',\n    '/path/to/file2.txt': 'contenu de file2',\n  };\n\n  beforeEach(() => {\n    // Pr\xe9paration d'informations simul\xe9es sur les fichiers avant chaque test.\n    require('fs').__setMockFiles(MOCK_FILE_INFO);\n  });\n\n  test('inclut tous les fichiers du r\xe9pertoire dans le r\xe9capitulatif', () => {\n    const FileSummarizer = require('../FileSummarizer');\n    const fileSummary =\n      FileSummarizer.summarizeFilesInDirectorySync('/path/to');\n\n    expect(fileSummary.length).toBe(2);\n  });\n});\n"})}),"\n",(0,i.jsxs)(s.p,{children:["L'exemple de simulation pr\xe9sent\xe9 ici utilise ",(0,i.jsx)(s.a,{href:"/fr/docs/next/jest-object#jestcreatemockfrommodulemodulename",children:(0,i.jsx)(s.code,{children:"jest.createMockFromModule"})})," pour g\xe9n\xe9rer une simulation automatique et remplace son comportement par d\xe9faut. Il s'agit de l'approche recommand\xe9e, mais elle est totalement facultative. Si vous ne souhaitez pas du tout utiliser la simulation automatique, vous pouvez exporter vos propres fonctions \xe0 partir du fichier mock. L'inconv\xe9nient des simulations enti\xe8rement manuelles est qu'elles sont manuelles - ce qui signifie que vous devez les mettre \xe0 jour manuellement chaque fois que le module qu'elles simulent change. Pour cette raison, il est pr\xe9f\xe9rable d'utiliser ou d'\xe9tendre la simulation automatique lorsque cela r\xe9pond \xe0 vos besoins."]}),"\n",(0,i.jsxs)(s.p,{children:["Pour s'assurer qu'une simulation manuelle et son impl\xe9mentation r\xe9elle restent synchronis\xe9es, il peut \xeatre utile de faire un \xab\xa0require\xa0\xbb du module r\xe9el en utilisant ",(0,i.jsx)(s.a,{href:"/fr/docs/next/jest-object#jestrequireactualmodulename",children:(0,i.jsx)(s.code,{children:"jest.requireActual(moduleName)"})})," dans votre simulation manuelle et en la modifiant avec des fonctions de simulation avant de l'exporter."]}),"\n",(0,i.jsxs)(s.p,{children:["The code for this example is available at ",(0,i.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/manual-mocks",children:"examples/manual-mocks"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"utilisation-avec-les-importations-de-modules-es",children:"Utilisation avec les importations de modules ES"}),"\n",(0,i.jsxs)(s.p,{children:["Si vous utilisez des ",(0,i.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",children:"importations de modules ES"}),", vous serez normalement tent\xe9 de placer vos d\xe9clarations ",(0,i.jsx)(s.code,{children:"import"})," en haut du fichier de test. Mais il est souvent n\xe9cessaire d'indiquer \xe0 Jest d'utiliser une simulation avant que les modules ne l'utilisent. Pour cette raison, Jest va automatiquement faire remonter les appels ",(0,i.jsx)(s.code,{children:"jest.mock"})," au d\xe9but du module (avant toute importation). Pour en savoir plus \xe0 ce sujet et le voir en action, consultez ",(0,i.jsx)(s.a,{href:"https://github.com/kentcdodds/how-jest-mocking-works",children:"ce d\xe9p\xf4t"}),"."]}),"\n",(0,i.jsx)(s.admonition,{title:"attention",type:"caution",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"jest.mock"})," calls cannot be hoisted to the top of the module if you enabled ECMAScript modules support. The ESM module loader always evaluates the static imports before executing code. See ",(0,i.jsx)(s.a,{href:"/fr/docs/next/ecmascript-modules",children:"ECMAScriptModules"})," for details."]})}),"\n",(0,i.jsx)(s.h2,{id:"simulation-de-m\xe9thodes-qui-ne-sont-pas-impl\xe9ment\xe9es-dans-jsdom",children:"Simulation de m\xe9thodes qui ne sont pas impl\xe9ment\xe9es dans JSDOM"}),"\n",(0,i.jsxs)(s.p,{children:["Si un code utilise une m\xe9thode que JSDOM (l'impl\xe9mentation DOM utilis\xe9e par Jest) n'a pas encore impl\xe9ment\xe9e, il n'est pas toujours possible de la tester facilement. C'est par exemple le cas avec ",(0,i.jsx)(s.code,{children:"window.matchMedia()"}),". Jest renvoie ",(0,i.jsx)(s.code,{children:"TypeError: window.matchMedia is not a function"})," et n'ex\xe9cute pas correctement le test."]}),"\n",(0,i.jsxs)(s.p,{children:["Dans ce cas, la simulation de ",(0,i.jsx)(s.code,{children:"matchMedia"})," dans le fichier de test devrait r\xe9soudre le probl\xe8me\xa0:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"Object.defineProperty(window, 'matchMedia', {\n  writable: true,\n  value: jest.fn().mockImplementation(query => ({\n    matches: false,\n    media: query,\n    onchange: null,\n    addListener: jest.fn(), // d\xe9pr\xe9ci\xe9\n    removeListener: jest.fn(), // d\xe9pr\xe9ci\xe9\n    addEventListener: jest.fn(),\n    removeEventListener: jest.fn(),\n    dispatchEvent: jest.fn(),\n  })),\n});\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Cela fonctionne si ",(0,i.jsx)(s.code,{children:"window.matchMedia()"})," est utilis\xe9 dans une fonction (ou m\xe9thode) qui est appel\xe9e dans le test. Si ",(0,i.jsx)(s.code,{children:"window.matchMedia()"})," est ex\xe9cut\xe9 directement dans le fichier test\xe9, Jest signale la m\xeame erreur. Dans ce cas, la solution est de d\xe9placer la simulation manuelle dans un fichier s\xe9par\xe9 et d'inclure celui-ci dans le test ",(0,i.jsx)(s.strong,{children:"avant"})," le fichier test\xe9\xa0:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-js",children:"import './matchMedia.mock'; // Doit \xeatre import\xe9 avant le fichier test\xe9\nimport {myMethod} from './file-to-test';\n\ndescribe('myMethod()', () => {\n  // Teste la m\xe9thode ici...\n});\n"})})]})}const c=function(e={}){const{wrapper:s}=Object.assign({},(0,t.ah)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(u,e)})):u(e)}},1670:(e,s,n)=>{n.d(s,{Zo:()=>r,ah:()=>o});var i=n(7378);const t=i.createContext({});function o(e){const s=i.useContext(t);return i.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const l={};function r({components:e,children:s,disableParentContext:n}){let r;return r=n?"function"==typeof e?e({}):e||l:o(e),i.createElement(t.Provider,{value:r},s)}}}]);
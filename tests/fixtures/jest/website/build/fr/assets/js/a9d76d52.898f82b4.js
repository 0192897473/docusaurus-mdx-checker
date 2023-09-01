"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7990],{2194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>r});var t=s(4246),o=s(1670);const l={id:"mock-functions",title:"Fonctions simul\xe9es"},c=void 0,a={unversionedId:"mock-functions",id:"mock-functions",title:"Fonctions simul\xe9es",description:"Les fonctions simul\xe9es permettent de tester les liens entre le code en effa\xe7ant l'impl\xe9mentation r\xe9elle d'une fonction, en capturant les appels \xe0 la fonction (et les param\xe8tres pass\xe9s dans ces appels), en capturant les instances des fonctions constructrices lorsqu'elles sont instanci\xe9es avec new, et en permettant la configuration des valeurs de retour au moment du test.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/MockFunctions.md",sourceDirName:".",slug:"/mock-functions",permalink:"/fr/docs/next/mock-functions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"current",frontMatter:{id:"mock-functions",title:"Fonctions simul\xe9es"},sidebar:"docs",previous:{title:"Pr\xe9paration et nettoyage",permalink:"/fr/docs/next/setup-teardown"},next:{title:"Plateforme Jest",permalink:"/fr/docs/next/jest-platform"}},i={},r=[{value:"Utilisation d&#39;une fonction simul\xe9e",id:"utilisation-dune-fonction-simul\xe9e",level:2},{value:"Propri\xe9t\xe9 <code>.mock</code>",id:"propri\xe9t\xe9-mock",level:2},{value:"Valeurs de retour simul\xe9es",id:"valeurs-de-retour-simul\xe9es",level:2},{value:"Modules de simulation",id:"modules-de-simulation",level:2},{value:"Simulation partielle",id:"simulation-partielle",level:2},{value:"Impl\xe9mentations simul\xe9es",id:"impl\xe9mentations-simul\xe9es",level:2},{value:"Noms simul\xe9s",id:"noms-simul\xe9s",level:2},{value:"Comparateurs personnalis\xe9s",id:"comparateurs-personnalis\xe9s",level:2}];function u(e){const n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Les fonctions simul\xe9es permettent de tester les liens entre le code en effa\xe7ant l'impl\xe9mentation r\xe9elle d'une fonction, en capturant les appels \xe0 la fonction (et les param\xe8tres pass\xe9s dans ces appels), en capturant les instances des fonctions constructrices lorsqu'elles sont instanci\xe9es avec ",(0,t.jsx)(n.code,{children:"new"}),", et en permettant la configuration des valeurs de retour au moment du test."]}),"\n",(0,t.jsxs)(n.p,{children:["Il existe deux fa\xe7ons de simuler des fonctions : soit en cr\xe9ant une fonction simul\xe9e \xe0 utiliser dans le code de test, soit en \xe9crivant une ",(0,t.jsx)(n.a,{href:"/fr/docs/next/manual-mocks",children:(0,t.jsx)(n.code,{children:"simulation manuelle"})})," pour remplacer une d\xe9pendance du module."]}),"\n",(0,t.jsx)(n.h2,{id:"utilisation-dune-fonction-simul\xe9e",children:"Utilisation d'une fonction simul\xe9e"}),"\n",(0,t.jsxs)(n.p,{children:["Imaginons que nous testons l'impl\xe9mentation d'une fonction ",(0,t.jsx)(n.code,{children:"forEach"}),", qui appelle un callback pour chaque \xe9l\xe9ment d'un tableau fourni."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="forEach.js"',children:"export function forEach(items, callback) {\n  for (let index = 0; index < items.length; index++) {\n    callback(items[index]);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Pour tester cette fonction, nous pouvons utiliser une fonction simul\xe9e, et inspecter l'\xe9tat de la fonction simul\xe9e pour nous assurer que le callback est appel\xe9 comme pr\xe9vu."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="forEach.test.js"',children:"const forEach = require('./forEach');\n\nconst mockCallback = jest.fn(x => 42 + x);\n\ntest('forEach mock function', () => {\n  forEach([0, 1], mockCallback);\n\n  // The mock function was called twice\n  expect(mockCallback.mock.calls).toHaveLength(2);\n\n  // The first argument of the first call to the function was 0\n  expect(mockCallback.mock.calls[0][0]).toBe(0);\n\n  // The first argument of the second call to the function was 1\n  expect(mockCallback.mock.calls[1][0]).toBe(1);\n\n  // The return value of the first call to the function was 42\n  expect(mockCallback.mock.results[0].value).toBe(42);\n});\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"propri\xe9t\xe9-mock",children:["Propri\xe9t\xe9 ",(0,t.jsx)(n.code,{children:".mock"})]}),"\n",(0,t.jsxs)(n.p,{children:["Toutes les fonctions simul\xe9es ont cette propri\xe9t\xe9 sp\xe9ciale ",(0,t.jsx)(n.code,{children:".mock"}),", qui est l'endroit o\xf9 sont conserv\xe9es les donn\xe9es sur la fa\xe7on dont la fonction a \xe9t\xe9 appel\xe9e et ce que la fonction a renvoy\xe9. La propri\xe9t\xe9 ",(0,t.jsx)(n.code,{children:".mock"})," trace \xe9galement la valeur de ",(0,t.jsx)(n.code,{children:"this"})," pour chaque appel, il est donc possible de l'inspecter \xe9galement\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myMock1 = jest.fn();\nconst a = new myMock1();\nconsole.log(myMock1.mock.instances);\n// > [ <a> ]\n\nconst myMock2 = jest.fn();\nconst b = {};\nconst bound = myMock2.bind(b);\nbound();\nconsole.log(myMock2.mock.contexts);\n// > [ <b> ]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ces membres simul\xe9s sont tr\xe8s utiles dans les tests pour v\xe9rifier comment ces fonctions sont appel\xe9es, instanci\xe9es, ou ce qu'elles retournent :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// The function was called exactly once\nexpect(someMockFunction.mock.calls).toHaveLength(1);\n\n// The first arg of the first call to the function was 'first arg'\nexpect(someMockFunction.mock.calls[0][0]).toBe('first arg');\n\n// The second arg of the first call to the function was 'second arg'\nexpect(someMockFunction.mock.calls[0][1]).toBe('second arg');\n\n// The return value of the first call to the function was 'return value'\nexpect(someMockFunction.mock.results[0].value).toBe('return value');\n\n// The function was called with a certain `this` context: the `element` object.\nexpect(someMockFunction.mock.contexts[0]).toBe(element);\n\n// This function was instantiated exactly twice\nexpect(someMockFunction.mock.instances.length).toBe(2);\n\n// The object returned by the first instantiation of this function\n// had a `name` property whose value was set to 'test'\nexpect(someMockFunction.mock.instances[0].name).toBe('test');\n\n// The first argument of the last call to the function was 'test'\nexpect(someMockFunction.mock.lastCall[0]).toBe('test');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"valeurs-de-retour-simul\xe9es",children:"Valeurs de retour simul\xe9es"}),"\n",(0,t.jsx)(n.p,{children:"Les fonctions simul\xe9es peuvent \xe9galement \xeatre utilis\xe9es pour injecter des valeurs de test dans votre code pendant un test :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myMock = jest.fn();\nconsole.log(myMock());\n// > undefined\n\nmyMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);\n\nconsole.log(myMock(), myMock(), myMock(), myMock());\n// > 10, 'x', true, true\n"})}),"\n",(0,t.jsx)(n.p,{children:"Les fonctions simul\xe9es sont \xe9galement tr\xe8s efficaces dans le code qui utilise un \xab\xa0style de passage de continuation\xa0\xbb (NdT continuation-passing style) fonctionnel. Le code \xe9crit dans ce style permet d'\xe9viter le recours \xe0 des blocs compliqu\xe9s qui recr\xe9ent le comportement du composant r\xe9el qu'ils remplacent, en faveur de l'injection de valeurs directement dans le test juste avant leur utilisation."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const filterTestFn = jest.fn();\n\n// Faire en sorte que la simulation renvoie `true` pour le premier appel,\n// et `false` pour le second appel\nfilterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);\n\nconst result = [11, 12].filter(num => filterTestFn(num));\n\nconsole.log(result);\n// > [11]\nconsole.log(filterTestFn.mock.calls[0][0]); // 11\nconsole.log(filterTestFn.mock.calls[1][0]); // 12\n"})}),"\n",(0,t.jsx)(n.p,{children:"La plupart des exemples r\xe9els impliquent en fait de saisir une fonction fictive sur un composant d\xe9pendant et de la configurer, mais la technique est la m\xeame. Dans ces cas, essayez d'\xe9viter la tentation d'impl\xe9menter la logique \xe0 l'int\xe9rieur de toute fonction qui n'est pas directement test\xe9e."}),"\n",(0,t.jsx)(n.h2,{id:"modules-de-simulation",children:"Modules de simulation"}),"\n",(0,t.jsxs)(n.p,{children:["Supposons que nous ayons une classe qui r\xe9cup\xe8re les utilisateurs de notre API. La classe utilise ",(0,t.jsx)(n.a,{href:"https://github.com/axios/axios",children:"axios"})," pour appeler l'API puis retourne l'attribut ",(0,t.jsx)(n.code,{children:"data"})," qui contient tous les utilisateurs\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="users.js"',children:"import axios from 'axios';\n\nclass Users {\n  static all() {\n    return axios.get('/users.json').then(resp => resp.data);\n  }\n}\n\nexport default Users;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Maintenant, afin de tester cette m\xe9thode sans toucher \xe0 l'API (et donc cr\xe9er des tests lents et fragiles), nous pouvons utiliser la fonction ",(0,t.jsx)(n.code,{children:"jest.mock(...)"})," pour simuler automatiquement le module axios."]}),"\n",(0,t.jsxs)(n.p,{children:["Une fois le module simul\xe9, nous pouvons fournir un ",(0,t.jsx)(n.code,{children:"mockResolvedValue"})," pour ",(0,t.jsx)(n.code,{children:".get"})," qui renvoie les donn\xe9es que nous voulons que notre test v\xe9rifie. En effet, nous voulons que ",(0,t.jsx)(n.code,{children:"axios.get('/users.json')"})," renvoie une fausse r\xe9ponse."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="users.test.js"',children:"import axios from 'axios';\nimport Users from './users';\n\njest.mock('axios');\n\ntest('doit r\xe9cup\xe9rer les utilisateurs', () => {\n  const users = [{name: 'Bob'}];\n  const resp = {data: users};\n  axios.get.mockResolvedValue(resp);\n\n  // ou vous pouvez utiliser ce qui suit en fonction de votre cas d'utilisation\xa0:\n  // axios.get.mockImplementation(() => Promise.resolve(resp))\n\n  return Users.all().then(data => expect(data).toEqual(users));\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"simulation-partielle",children:"Simulation partielle"}),"\n",(0,t.jsx)(n.p,{children:"Les sous-ensembles d'un module peuvent \xeatre simul\xe9s et le reste du module peut conserver son impl\xe9mentation r\xe9elle\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="foo-bar-baz.js"',children:"export const foo = 'foo';\nexport const bar = () => 'bar';\nexport default () => 'baz';\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//test.js\nimport defaultExport, {bar, foo} from '../foo-bar-baz';\n\njest.mock('../foo-bar-baz', () => {\n  const originalModule = jest.requireActual('../foo-bar-baz');\n\n  //Simule l'exportation par d\xe9faut et l'exportation nomm\xe9e 'foo'\n  return {\n    __esModule: true,\n    ...originalModule,\n    default: jest.fn(() => 'mocked baz'),\n    foo: 'mocked foo',\n  };\n});\n\ntest('devrait faire une simulation partielle', () => {\n  const defaultExportResult = defaultExport();\n  expect(defaultExportResult).toBe('mocked baz');\n  expect(defaultExport).toHaveBeenCalled();\n\n  expect(foo).toBe('mocked foo');\n  expect(bar()).toBe('bar');\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"impl\xe9mentations-simul\xe9es",children:"Impl\xe9mentations simul\xe9es"}),"\n",(0,t.jsxs)(n.p,{children:["Pourtant, il existe des cas o\xf9 il est utile d'aller plus loin que la possibilit\xe9 de sp\xe9cifier des valeurs de retour et de remplacer compl\xe8tement l'impl\xe9mentation d'une fonction simul\xe9e. Cela peut \xeatre fait avec ",(0,t.jsx)(n.code,{children:"jest.fn"})," ou la m\xe9thode ",(0,t.jsx)(n.code,{children:"mockImplementationOnce"})," sur les fonctions simul\xe9es."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest.fn(cb => cb(null, true));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n"})}),"\n",(0,t.jsxs)(n.p,{children:["La m\xe9thode ",(0,t.jsx)(n.code,{children:"mockImplementation"})," est utile lorsque vous devez d\xe9finir l'impl\xe9mentation par d\xe9faut d'une fonction simul\xe9e qui est cr\xe9\xe9e \xe0 partir d'un autre module\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="foo.js"',children:"module.exports = function () {\n  // une impl\xe9mentation;\n};\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="test.js"',children:"jest.mock('../foo'); // cela se produit automatiquement avec l'autosimulation\nconst foo = require('../foo');\n\n// foo est une fonction simul\xe9e\nfoo.mockImplementation(() => 42);\nfoo();\n// > 42\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous devez recr\xe9er un comportement complexe d'une fonction simul\xe9e, de sorte que plusieurs appels de fonction produisent des r\xe9sultats diff\xe9rents, utilisez la m\xe9thode ",(0,t.jsx)(n.code,{children:"mockImplementationOnce"}),"\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n\nmyMockFn((err, val) => console.log(val));\n// > false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque la fonction simul\xe9e manque d'impl\xe9mentations d\xe9finies avec ",(0,t.jsx)(n.code,{children:"mockImplementationOnce"}),", elle ex\xe9cutera l'impl\xe9mentation par d\xe9faut d\xe9finie avec ",(0,t.jsx)(n.code,{children:"jest.fn"})," (si elle est d\xe9finie)\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn(() => 'par d\xe9faut')\n  .mockImplementationOnce(() => 'premier appel')\n  .mockImplementationOnce(() => 'second appel');\n\nconsole.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());\n// > 'premier appel', 'second appel', 'par d\xe9faut', 'par d\xe9faut'\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour les cas o\xf9 nous avons des m\xe9thodes qui sont typiquement encha\xeen\xe9es (et donc doivent toujours retourner ",(0,t.jsx)(n.code,{children:"this"}),"), nous avons une API sucr\xe9e pour simplifier cela sous la forme d'une fonction ",(0,t.jsx)(n.code,{children:".mockReturnThis()"})," qui se trouve \xe9galement sur tous les simulations :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myObj = {\n  myMethod: jest.fn().mockReturnThis(),\n};\n\n// est identique \xe0\n\nconst otherObj = {\n  myMethod: jest.fn(function () {\n    return this;\n  }),\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"noms-simul\xe9s",children:"Noms simul\xe9s"}),"\n",(0,t.jsxs)(n.p,{children:["You can optionally provide a name for your mock functions, which will be displayed instead of ",(0,t.jsx)(n.code,{children:"'jest.fn()'"})," in the test error output. Use ",(0,t.jsx)(n.a,{href:"MockFunctionAPI.md/#mockfnmocknamename",children:(0,t.jsx)(n.code,{children:".mockName()"})})," if you want to be able to quickly identify the mock function reporting an error in your test output."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockImplementation(scalar => 42 + scalar)\n  .mockName('add42');\n"})}),"\n",(0,t.jsx)(n.h2,{id:"comparateurs-personnalis\xe9s",children:"Comparateurs personnalis\xe9s"}),"\n",(0,t.jsx)(n.p,{children:"Enfin, pour qu'il soit moins difficile de d\xe9terminer comment les fonctions simul\xe9es ont \xe9t\xe9 appel\xe9es, nous avons ajout\xe9 quelques fonctions comparatrices personnalis\xe9es :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// La fonction simul\xe9e a \xe9t\xe9 appel\xe9e au moins une fois\nexpect(mockFunc).toHaveBeenCalled();\n\n// La fonction simul\xe9e a \xe9t\xe9 appel\xe9e au moins une fois avec les arguments sp\xe9cifi\xe9s\nexpect(mockFunc).toHaveBeenCalledWith(arg1, arg2);\n\n// Le dernier appel \xe0 la fonction simul\xe9e a \xe9t\xe9 appel\xe9 avec les arguments sp\xe9cifi\xe9s\nexpect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);\n\n// Tous les appels et le nom de la simulation sont \xe9crits en tant que snapshot\nexpect(mockFunc).toMatchSnapshot();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ces comparateurs sont du sucre pour les formes courantes d'inspection de la propri\xe9t\xe9 ",(0,t.jsx)(n.code,{children:".mock"}),". Vous pouvez toujours le faire manuellement si cela vous convient mieux ou si vous avez besoin de quelque chose de plus sp\xe9cifique :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// La fonction simul\xe9e a \xe9t\xe9 appel\xe9e au moins une fois\nexpect(mockFunc.mock.calls.length).toBeGreaterThan(0);\n\n// La fonction simul\xe9e a \xe9t\xe9 appel\xe9e au moins une fois avec les arguments sp\xe9cifi\xe9s\nexpect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);\n\n// Le dernier appel \xe0 la fonction fantaisie a \xe9t\xe9 appel\xe9 avec les arguments sp\xe9cifi\xe9s\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([\n  arg1,\n  arg2,\n]);\n\n// Le premier argument du dernier appel \xe0 la fonction simul\xe9e \xe9tait `42`\n// (notez qu'il n'existe pas d'aide sucr\xe9e pour cette assertion sp\xe9cifique)\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);\n\n// Un snapshot v\xe9rifiera qu'une simulation a \xe9t\xe9 appel\xe9e le m\xeame nombre de fois,\n// dans le m\xeame ordre, avec les m\xeames arguments. Il v\xe9rifiera \xe9galement le nom.\nexpect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);\nexpect(mockFunc.getMockName()).toBe('un nom de simulation');\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour une liste compl\xe8te des comparateurs, consultez les ",(0,t.jsx)(n.a,{href:"/fr/docs/next/expect",children:"docs de r\xe9f\xe9rence"}),"."]})]})}const m=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(u,e)})):u(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>a,ah:()=>l});var t=s(7378);const o=t.createContext({});function l(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function a({components:e,children:n,disableParentContext:s}){let a;return a=s?"function"==typeof e?e({}):e||c:l(e),t.createElement(o.Provider,{value:a},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[1878],{2369:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=s(4246),o=s(1670);const a={id:"setup-teardown",title:"Pr\xe9paration et nettoyage"},r=void 0,i={unversionedId:"setup-teardown",id:"setup-teardown",title:"Pr\xe9paration et nettoyage",description:"Souvent, lorsque vous \xe9crivez des tests, vous devez effectuer un travail de pr\xe9paration avant l'ex\xe9cution des tests, et un travail de nettoyage apr\xe8s l'ex\xe9cution des tests. Jest fournit des fonctions d'aide pour g\xe9rer cela.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/SetupAndTeardown.md",sourceDirName:".",slug:"/setup-teardown",permalink:"/fr/docs/next/setup-teardown",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"current",frontMatter:{id:"setup-teardown",title:"Pr\xe9paration et nettoyage"},sidebar:"docs",previous:{title:"Tester du code asynchrone",permalink:"/fr/docs/next/asynchronous"},next:{title:"Fonctions simul\xe9es",permalink:"/fr/docs/next/mock-functions"}},l={},c=[{value:"Pr\xe9parations r\xe9p\xe9t\xe9es",id:"pr\xe9parations-r\xe9p\xe9t\xe9es",level:2},{value:"Pr\xe9paration \xe0 usage unique",id:"pr\xe9paration-\xe0-usage-unique",level:2},{value:"Champ d&#39;application",id:"champ-dapplication",level:2},{value:"Ordre d&#39;ex\xe9cution",id:"ordre-dex\xe9cution",level:2},{value:"Indications g\xe9n\xe9rales",id:"indications-g\xe9n\xe9rales",level:2}];function d(e){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a",em:"em",admonition:"admonition"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Souvent, lorsque vous \xe9crivez des tests, vous devez effectuer un travail de pr\xe9paration avant l'ex\xe9cution des tests, et un travail de nettoyage apr\xe8s l'ex\xe9cution des tests. Jest fournit des fonctions d'aide pour g\xe9rer cela."}),"\n",(0,t.jsx)(n.h2,{id:"pr\xe9parations-r\xe9p\xe9t\xe9es",children:"Pr\xe9parations r\xe9p\xe9t\xe9es"}),"\n",(0,t.jsxs)(n.p,{children:["Si vous avez un travail \xe0 faire de mani\xe8re r\xe9p\xe9titive pour de nombreux tests, vous pouvez utiliser les hooks ",(0,t.jsx)(n.code,{children:"beforeEach"})," et ",(0,t.jsx)(n.code,{children:"afterEach"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Par exemple, disons que plusieurs tests interagissent avec une base de donn\xe9es de villes. Vous avez une m\xe9thode ",(0,t.jsx)(n.code,{children:"initializeCityDatabase()"})," qui doit \xeatre appel\xe9e avant chacun de ces tests, et une m\xe9thode ",(0,t.jsx)(n.code,{children:"clearCityDatabase()"})," qui doit \xeatre appel\xe9e apr\xe8s chacun de ces tests. Vous pouvez le faire avec\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  initializeCityDatabase();\n});\n\nafterEach(() => {\n  clearCityDatabase();\n});\n\ntest('la base de donn\xe9e poss\xe8de Vienne', () => {\n  expect(isCity('Vienne')).toBeTruthy();\n});\n\ntest('la base de donn\xe9e poss\xe8de San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"beforeEach"})," et ",(0,t.jsx)(n.code,{children:"afterEach"})," peuvent g\xe9rer le code asynchrone de la m\xeame mani\xe8re que ",(0,t.jsx)(n.a,{href:"/fr/docs/next/asynchronous",children:"les tests peuvent g\xe9rer le code asynchrone"})," - ils peuvent soit prendre un param\xe8tre ",(0,t.jsx)(n.code,{children:"done"}),", soit retourner une promesse. Par exemple, si ",(0,t.jsx)(n.code,{children:"initializeCityDatabase()"})," renvoyait une promesse qui r\xe9solvait le moment o\xf9 la base de donn\xe9es \xe9tait initialis\xe9e, nous voudrions renvoyer cette promesse\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"beforeEach(() => {\n  return initializeCityDatabase();\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"pr\xe9paration-\xe0-usage-unique",children:"Pr\xe9paration \xe0 usage unique"}),"\n",(0,t.jsxs)(n.p,{children:["Dans certains cas, vous n'avez besoin de faire la pr\xe9paration qu'une seule fois, au d\xe9but d'un fichier. Cela peut \xeatre particuli\xe8rement g\xeanant lorsque la pr\xe9paration est asynchrone, et que vous ne pouvez donc pas le faire en m\xeame temps. Jest fournit les hooks ",(0,t.jsx)(n.code,{children:"beforeAll"})," et ",(0,t.jsx)(n.code,{children:"afterAll"})," pour g\xe9rer cette situation."]}),"\n",(0,t.jsxs)(n.p,{children:["Par exemple, si les deux ",(0,t.jsx)(n.code,{children:"initializeCityDatabase()"})," et ",(0,t.jsx)(n.code,{children:"clearCityDatabase()"})," retournent des promesses, et que la base de donn\xe9es de la ville peut \xeatre r\xe9utilis\xe9e entre les tests, nous pourrions modifier notre code de test en :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"beforeAll(() => {\n  return initializeCityDatabase();\n});\n\nafterAll(() => {\n  return clearCityDatabase();\n});\n\ntest('la base de donn\xe9e poss\xe8de Vienne', () => {\n  expect(isCity('Vienna')).toBeTruthy();\n});\n\ntest('la base de donn\xe9e poss\xe8de San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"champ-dapplication",children:"Champ d'application"}),"\n",(0,t.jsxs)(n.p,{children:["The top level ",(0,t.jsx)(n.code,{children:"before*"})," and ",(0,t.jsx)(n.code,{children:"after*"})," hooks apply to every test in a file. The hooks declared inside a ",(0,t.jsx)(n.code,{children:"describe"})," block apply only to the tests within that ",(0,t.jsx)(n.code,{children:"describe"})," block."]}),"\n",(0,t.jsx)(n.p,{children:"Par exemple, supposons que nous ayons non seulement une base de donn\xe9es sur les villes, mais aussi une base de donn\xe9es sur les aliments. Nous pourrions faire diff\xe9rentes configurations pour diff\xe9rents tests\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"// S'applique \xe0 tous les tests de ce fichier\nbeforeEach(() => {\n  return initializeCityDatabase();\n});\n\ntest('la base de donn\xe9e poss\xe8de Vienne', () => {\n  expect(isCity('Vienne')).toBeTruthy();\n});\n\ntest('la base de donn\xe9e poss\xe8de San Juan', () => {\n  expect(isCity('San Juan')).toBeTruthy();\n});\n\ndescribe('correspondance entre les villes et les aliments', () => {\n  // S'applique uniquement aux tests de ce bloc describe\n  beforeEach(() => {\n    return initializeFoodDatabase();\n  });\n\n  test('Vienna <3 veau', () => {\n    expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);\n  });\n\n  test('San Juan <3 bananes plantain', () => {\n    expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);\n  });\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Notez que le ",(0,t.jsx)(n.code,{children:"beforeEach"})," en haut du fichier est ex\xe9cut\xe9 avant le ",(0,t.jsx)(n.code,{children:"beforeEach"})," \xe0 l'int\xe9rieur du bloc ",(0,t.jsx)(n.code,{children:"describe"}),". Il peut \xeatre utile d'illustrer l'ordre d'ex\xe9cution de tous les hooks."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"beforeAll(() => console.log('1 - beforeAll'));\nafterAll(() => console.log('1 - afterAll'));\nbeforeEach(() => console.log('1 - beforeEach'));\nafterEach(() => console.log('1 - afterEach'));\n\ntest('', () => console.log('1 - test'));\n\ndescribe('Scoped / Nested block', () => {\n  beforeAll(() => console.log('2 - beforeAll'));\n  afterAll(() => console.log('2 - afterAll'));\n  beforeEach(() => console.log('2 - beforeEach'));\n  afterEach(() => console.log('2 - afterEach'));\n\n  test('', () => console.log('2 - test'));\n});\n\n// 1 - beforeAll\n// 1 - beforeEach\n// 1 - test\n// 1 - afterEach\n// 2 - beforeAll\n// 1 - beforeEach\n// 2 - beforeEach\n// 2 - test\n// 2 - afterEach\n// 1 - afterEach\n// 2 - afterAll\n// 1 - afterAll\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ordre-dex\xe9cution",children:"Ordre d'ex\xe9cution"}),"\n",(0,t.jsxs)(n.p,{children:["Jest ex\xe9cute tous les gestionnaires de describe dans un fichier de test ",(0,t.jsx)(n.em,{children:"avant"})," qu'il n'ex\xe9cute les tests proprement dits. C'est une autre raison de faire la pr\xe9paration et le nettoyage \xe0 l'int\xe9rieur des gestionnaires ",(0,t.jsx)(n.code,{children:"before*"})," et ",(0,t.jsx)(n.code,{children:"after*"})," plut\xf4t qu'\xe0 l'int\xe9rieur des blocs ",(0,t.jsx)(n.code,{children:"describe"}),". Une fois les blocs ",(0,t.jsx)(n.code,{children:"describe"})," termin\xe9s, par d\xe9faut, Jest ex\xe9cute tous les tests en s\xe9rie dans l'ordre o\xf9 ils ont \xe9t\xe9 rencontr\xe9s dans la phase de collecte, en attendant que chacun d'eux se termine et soit nettoy\xe9 avant de passer \xe0 la suite."]}),"\n",(0,t.jsx)(n.p,{children:"Consid\xe9rez le fichier de test illustratif suivant et la sortie :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"describe('describe outer', () => {\n  console.log('describe outer-a');\n\n  describe('describe inner 1', () => {\n    console.log('describe inner 1');\n\n    test('test 1', () => console.log('test 1'));\n  });\n\n  console.log('describe outer-b');\n\n  test('test 2', () => console.log('test 2'));\n\n  describe('describe inner 2', () => {\n    console.log('describe inner 2');\n\n    test('test 3', () => console.log('test 3'));\n  });\n\n  console.log('describe outer-c');\n});\n\n// describe outer-a\n// describe inner 1\n// describe outer-b\n// describe inner 2\n// describe outer-c\n// test 1\n// test 2\n// test 3\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Tout comme les blocs ",(0,t.jsx)(n.code,{children:"describe"})," et ",(0,t.jsx)(n.code,{children:"test"}),", Jest appelle les hooks ",(0,t.jsx)(n.code,{children:"before*"})," et ",(0,t.jsx)(n.code,{children:"after*"})," dans l'ordre de d\xe9claration. Veuillez noter que les crochets ",(0,t.jsx)(n.code,{children:"after*"})," de la port\xe9e englobante sont appel\xe9s en premier. Par exemple, voici comment vous pouvez pr\xe9parer et nettoyer des ressources qui d\xe9pendent les unes des autres\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"beforeEach(() => console.log('pr\xe9paration de la connexion'));\nbeforeEach(() => console.log('pr\xe9paration de la base de donn\xe9es'));\n\nafterEach(() => console.log('nettoyage de la base de donn\xe9es'));\nafterEach(() => console.log('nettoyage de la connexion'));\n\ntest('test 1', () => console.log('test 1'));\n\ndescribe('extra', () => {\n  beforeEach(() => console.log('pr\xe9paration suppl\xe9mentaire de la base de donn\xe9es'));\n  afterEach(() => console.log('nettoyage suppl\xe9mentaire de la base de donn\xe9es'));\n\n  test('test 2', () => console.log('test 2'));\n});\n\n// pr\xe9paration de la connexion\n// pr\xe9paration de la base de donn\xe9es\n// test 1\n// nettoyage de la base de donn\xe9es\n// nettoyage de la connexion\n\n// pr\xe9paration de la connexion\n// pr\xe9paration de la base de donn\xe9es\n// pr\xe9paration suppl\xe9mentaire de la base de donn\xe9es\n// test 2\n// nettoyage suppl\xe9mentaire de la base de donn\xe9es\n// nettoyage de la base de donn\xe9es\n// nettoyage de la connexion\n"})}),"\n",(0,t.jsxs)(n.admonition,{title:"remarque",type:"note",children:[(0,t.jsxs)(n.p,{children:["Si vous utilisez l'ex\xe9cuteur de test ",(0,t.jsx)(n.code,{children:"jasmine2"}),", tenez compte du fait qu'il appelle les hooks ",(0,t.jsx)(n.code,{children:"after*"})," dans l'ordre inverse de la d\xe9claration. Pour obtenir un r\xe9sultat identique, l'exemple ci-dessus doit \xeatre modifi\xe9 comme suit\xa0:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:"  beforeEach(() => console.log('pr\xe9paration de la connexion'));\n+ afterEach(() => console.log('nettoyage de la connexion'));\n\n  beforeEach(() => console.log('pr\xe9paration de la base de donn\xe9es'));\n+ afterEach(() => console.log('nettoyage de la base de donn\xe9es'));\n\n- afterEach(() => console.log('nettoyage de la base de donn\xe9es'));\n- afterEach(() => console.log('nettoyage de la connexion'));\n\n  // ...\n"})})]}),"\n",(0,t.jsx)(n.h2,{id:"indications-g\xe9n\xe9rales",children:"Indications g\xe9n\xe9rales"}),"\n",(0,t.jsxs)(n.p,{children:["Si un test \xe9choue, l'une des premi\xe8res choses \xe0 v\xe9rifier : est-ce que le test \xe9choue si c'est le seul test ex\xe9cut\xe9 ? Pour ex\xe9cuter un seul test avec Jest, changez temporairement cette commande ",(0,t.jsx)(n.code,{children:"test"})," en une commande ",(0,t.jsx)(n.code,{children:"test.only"})," :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"test.only('ce sera le seul test ex\xe9cut\xe9', () => {\n  expect(true).toBe(false);\n});\n\ntest('ce test ne s'ex\xe9cutera pas', () => {\n  expect('A').toBe('A');\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Si vous avez un test qui \xe9choue souvent lorsqu'il est ex\xe9cut\xe9 dans une s\xe9rie plus grande, mais qui n'\xe9choue pas lorsque vous l'ex\xe9cutez seul, il est fort probable que quelque chose d'un autre test interf\xe8re avec celui-ci. Vous pouvez souvent corriger cela en nettoyant certains \xe9tats partag\xe9s avec ",(0,t.jsx)(n.code,{children:"beforeEach"}),". Si vous n'\xeates pas s\xfbr qu'un \xe9tat partag\xe9 soit modifi\xe9, vous pouvez \xe9galement essayer un ",(0,t.jsx)(n.code,{children:"beforeEach"})," qui journalise les donn\xe9es."]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var t=s(7378);const o=t.createContext({});function a(e){const n=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:a(e),t.createElement(o.Provider,{value:i},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[6645],{6472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=t(4246),r=t(1670);const o={id:"using-matchers",title:"Utilisation des comparateurs"},i=void 0,c={unversionedId:"using-matchers",id:"using-matchers",title:"Utilisation des comparateurs",description:"Jest utilise des \xab\xa0comparateurs\xa0\xbb (NdT \xab\xa0matchers\xa0\xbb) pour vous permettre de tester des valeurs de diff\xe9rentes mani\xe8res. Ce document pr\xe9sente quelques comparateurs couramment utilis\xe9s. Pour la liste compl\xe8te, consultez la documentation de l'API de expect.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/UsingMatchers.md",sourceDirName:".",slug:"/using-matchers",permalink:"/fr/docs/next/using-matchers",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"current",frontMatter:{id:"using-matchers",title:"Utilisation des comparateurs"},sidebar:"docs",previous:{title:"Premiers pas",permalink:"/fr/docs/next/getting-started"},next:{title:"Tester du code asynchrone",permalink:"/fr/docs/next/asynchronous"}},a={},l=[{value:"Comparateurs courants",id:"comparateurs-courants",level:2},{value:"Valeur de v\xe9rit\xe9",id:"valeur-de-v\xe9rit\xe9",level:2},{value:"Nombres",id:"nombres",level:2},{value:"Chaines de caract\xe8res (Strings)",id:"chaines-de-caract\xe8res-strings",level:2},{value:"Tableaux et it\xe9rables",id:"tableaux-et-it\xe9rables",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Et bien plus encore",id:"et-bien-plus-encore",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",admonition:"admonition",ul:"ul",li:"li"},(0,r.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Jest utilise des \xab\xa0comparateurs\xa0\xbb (NdT \xab\xa0matchers\xa0\xbb) pour vous permettre de tester des valeurs de diff\xe9rentes mani\xe8res. Ce document pr\xe9sente quelques comparateurs couramment utilis\xe9s. Pour la liste compl\xe8te, consultez la ",(0,s.jsxs)(n.a,{href:"/fr/docs/next/expect",children:["documentation de l'API de ",(0,s.jsx)(n.code,{children:"expect"})]}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"comparateurs-courants",children:"Comparateurs courants"}),"\n",(0,s.jsx)(n.p,{children:"La fa\xe7on la plus simple de tester une valeur est de garantir une \xe9galit\xe9 exacte."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('deux plus deux font quatre', () => {\n  expect(2 + 2).toBe(4);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Dans ce code, ",(0,s.jsx)(n.code,{children:"expect(2 + 2)"})," retourne un objet \xab attendu\xa0\xbb. En r\xe8gle g\xe9n\xe9rale, vous ne ferez pas grand-chose avec ces objets d'attente, si ce n'est appeler des comparateurs sur ces m\xeames objets. Dans ce code, ",(0,s.jsx)(n.code,{children:".toBe(4)"})," est le comparateur. Lorsque Jest s'ex\xe9cute, il rep\xe8re toutes les comparateurs qui \xe9chouent afin de vous afficher de jolis messages d'erreur."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toBe"})," utilise ",(0,s.jsx)(n.code,{children:"Object.is"})," pour tester l'\xe9galit\xe9 exacte. If you want to check the value of an object, use ",(0,s.jsx)(n.code,{children:"toEqual"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('object assignment', () => {\n  const data = {one: 1};\n  data['two'] = 2;\n  expect(data).toEqual({one: 1, two: 2});\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toEqual"})," v\xe9rifie r\xe9cursivement chaque champ d'un objet ou d'un tableau."]}),"\n",(0,s.jsx)(n.admonition,{title:"astuce",type:"tip",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"toEqual"})," ignores object keys with ",(0,s.jsx)(n.code,{children:"undefined"})," properties, ",(0,s.jsx)(n.code,{children:"undefined"})," array items, array sparseness, or object type mismatch. To take these into account use ",(0,s.jsx)(n.code,{children:"toStrictEqual"})," instead."]})}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez \xe9galement tester pour le contraire d'un comparateur en utilisant ",(0,s.jsx)(n.code,{children:"not"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('l\\'addition de nombres positifs n\\'est pas \xe9gale \xe0 z\xe9ro', () => {\n  for (let a = 1; a < 10; a++) {\n    for (let b = 1; b < 10; b++) {\n      expect(a + b).not.toBe(0);\n    }\n  }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"valeur-de-v\xe9rit\xe9",children:"Valeur de v\xe9rit\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["Dans les tests, vous devez parfois faire la distinction entre ",(0,s.jsx)(n.code,{children:"undefined"}),", ",(0,s.jsx)(n.code,{children:"null"})," et ",(0,s.jsx)(n.code,{children:"false"}),", mais dans d'autres cas, vous ne souhaitez pas les traiter diff\xe9remment. Jest dispose d'outils qui vous permettent d'\xeatre plus pr\xe9cis sur ce que vous voulez."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeNull"})," correspond uniquement \xe0 ",(0,s.jsx)(n.code,{children:"null"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeUndefined"})," correspond uniquement \xe0 ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeDefined"})," est le contraire de ",(0,s.jsx)(n.code,{children:"toBeUndefined"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeTruthy"})," correspond \xe0 tout ce qu'une instruction ",(0,s.jsx)(n.code,{children:"if"})," traite comme vrai"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"toBeFalsy"})," correspond \xe0 tout ce qu'une instruction ",(0,s.jsx)(n.code,{children:"if"})," traite comme faux"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Par exemple\xa0:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('null', () => {\n  const n = null;\n  expect(n).toBeNull();\n  expect(n).toBeDefined();\n  expect(n).not.toBeUndefined();\n  expect(n).not.toBeTruthy();\n  expect(n).toBeFalsy();\n});\n\ntest('zero', () => {\n  const z = 0;\n  expect(z).not.toBeNull();\n  expect(z).toBeDefined();\n  expect(z).not.toBeUndefined();\n  expect(z).not.toBeTruthy();\n  expect(z).toBeFalsy();\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Vous devez utiliser le comparateur qui correspond le plus pr\xe9cis\xe9ment \xe0 ce que vous voulez que votre code fasse."}),"\n",(0,s.jsx)(n.h2,{id:"nombres",children:"Nombres"}),"\n",(0,s.jsx)(n.p,{children:"La plupart des m\xe9thodes de comparaison de nombres ont des comparateurs \xe9quivalents."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('deux plus deux', () => {\n  const value = 2 + 2;\n  expect(value).toBeGreaterThan(3);\n  expect(value).toBeGreaterThanOrEqual(3.5);\n  expect(value).toBeLessThan(5);\n  expect(value).toBeLessThanOrEqual(4.5);\n\n  // toBe et toEqual sont \xe9quivalents pour les nombres\n  expect(value).toBe(4);\n  expect(value).toEqual(4);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Pour l'\xe9galit\xe9 en virgule flottante, utilisez ",(0,s.jsx)(n.code,{children:"toBeCloseTo"})," au lieu de ",(0,s.jsx)(n.code,{children:"toEqual"}),", car vous ne voulez pas qu'un test d\xe9pende d'une minuscule erreur d'arrondi."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test('ajout de nombres \xe0 virgule flottantes', () => {\n  const value = 0.1 + 0.2;\n  //expect(value).toBe(0.3);           Cela ne fonctionnera pas en raison d'une erreur d'arrondi\n  expect(value).toBeCloseTo(0.3); // Cela fonctionne.\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"chaines-de-caract\xe8res-strings",children:"Chaines de caract\xe8res (Strings)"}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez v\xe9rifier les cha\xeenes de caract\xe8res par rapport aux expressions r\xe9guli\xe8res avec ",(0,s.jsx)(n.code,{children:"toMatch"}),"\xa0:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"test(\"il n'y a pas de I dans team\", () => {\n  expect('team').not.toMatch(/I/);\n});\n\ntest('mais il y a \"stop\" dans Christoph', () => {\n  expect('Christoph').toMatch(/stop/);\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"tableaux-et-it\xe9rables",children:"Tableaux et it\xe9rables"}),"\n",(0,s.jsxs)(n.p,{children:["Vous pouvez v\xe9rifier si un tableau ou une it\xe9rable contient un \xe9l\xe9ment particulier en utilisant ",(0,s.jsx)(n.code,{children:"toContain"}),"\xa0:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const shoppingList = [\n  'diapers',\n  'kleenex',\n  'trash bags',\n  'paper towels',\n  'milk',\n];\n\ntest('la liste de course poss\xe8de du lait', () => {\n  expect(shoppingList).toContain('milk');\n  expect(new Set(shoppingList)).toContain('milk');\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,s.jsxs)(n.p,{children:["Si vous voulez tester si une fonction particuli\xe8re l\xe8ve une erreur lorsqu'elle est appel\xe9e, utilisez ",(0,s.jsx)(n.code,{children:"toThrow"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function compileAndroidCode() {\n  throw new Error('you are using the wrong JDK!');\n}\n\ntest('compiling android goes as expected', () => {\n  expect(() => compileAndroidCode()).toThrow();\n  expect(() => compileAndroidCode()).toThrow(Error);\n\n  // You can also use a string that must be contained in the error message or a regexp\n  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');\n  expect(() => compileAndroidCode()).toThrow(/JDK/);\n\n  // Or you can match an exact error message using a regexp like below\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass\n});\n"})}),"\n",(0,s.jsx)(n.admonition,{title:"astuce",type:"tip",children:(0,s.jsxs)(n.p,{children:["The function that throws an exception needs to be invoked within a wrapping function otherwise the ",(0,s.jsx)(n.code,{children:"toThrow"})," assertion will fail."]})}),"\n",(0,s.jsx)(n.h2,{id:"et-bien-plus-encore",children:"Et bien plus encore"}),"\n",(0,s.jsxs)(n.p,{children:["Ce n'est qu'un avant-go\xfbt. Pour une liste compl\xe8te des comparateurs, consultez les ",(0,s.jsx)(n.a,{href:"/fr/docs/next/expect",children:"docs de r\xe9f\xe9rence"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Une fois que vous avez pris connaissance des comparateurs disponibles, la prochaine \xe9tape consiste \xe0 d\xe9couvrir comment Jest vous permet de ",(0,s.jsx)(n.a,{href:"/fr/docs/next/asynchronous",children:" tester du code asynchrone "}),"."]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(d,e)})):d(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>o});var s=t(7378);const r=s.createContext({});function o(e){const n=s.useContext(r);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||i:o(e),s.createElement(r.Provider,{value:c},n)}}}]);
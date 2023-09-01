"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3966],{2408:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=s(4246),t=s(1670);const a={id:"using-matchers",title:"Usando Matchers"},r=void 0,i={unversionedId:"using-matchers",id:"version-29.6/using-matchers",title:"Usando Matchers",description:'O Jest usa "matchers" para que voc\xea possa testar valores de maneiras diferentes. Este documento dar\xe1 uma introdu\xe7\xe3o de algumas diretrizes de uso de "matchers". Para ter a lista completa, veja expect API doc.',source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/UsingMatchers.md",sourceDirName:".",slug:"/using-matchers",permalink:"/pt-BR/docs/using-matchers",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"using-matchers",title:"Usando Matchers"},sidebar:"docs",previous:{title:"Iniciando",permalink:"/pt-BR/docs/getting-started"},next:{title:"Testando C\xf3digo Ass\xedncrono",permalink:"/pt-BR/docs/asynchronous"}},c={},d=[{value:"Matchers Comuns",id:"matchers-comuns",level:2},{value:"Verdade",id:"verdade",level:2},{value:"N\xfameros",id:"n\xfameros",level:2},{value:"Strings",id:"strings",level:2},{value:"Arrays e iter\xe1veis",id:"arrays-e-iter\xe1veis",level:2},{value:"Exce\xe7\xf5es",id:"exce\xe7\xf5es",level:2},{value:"E muito mais",id:"e-muito-mais",level:2}];function l(e){const n=Object.assign({p:"p",a:"a",code:"code",h2:"h2",pre:"pre",admonition:"admonition",ul:"ul",li:"li"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:['O Jest usa "matchers" para que voc\xea possa testar valores de maneiras diferentes. Este documento dar\xe1 uma introdu\xe7\xe3o de algumas diretrizes de uso de "matchers". Para ter a lista completa, veja ',(0,o.jsxs)(n.a,{href:"/pt-BR/docs/expect",children:[(0,o.jsx)(n.code,{children:"expect"})," API doc"]}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"matchers-comuns",children:"Matchers Comuns"}),"\n",(0,o.jsx)(n.p,{children:"A maneira mais simples para testar um valor \xe9 com igualdade exata."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('dois mais dois \xe9 quatro', () => {\n  expect(2 + 2).toBe(4);\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Nesse c\xf3digo, ",(0,o.jsx)(n.code,{children:"expect(2 + 2)"}),' retorna um objeto de "expectativa". Voc\xea normalmente n\xe3o vai fazer muito com esses objetos de expectativa exceto chamada "matchers" neles. Nesse c\xf3digo, o ',(0,o.jsx)(n.code,{children:".toBe(4)"}),' \xe9 o "matcher". Quando Jest \xe9 executado, ele rastreia todos os "matchers" que falharam para que possa imprimir as mensagens de erro para voc\xea de uma forma agrad\xe1vel.']}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"toBe"})," utiliza ",(0,o.jsx)(n.code,{children:"Object.is"})," para testar a igualdade exata. Se voc\xea quer checar o valor de um objeto, use ",(0,o.jsx)(n.code,{children:"toEqual"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('atribui\xe7\xe3o de objeto', () => {\n  const data = {one: 1};\n  data['two'] = 2;\n  expect(data).toEqual({one: 1, two: 2});\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"toEqual"})," recursivamente verifica cada campo de um objeto ou array."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"toEqual"})," ignores object keys with ",(0,o.jsx)(n.code,{children:"undefined"})," properties, ",(0,o.jsx)(n.code,{children:"undefined"})," array items, array sparseness, or object type mismatch. To take these into account use ",(0,o.jsx)(n.code,{children:"toStrictEqual"})," instead."]})}),"\n",(0,o.jsxs)(n.p,{children:["You can also test for the opposite of a matcher using ",(0,o.jsx)(n.code,{children:"not"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('adicionando n\xfameros positivos n\xe3o \xe9 zero', () => {\n  for (let a = 1; a < 10; a++) {\n    for (let b = 1; b < 10; b++) {\n      expect(a + b).not.toBe(0);\n    }\n  }\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"verdade",children:"Verdade"}),"\n",(0,o.jsxs)(n.p,{children:["Em testes \xe0s vezes voc\xea precisa distinguir entre ",(0,o.jsx)(n.code,{children:"undefined"}),", ",(0,o.jsx)(n.code,{children:"null"})," e ",(0,o.jsx)(n.code,{children:"false"}),", mas \xe0s vezes voc\xea n\xe3o quer tratar estes de maneira diferente. Jest cont\xe9m auxiliares que permitem voc\xea ser expl\xedcito sobre o que quer."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeNull"})," corresponde a apenas ",(0,o.jsx)(n.code,{children:"null"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeUndefined"})," corresponde a apenas ",(0,o.jsx)(n.code,{children:"undefined"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeDefined"})," \xe9 o oposto de ",(0,o.jsx)(n.code,{children:"toBeUndefined"})]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeTruthy"})," combina com qualquer coisa que uma instru\xe7\xe3o ",(0,o.jsx)(n.code,{children:"if"})," trata como verdadeiro"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"toBeFalsy"})," combina com qualquer coisa que uma instru\xe7\xe3o ",(0,o.jsx)(n.code,{children:"if"})," trata como falso"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Por exemplo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('nulo', () => {\n  const n = null;\n  expect(n).toBeNull();\n  expect(n).toBeDefined();\n  expect(n).not.toBeUndefined();\n  expect(n).not.toBeTruthy();\n  expect(n).toBeFalsy();\n});\n\ntest('zero', () => {\n  const z = 0;\n  expect(z).not.toBeNull();\n  expect(z).toBeDefined();\n  expect(z).not.toBeUndefined();\n  expect(z).not.toBeTruthy();\n  expect(z).toBeFalsy();\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:'Voc\xea deve usar o "matcher" que corresponde mais precisamente para o que voc\xea deseja que seu c\xf3digo fa\xe7a.'}),"\n",(0,o.jsx)(n.h2,{id:"n\xfameros",children:"N\xfameros"}),"\n",(0,o.jsx)(n.p,{children:'A maioria das formas de comparar n\xfameros t\xeam "matcher" equivalentes.'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('dois mais dois', () => {\n  const value = 2 + 2;\n  expect(value).toBeGreaterThan(3);\n  expect(value).toBeGreaterThanOrEqual(3.5);\n  expect(value).toBeLessThan(5);\n  expect(value).toBeLessThanOrEqual(4.5);\n\n  // toBe e toEqual s\xe3o equivalentes para n\xfameros\n  expect(value).toBe(4);\n  expect(value).toEqual(4);\n});\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Para igualdade de ponto flutuante, use ",(0,o.jsx)(n.code,{children:"toBeCloseTo"})," em vez de ",(0,o.jsx)(n.code,{children:"toEqual"}),", porque voc\xea n\xe3o quer um teste dependa de um pequeno erro de arredondamento."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('adicionando n\xfameros de ponto flutuante', () => {\n  const value = 0.1 + 0.2;\n  //expect(value).toBe(0.3);     Isso n\xe3o vai funcionar por causa de um erro de arredondamento\n  expect(value).toBeCloseTo(0.3); // Isso funciona.\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"strings",children:"Strings"}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea pode verificar strings contra express\xf5es regulares com ",(0,o.jsx)(n.code,{children:"toMatch"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"test('n\xe3o existe I em team', () => {\n  expect('team').not.toMatch(/I/);\n});\n\ntest('mas existe \"stop\" em Christoph', () => {\n  expect('Christoph').toMatch(/stop/);\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"arrays-e-iter\xe1veis",children:"Arrays e iter\xe1veis"}),"\n",(0,o.jsxs)(n.p,{children:["Voc\xea pode verificar se um array ou iter\xe1vel cont\xe9m um item espec\xedfico usando ",(0,o.jsx)(n.code,{children:"toContain"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"const shoppingList = [\n  'fraldas',\n  'kleenex',\n  'sacos de lixo',\n  'papel toalha',\n  'leite',\n];\n\ntest('a lista de compras tem leite nela', () => {\n  expect(shoppingList).toContain('leite');\n  expect(new Set(shoppingList)).toContain('leite');\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"exce\xe7\xf5es",children:"Exce\xe7\xf5es"}),"\n",(0,o.jsxs)(n.p,{children:["Se voc\xea quiser testar se uma determinada fun\xe7\xe3o lan\xe7a um erro quando \xe9 chamada, use ",(0,o.jsx)(n.code,{children:"toThrow"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"function compileAndroidCode() {\n  throw new Error('you are using the wrong JDK!');\n}\n\ntest('compiling android goes as expected', () => {\n  expect(() => compileAndroidCode()).toThrow();\n  expect(() => compileAndroidCode()).toThrow(Error);\n\n  // You can also use a string that must be contained in the error message or a regexp\n  expect(() => compileAndroidCode()).toThrow('you are using the wrong JDK');\n  expect(() => compileAndroidCode()).toThrow(/JDK/);\n\n  // Or you can match an exact error message using a regexp like below\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK$/); // Test fails\n  expect(() => compileAndroidCode()).toThrow(/^you are using the wrong JDK!$/); // Test pass\n});\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["The function that throws an exception needs to be invoked within a wrapping function otherwise the ",(0,o.jsx)(n.code,{children:"toThrow"})," assertion will fail."]})}),"\n",(0,o.jsx)(n.h2,{id:"e-muito-mais",children:"E muito mais"}),"\n",(0,o.jsxs)(n.p,{children:['Isto \xe9 s\xf3 uma amostra. Para obter uma lista completa de "matchers", confira a ',(0,o.jsx)(n.a,{href:"/pt-BR/docs/expect",children:"documenta\xe7\xe3o de refer\xeancia"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Uma vez que voc\xea aprendeu sobre os "matchers" que est\xe3o dispon\xedveis, um pr\xf3ximo passo \xe9 conferir como Jest permite que voc\xea ',(0,o.jsx)(n.a,{href:"/pt-BR/docs/asynchronous",children:"teste c\xf3digo ass\xedncrono"}),"."]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>a});var o=s(7378);const t=o.createContext({});function a(e){const n=o.useContext(t);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||r:a(e),o.createElement(t.Provider,{value:i},n)}}}]);
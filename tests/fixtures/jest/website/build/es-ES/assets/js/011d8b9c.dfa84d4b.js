"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5086],{8167:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>i});var n=s(4246),t=s(1670);const r={id:"asynchronous",title:"Tests de c\xf3digo as\xedncrono"},c=void 0,o={unversionedId:"asynchronous",id:"version-29.5/asynchronous",title:"Tests de c\xf3digo as\xedncrono",description:"Es com\xfan en JavaScript ejecutar c\xf3digo de forma as\xedncrona. Si tienes c\xf3digo que se ejecuta de forma as\xedncrona, Jest debe saber cu\xe1ndo ha terminado de ejecutarse el c\xf3digo de prueba, antes de que puede pasar a otro test. Jest tiene varias formas de manejar esto.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/version-29.5/TestingAsyncCode.md",sourceDirName:".",slug:"/asynchronous",permalink:"/es-ES/docs/29.5/asynchronous",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.5",frontMatter:{id:"asynchronous",title:"Tests de c\xf3digo as\xedncrono"},sidebar:"docs",previous:{title:"Utilizando Comparadores",permalink:"/es-ES/docs/29.5/using-matchers"},next:{title:"Inicializaci\xf3n y Finalizaci\xf3n",permalink:"/es-ES/docs/29.5/setup-teardown"}},l={},i=[{value:"Promesas",id:"promesas",level:2},{value:"Async/Await",id:"asyncawait",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"<code>resolves</code> / <code>rejects</code>",id:"resolves--rejects",level:2}];function d(e){const a=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",admonition:"admonition",em:"em"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Es com\xfan en JavaScript ejecutar c\xf3digo de forma as\xedncrona. Si tienes c\xf3digo que se ejecuta de forma as\xedncrona, Jest debe saber cu\xe1ndo ha terminado de ejecutarse el c\xf3digo de prueba, antes de que puede pasar a otro test. Jest tiene varias formas de manejar esto."}),"\n",(0,n.jsx)(a.h2,{id:"promesas",children:"Promesas"}),"\n",(0,n.jsx)(a.p,{children:"Devolver una promesa desde el test, y Jest esperar\xe1 a que esa promesa resuelva. Si la promesa se rechaza, la prueba fallar\xe1."}),"\n",(0,n.jsxs)(a.p,{children:["For example, let's say that ",(0,n.jsx)(a.code,{children:"fetchData"})," returns a promise that is supposed to resolve to the string ",(0,n.jsx)(a.code,{children:"'peanut butter'"}),". Podr\xedamos testearlo con:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test('el dato es peanut butter', () => {\n  return fetchData().then(data => {\n    expect(data).toBe('peanut butter');\n  });\n});\n"})}),"\n",(0,n.jsx)(a.h2,{id:"asyncawait",children:"Async/Await"}),"\n",(0,n.jsxs)(a.p,{children:["Como alternativa, se puede usar ",(0,n.jsx)(a.code,{children:"async"})," y ",(0,n.jsx)(a.code,{children:"await"})," en tests. Para escribir un test as\xedncrono, s\xf3lo tienes que utilizar la palabra clave ",(0,n.jsx)(a.code,{children:"async"})," al frente de la funci\xf3n pasada al ",(0,n.jsx)(a.code,{children:"test"}),". Por ejemplo, puede probarse el mismo escenario de ",(0,n.jsx)(a.code,{children:"fetchData"})," con:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test(el dato es peanut butter', async () => {\n  const data = await fetchData();\n  expect(data).toBe('peanut butter');\n});\n\ntest('the fetch fails with an error', async () => {\n  expect.assertions(1);\n  try {\n    await fetchData();\n  } catch (e) {\n    expect(e).toMatch('error');\n  }\n});\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Puede combinar ",(0,n.jsx)(a.code,{children:"async"})," y ",(0,n.jsx)(a.code,{children:"await"})," con ",(0,n.jsx)(a.code,{children:"resolves"})," o ",(0,n.jsx)(a.code,{children:"rejects"}),"."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test('el dato es peanut butter', async () => {\n  await expect(fetchData()).resolves.toBe('peanut butter');\n});\n\ntest('el fecth falla con un error', async () => {\n  await expect(fetchData()).rejects.toMatch('error');\n});\n"})}),"\n",(0,n.jsxs)(a.p,{children:["En estos casos, ",(0,n.jsx)(a.code,{children:"async"})," y ",(0,n.jsx)(a.code,{children:"await"})," son simplemente una mejora sint\xe1ctica para la misma l\xf3gica usada en los ejemplos de las promesas."]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsxs)(a.p,{children:["Be sure to return (or ",(0,n.jsx)(a.code,{children:"await"}),") the promise - if you omit the ",(0,n.jsx)(a.code,{children:"return"}),"/",(0,n.jsx)(a.code,{children:"await"})," statement, your test will complete before the promise returned from ",(0,n.jsx)(a.code,{children:"fetchData"})," resolves or rejects."]})}),"\n",(0,n.jsxs)(a.p,{children:["Si esperas que una promesa se rechazada, usa el m\xe9todo ",(0,n.jsx)(a.code,{children:"catch"}),". Aseg\xfarate de a\xf1adir ",(0,n.jsx)(a.code,{children:"expect.assertions"})," para verificar que un cierto n\xfamero de afirmaciones est\xe1n siendo llamadas. De lo contrario, una promesa cumplida no har\xe1 que el test falle."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test('el fetch falla con un error', () => {\n  expect.assertions(1);\n  return fetchData().catch(e => expect(e).toMatch('error'));\n});\n"})}),"\n",(0,n.jsx)(a.h2,{id:"callbacks",children:"Callbacks"}),"\n",(0,n.jsxs)(a.p,{children:["If you don't use promises, you can use callbacks. For example, let's say that ",(0,n.jsx)(a.code,{children:"fetchData"}),", instead of returning a promise, expects a callback, i.e. fetches some data and calls ",(0,n.jsx)(a.code,{children:"callback(null, data)"})," when it is complete. Quieres comprobar que devuelve ",(0,n.jsx)(a.code,{children:"'peanut butter'"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:["Por defecto, Jest da por completos los tests una vez que llegan al final de su ejecuci\xf3n. Esto significa que este test ",(0,n.jsx)(a.em,{children:"no"})," funciona como estaba previsto:"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"// \xa1No hagas esto!\ntest('the data is peanut butter', () => {\n  function callback(error, data) {\n    if (error) {\n      throw error;\n    }\n    expect(data).toBe('peanut butter');\n  }\n\n  fetchData(callback);\n});\n"})}),"\n",(0,n.jsxs)(a.p,{children:["El problema es que el test terminar\xe1 tan pronto como ",(0,n.jsx)(a.code,{children:"fetchData"})," finalize, antes de llamar a la funci\xf3n callback."]}),"\n",(0,n.jsxs)(a.p,{children:["Hay una forma alternativa de ",(0,n.jsx)(a.code,{children:"test"})," que soluciona esto. En lugar de poner el test en una funci\xf3n con un argumento vac\xedo, utilice un solo argumento llamado ",(0,n.jsx)(a.code,{children:"done"}),". Jest esperar\xe1 hasta que se llame el callback ",(0,n.jsx)(a.code,{children:"done"})," antes de terminar la prueba."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test('the data is peanut butter', done => {\n  function callback(error, data) {\n    if (error) {\n      done(error);\n      return;\n    }\n    try {\n      expect(data).toBe('peanut butter');\n      done();\n    } catch (error) {\n      done(error);\n    }\n  }\n\n  fetchData(callback);\n});\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Si no se llama la funci\xf3n ",(0,n.jsx)(a.code,{children:"done()"}),", la prueba fallar\xe1 (por tiempo de espera excedido), que es lo que quieres que ocurra."]}),"\n",(0,n.jsxs)(a.p,{children:["Si la sentencia ",(0,n.jsx)(a.code,{children:"expect"})," falla, lanza un error y ",(0,n.jsx)(a.code,{children:"done()"})," no es llamada. Si queremos ver en el registro de pruebas por qu\xe9 fall\xf3, tenemos que envolver el ",(0,n.jsx)(a.code,{children:"expect"})," en un bloque ",(0,n.jsx)(a.code,{children:"try"})," y pasar el error en el bloque ",(0,n.jsx)(a.code,{children:"catch"})," a ",(0,n.jsx)(a.code,{children:"done"}),". De lo contrario, terminamos con un error de tiempo de espera no explicativo que no muestra qu\xe9 valor fue recibido por ",(0,n.jsx)(a.code,{children:"expect(data)"}),"."]}),"\n",(0,n.jsx)(a.admonition,{type:"caution",children:(0,n.jsxs)(a.p,{children:["Jest will throw an error, if the same test function is passed a ",(0,n.jsx)(a.code,{children:"done()"})," callback and returns a promise. This is done as a precaution to avoid memory leaks in your tests."]})}),"\n",(0,n.jsxs)(a.h2,{id:"resolves--rejects",children:[(0,n.jsx)(a.code,{children:"resolves"})," / ",(0,n.jsx)(a.code,{children:"rejects"})]}),"\n",(0,n.jsxs)(a.p,{children:["Tambi\xe9n puede utilizar el matcher ",(0,n.jsx)(a.code,{children:".resolves"})," en su declaraci\xf3n de ",(0,n.jsx)(a.code,{children:"expect"})," y Jest esperar\xe1 a que esa promesa resuelva. Si se rechaza la promesa, la prueba fallar\xe1 autom\xe1ticamente."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test('el dato es peanut butter', () => {\n  return expect(fetchData()).resolves.toBe('peanut butter');\n});\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Aseg\xfarate de devolver la aserci\xf3n\u2014si omites este ",(0,n.jsx)(a.code,{children:"return"})," su test se completar\xe1 antes de que la promesa devuelta de ",(0,n.jsx)(a.code,{children:"fetchData"})," sea resuelta y then() ejecutar\xe1 el callback."]}),"\n",(0,n.jsxs)(a.p,{children:["Si esperas que una promesa sea rechazada usa el matcher ",(0,n.jsx)(a.code,{children:"rejects"}),". Act\xfaa an\xe1logamente al marcador ",(0,n.jsx)(a.code,{children:".resolves"}),". Si se cumple la promesa, el test fallar\xe1 autom\xe1ticamente."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-js",children:"test('the fetch fails with an error', () => {\n  return expect(fetchData()).rejects.toMatch('error');\n});\n"})}),"\n",(0,n.jsx)(a.p,{children:"Ninguna de estas formas es particularmente superior a las dem\xe1s, y se pueden mezclar y combinar a trav\xe9s de una base de c\xf3digo o incluso en un solo archivo. Depende del estilo que sientas que hace tus tests m\xe1s sencillos."})]})}const u=function(e={}){const{wrapper:a}=Object.assign({},(0,t.ah)(),e.components);return a?(0,n.jsx)(a,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},1670:(e,a,s)=>{s.d(a,{Zo:()=>o,ah:()=>r});var n=s(7378);const t=n.createContext({});function r(e){const a=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const c={};function o({components:e,children:a,disableParentContext:s}){let o;return o=s?"function"==typeof e?e({}):e||c:r(e),n.createElement(t.Provider,{value:o},a)}}}]);
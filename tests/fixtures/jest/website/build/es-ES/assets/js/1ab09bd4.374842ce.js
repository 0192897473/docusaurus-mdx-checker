"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5745],{3495:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var t=s(4246),a=s(1670);const o={id:"snapshot-testing",title:"Test con Instant\xe1nea"},i=void 0,r={unversionedId:"snapshot-testing",id:"snapshot-testing",title:"Test con Instant\xe1nea",description:"Los tests de instant\xe1nea son de gran utilidad cuando se quiere asegurar que la UI no cambia inesperadamente.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/current/SnapshotTesting.md",sourceDirName:".",slug:"/snapshot-testing",permalink:"/es-ES/docs/next/snapshot-testing",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"current",frontMatter:{id:"snapshot-testing",title:"Test con Instant\xe1nea"},sidebar:"docs",previous:{title:"M\xe1s recursos",permalink:"/es-ES/docs/next/more-resources"},next:{title:"Un ejemplo de Async",permalink:"/es-ES/docs/next/tutorial-async"}},c={},d=[{value:"Comprobaci\xf3n Instant\xe1nea con Jest",id:"comprobaci\xf3n-instant\xe1nea-con-jest",level:2},{value:"Actualizando Instant\xe1neas",id:"actualizando-instant\xe1neas",level:3},{value:"Interactive Snapshot Mode",id:"interactive-snapshot-mode",level:3},{value:"Inline Snapshots",id:"inline-snapshots",level:3},{value:"Property Matchers",id:"property-matchers",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"1. Treat snapshots as code",id:"1-treat-snapshots-as-code",level:3},{value:"2. Tests should be deterministic",id:"2-tests-should-be-deterministic",level:3},{value:"3. Use descriptive snapshot names",id:"3-use-descriptive-snapshot-names",level:3},{value:"Preguntas Frecuentes",id:"preguntas-frecuentes",level:2},{value:"Are snapshots written automatically on Continuous Integration (CI) systems?",id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",level:3},{value:"\xbfDeben los archivos de instant\xe1neas ser incluidos en &quot;commits&quot;?",id:"deben-los-archivos-de-instant\xe1neas-ser-incluidos-en-commits",level:3},{value:"\xbfLos tests de instant\xe1nea solo funcionan con components de React?",id:"los-tests-de-instant\xe1nea-solo-funcionan-con-components-de-react",level:3},{value:"\xbfCu\xe1l es la diferencia entre tests de instant\xe1nea y tests de regresi\xf3n visual?",id:"cu\xe1l-es-la-diferencia-entre-tests-de-instant\xe1nea-y-tests-de-regresi\xf3n-visual",level:3},{value:"Does snapshot testing replace unit testing?",id:"does-snapshot-testing-replace-unit-testing",level:3},{value:"\xbfCu\xe1l es el rendimiento de tests de instant\xe1neas en cuanto a velocidad y tama\xf1o de los archivos generados?",id:"cu\xe1l-es-el-rendimiento-de-tests-de-instant\xe1neas-en-cuanto-a-velocidad-y-tama\xf1o-de-los-archivos-generados",level:3},{value:"\xbfC\xf3mo resuelvo conflictos dentro de archivos de instant\xe1neas?",id:"c\xf3mo-resuelvo-conflictos-dentro-de-archivos-de-instant\xe1neas",level:3},{value:"\xbfEs posible aplicar los principios de desarrollo orientado a pruebas con tests de instant\xe1nea?",id:"es-posible-aplicar-los-principios-de-desarrollo-orientado-a-pruebas-con-tests-de-instant\xe1nea",level:3},{value:"Does code coverage work with snapshot testing?",id:"does-code-coverage-work-with-snapshot-testing",level:3}];function l(e){const n=Object.assign({p:"p",h2:"h2",a:"a",pre:"pre",code:"code",admonition:"admonition",h3:"h3",img:"img",br:"br"},(0,a.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Los tests de instant\xe1nea son de gran utilidad cuando se quiere asegurar que la UI no cambia inesperadamente."}),"\n",(0,t.jsx)(n.p,{children:"A typical snapshot test case renders a UI component, takes a snapshot, then compares it to a reference snapshot file stored alongside the test. The test will fail if the two snapshots do not match: either the change is unexpected, or the reference snapshot needs to be updated to the new version of the UI component."}),"\n",(0,t.jsx)(n.h2,{id:"comprobaci\xf3n-instant\xe1nea-con-jest",children:"Comprobaci\xf3n Instant\xe1nea con Jest"}),"\n",(0,t.jsxs)(n.p,{children:["Se puede tomar un enfoque similar cuando se trata de comprobar tus component de React. En lugar de presentar la interfaz gr\xe1fica de usuario, lo cual requerir\xeda construir la app en su totalidad, se puede usar un renderer de tests para r\xe1pidamente generar un valor serializable para tu \xe1rbol de React. Consider this ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/link.test.js",children:"example test"})," for a ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Link.js",children:"Link component"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.facebook.com\">Facebook</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The first time this test is run, Jest creates a ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/__tests__/__snapshots__/link.test.js.snap",children:"snapshot file"})," that looks like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'exports[`renders correctly 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["El artefacto de la instant\xe1nea debe ser inclu\xeddo (commit) con los cambios en el c\xf3digo, y revisado como parte de la revisi\xf3n de c\xf3digo. Jest uses ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/packages/pretty-format",children:"pretty-format"})," to make snapshots human-readable during code review. On subsequent test runs, Jest will compare the rendered output with the previous snapshot. Si coinciden, pasar\xe1 el test. If they don't match, either the test runner found a bug in your code (in the ",(0,t.jsx)(n.code,{children:"<Link>"})," component in this case) that should be fixed, or the implementation has changed and the snapshot needs to be updated."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The snapshot is directly scoped to the data you render \u2013 in our example the ",(0,t.jsx)(n.code,{children:"<Link>"})," component with ",(0,t.jsx)(n.code,{children:"page"})," prop passed to it. This implies that even if any other file has missing props (say, ",(0,t.jsx)(n.code,{children:"App.js"}),") in the ",(0,t.jsx)(n.code,{children:"<Link>"})," component, it will still pass the test as the test doesn't know the usage of ",(0,t.jsx)(n.code,{children:"<Link>"})," component and it's scoped only to the ",(0,t.jsx)(n.code,{children:"Link.js"}),". Also, rendering the same component with different props in other snapshot tests will not affect the first one, as the tests don't know about each other."]})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Puede encontrarse m\xe1s informaci\xf3n sobre c\xf3mo funciona la comprobaci\xf3n de instant\xe1nea y por qu\xe9 la hemos construido en el ",(0,t.jsx)(n.a,{href:"https://jestjs.io/blog/2016/07/27/jest-14.html",children:"post de lanzamiento del blog"}),". Recomendamos leer ",(0,t.jsx)(n.a,{href:"http://benmccormick.org/2016/09/19/testing-with-jest-snapshots-first-impressions/",children:"este post del blog"})," para hacerse la idea de cuando se deber\xeda usar comprobaci\xf3n de instant\xe1nea. We also recommend watching this ",(0,t.jsx)(n.a,{href:"https://egghead.io/lessons/javascript-use-jest-s-snapshot-testing-feature?pl=testing-javascript-with-jest-a36c4074",children:"egghead video"})," on Snapshot Testing with Jest."]})}),"\n",(0,t.jsx)(n.h3,{id:"actualizando-instant\xe1neas",children:"Actualizando Instant\xe1neas"}),"\n",(0,t.jsx)(n.p,{children:"Es muy f\xe1cil detectar cuando una prueba de instant\xe1nea falla despu\xe9s de introducir un bug. Cuando eso ocurra, siga adelante y arregle el problema, y aseg\xfarese de que sus tests de instant\xe1nea se ejecutan con \xe9xito otra vez. A continuaci\xf3n vamos a hablar sobre el caso de cuando un test de instant\xe1nea est\xe1 fallando debido a un cambio intencionado en la implementaci\xf3n."}),"\n",(0,t.jsx)(n.p,{children:"Tal situaci\xf3n puede presentarse si intencionalmente cambiamos la direcci\xf3n del enlace del componente Enlace en nuestro ejemplo."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"// estuche de prueba actualizado con un Link a direcci\xf3n distinta\nit('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"http://www.instagram.com\">Instagram</Link>)\n    .toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,t.jsx)(n.p,{children:"En ese caso, Jest imprimir\xe1 esta salida:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5310).Z+"",width:"1844",height:"1246"})}),"\n",(0,t.jsx)(n.p,{children:"Ya que s\xf3lo actualizamos nuestro componente para que apunte a una direcci\xf3n diferente, es razonable esperar cambios en la instant\xe1nea de este componente. Nuestro test de instant\xe1nea est\xe1 fallando porque la instant\xe1nea de nuestro componente actualizado ya no concuerda con el artefacto de instant\xe1neas para este caso de test."}),"\n",(0,t.jsx)(n.p,{children:'Para resolver esto, necesitamos actualizar nuestros artefactos de instant\xe1nea. Puede ejecutar Jest con un "flag" que le dir\xe1 que vuelva a generar las instant\xe1neas:'}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"jest --updateSnapshot\n"})}),"\n",(0,t.jsxs)(n.p,{children:['Prosiga y acepte los cambios ejecutando el comando anterior. Tambi\xe9n puede utilizar equivalente car\xe1cter \xfanico "flag" ',(0,t.jsx)(n.code,{children:"-u"}),' para volver a generar instant\xe1neas si lo prefiere. Esto volver\xe1 a generar los artefactos de instant\xe1nea para todos los tests de instant\xe1nea fallidos. Si tuvi\xe9ramos cualquier test de instant\xe1nea fallido adicional debido a un bug no intencionado, necesitar\xedamos arreglar el "bug" antes de volver a generar instant\xe1neas para impedir grabar instant\xe1neas con un comportamiento defectuoso.']}),"\n",(0,t.jsxs)(n.p,{children:['Si se desea limitar que casos de test instant\xe1neos se vuelven a generar, se puede pasar un "flag" adicional: ',(0,t.jsx)(n.code,{children:"--nombreTestPatr\xf3n"})," para volver a grabar instant\xe1neas s\xf3lo para esos tests que coinciden con el patr\xf3n."]}),"\n",(0,t.jsxs)(n.p,{children:["You can try out this functionality by cloning the ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"snapshot example"}),", modifying the ",(0,t.jsx)(n.code,{children:"Link"})," component, and running Jest."]}),"\n",(0,t.jsx)(n.h3,{id:"interactive-snapshot-mode",children:"Interactive Snapshot Mode"}),"\n",(0,t.jsx)(n.p,{children:"Failed snapshots can also be updated interactively in watch mode:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2003).Z+"",width:"2052",height:"1048"})}),"\n",(0,t.jsx)(n.p,{children:"Once you enter Interactive Snapshot Mode, Jest will step you through the failed snapshots one test at a time and give you the opportunity to review the failed output."}),"\n",(0,t.jsx)(n.p,{children:"From here you can choose to update that snapshot or skip to the next:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(5015).Z+"",width:"1106",height:"697"})}),"\n",(0,t.jsx)(n.p,{children:"Once you're finished, Jest will give you a summary before returning back to watch mode:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(6439).Z+"",width:"1452",height:"400"})}),"\n",(0,t.jsx)(n.h3,{id:"inline-snapshots",children:"Inline Snapshots"}),"\n",(0,t.jsxs)(n.p,{children:["Inline snapshots behave identically to external snapshots (",(0,t.jsx)(n.code,{children:".snap"})," files), except the snapshot values are written automatically back into the source code. This means you can get the benefits of automatically generated snapshots without having to switch to an external file to make sure the correct value was written."]}),"\n",(0,t.jsx)(n.p,{children:"Ejemplo:"}),"\n",(0,t.jsxs)(n.p,{children:["First, you write a test, calling ",(0,t.jsx)(n.code,{children:".toMatchInlineSnapshot()"})," with no arguments:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"it('renders correctly', () => {\n  const tree = renderer\n    .create(<Link page=\"https://example.com\">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot();\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The next time you run Jest, ",(0,t.jsx)(n.code,{children:"tree"})," will be evaluated, and a snapshot will be written as an argument to ",(0,t.jsx)(n.code,{children:"toMatchInlineSnapshot"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:'it(\'renders correctly\', () => {\n  const tree = renderer\n    .create(<Link page="https://example.com">Example Site</Link>)\n    .toJSON();\n  expect(tree).toMatchInlineSnapshot(`\n<a\n  className="normal"\n  href="https://example.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Example Site\n</a>\n`);\n});\n'})}),"\n",(0,t.jsxs)(n.p,{children:["That's all there is to it! You can even update the snapshots with ",(0,t.jsx)(n.code,{children:"--updateSnapshot"})," or using the ",(0,t.jsx)(n.code,{children:"u"})," key in ",(0,t.jsx)(n.code,{children:"--watch"})," mode."]}),"\n",(0,t.jsxs)(n.p,{children:["By default, Jest handles the writing of snapshots into your source code. However, if you're using ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/prettier",children:"prettier"})," in your project, Jest will detect this and delegate the work to prettier instead (including honoring your configuration)."]}),"\n",(0,t.jsx)(n.h3,{id:"property-matchers",children:"Property Matchers"}),"\n",(0,t.jsx)(n.p,{children:"Often there are fields in the object you want to snapshot which are generated (like IDs and Dates). If you try to snapshot these objects, they will force the snapshot to fail on every run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'it(\'will fail every time\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot();\n});\n\n// Snapshot\nexports[`will fail every time 1`] = `\n{\n  "createdAt": 2018-05-19T23:36:09.816Z,\n  "id": 3,\n  "name": "LeBron James",\n}\n`;\n'})}),"\n",(0,t.jsx)(n.p,{children:"For these cases, Jest allows providing an asymmetric matcher for any property. These matchers are checked before the snapshot is written or tested, and then saved to the snapshot file instead of the received value:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'it(\'will check the matchers and pass\', () => {\n  const user = {\n    createdAt: new Date(),\n    id: Math.floor(Math.random() * 20),\n    name: \'LeBron James\',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    id: expect.any(Number),\n  });\n});\n\n// Snapshot\nexports[`will check the matchers and pass 1`] = `\n{\n  "createdAt": Any<Date>,\n  "id": Any<Number>,\n  "name": "LeBron James",\n}\n`;\n'})}),"\n",(0,t.jsx)(n.p,{children:"Any given value that is not a matcher will be checked exactly and saved to the snapshot:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"it('will check the values and pass', () => {\n  const user = {\n    createdAt: new Date(),\n    name: 'Bond... James Bond',\n  };\n\n  expect(user).toMatchSnapshot({\n    createdAt: expect.any(Date),\n    name: 'Bond... James Bond',\n  });\n});\n\n// Snapshot\nexports[`will check the values and pass 1`] = `\n{\n  \"createdAt\": Any<Date>,\n  \"name\": 'Bond... James Bond',\n}\n`;\n"})}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.p,{children:["If the case concerns a string not an object then you need to replace random part of that string on your own before testing the snapshot.",(0,t.jsx)(n.br,{}),"\n","You can use for that e.g. ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",children:(0,t.jsx)(n.code,{children:"replace()"})})," and ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions",children:"regular expressions"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'const randomNumber = Math.round(Math.random() * 100);\nconst stringWithRandomData = `<div id="${randomNumber}">Lorem ipsum</div>`;\nconst stringWithConstantData = stringWithRandomData.replace(/id="\\d+"/, 123);\nexpect(stringWithConstantData).toMatchSnapshot();\n'})}),(0,t.jsxs)(n.p,{children:["Another way is to ",(0,t.jsx)(n.a,{href:"/es-ES/docs/next/mock-functions",children:"mock"})," the library responsible for generating the random part of the code you're snapshotting."]})]}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsx)(n.p,{children:"Snapshots are a fantastic tool for identifying unexpected interface changes within your application \u2013 whether that interface is an API response, UI, logs, or error messages. As with any testing strategy, there are some best-practices you should be aware of, and guidelines you should follow, in order to use them effectively."}),"\n",(0,t.jsx)(n.h3,{id:"1-treat-snapshots-as-code",children:"1. Treat snapshots as code"}),"\n",(0,t.jsx)(n.p,{children:"Commit snapshots and review them as part of your regular code review process. This means treating snapshots as you would any other type of test or code in your project."}),"\n",(0,t.jsx)(n.p,{children:"Ensure that your snapshots are readable by keeping them focused, short, and by using tools that enforce these stylistic conventions."}),"\n",(0,t.jsxs)(n.p,{children:["As mentioned previously, Jest uses ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/en/package/pretty-format",children:(0,t.jsx)(n.code,{children:"pretty-format"})})," to make snapshots human-readable, but you may find it useful to introduce additional tools, like ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/en/package/eslint-plugin-jest",children:(0,t.jsx)(n.code,{children:"eslint-plugin-jest"})})," with its ",(0,t.jsx)(n.a,{href:"https://github.com/jest-community/eslint-plugin-jest/blob/main/docs/rules/no-large-snapshots.md",children:(0,t.jsx)(n.code,{children:"no-large-snapshots"})})," option, or ",(0,t.jsx)(n.a,{href:"https://yarnpkg.com/en/package/snapshot-diff",children:(0,t.jsx)(n.code,{children:"snapshot-diff"})})," with its component snapshot comparison feature, to promote committing short, focused assertions."]}),"\n",(0,t.jsx)(n.p,{children:"The goal is to make it easy to review snapshots in pull requests, and fight against the habit of regenerating snapshots when test suites fail instead of examining the root causes of their failure."}),"\n",(0,t.jsx)(n.h3,{id:"2-tests-should-be-deterministic",children:"2. Tests should be deterministic"}),"\n",(0,t.jsx)(n.p,{children:"Los tests deben ser deterministas. Running the same tests multiple times on a component that has not changed should produce the same results every time. Usted es responsable de asegurar que sus instant\xe1neas generadas no incluyen informaci\xf3n espec\xedfica sobre la plataforma o cualquier otra informaci\xf3n que no sea determinista."}),"\n",(0,t.jsxs)(n.p,{children:["For example, if you have a ",(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/examples/snapshot/Clock.js",children:"Clock"})," component that uses ",(0,t.jsx)(n.code,{children:"Date.now()"}),", the snapshot generated from this component will be different every time the test case is run. En este caso se puede create un ",(0,t.jsx)(n.a,{href:"/es-ES/docs/next/mock-functions",children:'"mock" del m\xe9todo Date.now()'})," para devolver un valor constante cada vez que la prueba se ejecuta:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"Date.Now = jest.fn(() = > 1482363367071);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Cada vez que se ejecuta el test de prueba instant\xe1nea, ",(0,t.jsx)(n.code,{children:"Date.now()"})," devuelve ",(0,t.jsx)(n.code,{children:"1482363367071"})," consistentemente. Esto resultar\xe1 en la misma instant\xe1nea generada para este componente independientemente de cuando se ejecute el test."]}),"\n",(0,t.jsx)(n.h3,{id:"3-use-descriptive-snapshot-names",children:"3. Use descriptive snapshot names"}),"\n",(0,t.jsx)(n.p,{children:"Always strive to use descriptive test and/or snapshot names for snapshots. The best names describe the expected snapshot content. This makes it easier for reviewers to verify the snapshots during review, and for anyone to know whether or not an outdated snapshot is the correct behavior before updating."}),"\n",(0,t.jsx)(n.p,{children:"For example, compare:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"exports[`<UserName /> should handle some test case`] = `null`;\n\nexports[`<UserName /> should handle some other test case`] = `\n<div>\n  Alan Turing\n</div>\n`;\n"})}),"\n",(0,t.jsx)(n.p,{children:"A:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"exports[`<UserName /> should render null`] = `null`;\n\nexports[`<UserName /> should render Alan Turing`] = `\n<div>\n  Alan Turing\n</div>\n`;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Since the latter describes exactly what's expected in the output, it's more clear to see when it's wrong:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"exports[`<UserName /> should render null`] = `\n<div>\n  Alan Turing\n</div>\n`;\n\nexports[`<UserName /> should render Alan Turing`] = `null`;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"preguntas-frecuentes",children:"Preguntas Frecuentes"}),"\n",(0,t.jsx)(n.h3,{id:"are-snapshots-written-automatically-on-continuous-integration-ci-systems",children:"Are snapshots written automatically on Continuous Integration (CI) systems?"}),"\n",(0,t.jsxs)(n.p,{children:["No, as of Jest 20, snapshots in Jest are not automatically written when Jest is run in a CI system without explicitly passing ",(0,t.jsx)(n.code,{children:"--updateSnapshot"}),'. Se espera que todas las instant\xe1neas sean parte del c\xf3digo que se ejecuta en el CI, y ya que las nuevas instant\xe1neas pasan autom\xe1ticamente, no deber\xedan pasar un test ejecutado en un sistema de CI. Se recomienda hacer siempre un "commit" de todas las instant\xe1neas para mantenerlas en el control de versiones.']}),"\n",(0,t.jsx)(n.h3,{id:"deben-los-archivos-de-instant\xe1neas-ser-incluidos-en-commits",children:'\xbfDeben los archivos de instant\xe1neas ser incluidos en "commits"?'}),"\n",(0,t.jsx)(n.p,{children:'S\xed, todos los archivos de instant\xe1nea deben esta en "commits" junto a los m\xf3dulos que est\xe1n cubriendo y sus tests. They should be considered part of a test, similar to the value of any other assertion in Jest. De hecho, las instant\xe1neas representan el estado de los m\xf3dulos en cualquier momento dado en el tiempo. De esta manera, cuando se modifican los m\xf3dulos, Jest puede saber lo que cambiado desde la versi\xf3n anterior. Tambi\xe9n puede proporcionar mucho contexto adicional durante la revisi\xf3n del c\xf3digo en la cual los revisores pueden estudiar los cambios mucho mejor.'}),"\n",(0,t.jsx)(n.h3,{id:"los-tests-de-instant\xe1nea-solo-funcionan-con-components-de-react",children:"\xbfLos tests de instant\xe1nea solo funcionan con components de React?"}),"\n",(0,t.jsxs)(n.p,{children:["Los components de ",(0,t.jsx)(n.a,{href:"/es-ES/docs/next/tutorial-react",children:"React"})," y ",(0,t.jsx)(n.a,{href:"/es-ES/docs/next/tutorial-react-native",children:"React Native"}),' son un buen caso de uso para tests de instant\xe1nea. Sin embargo, las instant\xe1neas pueden capturar cualquier valor serializable y puede usarse en cualquier momento en que el objetivo sea comprobar si el resultado es correcto. El repositorio de Jest contiene muchos ejemplos del "output" de Jest en s\xed mismo, el "output" de la librer\xeda de afirmaci\xf3n de Jest, as\xed como mensajes de "log" de varias partes de la base de c\xf3digo de Jest. See an example of ',(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/main/e2e/__tests__/console.test.ts",children:"snapshotting CLI output"})," in the Jest repo."]}),"\n",(0,t.jsx)(n.h3,{id:"cu\xe1l-es-la-diferencia-entre-tests-de-instant\xe1nea-y-tests-de-regresi\xf3n-visual",children:"\xbfCu\xe1l es la diferencia entre tests de instant\xe1nea y tests de regresi\xf3n visual?"}),"\n",(0,t.jsxs)(n.p,{children:["Tests de instant\xe1nea y tests de regresi\xf3n visual son dos maneras distintas de testear interfaces de usuario, y cumplen dos objetivos diferentes. Las herramientas de tests de regresi\xf3n visual toman capturas de pantalla de p\xe1ginas web y comparan las im\xe1genes resultantes pixel por pixel. With Snapshot testing values are serialized, stored within text files, and compared using a diff algorithm. There are different trade-offs to consider and we listed the reasons why snapshot testing was built in the ",(0,t.jsx)(n.a,{href:"https://jestjs.io/blog/2016/07/27/jest-14.html#why-snapshot-testing",children:"Jest blog"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"does-snapshot-testing-replace-unit-testing",children:"Does snapshot testing replace unit testing?"}),"\n",(0,t.jsx)(n.p,{children:"Los tests de instant\xe1nea per-se es s\xf3lo una de las m\xe1s de 20 afirmaciones que est\xe1n incluidas en Jest. The aim of snapshot testing is not to replace existing unit tests, but to provide additional value and make testing painless. En algunos escenarios, los tests de instant\xe1nea pueden potencialmente eliminar la necesidad de tests unitarios para un conjunto particular de funcionalidades (por ejemplo componentes de React), pero tambi\xe9n pueden coexistir."}),"\n",(0,t.jsx)(n.h3,{id:"cu\xe1l-es-el-rendimiento-de-tests-de-instant\xe1neas-en-cuanto-a-velocidad-y-tama\xf1o-de-los-archivos-generados",children:"\xbfCu\xe1l es el rendimiento de tests de instant\xe1neas en cuanto a velocidad y tama\xf1o de los archivos generados?"}),"\n",(0,t.jsxs)(n.p,{children:["Jest ha sido reescrito pensando en rendimiento, y tests de instant\xe1nea no es una excepci\xf3n. Ya que las instant\xe1neas se almacenan en archivos de texto, esta forma de prueba es r\xe1pida y fiable. Jest genera un nuevo archivo por cada archivo de test que invoca al marcador ",(0,t.jsx)(n.code,{children:"toMatchSnapshot"}),". The size of the snapshots is pretty small: For reference, the size of all snapshot files in the Jest codebase itself is less than 300 KB."]}),"\n",(0,t.jsx)(n.h3,{id:"c\xf3mo-resuelvo-conflictos-dentro-de-archivos-de-instant\xe1neas",children:"\xbfC\xf3mo resuelvo conflictos dentro de archivos de instant\xe1neas?"}),"\n",(0,t.jsx)(n.p,{children:"Los archivos de instant\xe1neas siempre deben representar el estado actual de los m\xf3dulos que est\xe1n cubriendo. Therefore, if you are merging two branches and encounter a conflict in the snapshot files, you can either resolve the conflict manually or update the snapshot file by running Jest and inspecting the result."}),"\n",(0,t.jsx)(n.h3,{id:"es-posible-aplicar-los-principios-de-desarrollo-orientado-a-pruebas-con-tests-de-instant\xe1nea",children:"\xbfEs posible aplicar los principios de desarrollo orientado a pruebas con tests de instant\xe1nea?"}),"\n",(0,t.jsx)(n.p,{children:"Aunque es posible escribir archivos de instant\xe1neas manualmente, generalmente no es accesible. Snapshots help to figure out whether the output of the modules covered by tests is changed, rather than giving guidance to design the code in the first place."}),"\n",(0,t.jsx)(n.h3,{id:"does-code-coverage-work-with-snapshot-testing",children:"Does code coverage work with snapshot testing?"}),"\n",(0,t.jsx)(n.p,{children:"Yes, as well as with any other test."})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}},5310:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/failedSnapshotTest-754bd8c54c17338fe046c6273fd3f9d1.png"},2003:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/interactiveSnapshot-58ae38e9cae13140c56d8472453f0595.png"},6439:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/interactiveSnapshotDone-59ee291ee320accbc4bfc4f33b22638a.png"},5015:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/interactiveSnapshotUpdate-a17d8d77f94702048b4d0e0e4c580719.gif"},1670:(e,n,s)=>{s.d(n,{Zo:()=>r,ah:()=>o});var t=s(7378);const a=t.createContext({});function o(e){const n=t.useContext(a);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function r({components:e,children:n,disableParentContext:s}){let r;return r=s?"function"==typeof e?e({}):e||i:o(e),t.createElement(a.Provider,{value:r},n)}}}]);
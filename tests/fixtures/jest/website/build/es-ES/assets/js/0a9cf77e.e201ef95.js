"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8204],{642:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"29.5","label":"29.5","banner":"unmaintained","badge":true,"noIndex":false,"className":"docs-version-29.5","isLast":false,"docsSidebars":{"docs":[{"type":"category","label":"Introducci\xf3n","items":[{"type":"link","label":"Empezando","href":"/es-ES/docs/29.5/getting-started","docId":"getting-started","unlisted":false},{"type":"link","label":"Utilizando Comparadores","href":"/es-ES/docs/29.5/using-matchers","docId":"using-matchers","unlisted":false},{"type":"link","label":"Tests de c\xf3digo as\xedncrono","href":"/es-ES/docs/29.5/asynchronous","docId":"asynchronous","unlisted":false},{"type":"link","label":"Inicializaci\xf3n y Finalizaci\xf3n","href":"/es-ES/docs/29.5/setup-teardown","docId":"setup-teardown","unlisted":false},{"type":"link","label":"Funciones Mock","href":"/es-ES/docs/29.5/mock-functions","docId":"mock-functions","unlisted":false},{"type":"link","label":"Jest Platform","href":"/es-ES/docs/29.5/jest-platform","docId":"jest-platform","unlisted":false},{"type":"link","label":"Jest Community","href":"/es-ES/docs/29.5/jest-community","docId":"jest-community","unlisted":false},{"type":"link","label":"M\xe1s recursos","href":"/es-ES/docs/29.5/more-resources","docId":"more-resources","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Gu\xedas","items":[{"type":"link","label":"Test con Instant\xe1nea","href":"/es-ES/docs/29.5/snapshot-testing","docId":"snapshot-testing","unlisted":false},{"type":"link","label":"Un ejemplo de Async","href":"/es-ES/docs/29.5/tutorial-async","docId":"tutorial-async","unlisted":false},{"type":"link","label":"Mocks Temporizados","href":"/es-ES/docs/29.5/timer-mocks","docId":"timer-mocks","unlisted":false},{"type":"link","label":"Manual Mocks","href":"/es-ES/docs/29.5/manual-mocks","docId":"manual-mocks","unlisted":false},{"type":"link","label":"Mocks de clase ES6","href":"/es-ES/docs/29.5/es6-class-mocks","docId":"es6-class-mocks","unlisted":false},{"type":"link","label":"Evitar mocks de m\xf3dulos","href":"/es-ES/docs/29.5/bypassing-module-mocks","docId":"bypassing-module-mocks","unlisted":false},{"type":"link","label":"ECMAScript Modules","href":"/es-ES/docs/29.5/ecmascript-modules","docId":"ecmascript-modules","unlisted":false},{"type":"link","label":"Utilizando webpack","href":"/es-ES/docs/29.5/webpack","docId":"webpack","unlisted":false},{"type":"link","label":"Usar con puppeteer","href":"/es-ES/docs/29.5/puppeteer","docId":"puppeteer","unlisted":false},{"type":"link","label":"Utilizando con MongoDB","href":"/es-ES/docs/29.5/mongodb","docId":"mongodb","unlisted":false},{"type":"link","label":"Usar Jest con DynamoDB","href":"/es-ES/docs/29.5/dynamodb","docId":"dynamodb","unlisted":false},{"type":"link","label":"Manipulaci\xf3n del DOM","href":"/es-ES/docs/29.5/tutorial-jquery","docId":"tutorial-jquery","unlisted":false},{"type":"link","label":"Watch Plugins","href":"/es-ES/docs/29.5/watch-plugins","docId":"watch-plugins","unlisted":false},{"type":"link","label":"Migrando a Jest","href":"/es-ES/docs/29.5/migration-guide","docId":"migration-guide","unlisted":false},{"type":"link","label":"Soluci\xf3n de problemas","href":"/es-ES/docs/29.5/troubleshooting","docId":"troubleshooting","unlisted":false},{"type":"link","label":"Arquitectura","href":"/es-ES/docs/29.5/architecture","docId":"architecture","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Framework Guides","items":[{"type":"link","label":"Testear Aplicaciones React","href":"/es-ES/docs/29.5/tutorial-react","docId":"tutorial-react","unlisted":false},{"type":"link","label":"Testear Aplicaciones React Native","href":"/es-ES/docs/29.5/tutorial-react-native","docId":"tutorial-react-native","unlisted":false},{"type":"link","label":"Testing Web Frameworks","href":"/es-ES/docs/29.5/testing-frameworks","docId":"testing-frameworks","unlisted":false}],"collapsed":true,"collapsible":true},{"type":"category","label":"Upgrade Guides","items":[{"type":"link","label":"From v28 to v29","href":"/es-ES/docs/29.5/upgrading-to-jest29","docId":"upgrading-to-jest29","unlisted":false}],"collapsed":true,"collapsible":true}],"api":[{"type":"link","label":"Globales","href":"/es-ES/docs/29.5/api","docId":"api","unlisted":false},{"type":"link","label":"Expect","href":"/es-ES/docs/29.5/expect","docId":"expect","unlisted":false},{"type":"link","label":"Funciones Mock","href":"/es-ES/docs/29.5/mock-function-api","docId":"mock-function-api","unlisted":false},{"type":"link","label":"El Objeto Jest","href":"/es-ES/docs/29.5/jest-object","docId":"jest-object","unlisted":false},{"type":"link","label":"Configurando Jest","href":"/es-ES/docs/29.5/configuration","docId":"configuration","unlisted":false},{"type":"link","label":"Opciones del CLI de Jest","href":"/es-ES/docs/29.5/cli","docId":"cli","unlisted":false},{"type":"link","label":"Environment Variables","href":"/es-ES/docs/29.5/environment-variables","docId":"environment-variables","unlisted":false},{"type":"link","label":"Transformaci\xf3n de c\xf3digo","href":"/es-ES/docs/29.5/code-transformation","docId":"code-transformation","unlisted":false}]},"docs":{"api":{"id":"api","title":"Globales","description":"In your test files, Jest puts each of these methods and objects into the global environment. You don\'t have to require or import anything to use them. However, if you prefer explicit imports, you can do import {describe, expect, test} from \'@jest/globals\'.","sidebar":"api"},"architecture":{"id":"architecture","title":"Arquitectura","description":"Si est\xe1 interesado en aprender m\xe1s acerca de como funciona Jest, comprender su arquitectura y c\xf3mo se divide en paquetes individuales reutilizables, eche un vistazo a este v\xeddeo:","sidebar":"docs"},"asynchronous":{"id":"asynchronous","title":"Tests de c\xf3digo as\xedncrono","description":"Es com\xfan en JavaScript ejecutar c\xf3digo de forma as\xedncrona. Si tienes c\xf3digo que se ejecuta de forma as\xedncrona, Jest debe saber cu\xe1ndo ha terminado de ejecutarse el c\xf3digo de prueba, antes de que puede pasar a otro test. Jest tiene varias formas de manejar esto.","sidebar":"docs"},"bypassing-module-mocks":{"id":"bypassing-module-mocks","title":"Evitar mocks de m\xf3dulos","description":"Jest te permite simular m\xf3dulos completos en tus pruebas, o que puede ser \xfatil para probar si tu c\xf3digo est\xe1 convocando correctamente las funciones de ese m\xf3dulo. Sin embargo, a veces puede que quieras usar parte de un modulo mock en tus archivos de test. En ese caso, es necesario que accedas a la implementaci\xf3n original y no la implementaci\xf3n mock.","sidebar":"docs"},"cli":{"id":"cli","title":"Opciones del CLI de Jest","description":"El interprete de l\xednea de comandos de jest tiene varias opciones \xfatiles. Puede ejecutar jest --help para ver todas las opciones disponibles. Muchas de las opciones que se muestran a continuaci\xf3n se pueden utilizar tambi\xe9n de forma conjunta para ejecutar las pruebas exactamente de la manera que desea. Cada una de las opciones de la configuraci\xf3n de Jest puede especificarse tambi\xe9n a trav\xe9s de la linea de comandos.","sidebar":"api"},"code-transformation":{"id":"code-transformation","title":"Transformaci\xf3n de c\xf3digo","description":"Jest ejecuta el c\xf3digo en su proyecto JavaScript, pero si utilizas alguna sintaxis no compatible con Node de forma nativa (como JSX, TypeScript, Vue template), entonces debes transformar ese c\xf3digo en JavaScript plano, similar a lo que har\xedas al compilar para el Navegador.","sidebar":"api"},"configuration":{"id":"configuration","title":"Configurando Jest","description":"La filosof\xeda de Jest es que funcione bien por defecto, pero a veces se necesita tener m\xe1s control en la configuraci\xf3n.","sidebar":"api"},"dynamodb":{"id":"dynamodb","title":"Usar Jest con DynamoDB","description":"Con las API Setup/Teardown Global y Ambiente As\xedncrono de Test , Jest puede funcionar sin problemas con DynamoDB.","sidebar":"docs"},"ecmascript-modules":{"id":"ecmascript-modules","title":"ECMAScript Modules","description":"Jest ships with experimental support for ECMAScript Modules (ESM).","sidebar":"docs"},"environment-variables":{"id":"environment-variables","title":"Environment Variables","description":"Jest sets the following environment variables:","sidebar":"api"},"es6-class-mocks":{"id":"es6-class-mocks","title":"Mocks de clase ES6","description":"Jest se puede utilizar para simular clases de ES6 que importan a los archivos que deseas probar.","sidebar":"docs"},"expect":{"id":"expect","title":"Expect","description":"Cuando est\xe1s escribiendo tests, a menudo necesitas comprobar que los valores cumplen ciertas condiciones. expect te da acceso a un n\xfamero de marcadores que te permiten validar diferentes cosas.","sidebar":"api"},"getting-started":{"id":"getting-started","title":"Empezando","description":"Install Jest using your favorite package manager:","sidebar":"docs"},"jest-community":{"id":"jest-community","title":"Jest Community","description":"The community around Jest is working hard to make the testing experience even greater.","sidebar":"docs"},"jest-object":{"id":"jest-object","title":"El Objeto Jest","description":"The jest object is automatically in scope within every test file. The methods in the jest object help create mocks and let you control Jest\'s overall behavior. It can also be imported explicitly by via import  from \'@jest/globals\'.","sidebar":"api"},"jest-platform":{"id":"jest-platform","title":"Jest Platform","description":"You can cherry pick specific features of Jest and use them as standalone packages. Here\'s a list of the available packages:","sidebar":"docs"},"manual-mocks":{"id":"manual-mocks","title":"Manual Mocks","description":"Las simulaciones mock manuales son usadas para sustituir funcionalidad con datos falsos. Por ejemplo, en lugar de acceder a un recurso remoto como un sitio web o una base de datos, puede que se desee crear una simulaci\xf3n manual que permita usar datos falsos. Esto asegura que las pruebas ser\xe1n r\xe1pidas y estables.","sidebar":"docs"},"migration-guide":{"id":"migration-guide","title":"Migrando a Jest","description":"Si deseas probar Jest con un proyecto de c\xf3digo existente, hay un n\xfamero de maneras de convertir-lo a Jest:","sidebar":"docs"},"mock-function-api":{"id":"mock-function-api","title":"Funciones Mock","description":"Mock functions are also known as \\"spies\\", because they let you spy on the behavior of a function that is called indirectly by some other code, rather than only testing the output. Puedes crear una falsa funci\xf3n con jest.fn(). Si no se da la implementaci\xf3n, la funci\xf3n mockeda devolver\xe1 undefined cuando se invoque.","sidebar":"api"},"mock-functions":{"id":"mock-functions","title":"Funciones Mock","description":"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.","sidebar":"docs"},"mongodb":{"id":"mongodb","title":"Utilizando con MongoDB","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with MongoDB.","sidebar":"docs"},"more-resources":{"id":"more-resources","title":"M\xe1s recursos","description":"By now you should have a good idea of how Jest can help you test your applications. If you\'re interested in learning more, here\'s some related stuff you might want to check out.","sidebar":"docs"},"puppeteer":{"id":"puppeteer","title":"Usar con puppeteer","description":"With the Global Setup/Teardown and Async Test Environment APIs, Jest can work smoothly with puppeteer.","sidebar":"docs"},"setup-teardown":{"id":"setup-teardown","title":"Inicializaci\xf3n y Finalizaci\xf3n","description":"Frecuentemente cuando escribes las pruebas tienes algo de trabajo de inicializaci\xf3n que necesita ejecutarse antes de correr las pruebas, y tienes trabajo de finalizaci\xf3n que debe ejecutarse luego de correr las pruebas. Jest provee funciones para manejar esto.","sidebar":"docs"},"snapshot-testing":{"id":"snapshot-testing","title":"Test con Instant\xe1nea","description":"Los tests de instant\xe1nea son de gran utilidad cuando se quiere asegurar que la UI no cambia inesperadamente.","sidebar":"docs"},"testing-frameworks":{"id":"testing-frameworks","title":"Testing Web Frameworks","description":"Jest is a universal testing platform, with the ability to adapt to any JavaScript library or framework. In this section, we\'d like to link to community posts and articles about integrating Jest into popular JS libraries.","sidebar":"docs"},"timer-mocks":{"id":"timer-mocks","title":"Mocks Temporizados","description":"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest puede cambiar temporizadores con funciones que permiten controlar el paso del tiempo.  gran Scott!","sidebar":"docs"},"troubleshooting":{"id":"troubleshooting","title":"Soluci\xf3n de problemas","description":"UH oh, \xbfalgo sali\xf3 mal? Utilice esta gu\xeda para resolver problemas con Jest.","sidebar":"docs"},"tutorial-async":{"id":"tutorial-async","title":"Un ejemplo de Async","description":"En primer lugar, habilita el soporte de Babel en Jest como se indica en la gu\xeda.","sidebar":"docs"},"tutorial-jquery":{"id":"tutorial-jquery","title":"Manipulaci\xf3n del DOM","description":"Another class of functions that is often considered difficult to test is code that directly manipulates the DOM. Let\'s see how we can test the following snippet of jQuery code that listens to a click event, fetches some data asynchronously and sets the content of a span.","sidebar":"docs"},"tutorial-react":{"id":"tutorial-react","title":"Testear Aplicaciones React","description":"At Facebook, we use Jest to test React applications.","sidebar":"docs"},"tutorial-react-native":{"id":"tutorial-react-native","title":"Testear Aplicaciones React Native","description":"At Facebook, we use Jest to test React Native applications.","sidebar":"docs"},"upgrading-to-jest29":{"id":"upgrading-to-jest29","title":"From v28 to v29","description":"Upgrading Jest from v28 to v29? This guide aims to help refactoring your configuration and tests.","sidebar":"docs"},"using-matchers":{"id":"using-matchers","title":"Utilizando Comparadores","description":"Jest utiliza \\"matchers\\" para permitirte probar valores de diferentes maneras. Este documento introducir\xe1 algunos matchers com\xfanmente usados. Para la lista completa, vea el documento expect API.","sidebar":"docs"},"watch-plugins":{"id":"watch-plugins","title":"Watch Plugins","description":"The Jest watch plugin system provides a way to hook into specific parts of Jest and to define watch mode menu prompts that execute code on key press. Combined, these features allow you to develop interactive experiences custom for your workflow.","sidebar":"docs"},"webpack":{"id":"webpack","title":"Utilizando webpack","description":"Jest puede ser usado en proyectos que usan webpack para gestionar recursos, estilos y compilaci\xf3n. Webpack ofrece algunos desaf\xedos \xfanicos sobre otras herramientas porque se integra directamente con su aplicaci\xf3n para permitir la gesti\xf3n de hojas de estilo, recursos como im\xe1genes y fuentes, junto con el extenso ecosistema de lenguajes y herramientas de compilaci\xf3n a JavaScript.","sidebar":"docs"}}}')}}]);
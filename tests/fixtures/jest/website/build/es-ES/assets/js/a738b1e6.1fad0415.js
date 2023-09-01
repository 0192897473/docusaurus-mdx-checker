"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5810],{8117:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=o(4246),s=o(1670);const r={id:"es6-class-mocks",title:"Mocks de clase ES6"},c=void 0,l={unversionedId:"es6-class-mocks",id:"version-29.6/es6-class-mocks",title:"Mocks de clase ES6",description:"Jest se puede utilizar para simular clases de ES6 que importan a los archivos que deseas probar.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/version-29.6/Es6ClassMocks.md",sourceDirName:".",slug:"/es6-class-mocks",permalink:"/es-ES/docs/es6-class-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"29.6",frontMatter:{id:"es6-class-mocks",title:"Mocks de clase ES6"},sidebar:"docs",previous:{title:"Manual Mocks",permalink:"/es-ES/docs/manual-mocks"},next:{title:"Evitar mocks de m\xf3dulos",permalink:"/es-ES/docs/bypassing-module-mocks"}},t={},i=[{value:"Un ejemplo de clase ES6",id:"un-ejemplo-de-clase-es6",level:2},{value:"Las 4 formas de crear una clase mock ES6",id:"las-4-formas-de-crear-una-clase-mock-es6",level:2},{value:"Mocks autom\xe1ticos",id:"mocks-autom\xe1ticos",level:3},{value:"Mock Manual",id:"mock-manual",level:3},{value:"Llamando <code>jest.mock()</code> con el par\xe1metro de f\xe1brica de m\xf3dulo",id:"llamando-jestmock-con-el-par\xe1metro-de-f\xe1brica-de-m\xf3dulo",level:3},{value:"Sustituir el mock utilizando <code>mockImplementation()</code> o <code>mockImplementationOnce()</code>",id:"sustituir-el-mock-utilizando-mockimplementation-o-mockimplementationonce",level:3},{value:"A profundidad: Entendiendo las funciones constructor mock",id:"a-profundidad-entendiendo-las-funciones-constructor-mock",level:2},{value:"Mock manual de otra clase ES6",id:"mock-manual-de-otra-clase-es6",level:3},{value:"Mock simple utilizando un par\xe1metro de f\xe1brica de m\xf3dulo",id:"mock-simple-utilizando-un-par\xe1metro-de-f\xe1brica-de-m\xf3dulo",level:3},{value:"* La funci\xf3n de f\xe1brica del m\xf3dulo debe devolver una funci\xf3n",id:"-la-funci\xf3n-de-f\xe1brica-del-m\xf3dulo-debe-devolver-una-funci\xf3n",level:4},{value:"Mocking a specific method of a class",id:"mocking-a-specific-method-of-a-class",level:2},{value:"Static, getter and setter methods",id:"static-getter-and-setter-methods",level:3},{value:"Haciendo seguimiento del uso (espiando al mock)",id:"haciendo-seguimiento-del-uso-espiando-al-mock",level:2},{value:"Espiando al constructor",id:"espiando-al-constructor",level:3},{value:"Creando mocks para exports no default",id:"creando-mocks-para-exports-no-default",level:3},{value:"Espiando m\xe9todos de nuestra clase",id:"espiando-m\xe9todos-de-nuestra-clase",level:3},{value:"Limpiando entre pruebas",id:"limpiando-entre-pruebas",level:3},{value:"Ejemplo completo",id:"ejemplo-completo",level:2}];function d(e){const n=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",h3:"h3",admonition:"admonition",em:"em",strong:"strong",h4:"h4"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Jest se puede utilizar para simular clases de ES6 que importan a los archivos que deseas probar."}),"\n",(0,a.jsxs)(n.p,{children:["Las clases de ES6 son funciones constructor con un poco de sintaxis adicional. Por lo tanto, cualquier simulaci\xf3n para una clase ES6 debe ser una funcion o una clase ES6 actual (que es, de nuevo, otra funci\xf3n). Entonces puedes simular usando ",(0,a.jsx)(n.a,{href:"/es-ES/docs/mock-functions",children:"mock functions"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"un-ejemplo-de-clase-es6",children:"Un ejemplo de clase ES6"}),"\n",(0,a.jsxs)(n.p,{children:["Usaremos un ejemplo ideado de una clase que reproduce archivos de sonido,",(0,a.jsx)(n.code,{children:"SoundPlayer"})," y una clase de consumidores que una esa clase,",(0,a.jsx)(n.code,{children:"SoundPlayerConsumer"}),". Simularemos ",(0,a.jsx)(n.code,{children:"SoundPlayer"})," en nuestras pruebas para ",(0,a.jsx)(n.code,{children:"SoundPlayerConsumer"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player.js"',children:"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player-consumer.js"',children:"import SoundPlayer from './sound-player';\n\nexport default class SoundPlayerConsumer {\n  constructor() {\n    this.soundPlayer = new SoundPlayer();\n  }\n\n  playSomethingCool() {\n    const coolSoundFileName = 'song.mp3';\n    this.soundPlayer.playSoundFile(coolSoundFileName);\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"las-4-formas-de-crear-una-clase-mock-es6",children:"Las 4 formas de crear una clase mock ES6"}),"\n",(0,a.jsx)(n.h3,{id:"mocks-autom\xe1ticos",children:"Mocks autom\xe1ticos"}),"\n",(0,a.jsxs)(n.p,{children:["Llamando a ",(0,a.jsx)(n.code,{children:"jest.mock('./sound-player')"}),' arroja una "simulaci\xf3n autom\xe1tica" \xfatil que puede usar para espiar las llamadas a los contructores de clase y todos sus m\xe9todos. Reemplaza la clase Es6 con un constructor simulado, y reemplaza todos sus m\xe9todos con ',(0,a.jsx)(n.a,{href:"/es-ES/docs/mock-functions",children:"funciones de simulaci\xf3n"})," que siempre arrojan ",(0,a.jsx)(n.code,{children:"undefined"}),". Las llamadas a los m\xe9todos se almacenan en ",(0,a.jsx)(n.code,{children:"theAutomaticMock.mock.instances[index].methodName.mock.calls"}),"."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["If you use arrow functions in your classes, they will ",(0,a.jsx)(n.em,{children:"not"})," be part of the mock. Esto es porque las funciones flecha no est\xe1n presentes en el prototipo del objeto, son simplemente propiedades que contienen una referencia a una funci\xf3n."]})}),"\n",(0,a.jsx)(n.p,{children:"Si no necesitas reemplazar la implementaci\xf3n de la clase, esta es la opci\xf3n m\xe1s f\xe1cil para configurar. Por ejemplo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  // Show that mockClear() is working:\n  expect(SoundPlayer).not.toHaveBeenCalled();\n\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Constructor should have been called again:\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n\n  // mock.instances is available with automatic mocks:\n  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];\n  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n  // Equivalent to above check:\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"mock-manual",children:"Mock Manual"}),"\n",(0,a.jsxs)(n.p,{children:["Crea un ",(0,a.jsx)(n.a,{href:"/es-ES/docs/manual-mocks",children:"mock manual"})," almacenando una implementaci\xf3n mock en la carpeta ",(0,a.jsx)(n.code,{children:"__mocks__"}),". Esto te permite especificar la implementaci\xf3n, y puede ser utilizada a trav\xe9s de varios archivos de test."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"// Import this named export into your test file:\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Importa la simulaci\xf3n y el m\xe9todo de simulaci\xf3n compartido por todas las instancias:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',children:"import SoundPlayer, {mockPlaySoundFile} from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n});\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"llamando-jestmock-con-el-par\xe1metro-de-f\xe1brica-de-m\xf3dulo",children:["Llamando ",(0,a.jsx)(n.a,{href:"/es-ES/docs/jest-object#jestmockmodulename-factory-options",children:(0,a.jsx)(n.code,{children:"jest.mock()"})})," con el par\xe1metro de f\xe1brica de m\xf3dulo"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"jest.mock(ruta, fabricaDeModulo)"})," toma un argumento ",(0,a.jsx)(n.strong,{children:"fabrica de modulo"}),". Una f\xe1brica de m\xf3dulo es una funci\xf3n que regresa un mock."]}),"\n",(0,a.jsx)(n.p,{children:"Para crear un mock de una funci\xf3n constructor, la f\xe1brica de m\xf3dulo debe regresar una funci\xf3n constructor. En otras palabras, la f\xe1brica de m\xf3dulo debe ser una funci\xf3n que regresa una funci\xf3n - una funci\xf3n de alto orden, o HOF, por sus siglas en ingl\xe9s (Higher-Order Function)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import Reproductor from './reproductor';\nconst mockReproducirArchivoDeSonido = jest.fn();\njest.mock('./reproductor', () => {\n  return jest.fn().mockImplementation(() => {\n    return {reproducirArchivoDeSonido: mockReproducirArchivoDeSonido};\n  });\n});\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["Since calls to ",(0,a.jsx)(n.code,{children:"jest.mock()"})," are hoisted to the top of the file, Jest prevents access to out-of-scope variables. By default, you cannot first define a variable and then use it in the factory. Jest will disable this check for variables that start with the word ",(0,a.jsx)(n.code,{children:"mock"}),". However, it is still up to you to guarantee that they will be initialized on time. Be aware of ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz",children:"Temporal Dead Zone"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["For example, the following will throw an out-of-scope error due to the use of ",(0,a.jsx)(n.code,{children:"fake"})," instead of ",(0,a.jsx)(n.code,{children:"mock"})," in the variable declaration."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// Nota: esto fallar\xe1\nimport Reproductor de './reproductor';\nconst fakeReproducirArchivoDeSonido = jest.fn();\njest.mock('./reproductor, () => {\n  return jest.fn().mockImplementation(() => {\n    return {reproducirArchivoDeSonido: fakeReproducirArchivoDeSonido };\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The following will throw a ",(0,a.jsx)(n.code,{children:"ReferenceError"})," despite using ",(0,a.jsx)(n.code,{children:"mock"})," in the variable declaration, as the ",(0,a.jsx)(n.code,{children:"mockSoundPlayer"})," is not wrapped in an arrow function and thus accessed before initialization after hoisting."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockSoundPlayer = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n// results in a ReferenceError\njest.mock('./sound-player', () => {\n  return mockSoundPlayer;\n});\n"})}),"\n",(0,a.jsxs)(n.h3,{id:"sustituir-el-mock-utilizando-mockimplementation-o-mockimplementationonce",children:["Sustituir el mock utilizando ",(0,a.jsx)(n.a,{href:"/es-ES/docs/mock-function-api#mockfnmockimplementationfn",children:(0,a.jsx)(n.code,{children:"mockImplementation()"})})," o ",(0,a.jsx)(n.a,{href:"/es-ES/docs/mock-function-api#mockfnmockimplementationoncefn",children:(0,a.jsx)(n.code,{children:"mockImplementationOnce()"})})]}),"\n",(0,a.jsxs)(n.p,{children:["Puedes reemplazar todos los mocks anteriores para cambiar la implementaci\xf3n, para uno as\xed como para todos los test, al llamar ",(0,a.jsx)(n.code,{children:"mockImplementation()"})," en el mock existente."]}),"\n",(0,a.jsxs)(n.p,{children:["Las llamadas a jest.mock son elevadas al principio del c\xf3digo. Puedes especificar una mock posteriormente, por ejemplo, en ",(0,a.jsx)(n.code,{children:"beforeAll()"}),", al llamar ",(0,a.jsx)(n.code,{children:"mockImplementation()"})," (o ",(0,a.jsx)(n.code,{children:"mockImplementationOnce()"}),") en el mock existente en lugar de usar el par\xe1metro de f\xe1brica. Esto tambi\xe9n le permite cambiar la simulaci\xf3n entre pruebas, si se necesita:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import Reproductor de './reproductor';\nimport Consumidor de './consumidor';\n\njest.mock('./reproductor');\n\ndescribe('Cuando Reproductor arroja un error', () => {\n  beforeAll(() => {\n    Reproductor.mockImplementation(() => {\n      return {\n        reproducirArchivoDeSonido: () => {\n          throw new Error('Error de prueba');\n        },\n      };\n    });\n  });\n\n  it('Deber\xeda arrojar un error al llamar a reproduceAlgoCool', () => {\n    const consumidor = new consumidor();\n    expect(() => consumidor.reproduceAlgoCool()).toThrow();\n  });\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"a-profundidad-entendiendo-las-funciones-constructor-mock",children:"A profundidad: Entendiendo las funciones constructor mock"}),"\n",(0,a.jsxs)(n.p,{children:["Construir tus funciones de constructor de mock utilizando ",(0,a.jsx)(n.code,{children:"jest.fn().mockImplementation()"})," hace que los mock se vean m\xe1s complicados de lo que en realidad son. Esta secci\xf3n muestra c\xf3mo puedes crear tus propios mock para ilustrar c\xf3mo funciona el simular m\xf3dulos con mocks."]}),"\n",(0,a.jsx)(n.h3,{id:"mock-manual-de-otra-clase-es6",children:"Mock manual de otra clase ES6"}),"\n",(0,a.jsxs)(n.p,{children:["Si defines una clase ES6 utilizando el mismo nombre de archivo que la clase mock en la carpeta ",(0,a.jsx)(n.code,{children:"__mocks__"}),", \xe9ste servir\xe1 como el mock. Esta clase ser\xe1 utilizada en lugar de la clase real. Esto te permite inyectar una implementaci\xf3n de prueba para la clase, pero no proporciona una forma de espiar las llamadas."]}),"\n",(0,a.jsx)(n.p,{children:"Para un ejemplo ideado, la proyecci\xf3n podr\xeda verse as\xed:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"export default class SoundPlayer {\n  constructor() {\n    console.log('Mock SoundPlayer: constructor was called');\n  }\n\n  playSoundFile() {\n    console.log('Mock SoundPlayer: playSoundFile was called');\n  }\n}\n"})}),"\n",(0,a.jsx)(n.h3,{id:"mock-simple-utilizando-un-par\xe1metro-de-f\xe1brica-de-m\xf3dulo",children:"Mock simple utilizando un par\xe1metro de f\xe1brica de m\xf3dulo"}),"\n",(0,a.jsxs)(n.p,{children:["La funci\xf3n de f\xe1brica de m\xf3dulo pasada a ",(0,a.jsx)(n.code,{children:"jest.mock(ruta, fabricaDeModulo)"})," puede ser una funci\xf3n de alto orden que regresa una funci\xf3n*. Esto permitir\xe1 llamar a ",(0,a.jsx)(n.code,{children:"new"})," en la simulaci\xf3n. De nuevo, esto te permite inyectar un comportamiento diferente para las pruebas, pero no proporciona una forma de espiar llamadas."]}),"\n",(0,a.jsx)(n.h4,{id:"-la-funci\xf3n-de-f\xe1brica-del-m\xf3dulo-debe-devolver-una-funci\xf3n",children:"* La funci\xf3n de f\xe1brica del m\xf3dulo debe devolver una funci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"Para crear un mock de una funci\xf3n constructor, la f\xe1brica de m\xf3dulo debe regresar una funci\xf3n constructor. En otras palabras, la f\xe1brica de m\xf3dulo debe ser una funci\xf3n que regresa una funci\xf3n - una funci\xf3n de alto orden, o HOF, por sus siglas en ingl\xe9s (Higher-Order Function)."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"jest.mock('./reproductor', () => {\n  return function () {\n    return {reproducirArchivoDeSonido: () => {}};\n  };\n});\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["The mock can't be an arrow function because calling ",(0,a.jsx)(n.code,{children:"new"})," on an arrow function is not allowed in JavaScript. As\xed que esto no funciona:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"jest.mock('./sound-player', () => {\n  return () => {\n    // Does not work; arrow functions can't be called with new\n    return {playSoundFile: () => {}};\n  };\n});\n"})}),(0,a.jsxs)(n.p,{children:["Esto arrojar\xe1 ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"TypeError: _soundPlayer.default is not a constructor"})})," (Error de tipo: soundPlayer.default no es un constructor), a menos que el c\xf3digo sea transpilado a ES5, por ejemplo por ",(0,a.jsx)(n.code,{children:"@babel/preset-env"}),". (ES5 no tiene funciones de flecha ni clases, por lo que ambas ser\xe1n transpiladas a funciones simples.)"]})]}),"\n",(0,a.jsx)(n.h2,{id:"mocking-a-specific-method-of-a-class",children:"Mocking a specific method of a class"}),"\n",(0,a.jsxs)(n.p,{children:["Lets say that you want to mock or spy on the method ",(0,a.jsx)(n.code,{children:"playSoundFile"})," within the class ",(0,a.jsx)(n.code,{children:"SoundPlayer"}),". A simple example:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// your jest test file below\nimport SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst playSoundFileMock = jest\n  .spyOn(SoundPlayer.prototype, 'playSoundFile')\n  .mockImplementation(() => {\n    console.log('mocked function');\n  }); // comment this line if just want to \"spy\"\n\nit('player consumer plays music', () => {\n  const player = new SoundPlayerConsumer();\n  player.playSomethingCool();\n  expect(playSoundFileMock).toHaveBeenCalled();\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"static-getter-and-setter-methods",children:"Static, getter and setter methods"}),"\n",(0,a.jsxs)(n.p,{children:["Lets imagine our class ",(0,a.jsx)(n.code,{children:"SoundPlayer"})," has a getter method ",(0,a.jsx)(n.code,{children:"foo"})," and a static method ",(0,a.jsx)(n.code,{children:"brand"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n\n  get foo() {\n    return 'bar';\n  }\n  static brand() {\n    return 'player-brand';\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"You can mock/spy on them easily, here is an example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"// your jest test file below\nimport SoundPlayer from './sound-player';\n\nconst staticMethodMock = jest\n  .spyOn(SoundPlayer, 'brand')\n  .mockImplementation(() => 'some-mocked-brand');\n\nconst getterMethodMock = jest\n  .spyOn(SoundPlayer.prototype, 'foo', 'get')\n  .mockImplementation(() => 'some-mocked-result');\n\nit('custom methods are called', () => {\n  const player = new SoundPlayer();\n  const foo = player.foo;\n  const brand = SoundPlayer.brand();\n\n  expect(staticMethodMock).toHaveBeenCalled();\n  expect(getterMethodMock).toHaveBeenCalled();\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"haciendo-seguimiento-del-uso-espiando-al-mock",children:"Haciendo seguimiento del uso (espiando al mock)"}),"\n",(0,a.jsx)(n.p,{children:"Inyectar una implementaci\xf3n de prueba es \xfatil, pero probablemente desear\xe1s probar si el constructor de clase y los m\xe9todos est\xe1n siendo llamados con los par\xe1metros correctos."}),"\n",(0,a.jsx)(n.h3,{id:"espiando-al-constructor",children:"Espiando al constructor"}),"\n",(0,a.jsxs)(n.p,{children:["Para rastrear llamadas al constructor, reemplaza la funci\xf3n devuelta por la funci\xf3n de alto orden con una funci\xf3n de mock de Jest. Cr\xe9alo con ",(0,a.jsx)(n.a,{href:"/es-ES/docs/jest-object#jestfnimplementation",children:(0,a.jsx)(n.code,{children:"jest.fn()"})}),", y luego especifica su implementaci\xf3n con ",(0,a.jsx)(n.code,{children:"mockImplementation()"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: () => {}};\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This will let us inspect usage of our mocked class, using ",(0,a.jsx)(n.code,{children:"SoundPlayer.mock.calls"}),": ",(0,a.jsx)(n.code,{children:"expect(SoundPlayer).toHaveBeenCalled();"})," or near-equivalent: ",(0,a.jsx)(n.code,{children:"expect(SoundPlayer.mock.calls.length).toBeGreaterThan(0);"})]}),"\n",(0,a.jsx)(n.h3,{id:"creando-mocks-para-exports-no-default",children:"Creando mocks para exports no default"}),"\n",(0,a.jsxs)(n.p,{children:["Si la clase ",(0,a.jsx)(n.strong,{children:"no"})," es la exportaci\xf3n default del m\xf3dulo, entonces necesitas devolver un objeto con un atributo llamado c\xf3mo exportaci\xf3n de la clase."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import {Reproductor} from './reproductor';\njest.mock('./reproductor', () => {\n  // Funciona y te permite verificar llamadas al constructor:\n return {\n    Reproductor: jest.fn().mockImplementation(() => {\n      return {reproducirArchivoDeSonido: () => {}};\n    }),\n  };\n});\n"})}),"\n",(0,a.jsx)(n.h3,{id:"espiando-m\xe9todos-de-nuestra-clase",children:"Espiando m\xe9todos de nuestra clase"}),"\n",(0,a.jsxs)(n.p,{children:["Nuestra clase simulada necesitar\xe1 proporcionar cualquier funci\xf3n miembro (",(0,a.jsx)(n.code,{children:"playSoundFile"})," en el ejemplo) que ser\xe1 llamada durante nuestras pruebas, o bien obtendremos un error por llamar una funci\xf3n que no existe. Pero probablemente querramos tambien espiar llamadas a esos m\xe9todos, para asegurar de que fueron llamados con los par\xe1metros esperados."]}),"\n",(0,a.jsxs)(n.p,{children:["Un nuevo objeto ser\xe1 creado cada vez que la simulaci\xf3n de la funci\xf3n constructora sea llamada durante las pruebas. Para espiar llamadas de m\xe9todo en todos estos objetos, poblamos ",(0,a.jsx)(n.code,{children:"playSoundFile"})," con otra funci\xf3n de simulaci\xf3n, y almacenamos una referencia para esa misma funci\xf3n de simulaci\xf3n en nuestro archivo de prueba, para que est\xe9 disponible durante las pruebas."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n    // Now we can track calls to playSoundFile\n  });\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"El equivalente de simulaci\xf3n manual de esto ser\xeda:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"// Import this named export into your test file\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["El uso es similar a la funci\xf3n de f\xe1brica del m\xf3dulo, s\xf3lo que puede omitir el segundo argumento de ",(0,a.jsx)(n.code,{children:"jest.mock()"}),", y deber\xe1 importar el m\xe9todo simulado a su archivo de prueba, puesto que ya no es definido ah\xed. Utilice la ruta de m\xf3dulo original para esto; no incluya ",(0,a.jsx)(n.code,{children:"__mocks__"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"limpiando-entre-pruebas",children:"Limpiando entre pruebas"}),"\n",(0,a.jsxs)(n.p,{children:["Para vaciar el registro de llamadas a la funci\xf3n constructura de simulaciones y sus m\xe9todos, llamamos a ",(0,a.jsx)(n.a,{href:"/es-ES/docs/mock-function-api#mockfnmockclear",children:(0,a.jsx)(n.code,{children:"mockClear()"})})," en la funci\xf3n ",(0,a.jsx)(n.code,{children:"beforeEach()"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"beforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo-completo",children:"Ejemplo completo"}),"\n",(0,a.jsxs)(n.p,{children:["Aqu\xed tiene un archivo de prueba completo el cual utiliza un par\xe1metro de f\xe1brica de m\xf3dulos para ",(0,a.jsx)(n.code,{children:"jest.mock"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n\nbeforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('The consumer should be able to call new() on SoundPlayer', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Ensure constructor created the object:\n  expect(soundPlayerConsumer).toBeTruthy();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n});\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},1670:(e,n,o)=>{o.d(n,{Zo:()=>l,ah:()=>r});var a=o(7378);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function l({components:e,children:n,disableParentContext:o}){let l;return l=o?"function"==typeof e?e({}):e||c:r(e),a.createElement(s.Provider,{value:l},n)}}}]);
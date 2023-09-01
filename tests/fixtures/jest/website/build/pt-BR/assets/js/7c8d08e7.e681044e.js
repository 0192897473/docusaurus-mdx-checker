"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5752],{9010:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>i});var a=n(4246),s=n(1670);const t={id:"es6-class-mocks",title:"Simula\xe7\xe3o de Classes ES6"},r=void 0,l={unversionedId:"es6-class-mocks",id:"version-29.5/es6-class-mocks",title:"Simula\xe7\xe3o de Classes ES6",description:"Jest pode ser usado para simular (mock, em ingl\xeas) classes ES6 que s\xe3o importadas para arquivos que voc\xea deseja testar.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.5/Es6ClassMocks.md",sourceDirName:".",slug:"/es6-class-mocks",permalink:"/pt-BR/docs/29.5/es6-class-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.5",frontMatter:{id:"es6-class-mocks",title:"Simula\xe7\xe3o de Classes ES6"},sidebar:"docs",previous:{title:"Simula\xe7\xf5es Manuais",permalink:"/pt-BR/docs/29.5/manual-mocks"},next:{title:"Passando pelo m\xf3dulo de mock",permalink:"/pt-BR/docs/29.5/bypassing-module-mocks"}},c={},i=[{value:"Um Exemplo de Classe ES6",id:"um-exemplo-de-classe-es6",level:2},{value:"As 4 maneiras de criar uma simula\xe7\xe3o de uma classe ES6",id:"as-4-maneiras-de-criar-uma-simula\xe7\xe3o-de-uma-classe-es6",level:2},{value:"Simula\xe7\xe3o autom\xe1tica",id:"simula\xe7\xe3o-autom\xe1tica",level:3},{value:"Simula\xe7\xe3o manual",id:"simula\xe7\xe3o-manual",level:3},{value:"Chamar  <code>jest.mock()</code> com o par\xe2metro de &quot;module factory&quot;",id:"chamar--jestmock-com-o-par\xe2metro-de-module-factory",level:3},{value:"Substituir a simula\xe7\xe3o (mock, em ingl\xeas) usando <code>mockImplementation()</code> ou <code>mockImplementationOnce()</code>",id:"substituir-a-simula\xe7\xe3o-mock-em-ingl\xeas-usando-mockimplementation-ou-mockimplementationonce",level:3},{value:"Em profundidade: Compreens\xe3o das fun\xe7\xf5es do construtor das simula\xe7\xf5es (mock, em ingl\xeas)",id:"em-profundidade-compreens\xe3o-das-fun\xe7\xf5es-do-construtor-das-simula\xe7\xf5es-mock-em-ingl\xeas",level:2},{value:"Simula\xe7\xe3o manual que \xe9 outra classe ES6",id:"simula\xe7\xe3o-manual-que-\xe9-outra-classe-es6",level:3},{value:"Simular (mock, em ingl\xeas) usando par\xe2metro de &quot;module factory&quot;",id:"simular-mock-em-ingl\xeas-usando-par\xe2metro-de-module-factory",level:3},{value:"* Fun\xe7\xe3o &quot;module factory&#39; deve retornar uma fun\xe7\xe3o",id:"-fun\xe7\xe3o-module-factory-deve-retornar-uma-fun\xe7\xe3o",level:4},{value:"Mocking a specific method of a class",id:"mocking-a-specific-method-of-a-class",level:2},{value:"Static, getter and setter methods",id:"static-getter-and-setter-methods",level:3},{value:"Keeping track of usage (spying on the mock)",id:"keeping-track-of-usage-spying-on-the-mock",level:2},{value:"Spying on the constructor",id:"spying-on-the-constructor",level:3},{value:"Mocking non-default class exports",id:"mocking-non-default-class-exports",level:3},{value:"Spying on methods of our class",id:"spying-on-methods-of-our-class",level:3},{value:"Cleaning up between tests",id:"cleaning-up-between-tests",level:3},{value:"Complete example",id:"complete-example",level:2}];function d(e){const o=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",h3:"h3",admonition:"admonition",em:"em",strong:"strong",h4:"h4"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.p,{children:"Jest pode ser usado para simular (mock, em ingl\xeas) classes ES6 que s\xe3o importadas para arquivos que voc\xea deseja testar."}),"\n",(0,a.jsxs)(o.p,{children:["Classes ES6 s\xe3o fun\xe7\xf5es de construtor com uma sintaxe mais f\xe1cil de usar. Portanto, qualquer simula\xe7\xe3o de uma classe ES6 deve ser uma fun\xe7\xe3o ou uma classe ES6 real (que \xe9, novamente, outra fun\xe7\xe3o). Ent\xe3o, voc\xea pode simul\xe1-las usando ",(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/mock-functions",children:"fun\xe7\xf5es de simula\xe7\xe3o"}),"."]}),"\n",(0,a.jsx)(o.h2,{id:"um-exemplo-de-classe-es6",children:"Um Exemplo de Classe ES6"}),"\n",(0,a.jsxs)(o.p,{children:["Usaremos um exemplo inventado de uma classe que reproduz arquivos de som, ",(0,a.jsx)(o.code,{children:"SoundPlayer"}),", e uma classe de consumidor que usa essa classe, ",(0,a.jsx)(o.code,{children:"SoundPlayerConsumer"}),". N\xf3s iremos simular ",(0,a.jsx)(o.code,{children:"SoundPlayer"})," nos nossos testes para ",(0,a.jsx)(o.code,{children:"SoundPlayerConsumer"}),"."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="sound-player.js"',children:"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n}\n"})}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="sound-player-consumer.js"',children:"import SoundPlayer from './sound-player';\n\nexport default class SoundPlayerConsumer {\n  constructor() {\n    this.soundPlayer = new SoundPlayer();\n  }\n\n  playSomethingCool() {\n    const coolSoundFileName = 'song.mp3';\n    this.soundPlayer.playSoundFile(coolSoundFileName);\n  }\n}\n"})}),"\n",(0,a.jsx)(o.h2,{id:"as-4-maneiras-de-criar-uma-simula\xe7\xe3o-de-uma-classe-es6",children:"As 4 maneiras de criar uma simula\xe7\xe3o de uma classe ES6"}),"\n",(0,a.jsx)(o.h3,{id:"simula\xe7\xe3o-autom\xe1tica",children:"Simula\xe7\xe3o autom\xe1tica"}),"\n",(0,a.jsxs)(o.p,{children:["Chamando ",(0,a.jsx)(o.code,{children:"jest.mock('./sound-player')"}),' retorna uma "simula\xe7\xe3o autom\xe1tica" \xfatil que voc\xea pode usar para espionar chamadas para o construtor de classe e todos os seus m\xe9todos. Substitui a classe ES6 por um construtor simulado e substitui todos os seus m\xe9todos com ',(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/mock-functions",children:"fun\xe7\xf5es de simula\xe7\xe3o"})," que sempre retornam ",(0,a.jsx)(o.code,{children:"undefined"}),". As chamadas dos m\xe9todos s\xe3o salvas em ",(0,a.jsx)(o.code,{children:"theAutomaticMock.mock.instances[index].methodName.mock.calls"}),"."]}),"\n",(0,a.jsx)(o.admonition,{type:"note",children:(0,a.jsxs)(o.p,{children:["If you use arrow functions in your classes, they will ",(0,a.jsx)(o.em,{children:"not"})," be part of the mock. Isto ocorre porque as arrow functions n\xe3o est\xe3o presentes no prototype do objeto, elas s\xe3o apenas propriedades que cont\xeam uma refer\xeancia para uma fun\xe7\xe3o."]})}),"\n",(0,a.jsx)(o.p,{children:"Se voc\xea n\xe3o precisa substituir a implementa\xe7\xe3o da classe, esta \xe9 a op\xe7\xe3o mais f\xe1cil de configurar. Por exemplo:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  // Show that mockClear() is working:\n  expect(SoundPlayer).not.toHaveBeenCalled();\n\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Constructor should have been called again:\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n\n  // mock.instances is available with automatic mocks:\n  const mockSoundPlayerInstance = SoundPlayer.mock.instances[0];\n  const mockPlaySoundFile = mockSoundPlayerInstance.playSoundFile;\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n  // Equivalent to above check:\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n  expect(mockPlaySoundFile).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsx)(o.h3,{id:"simula\xe7\xe3o-manual",children:"Simula\xe7\xe3o manual"}),"\n",(0,a.jsxs)(o.p,{children:["Crie uma ",(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/manual-mocks",children:"simula\xe7\xe3o manual"})," salvando uma implementa\xe7\xe3o de simula\xe7\xe3o na pasta ",(0,a.jsx)(o.code,{children:"__mocks__"}),". Isso permite que voc\xea especifique a implementa\xe7\xe3o, e pode ser usada em arquivos de teste."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"// Import this named export into your test file:\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n"})}),"\n",(0,a.jsx)(o.p,{children:"Importe a simula\xe7\xe3o e o m\xe9todo simulado compartilhado por todas as inst\xe2ncias:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',children:"import SoundPlayer, {mockPlaySoundFile} from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\njest.mock('./sound-player'); // SoundPlayer is now a mock constructor\n\nbeforeEach(() => {\n  // Clear all instances and calls to constructor and all methods:\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile).toHaveBeenCalledWith(coolSoundFileName);\n});\n"})}),"\n",(0,a.jsxs)(o.h3,{id:"chamar--jestmock-com-o-par\xe2metro-de-module-factory",children:["Chamar ",(0,a.jsxs)(o.a,{href:"/pt-BR/docs/29.5/jest-object#jestmockmodulename-factory-options",children:[" ",(0,a.jsx)(o.code,{children:"jest.mock()"})]}),' com o par\xe2metro de "module factory"']}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.code,{children:"jest.mock(path, moduleFactory)"})," recebe um argumento ",(0,a.jsx)(o.strong,{children:'"module factory"'}),'. Um "module factory" \xe9 uma fun\xe7\xe3o que retorna uma simula\xe7\xe3o.']}),"\n",(0,a.jsx)(o.p,{children:'Para simular uma fun\xe7\xe3o de construtor, o "module factory" deve retornar uma fun\xe7\xe3o de construtor. Em outras palavras, o "module factory" deve ser uma fun\xe7\xe3o que retorna uma fun\xe7\xe3o - uma fun\xe7\xe3o de ordem superior, tamb\xe9m chamada de "higher-order function" (HOF).'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n"})}),"\n",(0,a.jsx)(o.admonition,{type:"caution",children:(0,a.jsxs)(o.p,{children:["Since calls to ",(0,a.jsx)(o.code,{children:"jest.mock()"})," are hoisted to the top of the file, Jest prevents access to out-of-scope variables. By default, you cannot first define a variable and then use it in the factory. Jest will disable this check for variables that start with the word ",(0,a.jsx)(o.code,{children:"mock"}),". However, it is still up to you to guarantee that they will be initialized on time. Be aware of ",(0,a.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz",children:"Temporal Dead Zone"}),"."]})}),"\n",(0,a.jsxs)(o.p,{children:["For example, the following will throw an out-of-scope error due to the use of ",(0,a.jsx)(o.code,{children:"fake"})," instead of ",(0,a.jsx)(o.code,{children:"mock"})," in the variable declaration."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"// Note: this will fail\nimport SoundPlayer from './sound-player';\nconst fakePlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: fakePlaySoundFile};\n  });\n});\n"})}),"\n",(0,a.jsxs)(o.p,{children:["The following will throw a ",(0,a.jsx)(o.code,{children:"ReferenceError"})," despite using ",(0,a.jsx)(o.code,{children:"mock"})," in the variable declaration, as the ",(0,a.jsx)(o.code,{children:"mockSoundPlayer"})," is not wrapped in an arrow function and thus accessed before initialization after hoisting."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockSoundPlayer = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n// results in a ReferenceError\njest.mock('./sound-player', () => {\n  return mockSoundPlayer;\n});\n"})}),"\n",(0,a.jsxs)(o.h3,{id:"substituir-a-simula\xe7\xe3o-mock-em-ingl\xeas-usando-mockimplementation-ou-mockimplementationonce",children:["Substituir a simula\xe7\xe3o (mock, em ingl\xeas) usando ",(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/mock-function-api#mockfnmockimplementationfn",children:(0,a.jsx)(o.code,{children:"mockImplementation()"})})," ou ",(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/mock-function-api#mockfnmockimplementationoncefn",children:(0,a.jsx)(o.code,{children:"mockImplementationOnce()"})})]}),"\n",(0,a.jsxs)(o.p,{children:["\xc9 poss\xedvel substituir todas as simula\xe7\xf5es acima para alterar a implementa\xe7\xe3o, para um \xfanico teste ou todos os testes, chamando ",(0,a.jsx)(o.code,{children:"mockImplementation()"})," na simula\xe7\xe3o existente."]}),"\n",(0,a.jsxs)(o.p,{children:['Chamadas para jest.mock s\xe3o "hoisted" para o topo do c\xf3digo. Voc\xea pode especificar uma simula\xe7\xe3o depois, por exemplo, em ',(0,a.jsx)(o.code,{children:"beforeAll()"}),", chamando ",(0,a.jsx)(o.code,{children:"mockImplementation()"})," (ou ",(0,a.jsx)(o.code,{children:"mockImplementationOnce()"}),') na simula\xe7\xe3o existente em vez de usar o par\xe2metro "factory". Isso tamb\xe9m permite que voc\xea altere a simula\xe7\xe3o entre os testes, se necess\xe1rio:']}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\njest.mock('./sound-player');\n\ndescribe('When SoundPlayer throws an error', () => {\n  beforeAll(() => {\n    SoundPlayer.mockImplementation(() => {\n      return {\n        playSoundFile: () => {\n          throw new Error('Test error');\n        },\n      };\n    });\n  });\n\n  it('Should throw an error when calling playSomethingCool', () => {\n    const soundPlayerConsumer = new SoundPlayerConsumer();\n    expect(() => soundPlayerConsumer.playSomethingCool()).toThrow();\n  });\n});\n"})}),"\n",(0,a.jsx)(o.h2,{id:"em-profundidade-compreens\xe3o-das-fun\xe7\xf5es-do-construtor-das-simula\xe7\xf5es-mock-em-ingl\xeas",children:"Em profundidade: Compreens\xe3o das fun\xe7\xf5es do construtor das simula\xe7\xf5es (mock, em ingl\xeas)"}),"\n",(0,a.jsxs)(o.p,{children:["Construir sua simula\xe7\xe3o de fun\xe7\xe3o de construtor usando ",(0,a.jsx)(o.code,{children:"jest.fn().mockImplementation()"})," faz com que as simula\xe7\xf5es pare\xe7am mais complicadas do que realmente s\xe3o. Esta se\xe7\xe3o mostra como voc\xea pode criar suas pr\xf3prias simula\xe7\xf5es para ilustrar como funciona o simulador."]}),"\n",(0,a.jsx)(o.h3,{id:"simula\xe7\xe3o-manual-que-\xe9-outra-classe-es6",children:"Simula\xe7\xe3o manual que \xe9 outra classe ES6"}),"\n",(0,a.jsxs)(o.p,{children:["Se voc\xea definir uma classe ES6 usando o mesmo nome de arquivo que a classe simulada na pasta ",(0,a.jsx)(o.code,{children:"__mocks__"}),", ela servir\xe1 como a simula\xe7\xe3o desta classe. Esta classe ser\xe1 usada no lugar da classe verdadeira. Isso permite que voc\xea injete uma implementa\xe7\xe3o de teste para a classe, mas n\xe3o fornece uma maneira de espiar as chamadas."]}),"\n",(0,a.jsx)(o.p,{children:"Para o exemplo inventado, a simula\xe7\xe3o pode ser assim:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"export default class SoundPlayer {\n  constructor() {\n    console.log('Mock SoundPlayer: constructor was called');\n  }\n\n  playSoundFile() {\n    console.log('Mock SoundPlayer: playSoundFile was called');\n  }\n}\n"})}),"\n",(0,a.jsx)(o.h3,{id:"simular-mock-em-ingl\xeas-usando-par\xe2metro-de-module-factory",children:'Simular (mock, em ingl\xeas) usando par\xe2metro de "module factory"'}),"\n",(0,a.jsxs)(o.p,{children:['A fun\xe7\xe3o "module factory" passada para ',(0,a.jsx)(o.code,{children:"jest.mock(path, moduleFactory)"})," pode ser uma HOF que retorna uma fun\xe7\xe3o*. Isso permitir\xe1 chamar ",(0,a.jsx)(o.code,{children:"new"})," na simula\xe7\xe3o. Novamente, isso permite que voc\xea injete um comportamento diferente para testes, mas n\xe3o fornece uma maneira de espiar as chamadas."]}),"\n",(0,a.jsx)(o.h4,{id:"-fun\xe7\xe3o-module-factory-deve-retornar-uma-fun\xe7\xe3o",children:"* Fun\xe7\xe3o \"module factory' deve retornar uma fun\xe7\xe3o"}),"\n",(0,a.jsx)(o.p,{children:'Para simular uma fun\xe7\xe3o de construtor, o "module factory" deve retornar uma fun\xe7\xe3o de construtor. Em outras palavras, o "module factory" deve ser uma fun\xe7\xe3o que retorna uma fun\xe7\xe3o - uma fun\xe7\xe3o de ordem superior, tamb\xe9m chamada de "higher-order function" (HOF).'}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"jest.mock('./sound-player', () => {\n  return function () {\n    return {playSoundFile: () => {}};\n  };\n});\n"})}),"\n",(0,a.jsxs)(o.admonition,{type:"note",children:[(0,a.jsxs)(o.p,{children:["The mock can't be an arrow function because calling ",(0,a.jsx)(o.code,{children:"new"})," on an arrow function is not allowed in JavaScript. Isso n\xe3o vai funcionar:"]}),(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"jest.mock('./sound-player', () => {\n  return () => {\n    // Does not work; arrow functions can't be called with new\n    return {playSoundFile: () => {}};\n  };\n});\n"})}),(0,a.jsxs)(o.p,{children:["Isto lan\xe7ar\xe1 ",(0,a.jsx)(o.strong,{children:(0,a.jsx)(o.em,{children:"TypeError: _soundPlayer2.default is not a constructor"})}),", a menos que o c\xf3digo seja transpilado para ES5, por exemplo, por ",(0,a.jsx)(o.code,{children:"@babel/preset-env"}),'. (ES5 n\xe3o tem "arrow functions" nem classes, ent\xe3o ambas ser\xe3o transpiladas para fun\xe7\xf5es simples.)']})]}),"\n",(0,a.jsx)(o.h2,{id:"mocking-a-specific-method-of-a-class",children:"Mocking a specific method of a class"}),"\n",(0,a.jsxs)(o.p,{children:["Lets say that you want to mock or spy on the method ",(0,a.jsx)(o.code,{children:"playSoundFile"})," within the class ",(0,a.jsx)(o.code,{children:"SoundPlayer"}),". A simple example:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"// your jest test file below\nimport SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst playSoundFileMock = jest\n  .spyOn(SoundPlayer.prototype, 'playSoundFile')\n  .mockImplementation(() => {\n    console.log('mocked function');\n  }); // comment this line if just want to \"spy\"\n\nit('player consumer plays music', () => {\n  const player = new SoundPlayerConsumer();\n  player.playSomethingCool();\n  expect(playSoundFileMock).toHaveBeenCalled();\n});\n"})}),"\n",(0,a.jsx)(o.h3,{id:"static-getter-and-setter-methods",children:"Static, getter and setter methods"}),"\n",(0,a.jsxs)(o.p,{children:["Lets imagine our class ",(0,a.jsx)(o.code,{children:"SoundPlayer"})," has a getter method ",(0,a.jsx)(o.code,{children:"foo"})," and a static method ",(0,a.jsx)(o.code,{children:"brand"})]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"export default class SoundPlayer {\n  constructor() {\n    this.foo = 'bar';\n  }\n\n  playSoundFile(fileName) {\n    console.log('Playing sound file ' + fileName);\n  }\n\n  get foo() {\n    return 'bar';\n  }\n  static brand() {\n    return 'player-brand';\n  }\n}\n"})}),"\n",(0,a.jsx)(o.p,{children:"You can mock/spy on them easily, here is an example:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"// your jest test file below\nimport SoundPlayer from './sound-player';\n\nconst staticMethodMock = jest\n  .spyOn(SoundPlayer, 'brand')\n  .mockImplementation(() => 'some-mocked-brand');\n\nconst getterMethodMock = jest\n  .spyOn(SoundPlayer.prototype, 'foo', 'get')\n  .mockImplementation(() => 'some-mocked-result');\n\nit('custom methods are called', () => {\n  const player = new SoundPlayer();\n  const foo = player.foo;\n  const brand = SoundPlayer.brand();\n\n  expect(staticMethodMock).toHaveBeenCalled();\n  expect(getterMethodMock).toHaveBeenCalled();\n});\n"})}),"\n",(0,a.jsx)(o.h2,{id:"keeping-track-of-usage-spying-on-the-mock",children:"Keeping track of usage (spying on the mock)"}),"\n",(0,a.jsx)(o.p,{children:"Injecting a test implementation is helpful, but you will probably also want to test whether the class constructor and methods are called with the correct parameters."}),"\n",(0,a.jsx)(o.h3,{id:"spying-on-the-constructor",children:"Spying on the constructor"}),"\n",(0,a.jsxs)(o.p,{children:["In order to track calls to the constructor, replace the function returned by the HOF with a Jest mock function. Create it with ",(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/jest-object#jestfnimplementation",children:(0,a.jsx)(o.code,{children:"jest.fn()"})}),", and then specify its implementation with ",(0,a.jsx)(o.code,{children:"mockImplementation()"}),"."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: () => {}};\n  });\n});\n"})}),"\n",(0,a.jsxs)(o.p,{children:["This will let us inspect usage of our mocked class, using ",(0,a.jsx)(o.code,{children:"SoundPlayer.mock.calls"}),": ",(0,a.jsx)(o.code,{children:"expect(SoundPlayer).toHaveBeenCalled();"})," or near-equivalent: ",(0,a.jsx)(o.code,{children:"expect(SoundPlayer.mock.calls.length).toBeGreaterThan(0);"})]}),"\n",(0,a.jsx)(o.h3,{id:"mocking-non-default-class-exports",children:"Mocking non-default class exports"}),"\n",(0,a.jsxs)(o.p,{children:["If the class is ",(0,a.jsx)(o.strong,{children:"not"})," the default export from the module then you need to return an object with the key that is the same as the class export name."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import {SoundPlayer} from './sound-player';\njest.mock('./sound-player', () => {\n  // Works and lets you check for constructor calls:\n  return {\n    SoundPlayer: jest.fn().mockImplementation(() => {\n      return {playSoundFile: () => {}};\n    }),\n  };\n});\n"})}),"\n",(0,a.jsx)(o.h3,{id:"spying-on-methods-of-our-class",children:"Spying on methods of our class"}),"\n",(0,a.jsxs)(o.p,{children:["Our mocked class will need to provide any member functions (",(0,a.jsx)(o.code,{children:"playSoundFile"})," in the example) that will be called during our tests, or else we'll get an error for calling a function that doesn't exist. But we'll probably want to also spy on calls to those methods, to ensure that they were called with the expected parameters."]}),"\n",(0,a.jsxs)(o.p,{children:["A new object will be created each time the mock constructor function is called during tests. To spy on method calls in all of these objects, we populate ",(0,a.jsx)(o.code,{children:"playSoundFile"})," with another mock function, and store a reference to that same mock function in our test file, so it's available during tests."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"import SoundPlayer from './sound-player';\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n    // Now we can track calls to playSoundFile\n  });\n});\n"})}),"\n",(0,a.jsx)(o.p,{children:"The manual mock equivalent of this would be:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="__mocks__/sound-player.js"',children:"// Import this named export into your test file\nexport const mockPlaySoundFile = jest.fn();\nconst mock = jest.fn().mockImplementation(() => {\n  return {playSoundFile: mockPlaySoundFile};\n});\n\nexport default mock;\n"})}),"\n",(0,a.jsxs)(o.p,{children:["Usage is similar to the module factory function, except that you can omit the second argument from ",(0,a.jsx)(o.code,{children:"jest.mock()"}),", and you must import the mocked method into your test file, since it is no longer defined there. Use the original module path for this; don't include ",(0,a.jsx)(o.code,{children:"__mocks__"}),"."]}),"\n",(0,a.jsx)(o.h3,{id:"cleaning-up-between-tests",children:"Cleaning up between tests"}),"\n",(0,a.jsxs)(o.p,{children:["To clear the record of calls to the mock constructor function and its methods, we call ",(0,a.jsx)(o.a,{href:"/pt-BR/docs/29.5/mock-function-api#mockfnmockclear",children:(0,a.jsx)(o.code,{children:"mockClear()"})})," in the ",(0,a.jsx)(o.code,{children:"beforeEach()"})," function:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",children:"beforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n"})}),"\n",(0,a.jsx)(o.h2,{id:"complete-example",children:"Complete example"}),"\n",(0,a.jsxs)(o.p,{children:["Here's a complete test file which uses the module factory parameter to ",(0,a.jsx)(o.code,{children:"jest.mock"}),":"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-javascript",metastring:'title="sound-player-consumer.test.js"',children:"import SoundPlayer from './sound-player';\nimport SoundPlayerConsumer from './sound-player-consumer';\n\nconst mockPlaySoundFile = jest.fn();\njest.mock('./sound-player', () => {\n  return jest.fn().mockImplementation(() => {\n    return {playSoundFile: mockPlaySoundFile};\n  });\n});\n\nbeforeEach(() => {\n  SoundPlayer.mockClear();\n  mockPlaySoundFile.mockClear();\n});\n\nit('The consumer should be able to call new() on SoundPlayer', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  // Ensure constructor created the object:\n  expect(soundPlayerConsumer).toBeTruthy();\n});\n\nit('We can check if the consumer called the class constructor', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  expect(SoundPlayer).toHaveBeenCalledTimes(1);\n});\n\nit('We can check if the consumer called a method on the class instance', () => {\n  const soundPlayerConsumer = new SoundPlayerConsumer();\n  const coolSoundFileName = 'song.mp3';\n  soundPlayerConsumer.playSomethingCool();\n  expect(mockPlaySoundFile.mock.calls[0][0]).toBe(coolSoundFileName);\n});\n"})})]})}const u=function(e={}){const{wrapper:o}=Object.assign({},(0,s.ah)(),e.components);return o?(0,a.jsx)(o,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},1670:(e,o,n)=>{n.d(o,{Zo:()=>l,ah:()=>t});var a=n(7378);const s=a.createContext({});function t(e){const o=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const r={};function l({components:e,children:o,disableParentContext:n}){let l;return l=n?"function"==typeof e?e({}):e||r:t(e),a.createElement(s.Provider,{value:l},o)}}}]);
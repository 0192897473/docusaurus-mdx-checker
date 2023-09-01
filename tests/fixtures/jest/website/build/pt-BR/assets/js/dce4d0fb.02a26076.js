"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2105],{1292:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>r,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(4246),t=s(1670);const i={id:"manual-mocks",title:"Simula\xe7\xf5es Manuais"},a=void 0,c={unversionedId:"manual-mocks",id:"version-29.4/manual-mocks",title:"Simula\xe7\xf5es Manuais",description:"Mocks, ou simula\xe7\xf5es, manuais s\xe3o usadas para esbo\xe7ar funcionalidade com dados simulados. Por exemplo, em vez de acessar um recurso remoto como um site ou um banco de dados, conv\xe9m criar uma simula\xe7\xe3o manual que permite a utiliza\xe7\xe3o de dados falsos. Isso garante que os seus testes ser\xe3o r\xe1pidos e n\xe3o fragmentados.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.4/ManualMocks.md",sourceDirName:".",slug:"/manual-mocks",permalink:"/pt-BR/docs/29.4/manual-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.4",frontMatter:{id:"manual-mocks",title:"Simula\xe7\xf5es Manuais"},sidebar:"docs",previous:{title:"Simula\xe7\xf5es de Temporizador",permalink:"/pt-BR/docs/29.4/timer-mocks"},next:{title:"Simula\xe7\xe3o de Classes ES6",permalink:"/pt-BR/docs/29.4/es6-class-mocks"}},r={},d=[{value:"Mocking user modules",id:"mocking-user-modules",level:2},{value:"Mocking Node modules",id:"mocking-node-modules",level:2},{value:"Exemplos",id:"exemplos",level:2},{value:"Usando com imports de m\xf3dulo ES",id:"usando-com-imports-de-m\xf3dulo-es",level:2},{value:"Mocking methods which are not implemented in JSDOM",id:"mocking-methods-which-are-not-implemented-in-jsdom",level:2}];function l(e){const o=Object.assign({p:"p",h2:"h2",code:"code",admonition:"admonition",strong:"strong",a:"a",pre:"pre"},(0,t.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Mocks, ou simula\xe7\xf5es, manuais s\xe3o usadas para esbo\xe7ar funcionalidade com dados simulados. Por exemplo, em vez de acessar um recurso remoto como um site ou um banco de dados, conv\xe9m criar uma simula\xe7\xe3o manual que permite a utiliza\xe7\xe3o de dados falsos. Isso garante que os seus testes ser\xe3o r\xe1pidos e n\xe3o fragmentados."}),"\n",(0,n.jsx)(o.h2,{id:"mocking-user-modules",children:"Mocking user modules"}),"\n",(0,n.jsxs)(o.p,{children:["Simula\xe7\xf5es manuais s\xe3o definidas por escrever um m\xf3dulo em um subdiret\xf3rio ",(0,n.jsx)(o.code,{children:"__mocks__/"})," imediatamente adjacente ao m\xf3dulo. Por exemplo, para simular (mock, em ingl\xeas) um m\xf3dulo chamado ",(0,n.jsx)(o.code,{children:"user"})," no diret\xf3rio ",(0,n.jsx)(o.code,{children:"models"}),", crie um arquivo chamado ",(0,n.jsx)(o.code,{children:"user.js"})," e coloque ele no diret\xf3rio ",(0,n.jsx)(o.code,{children:"models/__mocks__"}),"."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"__mocks__"})," folder is case-sensitive, so naming the directory ",(0,n.jsx)(o.code,{children:"__MOCKS__"})," will break on some systems."]})}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["Quando precisamos utilizar esse m\xf3dulo em nossos testes (o que significa que queremos usar a simula\xe7\xe3o manual em vez da implementa\xe7\xe3o real), \xe9 ",(0,n.jsx)(o.strong,{children:"necess\xe1rio"})," chamar, explicitamente, o ",(0,n.jsx)(o.code,{children:"jest.mock('./moduleName')"}),"."]})}),"\n",(0,n.jsx)(o.h2,{id:"mocking-node-modules",children:"Mocking Node modules"}),"\n",(0,n.jsxs)(o.p,{children:["Se o m\xf3dulo que voc\xea precisa simular \xe9 um m\xf3dulo Node (ex.: ",(0,n.jsx)(o.code,{children:"lodash"}),"), o mock precisa ser colocado em um diret\xf3rio ",(0,n.jsx)(o.code,{children:"__mocks__"})," adjacente ao diret\xf3rio ",(0,n.jsx)(o.code,{children:"node_modules"})," (a n\xe3o ser que voc\xea tenha configurado o ",(0,n.jsx)(o.a,{href:"/pt-BR/docs/29.4/configuration#roots-arraystring",children:(0,n.jsx)(o.code,{children:"roots"})})," para apontar para um diret\xf3rio diferente da raiz do projeto) e ser\xe1 simulado ",(0,n.jsx)(o.strong,{children:"automaticamente"}),". N\xe3o h\xe1 necessidade de chamar explicitamente ",(0,n.jsx)(o.code,{children:"jest.mock('module_name')"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["M\xf3dulos com escopo (tamb\xe9m conhecidos como ",(0,n.jsx)(o.a,{href:"https://docs.npmjs.com/cli/v6/using-npm/scope",children:"pacotes com escopo"}),") podem ser simulados criando um arquivo em uma estrutura de diret\xf3rio que corresponde ao nome do m\xf3dulo com escopo. Por exemplo, para simular um m\xf3dulo chamado ",(0,n.jsx)(o.code,{children:"@escopo/project-name"}),", crie um arquivo em ",(0,n.jsx)(o.code,{children:"__mocks__/@escopo/nome-do-projeto. s"}),", criando o diret\xf3rio ",(0,n.jsx)(o.code,{children:"@scope/"})," em conformidade."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:["If we want to mock Node's built-in modules (e.g.: ",(0,n.jsx)(o.code,{children:"fs"})," or ",(0,n.jsx)(o.code,{children:"path"}),"), then explicitly calling e.g. ",(0,n.jsx)(o.code,{children:"jest.mock('path')"})," is ",(0,n.jsx)(o.strong,{children:"required"}),", because built-in modules are not mocked by default."]})}),"\n",(0,n.jsx)(o.h2,{id:"exemplos",children:"Exemplos"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:".\n\u251c\u2500\u2500 config\n\u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2514\u2500\u2500 fs.js\n\u251c\u2500\u2500 models\n\u2502\xa0\xa0 \u251c\u2500\u2500 __mocks__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 user.js\n\u251c\u2500\u2500 node_modules\n\u2514\u2500\u2500 views\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Quando uma simula\xe7\xe3o manual existe para um determinado m\xf3dulo, o sistema de m\xf3dulo do Jest usar\xe1 esse m\xf3dulo ao chamar explicitamente ",(0,n.jsx)(o.code,{children:"jest.mock('moduleName')"}),". However, when ",(0,n.jsx)(o.code,{children:"automock"})," is set to ",(0,n.jsx)(o.code,{children:"true"}),", the manual mock implementation will be used instead of the automatically created mock, even if ",(0,n.jsx)(o.code,{children:"jest.mock('moduleName')"})," is not called. Para desativar esse comportamento, voc\xea precisar\xe1 chamar explicitamente ",(0,n.jsx)(o.code,{children:"jest.unmock('moduleName')"})," em testes que devem usar a implementa\xe7\xe3o do efetiva do m\xf3dulo."]}),"\n",(0,n.jsx)(o.admonition,{type:"info",children:(0,n.jsxs)(o.p,{children:["In order to mock properly, Jest needs ",(0,n.jsx)(o.code,{children:"jest.mock('moduleName')"})," to be in the same scope as the ",(0,n.jsx)(o.code,{children:"require/import"})," statement."]})}),"\n",(0,n.jsxs)(o.p,{children:["Here's a contrived example where we have a module that provides a summary of all the files in a given directory. In this case, we use the core (built in) ",(0,n.jsx)(o.code,{children:"fs"})," module."]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",metastring:'title="FileSummarizer.js"',children:"'use strict';\n\nconst fs = require('fs');\n\nfunction summarizeFilesInDirectorySync(directory) {\n  return fs.readdirSync(directory).map(fileName => ({\n    directory,\n    fileName,\n  }));\n}\n\nexports.summarizeFilesInDirectorySync = summarizeFilesInDirectorySync;\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Since we'd like our tests to avoid actually hitting the disk (that's pretty slow and fragile), we create a manual mock for the ",(0,n.jsx)(o.code,{children:"fs"})," module by extending an automatic mock. Our manual mock will implement custom versions of the ",(0,n.jsx)(o.code,{children:"fs"})," APIs that we can build on for our tests:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",metastring:'title="__mocks__/fs.js"',children:"'use strict';\n\nconst path = require('path');\n\nconst fs = jest.createMockFromModule('fs');\n\n// This is a custom function that our tests can use during setup to specify\n// what the files on the \"mock\" filesystem should look like when any of the\n// `fs` APIs are used.\nlet mockFiles = Object.create(null);\nfunction __setMockFiles(newMockFiles) {\n  mockFiles = Object.create(null);\n  for (const file in newMockFiles) {\n    const dir = path.dirname(file);\n\n    if (!mockFiles[dir]) {\n      mockFiles[dir] = [];\n    }\n    mockFiles[dir].push(path.basename(file));\n  }\n}\n\n// A custom version of `readdirSync` that reads from the special mocked out\n// file list set via __setMockFiles\nfunction readdirSync(directoryPath) {\n  return mockFiles[directoryPath] || [];\n}\n\nfs.__setMockFiles = __setMockFiles;\nfs.readdirSync = readdirSync;\n\nmodule.exports = fs;\n"})}),"\n",(0,n.jsxs)(o.p,{children:["Now we write our test. In this case ",(0,n.jsx)(o.code,{children:"jest.mock('fs')"})," must be called explicitly, because ",(0,n.jsx)(o.code,{children:"fs"})," is Node\u2019s built-in module:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-javascript",metastring:'title="__tests__/FileSummarizer-test.js"',children:"'use strict';\n\njest.mock('fs');\n\ndescribe('listFilesInDirectorySync', () => {\n  const MOCK_FILE_INFO = {\n    '/path/to/file1.js': 'console.log(\"file1 contents\");',\n    '/path/to/file2.txt': 'file2 contents',\n  };\n\n  beforeEach(() => {\n    // Set up some mocked out file info before each test\n    require('fs').__setMockFiles(MOCK_FILE_INFO);\n  });\n\n  test('includes all files in the directory in the summary', () => {\n    const FileSummarizer = require('../FileSummarizer');\n    const fileSummary =\n      FileSummarizer.summarizeFilesInDirectorySync('/path/to');\n\n    expect(fileSummary.length).toBe(2);\n  });\n});\n"})}),"\n",(0,n.jsxs)(o.p,{children:["The example mock shown here uses ",(0,n.jsx)(o.a,{href:"/pt-BR/docs/29.4/jest-object#jestcreatemockfrommodulemodulename",children:(0,n.jsx)(o.code,{children:"jest.createMockFromModule"})})," to generate an automatic mock, and overrides its default behavior. This is the recommended approach, but is completely optional. If you do not want to use the automatic mock at all, you can export your own functions from the mock file. One downside to fully manual mocks is that they're manual \u2013 meaning you have to manually update them any time the module they are mocking changes. Because of this, it's best to use or extend the automatic mock when it works for your needs."]}),"\n",(0,n.jsxs)(o.p,{children:["To ensure that a manual mock and its real implementation stay in sync, it might be useful to require the real module using ",(0,n.jsx)(o.a,{href:"/pt-BR/docs/29.4/jest-object#jestrequireactualmodulename",children:(0,n.jsx)(o.code,{children:"jest.requireActual(moduleName)"})})," in your manual mock and amending it with mock functions before exporting it."]}),"\n",(0,n.jsxs)(o.p,{children:["The code for this example is available at ",(0,n.jsx)(o.a,{href:"https://github.com/jestjs/jest/tree/main/examples/manual-mocks",children:"examples/manual-mocks"}),"."]}),"\n",(0,n.jsx)(o.h2,{id:"usando-com-imports-de-m\xf3dulo-es",children:"Usando com imports de m\xf3dulo ES"}),"\n",(0,n.jsxs)(o.p,{children:["If you're using ",(0,n.jsx)(o.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",children:"ES module imports"})," then you'll normally be inclined to put your ",(0,n.jsx)(o.code,{children:"import"})," statements at the top of the test file. But often you need to instruct Jest to use a mock before modules use it. For this reason, Jest will automatically hoist ",(0,n.jsx)(o.code,{children:"jest.mock"})," calls to the top of the module (before any imports). To learn more about this and see it in action, see ",(0,n.jsx)(o.a,{href:"https://github.com/kentcdodds/how-jest-mocking-works",children:"this repo"}),"."]}),"\n",(0,n.jsx)(o.admonition,{type:"caution",children:(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"jest.mock"})," calls cannot be hoisted to the top of the module if you enabled ECMAScript modules support. The ESM module loader always evaluates the static imports before executing code. See ",(0,n.jsx)(o.a,{href:"/pt-BR/docs/29.4/ecmascript-modules",children:"ECMAScriptModules"})," for details."]})}),"\n",(0,n.jsx)(o.h2,{id:"mocking-methods-which-are-not-implemented-in-jsdom",children:"Mocking methods which are not implemented in JSDOM"}),"\n",(0,n.jsxs)(o.p,{children:["If some code uses a method which JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible. This is e.g. the case with ",(0,n.jsx)(o.code,{children:"window.matchMedia()"}),". Jest returns ",(0,n.jsx)(o.code,{children:"TypeError: window.matchMedia is not a function"})," and doesn't properly execute the test."]}),"\n",(0,n.jsxs)(o.p,{children:["In this case, mocking ",(0,n.jsx)(o.code,{children:"matchMedia"})," in the test file should solve the issue:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"Object.defineProperty(window, 'matchMedia', {\n  writable: true,\n  value: jest.fn().mockImplementation(query => ({\n    matches: false,\n    media: query,\n    onchange: null,\n    addListener: jest.fn(), // deprecated\n    removeListener: jest.fn(), // deprecated\n    addEventListener: jest.fn(),\n    removeEventListener: jest.fn(),\n    dispatchEvent: jest.fn(),\n  })),\n});\n"})}),"\n",(0,n.jsxs)(o.p,{children:["This works if ",(0,n.jsx)(o.code,{children:"window.matchMedia()"})," is used in a function (or method) which is invoked in the test. If ",(0,n.jsx)(o.code,{children:"window.matchMedia()"})," is executed directly in the tested file, Jest reports the same error. In this case, the solution is to move the manual mock into a separate file and include this one in the test ",(0,n.jsx)(o.strong,{children:"before"})," the tested file:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"import './matchMedia.mock'; // Must be imported before the tested file\nimport {myMethod} from './file-to-test';\n\ndescribe('myMethod()', () => {\n  // Test the method here...\n});\n"})})]})}const m=function(e={}){const{wrapper:o}=Object.assign({},(0,t.ah)(),e.components);return o?(0,n.jsx)(o,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},1670:(e,o,s)=>{s.d(o,{Zo:()=>c,ah:()=>i});var n=s(7378);const t=n.createContext({});function i(e){const o=n.useContext(t);return n.useMemo((()=>"function"==typeof e?e(o):{...o,...e}),[o,e])}const a={};function c({components:e,children:o,disableParentContext:s}){let c;return c=s?"function"==typeof e?e({}):e||a:i(e),n.createElement(t.Provider,{value:c},o)}}}]);
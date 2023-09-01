"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[917],{1344:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>r});var o=t(4246),c=t(1670);const a={id:"mock-functions",title:"Func\u021bii pentru dubluri"},s=void 0,i={unversionedId:"mock-functions",id:"version-29.4/mock-functions",title:"Func\u021bii pentru dubluri",description:"Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with new, and allowing test-time configuration of return values.",source:"@site/i18n/ro/docusaurus-plugin-content-docs/version-29.4/MockFunctions.md",sourceDirName:".",slug:"/mock-functions",permalink:"/ro/docs/29.4/mock-functions",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ro",tags:[],version:"29.4",frontMatter:{id:"mock-functions",title:"Func\u021bii pentru dubluri"},sidebar:"docs",previous:{title:"Asamblare \u0219i dezasamblare",permalink:"/ro/docs/29.4/setup-teardown"},next:{title:"Jest Platform",permalink:"/ro/docs/29.4/jest-platform"}},l={},r=[{value:"Utilizarea unei func\u0163ii mock",id:"utilizarea-unei-func\u0163ii-mock",level:2},{value:"Proprietatea <code>.mock</code>",id:"proprietatea-mock",level:2},{value:"Returnarea valorilor mock",id:"returnarea-valorilor-mock",level:2},{value:"Mocking Modules",id:"mocking-modules",level:2},{value:"Mocking Partials",id:"mocking-partials",level:2},{value:"Implementarea dublurilor mock",id:"implementarea-dublurilor-mock",level:2},{value:"Mock Names",id:"mock-names",level:2},{value:"Validatori personaliza\u021bi",id:"validatori-personaliza\u021bi",level:2}];function u(e){const n=Object.assign({p:"p",code:"code",a:"a",h2:"h2",pre:"pre"},(0,c.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["Mock functions allow you to test the links between code by erasing the actual implementation of a function, capturing calls to the function (and the parameters passed in those calls), capturing instances of constructor functions when instantiated with ",(0,o.jsx)(n.code,{children:"new"}),", and allowing test-time configuration of return values."]}),"\n",(0,o.jsxs)(n.p,{children:["There are two ways to mock functions: Either by creating a mock function to use in test code, or writing a ",(0,o.jsx)(n.a,{href:"/ro/docs/29.4/manual-mocks",children:(0,o.jsx)(n.code,{children:"manual mock"})})," to override a module dependency."]}),"\n",(0,o.jsx)(n.h2,{id:"utilizarea-unei-func\u0163ii-mock",children:"Utilizarea unei func\u0163ii mock"}),"\n",(0,o.jsxs)(n.p,{children:["Let's imagine we're testing an implementation of a function ",(0,o.jsx)(n.code,{children:"forEach"}),", which invokes a callback for each item in a supplied array."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="forEach.js"',children:"export function forEach(items, callback) {\n  for (let index = 0; index < items.length; index++) {\n    callback(items[index]);\n  }\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"To test this function, we can use a mock function, and inspect the mock's state to ensure the callback is invoked as expected."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="forEach.test.js"',children:"const forEach = require('./forEach');\n\nconst mockCallback = jest.fn(x => 42 + x);\n\ntest('forEach mock function', () => {\n  forEach([0, 1], mockCallback);\n\n  // The mock function was called twice\n  expect(mockCallback.mock.calls).toHaveLength(2);\n\n  // The first argument of the first call to the function was 0\n  expect(mockCallback.mock.calls[0][0]).toBe(0);\n\n  // The first argument of the second call to the function was 1\n  expect(mockCallback.mock.calls[1][0]).toBe(1);\n\n  // The return value of the first call to the function was 42\n  expect(mockCallback.mock.results[0].value).toBe(42);\n});\n"})}),"\n",(0,o.jsxs)(n.h2,{id:"proprietatea-mock",children:["Proprietatea ",(0,o.jsx)(n.code,{children:".mock"})]}),"\n",(0,o.jsxs)(n.p,{children:["All mock functions have this special ",(0,o.jsx)(n.code,{children:".mock"})," property, which is where data about how the function has been called and what the function returned is kept. The ",(0,o.jsx)(n.code,{children:".mock"})," property also tracks the value of ",(0,o.jsx)(n.code,{children:"this"})," for each call, so it is possible to inspect this as well:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMock1 = jest.fn();\nconst a = new myMock1();\nconsole.log(myMock1.mock.instances);\n// > [ <a> ]\n\nconst myMock2 = jest.fn();\nconst b = {};\nconst bound = myMock2.bind(b);\nbound();\nconsole.log(myMock2.mock.contexts);\n// > [ <b> ]\n"})}),"\n",(0,o.jsx)(n.p,{children:"These mock members are very useful in tests to assert how these functions get called, instantiated, or what they returned:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// The function was called exactly once\nexpect(someMockFunction.mock.calls).toHaveLength(1);\n\n// The first arg of the first call to the function was 'first arg'\nexpect(someMockFunction.mock.calls[0][0]).toBe('first arg');\n\n// The second arg of the first call to the function was 'second arg'\nexpect(someMockFunction.mock.calls[0][1]).toBe('second arg');\n\n// The return value of the first call to the function was 'return value'\nexpect(someMockFunction.mock.results[0].value).toBe('return value');\n\n// The function was called with a certain `this` context: the `element` object.\nexpect(someMockFunction.mock.contexts[0]).toBe(element);\n\n// This function was instantiated exactly twice\nexpect(someMockFunction.mock.instances.length).toBe(2);\n\n// The object returned by the first instantiation of this function\n// had a `name` property whose value was set to 'test'\nexpect(someMockFunction.mock.instances[0].name).toBe('test');\n\n// The first argument of the last call to the function was 'test'\nexpect(someMockFunction.mock.lastCall[0]).toBe('test');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"returnarea-valorilor-mock",children:"Returnarea valorilor mock"}),"\n",(0,o.jsx)(n.p,{children:"Mock functions can also be used to inject test values into your code during a test:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMock = jest.fn();\nconsole.log(myMock());\n// > undefined\n\nmyMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);\n\nconsole.log(myMock(), myMock(), myMock(), myMock());\n// > 10, 'x', true, true\n"})}),"\n",(0,o.jsx)(n.p,{children:"Mock functions are also very effective in code that uses a functional continuation-passing style. Code written in this style helps avoid the need for complicated stubs that recreate the behavior of the real component they're standing in for, in favor of injecting values directly into the test right before they're used."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const filterTestFn = jest.fn();\n\n// Make the mock return `true` for the first call,\n// and `false` for the second call\nfilterTestFn.mockReturnValueOnce(true).mockReturnValueOnce(false);\n\nconst result = [11, 12].filter(num => filterTestFn(num));\n\nconsole.log(result);\n// > [11]\nconsole.log(filterTestFn.mock.calls[0][0]); // 11\nconsole.log(filterTestFn.mock.calls[1][0]); // 12\n"})}),"\n",(0,o.jsx)(n.p,{children:"Most real-world examples actually involve getting ahold of a mock function on a dependent component and configuring that, but the technique is the same. In these cases, try to avoid the temptation to implement logic inside of any function that's not directly being tested."}),"\n",(0,o.jsx)(n.h2,{id:"mocking-modules",children:"Mocking Modules"}),"\n",(0,o.jsxs)(n.p,{children:["Suppose we have a class that fetches users from our API. The class uses ",(0,o.jsx)(n.a,{href:"https://github.com/axios/axios",children:"axios"})," to call the API then returns the ",(0,o.jsx)(n.code,{children:"data"})," attribute which contains all the users:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="users.js"',children:"import axios from 'axios';\n\nclass Users {\n  static all() {\n    return axios.get('/users.json').then(resp => resp.data);\n  }\n}\n\nexport default Users;\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Now, in order to test this method without actually hitting the API (and thus creating slow and fragile tests), we can use the ",(0,o.jsx)(n.code,{children:"jest.mock(...)"})," function to automatically mock the axios module."]}),"\n",(0,o.jsxs)(n.p,{children:["Once we mock the module we can provide a ",(0,o.jsx)(n.code,{children:"mockResolvedValue"})," for ",(0,o.jsx)(n.code,{children:".get"})," that returns the data we want our test to assert against. In effect, we are saying that we want ",(0,o.jsx)(n.code,{children:"axios.get('/users.json')"})," to return a fake response."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="users.test.js"',children:"import axios from 'axios';\nimport Users from './users';\n\njest.mock('axios');\n\ntest('should fetch users', () => {\n  const users = [{name: 'Bob'}];\n  const resp = {data: users};\n  axios.get.mockResolvedValue(resp);\n\n  // or you could use the following depending on your use case:\n  // axios.get.mockImplementation(() => Promise.resolve(resp))\n\n  return Users.all().then(data => expect(data).toEqual(users));\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mocking-partials",children:"Mocking Partials"}),"\n",(0,o.jsx)(n.p,{children:"Subsets of a module can be mocked and the rest of the module can keep their actual implementation:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="foo-bar-baz.js"',children:"export const foo = 'foo';\nexport const bar = () => 'bar';\nexport default () => 'baz';\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"//test.js\nimport defaultExport, {bar, foo} from '../foo-bar-baz';\n\njest.mock('../foo-bar-baz', () => {\n  const originalModule = jest.requireActual('../foo-bar-baz');\n\n  //Mock the default export and named export 'foo'\n  return {\n    __esModule: true,\n    ...originalModule,\n    default: jest.fn(() => 'mocked baz'),\n    foo: 'mocked foo',\n  };\n});\n\ntest('should do a partial mock', () => {\n  const defaultExportResult = defaultExport();\n  expect(defaultExportResult).toBe('mocked baz');\n  expect(defaultExport).toHaveBeenCalled();\n\n  expect(foo).toBe('mocked foo');\n  expect(bar()).toBe('bar');\n});\n"})}),"\n",(0,o.jsx)(n.h2,{id:"implementarea-dublurilor-mock",children:"Implementarea dublurilor mock"}),"\n",(0,o.jsxs)(n.p,{children:["Still, there are cases where it's useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. This can be done with ",(0,o.jsx)(n.code,{children:"jest.fn"})," or the ",(0,o.jsx)(n.code,{children:"mockImplementationOnce"})," method on mock functions."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest.fn(cb => cb(null, true));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"mockImplementation"})," method is useful when you need to define the default implementation of a mock function that is created from another module:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="foo.js"',children:"module.exports = function () {\n  // some implementation;\n};\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",metastring:'title="test.js"',children:"jest.mock('../foo'); // this happens automatically with automocking\nconst foo = require('../foo');\n\n// foo is a mock function\nfoo.mockImplementation(() => 42);\nfoo();\n// > 42\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When you need to recreate a complex behavior of a mock function such that multiple function calls produce different results, use the ",(0,o.jsx)(n.code,{children:"mockImplementationOnce"})," method:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn()\n  .mockImplementationOnce(cb => cb(null, true))\n  .mockImplementationOnce(cb => cb(null, false));\n\nmyMockFn((err, val) => console.log(val));\n// > true\n\nmyMockFn((err, val) => console.log(val));\n// > false\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When the mocked function runs out of implementations defined with ",(0,o.jsx)(n.code,{children:"mockImplementationOnce"}),", it will execute the default implementation set with ",(0,o.jsx)(n.code,{children:"jest.fn"})," (if it is defined):"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn(() => 'default')\n  .mockImplementationOnce(() => 'first call')\n  .mockImplementationOnce(() => 'second call');\n\nconsole.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());\n// > 'first call', 'second call', 'default', 'default'\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For cases where we have methods that are typically chained (and thus always need to return ",(0,o.jsx)(n.code,{children:"this"}),"), we have a sugary API to simplify this in the form of a ",(0,o.jsx)(n.code,{children:".mockReturnThis()"})," function that also sits on all mocks:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myObj = {\n  myMethod: jest.fn().mockReturnThis(),\n};\n\n// is the same as\n\nconst otherObj = {\n  myMethod: jest.fn(function () {\n    return this;\n  }),\n};\n"})}),"\n",(0,o.jsx)(n.h2,{id:"mock-names",children:"Mock Names"}),"\n",(0,o.jsxs)(n.p,{children:["You can optionally provide a name for your mock functions, which will be displayed instead of ",(0,o.jsx)(n.code,{children:"'jest.fn()'"})," in the test error output. Use ",(0,o.jsx)(n.a,{href:"MockFunctionAPI.md/#mockfnmocknamename",children:(0,o.jsx)(n.code,{children:".mockName()"})})," if you want to be able to quickly identify the mock function reporting an error in your test output."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"const myMockFn = jest\n  .fn()\n  .mockReturnValue('default')\n  .mockImplementation(scalar => 42 + scalar)\n  .mockName('add42');\n"})}),"\n",(0,o.jsx)(n.h2,{id:"validatori-personaliza\u021bi",children:"Validatori personaliza\u021bi"}),"\n",(0,o.jsx)(n.p,{children:"Finally, in order to make it less demanding to assert how mock functions have been called, we've added some custom matcher functions for you:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// The mock function was called at least once\nexpect(mockFunc).toHaveBeenCalled();\n\n// The mock function was called at least once with the specified args\nexpect(mockFunc).toHaveBeenCalledWith(arg1, arg2);\n\n// The last call to the mock function was called with the specified args\nexpect(mockFunc).toHaveBeenLastCalledWith(arg1, arg2);\n\n// All calls and the name of the mock is written as a snapshot\nexpect(mockFunc).toMatchSnapshot();\n"})}),"\n",(0,o.jsxs)(n.p,{children:["These matchers are sugar for common forms of inspecting the ",(0,o.jsx)(n.code,{children:".mock"})," property. You can always do this manually yourself if that's more to your taste or if you need to do something more specific:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:"// The mock function was called at least once\nexpect(mockFunc.mock.calls.length).toBeGreaterThan(0);\n\n// The mock function was called at least once with the specified args\nexpect(mockFunc.mock.calls).toContainEqual([arg1, arg2]);\n\n// The last call to the mock function was called with the specified args\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1]).toEqual([\n  arg1,\n  arg2,\n]);\n\n// The first arg of the last call to the mock function was `42`\n// (note that there is no sugar helper for this specific of an assertion)\nexpect(mockFunc.mock.calls[mockFunc.mock.calls.length - 1][0]).toBe(42);\n\n// A snapshot will check that a mock was invoked the same number of times,\n// in the same order, with the same arguments. It will also assert on the name.\nexpect(mockFunc.mock.calls).toEqual([[arg1, arg2]]);\nexpect(mockFunc.getMockName()).toBe('a mock name');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Pentru o list\u0103 complet\u0103 a validatorilor, verifica\u021bi ",(0,o.jsx)(n.a,{href:"/ro/docs/29.4/expect",children:"documenta\u021bia de referin\u0163\u0103"}),"."]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,c.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(u,e)})):u(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>i,ah:()=>a});var o=t(7378);const c=o.createContext({});function a(e){const n=o.useContext(c);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const s={};function i({components:e,children:n,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||s:a(e),o.createElement(c.Provider,{value:i},n)}}}]);
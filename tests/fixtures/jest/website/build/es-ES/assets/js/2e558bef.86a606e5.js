"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[3603],{2599:(e,n,t)=>{t.d(n,{Z:()=>o});t(7378);var a=t(7140);const s={tabItem:"tabItem_wHwb"};var r=t(4246);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(s.tabItem,o),hidden:t,children:n})}},8447:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7378),s=t(7140),r=t(9169),o=t(3620),c=t(9749),l=t(8981),i=t(56),d=t(8796);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[i,u]=m({queryString:t,groupId:s}),[b,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Nk)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),x=(()=>{const e=i??b;return h({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),j(e)}),[u,j,r]),tabValues:r}}var j=t(362);const x={tabList:"tabList_J5MA",tabItem:"tabItem_l0OV"};var g=t(4246);function f(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,r.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==a&&(i(n),o(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.Z)("tabs__item",x.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},6267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=t(4246),s=t(1670),r=t(8447),o=t(2599);const c={id:"tutorial-react",title:"Testear Aplicaciones React"},l=void 0,i={unversionedId:"tutorial-react",id:"tutorial-react",title:"Testear Aplicaciones React",description:"At Facebook, we use Jest to test React applications.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/current/TutorialReact.md",sourceDirName:".",slug:"/tutorial-react",permalink:"/es-ES/docs/next/tutorial-react",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/es-ES",tags:[],version:"current",frontMatter:{id:"tutorial-react",title:"Testear Aplicaciones React"},sidebar:"docs",previous:{title:"Arquitectura",permalink:"/es-ES/docs/next/architecture"},next:{title:"Testear Aplicaciones React Native",permalink:"/es-ES/docs/next/tutorial-react-native"}},d={},u=[{value:"Setup",id:"setup",level:2},{value:"Setup con Create React App",id:"setup-con-create-react-app",level:3},{value:"Setup sin Create React App",id:"setup-sin-create-react-app",level:3},{value:"Test con Instant\xe1nea",id:"test-con-instant\xe1nea",level:3},{value:"Snapshot Testing with Mocks, Enzyme and React 16+",id:"snapshot-testing-with-mocks-enzyme-and-react-16",level:4},{value:"DOM Testing",id:"dom-testing",level:3},{value:"@testing-library/react",id:"testing-libraryreact",level:4},{value:"Transformers personalizados",id:"transformers-personalizados",level:3}];function p(e){const n=Object.assign({p:"p",a:"a",h2:"h2",h3:"h3",code:"code",pre:"pre",strong:"strong",admonition:"admonition",h4:"h4",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["At Facebook, we use Jest to test ",(0,a.jsx)(n.a,{href:"https://reactjs.org/",children:"React"})," applications."]}),"\n",(0,a.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,a.jsx)(n.h3,{id:"setup-con-create-react-app",children:"Setup con Create React App"}),"\n",(0,a.jsxs)(n.p,{children:["Si eres nuevo en React, te recomendamos usar ",(0,a.jsx)(n.a,{href:"https://create-react-app.dev/",children:"Create React App"}),". Viene ya listo para usar e ",(0,a.jsx)(n.a,{href:"https://create-react-app.dev/docs/running-tests/#docsNav",children:"incluye Jest"}),"! Solo necesitar\xe1s a\xf1adir ",(0,a.jsx)(n.code,{children:"react-test-renderer"})," para renderizar instant\xe1neas."]}),"\n",(0,a.jsx)(n.p,{children:"Ejecutar"}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev react-test-renderer\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev react-test-renderer\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev react-test-renderer\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"setup-sin-create-react-app",children:"Setup sin Create React App"}),"\n",(0,a.jsxs)(n.p,{children:["Si tiene alguna aplicaci\xf3n existente, necesitar\xe1 instalar algunos paquetes para hacer que todo trabaje bien junto. Estamos usando el paquete ",(0,a.jsx)(n.code,{children:"babel-jest"})," y ",(0,a.jsx)(n.code,{children:"react"})," babel preset para transformar nuestro c\xf3digo dentro de el entorno de prueba. Recomendamos tambi\xe9n vea ",(0,a.jsx)(n.a,{href:"/es-ES/docs/next/getting-started#using-babel",children:"using babel"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Ejecutar"}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev jest babel-jest @babel/preset-env @babel/preset-react react-test-renderer\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Tu archivo ",(0,a.jsx)(n.code,{children:"package.json"})," se debe ver como algo como \xe9sto (donde ",(0,a.jsx)(n.code,{children:"<current-version>"})," es la ultima versi\xf3n del paquete). Por favor agregue los scripts y la configuraci\xf3n de jest:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "dependencies": {\n    "react": "<current-version>",\n    "react-dom": "<current-version>"\n  },\n  "devDependencies": {\n    "@babel/preset-env": "<current-version>",\n    "@babel/preset-react": "<current-version>",\n    "babel-jest": "<current-version>",\n    "jest": "<current-version>",\n    "react-test-renderer": "<current-version>"\n  },\n  "scripts": {\n    "test": "jest"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="babel.config.js"',children:"module.exports = {\n  presets: [\n    '@babel/preset-env',\n    ['@babel/preset-react', {runtime: 'automatic'}],\n  ],\n};\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Y as\xed, \xa1Est\xe1s listo para despegar!"})}),"\n",(0,a.jsx)(n.h3,{id:"test-con-instant\xe1nea",children:"Test con Instant\xe1nea"}),"\n",(0,a.jsxs)(n.p,{children:["Vamos a crear un ",(0,a.jsx)(n.a,{href:"/es-ES/docs/next/snapshot-testing",children:"snapshot test"})," para un componente Link que render\xe9 un hyperlink:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.js"',children:"import {useState} from 'react';\n\nconst STATUS = {\n  HOVERED: 'hovered',\n  NORMAL: 'normal',\n};\n\nexport default function Link({page, children}) {\n  const [status, setStatus] = useState(STATUS.NORMAL);\n\n  const onMouseEnter = () => {\n    setStatus(STATUS.HOVERED);\n  };\n\n  const onMouseLeave = () => {\n    setStatus(STATUS.NORMAL);\n  };\n\n  return (\n    <a\n      className={status}\n      href={page || '#'}\n      onMouseEnter={onMouseEnter}\n      onMouseLeave={onMouseLeave}\n    >\n      {children}\n    </a>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Examples are using Function components, but Class components can be tested in the same way. See ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/components-and-props.html#function-and-class-components",children:"React: Function and Class Components"}),". ",(0,a.jsx)(n.strong,{children:"Reminders"})," that with Class components, we expect Jest to be used to test props and not methods directly."]})}),"\n",(0,a.jsx)(n.p,{children:"Ahora vamos usar las caracter\xedsticas render y snapshot de React y Jest para interactuar con los componentes y capturar lo que renderea, creando un archivo snapshot:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="Link.test.js"',children:"import renderer from 'react-test-renderer';\nimport Link from '../Link';\n\nit('changes the class when hovered', () => {\n  const component = renderer.create(\n    <Link page=\"http://www.facebook.com\">Facebook</Link>,\n  );\n  let tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseEnter();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n\n  // manually trigger the callback\n  renderer.act(() => {\n    tree.props.onMouseLeave();\n  });\n  // re-rendering\n  tree = component.toJSON();\n  expect(tree).toMatchSnapshot();\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["When you run ",(0,a.jsx)(n.code,{children:"yarn test"})," or ",(0,a.jsx)(n.code,{children:"jest"}),", this will produce an output file like this:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/__snapshots__/Link.test.js.snap"',children:'exports[`changes the class when hovered 1`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 2`] = `\n<a\n  className="hovered"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n\nexports[`changes the class when hovered 3`] = `\n<a\n  className="normal"\n  href="http://www.facebook.com"\n  onMouseEnter={[Function]}\n  onMouseLeave={[Function]}\n>\n  Facebook\n</a>\n`;\n'})}),"\n",(0,a.jsxs)(n.p,{children:["La pr\xf3xima vez que ejecutes la prueba, lo que se renderee ser\xe1 comparado con el snapshot previamente creado. Se deber\xeda aplicar el snapshot junto con los cambios de c\xf3digo. Cuando una prueba con snapshot falla, necesitar\xe1 inspeccionar si se da por un cambio intencional o no intencional. Si el cambio es intencional, puede invocar Jest con ",(0,a.jsx)(n.code,{children:"jest -u"})," para sobre escribir en snapshot existente."]}),"\n",(0,a.jsxs)(n.p,{children:["The code for this example is available at ",(0,a.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/snapshot",children:"examples/snapshot"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"snapshot-testing-with-mocks-enzyme-and-react-16",children:"Snapshot Testing with Mocks, Enzyme and React 16+"}),"\n",(0,a.jsx)(n.p,{children:"Hay una advertencia en torno a las pruebas de snapshot cuando se usa Enzyme y React 16+. Si simulas un m\xf3dulo usando el estilo siguiente:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.mock('../SomeDirectory/SomeComponent', () => 'SomeComponent');\n"})}),"\n",(0,a.jsx)(n.p,{children:"Entonces podr\xe1 ver advertencias en la consola:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"Warning: <SomeComponent /> is using uppercase HTML. Always use lowercase HTML tags in React.\n\n# Or: Warning: The tag <SomeComponent> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.\n"})}),"\n",(0,a.jsx)(n.p,{children:"React 16 dispara estos avisos debido a c\xf3mo comprueba los tipos de elementos y el m\xf3dulo simulado falla esas comprobaciones. Tus opciones son:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Renderizar como texto. De esta manera no ver\xe1s los props enviados al componente simulado en el snapshot, pero es sencillo: js jest.mock('./SomeComponent', () => () => 'SomeComponent');","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.mock('./SomeComponent', () => () => 'SomeComponent');\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Render as a custom element. DOM \"custom elements\" aren't checked for anything and shouldn't fire warnings. They are lowercase and have a dash in the name.","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"tsx\n jest.mock('./Widget', () =&#062; () =&#062; <mock-widget />);\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["Use ",(0,a.jsx)(n.code,{children:"react-test-renderer"}),". The test renderer doesn't care about element types and will happily accept e.g. ",(0,a.jsx)(n.code,{children:"SomeComponent"}),". You could check snapshots using the test renderer, and check component behavior separately using Enzyme."]}),"\n",(0,a.jsxs)(n.li,{children:["Disable warnings all together (should be done in your jest setup file):","\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction'));\n"})}),"\n","Disable warnings all together (should be done in your jest setup file): js jest.mock('fbjs/lib/warning', () => require('fbjs/lib/emptyFunction')); This shouldn't normally be your option of choice as useful warnings could be lost. However, in some cases, for example when testing react-native's components we are rendering react-native tags into the DOM and many warnings are irrelevant. Another option is to swizzle the console.warn and suppress specific warnings."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"dom-testing",children:"DOM Testing"}),"\n",(0,a.jsxs)(n.p,{children:["If you'd like to assert, and manipulate your rendered components you can use ",(0,a.jsx)(n.a,{href:"https://github.com/testing-library/react-testing-library",children:"@testing-library/react"}),", ",(0,a.jsx)(n.a,{href:"https://enzymejs.github.io/enzyme/",children:"Enzyme"}),", or React's ",(0,a.jsx)(n.a,{href:"https://reactjs.org/docs/test-utils.html",children:"TestUtils"}),". The following example use ",(0,a.jsx)(n.code,{children:"@testing-library/react"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"testing-libraryreact",children:"@testing-library/react"}),"\n",(0,a.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(o.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save-dev @testing-library/react\n"})})}),(0,a.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add --dev @testing-library/react\n"})})}),(0,a.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add --save-dev @testing-library/react\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Let's implement a checkbox which swaps between two labels:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="CheckboxWithLabel.js"',children:"import {useState} from 'react';\n\nexport default function CheckboxWithLabel({labelOn, labelOff}) {\n  const [isChecked, setIsChecked] = useState(false);\n\n  const onChange = () => {\n    setIsChecked(!isChecked);\n  };\n\n  return (\n    <label>\n      <input type=\"checkbox\" checked={isChecked} onChange={onChange} />\n      {isChecked ? labelOn : labelOff}\n    </label>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",metastring:'title="__tests__/CheckboxWithLabel-test.js"',children:"import {cleanup, fireEvent, render} from '@testing-library/react';\nimport CheckboxWithLabel from '../CheckboxWithLabel';\n\n// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher\n// unmount and cleanup DOM after the test is finished.\nafterEach(cleanup);\n\nit('CheckboxWithLabel changes the text after click', () => {\n  const {queryByLabelText, getByLabelText} = render(\n    <CheckboxWithLabel labelOn=\"On\" labelOff=\"Off\" />,\n  );\n\n  expect(queryByLabelText(/off/i)).toBeTruthy();\n\n  fireEvent.click(getByLabelText(/off/i));\n\n  expect(queryByLabelText(/on/i)).toBeTruthy();\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The code for this example is available at ",(0,a.jsx)(n.a,{href:"https://github.com/jestjs/jest/tree/main/examples/react-testing-library",children:"examples/react-testing-library"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"transformers-personalizados",children:"Transformers personalizados"}),"\n",(0,a.jsxs)(n.p,{children:["If you need more advanced functionality, you can also build your own transformer. Instead of using ",(0,a.jsx)(n.code,{children:"babel-jest"}),", here is an example of using ",(0,a.jsx)(n.code,{children:"@babel/core"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="custom-transformer.js"',children:"'use strict';\n\nconst {transform} = require('@babel/core');\nconst jestPreset = require('babel-preset-jest');\n\nmodule.exports = {\n  process(src, filename) {\n    const result = transform(src, {\n      filename,\n      presets: [jestPreset],\n    });\n\n    return result || src;\n  },\n};\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Don't forget to install the ",(0,a.jsx)(n.code,{children:"@babel/core"})," and ",(0,a.jsx)(n.code,{children:"babel-preset-jest"})," packages for this example to work."]}),"\n",(0,a.jsxs)(n.p,{children:["Para que esto funcione con Jest necesita actualizar la configuraci\xf3n de Jest con \xe9sto: ",(0,a.jsx)(n.code,{children:'"transform": {"\\\\.js$": "path/to/custom-transformer.js"}'}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["If you'd like to build a transformer with babel support, you can also use ",(0,a.jsx)(n.code,{children:"babel-jest"})," to compose one and pass in your custom configuration options:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"const babelJest = require('babel-jest');\n\nmodule.exports = babelJest.createTransformer({\n  presets: ['my-custom-preset'],\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["See ",(0,a.jsx)(n.a,{href:"/es-ES/docs/next/code-transformation#writing-custom-transformers",children:"dedicated docs"})," for more details."]})]})}const h=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(p,e)})):p(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>c,ah:()=>r});var a=t(7378);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:r(e),a.createElement(s.Provider,{value:c},n)}}}]);
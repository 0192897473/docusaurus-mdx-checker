"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[8887],{4363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=n(4246),a=n(1670);const r={id:"timer-mocks",title:"Simulateurs de temporisation"},i=void 0,o={unversionedId:"timer-mocks",id:"version-29.4/timer-mocks",title:"Simulateurs de temporisation",description:"Les fonctions de temporisation natives (c'est-\xe0-dire setTimeout(), setInterval(), clearTimeout(), clearInterval()) sont moins adapt\xe9es \xe0 un environnement de test, car elles d\xe9pendent du temps r\xe9el pour s'\xe9couler. Jest peut remplacer les temporisateurs par des fonctions qui vous permettent de contr\xf4ler le temps qui passe. Great Scott\xa0!",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-29.4/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/fr/docs/29.4/timer-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.4",frontMatter:{id:"timer-mocks",title:"Simulateurs de temporisation"},sidebar:"docs",previous:{title:"Un exemple Async",permalink:"/fr/docs/29.4/tutorial-async"},next:{title:"Simulations manuelles",permalink:"/fr/docs/29.4/manual-mocks"}},l={},c=[{value:"Activer les faux temporisateurs",id:"activer-les-faux-temporisateurs",level:2},{value:"Ex\xe9cuter tous les temporisateurs",id:"ex\xe9cuter-tous-les-temporisateurs",level:2},{value:"Ex\xe9cuter les temporisateurs en attente",id:"ex\xe9cuter-les-temporisateurs-en-attente",level:2},{value:"Avancer les temporisateurs par une dur\xe9e",id:"avancer-les-temporisateurs-par-une-dur\xe9e",level:2},{value:"Simulation s\xe9lective",id:"simulation-s\xe9lective",level:2}];function u(e){const t=Object.assign({p:"p",code:"code",a:"a",admonition:"admonition",h2:"h2",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Les fonctions de temporisation natives (c'est-\xe0-dire ",(0,s.jsx)(t.code,{children:"setTimeout()"}),", ",(0,s.jsx)(t.code,{children:"setInterval()"}),", ",(0,s.jsx)(t.code,{children:"clearTimeout()"}),", ",(0,s.jsx)(t.code,{children:"clearInterval()"}),") sont moins adapt\xe9es \xe0 un environnement de test, car elles d\xe9pendent du temps r\xe9el pour s'\xe9couler. Jest peut remplacer les temporisateurs par des fonctions qui vous permettent de contr\xf4ler le temps qui passe. ",(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"Great Scott\xa0!"})]}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Consultez aussi la documentation de l'",(0,s.jsx)(t.a,{href:"/fr/docs/29.4/jest-object#fake-timers",children:"API des faux temporisateurs"}),"."]})}),"\n",(0,s.jsx)(t.h2,{id:"activer-les-faux-temporisateurs",children:"Activer les faux temporisateurs"}),"\n",(0,s.jsxs)(t.p,{children:["Dans l'exemple suivant, nous activons les faux temporisateurs en appelant ",(0,s.jsx)(t.code,{children:"jest.useFakeTimers()"}),". Ceci remplace l'impl\xe9mentation originale ",(0,s.jsx)(t.code,{children:"setTimeout()"})," et d'autres fonctions de temporisation. Les temporisateurs peuvent \xeatre restaur\xe9s \xe0 leur comportement normal avec ",(0,s.jsx)(t.code,{children:"jest.useRealTimers()"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Pr\xeat .... partez !');\n  setTimeout(() => {\n    console.log(\"Le temps est \xe9coul\xe9 -- arr\xeatez !\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest(''attend 1 seconde avant de mettre fin au jeu', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"ex\xe9cuter-tous-les-temporisateurs",children:"Ex\xe9cuter tous les temporisateurs"}),"\n",(0,s.jsx)(t.p,{children:"Un autre test que nous pourrions vouloir \xe9crire pour ce module est celui qui affirme que le callback est appel\xe9 apr\xe8s 1 seconde. Pour ce faire, nous allons utiliser les API de contr\xf4le des temporisateurs de Jest pour avancer rapidement dans le temps au beau milieu du test\xa0:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('appelle le callback apr\xe8s 1 seconde', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // \xc0 ce point dans le temps, le callback ne devrait pas encore avoir \xe9t\xe9 appel\xe9.\n  expect(callback).not.toBeCalled();\n\n  // Avance rapide jusqu'\xe0 ce que toutes les temporisateurs aient \xe9t\xe9 ex\xe9cut\xe9s.\n  jest.runAllTimers();\n\n  // Maintenant notre callback aurait d\xfb \xeatre appel\xe9 !\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"ex\xe9cuter-les-temporisateurs-en-attente",children:"Ex\xe9cuter les temporisateurs en attente"}),"\n",(0,s.jsx)(t.p,{children:"Il existe \xe9galement des sc\xe9narios dans lesquels vous pouvez avoir un temporisateur r\xe9cursif, c'est-\xe0-dire un temporisateur qui d\xe9finit un nouveau temporisateur dans son propre callback. Pour ces derniers, l'ex\xe9cution de tous les temporisateurs serait une boucle sans fin, ce qui entra\xeenerait l'erreur suivante\xa0: \xab Aborting after running 100000 timers, assuming an infinite loop!\xa0\xbb"}),"\n",(0,s.jsxs)(t.p,{children:["Si c'est votre cas, l'utilisation de ",(0,s.jsx)(t.code,{children:"jest.runOnlyPendingTimers()"})," r\xe9soudra le probl\xe8me\xa0:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Pr\xeat .... partez !');\n\n  setTimeout(() => {\n    console.log(\"Le temps est \xe9coul\xe9\xa0! 10 secondes avant le d\xe9but de la prochaine partie...\" );\n    callback && callback();\n\n    // Planifie la prochaine partie dans 10 secondes\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('planifie un minuteur de 10 secondes apr\xe8s 1 seconde', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // A ce stade, il devrait y avoir un seul appel \xe0\n    // setTimeout pour programmer la fin du jeu dans 1 seconde.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Avance rapide et ach\xe8vement des temporisateurs en cours\n    // (mais pas les nouveaux temporisateurs cr\xe9\xe9s au cours de ce processus).\n    jest.runOnlyPendingTimers();\n\n    // \xc0 ce stade, notre minuteur d'une seconde doit avoir d\xe9clench\xe9 son callback\n    expect(callback).toBeCalled();\n\n    // Et il devrait avoir cr\xe9\xe9 un nouveau temporisateur pour commencer le jeu dans\n    // 10 secondes\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,s.jsxs)(t.admonition,{title:"remarque",type:"note",children:[(0,s.jsx)(t.p,{children:"Pour le d\xe9bogage ou toute autre raison, vous pouvez modifier la limite des temporisateurs qui seront ex\xe9cut\xe9s avant de lever une erreur\xa0:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,s.jsx)(t.h2,{id:"avancer-les-temporisateurs-par-une-dur\xe9e",children:"Avancer les temporisateurs par une dur\xe9e"}),"\n",(0,s.jsxs)(t.p,{children:["Une autre possibilit\xe9 est d'utiliser ",(0,s.jsx)(t.code,{children:"jest.advanceTimersByTime(msToRun)"}),". Lorsque cette API est appel\xe9e, tous les temporisateurs sont avanc\xe9s de ",(0,s.jsx)(t.code,{children:"msToRun"})," millisecondes. Toutes les \xab\xa0macro-t\xe2ches\xa0\xbb en attente qui ont \xe9t\xe9 mises en file d'attente via setTimeout() ou setInterval(), et qui devraient \xeatre ex\xe9cut\xe9es pendant ce laps de temps, seront ex\xe9cut\xe9es. En plus, si ces macro-t\xe2ches planifient de nouvelles macro-t\xe2ches qui devraient \xeatre ex\xe9cut\xe9es dans le m\xeame laps de temps, celles-ci seront ex\xe9cut\xe9es jusqu'\xe0 ce qu'il ne reste plus de macro-t\xe2ches dans la file d'attente qui doivent \xeatre ex\xe9cut\xe9es dans les msToRun millisecondes."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Pr\xeat .... partez !');\n  setTimeout(() => {\n    console.log(\"Le temps est \xe9coul\xe9 -- arr\xeatez !\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('appelle le callback apr\xe8s 1 seconde via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // \xc0 ce stade, le callback ne doit pas encore \xeatre appel\xe9\n  expect(callback).not.toBeCalled();\n\n  // Avance rapide jusqu'\xe0 ce que toutes les temporisateurs aient \xe9t\xe9 ex\xe9cut\xe9s.\n  jest.advanceTimersByTime(1000);\n\n  // Maintenant notre callback devrait avoir \xe9t\xe9 appel\xe9 !\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Enfin, il peut parfois \xeatre utile dans certains tests de pouvoir effacer tous les temporisateurs en attente. Pour cela, nous avons ",(0,s.jsx)(t.code,{children:"jest.clearAllTimers()"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"simulation-s\xe9lective",children:"Simulation s\xe9lective"}),"\n",(0,s.jsxs)(t.p,{children:["Parfois, votre code peut n\xe9cessiter de ne pas \xe9craser l'impl\xe9mentation originale de l'une ou l'autre API. Si c'est le cas, vous pouvez utiliser l'option ",(0,s.jsx)(t.code,{children:"doNotFake"}),". Par exemple, voici comment vous pouvez fournir une fonction simul\xe9e personnalis\xe9e pour ",(0,s.jsx)(t.code,{children:"performance.mark()"})," dans l'environnement jsdom\xa0:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('permet la simulation de `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}const m=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,s.jsx)(t,Object.assign({},e,{children:(0,s.jsx)(u,e)})):u(e)}},1670:(e,t,n)=>{n.d(t,{Zo:()=>o,ah:()=>r});var s=n(7378);const a=s.createContext({});function r(e){const t=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const i={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||i:r(e),s.createElement(a.Provider,{value:o},t)}}}]);
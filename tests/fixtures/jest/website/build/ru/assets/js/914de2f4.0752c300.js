"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4961],{3366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=t(4246),s=t(1670);const a={id:"timer-mocks",title:"Timer Mocks"},o=void 0,r={unversionedId:"timer-mocks",id:"version-29.5/timer-mocks",title:"Timer Mocks",description:"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. Great Scott!",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-29.5/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/ru/docs/29.5/timer-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/ru",tags:[],version:"29.5",frontMatter:{id:"timer-mocks",title:"Timer Mocks"},sidebar:"docs",previous:{title:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0441\u0442\u044c\u044e",permalink:"/ru/docs/29.5/tutorial-async"},next:{title:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0438\u043c\u0438\u0442\u0430\u0446\u0438\u0438",permalink:"/ru/docs/29.5/manual-mocks"}},l={},c=[{value:"Enable Fake Timers",id:"enable-fake-timers",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0432\u0441\u0435\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0432\u0441\u0435\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432",level:2},{value:"Advance Timers by Time",id:"advance-timers-by-time",level:2},{value:"Selective Faking",id:"selective-faking",level:2}];function m(e){const n=Object.assign({p:"p",code:"code",a:"a",admonition:"admonition",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The native timer functions (i.e., ",(0,i.jsx)(n.code,{children:"setTimeout()"}),", ",(0,i.jsx)(n.code,{children:"setInterval()"}),", ",(0,i.jsx)(n.code,{children:"clearTimeout()"}),", ",(0,i.jsx)(n.code,{children:"clearInterval()"}),") are less than ideal for a testing environment since they depend on real time to elapse. Jest can swap out timers with functions that allow you to control the passage of time. ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"Great Scott!"})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["Also see ",(0,i.jsx)(n.a,{href:"/ru/docs/29.5/jest-object#fake-timers",children:"Fake Timers API"})," documentation."]})}),"\n",(0,i.jsx)(n.h2,{id:"enable-fake-timers",children:"Enable Fake Timers"}),"\n",(0,i.jsxs)(n.p,{children:["In the following example we enable fake timers by calling ",(0,i.jsx)(n.code,{children:"jest.useFakeTimers()"}),". This is replacing the original implementation of ",(0,i.jsx)(n.code,{children:"setTimeout()"})," and other timer functions. Timers can be restored to their normal behavior with ",(0,i.jsx)(n.code,{children:"jest.useRealTimers()"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0432\u0441\u0435\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0432\u0441\u0435\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432"}),"\n",(0,i.jsx)(n.p,{children:"Another test we might want to write for this module is one that asserts that the callback is called after 1 second. To do this, we're going to use Jest's timer control APIs to fast-forward time right in the middle of the test:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u043e\u0442\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u043e\u0432"}),"\n",(0,i.jsx)(n.p,{children:'There are also scenarios where you might have a recursive timer \u2013 that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error: "Aborting after running 100000 timers, assuming an infinite loop!"'}),"\n",(0,i.jsxs)(n.p,{children:["If that is your case, using ",(0,i.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," will solve the problem:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // Schedule the next game in 10 seconds\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toBeCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"For debugging or any other reason you can change the limit of timers that will be run before throwing an error:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,i.jsx)(n.h2,{id:"advance-timers-by-time",children:"Advance Timers by Time"}),"\n",(0,i.jsxs)(n.p,{children:["Another possibility is use ",(0,i.jsx)(n.code,{children:"jest.advanceTimersByTime(msToRun)"}),". When this API is called, all timers are advanced by ",(0,i.jsx)(n.code,{children:"msToRun"})," milliseconds. When this API is called, all timers are advanced by ",(0,i.jsx)(n.code,{children:"msToRun"}),' milliseconds. All pending "macro-tasks" that have been queued via setTimeout() or setInterval(), and would be executed during this time frame, will be executed.']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Lastly, it may occasionally be useful in some tests to be able to clear all of the pending timers. For this, we have ",(0,i.jsx)(n.code,{children:"jest.clearAllTimers()"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"selective-faking",children:"Selective Faking"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes your code may require to avoid overwriting the original implementation of one or another API. If that is the case, you can use ",(0,i.jsx)(n.code,{children:"doNotFake"})," option. For example, here is how you could provide a custom mock function for ",(0,i.jsx)(n.code,{children:"performance.mark()"})," in jsdom environment:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(m,e)})):m(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>a});var i=t(7378);const s=i.createContext({});function a(e){const n=i.useContext(s);return i.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||o:a(e),i.createElement(s.Provider,{value:r},n)}}}]);
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4920],{2417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var a=t(4246),s=t(1670);const i={id:"timer-mocks",title:"\u8ba1\u65f6\u5668\u6a21\u62df"},l=void 0,r={unversionedId:"timer-mocks",id:"version-29.6/timer-mocks",title:"\u8ba1\u65f6\u5668\u6a21\u62df",description:"The native timer functions (i.e., setTimeout(), setInterval(), clearTimeout(), clearInterval()) are less than ideal for a testing environment since they depend on real time to elapse. Jest\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u8f6c\u6362\u8ba1\u65f6\u5668\u4ee5\u4fbf\u5141\u8bb8\u4f60\u63a7\u5236\u65f6\u95f4\u6d41\u91cf\u3002 Great Scott!",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-29.6/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/zh-Hans/docs/timer-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/zh-CN",tags:[],version:"29.6",frontMatter:{id:"timer-mocks",title:"\u8ba1\u65f6\u5668\u6a21\u62df"},sidebar:"docs",previous:{title:"\u5f02\u6b65\u793a\u4f8b",permalink:"/zh-Hans/docs/tutorial-async"},next:{title:"\u624b\u52a8\u6a21\u62df",permalink:"/zh-Hans/docs/manual-mocks"}},o={},c=[{value:"Enable Fake Timers",id:"enable-fake-timers",level:2},{value:"\u8fd0\u884c\u6240\u6709\u8ba1\u65f6\u5668",id:"\u8fd0\u884c\u6240\u6709\u8ba1\u65f6\u5668",level:2},{value:"\u8fd0\u884c\u7b49\u5f85\u8ba1\u65f6\u5668",id:"\u8fd0\u884c\u7b49\u5f85\u8ba1\u65f6\u5668",level:2},{value:"\u4f7f\u7528\u65f6\u95f4\u7684\u9ad8\u7ea7\u8ba1\u65f6\u5668",id:"\u4f7f\u7528\u65f6\u95f4\u7684\u9ad8\u7ea7\u8ba1\u65f6\u5668",level:2},{value:"Selective Faking",id:"selective-faking",level:2}];function m(e){const n=Object.assign({p:"p",code:"code",a:"a",admonition:"admonition",h2:"h2",pre:"pre"},(0,s.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The native timer functions (i.e., ",(0,a.jsx)(n.code,{children:"setTimeout()"}),", ",(0,a.jsx)(n.code,{children:"setInterval()"}),", ",(0,a.jsx)(n.code,{children:"clearTimeout()"}),", ",(0,a.jsx)(n.code,{children:"clearInterval()"}),") are less than ideal for a testing environment since they depend on real time to elapse. Jest\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u8f6c\u6362\u8ba1\u65f6\u5668\u4ee5\u4fbf\u5141\u8bb8\u4f60\u63a7\u5236\u65f6\u95f4\u6d41\u91cf\u3002 ",(0,a.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"Great Scott!"})]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Also see ",(0,a.jsx)(n.a,{href:"/zh-Hans/docs/jest-object#fake-timers",children:"Fake Timers API"})," documentation."]})}),"\n",(0,a.jsx)(n.h2,{id:"enable-fake-timers",children:"Enable Fake Timers"}),"\n",(0,a.jsxs)(n.p,{children:["In the following example we enable fake timers by calling ",(0,a.jsx)(n.code,{children:"jest.useFakeTimers()"}),". This is replacing the original implementation of ",(0,a.jsx)(n.code,{children:"setTimeout()"})," and other timer functions. \u8ba1\u65f6\u5668\u53ef\u4ee5\u6062\u590d\u4ed6\u4eec\u9ed8\u8ba4\u7684\u884c\u4e3a\u901a\u8fc7",(0,a.jsx)(n.code,{children:"jest.useRealTimers()"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd0\u884c\u6240\u6709\u8ba1\u65f6\u5668",children:"\u8fd0\u884c\u6240\u6709\u8ba1\u65f6\u5668"}),"\n",(0,a.jsx)(n.p,{children:"\u5bf9\u4e8e\u8fd9\u4e2a\u6a21\u5757\u6211\u4eec\u8fd8\u9700\u8981\u5199\u4e00\u4e2a\u6d4b\u8bd5\uff0c\u7528\u4e8e\u5224\u65ad\u56de\u8c03\u51fd\u6570\u662f\u5426\u57281\u79d2\u540e\u88ab\u8c03\u7528\u7684\u3002 \u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u4f7f\u7528Jest\u7684\u5b9a\u65f6\u5668\u63a7\u5236API\uff0c\u7528\u4e8e\u5728\u6d4b\u8bd5\u4e2d\u5c06\u65f6\u95f4\u201c\u5feb\u8fdb\u201d\u5230\u6b63\u786e\u7684\u65f6\u95f4\u70b9\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u8fd0\u884c\u7b49\u5f85\u8ba1\u65f6\u5668",children:"\u8fd0\u884c\u7b49\u5f85\u8ba1\u65f6\u5668"}),"\n",(0,a.jsx)(n.p,{children:'There are also scenarios where you might have a recursive timer \u2013 that is a timer that sets a new timer in its own callback. For these, running all the timers would be an endless loop, throwing the following error: "Aborting after running 100000 timers, assuming an infinite loop!"'}),"\n",(0,a.jsxs)(n.p,{children:["If that is your case, using ",(0,a.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," will solve the problem:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // At this point in time, there should have been a single call to\n    // setTimeout to schedule the end of the game in 1 second.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // Fast forward and exhaust only currently pending timers\n    // (but not any new timers that get created during that process)\n    jest.runOnlyPendingTimers();\n\n    // At this point, our 1-second timer should have fired its callback\n    expect(callback).toBeCalled();\n\n    // And it should have created a new timer to start the game over in\n    // 10 seconds\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"For debugging or any other reason you can change the limit of timers that will be run before throwing an error:"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"\u4f7f\u7528\u65f6\u95f4\u7684\u9ad8\u7ea7\u8ba1\u65f6\u5668",children:"\u4f7f\u7528\u65f6\u95f4\u7684\u9ad8\u7ea7\u8ba1\u65f6\u5668"}),"\n",(0,a.jsxs)(n.p,{children:["\u53e6\u4e00\u79cd\u53ef\u9009\u65b9\u5f0f\u662f\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"jeste. advancertimersbytime (msToRun)"}),"\u3002 \u901a\u8fc7\u8c03\u7528",(0,a.jsx)(n.code,{children:"msToRun"}),"\u8fd9\u4e2a API\u65f6\uff0c \u6240\u6709\u8ba1\u65f6\u5668\u90fd\u5c06\u4ee5\u6beb\u79d2\u589e\u957f\u3002 When this API is called, all timers are advanced by ",(0,a.jsx)(n.code,{children:"msToRun"})," milliseconds. \u6240\u6709\u901a\u8fc7setTimeout() \u6216setInterval() \u800c\u5904\u4e8e\u4efb\u52a1\u961f\u5217\u4e2d\u7b49\u5f85\u4e2d\u7684\u201c\u5b8f\u4efb\u52a1\u201d\u548c\u4e00\u5207\u5176\u4ed6\u5e94\u8be5\u5728\u672c\u65f6\u95f4\u7247\u4e2d\u88ab\u6267\u884c\u7684\u4e1c\u897f\u90fd\u5e94\u8be5\u88ab\u6267\u884c\u3002 Additionally, if those macro-tasks schedule new macro-tasks that would be executed within the same time frame, those will be executed until there are no more macro-tasks remaining in the queue that should be run within msToRun milliseconds."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\u6700\u540e\uff0c\u5728\u67d0\u4e9b\u6d4b\u8bd5\u4e2d\u4f60\u53ef\u80fd\u9700\u8981\u6e05\u9664\u6240\u6709\u7b49\u5f85\u72b6\u6001\u4e0b\u7684\u5b9a\u65f6\u5668\uff0c\u4e3a\u6b64\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.jsx)(n.code,{children:"jest.clearAllTimers()"}),"\u3002 For this, we have ",(0,a.jsx)(n.code,{children:"jest.clearAllTimers()"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"selective-faking",children:"Selective Faking"}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes your code may require to avoid overwriting the original implementation of one or another API. If that is the case, you can use ",(0,a.jsx)(n.code,{children:"doNotFake"})," option. For example, here is how you could provide a custom mock function for ",(0,a.jsx)(n.code,{children:"performance.mark()"})," in jsdom environment:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,s.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(m,e)})):m(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>r,ah:()=>i});var a=t(7378);const s=a.createContext({});function i(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||l:i(e),a.createElement(s.Provider,{value:r},n)}}}]);
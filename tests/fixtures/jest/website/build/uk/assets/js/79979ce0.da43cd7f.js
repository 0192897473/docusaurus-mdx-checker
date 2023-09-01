"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[7315],{1e3:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=t(4246),a=t(1670);const c={id:"timer-mocks",title:"\u0406\u043c\u0456\u0442\u0430\u0446\u0456\u0457 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432"},i=void 0,l={unversionedId:"timer-mocks",id:"version-29.4/timer-mocks",title:"\u0406\u043c\u0456\u0442\u0430\u0446\u0456\u0457 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",description:"\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457-\u0442\u0430\u0439\u043c\u0435\u0440\u0438 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, setTimeout(), setInterval(), clearTimeout(), clearInterval()) \u0454 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u0438\u043c\u0438 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u043e\u043d\u0438 \u0441\u043f\u0438\u0440\u0430\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u0438\u0439 \u0447\u0430\u0441. Jest \u0432\u043c\u0456\u0454 \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0442\u0438 \u0457\u0445, \u0449\u043e\u0431 \u0432\u0438 \u043c\u043e\u0433\u043b\u0438 \u043a\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0447\u0430\u0441\u043e\u043c. Great Scott!",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-29.4/TimerMocks.md",sourceDirName:".",slug:"/timer-mocks",permalink:"/uk/docs/29.4/timer-mocks",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/uk",tags:[],version:"29.4",frontMatter:{id:"timer-mocks",title:"\u0406\u043c\u0456\u0442\u0430\u0446\u0456\u0457 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432"},sidebar:"docs",previous:{title:"\u0410\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u0438\u0439 \u043f\u0440\u0438\u043a\u043b\u0430\u0434",permalink:"/uk/docs/29.4/tutorial-async"},next:{title:"\u0420\u0443\u0447\u043d\u0456 \u0456\u043c\u0456\u0442\u0430\u0446\u0456\u0457",permalink:"/uk/docs/29.4/manual-mocks"}},r={},o=[{value:"\u0412\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043d\u044f \u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0438\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",id:"\u0432\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043d\u044f-\u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0438\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0443\u0441\u0456\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0443\u0441\u0456\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",level:2},{value:"\u0417\u0430\u043f\u0443\u0441\u043a \u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",level:2},{value:"\u041d\u0430\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432 \u0443 \u0447\u0430\u0441\u0456",id:"\u043d\u0430\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u044f-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432-\u0443-\u0447\u0430\u0441\u0456",level:2},{value:"\u0412\u0438\u0431\u0456\u0440\u043a\u043e\u0432\u0430 \u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c",id:"\u0432\u0438\u0431\u0456\u0440\u043a\u043e\u0432\u0430-\u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c",level:2}];function m(e){const n=Object.assign({p:"p",code:"code",a:"a",admonition:"admonition",h2:"h2",pre:"pre"},(0,a.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u0413\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457-\u0442\u0430\u0439\u043c\u0435\u0440\u0438 (\u043d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, ",(0,s.jsx)(n.code,{children:"setTimeout()"}),", ",(0,s.jsx)(n.code,{children:"setInterval()"}),", ",(0,s.jsx)(n.code,{children:"clearTimeout()"}),", ",(0,s.jsx)(n.code,{children:"clearInterval()"}),") \u0454 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u0438\u043c\u0438 \u0434\u043b\u044f \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0430, \u043e\u0441\u043a\u0456\u043b\u044c\u043a\u0438 \u0432\u043e\u043d\u0438 \u0441\u043f\u0438\u0440\u0430\u044e\u0442\u044c\u0441\u044f \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u0438\u0439 \u0447\u0430\u0441. Jest \u0432\u043c\u0456\u0454 \u043f\u0456\u0434\u043c\u0456\u043d\u044f\u0442\u0438 \u0457\u0445, \u0449\u043e\u0431 \u0432\u0438 \u043c\u043e\u0433\u043b\u0438 \u043a\u0435\u0440\u0443\u0432\u0430\u0442\u0438 \u0447\u0430\u0441\u043e\u043c. ",(0,s.jsx)(n.a,{href:"https://www.youtube.com/watch?v=QZoJ2Pt27BY",children:"Great Scott!"})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["\u0422\u0430\u043a\u043e\u0436 \u0434\u0438\u0432. \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0456\u044e ",(0,s.jsx)(n.a,{href:"/uk/docs/29.4/jest-object#fake-timers",children:"API \u0456\u043c\u0456\u0442\u0430\u0446\u0456\u0439 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043d\u044f-\u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0438\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",children:"\u0412\u0432\u0456\u043c\u043a\u043d\u0435\u043d\u043d\u044f \u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0438\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0456 \u043d\u0438\u0436\u0447\u0435, \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u044e\u0447\u0438 ",(0,s.jsx)(n.code,{children:"jest.useFakeTimers()"}),", \u043c\u0438 \u0432\u043c\u0438\u043a\u0430\u0454\u043c\u043e \u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438. \u0426\u0435 \u0437\u0430\u043c\u0456\u043d\u044e\u0454 \u043e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u0443 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u044e ",(0,s.jsx)(n.code,{children:"setTimeout()"})," \u0442\u0430 \u0456\u043d\u0448\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457-\u0442\u0430\u0439\u043c\u0435\u0440\u0438. \u0424\u0443\u043d\u043a\u0446\u0456\u0457-\u0442\u0430\u0439\u043c\u0435\u0440\u0438 \u043c\u043e\u0436\u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u043d\u0443\u0442\u0438 \u0434\u043e \u0441\u0432\u043e\u0454\u0457 \u043e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u043e\u0457 \u043f\u043e\u0432\u0435\u0434\u0456\u043d\u043a\u0438 \u0432\u0438\u043a\u043b\u0438\u043a\u043e\u043c ",(0,s.jsx)(n.code,{children:"jest.useRealTimers()"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ntest('waits 1 second before ending the game', () => {\n  const timerGame = require('../timerGame');\n  timerGame();\n\n  expect(setTimeout).toHaveBeenCalledTimes(1);\n  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0443\u0441\u0456\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0443\u0441\u0456\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432"}),"\n",(0,s.jsxs)(n.p,{children:["\u0406\u043d\u0448\u0438\u0439 \u0442\u0435\u0441\u0442, \u044f\u043a\u0438\u0439 \u043c\u0438 \u043c\u043e\u0436\u0435\u043c\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u0438 \u0434\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u043c\u043e\u0434\u0443\u043b\u044f, \u0446\u0435 \u0442\u043e\u0439, \u0449\u043e \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u044f\u0454, \u0449\u043e ",(0,s.jsx)(n.code,{children:"callback"})," \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443. \u0429\u043e\u0431 \u0448\u0432\u0438\u0434\u043a\u043e \u043f\u0440\u043e\u043c\u043e\u0442\u0430\u0442\u0438 \u0447\u0430\u0441 \u043f\u0440\u044f\u043c\u043e \u0432 \u0441\u0435\u0440\u0435\u0434\u0438\u043d\u0456 \u0442\u0435\u0441\u0442\u0443, \u043c\u0438 \u0431\u0443\u0434\u0435\u043c\u043e \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 API Jest \u0434\u043b\u044f \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044e \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"jest.useFakeTimers();\ntest('calls the callback after 1 second', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.runAllTimers();\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u0437\u0430\u043f\u0443\u0441\u043a-\u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0445-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432",children:"\u0417\u0430\u043f\u0443\u0441\u043a \u0430\u043a\u0442\u0438\u0432\u043d\u0438\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432"}),"\n",(0,s.jsx)(n.p,{children:'\u0404 \u0442\u0430\u043a\u043e\u0436 \u0441\u0446\u0435\u043d\u0430\u0440\u0456\u0457, \u043a\u043e\u043b\u0438 \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043c\u0430\u0442\u0438 \u0440\u0435\u043a\u0443\u0440\u0441\u0438\u0432\u043d\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440 \u2013 \u0446\u0435 \u0442\u0430\u0439\u043c\u0435\u0440, \u044f\u043a\u0438\u0439 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0454 \u043d\u043e\u0432\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440 \u0443 \u0432\u043b\u0430\u0441\u043d\u043e\u043c\u0443 \u0437\u0432\u043e\u0440\u043e\u0442\u043d\u043e\u043c\u0443 \u0432\u0438\u043a\u043b\u0438\u043a\u0443. \u0427\u0435\u0440\u0435\u0437 \u0446\u0435, \u0437\u0430\u043f\u0443\u0441\u043a \u0432\u0441\u0456\u0445 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432 \u0431\u0443\u0432 \u0431\u0438 \u043d\u0435\u0441\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u0438\u043c \u0446\u0438\u043a\u043b\u043e\u043c, \u0449\u043e \u043a\u0438\u0434\u0430\u0432 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443 \u043f\u043e\u043c\u0438\u043b\u043a\u0443: "\u0410\u0431\u043e\u0440\u0442 \u043f\u0456\u0441\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f 100 000 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432 \u0447\u0435\u0440\u0435\u0437 \u043f\u0440\u0438\u043f\u0443\u0449\u0435\u043d\u043d\u044f, \u0449\u043e \u0446\u0435 \u043d\u0435\u0441\u043a\u0456\u043d\u0447\u0435\u043d\u043d\u0438\u0439 \u0446\u0438\u043a\u043b!"'}),"\n",(0,s.jsxs)(n.p,{children:["\u042f\u043a\u0449\u043e \u0446\u0435 \u0432\u0430\u0448 \u0432\u0438\u043f\u0430\u0434\u043e\u043a, \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f ",(0,s.jsx)(n.code,{children:"jest.runOnlyPendingTimers()"})," \u0440\u043e\u0437\u0432'\u044f\u0436\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0443:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="infiniteTimerGame.js"',children:"function infiniteTimerGame(callback) {\n  console.log('Ready....go!');\n\n  setTimeout(() => {\n    console.log(\"Time's up! 10 seconds before the next game starts...\");\n    callback && callback();\n\n    // \u0417\u0430\u043f\u043b\u0430\u043d\u0443\u0432\u0430\u0442\u0438 \u043d\u0430\u0441\u0442\u0443\u043f\u043d\u0443 \u0433\u0440\u0443 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434\n    setTimeout(() => {\n      infiniteTimerGame(callback);\n    }, 10000);\n  }, 1000);\n}\n\nmodule.exports = infiniteTimerGame;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/infiniteTimerGame-test.js"',children:"jest.useFakeTimers();\njest.spyOn(global, 'setTimeout');\n\ndescribe('infiniteTimerGame', () => {\n  test('schedules a 10-second timer after 1 second', () => {\n    const infiniteTimerGame = require('../infiniteTimerGame');\n    const callback = jest.fn();\n\n    infiniteTimerGame(callback);\n\n    // \u041d\u0430 \u0446\u0435\u0439 \u043c\u043e\u043c\u0435\u043d\u0442, \u043c\u0430\u0432 \u0441\u0442\u0430\u0442\u0438\u0441\u044c \u043e\u0434\u0438\u043d \u0432\u0438\u043a\u043b\u0438\u043a\n    // setTimeout, \u0430\u0431\u0438 \u0437\u0430\u043f\u043b\u0430\u043d\u0443\u0432\u0430\u0442\u0438 \u043a\u0456\u043d\u0435\u0446\u044c \u0433\u0440\u0438 \u0447\u0435\u0440\u0435\u0437 1 \u0441\u0435\u043a\u0443\u043d\u0434\u0443.\n    expect(setTimeout).toHaveBeenCalledTimes(1);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);\n\n    // \u041f\u0440\u043e\u043c\u043e\u0442\u0430\u0442\u0438 \u0456 \u0432\u0456\u0434\u043f\u0440\u0430\u0446\u044e\u0432\u0430\u0442\u0438 \u0442\u0456\u043b\u044c\u043a\u0438 \u0430\u043a\u0442\u0438\u0432\u043d\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438\n    // (\u0430\u043b\u0435 \u043d\u0435 \u0431\u0443\u0434\u044c-\u044f\u043a\u0456 \u043d\u043e\u0432\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438, \u044f\u043a\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0456 \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c \u0446\u0456\u0454\u0457 \u043e\u043f\u0435\u0440\u0430\u0446\u0456\u0457)\n    jest.runOnlyPendingTimers();\n\n    // \u041d\u0430 \u0446\u0435\u0439 \u043c\u043e\u043c\u0435\u043d\u0442, \u043d\u0430\u0448 \u0441\u0435\u043a\u0443\u043d\u0434\u043d\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440 \u043c\u0430\u0454 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0442\u0438 \u0441\u0432\u0456\u0439 callback\n    expect(callback).toBeCalled();\n\n    // \u0406 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u043d\u043e\u0432\u0438\u0439 \u0442\u0430\u0439\u043c\u0435\u0440, \u0449\u043e\u0431 \u043f\u043e\u0447\u0430\u0442\u0438 \u0433\u0440\u0443 \u0437\u043d\u043e\u0432\u0443 \u0447\u0435\u0440\u0435\u0437 10 \u0441\u0435\u043a\u0443\u043d\u0434\n    expect(setTimeout).toHaveBeenCalledTimes(2);\n    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);\n  });\n});\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"\u0414\u043b\u044f \u0432\u0456\u0434\u043b\u0430\u0433\u043e\u0434\u0436\u0435\u043d\u043d\u044f \u0447\u0438 \u0437 \u0431\u0443\u0434\u044c-\u044f\u043a\u043e\u0457 \u0456\u043d\u0448\u043e\u0457 \u043f\u0440\u0438\u0447\u0438\u043d\u0438, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u043c\u0456\u043d\u0438\u0442\u0438 \u043b\u0456\u043c\u0456\u0442 \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432, \u0449\u043e \u0431\u0443\u0434\u0443\u0442\u044c \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u043f\u0435\u0440\u0435\u0434 \u0432\u0438\u043a\u0438\u0434\u043e\u043c \u043f\u043e\u043c\u0438\u043b\u043a\u0438:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"jest.useFakeTimers({timerLimit: 100});\n"})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u043d\u0430\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u044f-\u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432-\u0443-\u0447\u0430\u0441\u0456",children:"\u041d\u0430\u0431\u043b\u0438\u0436\u0435\u043d\u043d\u044f \u0442\u0430\u0439\u043c\u0435\u0440\u0456\u0432 \u0443 \u0447\u0430\u0441\u0456"}),"\n",(0,s.jsxs)(n.p,{children:["\u0406\u043d\u0448\u0430 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c - \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438 ",(0,s.jsx)(n.code,{children:"jest.advanceTimersByTime(msToRun)"}),". \u041a\u043e\u043b\u0438 \u0432\u0438\u043a\u043b\u0438\u043a\u0430\u0454\u0442\u044c\u0441\u044f \u0446\u0435\u0439 \u043c\u0435\u0442\u043e\u0434, \u0432\u0441\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438 \u043d\u0430\u0431\u043b\u0438\u0436\u0430\u044e\u0442\u044c\u0441\u044f \u043d\u0430 ",(0,s.jsx)(n.code,{children:"msToRun"})," \u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434. \u0412\u0441\u0456 \u043c\u0430\u043a\u0440\u043e\u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u0437\u0430\u043f\u043b\u0430\u043d\u043e\u0432\u0430\u043d\u0456 \u0447\u0435\u0440\u0435\u0437 ",(0,s.jsx)(n.code,{children:"setTimeout()"})," \u0430\u0431\u043e ",(0,s.jsx)(n.code,{children:"setInterval()"})," \u0434\u043e \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f \u043f\u0440\u043e\u0442\u044f\u0433\u043e\u043c \u0446\u044c\u043e\u0433\u043e \u043f\u0435\u0440\u0456\u043e\u0434\u0443 \u0447\u0430\u0441\u0443, \u0431\u0443\u0434\u0443\u0442\u044c \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0456. \u041a\u0440\u0456\u043c \u0442\u043e\u0433\u043e \u044f\u043a\u0449\u043e \u0446\u0456 \u043c\u0430\u043a\u0440\u043e\u0437\u0430\u0432\u0434\u0430\u043d\u043d\u044f \u0437\u0430\u043f\u043b\u0430\u043d\u0443\u044e\u0442\u044c \u043d\u043e\u0432\u0456, \u044f\u043a\u0456 \u043c\u0430\u044e\u0442\u044c \u0432\u0438\u043a\u043e\u043d\u0430\u0442\u0438\u0441\u044f \u0432 \u043c\u0435\u0436\u0430\u0445 \u0442\u043e\u0433\u043e \u0436 \u0447\u0430\u0441\u043e\u0432\u043e\u0433\u043e \u043f\u0440\u043e\u043c\u0456\u0436\u043a\u0443, \u0432\u043e\u043d\u0438 \u0442\u0435\u0436 \u0431\u0443\u0434\u0443\u0442\u044c \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u0434\u043e\u043f\u043e\u043a\u0438 \u0432 \u0447\u0435\u0440\u0437\u0456 \u043d\u0435 \u0437\u0430\u043b\u0438\u0448\u0438\u0442\u044c\u0441\u044f \u0437\u0430\u0432\u0434\u0430\u043d\u044c, \u0449\u043e \u043c\u0430\u044e\u0442\u044c \u0431\u0443\u0442\u0438 \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u0456 \u0432\u043f\u0440\u043e\u0434\u043e\u0432\u0436 ",(0,s.jsx)(n.code,{children:"msToRun"})," \u043c\u0456\u043b\u0456\u0441\u0435\u043a\u0443\u043d\u0434."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="timerGame.js"',children:"function timerGame(callback) {\n  console.log('Ready....go!');\n  setTimeout(() => {\n    console.log(\"Time's up -- stop!\");\n    callback && callback();\n  }, 1000);\n}\n\nmodule.exports = timerGame;\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",metastring:'title="__tests__/timerGame-test.js"',children:"jest.useFakeTimers();\nit('calls the callback after 1 second via advanceTimersByTime', () => {\n  const timerGame = require('../timerGame');\n  const callback = jest.fn();\n\n  timerGame(callback);\n\n  // At this point in time, the callback should not have been called yet\n  expect(callback).not.toBeCalled();\n\n  // Fast-forward until all timers have been executed\n  jest.advanceTimersByTime(1000);\n\n  // Now our callback should have been called!\n  expect(callback).toBeCalled();\n  expect(callback).toHaveBeenCalledTimes(1);\n});\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0417\u0440\u0435\u0448\u0442\u043e\u044e, \u0446\u0435 \u043c\u043e\u0436\u0435 \u0456\u043d\u043e\u0434\u0456 \u0431\u0443\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u043d\u0438\u043c \u0432 \u0434\u0435\u044f\u043a\u0438\u0445 \u0442\u0435\u0441\u0442\u0430\u0445, \u0449\u043e\u0431 \u043c\u0430\u0442\u0438 \u043c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u0430\u043a\u0442\u0438\u0432\u043d\u0456 \u0442\u0430\u0439\u043c\u0435\u0440\u0438. \u0414\u043b\u044f \u0446\u044c\u043e\u0433\u043e \u0443 \u043d\u0430\u0441 \u0454 ",(0,s.jsx)(n.code,{children:"jest.clearAllTimers()"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0438\u0431\u0456\u0440\u043a\u043e\u0432\u0430-\u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c",children:"\u0412\u0438\u0431\u0456\u0440\u043a\u043e\u0432\u0430 \u0444\u0456\u043a\u0442\u0438\u0432\u043d\u0456\u0441\u0442\u044c"}),"\n",(0,s.jsxs)(n.p,{children:["\u0406\u043d\u043a\u043e\u043b\u0438 \u0432\u0430\u0448 \u043a\u043e\u0434 \u0432\u0438\u043c\u0430\u0433\u0430\u0442\u0438\u043c\u0435 \u0443\u043d\u0438\u043a\u043d\u0435\u043d\u043d\u044f \u043f\u0435\u0440\u0435\u0437\u0430\u043f\u0438\u0441\u0443 \u043e\u0440\u0438\u0433\u0456\u043d\u0430\u043b\u044c\u043d\u043e\u0457 \u0440\u0435\u0430\u043b\u0456\u0437\u0430\u0446\u0456\u0457 \u0442\u043e\u0433\u043e \u0447\u0438 \u0456\u043d\u0448\u043e\u0433\u043e API. \u0423 \u0442\u0430\u043a\u043e\u043c\u0443 \u0432\u0438\u043f\u0430\u0434\u043a\u0443, \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u0442\u0438\u0441\u044f \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u043c ",(0,s.jsx)(n.code,{children:"doNotFake"}),". \u041d\u0430\u043f\u0440\u0438\u043a\u043b\u0430\u0434, \u043e\u0441\u044c \u0442\u0430\u043a \u0432\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0434\u0430\u0442\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0446\u044c\u043a\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u044e-\u0456\u043c\u0456\u0442\u0430\u0446\u0456\u044e \u0434\u043b\u044f ",(0,s.jsx)(n.code,{children:"performance.mark()"})," \u0443 \u0441\u0435\u0440\u0435\u0434\u043e\u0432\u0438\u0449\u0456 jsdom:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n */\n\nconst mockPerformanceMark = jest.fn();\nwindow.performance.mark = mockPerformanceMark;\n\ntest('allows mocking `performance.mark()`', () => {\n  jest.useFakeTimers({doNotFake: ['performance']});\n\n  expect(window.performance.mark).toBe(mockPerformanceMark);\n});\n"})})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(m,e)})):m(e)}},1670:(e,n,t)=>{t.d(n,{Zo:()=>l,ah:()=>c});var s=t(7378);const a=s.createContext({});function c(e){const n=s.useContext(a);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function l({components:e,children:n,disableParentContext:t}){let l;return l=t?"function"==typeof e?e({}):e||i:c(e),s.createElement(a.Provider,{value:l},n)}}}]);
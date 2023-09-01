"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[2740],{7806:(e,t,n)=>{n.d(t,{Z:()=>s});n(7378);var i=n(624),o=n(4246);function s(e){const t=(0,i.Z)("containerV1",e.className,{darkBackground:"dark"===e.background,highlightBackground:"highlight"===e.background,lightBackground:"light"===e.background,paddingAll:e.padding.indexOf("all")>=0,paddingBottom:e.padding.indexOf("bottom")>=0,paddingLeft:e.padding.indexOf("left")>=0,paddingRight:e.padding.indexOf("right")>=0,paddingTop:e.padding.indexOf("top")>=0});let n;return n=e.wrapper?(0,o.jsx)("div",{className:"wrapperV1",children:e.children}):e.children,(0,o.jsx)("div",{className:t,id:e.id,children:n})}s.defaultProps={background:null,padding:[],wrapper:!0}},3451:(e,t,n)=>{n.d(t,{Z:()=>a});n(7378);var i=n(624),o=n(5203),s=n(4246);function a(e){function t(e,t,n){return e?(0,s.jsx)("div",{className:"blockImage",children:t?(0,s.jsx)("a",{href:t,children:(0,s.jsx)("img",{src:e,alt:n})}):(0,s.jsx)("img",{src:e,alt:n})}):null}function n(e){return e?(0,s.jsx)("h2",{children:(0,s.jsx)(o.Z,{children:e})}):null}return(0,s.jsx)("div",{className:"gridBlockV1",children:e.contents.map((function(a,l){const r={imageAlign:"left",...a},d=(0,i.Z)("blockElement",e.className,{alignCenter:"center"===e.align,alignRight:"right"===e.align,fourByGridBlock:"fourColumn"===e.layout,imageAlignSide:r.image&&("left"===r.imageAlign||"right"===r.imageAlign),imageAlignTop:r.image&&"top"===r.imageAlign,imageAlignRight:r.image&&"right"===r.imageAlign,imageAlignBottom:r.image&&"bottom"===r.imageAlign,imageAlignLeft:r.image&&"left"===r.imageAlign,threeByGridBlock:"threeColumn"===e.layout,twoByGridBlock:"twoColumn"===e.layout}),c=("top"===r.imageAlign||"left"===r.imageAlign)&&t(r.image,r.imageLink,r.imageAlt),g=("bottom"===r.imageAlign||"right"===r.imageAlign)&&t(r.image,r.imageLink,r.imageAlt);return(0,s.jsxs)("div",{className:d,children:[c,(0,s.jsxs)("div",{className:"blockContent",children:[n(r.title),(0,s.jsx)(o.Z,{children:r.content})]}),g]},l)}))})}a.defaultProps={align:"left",contents:[],layout:"twoColumn"}},5203:(e,t,n)=>{n.d(t,{Z:()=>r});n(7378);var i=n(6038),o=n(1191),s=n(7419),a=n(4246);const l={a:e=>{let{node:t,...n}=e;return(0,a.jsx)(o.Z,{...n})}};function r(e){let{children:t}=e;const n=function(e){return e?.type===s.Z?(0,s.I)({id:e.props.id,message:e?.props?.children}):e}(t);return(0,a.jsx)("div",{children:(0,a.jsx)("span",{children:(0,a.jsx)(i.D,{components:l,children:n})})})}},551:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var i=n(7378),o=n(2358),s=n(7419),a=n(7806),l=n(3451),r=n(4246);class d extends i.Component{render(){const e=[{content:(0,r.jsx)(s.Z,{children:"Find what you're looking for in our detailed documentation and guides.\n- Learn how to [get started](/docs/getting-started) with Jest.\n- [Troubleshoot](/docs/troubleshooting) problems with Jest.\n- Learn how to [configure Jest](/docs/configuration).\n- Look at the full [API Reference](/docs/api)."}),title:(0,r.jsx)(s.Z,{children:"Browse the docs"})},{content:(0,r.jsx)(s.Z,{children:"Ask questions and find answers from other Jest users like you.\n- Join the `#testing` channel on [Reactiflux](https://www.reactiflux.com/), a Discord community.\n- Many members of the community use Stack Overflow. Read through the [existing questions](https://stackoverflow.com/questions/tagged/jestjs) tagged with **jestjs** or [ask your own](https://stackoverflow.com/questions/ask)!"}),title:(0,r.jsx)(s.Z,{children:"Join the community"})},{content:(0,r.jsx)(s.Z,{children:"Find out what's new with Jest.\n- Follow [Jest](https://twitter.com/jestjs_) on Twitter.\n- Subscribe to the [Jest blog](/blog/).\n- Look at the [changelog](https://github.com/jestjs/jest/blob/main/CHANGELOG.md)."}),title:(0,r.jsx)(s.Z,{children:"Stay up to date"})}];return(0,r.jsx)("div",{className:"wrapperV1",children:(0,r.jsx)(a.Z,{className:"mainContainerV1",children:(0,r.jsxs)("div",{className:"padding-vert--lg",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("header",{children:(0,r.jsx)("h2",{children:(0,r.jsx)(s.Z,{children:"Need help?"})})}),(0,r.jsx)("p",{children:(0,r.jsx)(s.Z,{children:"Jest is worked on by a team of volunteers in their spare time. You can find out ways to talk to community members below."})})]}),(0,r.jsx)("div",{className:"padding-top--md",children:(0,r.jsx)(l.Z,{contents:e,layout:"threeColumn"})})]})})})}}function c(e){return(0,r.jsx)(o.Z,{children:(0,r.jsx)(d,{...e})})}}}]);
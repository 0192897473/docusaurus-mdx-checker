"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4368],{552:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(7378),o=n(7140),i=n(9237),s=n(5854),l=n(7470),c=n(8774),r=n(7419),d=n(9169),u=n(6847);const m={backToTopButton:"backToTopButton_iEvu",backToTopButtonShow:"backToTopButtonShow_DO8w"};var b=n(4246);function h(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.Ct)();return(0,d.RF)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.S)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,b.jsx)("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.Z)("clean-btn",s.k.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var p=n(5122),x=n(3620),f=n(7980),j=n(9899),_=n(8340);function k(e){return(0,b.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,b.jsxs)("g",{fill:"#7a7a7a",children:[(0,b.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,b.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g={collapseSidebarButton:"collapseSidebarButton_oTwn",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_pMEX"};function v(e){let{onClick:t}=e;return(0,b.jsx)("button",{type:"button",title:(0,r.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.Z)("button button--secondary button--outline",g.collapseSidebarButton),onClick:t,children:(0,b.jsx)(k,{className:g.collapseSidebarButtonIcon})})}var C=n(4234),S=n(3879);const I=Symbol("EmptyContext"),N=a.createContext(I);function T(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,b.jsx)(N.Provider,{value:i,children:t})}var B=n(4229),Z=n(6440),w=n(1191),L=n(362);function E(e){let{categoryLabel:t,onClick:n}=e;return(0,b.jsx)("button",{"aria-label":(0,r.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function y(e){let{item:t,onItemClick:n,activePath:i,level:c,index:r,...d}=e;const{items:u,label:m,collapsible:h,className:p,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.L)(),_=function(e){const t=(0,L.Z)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.LM)(e):void 0),[e,t])}(t),k=(0,l._F)(t,i),g=(0,Z.Mg)(x,i),{collapsed:v,setCollapsed:C}=(0,B.u)({initialState:()=>!!h&&(!k&&t.collapsed)}),{expandedItem:T,setExpandedItem:y}=function(){const e=(0,a.useContext)(N);if(e===I)throw new S.i6("DocSidebarItemsExpandedStateProvider");return e}(),A=function(e){void 0===e&&(e=!v),y(e?null:r),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.D9)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:k,collapsed:v,updateCollapsed:A}),(0,a.useEffect)((()=>{h&&null!=T&&T!==r&&f&&C(!0)}),[h,T,r,C,f]),(0,b.jsxs)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemCategory,s.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":v},p),children:[(0,b.jsxs)("div",{className:(0,o.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,b.jsx)(w.Z,{className:(0,o.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!x&&h,"menu__link--active":k}),onClick:h?e=>{n?.(t),x?A(!1):(e.preventDefault(),A())}:()=>{n?.(t)},"aria-current":g?"page":void 0,"aria-expanded":h?!v:void 0,href:h?_??"#":_,...d,children:m}),x&&h&&(0,b.jsx)(E,{categoryLabel:m,onClick:e=>{e.preventDefault(),A()}})]}),(0,b.jsx)(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,b.jsx)(V,{items:u,tabIndex:v?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var A=n(4715),H=n(1858);const M={menuExternalLink:"menuExternalLink_BiEj"};function D(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:h}=t,p=(0,l._F)(t,a),x=(0,A.Z)(d);return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,b.jsxs)(w.Z,{className:(0,o.Z)("menu__link",!x&&M.menuExternalLink,{"menu__link--active":p}),autoAddBaseUrl:h,"aria-current":p?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,b.jsx)(H.Z,{})]})},u)}const P={menuHtmlItem:"menuHtmlItem_OniL"};function R(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,b.jsx)("li",{className:(0,o.Z)(s.k.docs.docSidebarItemLink,s.k.docs.docSidebarItemLinkLevel(n),l&&[P.menuHtmlItem,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function W(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,b.jsx)(y,{item:t,...n});case"html":return(0,b.jsx)(R,{item:t,...n});default:return(0,b.jsx)(D,{item:t,...n})}}function F(e){let{items:t,...n}=e;const a=(0,l.f)(t,n.activePath);return(0,b.jsx)(T,{children:a.map(((e,t)=>(0,b.jsx)(W,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(F),Y={menu:"menu_jmj1",menuWithAnnouncementBar:"menuWithAnnouncementBar_YufC"};function U(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,C.nT)(),[t,n]=(0,a.useState)(e);return(0,d.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,b.jsx)("nav",{"aria-label":(0,r.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.Z)("menu thin-scrollbar",Y.menu,l&&Y.menuWithAnnouncementBar,i),children:(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:n,activePath:t,level:1})})})}const z="sidebar_CUen",q="sidebarWithHideableNavbar_w4KB",K="sidebarHidden_k6VE",O="sidebarLogo_CYvI";function J(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.L)();return(0,b.jsxs)("div",{className:(0,o.Z)(z,s&&q,i&&K),children:[s&&(0,b.jsx)(_.Z,{tabIndex:-1,className:O}),(0,b.jsx)(U,{path:t,sidebar:n}),l&&(0,b.jsx)(v,{onClick:a})]})}const X=a.memo(J);var G=n(197),Q=n(9067);const $=e=>{let{sidebar:t,path:n}=e;const a=(0,Q.e)();return(0,b.jsx)("ul",{className:(0,o.Z)(s.k.docs.docSidebarMenu,"menu__list"),children:(0,b.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ee(e){return(0,b.jsx)(G.Zo,{component:$,props:e})}const te=a.memo(ee);function ne(e){const t=(0,f.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,b.jsxs)(b.Fragment,{children:[n&&(0,b.jsx)(X,{...e}),a&&(0,b.jsx)(te,{...e})]})}const ae={expandButton:"expandButton_pLDq",expandButtonIcon:"expandButtonIcon_X5ff"};function oe(e){let{toggleSidebar:t}=e;return(0,b.jsx)("div",{className:ae.expandButton,title:(0,r.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,b.jsx)(k,{className:ae.expandButtonIcon})})}const ie={docSidebarContainer:"docSidebarContainer_c7NB",docSidebarContainerHidden:"docSidebarContainerHidden_P3S_",sidebarViewport:"sidebarViewport_KYo0"};function se(e){let{children:t}=e;const n=(0,c.V)();return(0,b.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function le(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.TH)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,p.n)()&&r(!0),i((e=>!e))}),[i,c]);return(0,b.jsx)("aside",{className:(0,o.Z)(s.k.docs.docSidebarContainer,ie.docSidebarContainer,n&&ie.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ie.docSidebarContainer)&&n&&r(!0)},children:(0,b.jsx)(se,{children:(0,b.jsxs)("div",{className:(0,o.Z)(ie.sidebarViewport,c&&ie.sidebarViewportHidden),children:[(0,b.jsx)(ne,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,b.jsx)(oe,{toggleSidebar:d})]})})})}const ce={docMainContainer:"docMainContainer_a9sJ",docMainContainerEnhanced:"docMainContainerEnhanced_grEJ",docItemWrapperEnhanced:"docItemWrapperEnhanced_VqDq"};function re(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.V)();return(0,b.jsx)("main",{className:(0,o.Z)(ce.docMainContainer,(t||!a)&&ce.docMainContainerEnhanced),children:(0,b.jsx)("div",{className:(0,o.Z)("container padding-top--md padding-bottom--lg",ce.docItemWrapper,t&&ce.docItemWrapperEnhanced),children:n})})}const de={docRoot:"docRoot_DfVB",docsWrapper:"docsWrapper__sE8"};function ue(e){let{children:t}=e;const n=(0,c.V)(),[o,i]=(0,a.useState)(!1);return(0,b.jsxs)("div",{className:de.docsWrapper,children:[(0,b.jsx)(h,{}),(0,b.jsxs)("div",{className:de.docRoot,children:[n&&(0,b.jsx)(le,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,b.jsx)(re,{hiddenSidebarContainer:o,children:t})]})]})}var me=n(4718);function be(e){const t=(0,l.SN)(e);if(!t)return(0,b.jsx)(me.Z,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,b.jsx)(i.FG,{className:(0,o.Z)(s.k.page.docsDocPage),children:(0,b.jsx)(c.b,{name:a,items:r,children:(0,b.jsx)(ue,{children:n})})})}},4718:(e,t,n)=>{n.d(t,{Z:()=>l});n(7378);var a=n(7140),o=n(7419),i=n(8825),s=n(4246);function l(e){let{className:t}=e;return(0,s.jsx)("main",{className:(0,a.Z)("container margin-vert--xl",t),children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,s.jsx)(i.Z,{as:"h1",className:"hero__title",children:(0,s.jsx)(o.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,s.jsx)("p",{children:(0,s.jsx)(o.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);
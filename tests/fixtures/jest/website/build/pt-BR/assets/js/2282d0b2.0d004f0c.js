/*! For license information please see 2282d0b2.0d004f0c.js.LICENSE.txt */
"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[4651],{4146:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=r(4246),o=r(1670),n=r(8475);const s={id:"architecture",title:"Arquitetura"},i=void 0,c={unversionedId:"architecture",id:"version-29.6/architecture",title:"Arquitetura",description:"Se voc\xea est\xe1 interessado em saber mais sobre como o Jest funciona, entender sua arquitetura, e como o Jest est\xe1 dividido em pacotes individuais reutiliz\xe1veis, veja este v\xeddeo:",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/version-29.6/Architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/pt-BR/docs/architecture",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/pt-BR",tags:[],version:"29.6",frontMatter:{id:"architecture",title:"Arquitetura"},sidebar:"docs",previous:{title:"Resolu\xe7\xe3o de Problemas",permalink:"/pt-BR/docs/troubleshooting"},next:{title:"Testando Apps React",permalink:"/pt-BR/docs/tutorial-react"}},l={},u=[];function d(e){const t=Object.assign({p:"p",a:"a"},(0,o.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Se voc\xea est\xe1 interessado em saber mais sobre como o Jest funciona, entender sua arquitetura, e como o Jest est\xe1 dividido em pacotes individuais reutiliz\xe1veis, veja este v\xeddeo:"}),"\n",(0,a.jsx)(n.Z,{id:"3YDiloj8_d0"}),"\n",(0,a.jsx)(t.p,{children:"Se voc\xea quiser aprender a criar uma estrutura de teste como o Jest do zero, confira este v\xeddeo:"}),"\n",(0,a.jsx)(n.Z,{id:"B8FbUK0WpVU"}),"\n",(0,a.jsxs)(t.p,{children:["H\xe1 tamb\xe9m um guia escrito ",(0,a.jsx)(t.a,{href:"https://cpojer.net/posts/building-a-javascript-testing-framework",children:"que voc\xea pode acompanhar"}),". Ele ensina os conceitos fundamentais do Jest e explica como v\xe1rias partes do Jest podem ser usadas para compor um framework de testes personalizado."]})]})}const p=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,a.jsx)(t,Object.assign({},e,{children:(0,a.jsx)(d,e)})):d(e)}},8475:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7378),o=function(){return o=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function n(e){var t=a.useState(!1),r=t[0],n=t[1],s=a.useState(!1),i=s[0],c=s[1],l=encodeURIComponent(e.id),u="string"==typeof e.playlistCoverId?encodeURIComponent(e.playlistCoverId):null,d=e.title,p=e.poster||"hqdefault",m="&"+e.params||0,h=e.muted?"&mute=1":"",f=e.announce||"Watch",v=e.webp?"webp":"jpg",b=e.webp?"vi_webp":"vi",g=e.thumbnail||(e.playlist?"https://i.ytimg.com/"+b+"/"+u+"/"+p+"."+v:"https://i.ytimg.com/"+b+"/"+l+"/"+p+"."+v),w=e.noCookie;w=e.cookie?"https://www.youtube.com":"https://www.youtube-nocookie.com";var y=e.playlist?w+"/embed/videoseries?autoplay=1"+h+"&list="+l+m:w+"/embed/"+l+"?autoplay=1&state=1"+h+m,j=e.activatedClass||"lyt-activated",k=e.adNetwork||!1,C=e.aspectHeight||9,E=e.aspectWidth||16,x=e.iframeClass||"",R=e.playerClass||"lty-playbtn",q=e.wrapperClass||"yt-lite",B=e.onIframeAdded||function(){},F=e.rel?"prefetch":"preload";return a.useEffect((function(){i&&B()}),[i]),a.createElement(a.Fragment,null,a.createElement("link",{rel:F,href:g,as:"image"}),a.createElement(a.Fragment,null,r&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:w}),a.createElement("link",{rel:"preconnect",href:"https://www.google.com"}),k&&a.createElement(a.Fragment,null,a.createElement("link",{rel:"preconnect",href:"https://static.doubleclick.net"}),a.createElement("link",{rel:"preconnect",href:"https://googleads.g.doubleclick.net"})))),a.createElement("article",{onPointerOver:function(){r||n(!0)},onClick:function(){i||c(!0)},className:q+" "+(i?j:""),"data-title":d,style:o({backgroundImage:"url("+g+")"},{"--aspect-ratio":C/E*100+"%"})},a.createElement("button",{type:"button",className:R,"aria-label":f+" "+d}),i&&a.createElement("iframe",{className:x,title:d,width:"560",height:"315",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,src:y})))}},1670:(e,t,r)=>{r.d(t,{Zo:()=>i,ah:()=>n});var a=r(7378);const o=a.createContext({});function n(e){const t=a.useContext(o);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const s={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||s:n(e),a.createElement(o.Provider,{value:i},t)}}}]);
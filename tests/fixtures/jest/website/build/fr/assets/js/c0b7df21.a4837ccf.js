"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[373],{2077:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>a});var t=s(4246),i=s(1670);const r={id:"watch-plugins",title:"Plugins de surveillance"},o=void 0,l={unversionedId:"watch-plugins",id:"version-29.5/watch-plugins",title:"Plugins de surveillance",description:"Le syst\xe8me de plugins de surveillance (NdT watch) de Jest permet d'acc\xe9der \xe0 des parties sp\xe9cifiques de Jest et de d\xe9finir des invites de menu en mode de surveillance qui ex\xe9cutent du code en appuyant sur une touche. Combin\xe9es, ces fonctionnalit\xe9s vous permettent de d\xe9velopper des exp\xe9riences interactives personnalis\xe9es pour votre flux de travail.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-29.5/WatchPlugins.md",sourceDirName:".",slug:"/watch-plugins",permalink:"/fr/docs/29.5/watch-plugins",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/jest-v2/fr",tags:[],version:"29.5",frontMatter:{id:"watch-plugins",title:"Plugins de surveillance"},sidebar:"docs",previous:{title:"Manipulation du DOM",permalink:"/fr/docs/29.5/tutorial-jquery"},next:{title:"Changer pour Jest",permalink:"/fr/docs/29.5/migration-guide"}},c={},a=[{value:"Interface du plugin de surveillance",id:"interface-du-plugin-de-surveillance",level:2},{value:"Faire des hooks dans Jest",id:"faire-des-hooks-dans-jest",level:2},{value:"<code>apply(jestHooks)</code>",id:"applyjesthooks",level:3},{value:"<code>jestHooks.shouldRunTestSuite(testSuiteInfo)</code>",id:"jesthooksshouldruntestsuitetestsuiteinfo",level:4},{value:"<code>jestHooks.onTestRunComplete(results)</code>",id:"jesthooksontestruncompleteresults",level:4},{value:"<code>jestHooks.onFileChange({projects})</code>",id:"jesthooksonfilechangeprojects",level:4},{value:"Int\xe9gration du menu de surveillance",id:"int\xe9gration-du-menu-de-surveillance",level:2},{value:"<code>getUsageInfo(globalConfig)</code>",id:"getusageinfoglobalconfig",level:3},{value:"<code>run(globalConfig, updateConfigAndRun)</code>",id:"runglobalconfig-updateconfigandrun",level:3},{value:"Touches de configuration autoris\xe9es",id:"touches-de-configuration-autoris\xe9es",level:4},{value:"Personnalisation",id:"personnalisation",level:2},{value:"Choix d&#39;une bonne touche",id:"choix-dune-bonne-touche",level:2},{value:"Quand un conflit se produit",id:"quand-un-conflit-se-produit",level:3}];function d(e){const n=Object.assign({p:"p",h2:"h2",pre:"pre",code:"code",h3:"h3",h4:"h4",ul:"ul",li:"li",em:"em",admonition:"admonition",a:"a",strong:"strong"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Le syst\xe8me de plugins de surveillance (NdT watch) de Jest permet d'acc\xe9der \xe0 des parties sp\xe9cifiques de Jest et de d\xe9finir des invites de menu en mode de surveillance qui ex\xe9cutent du code en appuyant sur une touche. Combin\xe9es, ces fonctionnalit\xe9s vous permettent de d\xe9velopper des exp\xe9riences interactives personnalis\xe9es pour votre flux de travail."}),"\n",(0,t.jsx)(n.h2,{id:"interface-du-plugin-de-surveillance",children:"Interface du plugin de surveillance"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  // Ajoute des hooks aux \xe9v\xe9nements du cycle de vie de Jest\n  apply(jestHooks) {}\n\n  // R\xe9cup\xe8re les informations de l'invite pour les plugins interactifs\n  getUsageInfo(globalConfig) {}\n\n  // Ex\xe9cut\xe9 lorsque la cl\xe9 de `getUsageInfo` est entr\xe9e\n  run(globalConfig, updateConfigAndRun) {}\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"faire-des-hooks-dans-jest",children:"Faire des hooks dans Jest"}),"\n",(0,t.jsxs)(n.p,{children:["Pour connecter votre plugin de surveillance \xe0 Jest, ajoutez son chemin sous ",(0,t.jsx)(n.code,{children:"watchPlugins"})," dans votre configuration Jest\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  // ...\n  watchPlugins: ['path/to/yourWatchPlugin'],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Les plugins de surveillance personnalis\xe9s peuvent ajouter des hooks aux \xe9v\xe9nements Jest. Ces hooks peuvent \xeatre ajout\xe9s avec ou sans touche interactive dans le menu du mode surveillance."}),"\n",(0,t.jsx)(n.h3,{id:"applyjesthooks",children:(0,t.jsx)(n.code,{children:"apply(jestHooks)"})}),"\n",(0,t.jsxs)(n.p,{children:["Les hooks Jest peuvent \xeatre attach\xe9s en impl\xe9mentant la m\xe9thode ",(0,t.jsx)(n.code,{children:"apply"}),". Cette m\xe9thode re\xe7oit un argument ",(0,t.jsx)(n.code,{children:"jestHooks"})," qui permet au plugin de se raccrocher \xe0 des parties sp\xe9cifiques du cycle de vie d'un test."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {}\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Ci-dessous se trouvent les hooks disponibles en Jest."}),"\n",(0,t.jsx)(n.h4,{id:"jesthooksshouldruntestsuitetestsuiteinfo",children:(0,t.jsx)(n.code,{children:"jestHooks.shouldRunTestSuite(testSuiteInfo)"})}),"\n",(0,t.jsxs)(n.p,{children:["Retourne un bool\xe9en (ou ",(0,t.jsx)(n.code,{children:"Promise<boolean>"})," pour g\xe9rer les op\xe9rations asynchrones) pour sp\xe9cifier si un test doit \xeatre ex\xe9cut\xe9 ou non."]}),"\n",(0,t.jsx)(n.p,{children:"Par exemple\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.shouldRunTestSuite(testSuiteInfo => {\n      return testSuiteInfo.testPath.includes('my-keyword');\n    });\n\n    // ou une promesse\n    jestHooks.shouldRunTestSuite(testSuiteInfo => {\n      return Promise.resolve(testSuiteInfo.testPath.includes('my-keyword'));\n    });\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"jesthooksontestruncompleteresults",children:(0,t.jsx)(n.code,{children:"jestHooks.onTestRunComplete(results)"})}),"\n",(0,t.jsx)(n.p,{children:"Est appel\xe9 \xe0 la fin de chaque test. Il a les r\xe9sultats du test comme argument."}),"\n",(0,t.jsx)(n.p,{children:"Par exemple\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.onTestRunComplete(results => {\n      this._hasSnapshotFailure = results.snapshot.failure;\n    });\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h4,{id:"jesthooksonfilechangeprojects",children:(0,t.jsx)(n.code,{children:"jestHooks.onFileChange({projects})"})}),"\n",(0,t.jsx)(n.p,{children:"Est appel\xe9 \xe0 chaque fois qu'il y a un changement dans le syst\xe8me de fichiers"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"projects: Array<config: ProjectConfig, testPaths: Array<string>"}),"\xa0: inclut tous les chemins de test que Jest surveille."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Par exemple\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  apply(jestHooks) {\n    jestHooks.onFileChange(({projects}) => {\n      this._projects = projects;\n    });\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"int\xe9gration-du-menu-de-surveillance",children:"Int\xe9gration du menu de surveillance"}),"\n",(0,t.jsxs)(n.p,{children:["Les plugins de surveillance personnalis\xe9s peuvent \xe9galement ajouter ou remplacer la fonctionnalit\xe9 du menu de surveillance en sp\xe9cifiant une paire key/prompt dans la m\xe9thode ",(0,t.jsx)(n.code,{children:"getUsageInfo"})," et une m\xe9thode ",(0,t.jsx)(n.code,{children:"run"})," pour l'ex\xe9cution de key."]}),"\n",(0,t.jsx)(n.h3,{id:"getusageinfoglobalconfig",children:(0,t.jsx)(n.code,{children:"getUsageInfo(globalConfig)"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour ajouter une touche au menu de surveillance, impl\xe9mentez la m\xe9thode ",(0,t.jsx)(n.code,{children:"getUsageInfo"}),", renvoyant une touche (key) et l'invite (prompt)\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  getUsageInfo(globalConfig) {\n    return {\n      key: 's',\n      prompt: 'do something',\n    };\n  }\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ceci ajoutera une ligne dans le menu du mode surveillance ",(0,t.jsxs)(n.em,{children:["(",(0,t.jsx)(n.code,{children:"\u203a Press s to do something."}),")"]})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"Watch Usage\n \u203a Press p to filter by a filename regex pattern.\n \u203a Press t to filter by a test name regex pattern.\n \u203a Press q to quit watch mode.\n \u203a Press s to do something. // <-- C'est notre plugin\n \u203a Press Enter to trigger a test run.\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"remarque",type:"note",children:(0,t.jsx)(n.p,{children:"If the key for your plugin already exists as a default key, your plugin will override that key."})}),"\n",(0,t.jsx)(n.h3,{id:"runglobalconfig-updateconfigandrun",children:(0,t.jsx)(n.code,{children:"run(globalConfig, updateConfigAndRun)"})}),"\n",(0,t.jsxs)(n.p,{children:["Pour g\xe9rer les \xe9v\xe9nements de pression de touche \xe0 partir de la touche retourn\xe9e par ",(0,t.jsx)(n.code,{children:"getUsageInfo"}),", vous pouvez impl\xe9menter la m\xe9thode ",(0,t.jsx)(n.code,{children:"run"}),". Cette m\xe9thode renvoie une ",(0,t.jsx)(n.code,{children:"Promise<boolean>"})," qui peut \xeatre r\xe9solue lorsque le plugin veut rendre le contr\xf4le \xe0 Jest. Le ",(0,t.jsx)(n.code,{children:"boolean"})," pr\xe9cise si Jest doit r\xe9ex\xe9cuter les tests apr\xe8s avoir r\xe9cup\xe9r\xe9 le contr\xf4le."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/jestjs/jest/blob/v29.2.1/packages/jest-types/src/Config.ts#L358-L422",children:(0,t.jsx)(n.code,{children:"globalConfig"})}),": A representation of Jest's current global configuration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"updateConfigAndRun"}),"\xa0: Vous permet de lancer un test pendant que le plugin interactif est en cours d'ex\xe9cution."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  run(globalConfig, updateConfigAndRun) {\n    // fait quelque chose.\n  }\n}\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"remarque",type:"note",children:(0,t.jsxs)(n.p,{children:["If you do call ",(0,t.jsx)(n.code,{children:"updateConfigAndRun"}),", your ",(0,t.jsx)(n.code,{children:"run"})," method should not resolve to a truthy value, as that would trigger a double-run."]})}),"\n",(0,t.jsx)(n.h4,{id:"touches-de-configuration-autoris\xe9es",children:"Touches de configuration autoris\xe9es"}),"\n",(0,t.jsxs)(n.p,{children:["Pour des raisons de stabilit\xe9 et de s\xe9curit\xe9, seule une partie des touches de configuration globale peuvent \xeatre mises \xe0 jour avec ",(0,t.jsx)(n.code,{children:"updateConfigAndRun"}),". La liste blanche actuelle est la suivante\xa0:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#bail-number--boolean",children:(0,t.jsx)(n.code,{children:"bail"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"cli#--changedsince",children:(0,t.jsx)(n.code,{children:"changedSince"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#collectcoverage-boolean",children:(0,t.jsx)(n.code,{children:"collectCoverage"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#collectcoveragefrom-array",children:(0,t.jsx)(n.code,{children:"collectCoverageFrom"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#coveragedirectory-string",children:(0,t.jsx)(n.code,{children:"coverageDirectory"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#coveragereporters-arraystring",children:(0,t.jsx)(n.code,{children:"coverageReporters"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#notify-boolean",children:(0,t.jsx)(n.code,{children:"notify"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#notifymode-string",children:(0,t.jsx)(n.code,{children:"notifyMode"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#onlyfailures-boolean",children:(0,t.jsx)(n.code,{children:"onlyFailures"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#reporters-arraymodulename--modulename-options",children:(0,t.jsx)(n.code,{children:"reporters"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"cli#--testnamepatternregex",children:(0,t.jsx)(n.code,{children:"testNamePattern"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"cli#--testpathpatternregex",children:(0,t.jsx)(n.code,{children:"testPathPattern"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"cli#--updatesnapshot",children:(0,t.jsx)(n.code,{children:"updateSnapshot"})})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"configuration#verbose-boolean",children:(0,t.jsx)(n.code,{children:"verbose"})})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"personnalisation",children:"Personnalisation"}),"\n",(0,t.jsx)(n.p,{children:"Les plugins peuvent \xeatre personnalis\xe9s via votre configuration Jest."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",metastring:'title="jest.config.js"',children:"module.exports = {\n  // ...\n  watchPlugins: [\n    [\n      'path/to/yourWatchPlugin',\n      {\n        key: 'k', // <- votre touche personnalis\xe9e\n        prompt: 'affiche une invite personnalis\xe9e',\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,t.jsx)(n.p,{children:"Noms de configuration recommand\xe9s\xa0:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"}),"\xa0: Modifie la touche du plugin."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prompt"}),"\xa0: Permet \xe0 l'utilisateur de personnaliser le texte dans l'invite du plugin."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Si l'utilisateur a fourni une configuration personnalis\xe9e, elle sera pass\xe9e comme argument au constructeur du plugin."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"class MyWatchPlugin {\n  constructor({config}) {}\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"choix-dune-bonne-touche",children:"Choix d'une bonne touche"}),"\n",(0,t.jsxs)(n.p,{children:["Jest permet aux plugins tiers de surcharger certaines de ses touches de fonctionnalit\xe9s int\xe9gr\xe9es, mais pas toutes. Plus pr\xe9cis\xe9ment, les touches suivantes ",(0,t.jsx)(n.strong,{children:"ne sont pas \xe9crasables"}),"\xa0:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"c"})," (efface les patterns de filtre)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"i"})," (met \xe0 jour de fa\xe7on interactive les snapshots non concordants)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"q"})," (quitter)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"u"})," (met \xe0 jour les snapshots non concordants)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"w"})," (affiche l'utilisation du mode surveillance / les actions disponibles)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Les touches suivantes pour la fonctionnalit\xe9 int\xe9gr\xe9e ",(0,t.jsx)(n.strong,{children:"peuvent \xeatre \xe9cras\xe9es"}),"\xa0:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"p"})," (tester le pattern de nom de fichier)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"t"})," (tester le pattern de nom)"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Toute touche non utilis\xe9e par la fonctionnalit\xe9 int\xe9gr\xe9e peut \xeatre invoqu\xe9e, comme on peut s'y attendre. Essayez d'\xe9viter d'utiliser des touches difficiles \xe0 obtenir sur divers claviers (par exemple ",(0,t.jsx)(n.code,{children:"\xe9"}),", ",(0,t.jsx)(n.code,{children:"\u20ac"}),"), ou non visibles par d\xe9faut (par exemple, de nombreux claviers Mac ne disposent pas d'indications visuelles pour des caract\xe8res tels que ",(0,t.jsx)(n.code,{children:"|"}),", ",(0,t.jsx)(n.code,{children:"\\"}),", ",(0,t.jsx)(n.code,{children:"["}),", etc.)"]}),"\n",(0,t.jsx)(n.h3,{id:"quand-un-conflit-se-produit",children:"Quand un conflit se produit"}),"\n",(0,t.jsx)(n.p,{children:"Si votre plugin tente d'\xe9craser une touche r\xe9serv\xe9e, Jest \xe9mettra une erreur avec un message descriptif, quelque chose du genre\xa0:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nWatch plugin YourFaultyPlugin attempted to register key `q`, that is reserved internally for quitting watch mode. Please change the configuration key for this plugin.\n\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Il est \xe9galement interdit aux plugins tiers d'\xe9craser une touche d\xe9j\xe0 r\xe9serv\xe9e par un autre plugin tiers pr\xe9sent plus t\xf4t dans la liste des plugins configur\xe9s (param\xe8tre du tableau ",(0,t.jsx)(n.code,{children:"watchPlugins"}),"). Lorsque cela se produit, vous recevrez \xe9galement un message d\u2019erreur qui tente de vous aider \xe0 corriger ceci\xa0:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"\nWatch plugins YourFaultyPlugin and TheirFaultyPlugin both attempted to register key `x`. Please change the key configuration for one of the conflicting plugins to avoid overlap.\n\n"})})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},1670:(e,n,s)=>{s.d(n,{Zo:()=>l,ah:()=>r});var t=s(7378);const i=t.createContext({});function r(e){const n=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function l({components:e,children:n,disableParentContext:s}){let l;return l=s?"function"==typeof e?e({}):e||o:r(e),t.createElement(i.Provider,{value:l},n)}}}]);
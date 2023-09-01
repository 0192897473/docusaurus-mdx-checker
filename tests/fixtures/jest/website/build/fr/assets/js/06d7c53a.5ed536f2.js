"use strict";(self.webpackChunkjest_website=self.webpackChunkjest_website||[]).push([[5288],{9166:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var t=n(4246),i=n(1670);const r={title:"Jest 28\xa0: Perte de poids et compatibilit\xe9 accrue \ud83e\udef6",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},o=void 0,a={permalink:"/fr/blog/2022/04/25/jest-28",editUrl:"https://github.com/jestjs/jest/tree/main/website/blog/2022-04-25-jest-28.md",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2022-04-25-jest-28.md",title:"Jest 28\xa0: Perte de poids et compatibilit\xe9 accrue \ud83e\udef6",description:"Jest 28 est enfin l\xe0, et il est livr\xe9 avec certaines fonctionnalit\xe9s demand\xe9es depuis longtemps, telles que le support du partage de l'ex\xe9cution de test sur plusieurs machines, les exports de paquets et la possibilit\xe9 de personnaliser le comportement des faux temporisateurs. Il ne s'agit l\xe0 que de quelques points marquants et nous en soulignerons d'autres dans cet article du blog.",date:"2022-04-25T00:00:00.000Z",formattedDate:"25 avril 2022",tags:[],readingTime:8.02,hasTruncateMarker:!0,authors:[{name:"Simen Bekkhus",url:"https://github.com/SimenB",imageURL:"https://avatars.githubusercontent.com/u/1404810"}],frontMatter:{title:"Jest 28\xa0: Perte de poids et compatibilit\xe9 accrue \ud83e\udef6",author:"Simen Bekkhus",authorURL:"https://github.com/SimenB",authorImageURL:"https://avatars.githubusercontent.com/u/1404810"},unlisted:!1,prevItem:{title:"Jest rejoint la fondation OpenJS",permalink:"/fr/blog/2022/05/11/jest-joins-openjs"},nextItem:{title:"Jest 27\xa0: nouvelles valeurs par d\xe9faut pour Jest, \xe9dition 2021 \u23e9",permalink:"/fr/blog/2021/05/25/jest-27"}},l={authorsImageUrls:[void 0]},u=[{value:"Changements de rupture",id:"changements-de-rupture",level:2},{value:"Fonctionnalit\xe9s",id:"fonctionnalit\xe9s",level:2},{value:"Partage de l&#39;ex\xe9cution des tests",id:"partage-de-lex\xe9cution-des-tests",level:3},{value:"<code>package.json</code> <code>exports</code>",id:"packagejson-exports",level:3},{value:"Faux temporisateurs",id:"faux-temporisateurs",level:3},{value:"Rapporteur GitHub Actions",id:"rapporteur-github-actions",level:3},{value:"<code>testEnvironmentOptions</code>",id:"testenvironmentoptions",level:3},{value:"Tous les globaux de Node.js",id:"tous-les-globaux-de-nodejs",level:3},{value:"Modules ECMAScript",id:"modules-ecmascript",level:3},{value:"Les URL de <code>data:</code>",id:"les-url-de-data",level:4},{value:"<code>import.meta.jest</code>",id:"importmetajest",level:4},{value:"Divers",id:"divers",level:3},{value:"R\xe9solveurs asynchrones",id:"r\xe9solveurs-asynchrones",level:4},{value:"Fichiers de configuration asynchrones",id:"fichiers-de-configuration-asynchrones",level:4},{value:"Utilisation de <code>globalThis</code>",id:"utilisation-de-globalthis",level:4},{value:"JSDOM 19",id:"jsdom-19",level:4},{value:"TypeScript",id:"typescript",level:2},{value:"<code>expect</code>",id:"expect",level:3},{value:"Plugins personnalis\xe9s",id:"plugins-personnalis\xe9s",level:3},{value:"<code>jest-runner-tsd</code>",id:"jest-runner-tsd",level:3},{value:"<code>jest-light-runner</code>",id:"jest-light-runner",level:2},{value:"A venir",id:"a-venir",level:2},{value:"Remerciements",id:"remerciements",level:2}];function d(e){const s=Object.assign({p:"p",a:"a",code:"code",h2:"h2",em:"em",h3:"h3",img:"img",pre:"pre",h4:"h4",hr:"hr"},(0,i.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Jest 28 est enfin l\xe0, et il est livr\xe9 avec certaines fonctionnalit\xe9s demand\xe9es depuis longtemps, telles que le support du ",(0,t.jsx)(s.a,{href:"/docs/cli#--shard",children:"partage"})," de l'ex\xe9cution de test sur plusieurs machines, les ",(0,t.jsxs)(s.a,{href:"https://nodejs.org/api/packages.html#exports",children:[(0,t.jsx)(s.code,{children:"exports"})," de paquets"]})," et la possibilit\xe9 de personnaliser le comportement des ",(0,t.jsx)(s.a,{href:"/docs/jest-object#fake-timers",children:"faux temporisateurs"}),". Il ne s'agit l\xe0 que de quelques points marquants et nous en soulignerons d'autres dans cet article du blog."]}),"\n",(0,t.jsxs)(s.p,{children:["De plus, comme annonc\xe9 dans l'",(0,t.jsx)(s.a,{href:"/blog/2021/05/25/jest-27",children:"article du blog consacr\xe9 \xe0 Jest 27"})," l'ann\xe9e derni\xe8re, nous avons supprim\xe9 de l'installation par d\xe9faut certains paquets qui ne sont plus utilis\xe9s par d\xe9faut. En cons\xe9quence, la taille de l'installation a diminu\xe9 d'environ 1/3."]}),"\n",(0,t.jsx)(s.h2,{id:"changements-de-rupture",children:"Changements de rupture"}),"\n",(0,t.jsxs)(s.p,{children:["The list of breaking changes is long (and can be seen fully in the ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/blob/main/CHANGELOG.md#2800",children:"changelog"}),"), but for migration purposes, we've also written ",(0,t.jsx)(s.a,{href:"/docs/28.x/upgrading-to-jest28",children:"a guide"})," you can follow. Nous esp\xe9rons que cela rendra la mise \xe0 jour aussi simple que possible\xa0!"]}),"\n",(0,t.jsxs)(s.p,{children:["Les principaux changements susceptibles d'avoir un impact sur votre migration sont l'abandon du support de Node 10 et 15 (mais ",(0,t.jsx)(s.em,{children:"pas"})," de Node 12, qui sera d\xe9suet dans quelques jours) et quelques options de configuration renomm\xe9es."]}),"\n",(0,t.jsxs)(s.p,{children:["Veuillez noter que les deux modules supprim\xe9s (",(0,t.jsx)(s.code,{children:"jest-environment-jsdom"})," et ",(0,t.jsx)(s.code,{children:"jest-jasmine2"}),") sont toujours activement maintenus et test\xe9s de la m\xeame mani\xe8re, donc le seul changement est que vous devrez les installer explicitement."]}),"\n",(0,t.jsxs)(s.p,{children:["Le guide devrait, nous l'esp\xe9rons, rendre la migration triviale, mais notez que si vous utilisez directement l'un des paquets qui composent Jest (tels que ",(0,t.jsx)(s.code,{children:"jest-worker"})," ou ",(0,t.jsx)(s.code,{children:"pretty-format"}),"), au lieu de simplement ex\xe9cuter ",(0,t.jsx)(s.code,{children:"jest"}),", vous devez passer par le changelog pour voir les changements de rupture."]}),"\n",(0,t.jsx)(s.h2,{id:"fonctionnalit\xe9s",children:"Fonctionnalit\xe9s"}),"\n",(0,t.jsx)(s.p,{children:"Parlons maintenant des nouvelles fonctionnalit\xe9s de Jest 28, qui sont bien plus int\xe9ressantes\xa0! Et il y en a pas mal, alors accrochez-vous."}),"\n",(0,t.jsx)(s.h3,{id:"partage-de-lex\xe9cution-des-tests",children:"Partage de l'ex\xe9cution des tests"}),"\n",(0,t.jsxs)(s.p,{children:["Jest inclut maintenant une nouvelle option CLI ",(0,t.jsx)(s.a,{href:"/docs/cli#--shard",children:(0,t.jsx)(s.code,{children:"--shard"})}),", une contribution de ",(0,t.jsx)(s.a,{href:"https://github.com/marionebl",children:"Mario Nebl"}),". Elle vous permet d'ex\xe9cuter des parties de vos tests sur diff\xe9rentes machines, et a \xe9t\xe9 l'une des plus anciennes demandes de fonctionnalit\xe9s de Jest."]}),"\n",(0,t.jsx)(s.p,{children:"La propre suite de tests de Jest sur CI est pass\xe9e d'environ 10 minutes \xe0 3 sur Ubuntu, et sur Windows de 20 minutes \xe0 7."}),"\n",(0,t.jsxs)(s.h3,{id:"packagejson-exports",children:[(0,t.jsx)(s.code,{children:"package.json"})," ",(0,t.jsx)(s.code,{children:"exports"})]}),"\n",(0,t.jsxs)(s.p,{children:["Jest a livr\xe9 un support minimal des ",(0,t.jsx)(s.a,{href:"https://nodejs.org/api/packages.html#exports",children:(0,t.jsx)(s.code,{children:"exports"})})," en 27.3. Cependant, il ne prenait en charge que le point d'entr\xe9e \xab\xa0principal\xa0\xbb (",(0,t.jsx)(s.code,{children:"."}),"), et seulement si aucun champ ",(0,t.jsx)(s.code,{children:"main"})," n'\xe9tait pr\xe9sent dans ",(0,t.jsx)(s.code,{children:"package.json"}),". Avec Jest 28, nous sommes heureux de vous offrir enfin un support complet !"]}),"\n",(0,t.jsxs)(s.p,{children:["En relation avec Jest 27, nous avons fourni une condition ",(0,t.jsx)(s.code,{children:"require"})," ou ",(0,t.jsx)(s.code,{children:"import"}),". Dans Jest 28, ",(0,t.jsx)(s.code,{children:"jest-environment-node"})," fournira automatiquement les conditions ",(0,t.jsx)(s.code,{children:"node"})," et ",(0,t.jsx)(s.code,{children:"node-addons"})," tandis que ",(0,t.jsx)(s.code,{children:"jest-environment-jsdom"})," fournira la condition ",(0,t.jsx)(s.code,{children:"browser"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Cela a \xe9t\xe9 l'un des plus gros probl\xe8mes de compatibilit\xe9 de Jest, et j'esp\xe8re que cela sera r\xe9solu une fois pour toutes."}),"\n",(0,t.jsx)(s.h3,{id:"faux-temporisateurs",children:"Faux temporisateurs"}),"\n",(0,t.jsxs)(s.p,{children:["Jest 26 a introduit le concept de faux minuteurs \xab modernes \xbb, qui utilise ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/@sinonjs/fake-timers",children:(0,t.jsx)(s.code,{children:"@sinonjs/fake-timers"})})," sous le capot, et Jest 27 en a fait la valeur par d\xe9faut. Dans Jest 28, nous exposons d\xe9sormais davantage l'impl\xe9mentation sous-jacente par le biais des API de configuration et d'ex\xe9cution. Un grand merci \xe0 ",(0,t.jsx)(s.a,{href:"https://github.com/mrazauskas",children:"Tom Mrazauskas"})," qui a contribu\xe9 \xe0 cette fonctionnalit\xe9 !"]}),"\n",(0,t.jsxs)(s.p,{children:["Cela vous permet de ne pas simuler le processus ",(0,t.jsx)(s.code,{children:"process.nextTick"})," qui am\xe9liore la compatibilit\xe9 avec de fausse ",(0,t.jsx)(s.code,{children:"Promise"}),", ou pour activer ",(0,t.jsx)(s.code,{children:"advanceTimers"})," qui avance automatiquement les temporisateurs."]}),"\n",(0,t.jsxs)(s.p,{children:["Veuillez consulter ",(0,t.jsxs)(s.a,{href:"/docs/configuration#faketimers-object",children:["la configuration de ",(0,t.jsx)(s.code,{children:"fakeTimers"})]})," pour plus de d\xe9tails."]}),"\n",(0,t.jsx)(s.h3,{id:"rapporteur-github-actions",children:"Rapporteur GitHub Actions"}),"\n",(0,t.jsx)(s.p,{children:"Jest est livr\xe9 avec un rapporteur \xe0 utiliser sur GitHub Actions, qui utilisera des annotations pour afficher les erreurs de test en ligne."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Capture d&#39;\xe9cran d&#39;erreur de test des actions GitHub",src:n(3816).Z+"",width:"2286",height:"554"})}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez activer ce rapporteur en passant ",(0,t.jsx)(s.code,{children:"github-actions"})," dans ",(0,t.jsxs)(s.a,{href:"/docs/configuration#reporters-arraymodulename--modulename-options",children:["l'option de configuration ",(0,t.jsx)(s.code,{children:"reporters"})]}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Un grand merci \xe0 ",(0,t.jsx)(s.a,{href:"https://github.com/ockham",children:"Bernie Reiter"})," et aux autres contributeurs pour nous avoir soutenus et avoir finalement obtenu cette fonctionnalit\xe9."]}),"\n",(0,t.jsx)(s.h3,{id:"testenvironmentoptions",children:(0,t.jsx)(s.code,{children:"testEnvironmentOptions"})}),"\n",(0,t.jsxs)(s.p,{children:["Vous pouvez maintenant passer ",(0,t.jsx)(s.a,{href:"/docs/configuration#testenvironmentoptions-object",children:(0,t.jsx)(s.code,{children:"testEnvironmentOptions"})})," en ligne dans un fichier, comme vous pouvez d\xe9finir l'environnement de test. Ceci est utile si vous voulez par exemple changer l'URL dans un seul fichier."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"/**\n * @jest-environment jsdom\n * @jest-environment-options {\"url\": \"https://jestjs.io/\"}\n */\n\ntest('utilisez jsdom et d\xe9finissez l\\'URL dans ce fichier de test', () => {\n  expect(window.location.href).toBe('https://jestjs.io/');\n});\n"})}),"\n",(0,t.jsx)(s.h3,{id:"tous-les-globaux-de-nodejs",children:"Tous les globaux de Node.js"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous utilisez la nouvelle impl\xe9mentation ",(0,t.jsx)(s.a,{href:"https://nodejs.org/en/blog/announcements/v18-release-announce/#fetch-experimental",children:(0,t.jsx)(s.code,{children:"fetch"})})," dans Node v18, vous avez peut-\xeatre remarqu\xe9 que cette fonction n'est pas disponible dans Jest. Le fait de devoir copier manuellement tous les globaux dans les globaux de test est un probl\xe8me de longue date. Avec Jest 28, ce n'est plus un probl\xe8me car nous inspectons maintenant l'environnement global dans lequel Jest lui-m\xeame s'ex\xe9cute, et copions tous les globaux qui manquent dans l'environnement de test."]}),"\n",(0,t.jsx)(s.h3,{id:"modules-ecmascript",children:"Modules ECMAScript"}),"\n",(0,t.jsxs)(s.p,{children:["Peu de choses ont chang\xe9 dans le support de Jest pour l'ESM natif depuis la sortie de Jest 27. Nous continuons \xe0 \xeatre bloqu\xe9s par ",(0,t.jsx)(s.a,{href:"https://github.com/nodejs/node/issues/37648",children:"la stabilisation de Node"}),", et nous esp\xe9rons que cette situation s'am\xe9liorera plus t\xf4t que tard !"]}),"\n",(0,t.jsx)(s.p,{children:"Cependant, nous avons pu ajouter quelques nouvelles fonctionnalit\xe9s dans Jest 28."}),"\n",(0,t.jsxs)(s.h4,{id:"les-url-de-data",children:["Les URL de ",(0,t.jsx)(s.code,{children:"data:"})]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/tbossi",children:"Tommaso Bossi"})," a contribu\xe9 au support des ",(0,t.jsxs)(s.a,{href:"https://nodejs.org/api/esm.html#data-imports",children:["URL de ",(0,t.jsx)(s.code,{children:"data"})]}),", ce qui signifie que vous pouvez maintenant d\xe9finir en ligne du JavaScript \xe0 ex\xe9cuter sans utiliser ",(0,t.jsx)(s.code,{children:"eval"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"importmetajest",children:(0,t.jsx)(s.code,{children:"import.meta.jest"})}),"\n",(0,t.jsxs)(s.p,{children:["Alors que vous avez pu acc\xe9der \xe0 ",(0,t.jsx)(s.code,{children:"jest"})," via ",(0,t.jsx)(s.code,{children:"importer {jest} depuis '@jest/globals'"})," dans Jest, nous avons re\xe7u des commentaires sur le fait que c'est moins ergonomique que la variable (apparemment mais pas vraiment) globale ",(0,t.jsx)(s.code,{children:"jest"})," disponible en CJS. Alors Jest 28 est livr\xe9 avec ",(0,t.jsx)(s.code,{children:"import.meta.jest"})," pour permettre un acc\xe8s plus facile."]}),"\n",(0,t.jsx)(s.h3,{id:"divers",children:"Divers"}),"\n",(0,t.jsx)(s.p,{children:"C'est beaucoup de fonctionnalit\xe9s, et ce sont mes points forts. Cependant, nous avons encore beaucoup d'autres choses que je vais passer rapidement :"}),"\n",(0,t.jsx)(s.h4,{id:"r\xe9solveurs-asynchrones",children:"R\xe9solveurs asynchrones"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/IanVS",children:"Ian VanSchooten"})," a contribu\xe9 au support de ",(0,t.jsx)(s.a,{href:"/docs/configuration#resolver-string",children:"r\xe9solveurs asynchrones"}),", qui permet \xe0 des outils comme ",(0,t.jsx)(s.a,{href:"https://vitejs.dev/",children:"Vite"})," d'avoir de meilleures int\xe9grations avec Jest."]}),"\n",(0,t.jsx)(s.h4,{id:"fichiers-de-configuration-asynchrones",children:"Fichiers de configuration asynchrones"}),"\n",(0,t.jsxs)(s.p,{children:["Si vous avez un travail asynchrone que vous voulez faire en utilisant ",(0,t.jsx)(s.code,{children:"setupFiles"}),", vous pouvez maintenant exporter une fonction ",(0,t.jsx)(s.code,{children:"async"}),", que Jest va appeler et attendre avant de charger des tests."]}),"\n",(0,t.jsxs)(s.p,{children:["Notez que cette fonctionnalit\xe9 n'est disponible que pour CJS. Pour ESM, nous vous recommandons d'utiliser ",(0,t.jsx)(s.code,{children:"de niveau sup\xe9rieur"})," \xe0 la place."]}),"\n",(0,t.jsxs)(s.h4,{id:"utilisation-de-globalthis",children:["Utilisation de ",(0,t.jsx)(s.code,{children:"globalThis"})]}),"\n",(0,t.jsxs)(s.p,{children:["En interne, Jest a utilis\xe9 ",(0,t.jsx)(s.code,{children:"global"})," pour se r\xe9f\xe9rer \xe0 l'environnement ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Global_object",children:"global"}),". Cependant, comme cela n'existe que dans Node, et pas dans les navigateurs (",(0,t.jsx)(s.code,{children:"window"}),"), cela a conduit \xe0 une incompatibilit\xe9 lorsque vous essayez d'utiliser les modules de Jest dans un autre environnement."]}),"\n",(0,t.jsxs)(s.p,{children:["Jest 28 utilise ",(0,t.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis",children:(0,t.jsx)(s.code,{children:"globalThis"})})," \xe0 la place, qui fonctionne dans tous les environnements."]}),"\n",(0,t.jsx)(s.h4,{id:"jsdom-19",children:"JSDOM 19"}),"\n",(0,t.jsxs)(s.p,{children:["Alors que, comme mentionn\xe9, Jest ne commercialise plus ",(0,t.jsx)(s.code,{children:"jest-environment-jsdom"})," dans l'installation par d\xe9faut, il est toujours activement maintenu. Dans le cadre de cela, Jest 28 a fait une mise \xe0 jour de ",(0,t.jsx)(s.code,{children:"jsdom@16"})," \xe0 ",(0,t.jsx)(s.code,{children:"jsdom@19"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"typescript",children:"TypeScript"}),"\n",(0,t.jsx)(s.p,{children:"Si vous utilisez Jest avec TypeScript, soit dans vos tests ou lors de l'\xe9criture de plugins tels que des ex\xe9cuteurs personnalis\xe9s, Jest 28 apporte de nombreuses am\xe9liorations \xe0 nos types. Voici une liste non exhaustive des changements dans Jest 28."}),"\n",(0,t.jsx)(s.h3,{id:"expect",children:(0,t.jsx)(s.code,{children:"expect"})}),"\n",(0,t.jsxs)(s.p,{children:["Lorsque vous utilisez ",(0,t.jsx)(s.code,{children:"attendez les propres types de"}),"(soit directement, ou via ",(0,t.jsx)(s.code,{children:"importer {expect} \xe0 partir de '@jest/globals'"}),"), il est enfin possible d'ajouter des matchers personnalis\xe9s. See our ",(0,t.jsx)(s.a,{href:"https://github.com/jestjs/jest/tree/main/examples/expect-extend",children:"example"})," for how to do this."]}),"\n",(0,t.jsx)(s.h3,{id:"plugins-personnalis\xe9s",children:"Plugins personnalis\xe9s"}),"\n",(0,t.jsx)(s.p,{children:"Si vous \xe9crivez un ex\xe9cuteur personnalis\xe9, un reporteur de test, un r\xe9solveur ou autre chose, nous exportons maintenant plus de types qui devraient vous aider \xe0 taper ces types plus correctement. Il s'agit d'une cible en mouvement, donc si vous \xeates l'auteur de quelque chose de branchable dans Jest et que les types ne sont pas aussi utiles qu'ils pourraient l'\xeatre, s'il vous pla\xeet remplir un probl\xe8me !"}),"\n",(0,t.jsx)(s.h3,{id:"jest-runner-tsd",children:(0,t.jsx)(s.code,{children:"jest-runner-tsd"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"https://github.com/jest-community/jest-runner-tsd",children:(0,t.jsx)(s.code,{children:"jest-runner-tsd"})})," est un ex\xe9cuteur personnalis\xe9 pour ex\xe9cuter des tests de type. C'est ce que Jest utilise lui-m\xeame pour tester nos types, et nous esp\xe9rons qu'il pourra \xe9galement \xeatre utilis\xe9 par d'autres ! Comme son nom l'indique, il est bas\xe9 sur ",(0,t.jsx)(s.a,{href:"https://npmjs.com/package/tsd",children:(0,t.jsx)(s.code,{children:"tsd"})}),", bien qu'il soit sous le capot utilise la fourche ",(0,t.jsx)(s.a,{href:"https://npmjs.com/package/tsd-lite",children:(0,t.jsx)(s.code,{children:"tsd-lite"})}),"."]}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsxs)(s.p,{children:["Toutes ces am\xe9liorations et corrections ont \xe9t\xe9 apport\xe9es par ",(0,t.jsx)(s.a,{href:"https://github.com/mrazauskas",children:"Tom Mrazauskas"}),". Merci beaucoup\xa0! \ud83d\udc4f"]}),"\n",(0,t.jsx)(s.p,{children:"Enfin, la version minimale de support de TypeScript est maintenant 4.3."}),"\n",(0,t.jsx)(s.h2,{id:"jest-light-runner",children:(0,t.jsx)(s.code,{children:"jest-light-runner"})}),"\n",(0,t.jsxs)(s.p,{children:["La derni\xe8re chose que nous voulons mettre en \xe9vidence dans ce blog, est un nouveau coureur Jest tr\xe8s sympa, cr\xe9\xe9 par ",(0,t.jsx)(s.a,{href:"https://github.com/nicolo-ribaudo",children:"Nicolo\u0300 Ribaudo"}),", appel\xe9 ",(0,t.jsx)(s.a,{href:"https://www.npmjs.com/package/jest-light-runner",children:(0,t.jsx)(s.code,{children:"jest-light-runner"})}),". Cela prend presque tout le DX Jest est connu, et acc\xe9l\xe8re sa vitesse en \xe9tant une abstraction plus petite sur le dessus de Node. Les tests de Babel sont devenus presque deux fois plus rapides apr\xe8s la migration. Tant qu'il y a des avertissements, l'existence de cet ex\xe9cuteur devrait rendre encore plus facile pour les personnes qui ont des modules de Node plus petite taille de tester pour choisir Jest. Merci, Nicol\xf2\xa0!"]}),"\n",(0,t.jsx)(s.h2,{id:"a-venir",children:"A venir"}),"\n",(0,t.jsxs)(s.p,{children:["Alors que Jest 28 est arriv\xe9 presque un an apr\xe8s Jest 27, Jest 29 arrivera plus t\xf4t, probablement dans quelques mois. Le plan actuel est alors d'avoir juste un changement de rupture (sauf suppression des versions du n\u0153ud), et c'est \xe0 d\xe9faut ",(0,t.jsx)(s.a,{href:"/docs/configuration#snapshotformat-object",children:(0,t.jsx)(s.code,{children:"snapshotFormat"})})," \xe0 ",(0,t.jsx)(s.code,{children:"{escapeString: false, printBasicPrototype: false}"}),". Cela rend les snapshots \xe0 la fois plus lisibles et plus faciles \xe0 coller."]}),"\n",(0,t.jsx)(s.p,{children:"Cela sera bien s\xfbr possible de passer outre si vous ne voulez pas changer, mais vous pouvez aussi utiliser ces options aujourd'hui si vous ne voulez pas attendre !"}),"\n",(0,t.jsx)(s.h2,{id:"remerciements",children:"Remerciements"}),"\n",(0,t.jsxs)(s.p,{children:["Jest 28 contient des contributions de plus de 60 personnes, dont plus de deux tiers sont les premiers contributeurs. Merci beaucoup \xe0 tous les contributeurs, anciens et nouveaux. Sans vous, le projet ne serait pas aussi bon qu'il est ! J'aimerais particuli\xe8rement remercier ",(0,t.jsx)(s.a,{href:"https://github.com/mrazauskas",children:"Tom Mrazauskas"})," et ",(0,t.jsx)(s.a,{href:"https://github.com/F3n67u",children:"Feng Yu"})," pour toutes leurs contributions, depuis le code, pour rendre le triage au d\xe9bogage, qui a fait de Jest 28 ce qu'il est. Merci! \ud83d\ude4f"]}),"\n",(0,t.jsx)(s.p,{children:"Merci d'avoir lu, et heureux Jesting! \ud83c\udccf"})]})}const c=function(e={}){const{wrapper:s}=Object.assign({},(0,i.ah)(),e.components);return s?(0,t.jsx)(s,Object.assign({},e,{children:(0,t.jsx)(d,e)})):d(e)}},3816:(e,s,n)=>{n.d(s,{Z:()=>t});const t=n.p+"assets/images/28-gh-actions-reporter-1ee03f15b770cc9e04bb15ad1a532e1d.png"},1670:(e,s,n)=>{n.d(s,{Zo:()=>a,ah:()=>r});var t=n(7378);const i=t.createContext({});function r(e){const s=t.useContext(i);return t.useMemo((()=>"function"==typeof e?e(s):{...s,...e}),[s,e])}const o={};function a({components:e,children:s,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||o:r(e),t.createElement(i.Provider,{value:a},s)}}}]);
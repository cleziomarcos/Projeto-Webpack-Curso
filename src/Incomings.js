const e=(e,t="00:00:00",a="000")=>{let o=t?Number(t.substring(0,2)):0,r=t?Number(t.substring(3,5)):0,i=t?Number(t.substring(6,8)):0,n=t&&t.length>8?Number(t.substring(9,t.length)):0;a&&(n=Number(a));let l=Number(e.substring(0,2)),s=Number(e.substring(3,5))-1,c=Number(e.substring(6,e.length));return Date.parse(new Date(c,s,l,o,r,i))+n},t=(e,t)=>(e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e),a=async(e,t)=>{if("string"!=typeof e||void 0===t)return void 0===t&&console.error("value error: ",t),"string"!=typeof e&&console.error("key error: ",e),error;const a=JSON.parse(localStorage.getItem(e)),o=JSON.stringify(t);localStorage.setItem(e,o);const r=localStorage.getItem(e);if(r===o){const e=JSON.parse(r);return console.log([{newValue:e},{oldValue:a}]),e}return t},o=async e=>{if(!e)return console.error(e),error;const t=JSON.parse(localStorage.getItem(e));return void 0===t?(console.error(t),!1):t},r=e=>-1!=window.self.location.search.indexOf(e),i=(((e=document)=>{!e.querySelector("#header_info span.icon.header.flags")&&e.querySelector("#header_info span.icon.header.flags_new")})(),(e=document)=>{if("www"===window.self.location.host.split(".")[0])return!1;if(-1==e.head.innerHTML.indexOf('{"player":{'))return!1;const t=e.head.innerHTML.substring(e.head.innerHTML.indexOf('{"player":{')).split(");")[0];return JSON.parse(t)}),n="undefined"==typeof game_data?i():game_data,l=(e=document)=>e.querySelector("#serverDate").textContent,s=(e=document)=>e.querySelector("#serverTime").textContent,c=(!i()||((e=document)=>{e.querySelector("#topContainer")})(),n.features.Premium.active),m=(n.player.villages,n.player.villages,n.features.FarmAssistent.active,n.features.FarmAssistent.active,-1!=self.location.search.indexOf("?t=")||-1!=self.location.search.indexOf("&t=")?self.location.search.match(/[t][=][0-9]{1,}/gi)[0]:""),d=(n.village.id,n.village.id,n.village.id,`/game.php?${m}${m?"&":""}village=${n.village.id}&screen=`),u=(e,t)=>`/game.php?${m}${m?"&":""}village=${e}&screen=${t}`,g=(location.href.substring(location.href.indexOf("screen")+7),!!localStorage.scav_active&&JSON.parse(localStorage.getItem("scav_active")),localStorage.getItem("world_speed")?Number(localStorage.getItem("world_speed")):0),p=localStorage.getItem("units_speed")?Number(localStorage.getItem("units_speed")):0;async function h(){const e={[n.player.id]:{villageIDs:[],villages:{},schedules:{},configs:{n_loop:0,n_atk:0,active:!0,farm:{active:!0,season:60,timer:45},msg:{place:!0},snob:{active:!0,season:3},scav:!0,main:!0,train:!0,command:!0,overview:45,map:45,report:45,mail:90,market:45,ranking:45,ally:45,forum:90,info_player:45,mentor:90,premium:45,premium:45,transfer:240,settings:45,place_command:90,place:45,event:90}}};return await a("players",e).then(((e,t)=>t||e))}localStorage.getItem("world_delay")&&Number(localStorage.getItem("world_delay")),localStorage.getItem("loyalty_per_hour")&&Number(localStorage.getItem("loyalty_per_hour")),localStorage.getItem("fake_limit")&&Number(localStorage.getItem("fake_limit")),localStorage.getItem("world_tech")&&Number(localStorage.getItem("world_tech")),1==g?t(1,5):Math.max(6+t(1,2),8-g+t(1,3));const v=async()=>await o("players")?await o("players").then((async(e,t)=>t||(e[n.player.id]?e:await h()))):await h(),f=async e=>await a("players",e).then(((e,t)=>t||e)),y=window.self.location.host.split(".")[0].match(/^[a-z]{2}/gi)[0],b={en:{monthLiteral:["jan","feb","mar","apr","may","jun","jul","ago","sep","out","nov","dec"],today:"today",tomorrow:"tomorrow",build:["Main","Barracks","Stable","Garage","First church","Church","Watchtower","smith","Snob","Place","Statue","Market","Wood","Stone","Iron","Farm","Storage","Hide","Wall","university"],main:["Edit settings for this village","Enable village building","Disable village construction","Enable or disable building this village","Save Template","Save this village's construction model","Model saved!"],units:["spear","sword","axe","archer","spy","light","marcher","heavy","ram","catapult","knight","snob"],market:{confirm:["sell","buy"]},snob:["coins"],snobInterface:["Coining Settings","Enables and disables automatic minting of coins","Enable coinage","Coinage information","No active premium account","minting works only up to 1 village. Minting leaving 4x in reserve. Above 1 village DO NOT mint without active premium account","Worlds with flags","(active premium account): Will mint leaving 4x in reserve for villages with flag with lower cost of active coins, and villages without flags with lower cost of coins will only mint 1x when some resource (wood, clay or iron) exceeds 95% of warehouse capacity","Worlds without flags","(active premium account): Mint leaving 4x in reserve for all villages"]},us:{monthLiteral:["jan","feb","mar","apr","may","jun","jul","ago","sep","out","nov","dec"],today:"today",tomorrow:"tomorrow",build:["Main","Barracks","Stable","Garage","First church","Church","Watchtower","smith","Snob","Place","Statue","Market","Wood","Stone","Iron","Farm","Storage","Hide","Wall","university"],main:["Edit settings for this village","Enable village building","Disable village construction","Enable or disable building this village","Save Template","Save this village's construction model","Model saved!"],units:["spear","sword","axe","archer","spy","light","marcher","heavy","ram","catapult","knight","snob"],market:{confirm:["sell","buy"]},snob:["coins"],snobInterface:["Coining Settings","Enables and disables automatic minting of coins","Enable coinage","Coinage information","No active premium account","minting works only up to 1 village. Minting leaving 4x in reserve. Above 1 village DO NOT mint without active premium account","Worlds with flags","(active premium account): Will mint leaving 4x in reserve for villages with flag with lower cost of active coins, and villages without flags with lower cost of coins will only mint 1x when some resource (wood, clay or iron) exceeds 95% of warehouse capacity","Worlds without flags","(active premium account): Mint leaving 4x in reserve for all villages"],incomings:["attack"]},br:{monthLiteral:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],today:"hoje",tomorrow:"amanhã",build:["Edifício Principal","Quartel","Estábulo","Oficina","Primeira igreja","Igreja","Torre de vigia","Ferreiro","Academia","Praça de reunião","Estátua","Mercado","Bosque","Poço de argila","Mina de ferro","Fazenda","Armazém","Esconderijo","Muralha","universidade"],main:["Editar configurações para esta aldeia","Desativado","Ativado","Ativar ou desativar a construção desta vila","Salvar modelo","Salvar modelo de contrução desta aldeia","Modelo salvo!"],units:["Lanceiro","Espada","Bárbaro","Arqueiro","Explorador","Cavalaria Leve","Arqueiro a cavalo","Cavalaria pesada","Ariete","Catapulta","Paladino","Nobre"],market:{confirm:["vender","comprar"]},snob:["moedas"],snobInterface:["Configurações da cunhagem","Ativa e desativa a cunhagem automática de moedas(todas as vilas)","Ativar cunhagem","Informações sorbe cunhagem","Sem conta premium ativa","a cunhagem funciona somente até 1 vila. Cunha deixando a 'reserva selecionada'. Acima de 1 vilas NÃO cunha sem conta premium ativa","Mundos com bandeiras","(conta premium ativa) : Irá cunhar deixando a 'reserva selecionada' nas aldeias com bandeira de menor custo de moedas ativa e, aldeias sem bandeiras de menor custo de moedas somente irá cunhar 1x quando algum recurso(madeira, argila ou ferro) ultrapassar 95% da capacidade do armazém","Mundos sem bandeiras","(conta premium ativa) : Irá cunhar deixando a 'reserva selecionada' para todas as aldeias","Selecione quantas vezes do custo de moeda reservar","Reservar","Nenhuma","Selecione o intervalo entre as cunhagens de 1 a 20 minutos","minutos"],incomings:["ataque"]},pt:{monthLiteral:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],today:"hoje",tomorrow:"amanhã",build:["Edifício Principal","Quartel","Estábulo","Oficina","Primeira igreja","Igreja","Torre de vigia","Ferreiro","Academia","Praça de reunião","Estátua","Mercado","Bosque","Poço de argila","Mina de ferro","Fazenda","Armazém","Esconderijo","Muralha","universidade"],main:["Editar configurações para esta aldeia","Desativado","Ativado","Ativar ou desativar a construção desta vila","Salvar modelo","Salvar modelo de contrução desta aldeia","Modelo salvo!"],units:["Lanceiro","Espada","Bárbaro","Arqueiro","Explorador","Cavalaria Leve","Arqueiro a cavalo","Cavalaria pesada","Ariete","Catapulta","Paladino","Nobre"],market:{confirm:["vender","comprar"]},snob:["moedas"],snobInterface:["Configurações da cunhagem","Ativa e desativa a cunhagem automática de moedas(todas as vilas)","Ativar cunhagem","Informações sorbe cunhagem","Sem conta premium ativa","a cunhagem funciona somente até 1 vila. Cunha deixando a 'reserva selecionada'. Acima de 1 vilas NÃO cunha sem conta premium ativa","Mundos com bandeiras","(conta premium ativa) : Irá cunhar deixando a 'reserva selecionada' nas aldeias com bandeira de menor custo de moedas ativa e, aldeias sem bandeiras de menor custo de moedas somente irá cunhar 1x quando algum recurso(madeira, argila ou ferro) ultrapassar 95% da capacidade do armazém","Mundos sem bandeiras","(conta premium ativa) : Irá cunhar deixando a 'reserva selecionada' para todas as aldeias","Selecione quantas vezes do custo de moeda reservar","Reservar","Nenhuma","Selecione o intervalo entre as cunhagens de 1 a 20 minutos","minutos"],incomings:["ataque"]},it:{monthLiteral:["gen","feb","mar","apr","may","jun","jul","aug","set","oct","nov","dec"],today:"oggi",tomorrow:"domani",build:["Quartier Generale","Caserma","Stalla","Officina","Prima Chiesa","Chiesa","Torre di Guardia","Fabbro","Accademia","Raduno","Statua","Mercato","Legno","Pietra","Ferro","Fattoria","Magazzino","Nascondiglio","Mura","Università"],main:["Modifica impostazioni per questo villaggio","Abilita la costruzione del villaggio","Disabilita la costruzione del villaggio","Abilita o disabilita la costruzione di questo villaggio","Salva modello","Salva il modello di costruzione di questo villaggio","Modello salvato!"],units:["Lanciere","Spadaccino","Guerriero con ascia","Arciere","Esploratore","Cavalleria leggera","Arciere a cavallo","Cavalleria pesante","Ariete","Catapulta","Paladino","Nobile"],market:{confirm:["vendi","compra"]},snob:["monete"],snobInterface:["Impostazioni di conio","Abilita e disabilita il conio automatico delle monete (tutti i villaggi)","Abilita conio","Informazioni sulle monete","Nessun account premium attivo","il conio funziona solo fino a 1 villaggio. Il conio esce dalla 'riserva selezionata'. Al di sopra di 1 villaggio NON coniare senza account premium attivo","Mondi con bandiere","(account premium attivo): verrà coniato lasciando la 'riserva selezionata' nei villaggi con la bandiera del costo in monete più basso attiva, e i villaggi senza le bandiere del costo in monete più basso conieranno solo 1x quando qualche risorsa (legno, argilla o ferro) supera il 95% di capacità del magazzino","Mondi senza bandiere","(conto premium attivo): verrà coniato lasciando 'riserva selezionata' per tutti i villaggi","Seleziona quante volte il costo della moneta da prenotare","Riserva","Nessuno","Seleziona l'intervallo tra il conio da 1 a 20 minuti","minuti"],incomings:["attacco"]}},w=(b[y].build[0],b[y].build[1],b[y].build[2],b[y].build[3],b[y].build[4],b[y].build[5],b[y].build[6],b[y].build[7],b[y].build[8],b[y].build[9],b[y].build[10],b[y].build[11],b[y].build[12],b[y].build[13],b[y].build[14],b[y].build[15],b[y].build[16],b[y].build[17],b[y].build[18],b[y].build[19],{spear:{trans:b[y].units[0],pop:1},sword:{trans:b[y].units[1],pop:1},axe:{trans:b[y].units[2],pop:1},archer:{trans:b[y].units[3],pop:1},spy:{trans:b[y].units[4],pop:2},light:{trans:b[y].units[5],pop:4},marcher:{trans:b[y].units[6],pop:5},heavy:{trans:b[y].units[7],pop:6},ram:{trans:b[y].units[8],pop:5},catapult:{trans:b[y].units[9],pop:8},knight:{trans:b[y].units[10],pop:10},snob:{trans:b[y].units[11],pop:100}}),S=t=>{if(-1!=(t=t.trim().toLowerCase()).indexOf(b[y].today.toLowerCase()))return l();if(-1!=t.indexOf(b[y].tomorrow.toLowerCase()))return new Date(e(l())+864e5).toLocaleDateString("pt-BR");if(t.match(/[0-9]{1,2}[.|/][0-9]{1,2}[.|/][0-9]{0,4}/gi)){const a=t.match(/[0-9]{1,2}[.|/][0-9]{1,2}[.|/][0-9]{0,4}/gi)[0].split(/[.|/]/);return a[2]||(a[2]=new Date(e(l())).getFullYear()),new Date(`${a[1]}.${a[0]}.${a[2]}`).toLocaleDateString("pt-BR")}const a=b[y].monthLiteral.indexOf(t.match(/[a-z]{3}/gi)[0]);return-1!=a?"Invalid Date"!=new Date(t.replace(b[y].monthLiteral[a].toLowerCase(),b.en.monthLiteral[a])).toLocaleDateString("pt-BR")?new Date(t.replace(b[y].monthLiteral[a].toLowerCase(),b.en.monthLiteral[a])).toLocaleDateString("pt-BR"):new Date(`${String(a+1).length>1?String(a+1):`0${String(a+1)}`}.${t.match(/[0-9]{1,2}/gi)[0]}.${t.match(/[0-9]{2,4}$/gi)[0]}`).toLocaleDateString("pt-BR"):void 0},x={snob:35,ram:30,sword:22,axe:18,heavy:11,light:10,spy:9},k=(e,t)=>{let a=e.split("|"),o=t.split("|");return Math.sqrt(Math.pow(parseInt(Number(a[0]))-parseInt(Number(o[0])),2)+Math.pow(parseInt(Number(a[1]))-parseInt(Number(o[1])),2))},A=(e,t,a=x)=>{let o=Math.round(Number(e)*(60*Number(a[t])/g/p));return Number(o)},q=(e,t,a)=>{let o=(e=>{const t=e.match(/[0-9]{1,}[:][0-9]{2}[:][0-9]{2}/gi);if(!t)return null;const a=t[t.length-1].split(":");return 3600*a[0]+60*a[1]+1*a[2]})(e),r=k(t,a),i="snob";for(var n in x){if(A(r,n)<o)return i;i=n}return i},_=(t,a)=>{let o=new Date(e(a[0],a[1])+1e3*t).toLocaleString("pt-BR").split(" ");return`${o[0].substring(0,5)} ${o[1]}`},$=(t,a)=>{let o=new Date(e(a[0],a[1])-1e3*t).toLocaleString("pt-BR").split(" ");return`${o[0].substring(0,5)} - ${o[1]}`},N=new class{css="div.loader {\n        position: fixed; \n        top: 50%;\n        left: 50%;\n        margin-left: -12px;\n        margin-top: -12px;\n        z-index: 14000;\n    }\n    div.fader {\n        position: fixed;\n        height: 100%;\n        width: 100%;\n        background-color: black;\n        top: 0px;\n        left: 0px;\n        opacity: 0.6;\n        z-index: 13000;\n    }\n    div.popup_box_container {\n        z-index: 12000\n    }";style=document.createElement("style");html='<div id="loader" class="loader"><img src="graphic/throbber.gif"></div>';element=document.createElement("div");insert=()=>{document.querySelector("div.fader")&&document.querySelector("div.fader").remove(),document.head.append(this.style),this.style.id="loader",this.style.innerHTML=this.css,document.body.append(this.element),this.element.id="fader",this.element.className="fader",this.element.innerHTML=this.html};remove=()=>{this.style.remove(),this.element.remove()}},M="www"===window.self.location.host.split(".")[0]||-1==document.head.innerHTML.indexOf('{"player":{')?void 0:JSON.parse(document.head.innerHTML.substring(document.head.innerHTML.indexOf('{"player":{')).split(");")[0]),C=!!document.querySelector("#home div.right.login div.wrap")&&document.querySelector("#home div.right.login div.wrap"),I=((()=>{if(!C)return!1;const e=C.querySelector("h2").innerText.replaceAll(","," ").trim();if(C.querySelector("a.world-select")){const t=C.querySelector("p").innerText.trim();return e.split(" ").filter((e=>-1!=t.indexOf(e))).reduce(((e,t)=>e+(t+" ")),"").trim()}const t=JSON.parse(localStorage.getItem("GO#Keys"));0!=t.length&&t.reduce(((t,a)=>(-1!=e.indexOf(a.player)&&(t=a.player),t)),!1)})(),()=>Number(M.group_id)),T=async(e,t)=>{try{const a=I(),o=await fetch(`${window.location.origin}${e}${t}&h=${n.csrf}&client_time=${Math.round(Date.now()/1e3)}`,{method:"GET",headers:{"upgrade-insecure-requests":"1"}}).then((e=>(console.log("Requisition status: "+e.status),e.text())));return a&&await(async e=>{const t=`${d}groups&ajax=load_villages_from_group`,a=new FormData;a.append("group_id",e),a.append("h",M.csrf);const o=new Request(t,{method:"POST",body:a,headers:{"tribalwars-ajax":1}});await fetch(o)})(a),o}catch(e){throw e}};async function L(e,t,a=[],o={}){if(0==a.length)return;if(console.log(a),!o.body){const e=new FormData;a.forEach((t=>{e.set(t[0],t[1])})),o.body=e}o.method||(o.method="POST");const r=`${window.location.origin}${e}${t}&h=${n.csrf}&client_time=${Math.round(Date.now()/1e3)}`,i=new Request(r,o);return await fetch(i)}const O=(e,t,a)=>e.textContent.trim()!=t&&(e.textContent=t),D=new class{style=e=>`font-weight: normal;\n    font-size: 14px;\n    position: fixed;\n    text-align: center;\n    width: 450px;\n    top: 200px;\n    left: 50%;\n    margin: 0 0 0 -205px;\n    cursor: pointer;\n    color: #fff;\n    border: 1px solid ${e[0]};\n    background: linear-gradient(to bottom, ${e[1]} 100%);\n    z-index: 100000;\n    box-shadow: 1px 1px 2px 0px rgb(60 30 0 / 35%);\n    border-radius: 5px;\n    text-shadow: 1px 1px 1px #000000;`;run=function(e,t,a){const o=document.createElement("div");document.querySelector("body").append(o),o.id="div_message",o.style=this.style(a),o.innerHTML=`<p style="padding: 5px; margin: 0;">${e}</p>`,o.addEventListener("click",this.remove),setTimeout((()=>{removeEventListener("click",this.remove),o&&o.remove()}),t)};remove=function(e){const t=document.createElement("div");removeEventListener("click",this.remove),t.remove()};success=(e,t)=>this.run(e,t,["#204900","#19a903 0%,#159002 44%,#0f6e00"]);error=(e,t)=>this.run(e,t,["#000","#a90329 0%,#8f0222 44%,#6d0019"]);warn=(e,t)=>this.run(e,t,["#492f00","#b59110 0%,#907102 44%,#6e3800"])};new class{comingAttack=null;newAttack=0;newSnob=0;tagAttacksNotPremium=async()=>{if(!c)try{await v().then((e=>{const t=e[n.player.id].villages[n.village.id].comingAttack;t&&document.querySelector("#quickedit-rename")&&this.tagQuickedit(t),t&&document.querySelector("#commands_incomings")&&this.tagCommands(t)}))}catch(e){throw new Error("Incomings Not Premium - Ticket",{cause:e})}};tagQuickedit=function(e){const t=document.querySelector("#quickedit-rename").dataset.id;e[t]&&e[t].ticket&&O(document.querySelector("#quickedit-rename"),e[t].ticket)};tagCommands=e=>Array.from(document.querySelector("#commands_incomings").querySelectorAll("tr.command-row")).forEach((t=>{const a=t.querySelector("span.quickedit").dataset.id;e[a]&&e[a].ticket&&O(t.querySelector("span.quickedit-label"),e[a].ticket)}));saveAttackNotPremium=async()=>{N.insert();try{return await T(d,"overview_villages").then((e=>(new DOMParser).parseFromString(e,"text/html"))).then((async e=>Array.from(e.querySelectorAll("tr.nowrap")).map((e=>e.querySelector("span.quickedit-vn"))).filter((e=>!!e.querySelector("img"))).map((e=>e.dataset.id)))).then((async e=>{const t=e;return await v().then((e=>{const a=e;return 0==t.length||t.forEach((async e=>{a[n.player.id].villages[e].comingAttack||(a[n.player.id].villages[e].comingAttack={});const t=a[n.player.id].villages[e].comingAttack;return await T(u(e,""),"overview").then((e=>(new DOMParser).parseFromString(e,"text/html"))).then((o=>{if(o.querySelector("#commands_incomings"))return Array.from(o.querySelector("#commands_incomings").querySelectorAll("tr.command-row")).reduce(((e,a)=>{const o=a.querySelector("span").dataset.id;return o&&(t[o]||(console.log(`include attack ID: ${o}`),t[o]={}),e.push(o)),e}),[]);delete a[n.player.id].villages[e].comingAttack})).then((async o=>{const r=o;let i=0;for(const o in t)Object.hasOwnProperty.call(t,o)&&(-1==r.indexOf(o)?delete t[o]:t[o].ticket||await T(u(e,""),`info_command&id=${o}&type=other`).then((e=>(new DOMParser).parseFromString(e,"text/html"))).then((async r=>{const c=Array.from(r.querySelector("#content_value > table.vis > tbody").querySelectorAll("tr")),m=Array.from(c[1].querySelectorAll("td"))[c[1].querySelectorAll("td").length-1].innerText;console.log(`Attacker: ${m}`);const d=Array.from(c[1].querySelectorAll("td"))[c[1].querySelectorAll("td").length-1].querySelector("a").href.split("=").pop();console.log(`Attacker ID : ${d}`);const u=Array.from(c[2].querySelectorAll("td"))[c[2].querySelectorAll("td").length-1].innerText.match(/\d+\|\d+/gi)[0];console.log(`Attaker Coord: ${u}`);const g=Array.from(c[2].querySelectorAll("td"))[c[2].querySelectorAll("td").length-1].querySelector("a").href.split("=").pop();console.log(`Attacker Village ID: ${g}`);const p=a[n.player.id].villages[e].coord;console.log(`Defender Coord: ${p}`);const h="pt"==n.market?new RegExp(/[(][0-9]{2}[:][0-9]{2}[:][0-9]{2}[)][:][0-9]{3}$/gi):new RegExp(/[0-9]{2}[:][0-9]{2}[:][0-9]{2}[:][0-9]{3}$/gi);let v=c.reduce(((e,t,a)=>(t.innerText.match(h)&&(e=a),e)),null);const f=[S(Array.from(c[v].querySelectorAll("td"))[1].innerText.replaceAll(c[v].innerText.match(/[0-9]{2}[:][0-9]{2}[:][0-9]{2}[:][0-9]{3}$/gi),"").trim()),c[v].innerText.match(/[0-9]{2}[:][0-9]{2}[:][0-9]{2}/gi)[0],c[v].innerText.match(/[0-9]{3}$/gi)[0]];console.warn(`Arrival( Date, Time, ms ): ${f}`);const y=c[v+1].querySelectorAll("td")[1].innerText;console.log(`Arrival Time: ${y}`);const b=A(k(u,p),q(y,u,p));console.log(`Time of travel(ms): ${b}`);const x=q(y,u,p);console.warn(`Slower unit(troop): ${x}`);const N=`${w[x].trans} | R:${l().split("/")[0]+"/"+l().split("/")[1]} ${s()} | Envio:${$(b,f)} | BackTime:${_(b,f)} |`;console.warn(`Ticket : ${N}`),t[o].ticket||(t[o].ticket=N,t[o].attacker=m,t[o].attackerID=d,t[o].attackerCoord=u,t[o].attackerVillageID=g,t[o].arrival=f,D.warn(`${i} ${i>1?"Ataques Atualizados":"Ataque Atualizado"}`,2e3),i++),a[n.player.id].villages[e].comingAttack=t})));return await f(a)}))})),a}))})).then((e=>(N.remove(),e)))}catch(e){throw new Error("Incomings Not Premium - Save Attack",{cause:e})}};checkComingAttacks=async()=>await v().then((async(e,t)=>{if(t)throw t;if(!e)return!1;const a=e;let o,i=Number(a[n.player.id].configs.n_atk),l=Number(document.querySelector("#incomings_amount").textContent);if(console.log("Check Coming Attacks..."),l>i){const e="",t=document.createElement("audio");document.querySelector("tbody").append(t),t.src=e,t.id="audio_atk",D.warn(`${l-i} ${l-i>1?"Novos Ataques":"Novo Ataque"} CHEGANDO!!!`,2e3)}for((e=>{const t=document.querySelector("#status");if(t)switch(e){case!0:t.innerHTML='<img class="go-logo-img" src="https://github.com/UnrecognizedBR/public/blob/master/icons/icon_green_60.png?raw=true" alt="let\'s Go!" style ="width: 69px; height: 60px; margin-left: 2px; margin-top: -2px; margin-bottom: -4px; margin-right: -35px;" >',console.log("♻️ Let's Go! ON");break;case!1:t.innerHTML='<img class="go-logo-img" src="https://github.com/UnrecognizedBR/public/blob/master/icons/icon_red_60.png?raw=true" alt="let\'s Go!" style ="width: 69px; height: 60px; margin-left: 2px; margin-top: -2px; margin-bottom: -4px; margin-right: -35px;" >',console.log("⛔️ Let's Go OFF!");break;case"await":t.innerHTML='<img class="go-logo-img" src="https://github.com/UnrecognizedBR/public/blob/master/icons/icon_yelow_60.png?raw=true" alt="let\'s Go!" style ="width: 69px; height: 60px; margin-left: 2px; margin-top: -2px; margin-bottom: -4px; margin-right: -35px;" >',console.log("⏳ Let's Go STOP!");break;case"command":t.innerHTML='<img class="go-logo-img" src="https://github.com/UnrecognizedBR/public/blob/master/icons/icon_yelow_60.png?raw=true" alt="let\'s Go!" style ="width: 69px; height: 60px; margin-left: 2px; margin-top: -2px; margin-bottom: -4px; margin-right: -35px;" >',console.log("⚔️ Let's Go Command!")}})("await");l!=i;)o=l,c?(console.log("Coming Attacks Premium Checking..."),await this.tagAttacksComingNPages()):(console.log("Coming Attacks Not Premium Checking..."),e=await this.saveAttackNotPremium().then((async(e,t)=>{if(t)throw t;return e[n.player.id]})),await e&&(a[n.player.id]=await e),await this.tagAttacksNotPremium()),l=Number(document.querySelector("#incomings_amount").textContent),l==o&&(i=l);return a[n.player.id].configs.n_atk=l,e=await f(a).then(((e,t)=>{if(t)throw t;if(e)return e[n.player.id]})),(this.newAttack||this.newSnob)&&(localStorage.setItem(`newAttack-${n.player.id}`,JSON.stringify(this.newAttack)),localStorage.setItem(`newSnob-${n.player.id}`,JSON.stringify(this.newSnob))),r("overview_villages&mode=incomings")&&window.location.reload(),await e&&(a[n.player.id]=await e),document.querySelector("#audio_atk")&&document.querySelector("#audio_atk").remove(),a[n.player.id]}));tagAttacksComing=(e=document)=>Array.from(e.querySelectorAll("#incomings_table > tbody tr.nowrap")).map((e=>Array.from(e.querySelectorAll("td")))).reduce(((e,t)=>{const a=t[0].querySelector("span.quickedit").dataset.id;console.log("Command ID: "+a);const o=t[1].querySelector("a").href.split("village=")[1].split("&")[0];console.log("Target ID: "+o);const r=t[1].innerText.match(/\d+\|\d+/gi).pop();console.log("Target: "+r);const i=t[2].querySelector("a").href.split("id=")[1].split("&")[0];console.log("Source ID: "+i);const n=t[2].innerText.match(/\d+\|\d+/gi).pop();console.log("Source: "+n);const c=t[5].innerText.trim(),m=S(c).split(" ").concat(c.match(/[0-9]{2}[:][0-9]{2}[:][0-9]{2}/gi)).concat(c.match(/[0-9]{3}$/gi));console.log("Arrival: "),console.table(m);const d=t[0].innerText.trim();console.log("Ticket: "+d);const u=t[6].innerText;console.log("Travel: "+u);const g=q(u,n,r);console.log("Unit Slower: "+g);const p=A(k(n,r),g);console.log(`Time of travel(ms): ${p}`);const h=d.toLocaleLowerCase()==b[y].incomings[0]?`${w[g].trans} | R:${l().split("/")[0]+"/"+l().split("/")[1]} ${s()} | Send:${$(p,m)} | BT:${_(p,m)} |`:d;return console.log("New Ticket: "+h),d.toLocaleLowerCase()===b[y].incomings[0].toLocaleLowerCase()&&(this.newAttack++,"snob"===g&&this.newSnob++,e.push({id:a,target:t[0],targetID:o,ticket:h})),e}),[]);tagAttacksComingNPages=async function(){try{await T(d,"overview_villages&mode=incomings&type=all&subtype=attacks&group=0&page=-1").then((async e=>(new DOMParser).parseFromString(e,"text/html"))).then((async e=>{const t=((e=document)=>e.querySelector(".paged-nav-item")?e.querySelectorAll(".paged-nav-item").length:0)(e),a=((e=document)=>!!e.querySelector(`#${r("snob")?"content_value":"pagination_form"} input[type=text]`)&&Number(e.querySelector(`#${r("snob")?"content_value":"pagination_form"} input[type=text]`).value))(e),o=Number(document.querySelector("#incomings_amount").textContent);console.log(t);const i=this.tagAttacksComing(e);if(0==t)return i;if(o<=1e3)return i;for(let e=1;e<t;e++)i.push(...await T(d,`overview_villages&mode=incomings&type=all&subtype=attacks&group=0&page=${e}`).then((e=>(new DOMParser).parseFromString(e,"text/html"))).then((e=>this.tagAttacksComing(e))));return await async function(e,t,a=1e3){e&&e!=a&&await L(d,`${t}&action=change_page_size`,[["page_size",a],["h",n.csrf]],{headers:{"upgrade-insecure-requests":"1"}})}(a,"overview_villages&mode=incomings"),i})).then((async e=>{if(0!=e.length)for(const t of e)console.log(t),await this.tagRequest(t.ticket,t.id)}))}catch(e){throw new Error("incomings Premium - Tag Attaks",{cause:e})}};tagRequest=async function(e,t){try{const a=await L(d,`info_command&ajaxaction=edit_other_comment&id=${t}`,[["text",e],["h",csrf_token]],{headers:{"tribalwars-ajax":"1","x-requested-with":"XMLHttpRequest"}});console.log(a.status,a.ok,a.message)}catch(e){throw new Error("Incomings Premium - Ticket",{cause:e})}}};
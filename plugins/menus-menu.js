import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╔════════════════════╗
║╭─────────────────╮
║├⫹⫺𝐇𝐎𝐋𝐀 @user
║╰─────────────────╯
╠════════════════════╝
║╭─────────────────╮
║├⫹⫺𝐃𝐮𝐞𝐧̃𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭:
║├⫹⫺ wa.me/523131937695
║├⫹⫺𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥:  
║├⫹⫺ wa.me/1(939)219-2298
║├⫹⫺𝐕𝐞𝐫𝐬𝐢𝐨𝐧: *1.1.0*
║├⫹⫺𝐅𝐞𝐜𝐡𝐚: ${date}
║├⫹⫺𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭: ${uptime}
║├⫹⫺𝐓𝐨𝐭𝐚𝐥 𝐑𝐞𝐠𝐬: ${rtotalreg}
║╰─────────────────╯
╠════════════════════
║╭─────────────────╮
║├⫹⫺🔱𝐋𝐞𝐯𝐞𝐥𝐮𝐩: ${level}
║├⫹⫺✨𝐄𝐱𝐩: ${exp}
║├⫹⫺🥇𝐑𝐚𝐧𝐠𝐨: ${role} 
║├⫹⫺💎𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞: ${limit}
║├⫹⫺🪙𝐌𝐚𝐱𝐂𝐨𝐢𝐧𝐬: ${money}
║├⫹⫺💰𝐌𝐨𝐧𝐞𝐝𝐚𝐬: ${joincount}
║╰─────────────────╯
╚════════════════════╝

╔════════════════════╗
╟⫹⫺𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑
╠════════════════════
╟⫹⫺🟢𝐞𝐧𝐚𝐛𝐥𝐞 
╟⫹⫺🔴𝐝𝐢𝐬𝐚𝐛𝐥𝐞
╚════════════════════╝

╔════════════════════╗
╟⫹⫺𝐆𝐑𝐔𝐏𝐎𝐒
╠════════════════════
╟⫹⫺ 
╟⫹⫺
╚════════════════════╝
 ╭━〔 ❄️ 𝐆𝐑𝐔𝐏𝐎𝐒 👥️〕
 menuff
 comandosff
 kick
 grupo
 promote
 demote
 demote
 link
 invocar
 setwelcome
 setbye
 hidetag
 fantasmas
 kickfantasmas
 ╰━━━━━━━━━━━━

 ╭━〔 ⚠️ *FREE FIRE* 🗺 〕
 menuff
 bermuda
 kalahari
 alpes
 purgatorio
 nexterra
 agendasemanal
  ╰━━━━━━━━━━━━

  ╭━〔 ⚔️ *BUSCAR VS PLANTILLAS* 🔱 〕
 buscarvsmasc
 bsmsac
 buscarvsfem
 bsfem
 buscarvsmixto
 bsmixto
  ╰━━━━━━━━━━━━

 *╔══ ≪ REGLAS , LISTA , FICHA 💻 ≫ ══╗*
Fem4
Fem6
FemInterna4
FemInterna6
Masc4
Masc6
MascInterna4
MascInterna6
Mixto4
Mixto6
MixtoInterna4
MixtoInterna6
apos
mapa
Ficha / Formulario Reclutamiento
Nexterra
Bermuda
Kalahary
Alpes
AgendaSemanal
*╚══ ≪ •❈• ≫ ══╝*

 *╔══ ≪ LINKS DE COMUS/APK Y DRIVES DZN 🎐 ≫ ══╗*
 SpamApk / WhatsApp
 SpamComu / Comunidades
 Spam2
 rcursosdzn
 drivesdzn
 dzn
 ApkEdits
 DriveEdits
 *╚══ ≪ •❈• ≫ ══╝*


 *╔══ ≪ STICKERS X FILTROS 🎐 ≫ ══╗*
 sticker | s *imagen o video*
 sticker | s *url de tipo jpg*
 emojimix *😺+😆*
 qc
 scircle | círculo *imagen*
 semoji | emoji *tipo emoji*
 attp *texto*
 attp2 *texto*
 ttp *texto*
 ttp2 *texto*
 ttp3 *texto*
 ttp4 *texto*
 ttp5 *texto*
 ttp6 *texto*
 dado
 stickermarker *efecto : responder a imagen*
 stickerfilter *efecto : responder a imagen*_
 cs *:* cs2_
 *╚══ ≪ •❈• ≫ ══╝*


 ╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕
mates
ppt
protiuto <@tag>
prostituta <@tag>
gay2 <@tag>
lesbiana <@tag>
pajero <@tag>
pajera <@tag>
puto <@tag>
puta <@tag>
manco <@tag>
manca <@tag>
rata <@tag>
negro <@tag>
negra <@tag>
fea <@tag>
feo <@tag>
sinpoto <@tag>
sintetas <@tag>
sinpito <@tag>
adoptada <@tag>
adoptado <@tag>
love
los10
suitpvp
slot
simisimi
pregunta
cuando
ship5
abrazo
ship2
formarpareja
verdad
reto
cancion
pista
ruleta
zodiac
odio
ship
sorteo
minovia
minovio
kchero
kchero
 ╰━━━━━━━━━━━━


 ╭━〔 🎭 *IMAGENES* 🎭 〕
goku
vegeta
lora
cr7
spiderman
batman
hellokitty
charmander
 ╰━━━━━━━━━━━━
 

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
play
play.1
play2.2
ytv.2
yta.2
playlist
spotify
spotifydl
tiktok
instagram
mediafire
gdrive
twitter
yta
ytv
imagen
iaimagen
pinterest
igstory
 ╰━━━━━━━━━━━━


*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
toimg
tomp3
toptt
tovideo
tts
 ╰━━━━━━━━━━━━

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
mensajefalso
logos
logocorazon
ytcomment
hornycard
itssostupid
pixelar
 ╰━━━━━━━━━━━━

*╭━〔 💌 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 💌〕*
piropo
consejo
fraseromantica
 ╰━━━━━━━━━━━━

 ╭━〔 ✨ 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ✨  〕*
xnxxsearch
google
letra
wikipedia
ytsearch
playstore
mercadolibre
pornhubsearch
 ╰━━━━━━━━━━━━

 ╭━〔 🌝 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 🌝 〕
clima
afk
ocr
calc
del
whatmusic
qrcode
traducir
 ╰━━━━━━━━━━━━

*╭━〔 💎 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 💎 〕*
verificar
unreg
minar
buy
work
mendigar
transfer
 ╰━━━━━━━━━━━━
 *╔══ ≪ FUNCIONES OWNERS 💎 ≫ ══╗*
join *enlace*
unete *enlace*
dardiamantes *cantidad*
darxp *cantidad*
dargatacoins *cantidad*
addprem | userpremium *@tag* *cantidad*
addprem2 | userpremium2 *@tag* *cantidad*
addprem3 | userpremium3 *@tag* *cantidad*
addprem4 | userpremium4 *@tag* *cantidad*
idioma | language
cajafuerte
comunicar | broadcastall | bc *texto*
broadcastchats | bcc *texto*
comunicarpv *texto*
broadcastgc *texto*
comunicargrupos *texto*
borrartmp | cleartmp
delexp *@tag*
deloptimuscoins *@tag*
deldiamantes *@tag*
reiniciar | restart
Actualizar | update
addprem | +prem *@tag*
delprem | -prem *@tag*
listapremium | listprem
añadirdiamantes *@tag cantidad*
añadirxp *@tag cantidad*
añadircoins *@tag cantidad*
*╚══ ≪ •❈• ≫ ══╝*`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|putobotenviaelmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

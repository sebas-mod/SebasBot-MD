import moment from 'moment-timezone';
import fetch from 'node-fetch';
const handler = async (m, { conn, args }) => {
   const res = await fetch('https://api.github.com/repos/Karim-off/DylanBot1');
   const json = await res.json();
   let txt = ` ◉ 𝑺𝒆𝒃𝒂𝒔𝑩𝒐𝒕🐥 ◉
𝑳𝒂𝒎𝒆𝒏𝒕𝒂𝒃𝒍𝒆𝒎𝒆𝒏𝒕𝒆 𝒆𝒍 𝒃𝒐𝒕 𝒆𝒍 𝒃𝒐𝒕 𝒆𝒔 𝒅𝒆 𝒖𝒔𝒐 𝒆𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒐 𝒔𝒐𝒍𝒐 𝒑𝒂𝒓𝒂 𝒖𝒏𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒚 𝒏𝒐 𝒆𝒔 𝑩𝒐𝒕 𝒅𝒆 𝒂𝒄𝒄𝒆𝒔𝒐 𝒑𝒖𝒃𝒍𝒊𝒄𝒐
    🐥 𝐓𝐢𝐞𝐧𝐞𝐬 𝐝𝐮𝐝𝐚𝐬 ? 𝐜𝐨𝐧𝐭𝐚𝐜𝐭𝐚 𝐚𝐥 𝐞𝐪𝐮𝐢𝐩𝐨 𝐜𝐫𝐞𝐚𝐝𝐨𝐫 𝐮𝐬𝐚 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 #𝙾𝚆𝙽𝙴𝚁︎ 🐥  `;
   await conn.sendMessage(m.chat, {text: txt.trim(), mentions: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), contextInfo: {forwardingScore: 9999999, isForwarded: true, mentionedJid: [...txt.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net'), "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "renderLargerThumbnail": true, "title": global.titulowm2, "containsAutoReply": true, "mediaType": 1, "thumbnail": imagen6, "mediaUrl": global.md, "sourceUrl": global.md}}}, {quoted: m});
};
handler.help = ['scbot'];
handler.tags = ['info'];
handler.command = /^(instalarbot|descargarbot)$/i;
export default handler;
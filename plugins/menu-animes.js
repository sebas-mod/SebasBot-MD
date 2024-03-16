import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen2;
    // let vn = './media/menu.mp3'
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━❍𝐒𝐄𝐁𝐀𝐒 𝐁𝐎𝐓❍━━━━━┓
┃🐣𝐇𝐎𝐋𝐀 @${m.sender.split`@`[0]}
┣━━━━━━━━━━━━━━━━━━
┃╭━━━━━━━━━━━━━━╮
┃┃𝐃𝐮𝐞𝐧̃𝐨 𝐃𝐞𝐥 𝐁𝐨𝐭:
┃┃wa.me/
┃┃𝐁𝐨𝐭 𝐎𝐟𝐢𝐜𝐢𝐚𝐥: 
┃┃wa.me/
┃┃𝐕𝐞𝐫𝐬𝐢𝐨𝐧: *2.1.0* 
┃┃𝐅𝐞𝐜𝐡𝐚: ${date}
┃┃𝐓𝐢𝐞𝐦𝐩𝐨 𝐀𝐜𝐭: ${uptime}
┃┃𝐏𝐚𝐢𝐬: ${nombreLugar} 
┃┃𝐂𝐢𝐮𝐝𝐚𝐝: ${ciudad}
┃╰━━━━━━━━━━━━━━━╯
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐌𝐄𝐍𝐔 𝐀𝐍𝐈𝐌𝐄
┣━━━━━━━━━━━━━━━━━━━━
┣・🌸𝐥𝐨𝐥𝐢𝐯𝐢𝐝
┣・🌸𝐥𝐨𝐥𝐢 
┣・🌸𝐩𝐩𝐜𝐨𝐮𝐩𝐥𝐞 
┣・🌸𝐧𝐞𝐤𝐨 
┣・🌸𝐰𝐚𝐢𝐟𝐮 
┣・🌸𝐚𝐤𝐢𝐫𝐚 
┣・🌸𝐚𝐤𝐢𝐲𝐚𝐦𝐚 
┣・🌸𝐚𝐧𝐧𝐚 
┣・🌸𝐚𝐬𝐮𝐧𝐚 
┣・🌸𝐚𝐲𝐮𝐳𝐚𝐰𝐚 
┣・🌸𝐛𝐨𝐫𝐮𝐭𝐨 
┣・🌸𝐜𝐡𝐢𝐡𝐨 
┣・🌸𝐜𝐡𝐢𝐭𝐨𝐠𝐞 
┣・🌸𝐝𝐞𝐢𝐝𝐚𝐫𝐚 
┣・🌸𝐞𝐫𝐳𝐚 
┣・🌸𝐞𝐥𝐚𝐢𝐧𝐚 
┣・🌸𝐞𝐛𝐚 
┣・🌸𝐞𝐦𝐢𝐥𝐢𝐚 
┣・🌸𝐡𝐞𝐬𝐭𝐢𝐚 
┣・🌸𝐡𝐢𝐧𝐚𝐭𝐚 
┣・🌸𝐢𝐧𝐨𝐫𝐢 
┣・🌸𝐢𝐬𝐮𝐳𝐮 
┣・🌸𝐢𝐭𝐚𝐜𝐡𝐢 
┣・🌸𝐢𝐭𝐨𝐫𝐢 
┣・🌸𝐤𝐚𝐠𝐚 
┣・🌸𝐤𝐚𝐠𝐮𝐫𝐚 
┣・🌸𝐤𝐚𝐨𝐫𝐢 
┣・🌸𝐤𝐞𝐧𝐞𝐤𝐢 
┣・🌸𝐤𝐨𝐭𝐨𝐫𝐢 
┣・🌸𝐤𝐮𝐫𝐮𝐦𝐢 
┣・🌸𝐦𝐚𝐝𝐚𝐫𝐚 
┣・🌸𝐦𝐢𝐤𝐚𝐬𝐚 
┣・🌸𝐦𝐢𝐤𝐮 
┣・🌸𝐦𝐢𝐧𝐚𝐭𝐨 
┣・🌸𝐧𝐚𝐫𝐮𝐭𝐨 
┣・🌸𝐧𝐞𝐳𝐮𝐤𝐨 
┣・🌸𝐬𝐚𝐠𝐢𝐫𝐢 
┣・🌸𝐬𝐚𝐬𝐮𝐤𝐞 
┣・🌸𝐬𝐚𝐤𝐮𝐫𝐚 
┣・🌸𝐜𝐨𝐬𝐩𝐥𝐚𝐲
┗━━━━━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(animes|menuanimes)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}

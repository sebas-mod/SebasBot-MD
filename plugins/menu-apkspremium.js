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
┣・𝐈𝐌𝐏𝐎𝐑𝐓𝐀𝐍𝐓𝐄!!
┣━━━━━━━━━━━━━━━━━━━━
┣・*𝙴𝚜𝚝𝚎 𝚎𝚜 𝚎𝚕 𝚖𝚎𝚗𝚞*
┣・*𝚍𝚎 𝚊𝚙𝚔𝚜 𝚙𝚛𝚎𝚖𝚒𝚞𝚖 𝚙𝚘𝚛*
┣・*𝚎𝚕 𝚖𝚘𝚖𝚎𝚗𝚝𝚘 𝚗𝚘 𝚑𝚊𝚢 𝚖𝚞𝚌𝚑𝚊𝚜*
┣・*𝚊𝚙𝚔𝚜 𝚙𝚎𝚛𝚘 𝚜𝚎 𝚒𝚛á*
┣・*𝚜𝚎 𝚒𝚛𝚊𝚗 𝚊𝚞𝚖𝚎𝚗𝚝𝚊𝚗𝚍𝚘*
┣・*𝚙𝚘𝚌𝚘 𝚊 𝚙𝚘𝚌𝚘*
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐀𝐃𝐕𝐄𝐑𝐓𝐄𝐍𝐂𝐈𝐀!!
┣━━━━━━━━━━━━━━━━━━━━
┣・*𝚞𝚜𝚊𝚕𝚘 𝚋𝚊𝚓𝚘 𝚝𝚞 𝚙𝚛𝚘𝚙𝚒𝚘*
┣・*𝚛𝚒𝚎𝚜𝚐𝚘 𝚂𝚎𝚋𝚊𝚜 𝙱𝚘𝚝*
┣・*𝚗𝚘 𝚜𝚎 𝚑𝚊𝚌𝚎 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚊𝚋𝚕𝚎*
┣・*𝚍𝚎 𝚗𝚊𝚍𝚊 𝚚𝚞𝚎 𝚑𝚊𝚢𝚊*
┣・*𝚙𝚊𝚜𝚊𝚍𝚘 𝚌𝚘𝚗 𝚊𝚕𝚐𝚞𝚗 𝚏𝚊𝚕𝚕𝚘*
┣・*𝚘 𝚙𝚛𝚘𝚋𝚕𝚎𝚖𝚊 𝚚𝚞𝚎 𝚝𝚎𝚗𝚐𝚊*
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐀𝐏𝐊𝐒 𝐏𝐑𝐄𝐌𝐈𝐔𝐌
┣━━━━━━━━━━━━━━━━━━━━
┣・🍭𝐀𝐩𝐤𝐝𝐲𝐧𝐚𝐦𝐢𝐜𝐢𝐬𝐥𝐚𝐧𝐝
┣・🍭𝐀𝐩𝐤𝐜𝐚𝐩𝐜𝐮𝐭 
┣・🍭𝐀𝐩𝐤𝐛𝐞𝐚𝐜𝐡𝐛𝐮𝐠𝐠𝐲 
┣・🍭𝐀𝐩𝐤𝐦𝐢𝐧𝐞𝐜𝐫𝐚𝐟𝐭 
┣・🍭𝐀𝐩𝐤𝐩𝐢𝐜𝐬𝐚𝐫𝐭 
┣・🍭𝐀𝐩𝐤𝐩𝐨𝐩𝐩𝐲𝐩𝐥𝐚𝐲𝐭𝐢𝐦𝐞 
┣・🍭𝐀𝐩𝐤𝐬𝐩𝐚𝐦 
┣・🍭𝐀𝐩𝐤𝐬𝐩𝐨𝐭𝐢𝐟𝐲 
┣・🍭𝐀𝐩𝐤𝐲𝐨𝐮𝐭𝐮𝐛𝐞𝐦𝐮𝐬𝐢𝐜
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
handler.command = /^(Menuapks|menuapks|menuapk)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
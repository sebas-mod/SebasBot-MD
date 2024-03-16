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
┣・𝐅𝐑𝐄𝐄 𝐅𝐈𝐑𝐄
┣━━━━━━━━━━━━━━━━━━━━
┣・🗺️𝐦𝐞𝐧𝐮𝐟𝐟
┣・🗺️𝐛𝐞𝐫𝐦𝐮𝐝𝐚
┣・🗺️𝐤𝐚𝐥𝐚𝐡𝐚𝐫𝐢
┣・🗺️𝐚𝐥𝐩𝐞𝐬
┣・🗺️𝐩𝐮𝐫𝐠𝐚𝐭𝐨𝐫𝐢𝐨
┣・🗺️𝐧𝐞𝐱𝐭𝐞𝐫𝐫𝐚
┣・🗺️𝐚𝐠𝐞𝐧𝐝𝐚𝐬𝐞𝐦𝐚𝐧𝐚𝐥
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐃𝐙𝐍/𝐒𝐏𝐀𝐌
┣━━━━━━━━━━━━━━━━━━━━
┣・💫𝐒𝐩𝐚𝐦𝟏
┣・💫𝐒𝐩𝐚𝐦𝟐
┣・💫𝐃𝐫𝐢𝐯𝐞𝐬𝐝𝐳𝐧
┣・💫𝐀𝐩𝐤𝐞𝐝𝐢𝐭𝐬
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐁𝐔𝐒𝐂𝐀𝐑 𝐕𝐒 𝐏𝐋𝐀𝐍𝐓𝐈𝐋𝐋𝐀𝐒
┣━━━━━━━━━━━━━━━━━━━━
┣・🔱𝐛𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐦𝐚𝐬𝐜
┣・🔱𝐛𝐬𝐦𝐬𝐚𝐜
┣・🔱𝐛𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐟𝐞𝐦
┣・🔱𝐛𝐬𝐟𝐞𝐦
┣・🔱𝐛𝐮𝐬𝐜𝐚𝐫𝐯𝐬𝐦𝐢𝐱𝐭𝐨
┣・🔱𝐛𝐬𝐦𝐢𝐱𝐭𝐨
┣・🔱𝐟𝐨𝐫𝐦𝐮𝐥𝐚𝐫𝐢𝐨
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐕𝐄𝐑𝐒𝐔𝐒 𝐅𝐄𝐌
┣━━━━━━━━━━━━━━━━━━━━
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
┣・💟𝐟𝐞𝐦𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
┣・💟𝐟𝐞𝐦𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
┣・💟𝐟𝐞𝐦𝟖𝐯𝐬𝟖
┣・💟𝐟𝐞𝐦𝟏𝟔𝐯𝐬𝟏𝟔
┣・💟𝐅𝐞𝐦𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟒
┣・💟𝐅𝐞𝐦𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟔
┣・💟𝐌𝐢𝐱𝐭𝐨𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟒
┣・💟𝐌𝐢𝐱𝐭𝐨𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟔
┗━━━━━━━━━━━━━━━━━━━━┛


┏━━━━━━━━━━━━━━━━━━━━┓
┣・𝐕𝐄𝐑𝐒𝐔𝐒 𝐌𝐀𝐒𝐂
┣━━━━━━━━━━━━━━━━━━━━
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟒
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟔
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟏𝟖
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟎
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟐𝟐
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝟎𝟎
┣・💟𝐦𝐚𝐬𝐜𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐨𝐯𝐬
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟒
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟔
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟏𝟖
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟎
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟐𝟐
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝟎𝟎
┣・💟𝐦𝐚𝐬𝐜𝐯𝐢𝐯𝐢𝐝𝐨𝐯𝐬
┣・💟𝐦𝐚𝐬𝐜𝟖𝐯𝐬𝟖
┣・💟𝐦𝐚𝐬𝐜𝟏𝟔𝐯𝐬𝟏𝟔
┣・💟𝐌𝐚𝐬𝐜𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟒
┣・💟𝐌𝐚𝐬𝐜𝐈𝐧𝐭𝐞𝐫𝐧𝐚𝟔
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
handler.command = /^(Menuff|menuff|comandosff)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
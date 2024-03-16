const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[❗𝐀𝐕𝐈𝐒𝐎❗] 𝐄𝐬𝐭𝐞 𝐜𝐡𝐚𝐭 𝐟𝐮𝐞 𝐛𝐚𝐧𝐞𝐚𝐝𝐨 𝐜𝐨𝐧 𝐞𝐱𝐢𝐭𝐨*\n\n*—◉ 𝐞𝐥 𝐛𝐨𝐭 𝐧𝐨 𝐫𝐞𝐬𝐩𝐨𝐧𝐝𝐞𝐫𝐚 𝐚 𝐧𝐢𝐧𝐠𝐮𝐧 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐡𝐚𝐬𝐭𝐚 𝐝𝐞𝐬𝐛𝐚𝐧𝐞𝐚𝐫 𝐞𝐬𝐭𝐞 𝐜𝐡𝐚𝐭*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;

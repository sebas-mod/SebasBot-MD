const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `*@LUDMI_SHOP_:* ${pesan}`;
  let teks = `*😎𝐅𝐀𝐂𝐇𝐀𝐒 𝐀𝐂𝐓𝐈𝐕𝐄𝐍𝐒𝐄 𝐎 𝐂𝐔𝐏𝐎*\n\n ${oi}\n\n- ̗̀  😝 𝐅𝐮𝐭𝐮𝐫𝐨𝐬 𝐜𝐮𝐩𝐨𝐬 !\n`;
  for (const mem of participants) {
    teks += `│🐣 @${mem.id.split('@')[0]}\n`;
  }
  teks += `*└* 𝑺𝒆𝒃𝒂𝒔𝑩𝒐𝒕 🐣\n\n*🐣*`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
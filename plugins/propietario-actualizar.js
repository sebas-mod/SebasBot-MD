import { execSync } from 'child_process';

const handler = async (m, { conn, text }) => {
  try {
          const stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''));
          let messager = stdout.toString()
          if (messager.includes('Already up to date.')) messager = '_*< PROPIETARIO - UPDATE />*_\n\n🐣 𝑵𝒐 𝒉𝒂𝒚 𝒂𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏𝒆𝒔 𝒑𝒆𝒏𝒅𝒊𝒆𝒏𝒕𝒆𝒔.'
          if (messager.includes('Updating')) messager = '_*< PROPIETARIO - ACTUALIZAR />*_\n\n🐣 𝑨𝒄𝒕𝒖𝒂𝒍𝒊𝒛𝒂𝒄𝒊𝒐𝒏 𝑭𝒊𝒏𝒂𝒍𝒊𝒛𝒂𝒅𝒂 𝒆𝒙𝒊𝒕𝒐𝒔𝒂𝒎𝒆𝒏𝒕𝒆.\n\n' + stdout.toString()
          conn.reply(m.chat, messager, m);
  } catch {      
 try {    
      const status = execSync('git status --porcelain');
      if (status.length > 0) {
        const conflictedFiles = status
          .toString()
          .split('\n')
          .filter(line => line.trim() !== '')
          .map(line => {
            if (line.includes('.npm/') || line.includes('.cache/') || line.includes('tmp/') || line.includes('MysticSession/') || line.includes('npm-debug.log')) {
              return null;
            }
            return '*→ ' + line.slice(3) + '*';
          })
          .filter(Boolean);
        if (conflictedFiles.length > 0) {
          const errorMessage = `_*< PROPIETARIO - ACTUALIZAR />*_\n\n*[ ℹ️ ] Se han hecho cambios locales en archivos del bot que entran en conflicto con las actualizaciones del repositorio. Para actualizar, reinstala el bot o realiza las actualizaciones manualmente.*\n\n*Archivos en conflicto:*\n\n${conflictedFiles.join('\n')}.*`;
          await conn.reply(m.chat, errorMessage, m);  
        }
      }
  } catch (error) {
    console.error(error);
    let errorMessage2 = '_*< PROPIETARIO - ACTUALIZAR />*_\n\n*[ ℹ️ ] Ocurrió un error. Por favor, inténtalo de nuevo más tarde.*';
    if (error.message) {
      errorMessage2 += '\n*- Mensaje de error:* ' + error.message;
    }
    await conn.reply(m.chat, errorMessage2, m);
  }
 }
};
handler.command = /^(update|actualizar|gitpull)$/i;
handler.rowner = true;
export default handler;

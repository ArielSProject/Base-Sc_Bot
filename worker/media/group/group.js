  const { getBuffer } = require('../../lib/myfunc')
  const groupResponse = async (sock, update) => {
   const metadata = await sock.groupMetadata(update.id)   
   for (let participant of update.participants) {
    try{
       let metadata = await sock.groupMetadata(update.id)
       let participants = update.participants
       for (let num of participants) {
         try {
           ppuser = await sock.profilePictureUrl(num, 'image')
         } catch {
           ppuser = 'https://telegra.ph/file/775417d97825f5ee9a96e.jpg'
         }
         if (update.action == 'add') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Welcome 👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
         update.id, 
         { 
         caption: `Hello @${num.split("@")[0]}\n\nNama Group : *${metadata.subject}*\n\nID : ${metadata.id}\n\nMember : *${metadata.participants.length}* Orang\n\nDeskripsi : ${metadata.desc}`,
         image: { url: ppuser },
         buttons: button, 
         footer: 'Ariel Sandy Permana', mentions: [num] })
         } 
        else 
        if (update.action == 'remove') {
          var button = [
             { 
              buttonId: `ahsudahlah`, 
              buttonText: { 
               displayText: `Bye 👋` 
               }, type: 1 
              }
             ]
        sock.sendMessage(
           update.id, 
          { 
           caption: `@${num.split("@")[0]} Keluar Dari Group *${metadata.subject}*`, 
           image: { url: ppuser },
           buttons: button, 
           footer: 'Ariel Sandy Permana', 
           mentions: [num] 
             }
             )
             }
            }
        } catch (err) {
        console.log(err)
      }
    }   
  }
module.exports = { groupResponse }  

const fs = require("fs")
const chalk = require("chalk")

global.thum = fs.readFileSync("./worker/media/image/thumb.jpg")
global.log0 = fs.readFileSync("./worker/media/image/Ariel.jpg")
global.err4r = fs.readFileSync("./worker/media/image/thumb.jpg")
global.owner = ['6285321822875','6282118022072']
global.arielindahsp = ['120363041763043729']
global.arielsandypermanaindahnc = '6282118022072'

global.rkyt = []
global.banUser = ['628123456789@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us'] 

global.footer = "Aespi Botz"
global.fake = "Aespi Botz"
global.namebot = "Aespi Botz"
global.packname = "Aespi Botz"
global.packname2 = "Ariel SP Kece No Counter Dek\n\nSave Nomor Owner Ya Kak\n\n082118022072\n\nMakasih Kak"
global.author = "Ariel SP"
global.email = "arielspaespibot@gmail.com"
global.game = "Aespi Game"
global.nameown = "Ariel SP"
global.resultwibu = "Nih kak"
global.nameyt = "ArielSP Sus"
global.ytLu = "https://youtube.com/c/ArielSPSus"
global.sessionName = "Aespi-MD"
global.linkgrupss = "https://chat.whatsapp.com/GDdlaFZDuLZFN32LqFhhWK"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

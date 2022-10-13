process.on('uncaughtException', console.error) //Safe Log Error
/*-----[⬇️MODULE]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
require("../connect/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const yogipw = require("tod-api")
const remobg = require('remove.bg')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const maker = require('mumaker')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const did = require('didyoumean') 
var sim = require('similarity') 
const ra = require('ra-api') 
const threshold = 0.72;
const cheerio = require('cheerio')
const Jimp = require('jimp')
const request = require('request');
const hikki = require('hikki-me') 
const bocil = require('@bochilteam/scraper') 
const { bioskop, bioskopNow, latinToAksara, aksaraToLatin, gempa, gempaNow, jadwalTV, listJadwalTV, jadwalsholat} = require ('@bochilteam/scraper') 
const IkyyClient = require("ikyy");
const Ikyy = new IkyyClient();
const Database = require('./lib/database.js')
const dbs = new Database()
const ms = require('ms') 

/*-----[⬇️Scrape & Function]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const { TiktokDownloader } = require('./lib/tiktokdl')
const Searchnabi  = require('./lib/kisahnabi.js')
const { mediafireDl } = require('./lib/mediafireDl')
const cerpen = require('./lib/scrape/cerpen.js')
const { textpro } = require('./lib/textpro') 

//Function
const { color, bgcolor } = require("./lib/color")
let hit = [];
const { addCmd, AddHituser } = require("./lib/hitbot.js");
let { msgFilter } = require('./lib/antispam')
let _sewa = require("./lib/sewa");
let { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/list.js')
const  { ownerMenu, textproMenu, allmenu, otherMenu, storageMenu, randomtextMenu, convertMenu, searchMenu, downloadMenu, grupMenu, toolsMenu, funMenu, stickerTelegramMenu, infoMenu, tqto, animeMenu, stalkMenu, storeMenu} = require(`./src/commands/export.js`)
/*-----[⬇️DATABASE]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let sewa = JSON.parse(fs.readFileSync('./worker/src/sewa.json'));
let commund = JSON.parse(fs.readFileSync('./worker/src/dashboard/datacmd.json'));
let hitbot = JSON.parse(fs.readFileSync('./worker/src/dashboard/command.json'));
let userHit = JSON.parse(fs.readFileSync('./worker/src/dashboard/userhit.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./worker/src/list/list.json'));
let bad = JSON.parse(fs.readFileSync('./worker/src/Toxic/bad.json'))
let mute = JSON.parse(fs.readFileSync('./worker/src/mute/mute.json'));
 const tebakkimia = fs.readFileSync('./worker/src/game/result/tebakkimia.json');
 const asahotak = fs.readFileSync('./worker/src/game/result/asahotak.json');
 const susunkata = fs.readFileSync('./worker/src/game/result/susunkata.json');
 const tebakkalimat = fs.readFileSync('./worker/src/game/result/tebakkalimat.json');
 const tekateki = fs.readFileSync('./worker/src/game/result/tekateki.json');
 const caklontong = fs.readFileSync('./worker/src/game/result/caklontong.json');
 const tebakbendera = fs.readFileSync('./worker/src/game/result/tebakbendera.json');
 const tebakanime = fs.readFileSync('./worker/src/game/result/tebakanime.json');
 const tebakkabupaten = fs.readFileSync('./worker/src/game/result/tebakkabupaten.json');
 const tebaklagu = fs.readFileSync('./worker/src/game/result/tebaklagu.json');
 const tebaklirik = fs.readFileSync('./worker/src/game/result/tebaklirik.json');
//ListMenu
//Game
const _tbkkimia = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebakkimia.json'))
const _asahotak = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/asahotak.json'))
const _susunkata = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/susunkata.json'))
const _tebakkalimat = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebakkalimat.json'))
const _tekateki = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tekateki.json'))
const _caklontong = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/caklontong.json'))
const _tebakbendera = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebakbendera.json'))
const _tebakanime = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebakanime.json'))
const _tebakkabupaten = JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebakkabupaten.json'))
const _tebaklirik= JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebaklirik.json'))
const _tebaklagu= JSON.parse(fs.readFileSync('./worker/src/game/dbgame/tebaklagu.json'))
let tebakgambar = []
let gamewaktu = 50
let waktu = 60000

global.db = JSON.parse(fs.readFileSync('./worker/src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    grup : {}, 
    ...(global.db || {})
}
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let vote = db.others.vote = []
let absen = db.others.absen = []
//WAKTU INDONESIA
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
/*-----[⬇️FUNCTIONAL]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
if(wib < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🌘'
                                        }
if(wib < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌇'
                                         }
if(wib < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌖'
                                         }
if(wib < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
                                         }
if(wib < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌅'
                                         }
if(wib < "05:00:00"){
var ucapanWaktu = 'Selamat Dini Hari 🌑'
                                         }

var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const emo = ['❤', '😍', '😘', '💕', '😻', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '💏', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '💋', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍💋‍👨', '👬', '👭', '👫', '🥰', '😚', '😙', '👄', '🌹', '😽', '❣️', '❤️', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🙂', '😛', '😝', '😜', '🤪', '🤗', '😺', '😸', '😹', '☺', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👯‍♂️', '👯', '👯‍♀️', '💃', '🕺', '🔥', '⭐️', '✨', '💫', '🎇', '🎆', '🍻', '🥂', '🍾', '🎂', '🍰', '☹', '😣', '😖', '😫', '😩', '😢', '😭', '😞', '😔', '😟', '😕', '😤', '😠', '😥', '😰', '😨', '😿', '😾', '😓', '🙍‍♂', '🙍‍♀', '💔', '🙁', '🥺', '🤕', '☔️', '⛈', '🌩', '🌧,😯', '😦', '😧', '😮', '😲', '🙀', '😱', '🤯', '😳', '❗', '❕', '🤬', '😡', '😠', '🙄', '👿', '😾', '😤', '💢', '👺', '🗯️', '😒', '🥵', '👋']
const emojis = emo[Math.floor(Math.random() * (emo.length))]

//----
let multipref = true;
let oneprefix = false;
let preff = "!"
/*-----[⬇️Module Export]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

module.exports = sock = async (sock, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
if (multipref) {
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
  } else if (oneprefix) {
    prefix = preff
  }
const allcmd = [`${prefix}menu`,`${prefix}sticker`,`${prefix}play`,`${prefix}addlist`,`${prefix}list`,`${prefix}cerpen`,`${prefix}ytmp3`,`${prefix}ytmp4`,`${prefix}ping`,`${prefix}dashboard`,`${prefix}updatelist`,`${prefix}dellist`,`${prefix}owner`,`${prefix}cowner`,`${prefix}tes`,`${prefix}linkgroup`,`${prefix}setppgc`,`${prefix}setname`,`${prefix}setdesc`,`${prefix}ephemeral`,`${prefix}hidetag`,`${prefix}tagall`,`${prefix}promote`,`${prefix}demote`,`${prefix}upvote`,`${prefix}cekvote`,`${prefix}hapusvote`,`${prefix}antilink`,`${prefix}welcome`,`${prefix}add`,`${prefix}kick`,`${prefix}revoke`,`${prefix}group`,`${prefix}editinfo`,`${prefix}ceksewa`,`${prefix}instagram`,`${prefix}tiktok`,`${prefix}facebook`,`${prefix}igstory`,`${prefix}jpeg`,`${prefix}mp4`,`${prefix}gimage`,`${prefix}ytsearch`,`${prefix}searchgc`,`${prefix}happymod`,`${prefix}servermc`,`${prefix}mcpedl`,`${prefix}google`,`${prefix}pinterest`,`${prefix}layarkaca-search`,`${prefix}smeme`,`${prefix}swm`,`${prefix}stickerwm`,`${prefix}emojimix`,`${prefix}tomp3`,`${prefix}tovn`,`${prefix}tourl`,`${prefix}togif`,`${prefix}tomp4`,`${prefix}toimage`,`${prefix}quotes`,`${prefix}inspect`,`${prefix}getname`,`${prefix}nulis`,`${prefix}kalkulator`,`${prefix}quoted`,`${prefix}join`,`${prefix}tohuruf`,`${prefix}volume`,`${prefix}bass`,`${prefix}blown`,`${prefix}deep`,`${prefix}earrape`,`${prefix}fast`,`${prefix}fat`,`${prefix}nightcore`,`${prefix}reverse`,`${prefix}robot`,`${prefix}slow`,`${prefix}tupai`,`${prefix}translate`,`${prefix}halah`,`${prefix}hilih`,`${prefix}huluh`,`${prefix}holoh`,`${prefix}math`,`${prefix}tictactoe`,`${prefix}delttt`,`${prefix}tebakgambar`,`${prefix}family100`,`${prefix}suitpvp`,`${prefix}3dbox`,`${prefix}roadwarning`,`${prefix}icecold`,`${prefix}luxury`,`${prefix}cloud`,`${prefix}summersand`,`${prefix}horrorblood`,`${prefix}thunder`,`${prefix}pornhub`,`${prefix}glitch`,`${prefix}avenger`,`${prefix}space`,`${prefix}ninjalogo`,`${prefix}marvelstudio`,`${prefix}lionlogo`,`${prefix}wolflogo`,`${prefix}steel3d`,`${prefix}wallgravity`,`${prefix}merdeka-news`,`${prefix}kontan-news`,`${prefix}cnbc-news`,`${prefix}tribun-news`,`${prefix}indozone-news`,`${prefix}kompas-news`,`${prefix}detik-news`,`${prefix}daily-news`,`${prefix}inews-news`,`${prefix}okezone-news`,`${prefix}sindo-news`,`${prefix}tempo-news`,`${prefix}antara-news`,`${prefix}cnn-news`,`${prefix}fajar-news`,`${prefix}setcmd`,`${prefix}listcmd`,`${prefix}delcmd`,`${prefix}lockcmd`,`${prefix}addmsg`,`${prefix}listmsg`,`${prefix}getmsg`,`${prefix}getmsg`,`${prefix}delmsg`,`${prefix}addlist`,`${prefix}dellist`,`${prefix}updatelist`,`${prefix}list`,`${prefix}owner`,`${prefix}listpc`,`${prefix}listgc`,`${prefix}mcserver`,`${prefix}sc`,`${prefix}ping`,`${prefix}afk`,`${prefix}cekupdate`,`${prefix}getscmd`,`${prefix}delete`,`${prefix}infochat`,`${prefix}request`,`${prefix}report`,`${prefix}donate`,`${prefix}listonline`,`${prefix}self`,`${prefix}sewa`,`${prefix}listsewa`,`${prefix}public`,`${prefix}bcall`,`${prefix}bcgroup`,`${prefix}chat`,`${prefix}antitag`,`${prefix}ban`,`${prefix}cowner`,`${prefix}doge`,`${prefix}catalog`,`${prefix}mute`,`${prefix}attp`,`${prefix}patrick`,`${prefix}patrik`,`${prefix}bucinstick`,`${prefix}gura`,`${prefix}gurastick`,`${prefix}tebakgambar`,`${prefix}kuismath`,`${prefix}tebakkimia`,`${prefix}asahotak`,`${prefix}tebakkalimat`,`${prefix}susunkata`,`${prefix}caklontong`,`${prefix}tekateki`,`${prefix}tebakkabupaten`,`${prefix}tebakanime`,`${prefix}tebakbendera`,`${prefix}waifu`,`${prefix}awoo`,`${prefix}megumin`,`${prefix}neko`,`${prefix}shinobu`,`${prefix}bully`,`${prefix}hug`,`${prefix}cuddle`,`${prefix}cry`,`${prefix}kiss`,`${prefix}lick`,`${prefix}pat`,`${prefix}bonk`,`${prefix}yeet`,`${prefix}latintoaksara`,`${prefix}aksaratolatin`,`${prefix}jadwaltv`,`${prefix}whatmusic`,`${prefix}gempa`,`${prefix}gempaNow`,`${prefix}topup`,`${prefix}expand`,`${prefix}bioskop`,`${prefix}bioskopnow`,`${prefix}mlstalk`,`${prefix}ffstalk`,`${prefix}supersusstalk`,`${prefix}emojimix2`,`${prefix}verify`,`${prefix}command`]
const isCmd = body.startsWith(prefix)
const command = body.toLowerCase().split(' ')[0] || ''
const Det = command.startsWith(prefix) 
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await sock.decodeJid(sock.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted)
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
reply = m.reply
// Group
const groupMetadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const cmdBotTotal = require('util').inspect(hit.all)
const cmdBotHarian = require('util').inspect(hit.today)
const cekSes = await dbs.statDatabase(`./${global.sessionName}.json`)

// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const isMuted = m.isGroup ? mute.includes(from) : false

// Quoted
const content = JSON.stringify(m.message)
const isImage = (m.mtype == 'imageMessage')
const isVideo = (m.mtype == 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')
//======================================================
const ads = (teks) => {
sock.sendMessage(from, { text : teks, contextInfo: {"externalAdReply": { title: "WHATSAPP BOT",mediaType: 3, renderLargerThumbnail: false , showAdAttribution: true, body: "🤫",jpegThumbnail: fs.readFileSync('./worker/media/image/Ariel.jpg'),mediaUrl: global.linkgrupss, thumbnail: fs.readFileSync('./worker/media/image/Ariel.jpg'),sourceUrl: global.linkgrupss }}},{ quoted : m})
}
const detect = (teks) => { 
sock.sendMessage(from, { text : teks, contextInfo: {"externalAdReply": { title: `Akurasi : ${anu2}`,mediaType: 3,renderLargerThumbnail: true, showAdAttribution: true, body: "Command Not Found",thumbnail: global.thum,sourceUrl: "https://www.instagram.com/p/CdE0RPbDRXi/?igshid=YmMyMTA2M2Y="}}})
}
const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
butCmd = [ { index: 1,  urlButton: { displayText: 'YouTube',  url: `${global.ytLu}` } } ]

const configocr = {
    lang: "eng",
    oem: 1,
    psm: 3,
  }
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid })
sock.relayMessage(jid, order.message, { messageId: order.key.id})
}
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
//Checker======================================================
_sewa.expiredCheck(sock, sewa)
if (isMuted && !isAdmins){ return }

//Random menu======================================================
tamnel = await fs.readFileSync('./worker/media/image/Ariel.jpg')


//Cmd Function======================================================

// console log command ketika dalam private chat
    if (!m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
      console.log(" From :", color(pushname, "yellow"), "T=anggal :", bgcolor(janghar, 'grey'));
      console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }
    
// console log command ketika dalam group
    if (m.isGroup && isCmd) {
      console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"));
      console.log(" From :", color(pushname, "yellow"), "Tanggal :", bgcolor(janghar, 'grey'));
      console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
    }

if (bad.includes(body)) {
tos = ['Astaghfirullah','Heh mulut jaga','Gapernah diajarin cara ngomong?','Dih🤢','Toxic teross']
sin =  tos[Math.floor(Math.random() * (tos.length))]
ads(sin) 
}

// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

// AntiLink
if (AntiLink) {
if (!isBotAdmins) return
linkgce = await sock.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
ads(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return ads(bvl)
if (m.key.fromMe) return ads(bvl)
if (isCreator) return ads(bvl)
kice = m.sender
await sock.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
sock.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
// Public & Self
if (!sock.public) {
if (!m.key.fromMe) return
}
if (isCmd) {
axios.get('https://api.countapi.xyz/hit/Ariel/visits').then(({
data
}) => hit.all = data.value)
axios.get(`https://api.countapi.xyz/hit/Ariel${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`).then(({
data
}) => hit.today = data.value)
}
// add command
let addHit = (sender, command) => {
hitbot.push({
"id": sender,
"command": command
})
fs.writeFileSync('./worker/src/dashboard/hit.json', JSON.stringify(hitbot))
}

// Anu cmd nya
if (isCmd) {
addHit(sender, command)
AddHituser(sender, userHit)
}
if (!isCmd && m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
var get_data_respon = getDataResponList(from, body, db_respon_list)
if (get_data_respon.isImage === false) {
sock.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
quoted: m
})
} else {
sock.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
quoted: m
})
}
}

//======================================================
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}
//======================================================

// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
ads(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
ads(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}



// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./worker/src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)


// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
sock.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
sock.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
sock.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) sock.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) sock.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) sock.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
sock.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
ads(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) sock.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
ads(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) sock.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
sock.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ads(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// ads(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
ads({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}
//Function Tebak
//======================================================
if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tbkkimia[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakkimia[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tbkkimia[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_asahotak.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _asahotak[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _asahotak[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _asahotak[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_susunkata.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _susunkata[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _susunkata[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _susunkata[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkalimat[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakkalimat[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakkalimat[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tekateki.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tekateki[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tekateku[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tekateku.json", JSON.stringify(_tekateku))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tekateki[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_caklontong.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _caklontong[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _caklontong[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _caklontong[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakbendera[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakbendera[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {
text: global.game ,
footer: `Selamat jawaban kamu benar🥳🎉`, 
title: "List Game",
buttonText: "Play Again",
sections
}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakbendera[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tebakanime.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakanime[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakanime[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections
   }
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakanime[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebakkabupaten[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebakkabupaten[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebakkabupaten[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklirik[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebaklirik[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebaklirik[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && !isCmd && !m.key.fromMe) {
let jawaban = _tebaklagu[m.sender.split('@')[0]].jawaban
if (budy.toLowerCase() == 'nyerah') { 
await reply('Yahaaa Cupu nyerah') 
delete _tebaklagu[m.sender.split('@')[0]]/
fs.writeFileSync("./worker/src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
return
}
if (budy.toLowerCase() == jawaban) {
const sections = [ { title: "Game", rows: [ {title: "Tebak Gambar", rowId: "#tebakgambar", description: "Game Tebak Gambar"},{title: "Tebak Kimia", rowId: "#tebakkimia", description: "Game Tebak Kimia"},{title: "Asah Otak", rowId: "#asahotak", description: "Game Asahotak"}, {title: "Susun Kata", rowId: "#susunkata", description: "Game Susunkata"},{title: "Tebak Kalimat", rowId: "#tebakkalimat", description: "Game Tebak Kalimat"}, {title: "Teka Teki", rowId: "#tekateki", description: "Teka Teki"},{title: "Cak Lontong", rowId: "#caklontong", description: "Game Cak Lontong"}, { title: "Tebak Anime", rowId: "#tebakanime", description: "Game Tebak Anime"}, {title: "Tebak Kabupaten", rowId: "#tebakkabupaten", description: "Game Tebak Kabupaten"}, {title: "Tebak Bendera", rowId: "#tebakbendera", description: "Game Tebak Bendera"}, {title: "Tebak Lagu", rowId: "#tebaklagu", description: "Game Tebak Lagu"}, {title: "Tebak Lirik", rowId: "#tebaklirik", description: "Game Tebak Lirik"}, ]}    ]
const listMessage = {text: global.game ,footer: `Selamat jawaban kamu benar🥳🎉`, title: "List Game",buttonText: "Play Again",sections}
const sendm =  sock.sendMessage( from, listMessage, {quoted :m })
delete _tebaklagu[m.sender.split('@')[0]]
fs.writeFileSync("./worker/src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
} else { if(sim(budy.toLowerCase(), jawaban) >= threshold) ads('Jawaban kamu hampir benar')
else ads('Salah')
}
}
//======================================================
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: sock.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, sock.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
sock.ev.emit('messages.upsert', msg)
}
const textImg = (teks) => {
sock.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./worker/media/image/Ariel.jpg')}) 
}

// Fake Reply
//FAKEREPLY PRODUCT
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 99999999999,status: 200, thumbnail: log0, surface: 200, message: `Hallo Kak ${m.pushName}\n${ucapanWaktu}`, orderTitle: 'Ariel SP', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'Russia',
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Halo bang jagoo", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":global.fake,
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': global.fake,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"Yatim Ya Bang? Nanya Doang Bang",
"title": `Hmm`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = sock.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = sock.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
 }
}
listmn = `✘ *I N F O - B O T*

⌕ Nama Owner : *${global.author}*
⌕ Nama Bot : *${global.namebot}*

✘ *I N F O - U S E R*

⌕ Nama : ${pushname}
⌕ Nomor : ${sender.split("@")[0]}

✘ *G R O U P - M E N U*

⌕ ${prefix}linkgroup 
⌕ ${prefix}addlist 
⌕ ${prefix}dellist 
⌕ ${prefix}updatelist 
⌕ ${prefix}list
⌕ ${prefix}setppgc 
⌕ ${prefix}setname 
⌕ ${prefix}setdesc 
⌕ ${prefix}hidetag 
⌕ ${prefix}tagall 
⌕ ${prefix}promote 
⌕ ${prefix}demote
⌕ ${prefix}antilink <on/off>
⌕ ${prefix}add 
⌕ ${prefix}kick 
⌕ ${prefix}revoke 
⌕ ${prefix}group <open/close>
⌕ ${prefix}editinfo <open/close>
⌕ ${prefix}ceksewa 

✘ *O W N E R - M E N U*

⌕ ${prefix}join
⌕ ${prefix}leave
⌕ ${prefix}creategc
⌕ ${prefix}chat
⌕ ${prefix}modeprefix
⌕ ${prefix}setprefix
⌕ ${prefix}self 
⌕ ${prefix}sewa <add/del>
⌕ ${prefix}listsewa 
⌕ ${prefix}public 
⌕ ${prefix}bcall 
⌕ ${prefix}bcgroup 
⌕ ${prefix}ban <add/del>
⌕ ${prefix}block
⌕ ${prefix}unblock
⌕ ${prefix}cowner <add/del>

✘ *K I S A H - M E N U*

⌕ ${prefix}kisahnabi adam
⌕ ${prefix}kisahnabi ayyub
⌕ ${prefix}kisahnabi daud
⌕ ${prefix}kisahnabi dzulkifli
⌕ ${prefix}kisahnabi harun
⌕ ${prefix}kisahnabi hud
⌕ ${prefix}kisahnabi ibrahim
⌕ ${prefix}kisahnabi idris
⌕ ${prefix}kisahnabi ilyas
⌕ ${prefix}kisahnabi ilyasa
⌕ ${prefix}kisahnabi isa
⌕ ${prefix}kisahnabi ishaq
⌕ ${prefix}kisahnabi ismail
⌕ ${prefix}kisahnabi luth
⌕ ${prefix}kisahnabi muhammad
⌕ ${prefix}kisahnabi musa
⌕ ${prefix}kisahnabi nuh
⌕ ${prefix}kisahnabi sholeh
⌕ ${prefix}kisahnabi sulaiman
⌕ ${prefix}kisahnabi syuaib
⌕ ${prefix}kisahnabi yahya
⌕ ${prefix}kisahnabi yaqub
⌕ ${prefix}kisahnabi yunus
⌕ ${prefix}kisahnabi yusuf
⌕ ${prefix}kisahnabi zakariya

✘ *S T A L K - M E N U*

⌕ ${prefix}mlstalk
⌕ ${prefix}ffstalk
⌕ ${prefix}supersusstalk

✘ *A N I M E - M E N U*

⌕ ${prefix}couple
⌕ ${prefix}waifu
⌕ ${prefix}awoo
⌕ ${prefix}megumin
⌕ ${prefix}neko
⌕ ${prefix}shinobu
⌕ ${prefix}bully
⌕ ${prefix}hug
⌕ ${prefix}cuddle
⌕ ${prefix}cry
⌕ ${prefix}kiss
⌕ ${prefix}lick
⌕ ${prefix}pat
⌕ ${prefix}bonk
⌕ ${prefix}yeet

✘ *R TEXT - M E N U*

⌕ ${prefix}cerpen <query in the list>

✘ *C O N V E R T - M E N U*

⌕ ${prefix}sticker
⌕ ${prefix}stickermeme
⌕ ${prefix}stickerwm 
⌕ ${prefix}tomp3 
⌕ ${prefix}tovn 
⌕ ${prefix}toaudio 
⌕ ${prefix}togif 
⌕ ${prefix}tourl 
⌕ ${prefix}tomp4 
⌕ ${prefix}toimage 

✘ *S E A R C H - M E N U*

⌕ ${prefix}gimage 
⌕ ${prefix}searchgc
⌕ ${prefix}happymod 
⌕ ${prefix}servermc 
⌕ ${prefix}mcpedl 
⌕ ${prefix}pinterest 
⌕ ${prefix}jadwaltv

✘ *D O W N L O A D - M E N U*

⌕ ${prefix}mediafire
⌕ ${prefix}tiktoknowm
⌕ ${prefix}tiktokmp3
⌕ ${prefix}ytmp3
⌕ ${prefix}ytmp4
⌕ ${prefix}ytsearch
⌕ ${prefix}play

✘ *S O U N D - M E N U*

⌕ #sound1
⌕ #sound2
⌕ #sound3
⌕ #sound4
⌕ #sound5
⌕ #sound6
⌕ #sound7
⌕ #sound8
⌕ #sound9
⌕ #sound10
⌕ #sound11
⌕ #sound12
⌕ #sound13
⌕ #sound14
⌕ #sound15
⌕ #sound16
⌕ #sound17
⌕ #sound18
⌕ #sound19
⌕ #sound20
⌕ #sound21
⌕ #sound22
⌕ #sound23
⌕ #sound24
⌕ #sound25
⌕ #sound26
⌕ #sound27
⌕ #sound28
⌕ #sound29

✘ *T O O L S - M E N U*

⌕ ${prefix}inspectgc
⌕ ${prefix}nuliskanan
⌕ ${prefix}fliptext 
⌕ ${prefix}tohuruf 
⌕ ${prefix}volume 
⌕ ${prefix}bass
⌕ ${prefix}blown
⌕ ${prefix}deep
⌕ ${prefix}earrape
⌕ ${prefix}fast
⌕ ${prefix}fat
⌕ ${prefix}nightcore
⌕ ${prefix}reverse
⌕ ${prefix}robot
⌕ ${prefix}slow
⌕ ${prefix}tupai
⌕ ${prefix}translate 
⌕ ${prefix}tinyurl
⌕ ${prefix}expand
⌕ ${prefix}getidgc
⌕ ${prefix}latintoaksara
⌕ ${prefix}aksaratolatin

✘ *F U N - M E N U*

⌕ ${prefix}halah 
⌕ ${prefix}hilih 
⌕ ${prefix}huluh 
⌕ ${prefix}heleh 
⌕ ${prefix}holoh 
⌕ ${prefix}math 
⌕ ${prefix}tictactoe 
⌕ ${prefix}delttt 
⌕ ${prefix}tebakgambar
⌕ ${prefix}kuismath
⌕ ${prefix}tebakkimia
⌕ ${prefix}asahotak
⌕ ${prefix}tebakkalimat
⌕ ${prefix}susunkata
⌕ ${prefix}caklontong
⌕ ${prefix}tekateki
⌕ ${prefix}tebakkabupaten
⌕ ${prefix}tebakanime
⌕ ${prefix}tebakbendera
⌕ ${prefix}family100 
⌕ ${prefix}suitpvp 

✘ *S T I C K E R - M E N U*

⌕ ${prefix}emoji 
⌕ ${prefix}emojimix 
⌕ ${prefix}emojimix2
⌕ ${prefix}attp 
⌕ ${prefix}doge
⌕ ${prefix}patrick
⌕ ${prefix}bucinstick

✘ *T E X T P R O - M E N U*

⌕ ${prefix}thunder <text>
⌕ ${prefix}thunder2 <text>
⌕ ${prefix}pottery <text>
⌕ ${prefix}bussines3d <text>
⌕ ${prefix}stoneariel3d <text>
⌕ ${prefix}neon3dariel <text>
⌕ ${prefix}neon <text>
⌕ ${prefix}impresiveariel <text>
⌕ ${prefix}neondevil3dariel <text>
⌕ ${prefix}underwater3d <text>
⌕ ${prefix}bears3dariel <text>
⌕ ${prefix}fireworkbucin <text>
⌕ ${prefix}metaldarkariel <text>
⌕ ${prefix}halloweenariel <text>
⌕ ${prefix}captainamerikabyariel <text>
⌕ ${prefix}spacetext <text>
⌕ ${prefix}plastic3d <text>
⌕ ${prefix}dropwater3d <text>
⌕ ${prefix}avengerslogo3d <text>
⌕ ${prefix}brokenglass <text>
⌕ ${prefix}wonderfulgravity3d <text>
⌕ ${prefix}futuristicneon3d <text>
⌕ ${prefix}skytext3d <text>
⌕ ${prefix}robotr2 <text>
⌕ ${prefix}pornhub teks1|teks2
⌕ ${prefix}grafity2d teks1|teks2
⌕ ${prefix}breakwall <text>
⌕ ${prefix}matrixstyle <text>
⌕ ${prefix}waterpiperariel <text>
⌕ ${prefix}blackpink <text>
⌕ ${prefix}lightglow <text>
⌕ ${prefix}glass <text>
⌕ ${prefix}hoorror_blood <text>
⌕ ${prefix}sand <text>
⌕ ${prefix}sketch <text>
⌕ ${prefix}magma <text>
⌕ ${prefix}batman <text>
⌕ ${prefix}demon <text>
⌕ ${prefix}sci_fi <text>
⌕ ${prefix}sea_metal <text>
⌕ ${prefix}skeleton <text>
⌕ ${prefix}transformer <text>
⌕ ${prefix}warning <text>
⌕ ${prefix}denim <text>

✘ *O T H E R - M E N U*

⌕ ${prefix}owner 
⌕ ${prefix}diarytext
⌕ ${prefix}listpc 
⌕ ${prefix}listgc 
⌕ ${prefix}mcserver 
⌕ ${prefix}ping 
⌕ ${prefix}afk 
⌕ ${prefix}delete 
⌕ ${prefix}request 
⌕ ${prefix}report 
⌕ ${prefix}listonline`
// Y
switch(command) {

case prefix+'ownermenu':{
const ownar = `✘ *O W N E R - M E N U*

⌕ ${prefix}join
⌕ ${prefix}leave
⌕ ${prefix}creategc
⌕ ${prefix}modeprefix
⌕ ${prefix}setprefix
⌕ ${prefix}self 
⌕ ${prefix}sewa <add/del>
⌕ ${prefix}listsewa 
⌕ ${prefix}public 
⌕ ${prefix}bcall 
⌕ ${prefix}bcgroup 
⌕ ${prefix}chat 
⌕ ${prefix}ban <add/del>
⌕ ${prefix}block
⌕ ${prefix}unblock
⌕ ${prefix}cowner <add/del>`
let button48 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let hahaRiel7 = {image: { url: './worker/media/image/thumb.jpg' },caption: ownar,footer: global.namebot,buttons: button48,headerType: 4}
sock.sendMessage(m.chat, hahaRiel7, { quoted: ftextt })
}
break
case prefix+'othermenu':{ 
const otha = `✘ *O T H E R - M E N U*

⌕ ${prefix}owner 
⌕ ${prefix}diarytext
⌕ ${prefix}listpc 
⌕ ${prefix}listgc 
⌕ ${prefix}mcserver 
⌕ ${prefix}ping 
⌕ ${prefix}afk 
⌕ ${prefix}delete
⌕ ${prefix}request 
⌕ ${prefix}report 
⌕ ${prefix}listonline`
let ya1 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa1 = {image: { url: './worker/media/image/thumb.jpg' },caption: otha,footer: global.namebot,buttons: ya1,headerType: 4}
sock.sendMessage(m.chat, yaa1, { quoted: ftextt })
}
break
case prefix+'randomtext':{
const rtx = `✘ *R TEXT - M E N U*

⌕ ${prefix}cerpen <query in the list>`
let ya2 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa2 = {image: { url: './worker/media/image/thumb.jpg' },caption: rtx,footer: global.namebot,buttons: ya2,headerType: 4}
sock.sendMessage(m.chat, yaa2, { quoted: ftextt })
}
break
case prefix+'convertmenu':{ 
const ctm = `✘ *C O N V E R T - M E N U*

⌕ ${prefix}sticker 
⌕ ${prefix}stickermeme
⌕ ${prefix}stickerwm 
⌕ ${prefix}tomp3 
⌕ ${prefix}tovn 
⌕ ${prefix}toaudio 
⌕ ${prefix}togif 
⌕ ${prefix}tourl 
⌕ ${prefix}tomp4 
⌕ ${prefix}toimage`
let ya3 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa3 = {image: { url: './worker/media/image/thumb.jpg' },caption: ctm,footer: global.namebot,buttons: ya3,headerType: 4}
sock.sendMessage(m.chat, yaa3, { quoted: ftextt })
}
break
case prefix+'searchmenu':{ 
const schm = `✘ *S E A R C H - M E N U*

⌕ ${prefix}gimage 
⌕ ${prefix}searchgc 
⌕ ${prefix}happymod 
⌕ ${prefix}servermc 
⌕ ${prefix}mcpedl 
⌕ ${prefix}pinterest 
⌕ ${prefix}jadwaltv`
let ya4 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa4 = {image: { url: './worker/media/image/thumb.jpg' },caption: schm,footer: global.namebot,buttons: ya4,headerType: 4}
sock.sendMessage(m.chat, yaa4, { quoted: ftextt })
}
break
case prefix+'downloadmenu':{ 
const dongl = `✘ *D O W N L O A D - M E N U*

⌕ ${prefix}mediafire
⌕ ${prefix}tiktoknowm
⌕ ${prefix}tiktokmp3
⌕ ${prefix}ytmp3
⌕ ${prefix}ytmp4
⌕ ${prefix}ytsearch
⌕ ${prefix}play`
let ya5 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa5 = {image: { url: './worker/media/image/thumb.jpg' },caption: dongl,footer: global.namebot,buttons: ya5,headerType: 4}
sock.sendMessage(m.chat, yaa5, { quoted: ftextt })
}
break
case prefix+'nabimenu':{
const parnabi = `✘ *K I S A H - M E N U*

⌕ ${prefix}kisahnabi adam
⌕ ${prefix}kisahnabi ayyub
⌕ ${prefix}kisahnabi daud
⌕ ${prefix}kisahnabi dzulkifli
⌕ ${prefix}kisahnabi harun
⌕ ${prefix}kisahnabi hud
⌕ ${prefix}kisahnabi ibrahim
⌕ ${prefix}kisahnabi idris
⌕ ${prefix}kisahnabi ilyas
⌕ ${prefix}kisahnabi ilyasa
⌕ ${prefix}kisahnabi isa
⌕ ${prefix}kisahnabi ishaq
⌕ ${prefix}kisahnabi ismail
⌕ ${prefix}kisahnabi luth
⌕ ${prefix}kisahnabi muhammad
⌕ ${prefix}kisahnabi musa
⌕ ${prefix}kisahnabi nuh
⌕ ${prefix}kisahnabi sholeh
⌕ ${prefix}kisahnabi sulaiman
⌕ ${prefix}kisahnabi syuaib
⌕ ${prefix}kisahnabi yahya
⌕ ${prefix}kisahnabi yaqub
⌕ ${prefix}kisahnabi yunus
⌕ ${prefix}kisahnabi yusuf
⌕ ${prefix}kisahnabi zakariya`
let button58 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let hahaRiel588 = {image: { url: './worker/media/image/thumb.jpg' },caption: parnabi,footer: global.namebot,buttons: button58,headerType: 4}
sock.sendMessage(m.chat, hahaRiel588, { quoted: ftextt })
}
break
case prefix+'grupmenu':{
const grupam = `✘ *G R O U P - M E N U*

⌕ ${prefix}linkgroup 
⌕ ${prefix}addlist 
⌕ ${prefix}dellist 
⌕ ${prefix}updatelist 
⌕ ${prefix}list
⌕ ${prefix}setppgc 
⌕ ${prefix}setname 
⌕ ${prefix}setdesc 
⌕ ${prefix}ephemeral 
⌕ ${prefix}hidetag 
⌕ ${prefix}tagall 
⌕ ${prefix}promote 
⌕ ${prefix}demote 
⌕ ${prefix}antilink <on/off>
⌕ ${prefix}add 
⌕ ${prefix}kick 
⌕ ${prefix}revoke 
⌕ ${prefix}group <open/close>
⌕ ${prefix}editinfo <open/close>
⌕ ${prefix}ceksewa`
let button49 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let hahaRiel8 = {image: { url: './worker/media/image/thumb.jpg' },caption: grupam,footer: global.namebot,buttons: button49,headerType: 4}
sock.sendMessage(m.chat, hahaRiel8, { quoted: ftextt })
}
break
case prefix+'toolsmenu':{ 
const tolkon = `✘ *T O O L S - M E N U*

⌕ ${prefix}inspectgc
⌕ ${prefix}nuliskanan
⌕ ${prefix}fliptext 
⌕ ${prefix}tohuruf 
⌕ ${prefix}volume 
⌕ ${prefix}bass
⌕ ${prefix}blown
⌕ ${prefix}deep
⌕ ${prefix}earrape
⌕ ${prefix}fast
⌕ ${prefix}fat
⌕ ${prefix}nightcore
⌕ ${prefix}reverse
⌕ ${prefix}robot
⌕ ${prefix}slow
⌕ ${prefix}tupai
⌕ ${prefix}translate 
⌕ ${prefix}tinyurl
⌕ ${prefix}expand
⌕ ${prefix}getidgc
⌕ ${prefix}latintoaksara
⌕ ${prefix}aksaratolatin`
let ya6 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa6 = {image: { url: './worker/media/image/thumb.jpg' },caption: tolkon,footer: global.namebot,buttons: ya6,headerType: 4}
sock.sendMessage(m.chat, yaa6, { quoted: ftextt })
}
break
case prefix+'funmenu':{ 
const funbg = `✘ *F U N - M E N U*

⌕ ${prefix}halah 
⌕ ${prefix}hilih 
⌕ ${prefix}huluh 
⌕ ${prefix}heleh 
⌕ ${prefix}holoh 
⌕ ${prefix}math 
⌕ ${prefix}tictactoe 
⌕ ${prefix}delttt 
⌕ ${prefix}tebakgambar
⌕ ${prefix}kuismath
⌕ ${prefix}tebakkimia
⌕ ${prefix}asahotak
⌕ ${prefix}tebakkalimat
⌕ ${prefix}susunkata
⌕ ${prefix}caklontong
⌕ ${prefix}tekateki
⌕ ${prefix}tebakkabupaten
⌕ ${prefix}tebakanime
⌕ ${prefix}tebakbendera
⌕ ${prefix}family100 
⌕ ${prefix}suitpvp `
let ya7 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa7 = {image: { url: './worker/media/image/thumb.jpg' },caption: funbg,footer: global.namebot,buttons: ya7,headerType: 4}
sock.sendMessage(m.chat, yaa7, { quoted: ftextt })
}
break
case prefix+'stickertelegram':{ 
const linkbg = `✘ *S T I C K E R - M E N U*

⌕ ${prefix}emoji 
⌕ ${prefix}emojimix 
⌕ ${prefix}emojimix2
⌕ ${prefix}attp 
⌕ ${prefix}doge
⌕ ${prefix}patrick
⌕ ${prefix}bucinstick`
let ya8 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa8 = {image: { url: './worker/media/image/thumb.jpg' },caption: linkbg,footer: global.namebot,buttons: ya8,headerType: 4}
sock.sendMessage(m.chat, yaa8, { quoted: ftextt })
}
break
case prefix+'musikmenu':{
const sond = `✘ *S O U N D - M E N U*

⌕ #sound1
⌕ #sound2
⌕ #sound3
⌕ #sound4
⌕ #sound5
⌕ #sound6
⌕ #sound7
⌕ #sound8
⌕ #sound9
⌕ #sound10
⌕ #sound11
⌕ #sound12
⌕ #sound13
⌕ #sound14
⌕ #sound15
⌕ #sound16
⌕ #sound17
⌕ #sound18
⌕ #sound19
⌕ #sound20
⌕ #sound21
⌕ #sound22
⌕ #sound23
⌕ #sound24
⌕ #sound25
⌕ #sound26
⌕ #sound27
⌕ #sound28
⌕ #sound29`
let ya100 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa100 = {image: { url: './worker/media/image/thumb.jpg' },caption: sond,footer: global.namebot,buttons: ya100,headerType: 4}
sock.sendMessage(m.chat, yaa100, { quoted: ftextt })
}
break
case prefix+'textpromenu':{ 
const prokali = `✘ *T E X T P R O - M E N U*

⌕ ${prefix}thunder <text>
⌕ ${prefix}thunder2 <text>
⌕ ${prefix}pottery <text>
⌕ ${prefix}bussines3d <text>
⌕ ${prefix}stoneariel3d <text>
⌕ ${prefix}neon3dariel <text>
⌕ ${prefix}neon <text>
⌕ ${prefix}impresiveariel <text>
⌕ ${prefix}neondevil3dariel <text>
⌕ ${prefix}underwater3d <text>
⌕ ${prefix}bears3dariel <text>
⌕ ${prefix}fireworkbucin <text>
⌕ ${prefix}metaldarkariel <text>
⌕ ${prefix}halloweenariel <text>
⌕ ${prefix}captainamerikabyariel <text>
⌕ ${prefix}spacetext <text>
⌕ ${prefix}plastic3d <text>
⌕ ${prefix}dropwater3d <text>
⌕ ${prefix}avengerslogo3d <text>
⌕ ${prefix}brokenglass <text>
⌕ ${prefix}wonderfulgravity3d <text>
⌕ ${prefix}futuristicneon3d <text>
⌕ ${prefix}skytext3d <text>
⌕ ${prefix}robotr2 <text>
⌕ ${prefix}pornhub teks1|teks2
⌕ ${prefix}grafity2d teks1|teks2
⌕ ${prefix}breakwall <text>
⌕ ${prefix}matrixstyle <text>
⌕ ${prefix}waterpiperariel <text>
⌕ ${prefix}blackpink <text>
⌕ ${prefix}lightglow <text>
⌕ ${prefix}glass <text>
⌕ ${prefix}hoorror_blood <text>
⌕ ${prefix}sand <text>
⌕ ${prefix}sketch <text>
⌕ ${prefix}magma <text>
⌕ ${prefix}batman <text>
⌕ ${prefix}demon <text>
⌕ ${prefix}sci_fi <text>
⌕ ${prefix}sea_metal <text>
⌕ ${prefix}skeleton <text>
⌕ ${prefix}transformer <text>
⌕ ${prefix}warning <text>
⌕ ${prefix}denim <text>`
let ya10 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa10 = {image: { url: './worker/media/image/thumb.jpg' },caption: prokali,footer: global.namebot,buttons: ya10,headerType: 4}
sock.sendMessage(m.chat, yaa10, { quoted: ftextt })
}
break
case prefix+'animemenu':{ 
const anim = `✘ *A N I M E - M E N U*

⌕ ${prefix}couple
⌕ ${prefix}waifu
⌕ ${prefix}awoo
⌕ ${prefix}megumin
⌕ ${prefix}neko
⌕ ${prefix}shinobu
⌕ ${prefix}bully
⌕ ${prefix}hug
⌕ ${prefix}cuddle
⌕ ${prefix}cry
⌕ ${prefix}kiss
⌕ ${prefix}lick
⌕ ${prefix}pat
⌕ ${prefix}bonk
⌕ ${prefix}yeet`
let ya11 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa11 = {image: { url: './worker/media/image/thumb.jpg' },caption: anim,footer: global.namebot,buttons: ya11,headerType: 4}
sock.sendMessage(m.chat, yaa11, { quoted: ftextt })
}
break
case prefix+'stalkmenu':{ 
const stal = `✘ *S T A L K - M E N U*

⌕ ${prefix}mlstalk
⌕ ${prefix}ffstalk
⌕ ${prefix}supersusstalk`
let ya13 = [{buttonId: `#menu`, buttonText: {displayText: 'Back To Menu 🔙'}, type: 1},]
let yaa13 = {image: { url: './worker/media/image/thumb.jpg' },caption: stal,footer: global.namebot,buttons: ya13,headerType: 4}
sock.sendMessage(m.chat, yaa13, { quoted: ftextt })
}
break
case prefix+'menu' : {
var res = await Quotes()
let sections = []
let listmenu = [`tesbang`,`arielkece`,`grupmenu`,`textpromenu`,`stickertelegram`,`nabimenu`,`convertmenu`,`searchmenu`,`downloadmenu`,`randomtext`,`stalkmenu`,`animemenu`,`funmenu`,`musikmenu`,`toolsmenu`,`ownermenu`,`othermenu`]
let listmenuu = [`🇮🇩 Catalog Menu`,`🇮🇩 All Menu`,`🇮🇩 Group Menu`,`🇮🇩 Textpro Menu`,`🇮🇩 Sticker Menu`,`🇮🇩 Kisah Nabi Menu`,`🇮🇩 Convert Menu`,`🇮🇩 Search Menu`,`🇮🇩 Download Menu`,`🇮🇩 Random Text Menu`,`🇮🇩 Stalk Menu`,`🇮🇩 Anime Menu`,`🇮🇩 Fun Menu`,`🇮🇩 Sound Menu`,`🇮🇩 Tools Menu`,`🇮🇩 Owner Menu`,`🇮🇩 Other Menu`]
let nombor = 1

let startnum = 0
let startnumm = 0
for (let x of listmenu) {
const yy = {title: `${global.author} ༺ ` + nombor++,
rows: [
{
title: `${listmenuu[startnum++]}`,
description: `Subrek YT : ArielSP Sus`,
rowId: `${prefix}${x}`
}
]
}
sections.push(yy)
}
const sendm =  sock.sendMessage(
from, 
{
text: `Hii Kak *${m.pushName}* ${ucapanWaktu}

Quotes Hari Ini : *${res.quotes}*`, 
footer: 'Aespi Botz', 
buttonText: "Klick Ini Kak", 
sections,
mentions:[m.sender]
}, { quoted : ftroli })
}
break
case prefix+'thunder':{
    if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link1 = `https://textpro.me/online-thunder-text-effect-generator-1031.html`
     let anu1 = await textpro(link1, q)
     console.log(anu1)
    sock.sendMessage(m.chat, { image: { url : anu1 }, caption: `Makasih Kak`}, { quoted: ftroli } )
   
}
  break
case prefix+'silverbutton':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
let peakali = await fetchJson(`https://aespibotz-api.herokuapp.com/api/maker/silverbutton?text=${q}&apikey=AespiBotz`)
sock.sendMessage(from, { image: { url : peakali }, caption: `Done Kak`}, { quoted: ftroli } )
}
break
case prefix+'blackpink':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link2 = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anu2 = await textpro(link2, q)
     console.log(anu2)
    sock.sendMessage(m.chat, { image: { url : anu2 }, caption: `${global.owner}`}, { quoted: ftroli } )
   
}
  break
case prefix+'pottery':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link3 = `https://textpro.me/create-3d-pottery-text-effect-online-1088.html`
     let anu3 = await textpro(link3, q)
     console.log(anu3)
    sock.sendMessage(m.chat, { image: { url : anu3 }, caption: `${global.namebot}`}, { quoted: arielFake } )
   
}
  break
case prefix+'lightglow':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link4 = `https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html`
     let anu4 = await textpro(link4, q)
     console.log(anu4)
    sock.sendMessage(m.chat, { image: { url : anu4 }, caption: `${global.namebot}`}, { quoted: ftok } )
   
}
  break
case prefix+'glass':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link5 = `https://textpro.me/green-glass-text-effect-910.html`
     let anu5 = await textpro(link5, q)
     console.log(anu5)
    sock.sendMessage(m.chat, { image: { url : anu5 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
case prefix+'horror_blood':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link6 = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anu6 = await textpro(link6, q)
     console.log(anu6)
    sock.sendMessage(m.chat, { image: { url : anu6 }, caption: `${global.namebot}`}, { quoted: arielFake } )
   
}
  break
  
  case prefix+'sand':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link7 = `https://textpro.me/sand-engraved-3d-text-effect-989.html`
     let anu7 = await textpro(link7, q)
     console.log(anu7)
    sock.sendMessage(m.chat, { image: { url : anu7 }, caption: `${global.namebot}`}, { quoted: ftok } )
   
}
  break
  
  
  case prefix+'magma':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link8 = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anu8 = await textpro(link8, q)
     console.log(anu8)
    sock.sendMessage(m.chat, { image: { url : anu8 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'sketch':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link9 = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anu9 = await textpro(link9, q)
     console.log(anu9)
    sock.sendMessage(m.chat, { image: { url : anu9 }, caption: `${global.namebot}`}, { quoted: arielFake } )
   
}
  break
  
  
  case prefix+'batman':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link10 = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
     let anu10 = await textpro(link10, q)
     console.log(anu10)
    sock.sendMessage(m.chat, { image: { url : anu10 }, caption: `${global.namebot}`}, { quoted: ftok } )
   
}
  break
case prefix+'demon':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link11 = `https://textpro.me/create-green-horror-style-text-effect-online-1036.html`
     let anu11 = await textpro(link11, q)
     console.log(anu11)
    sock.sendMessage(m.chat, { image: { url : anu11 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'sci_fi':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link12 = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anu12 = await textpro(link12, q)
     console.log(anu12)
    sock.sendMessage(m.chat, { image: { url : anu12 }, caption: `${global.namebot}`}, { quoted: arielFake } )
   
}
  break
  
  
  case prefix+'sea_metal':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link13 = `https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html`
     let anu13 = await textpro(link13, q)
     console.log(anu13)
    sock.sendMessage(m.chat, { image: { url : anu13 }, caption: `${global.namebot}`}, { quoted: ftok } )
   
}
  break
  
  
  case prefix+'skeleton':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link14 = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
     let anu14 = await textpro(link14, q)
     console.log(anu14)
    sock.sendMessage(m.chat, { image: { url : anu14 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'transformer':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link15 = `https://textpro.me/create-a-transformer-text-effect-online-1035.html`
     let anu15 = await textpro(link15, q)
     console.log(anu15)
    sock.sendMessage(m.chat, { image: { url : anu15 }, caption: `${global.namebot}`}, { quoted: arielFake } )
   
}
  break
case prefix+'warning':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link16 = `https://textpro.me/road-warning-text-effect-878.html`
     let anu16 = await textpro(link16, q)
     console.log(anu16)
    sock.sendMessage(m.chat, { image: { url : anu16 }, caption: `${global.namebot}`}, { quoted: ftok } )
   
}
  break
  
  
  case prefix+'denim':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link17 = `https://textpro.me/denim-text-effect-online-919.html`
     let anu17 = await textpro(link17, q)
     console.log(anu17)
    sock.sendMessage(m.chat, { image: { url : anu17 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'neon':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link18 = `https://textpro.me/neon-text-effect-online-963.html`
     let anu18 = await textpro(link18, q)
     console.log(anu18)
    sock.sendMessage(m.chat, { image: { url : anu18 }, caption: `${global.namebot}`}, { quoted: arielFake } )
   
}
  break
  
  
  case prefix+'waterpipeariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link19 = `https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html`
     let anu19 = await textpro(link19, q)
     console.log(anu19)
    sock.sendMessage(m.chat, { image: { url : anu19 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'business3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link20 = `https://textpro.me/3d-business-sign-text-effect-1078.html`
     let anu20 = await textpro(link20, q)
     console.log(anu20)
    sock.sendMessage(m.chat, { image: { url : anu20 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
case prefix+'stoneariel3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link21 = `https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html`
     let anu21 = await textpro(link21, q)
     console.log(anu21)
    sock.sendMessage(m.chat, { image: { url : anu21 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  case prefix+'neon3dariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link22 = `https://textpro.me/create-3d-neon-light-text-effect-online-1028.html`
     let anu22 = await textpro(link22, q)
     console.log(anu22)
    sock.sendMessage(m.chat, { image: { url : anu22 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'impresivariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link23 = `https://textpro.me/create-impressive-glitch-text-effects-online-1027.html`
     let anu23 = await textpro(link23, q)
     console.log(anu23)
    sock.sendMessage(m.chat, { image: { url : anu23 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'neondevil3dariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link24 = `https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html`
     let anu24 = await textpro(link24, q)
     console.log(anu24)
    sock.sendMessage(m.chat, { image: { url : anu24 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'underwater3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link25 = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anu25 = await textpro(link25, q)
     console.log(anu25)
    sock.sendMessage(m.chat, { image: { url : anu25 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
case prefix+'bears3dariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link26 = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anu26 = await textpro(link26, q)
     console.log(anu26)
    sock.sendMessage(m.chat, { image: { url : anu26 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  case prefix+'fireworkbucin':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link27 = `https://textpro.me/firework-sparkle-text-effect-930.html`
     let anu27 = await textpro(link27, q)
     console.log(anu27)
    sock.sendMessage(m.chat, { image: { url : anu27 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'metaldarkariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link28 = `https://textpro.me/metal-dark-gold-text-effect-984.html`
     let anu28 = await textpro(link28, q)
     console.log(anu28)
    sock.sendMessage(m.chat, { image: { url : anu28 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  case prefix+'halloweenariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link29 = `https://textpro.me/halloween-fire-text-effect-940.html`
     let anu29 = await textpro(link29, q)
     console.log(anu29)
    sock.sendMessage(m.chat, { image: { url : anu29 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'captainamerikabyariel':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link30= `https://textpro.me/captain-america-text-effect-905.html`
     let anu30 = await textpro(link30, q)
     console.log(anu30)
    sock.sendMessage(m.chat, { image: { url : anu30 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
case prefix+'spacetext':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link31 = `https://textpro.me/create-space-text-effects-online-free-1042.html`
     let anu31 = await textpro(link31, q)
     console.log(anu31)
    sock.sendMessage(m.chat, { image: { url : anu31 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'plastic3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link32 = `https://textpro.me/plastic-bag-drug-text-effect-867.html`
     let anu32 = await textpro(link32, q)
     console.log(anu32)
    sock.sendMessage(m.chat, { image: { url : anu32 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'dropwater3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link33 = `https://textpro.me/dropwater-text-effect-872.html`
     let anu33 = await textpro(link33, q)
     console.log(anu33)
    sock.sendMessage(m.chat, { image: { url : anu33 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'thunder2':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link34 = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anu34 = await textpro(link34, q)
     console.log(anu34)
    sock.sendMessage(m.chat, { image: { url : anu34 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'avengerslogo3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link35 = `https://textpro.me/create-3d-avengers-logo-online-974.html`
     let anu35 = await textpro(link35, q)
     console.log(anu35)
    sock.sendMessage(m.chat, { image: { url : anu35 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
case prefix+'ytmp4':{
var arielganteng = args.join(" ")
if (!arielganteng) return ads('Link Bang')
ads(mess.wait)
nangisbg = await fetchJson(`https://ariel-api-aespibotz.herokuapp.com/api/download/ytmp4?url=${arielganteng}&apikey=AespiBotz`)
sock.sendMessage(m.chat, { video: { url : nangisbg.result.url }, caption: `${global.namebot}`}, { quoted: ftroli } )
}
break
case prefix+'ytmp3':{
if (!q) return ads(`Link Kont`)
ads(mess.wait)
tunggukids = await fetchJson(`https://ariel-api-aespibotz.herokuapp.com/api/download/ytmp3?url=${q}&apikey=AespiBotz`)
sock.sendMessage(m.chat, { audio: {url : tunggukids.result.url }, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli})
}
break
case prefix+'brokenglass':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link36 = `https://textpro.me/broken-glass-text-effect-free-online-1023.html`
     let anu36 = await textpro(link36, q)
     console.log(anu36)
    sock.sendMessage(m.chat, { image: { url : anu36 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'typography':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link37 = `https://textpro.me/create-artistic-typography-online-1086.html`
     let anu37 = await textpro(link37, q)
     console.log(anu37)
    sock.sendMessage(m.chat, { image: { url : anu37 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'wonderfulgrafity3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link38 = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anu38 = await textpro(link38, q)
     console.log(anu38)
    sock.sendMessage(m.chat, { image: { url : anu38 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  case prefix+'futuristicneon3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link39 = `https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html`
     let anu39 = await textpro(link39, q)
     console.log(anu39)
    sock.sendMessage(m.chat, { image: { url : anu39 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'skytext3d':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link40 = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anu40 = await textpro(link40, q)
     console.log(anu40)
    sock.sendMessage(m.chat, { image: { url : anu40 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'robotr2':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link41 = `https://textpro.me/robot-r2-d2-text-effect-903.html`
     let anu41 = await textpro(link41, q)
     console.log(anu41)
    sock.sendMessage(m.chat, { image: { url : anu41 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  
  case prefix+'breakwall':{
if (!q) return reply(`Example ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link42 = `https://textpro.me/break-wall-text-effect-871.html`
     let anu42 = await textpro(link42, q)
     console.log(anu42)
    sock.sendMessage(m.chat, { image: { url : anu42 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
  
  case prefix+'grafity2d':{
if (!q) return reply(`Example ${command} ${global.namebot}|Kece`)
 
m.reply(mess.wait)
arielsp90 = q.split("|")[0]
arielsp91 = q.split("|")[1]
await textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
    `${arielsp90}`,`${arielsp91}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: ftroli }))
  .catch((err) => console.log(err));
}
break
  case prefix+'matrixstyle':{
if (!q) return reply(`Example : ${command} ${global.namebot}`)
     
     m.reply(`*Tunggu Kak ><*`)
     let link43 = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anu43 = await textpro(link43, q)
     console.log(anu43)
    sock.sendMessage(m.chat, { image: { url : anu43 }, caption: `${global.namebot}`}, { quoted: ftroli } )
   
}
  break
case prefix+'pornhub':{
if (!q) return reply(`Example : ${command} ${global.namebot}|Kece`)
 
m.reply(mess.wait)
ariel1 = q.split("|")[0]
ariel2 = q.split("|")[1]
await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${ariel1}`,`${ariel2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: ftroli }))
  .catch((err) => console.log(err));
}
break
case prefix+'jadwaltv': {
if (!q) return reply(`Example ${command} Rcti`) 
let tivi = await jadwalTV(q) 
let texoy = `Jadwal TV ${tivi.channel}\n\n`
for (let i of tivi.result) {
texoy += `Pukul : ${i.date}\n`
texoy += `Acara :${i.event}\n\n`
}
reply(texoy) 
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'gempa':{
gemp = await gempa() 
for (let i of gemp ){
texi = `Tanggal : ${i.date}\nKordinat : ${i.locate}\nMagnitude :${i.magnitude}\nLokasi ${i.location}\nDaerah bahaya :${i.warning}`
reply(texi) 
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'gempanow':{
gemp = await gempaNow() 
for (let i of gemp ){
texi = `Tanggal : ${i.date}\nKordinat : ${i.latitude} latitude ${i.longitude} longitude\nMagnitude :${i.magnitude}\nLokasi ${i.location}\nKedalaman :${i.depth}`
reply(texi) 
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'latintoaksara':{
if (!q) return reply(`Example : ${command} Makan bang`) 
uios = await latinToAksara(q) 
reply(uios) 
addCmd(command.slice(1), 1, commund)
}
break
case prefix+'aksaratolatin':{
if (!q) return reply(`Example : ${command} ꦪꦺꦴꦲꦺꦴ`) 
uios = await aksaraToLatin(q) 
reply(uios) 
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getidgc':
if (!m.isGroup) return reply(mess.group)
reply (`${m.chat}`)
addCmd(command.slice(1), 1, commund)
break
case prefix+'kisahnabi':
const kisahparanabi = await Searchnabi(q)
const result = `*Nama* : ${kisahparanabi.name}\n*Wafat* : ${kisahparanabi.wafat_usia}\n*Kelahiran* : ${kisahparanabi.kelahiran}\n*Singgah* : ${kisahparanabi.singgah}\n*Kisah* : ${kisahparanabi.kisah}`
sock.sendMessage(m.chat, { image: { url : 'https://i.ibb.co/Kw282gw/b54b1faadf3b.jpg' }, caption: result}, { quoted: ftroli } )
addCmd(command.slice(1), 1, commund)
break
case prefix+'expand': { //Fungsinya untuk mengubah link short menjadi link original seperti link bitly 
if (!q) return reply(`Example : ${command} link url`) 
exp = await hikki.tools.expandedUrl(q)
reply(exp) }
addCmd(command.slice(1), 1, commund)
break
case prefix+'tinyurl': 
request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
try {
reply(body)
} catch (e) {
reply(e)
}
})
addCmd(command.slice(1), 1, commund)
break
case prefix+'mlstalk': { 
if (!q) return reply(`Example :${command} id|server`) 
try {
id = q.split('|')[0]
server = q.split('|')[1]
ml = await hikki.game.nickNameMobileLegends(id, server)
reply(`NickName : ${ml.userName}`) 
} catch (e) { reply('Id tak ditemukan') }
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'ffstalk': { 
if (!q) return reply(`Example :${command} id|server`) 
try {
ff = await hikki.game.nickNameFreefire(q) 
reply(`NickName : ${ff.userName}`) 
} catch (e) { reply('Id tak ditemukan') }
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'supersusstalk': { 
if (!q) return reply ('Mana Id nya') 
try {
sus = await hikki.game.superSusChecker(q) 
textt = `Name : ${sus.name}\nAkun: ${sus.account}\nUserId: ${sus.userId}\nSpaceId: ${sus.spaceId}\nsex: ${sus.sex}\nCupNum : ${sus.cupNum}\nBindType: ${sus.bindType}\nHeadId: ${sus.headId}\nHeadUrl: ${sus.headUrl}\nDevice: ${sus.device}`
reply(textt) 
} catch (e) { reply('Id tak ditemukan') }
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bioskopnow': {
let skop = await bioskopNow()
let storee = '❉─────────────────────❉\n'
for (let i of skop ){
storee += `\n*「 *JADWAL BIOSKOP NOW* 」*\n
- *Judul* : ${i.title}
- *Link* : ${i.url}\n
- *Genre* : ${i.genre}
- *Durasi* : ${i.duration}
- *Tayang di* : ${i.playingAt}\n❉─────────────────────❉`
reply(storee) 
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'waifu': case prefix+'megumin': case prefix+'shinobu': case prefix+'awoo': case prefix+'neko': case prefix+'bully': case prefix+'cuddle': case prefix+'hug': case prefix+'cry': case prefix+'kiss': case prefix+'lick': case prefix+'pat': case prefix+'bonk': case prefix+'yeet': {
reply(mess.wait) 
let link
if (/waifu/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/waifu`)
if (/neko/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/neko`)
if (/awoo/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/awoo`)
if (/megumin/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/megumin`)
if (/shinobu/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/shinobu`)
if (/bully/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/bully`)
if (/cuddle/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/cuddle`)
if (/hug/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/hug`)
if (/cry/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/cry`)
if (/kiss/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/kiss`)
if (/lick/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/lick`)
if (/pat/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/pat`)
if (/bonk/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/bonk`)
if (/yeet/.test(command)) heriWibu = await fetchJson(`https:/\/\waifu.pics/api/sfw/yeet`)
let buttons = [ { buttonId: `${command}`,  buttonText: { displayText: 'Next' }, type: 1}, ]
let buttonMessage = { image: { url: heriWibu.url }, caption: global.resultwibu, footer: global.footer,buttons: buttons, headerType: 4}
sock.sendMessage(from, buttonMessage, { quoted: m }) } 
addCmd(command.slice(1), 1, commund) 
break

case prefix+'emojimix2': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${command} 😅`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await sock.sendImageAsSticker(sender, res.url, m, { packname: global.packname, author: global.packname2, categories: res.tags })
await fs.unlinkSync(encmedia)
}
ads('Selesai') 
} catch {
ads("Tidak ditemukan!")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tesbang': {
var messa = await prepareWAMessageMedia({ image: { url: './worker/media/image/Ariel.jpg'}}, { upload: sock.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "7091718154232528",
"title": `SEMUA MENU`,
"description": `${listmn}`,
"footerText":  global.footer,
"currencyCode": "IDR",
"priceAmount1000": "100000000000000000",
"productImageCount": 1,
"firstImageId": 2,
"salePriceAmount1000": "1000",
"retailerId": global.author,
"url": `Subscribe YT ${global.nameyt}`
},
"businessOwnerJid": "6285321822875@s.whatsapp.net",
}
}), { userJid: from, quoted:m })
sock.relayMessage(from, catalog.message, { messageId: catalog.key.id })
}
addCmd(command.slice(1), 1, commund)
            break
case prefix+"modeprefix":
if (!isCreator) return ads('Khusus Owner') 
        if (!args.length) return ads(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)
        if (args[0] === "multi") {
          multipref = true;
          oneprefix = false;
          ads("berhasil mengubah ke multi prefix")
        } else if (q === "oneprefix") {
          multipref = false;
          oneprefix = true;
          ads(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)
        } else {
          ads("pilih multi, atau oneprefix")
        }
        break
        case prefix+"setprefix":
          if (!q) return ads("Prefix nya mau apa?")
          multipref = false;
          noprefix = false;
          oneprefix = true;
          preff = q
          break
case prefix+'setppbott':
            if (quoted) {
                var media = await sock.downloadAndSaveMediaMessage(quoted)
                if (args[1] == '\'panjang\'') {
                    var { img } = await generateProfilePicture(media)
                    await sock.query({
                        tag: 'iq',
                        attrs: {
                            to: botNumber,
                            type:'set', 
                            xmlns: 'w:profile:picture'
                        },
                        content: [
                        {
                            tag: 'picture',
                            attrs: { type: 'image' },
                            content: img
                        }
					    ]
                    })
					fs.unlinkSync(media)
					ads(`Sukses`)
				} else {
					var data = await sock.updateProfilePicture(botNumber, { url: media })
			        fs.unlinkSync(media)
				    ads(`Sukses`)
				}
            } else {
                ads(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
            }
            break
case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.packname2, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'gura':
case prefix+'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.packname2, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sound1':{
   sock.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_23268bsoq0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
    case prefix+'sound2':{
   sock.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_23269i60f0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'sound3':{
   sock.sendMessage(m.chat, { audio: {url : `https://a.top4top.io/m_2353wssxf0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'sound4':{
   sock.sendMessage(m.chat, { audio: {url : `https://b.top4top.io/m_23266l2s00.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'sound5':{
   sock.sendMessage(m.chat, { audio: {url : `https://i.top4top.io/m_23266hn860.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
  case prefix+'sound6':{
   sock.sendMessage(m.chat, { audio: {url : `https://f.top4top.io/m_2326z7znw0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound7':{
   sock.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_2353nnowu0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound8':{
   sock.sendMessage(m.chat, { audio: {url : `https://e.top4top.io/m_23533o1ju0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound9':{
   sock.sendMessage(m.chat, { audio: {url : `https://h.top4top.io/m_2353xuwlp0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound10':{
   sock.sendMessage(m.chat, { audio: {url : `https://f.top4top.io/m_2353y4qv70.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound11':{
   sock.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_23534642l0.mp4`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound12':{
   sock.sendMessage(m.chat, { audio: {url : `https://h.top4top.io/m_235991jjn0.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound13':{
   sock.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_23594d72t1.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound14':{
   sock.sendMessage(m.chat, { audio: {url : `https://k.top4top.io/m_23595i6io2.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound15':{
   sock.sendMessage(m.chat, { audio: {url : `https://a.top4top.io/m_2359x5g8j4.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound16':{
   sock.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_2359l01x13.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound17':{
   sock.sendMessage(m.chat, { audio: {url : `https://b.top4top.io/m_2359ola665.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound18':{
   sock.sendMessage(m.chat, { audio: {url : `https://c.top4top.io/m_2359n6agj6.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound19':{
   sock.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_2359fok3u7.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound20':{
   sock.sendMessage(m.chat, { audio: {url : `https://e.top4top.io/m_2359q1yyh8.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound21':{
   sock.sendMessage(m.chat, { audio: {url : `https://f.top4top.io/m_2359l8lje9.mp3`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
   )
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound22':{
	sock.sendMessage(m.chat, { audio: {url : `https://h.top4top.io/m_2392t494n0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound23':{
	sock.sendMessage(m.chat, { audio: {url : `https://l.top4top.io/m_2392z9iat0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound24':{
	sock.sendMessage(m.chat, { audio: {url : `https://c.top4top.io/m_2392tu9dn0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound25':{
	sock.sendMessage(m.chat, { audio: {url : `https://a.top4top.io/m_2392iyw8o0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound26':{
	sock.sendMessage(m.chat, { audio: {url : `https://g.top4top.io/m_2392b6qt30.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound27':{
	sock.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_2392qrken0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound28':{
	sock.sendMessage(m.chat, { audio: {url : `https://j.top4top.io/m_2392flgek0.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'sound29':{
	sock.sendMessage(m.chat, { audio: {url : `https://d.top4top.io/m_2392aqut40.m4a`}, mimetype: 'audio/mp4', ptt: true}, {quoted: ftroli}
	)
  }
  addCmd(command.slice(1), 1, commund)
  break
case prefix+'doge':
case prefix+'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.packname2, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bucinstick':
case prefix+'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.packname2, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'patrik':
case prefix+'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await sock.sendVideoAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.packname2, })
await fs.unlinkSync(encmedia)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
sock.sendMessage(from, { sticker : buff}) 
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'list':
            if (!m.isGroup) return ads('khusus Grup')
            const arielkece12 = `Hii Kak *${m.pushName}* ${ucapanWaktu}

Silahkan Klick Button Dibawah Untuk Melihat Beberapa List Toko JB Yang Tersedia Di Group *${groupName}*`
            if (db_respon_list.length === 0) return ads(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return ads(`Belum ada list message yang terdaftar`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: arielkece12,
                buttonText: 'Click Here!',
                footer: `${groupName} List`, 
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            sock.sendMessage(from, listMsg, {quoted :ftroli })
addCmd(command.slice(1), 1, commund)
            break
        case prefix+'addlist':
            if (!m.isGroup) return ads('khusus Grup')
            if (!isAdmins && !isCreator) return ads(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return ads(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return ads(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
            let { TelegraPh } = require('./lib/scrape/uploader')
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        addResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        ads(`User *${pushname}* Telah Menambahkan List Jual : *${args1}* Di *${groupName}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
            }
            addCmd(command.slice(1), 1, commund)
            break
        case prefix+'dellist':
            if (!m.isGroup) return ads('khusus Grup')
            if (!isAdmins && !isCreator) return ads(mess.admin)
            if (db_respon_list.length === 0) return ads(`Belum ada list message di database`)
            if (!q) return ads(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return ads(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            ads(`Sukses delete list message dengan key *${q}*`)
            addCmd(command.slice(1), 1, commund)
            break
        case prefix+'updatelist':
            if (!m.isGroup) return ads('khusus Grup')
            if (!isAdmins && !isCreator) return ads(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return ads(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return ads(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (isImage || isQuotedImage) {
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        updateResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        ads(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                ads(`Sukses update respon list dengan key *${args1}*`)
            }
            addCmd(command.slice(1), 1, commund)
            break
            
case prefix+'dashboard': {
if (isBan) return reply(mess.ban)
var jumlahCmd = commund.length
if (jumlahCmd > 10) jumlahCmd = 10
teks = `*「 Total Hit Command 」*\nGlobal Hit : ${hit.all || 'Load Detect'}\nToday Hit : ${hit.today || 'Load Detect'}\n*Most Command Global*\n`
for (let i = 0; i < jumlahCmd ; i ++) {
teks += `\n » Command : #${commund[i].id}, ${commund[i].total} used`
}
ads(teks) 
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tes':
ads('y') 

break
case prefix+'fajar-news':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "🇮🇩🇮??🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩🇮🇩"
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+"darkjoke":
var res = await Darkjokes()
teks = "\nDarkjokes*"
sock.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
addCmd(command.slice(1), 1, commund)
break
case prefix+'cerpen':{
if (!q) return ads(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
ads(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'sewa':
if (!isCreator) return ads('Khusus Owner') 
if (!q) return ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
ads(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./worker/src/sewa.json', JSON.stringify(sewa))
ads(mess.success)
} else {
ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewalist': 
case prefix+'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
ads(txtnyee)
addCmd(command.slice(1), 1, commund)
break
case prefix+'sewacheck':
case prefix+'ceksewa': 
if (!m.isGroup) return ads('khusus Grup')
if (!isSewa) return ads(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
ads(sewanya)
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppbot': {
                if (!isCreator) return ads(mess.owner)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ads(mess.success)
                }
                addCmd(command.slice(1), 1, commund)
break
case'glitch3':
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case prefix+'3dbox':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break


case prefix+'drapwater':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
    .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case prefix+'lion2':
  if(!q) return ads(`Penggunaan ${command} teks`)
  ads(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
     .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case prefix+'papercut':
      if(!q) return ads(`Penggunaan ${command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case prefix+'transformer':
      if(!q) return ads(`Penggunaan ${command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break
   

case prefix+'herryp':
       if(!q) return ads(`Penggunaan ${command} teks|teks`)
       ads(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
 .catch((err) => console.log(err));
 addCmd(command.slice(1), 1, commund)
break


case prefix+'neondevil':
      if(!q) return ads(`Penggunaan ${command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case prefix+'3dstone':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'3davengers':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'thunder':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'window':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case prefix+'graffiti':
   case prefix+'grafiti':
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'pornhub':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'blackpink':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case prefix+'glitch':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'glitch2':
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'glitch3':
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'3dspace':
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'lion':
if(!q) return ads(`Penggunaan ${command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'3dneon':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'neon':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'greenneon':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   
  
case prefix+'bokeh':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   

case prefix+'hollographic':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'bear':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'wolf':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break




case prefix+'joker':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'dropwater':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'neonlight':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break






case prefix+'natural':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'carbon':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case prefix+'pencil':
if(!q) return ads(`Penggunaan ${command} teks`)
ads(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => sock.sendMessage(m.chat, { image: { url: data }, caption: `${global.namebot}` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
  
 
case prefix+'candy': case prefix+'christmas': case prefix+'3dchristmas': case prefix+'sparklechristmas':
case prefix+'deepsea': case prefix+'scifi': case prefix+'rainbow': case prefix+'waterpipe': case prefix+'spooky': 
case prefix+'pencil': case prefix+'circuit': case prefix+'discovery': case prefix+'metalic': case prefix+'fiction': case prefix+'demon': 
case prefix+'transformer': case prefix+'berry': case prefix+'thunder': case prefix+'magma': case prefix+'3dstone': 
case prefix+'neonlight': case prefix+'glitch': case prefix+'harrypotter': case prefix+'brokenglass': case prefix+'papercut': 
case prefix+'watercolor': case prefix+'multicolor': case prefix+'neondevil': case prefix+'underwater': case prefix+'graffitibike':
 case prefix+'snow': case prefix+'cloud': case prefix+'honey': case prefix+'ice': case prefix+'fruitjuice': case prefix+'biscuit': case prefix+'wood': 
case prefix+'chocolate': case prefix+'strawberry': case prefix+'matrix': case prefix+'blood': case prefix+'dropwater': case prefix+'toxic': 
case prefix+'lava': case prefix+'rock': case prefix+'bloodglas': case prefix+'hallowen': case prefix+'darkgold': case prefix+'joker': case prefix+'wicker':
 case prefix+'firework': case prefix+'skeleton': case prefix+'blackpink': case prefix+'sand': case prefix+'glue': case prefix+'1917': case prefix+'leaves': {
             if (!q) return ads(`Example : ${command} ${global.author}`) 
             ads(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                sock.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
             addCmd(command.slice(1), 1, commund)
break

case prefix+'emojimix': {
if (!q) throw `*Example :* ${command} 😅+🤔`
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await sock.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.packname2, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getcase':
if (!isCreator) return ads(mess.owner)
const getCase = (cases) => {
return "case prefix+"+`'${cases}'`+fs.readFileSync("worker/Base-Ariel-Sandy-Permana.js").toString().split('case prefix+\''+cases+'\'')[1].split("break")[0]+"break"
}
ads(`${getCase(q)}`)
addCmd(command.slice(1), 1, commund)
break
case prefix+'arielkece':
let buttons = [
{buttonId: `${prefix}ping`, buttonText: {displayText: '📈𝘚𝘵𝘢𝘵𝘶𝘴'}, type: 1},
{buttonId: `${prefix}tesbang`, buttonText: {displayText: '🗿CATALOG'}, type: 1}, 
{buttonId: `${prefix}menu`, buttonText: {displayText: '🖱️ Simple Menu'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync(`./worker/media/image/thumb.jpg`), 
fileName: global.namebot, 
mimetype: `application/pdf`,
fileLength: "82999999990000000000",
pageCount: "160207", 
jpegThumbnail: tamnel,
caption: listmn,
mentions:[sender],
footer: global.footer, 
buttons: buttons,
headerType: 4,
contextInfo: {
"externalAdReply": { 
"title" : global.namebot,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": fs.readFileSync('./worker/media/image/Ariel.jpg'),
"mediaUrl": global.linkgrupss, 
"thumbnail": fs.readFileSync('./worker/media/image/thumb.jpg'),
"sourceUrl" : global.linkgrupss 
}}
}

sock.sendMessage(m.chat, buttonMessage, { quoted: ftroli}) 
				  
break
case prefix+'textmaker': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
sock.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
ads(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'emoji': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
sock.sendImageAsSticker(sender, emoji.images[4].url, m, { packname: global.packname, author: global.packname2})
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'suitpvp': case prefix+'suit': {
if (isBan) return ads(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) ads(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return ads(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return ads(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await sock.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) sock.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'family100': {
if (isBan) return ads(mess.ban)
if ('family100'+m.chat in _family100) {
ads('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: '#family100'+m.chat,
pesan: await sock.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebakkabupaten':{
 if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung") 

   
   let datta = tebakkabupaten
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let gambar = data.url
   let teks = `*TEBAK KABUPATEN*\n\nApa nama kabupaten dari lambang tersebut!\nWaktu : ${waktu}s`
   _tebakkabupaten[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakkabupaten[m.sender.split('@')[0]].time)
   if (_tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkabupaten[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebakkabupaten.json", JSON.stringify(_tebakkabupaten))
 
    }
 }
 break
 case prefix+'tebakanime':{
 if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")

   
   let datta = tebakanime
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let gambar = data.image
   let japan = data.name_jp
   let teks = `*TEBAK ANIME*\n\nSiapa nama Karakter pada gambar tersebut!\n${japan}\nWaktu : ${waktu}s`
   _tebakanime[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakanime[m.sender.split('@')[0]].time)
   if (_tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakanime[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebakanime.json", JSON.stringify(_tebakanime))
 
    }
 }
 break
 case prefix+'tebakbendera':{
 if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   

   
   /*
   / 1000 = 1 detik
   / 60000 = 1 menit
   >_tebakbendera
   */
   let datta = tebakbendera
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.name
   let gambar = data.img
   let teks = `*TEBAK BENDERA*\n\nApa nama bendera pada gambar tersebut!\nWaktu : ${waktu}s`
   _tebakbendera[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
  sock.sendMessage(from, { image: { url: gambar }, caption: teks }, { quoted: m })
   await sleep(_tebakbendera[m.sender.split('@')[0]].time)
   if (_tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakbendera[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebakbendera.json", JSON.stringify(_tebakbendera))
 
    }
 }
 break
case prefix+'caklontong':{
 if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta = caklontong
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let desk = data.deskripsi
   let teks = `𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _caklontong[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_caklontong[m.sender.split('@')[0]].time)
   if (_caklontong.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: `${jawaban}\n\n${desk}`, mentions: [m.sender] },
{ quoted : m }) 
      delete _caklontong[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/caklontong.json", JSON.stringify(_caklontong))
 
    }
 }
 break
case prefix+'tebaklagu':{
 if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta =  tebaklagu
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.title
   let soal = data.artists
   let songs = data.songs
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n_Apa Nama Judulnya_\n*Artist:* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklagu[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
sock.sendMessage(from, { text : teks}, { quoted: m })
await sock.sendMessage(from, { audio: {url : songs }, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
  await sleep(_tebaklagu[m.sender.split('@')[0]].time)
   if (_tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklagu[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebaklagu.json", JSON.stringify(_tebaklagu))
 
    }
 }
 break
case prefix+'tebaklirik':{
 if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta =  tebaklirik
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tebaklirik[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tebaklirik[m.sender.split('@')[0]].time)
   if (_tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebaklirik[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebaklirik.json", JSON.stringify(_tebaklirik))
 
    }
 }
 break
case prefix+'tekateki':{
 if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta = tekateki
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s`
   _tekateki[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tekateki[m.sender.split('@')[0]].time)
   if (_tekateki.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tekateki[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tekateki.json", JSON.stringify(_tekateki))
 
    }
 }
 break
case prefix+'ppcp':
case prefix+'couple': {
let coupleea = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = coupleea[Math.floor(Math.random() * coupleea.length)]
sock.sendMessage(m.chat, { image: { url: random.male }, caption: `Done` }, { quoted: m })
sock.sendMessage(m.chat, { image: { url: random.female }, caption: `Done` }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tebakkalimat':{
 if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta = tebakkalimat
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let hint = data.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧;\n\n*Soal :* ${soal}\n\nWaktu : ${waktu}s\nHint : ${hint}`
   _tebakkalimat[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tebakkalimat[m.sender.split('@')[0]].time)
   if (_tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tebakkalimat[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebakkalimat.json", JSON.stringify(_tebakkalimat))
 
    }
 }
 break
case prefix+'susunkata':{
 if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta = susunkata
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let tipe = data.tipe
   let teks = `𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔;\n\n*Soal :* ${soal}\n*Tipe :* ${tipe}\n\nWaktu : ${waktu}s`
   _susunkata[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_susunkata[m.sender.split('@')[0]].time)
   if (_susunkata.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _susunkata[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/susunkata.json", JSON.stringify(_susunkata))
 
    }
 }
 break
case prefix+'asahotak':{
 if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta = asahotak
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.jawaban
   let soal = data.soal
   let teks = `𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Soal :* ${soal}adalah\n\nWaktu : ${waktu}s`
   _asahotak[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_asahotak[m.sender.split('@')[0]].time)
   if (_asahotak.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _asahotak[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/asahotak.json", JSON.stringify(_asahotak))
 
    }
 }
 break
case prefix+'tebakkimia':{
 if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih ada permainan yang sedang berlangsung")
   
   let datta = tebakkimia
   let jsonData = JSON.parse(datta);
   let xm = Math.floor(Math.random() * jsonData.length);
   let data = jsonData[xm];
   console.log(data)//hasil di tampilkan di cmd
   let jawaban = data.lambang
   let unsur = data.unsur
   let teks = `𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\nLambang unsur dari ${unsur} adalah\nWaktu : ${waktu}s`
   _tbkkimia[m.sender.split('@')[0]] = { user: m.sender, jawaban: jawaban.toLowerCase(), time: waktu }  
  fs.writeFileSync("./worker/src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
  sock.sendMessage(from, { text : teks}, { quoted: m })
   await sleep(_tbkkimia[m.sender.split('@')[0]].time)
   if (_tbkkimia.hasOwnProperty(m.sender.split('@')[0])) {
      sock.sendMessage(from, { text: jawaban, mentions: [m.sender] },
{ quoted : m }) 
      delete _tbkkimia[m.sender.split('@')[0]]
      fs.writeFileSync("./worker/src/game/dbgame/tebakkimia.json", JSON.stringify(_tbkkimia))
 
    }
 }
 break
case prefix+'ttc': case prefix+'ttt': case prefix+'tictactoe': {
if (isBan) return ads(mess.ban)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return ads('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
ads('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await sock.sendText(room.x, str, m, { mentions: parseMention(str) } )
await sock.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: '#tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
ads('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
addCmd(command.slice(1), 1, commund)
break

case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: '#start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                sock.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await sock.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, sock.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: '#start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await sock.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await sock.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: '#keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await sock.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, sock.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '#next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '#keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await sock.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, sock.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await sock.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, sock.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '#keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await sock.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, sock.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: '#start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await sock.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await sock.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: '#next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: '#keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await sock.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, sock.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await sock.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, sock.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: '#keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await sock.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, sock.user.name, m)
                }
                break
            }

case prefix+'delttc': case prefix+'delttt': {
if (isBan) return ads(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
sock.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
ads(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
ads('rusak')
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'delete': case prefix+'del': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'halah': case prefix+'hilih': case prefix+'huluh': case prefix+'heleh': case prefix+'holoh': {
if (isBan) return ads(mess.ban)
if (!m.quoted && !args.join(" ")) return ads(`Kirim/reply text dengan caption ${command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
ads(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listpc': {
if (isBan) return ads(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listgc': {
if (isBan) return ads(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await sock.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
sock.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'afk': {
if (isBan) return ads(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
ads(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setcmd': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Pesan!')
if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
if (!args.join(" ")) return ads(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
ads(`Done!`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'delcmd': {
if (isBan) return ads(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return ads(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
ads(`Done!`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listcmd': {
if (isBan) return ads(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
sock.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'lockcmd': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!m.quoted) return ads('Reply Pesan!')
if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return ads('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
ads('Done!')
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'addmsg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return ads(`Example : ${command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return ads(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
ads(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'getmsg': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return ads(`'${args.join(" ")}' tidak terdaftar di list pesan`)
sock.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listmsg': {
if (isBan) return ads(mess.ban)
try {
let msgs = JSON.parse(fs.readFileSync('./worker/src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
listMsgs = []
for (let i of seplit) {
listMsgs.push({
title: `${i.nama}`, rowId: `${i.nama}`, description: `${getContentType(i.message).replace(/Message/i, '')}`})
}
const sections = [
{
title: "Total Message " + seplit.length,
rows: listMsgs
}
]

const listMessage = {
text: "ketuk button dibawah untuk melihat daftar list respon message, ketuk lagi untuk menjalankan fiturnya",
footer: global.footer,
title: "     「 List Respon Message 」",
buttonText: "List Message",
sections
}
sock.sendMessage(from, listMessage, {quoted:m})
} catch {
ads(`Belum ada respon message yang ditambahkan dalam list`)
}
}
break
case prefix+'fliptext': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example:\n${prefix}fliptext ${global.author}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
ads(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tohuruf': {
if (isBan) return ads(mess.ban)
if (!Number(args[0])) return ads(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
ads(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		ads('Sukses Bang')
		await sock.updateBlockStatus(users, 'block').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
	break
        case prefix+'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		ads('Sukses Bang')
		await sock.updateBlockStatus(users, 'unblock').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
	}
	addCmd(command.slice(1), 1, commund)
	break
case prefix+'antilink': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins) return ads(mess.admin)
if (args[0] === "on") {
if (AntiLink) return ads('Sudah Aktif')
ntilink.push(from)
ads('Succes menyalakan antilink di group ini')
var groupe = await sock.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
sock.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return ads('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
ads('Succes mematikan antilink di group ini')
} else {
const gajelas = 'Hai Admin Kont, Silahkan Pilih Button Dibawah Untuk Fitur AnTi Link'
let antisange = [{buttonId: `#antilink on`, buttonText: {displayText: 'Aktif Kan 🙏'}, type: 1},{buttonId: `#antilink off`, buttonText: {displayText: 'Mati Kan 🙏'}, type: 1},]
let antivirus = {image: { url: './worker/media/image/thumb.jpg' },caption: gajelas,footer: global.namebot,buttons: antisange,headerType: 4}
sock.sendMessage(m.chat, antivirus, { quoted: ftextt })
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'listonline': case prefix+'listaktif': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
sock.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'chat': {
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Example :\n${command} 62821xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan Dari Owner Bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
sock.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:ftroli})
}
await ads("Succes")
addCmd(command.slice(1), 1, commund)
break
case prefix+'cowner': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args[0]) return ads(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return ads('User sudah menjadi owner')
owner.push(orgnye)
ads(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return ads('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
ads(`Succes del friends`)
} else {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ban': {
if (!isCreator) return ads(mess.owner)
if (!args[0]) return ads(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User sudah dibanned')
banUser.push(orgnye)
ads(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return ads('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
ads(`Succes delban`)
} else {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break

case prefix+'request': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'report': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : \n- ${command} fitur ig error min\n- ${command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of conth) {
sock.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
sock.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'diarytext': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Cara : ${command} Aku Menunggumu Karena Aku Ingin Memilikimu, Tapi Engkau Memilih Dia :)\n\nKata Kata Mu Akan Dikirim Ke Group Aespi Botz Official, Jika Belum Bergabung Silahkan Klick Link Ini https://chat.whatsapp.com/GDdlaFZDuLZFN32LqFhhWK`)
ads('Kata² Mu Sudah Dikirim Ke *Aespi Botz Group Official*')
teks = `*「 DIARY TEXT 」*\n\n*_${args.join(" ")}_*\n\nBy : @${m.sender.split("@")[0]}`
for (let i of arielindahsp) {
sock.sendMessage(i + "@g.us", {text: teks, mentions:[m.sender]}, {quoted:m})
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'mcserver': case prefix+'mcquery': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : \n${command} ip|port\nUses : \n${command} play.aespibotz.com|1211`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return ads("ipnya mana kak?")
if (!portnya) return ads("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
(jsonformat(success));
return q.basicStat()
})
.then(success => {
(jsonformat(success));
q.close();
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'mcpedl': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `#menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: global.footer,
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'happymod': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: global.footer,
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'creategc': {
if (!isCreator) return ads(`Khusus ${global.author}`)
if (args.length < 1) return ads(`Example : ${prefix}creategc Aespi Botz Group Ofiicial`)
let cret = await sock.groupCreate(args.join(" "), [])
let response = await sock.groupInviteCode(cret.id)
teks = `  「 *Create Group* 」

_▸ Nama : ${cret.subject}_
_▸ Pembuat : @${cret.owner.split("@")[0]}_
_▸ Waktu : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB_
_▸ Link Group : https://chat.whatsapp.com/${response}_
`
ads(teks)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'searchgc': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: global.footer,
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'servermc': {
if (isBan) return ads(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: global.footer,
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'yts': case prefix+'ytsearch': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${command} dj 30 detik`)
ads('Mohon Tunggu 20 Detik, Bot Sedang Mencari Lagu Yang Anda Cari')
let yts = require("yt-search")
let arielTiktod1 = await yts(text)
let ggAbiss1 = arielTiktod1.videos[Math.floor(Math.random() * arielTiktod1.videos.length)];
let arielTiktod2 = await yts(text)
let ggAbis2 = arielTiktod2.videos[Math.floor(Math.random() * arielTiktod2.videos.length)];
let arielTiktod3 = await yts(text)
let ggAbis3 = arielTiktod3.videos[Math.floor(Math.random() * arielTiktod3.videos.length)];
let arielTiktod4 = await yts(text)
let ggAbis4 = arielTiktod4.videos[Math.floor(Math.random() * arielTiktod4.videos.length)];
let arielTiktod5 = await yts(text)
let ggAbis5 = arielTiktod5.videos[Math.floor(Math.random() * arielTiktod5.videos.length)];
let arielTiktod6 = await yts(text)
let ggAbis6 = arielTiktod6.videos[Math.floor(Math.random() * arielTiktod6.videos.length)];
let arielTiktod7 = await yts(text)
let ggAbis7 = arielTiktod7.videos[Math.floor(Math.random() * arielTiktod7.videos.length)];
let arielTiktod8 = await yts(text)
let ggAbis8 = arielTiktod8.videos[Math.floor(Math.random() * arielTiktod8.videos.length)];
let arielTiktod9 = await yts(text)
let ggAbis9 = arielTiktod9.videos[Math.floor(Math.random() * arielTiktod9.videos.length)];
let arielTiktod10 = await yts(text)
let ggAbis10 = arielTiktod10.videos[Math.floor(Math.random() * arielTiktod10.videos.length)];
let arielTiktod11 = await yts(text)
let ggAbis11 = arielTiktod11.videos[Math.floor(Math.random() * arielTiktod11.videos.length)];
let arielTiktod12 = await yts(text)
let ggAbis12 = arielTiktod12.videos[Math.floor(Math.random() * arielTiktod12.videos.length)];
let arielTiktod13 = await yts(text)
let ggAbis13 = arielTiktod13.videos[Math.floor(Math.random() * arielTiktod13.videos.length)];
let arielTiktod14 = await yts(text)
let ggAbis14 = arielTiktod14.videos[Math.floor(Math.random() * arielTiktod14.videos.length)];
let arielTiktod15 = await yts(text)
let ggAbis15 = arielTiktod15.videos[Math.floor(Math.random() * arielTiktod15.videos.length)];
let arielTiktod16 = await yts(text)
let ggAbis16 = arielTiktod16.videos[Math.floor(Math.random() * arielTiktod16.videos.length)];
let arielTiktod17 = await yts(text)
let ggAbis17 = arielTiktod17.videos[Math.floor(Math.random() * arielTiktod17.videos.length)];
const arielkecesp = `Hii Kak *${m.pushName}* ${ucapanWaktu}

Silahkan Klick Button Dibawah Untuk Melihat Yang Anda Cari Di Fitur YouTube Search`
let sections = [
{
title: `1. ${ggAbiss1.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbiss1.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbiss1.title}\n👤 Pemilik Channel : ${ggAbiss1.author.name}\n⌚ Durasi Video : ${ggAbiss1.timestamp}\n🔗 Link Pemilik : ${ggAbiss1.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbiss1.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbiss1.title}\n👤 Pemilik Channel : ${ggAbiss1.author.name}\n⌚ Durasi Video : ${ggAbiss1.timestamp}\n🔗 Link Pemilik : ${ggAbiss1.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `2. ${ggAbis2.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis2.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis2.title}\n👤 Pemilik Channel : ${ggAbis2.author.name}\n⌚ Durasi Video : ${ggAbis2.timestamp}\n🔗 Link Pemilik : ${ggAbis2.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis2.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis2.title}\n👤 Pemilik Channel : ${ggAbis2.author.name}\n⌚ Durasi Video : ${ggAbis2.timestamp}\n🔗 Link Pemilik : ${ggAbis2.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `3. ${ggAbis3.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis3.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis3.title}\n👤 Pemilik Channel : ${ggAbis3.author.name}\n⌚ Durasi Video : ${ggAbis3.timestamp}\n🔗 Link Pemilik : ${ggAbis3.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis3.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis3.title}\n👤 Pemilik Channel : ${ggAbis3.author.name}\n⌚ Durasi Video : ${ggAbis3.timestamp}\n🔗 Link Pemilik : ${ggAbis3.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `4. ${ggAbis4.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis4.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis4.title}\n👤 Pemilik Channel : ${ggAbis4.author.name}\n⌚ Durasi Video : ${ggAbis4.timestamp}\n🔗 Link Pemilik : ${ggAbis4.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis4.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis4.title}\n👤 Pemilik Channel : ${ggAbis4.author.name}\n⌚ Durasi Video : ${ggAbis4.timestamp}\n🔗 Link Pemilik : ${ggAbis4.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `5. ${ggAbis5.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis5.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis5.title}\n👤 Pemilik Channel : ${ggAbis5.author.name}\n⌚ Durasi Video : ${ggAbis5.timestamp}\n🔗 Link Pemilik : ${ggAbis5.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis5.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis5.title}\n👤 Pemilik Channel : ${ggAbis5.author.name}\n⌚ Durasi Video : ${ggAbis5.timestamp}\n🔗 Link Pemilik : ${ggAbis5.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `6. ${ggAbis6.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis6.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis6.title}\n👤 Pemilik Channel : ${ggAbis6.author.name}\n⌚ Durasi Video : ${ggAbis6.timestamp}\n🔗 Link Pemilik : ${ggAbis6.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis6.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis6.title}\n👤 Pemilik Channel : ${ggAbis6.author.name}\n⌚ Durasi Video : ${ggAbis6.timestamp}\n🔗 Link Pemilik : ${ggAbis6.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `7. ${ggAbis7.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis7.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis7.title}\n👤 Pemilik Channel : ${ggAbis7.author.name}\n⌚ Durasi Video : ${ggAbis7.timestamp}\n🔗 Link Pemilik : ${ggAbis7.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis7.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis7.title}\n👤 Pemilik Channel : ${ggAbis7.author.name}\n⌚ Durasi Video : ${ggAbis7.timestamp}\n🔗 Link Pemilik : ${ggAbis7.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `8. ${ggAbis8.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis8.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis8.title}\n👤 Pemilik Channel : ${ggAbis8.author.name}\n⌚ Durasi Video : ${ggAbis8.timestamp}\n🔗 Link Pemilik : ${ggAbis8.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis8.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis8.title}\n👤 Pemilik Channel : ${ggAbis8.author.name}\n⌚ Durasi Video : ${ggAbis8.timestamp}\n🔗 Link Pemilik : ${ggAbis8.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `9. ${ggAbis9.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis9.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis9.title}\n👤 Pemilik Channel : ${ggAbis9.author.name}\n⌚ Durasi Video : ${ggAbis9.timestamp}\n🔗 Link Pemilik : ${ggAbis9.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis9.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis9.title}\n👤 Pemilik Channel : ${ggAbis9.author.name}\n⌚ Durasi Video : ${ggAbis9.timestamp}\n🔗 Link Pemilik : ${ggAbis9.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `10. ${ggAbis10.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis10.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis10.title}\n👤 Pemilik Channel : ${ggAbis10.author.name}\n⌚ Durasi Video : ${ggAbis10.timestamp}\n🔗 Link Pemilik : ${ggAbis10.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis10.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis10.title}\n👤 Pemilik Channel : ${ggAbis10.author.name}\n⌚ Durasi Video : ${ggAbis10.timestamp}\n🔗 Link Pemilik : ${ggAbis10.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `11. ${ggAbis11.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis11.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis11.title}\n👤 Pemilik Channel : ${ggAbis11.author.name}\n⌚ Durasi Video : ${ggAbis11.timestamp}\n🔗 Link Pemilik : ${ggAbis11.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis11.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis11.title}\n👤 Pemilik Channel : ${ggAbis11.author.name}\n⌚ Durasi Video : ${ggAbis11.timestamp}\n🔗 Link Pemilik : ${ggAbis11.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `12. ${ggAbis12.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis12.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis12.title}\n👤 Pemilik Channel : ${ggAbis12.author.name}\n⌚ Durasi Video : ${ggAbis12.timestamp}\n🔗 Link Pemilik : ${ggAbis12.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis12.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis12.title}\n👤 Pemilik Channel : ${ggAbis12.author.name}\n⌚ Durasi Video : ${ggAbis12.timestamp}\n🔗 Link Pemilik : ${ggAbis12.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `13. ${ggAbis13.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis13.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis13.title}\n👤 Pemilik Channel : ${ggAbis13.author.name}\n⌚ Durasi Video : ${ggAbis13.timestamp}\n🔗 Link Pemilik : ${ggAbis13.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis13.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis13.title}\n👤 Pemilik Channel : ${ggAbis13.author.name}\n⌚ Durasi Video : ${ggAbis13.timestamp}\n🔗 Link Pemilik : ${ggAbis13.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `14. ${ggAbis14.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis14.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis14.title}\n👤 Pemilik Channel : ${ggAbis14.author.name}\n⌚ Durasi Video : ${ggAbis14.timestamp}\n🔗 Link Pemilik : ${ggAbis14.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis14.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis14.title}\n👤 Pemilik Channel : ${ggAbis14.author.name}\n⌚ Durasi Video : ${ggAbis14.timestamp}\n🔗 Link Pemilik : ${ggAbis14.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `15. ${ggAbis15.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis15.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis15.title}\n👤 Pemilik Channel : ${ggAbis15.author.name}\n⌚ Durasi Video : ${ggAbis15.timestamp}\n🔗 Link Pemilik : ${ggAbis15.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis15.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis15.title}\n👤 Pemilik Channel : ${ggAbis15.author.name}\n⌚ Durasi Video : ${ggAbis15.timestamp}\n🔗 Link Pemilik : ${ggAbis15.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `16. ${ggAbis16.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis16.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis16.title}\n👤 Pemilik Channel : ${ggAbis16.author.name}\n⌚ Durasi Video : ${ggAbis16.timestamp}\n🔗 Link Pemilik : ${ggAbis16.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis16.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis16.title}\n👤 Pemilik Channel : ${ggAbis16.author.name}\n⌚ Durasi Video : ${ggAbis16.timestamp}\n🔗 Link Pemilik : ${ggAbis16.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
{
title: `17. ${ggAbis17.title}`,
rows: [
{title: `🎧 MP3`, rowId: `#ytmp3 ${ggAbis17.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis17.title}\n👤 Pemilik Channel : ${ggAbis17.author.name}\n⌚ Durasi Video : ${ggAbis17.timestamp}\n🔗 Link Pemilik : ${ggAbis17.author.url}\n🎧 Type : MP3\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
{title: `🎥 MP4`, rowId: `#ytmp4 ${ggAbis17.url}`, description: `Jangan Lupa Subscribe YouTube Owner : ${global.ytLu}\n\n🎥 Judul Video : ${ggAbis17.title}\n👤 Pemilik Channel : ${ggAbis17.author.name}\n⌚ Durasi Video : ${ggAbis17.timestamp}\n🔗 Link Pemilik : ${ggAbis17.author.url}\n🎥 Type : MP4\nMohon Tunggu Sebentar Bot Sedang Mendownload Hasil Nya🗿👍`},
]
},
]
let iniByArielSP = {
footer: `${global.namebot}`,
text: arielkecesp, 
buttonText: `Click Here`,
sections}
sock.sendMessage(m.chat, iniByArielSP, {quoted :ftroli })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setname': case prefix+'setsubject': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!q) return ads('Text ?')
await sock.groupUpdateSubject(m.chat, text).then((res) => ads(mess.success)).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setdesc': case prefix+'setdesk': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!q) return ads('Text ?')
await sock.groupUpdateDescription(m.chat, text).then((res) => ads(mess.success)).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppbot': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
let media = await sock.downloadAndSaveMediaMessage(quoted)
await sock.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
ads(mess.success)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'setppgroup': case prefix+'setppgrup': case prefix+'setppgc': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${command}`)
let media = await sock.downloadAndSaveMediaMessage(quoted)
await sock.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
ads(mess.success)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tagall': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
sock.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'hidetag': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
sock.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'linkgroup': case prefix+'linkgc': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
let response = await sock.groupInviteCode(m.chat)
sock.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: global.fake,
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": global.fake,
"body": `Subscribe To Channel YouTube ${global.nameyt}`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": "https://youtu.be/1MvzEYyf_gg"
}}}, { quoted: m, detectLink: true })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'revoke': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
sock.groupRevokeInvite(m.chat)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ephemeral': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!args[0]) return ads('Masukkan value enable/disable')
if (args[0] === 'enable') {
await sock.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
} else if (args[0] === 'disable') {
await sock.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'editinfo': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args[0] === 'open'){
await sock.groupSettingUpdate(m.chat, 'unlocked').then((res) => ads(`Sukses Membuka Edit Info Group`)).catch((err) => (jsonformat(err)))
} else if (args[0] === 'close'){
await sock.groupSettingUpdate(m.chat, 'locked').then((res) => ads(`Sukses Menutup Edit Info Group`)).catch((err) => (jsonformat(err)))
} else {
let buttons = [
{ buttonid: '#editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonid: '#editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 ${global.nameyt} 」*\n\nChange Info, Select Open Or Close`,
footer: global.footer,
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'group': case prefix+'grup': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args[0] === 'close'){
await sock.groupSettingUpdate(m.chat, 'announcement').then((res) => ads(`Sukses Menutup Group`)).catch((err) => (jsonformat(err)))
} else if (args[0] === 'open'){
await sock.groupSettingUpdate(m.chat, 'not_announcement').then((res) => ads(`Sukses Membuka Group`)).catch((err) => (jsonformat(err)))
} else {
let buttons = [
{ buttonid: '#group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonid: '#group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 ${global.namebot}」*\n\nChange Group Setting, Select Open Or Close`,
footer: global.footer,
buttons: buttons,
headerType: 4
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'promote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
ads('Sukses')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'demote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
ads('Sukses')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'kick': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
ads('Sukses')
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'add': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
ads('Sukses')
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await sock.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bcgc': case prefix+'bcgroup': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${command}  ${global.nameyt}`)
let getGroups = await sock.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
ads(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube',
url: `${global.ytLu}`
}
}, {
urlButton: {
displayText: 'Group JB || Aespi Botz',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: 'All Menu',
id: '#arielkece'
}
}]
let txt = `*「 Broadcast」*\n\n${text}`
sock.send5ButImg(i, txt, global.footer, log0, btn, thum)
}
ads(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'bc': case prefix+'broadcast': case prefix+'bcall': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${command}  ${global.nameyt}`)
let anu = await store.chats.all().map(v => v.id)
ads(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'YouTube',
url: `${global.ytLu}`
}
}, {
urlButton: {
displayText: 'Group JB || Aespi Botz',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: 'All Menu',
id: '#arielkece'
}
}]
let txt = `*「 Broadcast」*\n\n${text}`
sock.send5ButImg(yoi, txt, global.footer, log0, btn, thum)
}
ads('Sukses Broadcast')
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'inspect': {
if (!args[0]) return ads("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return ads("Link Invalid")
sock.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await sock.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
sock.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await sock.parseMention(tekse) })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'join': {
if (!isCreator) throw mess.owner
if (!q) throw 'Masukkan Link Group!'
ads('Sukses')
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
ads(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await sock.groupAcceptInvite(result).then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'leave': {
                if (!isCreator) throw mess.owner
                ads('Sukses')
                await sock.groupLeave(m.chat).then((res) => (jsonformat(res))).catch((err) => (jsonformat(err)))
            }
            addCmd(command.slice(1), 1, commund)
            break
case prefix+'bass': case prefix+'blown': case prefix+'deep': case prefix+'earrape': case prefix+'fast': case prefix+'fat': case prefix+'nightcore': case prefix+'reverse': case prefix+'robot': case prefix+'slow': case prefix+'smooth': case prefix+'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ads(mess.wait)
                let media = await sock.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return ads(err)
                let buff = fs.readFileSync(ran)
                sock.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else ads(`Balas audio yang ingin diubah dengan caption *${command}*`)
                } catch (e) {
                ads(e)
                }
                addCmd(command.slice(1), 1, commund)
break
case prefix+'nuliskanan': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
m.reply(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./worker/media/image/sebelumkanan.jpg','-font','./worker/media/font/nulis.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./worker/media/image/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
               sock.sendMessage(from, {image:fs.readFileSync('./worker/media/image/setelahkanan.jpg'), caption:'Succes'})
                })
            }
addCmd(command.slice(1), 1, commund)
break
case prefix+'kalkulator': case prefix+'kal': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
ads('Error')
} else {
ads(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'public': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
sock.public = true
ads('Sukse Change To Public Usage')
sock.setStatus(`🤖 ${global.namebot} ONLINE, Mode : Public, By ${global.nameown}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'self': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
sock.public = false
ads('Sukses Change To Self Usage')
sock.setStatus(`Mode : Private`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'ping': case prefix+'botstatus': case prefix+'statusbot': {
if (isBan) return ads(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
ads(respon)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'toimage': case prefix+'toimg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${command}*`)
ads(mess.wait)
let media = await sock.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
sock.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tomp4': case prefix+'tovideo': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${command}*`)
ads(mess.wait)
let { webp2mp4File } = require('./lib/scrape/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'toaud': case prefix+'toaudio': {
if (isBan) return ads(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${command}`)
ads(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tomp3': {
if (isBan) return ads(mess.ban)
if (/document/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${command}`)
ads(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
sock.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${sock.user.name} (${m.id}).mp3`}, { quoted : m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tovn': case prefix+'toptt': {
if (isBan) return ads(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
if (!m.quoted) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${command}`)
ads(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
sock.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'togif': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${command}*`)
ads(mess.wait)
let { webp2mp4File } = require('./lib/scrape/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await sock.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'tourl': {
if (isBan) return ads(mess.ban)
ads(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/scrape/uploader')
let media = await sock.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
ads(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
ads(util.format(anu))
}
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'translate': case prefix+'terjemahan': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
ads(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'gimage': case prefix+'gig': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: global.footer,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: global.namebot,
body:global.footer,
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/1MvzEYyf_gg",
sourceUrl: "https://youtu.be/1MvzEYyf_gg"
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'pinterest': case prefix+'image': {
const { pinterest } = require('./lib/ApiOrScrap')
if (!args[0]) return ads("Mau cari gambar apa kak?")
const arielPinter = await pinterest(q)
const hasil = arielPinter[Math.floor(Math.random(), arielPinter.length)]
sock.sendMessage(m.chat, { image: { url: hasil }, caption: '▹ Ariel Kece' }, { quoted: ftextt })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'play': case prefix+'ytplay': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Mau cari Lagu apa kak?")
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `${prefix}ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `${prefix}ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `${prefix}play ${args[0]}`, buttonText: {displayText: '🔎 Cari Lagi'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*「 YOUTUBE PLAY 」*

⭔ Judul : ${anu.title}
⭔ ID : ${anu.videoId}
⭔ Durasi : ${anu.timestamp}
⭔ Penonton : ${anu.views}
⭔ Upload : ${anu.ago}
⭔ Pemilik : ${anu.author.name}
⭔ Link Channel : ${anu.author.url}
⭔ Deskripsi : ${anu.description}
⭔ Link Video : ${anu.url}`,
footer: global.footer,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: global.footer,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
sock.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'mediafire':
if (!args[0]) return ads("Contoh : #mediafire https://www.mediafire.com/file/mz37h4v0hmaj0ox/Aespi-Botz.apk/file")
if (!args[0].includes('mediafire')) return m.reply(`Link is not valid`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*				
🌚 Judul : ${baby1[0].nama}
🖱️Link : ${baby1[0].link}
📝 Size : ${baby1[0].size}				
_Mengirim file..._`
ads(result4)
sock.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
addCmd(commacnd.slice(1), 1, commund)
break
case prefix+'imagenobg': case prefix+'removebg': case prefix+'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${command}`
	    let remobg = require('remove.bg')
	    let apinobg = ['ZgRVh31sJBVaWQcy1C7MTjy9']
	    hmm = await './worker/src/remobg-'+getRandom('')
	    localFile = await sock.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './worker/src/hremo-'+getRandom('.png')
	    m.reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    sock.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    addCmd(command.slice(1), 1, commund)
	    break
case prefix+'tiktokmp3': {
  if (!args[0]) return ads("Contoh : #tiktokmp3 https://vt.tiktok.com/ZSRU61aTa/")
  ads(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 ads('Error Bang') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.media[2].url
    sock.sendMessage(m.chat, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
   addCmd(command.slice(1), 1, commund)
 break

case prefix+'tiktok': case prefix+'tiktoknowm': {
  if (!args[0]) return ads("Contoh : #tiktoknowm https://vt.tiktok.com/ZSRU61aTa/")
  ads(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 ads('Error Bang') 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.media[1].url
    sock.sendMessage(m.chat, { video: { url: musim_duren_v }, caption: `Done` }, { quoted: m })
   }
   addCmd(command.slice(1), 1, commund)
  break
case prefix+'owner': case prefix+'creator': {
                sock.sendContact(from, global.owner, m)
            }
            addCmd(command.slice(1), 1, commund)
            break
case prefix+'smeme': case prefix+'stickmeme': case prefix+'stikmeme': case prefix+'stickermeme': case prefix+'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            let { TelegraPh } = require('./lib/scrape/uploader')
            let mee = await sock.downloadAndSaveMediaMessage(quoted)
            let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
	        let awikwok = await sock.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.packname2 })
	        await fs.unlinkSync(awikwok)
            }
            addCmd(command.slice(1), 1, commund)
	       break
case prefix+'stickerwm': case prefix+'stikerwm': case prefix+'swm': {
if (isBan) return ads(mess.ban)
if (!q) return reply(`Example ${command} ${global.namebot}|Kece`)
arielsp1 = q.split("|")[0]
arielsp2 = q.split("|")[1]
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: arielsp1, author: arielsp2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: arielsp1, author: arielsp2 })
await fs.unlinkSync(encmedia)
} else {
ads(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(1), 1, commund)
break
case prefix+'sticker': case prefix+'stiker': case prefix+'s': {
if (isBan) return ads(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await sock.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await sock.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.packname2 })
await fs.unlinkSync(encmedia)
} else {
ads(`Kirim Gambar/Video Dengan Caption ${command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(1), 1, commund)
break

if (budy.startsWith('=>')) {
if (!isCreator) return ads(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return ads(bang)
}
try {
ads(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
ads(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return ads(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ads(evaled)
} catch (err) {
ads(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return ads(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return sock.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return ads(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
if (!isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
sock.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}

}
} catch (err) {
sock.sendMessage("6282118022072@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

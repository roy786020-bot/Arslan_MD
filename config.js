const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
// add your Session Id ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEFvcXJkNUpaRER3MlFPZ1ZLditYVTZQRHlaNHY0MklLM3o5bzhKSnhGMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ2tMMWJqMEp0aFJMdHMyNmp3c3dsVXBBdFk3S0g4bGVaRHh6NDQrcWVGbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRTJYK01uWW85M3pITks0bTBaQVlJSno1dlgxM01PQjg5VTNyQ0lja2tBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZNWJJQjQvamRSMyttN2oxYTRHaThMeDdvdXhRczNKR3o3eEMvN29NRlhnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDOEJaWXR3b1NsOUNLczR6K1VSRFN5dytlYndDeGl2c0JKR3V3QVNlRnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdUbWdGY3lrVW12VXRDNWlCeXo2UFBjeGdsQkQzWnRoZFRhOUVoUzdqMUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlBvT3lHb01ROWdjaXE3aUR1MjhzUE50WXFMQjZKRnhSZXJhS21mcHNWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRjRpd28ybnpoNHI5RUVudnZaVHpWQURZV1BoM1RTVWdqR1FXRElTM0t3dz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdXQ2MvRVZZOVhBV2xIVzcyUGFndVFvMzBqOGZmNnN5d2lpdEEwUGQ1U01xUm1RL3FmK0k3R25tc2tlTWJOZmFhbU9NK1lYTXBLQ3VEU3NxT2l2YWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIsImFkdlNlY3JldEtleSI6InFreDVlaHVwb2ZsVnl0YjIrb3l6ck5vNTlPVDh4S01rRWVRa2tqTk5oNXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTg5MTM2NzE3NDEzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjMzMTVGQjg3NDZEQUY3NUUzM0EyNTZDMDU3QTMxNEIwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTc3ODY5Nzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ik5TQTVSWjFWIiwibWUiOnsiaWQiOiI5ODkxMzY3MTc0MTM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJtaXNzICBwdWphYSIsImxpZCI6IjE4Nzc4MDY2NzgwMTgyNzoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTJMOHBRQkVOZm1sc1lHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiUjMrUVlxdnNqOFRZYk1yekJPVjRzS0wxaTZMUS9mY25wQ1ZvRGZCWUYxMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUFNYmI4OGNpdC9vamhYQm9sM2VzVjNtV3lTbEEycHRkeEw5M0E4ZEt3VzJGT3VTWmdpMEN1eGRuRVlMZEZLallyVG9wS0VmQ29DQVUzcUs4ZmRWQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InY1Zis3ZW1LdUtacG0rb1RXRDVZT1pMTlowSkRYb0s1Tkh0MFM0YjNnbG9wZTNWT0FlNmZMaXBlQmFsRkRGRmJsekVISWhLb1N6dm1LN3VRZ05ZMmdnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTg5MTM2NzE3NDEzOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVWQva0dLcjdJL0UyR3pLOHdUbGVMQ2k5WXVpMFAzM0o2UWxhQTN3V0JkZCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU3Nzg2OTcyLCJsYXN0UHJvcEhhc2giOiIzZ1BVSmsiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1TcCJ9
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Arslan_MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/lcpy9f.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Arslan_MD",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "Arslan_MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045919",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "ArslanMD Official",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 Arslan_MD*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/lcpy9f.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*Arslan_MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV ||"+98 913 671 7413",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};

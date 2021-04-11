//lista.txt (email@email;cliente_name)
//message.txt(html/css)

////////////////////////////////////
// #npm init -y                   //
// #node install nodemailer       //
////////////////////////////////////

var bitmail = require('nodemailer'),
var utf8 = require("utf8"),
var eol = require("os").EOL,
var fs = require("fs")

var sendmails = bitmail.createTransport({
		host:`${smtp}`,
		service:`${adressSmtp}`,
		port:587,
		secure:1,
		auth:{
			user:`${user}`,
			pass:`${password}`
		}
	});

var msg = readFileSync('message.txt',"utf8");
var lista = readFileSync("list.txt","utf8").split(eol);
	lista = lista.filter((line)=>{
		let [mail,cliente] = line.split(";")
		msg.replace('%NOME%',`${cliente}`);
	});
const mymail = 'bitmail@btmail.com';
var remetente = {
		from:`${mymail}`,
		to:`${mail}`,
		subject:`${asunto}`,
		text:`${msg}`
	};
sendmails.sendMail(remetente,(error)=>{
	if(error){
		console.log(`Falha ao enviar email ${mail}`);
	}else{
		console.log(`${mail} enviado!!`);
	}
});



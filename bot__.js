const WebSocket = require('ws');
const https = require('http');
const wss = new WebSocket.Server({ port: 8080 });
let bots=[];
wss.on('connection', function connection(ws) {
  console.log('CLIENT CONNECTED');
  ws.on('message', function incoming(message) {	
        wss.clients.forEach(function each(client) {
    console.log('RECEIVED: %s', message);
    const msg = (typeof message === 'string') ? message : message.toString();
let gO = -4, d = new Date(),aD = new Date(d.getTime() + (gO * 60 * 60 * 1000)),iS= aD.toISOString(),dT=iS.split("T");
let m=JSON.parse(msg);
let obj={
'cmd':m.cmd,
'dd':dT[0],
'dh':dT[1]
}
function cmd__(c){bots.forEach(e => { 
		 const data = new URLSearchParams();
  data.append('comando', c)
fetch("https://gartic.pics/room/atualizar.php?cache=" + Date.now() + "&idapp=" + e,{
  method: 'POST',
  headers: {              
  'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0',
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  body: data

            })})
	}
if(m.cmd){
	if(m.cmd[0]==="broadcast"){
cmd__('8@'+m.cmd[1]+'@undefined|7@'+m.cmd[1]+'@undefined')
		}
		if(m.cmd[0]==="msg"){
cmd__('7@'+m.cmd[1]+'@undefined')
		}
		if(m.cmd[0]==="answer"){
cmd__('8@'+m.cmd[1]+'@undefined')
		}
	if(m.cmd[0]==="exit"){
		bots.forEach(e => { 

			fetch("https://gartic.pics/room/saida.php/?cache="+ Date.now() + "&idapp=" +e+"&tipo=undefined&ajax=1",{            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0',
                'Content-Type': 'application/json'
			
		 }})});bots=[]
		}
	if(m.cmd[0]==="jump"){
cmd__('16@@undefined')
		}
	if(m.cmd[0]==="report"){cmd__('20@@undefined')
		}
	if(m.cmd[0]==="join"){
let e=                                        [                                                                        '221.231.13.198:1080',  '183.234.215.11:8443',                         '203.19.38.114:1080',   '154.85.58.149:80',                            '195.114.209.50:80',    '185.105.102.179:80',                          '185.105.102.189:80',   '60.188.102.225:18080',                        '192.73.244.36:80',     '198.49.68.80:80',                             '113.108.13.120:8083',  '123.30.154.171:7777',                         '221.231.13.198:1080',  '198.49.68.80:80',                             '198.49.68.80:80',      '154.16.146.46:80',                            '198.49.68.80:80',      '159.65.245.255:80',                           '159.65.245.255:80',    '159.65.245.255:80',                           '198.49.68.80:80',      '78.80.228.150:80',                            '113.108.13.120:8083',  '221.231.13.198:1080',                         '185.105.102.179:80',   '195.114.209.50:80',                           '223.85.12.114:2222',   '203.89.8.107:80',                             '51.75.86.68:3128',     '203.19.38.114:1080',                          '154.65.39.7:80',       '183.234.215.11:8443',                         '123.30.154.171:7777',  '198.49.68.80:80',                             '185.105.102.189:80',   '8.219.97.248:80',                             '198.49.68.80:80',      '202.61.204.51:80',                            '67.43.228.252:25631',  '206.81.31.215:80',                            '192.73.244.36:80',     '51.15.241.34:3128',                           '103.237.144.232:1311', '154.0.12.163:80',                             '20.121.130.84:3128',   '113.192.6.190:80'                           ]

e.forEach((sd) => {
    setTimeout(() => {
    	let login=m.cmd[2]+ Math.floor(Math.random() * 10000);
    let avatar='';
        const url = 'http://gartic.pics/r/join?cache=0&idapp='+login;

        const proxy = {
            host: sd.split(':')[0],
            port: sd.split(':')[1],
        };
if(m.cmd[3]==="random"){avatar=Math.floor(Math.random() * 36)} else { avatar=m.cmd[3]};
        let data = {
            'login': login,
            'tipo': m.cmd[1],
            'avatar': avatar,
            'local': '4',
            'senha': m.cmd[4]
        };

        const options = {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows Phone 10.0; Android 6.0.1; Microsoft; Lumia 650 Dual SIM) Gecko/20100101 Firefox/68.0',
                'Content-Type': 'application/json'
            },
            host: proxy.host,
            port: proxy.port,
            path: url,
            method: 'POST'
        };

        const req = https.request(options, (res) => {
        	let dt='';
       res.on('data', (chunk) => {
        dt += chunk;
      });
      res.on('end', () => {
      	try {
      	if(JSON.parse(dt).erro===false){bots.push(login)}
      	} catch(e){}
      	})
        });

        req.write(JSON.stringify(data));
        req.end();
    }, 100);
});

	}}
})
  });

  ws.send('{"system":"script ativado com sucesso!"}');
});
/* $Id: chickendelivery.js,v 1.3 2012/12/24 11:49:35 rswindell Exp $ */

load("json-client.js");
var root = js.exec_dir;

var server_file = new File(file_cfgname(root, "server.ini"));
server_file.open('r',true);

//var autoUpdate=server_file.iniGetValue(null,"autoUpdate");
var serverAddr=server_file.iniGetValue(null,"host","localhost");
var serverPort=server_file.iniGetValue(null,"port",10088);
server_file.close();

var client=new JSONClient(serverAddr,serverPort);

/*
if(autoUpdate) {
	console.putmsg("\r\n\1nChecking for updates...");
}
*/

load(root + "game.js");

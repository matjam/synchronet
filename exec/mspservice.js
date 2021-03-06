// mspservice.js

// Synchronet Service for the Message Send Protocol 2 (RFC 1312/1159)

// $Id: mspservice.js,v 1.7 2007/08/13 21:27:49 deuce Exp $

// Example configuration (in ctrl/services.ini):

// [MSP]
// Port=18
// MaxClients=10
// Command=mspservice.js

// [MSP-UDP]
// Port=18
// MaxClients=10
// Options=UDP
// Command=mspservice.js

load("sockdefs.js");
load("nodedefs.js");

var output_buf = "";
var version=0;
var send_response=false;

// Write a string to the client socket
function write(str)
{
	output_buf += str;
}

// Write all the output at once
function flush()
{
	if(version==1 || send_response)
		client.socket.send(output_buf);
}

function done()
{
	flush();
	exit();
}

function read_str(msg)
{
	var b;
	var str='';

	if(msg==undefined)
		msg=false;

	while(1) {
		if(!client.socket.data_waiting && !client.socket.is_connected)
			exit();
		b=client.socket.recvBin(1);
		if(client.socket.type==SOCK_DGRAM)
			write(ascii(b));
		if(b==0)
			return(str);
		if(msg) {
			if(b<32 && b != 9 && b != 10 && b != 13)
				continue;
		}
		str+=ascii(b);
	}
}

var b;
var recipient="";
var recip_node="";
var to_node=0;
var message="";
var sender="";
var sender_term="";
var cookie="";
var signature="";
var usernum=0;

/* Read version */
if(!client.socket.data_waiting && !client.socket.is_connected)
	done();
b=client.socket.recvBin(1);
if(client.socket.type==SOCK_DGRAM)
	write(ascii(b));
switch(b) {
	case 65:
		version=1;
		send_response=1;
		break;
	case 66:
		version=2;
		break;
	default:
		done();
}
recipient=read_str();
usernum=system.matchuser(recipient,true);
recip_node=read_str();
if(recip_node.substr(0,6)=="Node: ")
	to_node=parseInt(recip_node.substr(6));
message=read_str(true);
if(version==2) {
	sender=read_str();
	sender_term=read_str();
	cookie=read_str();
	signature=read_str();
}
else {
	sender="Unknown User";
}

/* Check values */
if(recipient != "" && usernum == 0)
	done();
if(recip_node != "" && to_node==0)
	done();
if(message == "")
	done();

var telegram_buf="\1n\1h\1cInstant Message\1n from \1h\1y";
telegram_buf += sender;
if(sender_term != "")
	telegram_buf += " \1n"+sender_term+"\1h";
telegram_buf += "\r\n\1w[\1n";
if(signature != "") {
	telegram_buf += signature;
	telegram_buf += "\1h]"
}
else {
	telegram_buf += client.socket.remote_ip_address;
	telegram_buf += "\1h]"
	if(client.host_name != undefined && client.host_name != "") {
		telegram_buf += " (\1n";
		telegram_buf += client.host_name;
		telegram_buf += "\1h)";
	}
}
telegram_buf += "\1n:\r\n\1h";
telegram_buf += message;

/* TODO cache cookies and prevent dupes */
if(recipient != "") {
	if(to_node) {
		if(system.node_list[to_node-1].useron==usernum) {
			send_response=system.put_node_message(to_node, telegram_buf);
			log("Attempt to send node message: "+(send_response?"Success":"Failure"));
		}
		else
			log("Cannot send to user "+recipient+" on node "+to_node);
	}
	else {
		send_response=system.put_telegram(usernum, telegram_buf);
		log("Attempt to send telegram: "+(send_response?"Success":"Failure"));
	}
}
else if(to_node) {
	success=system.put_node_message(to_node, telegram_buf);
	log("Attempt to send node message: "+(success?"Success":"Failure"));
}
else {
	/* Broadcast to all nodes? */
}

done();

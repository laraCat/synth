

var socket = io.connect('http://192.168.1.2:8080')
socket.on('connect', function () {
console.log('connected to socket')
})

var v = 0; //declare variable for pot values
var sin = T("sin", {freq:v, mul:0.5}); //change frequency of sine wave with pot values 

socket.on('button', function (value) { 
if (value == 'push') { 
//T("audio").loadthis("drumkit.wav", function() { //play file
// this.play();
//})
sin.play(); //play sine wave
}
//if (value == 'release'){ 
//sin.pause(); //pause sine wave
//}
})


socket.on('analog', function (value) {
		v = value // put pot values in variable
	}) 




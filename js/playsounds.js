
var socket = io.connect('http://192.168.1.2:8080')
socket.on('connect', function () {
console.log('connected to socket')
})

//var sin = T("sin", {freq:440, mul:0.5}); 

socket.on('button', function (value) { // button is pushed, play this file
if (value == 'push') {
T("audio").loadthis("drumkit.wav", function() {
 this.play();
})

.on("ended", function() {
  this.pause();
});	

}

})

var v = 0;
socket.on('analogSensor', function (value) {
		v = value
	T("delay", {time:v, fb:0.4, mix:0.25}, this).play();
		
	}) 



//var m = require('mraa'); //IO Library
var app = require('express')(); //Express Library
var server = require('http').Server(app); //Create HTTP instance

var io = require('socket.io')(server); //Socket.IO Library
var cylon = require('cylon');
var T = require("timbre"); //timbre library
//var five = require("johnny-five");//Johnny Five Library
var Edison = require("edison-io");// Edison IO Library
////after putting this here and tibre library in app.js, got no such device errors in edison's console (plug in sound card?)

var BD;
T("audio").load("./drumkit.wav", function() {
drum = T("lowshelf", {freq:110, gain:8, mul:0.6}, BD).play()
BD = this.slice(0, 500).set({bang:false})
console.log('file loaded')
})
var socket = io.connect('http://192.168.1.4:3043')
socket.on('connect', function () {
console.log('connected to socket')
})
socket.on('button', function (value) {
if (value == 'push') {
BD.bang()
}
})

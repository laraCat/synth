# second skin synth
Using Intel Edison with Arduino breakout board (eventually mini breakout)
running Yocto 2.1 release 
https://software.intel.com/en-us/iot/hardware/edison/downloads

Hardware setup:
1 potentiometer on Analog 0
1 button on D2

Libraries/frameworks installed and being used:
Cylon.js for input readings 
Timbre.js for playing audio files 
http://mohayonao.github.io/timbre.js/

socket.io
express 
cylon-intel-iot
node

File setup on Edison:
Running app.js from root
all files automatically served from 'public' folder
playsounds.js holds all the timbre.js code

Goal:
trigger sound file button (works)
change delay with analog values from pot

alternatively
trigger sine wave with button
T("sin").play();

change frequency with analog values
T("sin", {freq:880}).play();



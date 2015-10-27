# second skin synth<br>
<p>
Using Intel Edison with Arduino breakout board (eventually mini breakout)<br>
running Yocto 2.1 release <br>
https://software.intel.com/en-us/iot/hardware/edison/downloads<br>
</p>
<p>
<b>Hardware setup:</b><br>
1 potentiometer on Analog 0<br>
1 button on D2<br>
</p>
<p>
<b>Libraries/frameworks installed and being used:</b>
Cylon.js for input readings <br>
Timbre.js for playing audio files <br>
http://mohayonao.github.io/timbre.js/<br>
</p>
<p>
socket.io<br>
express <br>
cylon-intel-iot<br>
node
</p>
<p>
<b>File setup on Edison:</b><br>
Running app.js from root dir<br>
index.html, drumkit.wav and js/ folder are automatically served from 'public' folder (public folder didn't make it to the github repo)<br>
playsounds.js holds all the timbre.js code<br>
</p>
<p>
<b>Goal:</b><br>
trigger sound file button (works)<br>
change delay with analog values from pot<br>
</p>
<p>
alternatively<br>
trigger sine wave with button<br>
T("sin").play();<br>
</p>
<p>
change frequency with analog values<br>
T("sin", {freq:880}).play();<br>
</p>


import './dezine.scss'
function LolDrum(){
    const keymap = {
        65: "A",
        83: "S",
        68: "D",
        70: "F",
        71: "G",
        72: "H",
        74: "J",
        75: "K",
        76: "L"  
      }
      
      const keys = document.querySelectorAll('.hey');
      keys.forEach(key => key.addEventListener('transitionend', removeTransition));
      
      function removeTransition(event) {
        //if(event.propertyName !== 'transform') return;
         this.classList.remove('keydown');
      }
      
      function clickHandler (key) {
        play(key);
      }
      
      function play(key) {
          var keyElement = document.querySelector(`.hey[id="${key}"]`); 
          var audioElement = document.querySelector(`audio[data-key="${key}"]`);
          
          keyElement.classList.add('keydown');
          audioElement.currentTime = 0;
          audioElement.play();
      }
      
      window.onkeydown = (event) => {
        var key = keymap[event.keyCode];
        if (key) {
          play(key);
        }
      }
      
      
return (
    <>
    <div className="w-60">
  <div class="hey" id="A" onClick="clickHandler('A')"><div class="letter">A</div>clap</div>
  <div class="hey" id="S" onClick="clickHandler('S')"><div class="letter">S</div>hihat</div>
  <div class="hey" id="D" onClick="clickHandler('D')"><div class="letter">D</div> kick</div>
  <div class="hey" id="F" onClick="clickHandler('F')"><div class="letter">F</div> openhat</div>
  <div class="hey" id="G" onClick="clickHandler('G')"><div class="letter">G</div> boom</div>
  <div class="hey" id="H" onClick="clickHandler('H')"><div class="letter">H</div> ride</div>
  <div class="hey" id="J" onClick="clickHandler('J')"><div class="letter">J</div> snare</div>
  <div class="hey" id="K" onClick="clickHandler('K')"><div class="letter">K</div> tom</div>
  <div class="hey" id="L" onClick="clickHandler('L')"><div class="letter">L</div> tink</div>
</div>

<audio data-key="A" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/clap.wav"></audio>
<audio data-key="S" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/hihat.wav"></audio>
<audio data-key="D" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/kick.wav"></audio>
<audio data-key="F" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/openhat.wav"></audio>
<audio data-key="G" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/boom.wav"></audio>
<audio data-key="H" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/ride.wav"></audio>
<audio data-key="J" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/snare.wav"></audio>
<audio data-key="K" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/tom.wav"></audio>
<audio data-key="L" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/330437/tink.wav"></audio>

    </>
)
}

export default LolDrum;
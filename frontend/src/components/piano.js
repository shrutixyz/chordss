import "./piano.scss";

function Piano(){
    return (
        <>
        <div>
        <section id="wrap">
    <section id="main">
      <div class="keys">
        <div data-key="65" class="key" data-note="C">
            <span class="hints">A</span>
        </div>
        <div data-key="87" class="key sharp" data-note="C#">
            <span class="hints">W</span>
        </div>
        <div data-key="83" class="key" data-note="D">
            <span class="hints">S</span>
        </div>
        <div data-key="69" class="key sharp" data-note="D#">
            <span class="hints">E</span>
        </div>
        <div data-key="68" class="key" data-note="E">
            <span class="hints">D</span>
        </div>
        <div data-key="70" class="key" data-note="F">
            <span class="hints">F</span>
        </div>
        <div data-key="84" class="key sharp" data-note="F#">
            <span class="hints">T</span>
        </div>
        <div data-key="71" class="key" data-note="G">
            <span class="hints">G</span>
        </div>
        <div data-key="89" class="key sharp" data-note="G#">
            <span class="hints">Y</span>
        </div>
        <div data-key="72" class="key" data-note="A">
            <span class="hints">H</span>
        </div>
        <div data-key="85" class="key sharp" data-note="A#">
            <span class="hints">U</span>
        </div>
        <div data-key="74" class="key" data-note="B">
            <span class="hints">J</span>
        </div>
        <div data-key="75" class="key" data-note="C">
            <span class="hints">K</span>
        </div>
        <div data-key="79" class="key sharp" data-note="C#">
            <span class="hints">O</span>
        </div>
        <div data-key="76" class="key" data-note="D">
            <span class="hints">L</span>
        </div>
        <div data-key="80" class="key sharp" data-note="D#">
            <span class="hints">P</span>
        </div>
        <div data-key="186" class="key" data-note="E">
            <span class="hints">;</span>
        </div>
      </div>

      <audio data-key="65" src="http://carolinegabriel.com/demo/js-keyboard/sounds/040.wav"></audio>
      <audio data-key="87" src="http://carolinegabriel.com/demo/js-keyboard/sounds/041.wav"></audio>
      <audio data-key="83" src="http://carolinegabriel.com/demo/js-keyboard/sounds/042.wav"></audio>
      <audio data-key="69" src="http://carolinegabriel.com/demo/js-keyboard/sounds/043.wav"></audio>
      <audio data-key="68" src="http://carolinegabriel.com/demo/js-keyboard/sounds/044.wav"></audio>
      <audio data-key="70" src="http://carolinegabriel.com/demo/js-keyboard/sounds/045.wav"></audio>
      <audio data-key="84" src="http://carolinegabriel.com/demo/js-keyboard/sounds/046.wav"></audio>
      <audio data-key="71" src="http://carolinegabriel.com/demo/js-keyboard/sounds/047.wav"></audio>
      <audio data-key="89" src="http://carolinegabriel.com/demo/js-keyboard/sounds/048.wav"></audio>
      <audio data-key="72" src="http://carolinegabriel.com/demo/js-keyboard/sounds/049.wav"></audio>
      <audio data-key="85" src="http://carolinegabriel.com/demo/js-keyboard/sounds/050.wav"></audio>
      <audio data-key="74" src="http://carolinegabriel.com/demo/js-keyboard/sounds/051.wav"></audio>
      <audio data-key="75" src="http://carolinegabriel.com/demo/js-keyboard/sounds/052.wav"></audio>
      <audio data-key="79" src="http://carolinegabriel.com/demo/js-keyboard/sounds/053.wav"></audio>
      <audio data-key="76" src="http://carolinegabriel.com/demo/js-keyboard/sounds/054.wav"></audio>
      <audio data-key="80" src="http://carolinegabriel.com/demo/js-keyboard/sounds/055.wav"></audio>
      <audio data-key="186" src="http://carolinegabriel.com/demo/js-keyboard/sounds/056.wav"></audio>
      </section>
  </section>
  <video playsinline autoplay muted loop id="bgvid" poster="http://carolinegabriel.com/demo/js-keyboard/video/bg.jpg">
      <source src="http://carolinegabriel.com/demo/js-keyboard/video/bg.mp4" type="video/mp4"/>
  </video>
        </div>
        </>

    )
}


const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

//   const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
//   note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);



export default Piano;
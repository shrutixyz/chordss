// function Drum(){
//     return (
//         <>
//         <div>
//         <div className="wrapper">
//   <div class="keys">
//     <div data-key="65" class="key">
//       <kbd>A</kbd>
//       <span class="sound">clap</span>
//     </div>
//     <div data-key="83" class="key">
//       <kbd>S</kbd>
//       <span class="sound">hihat</span>
//     </div>
//     <div data-key="68" class="key">
//       <kbd>D</kbd>
//       <span class="sound">kick</span>
//     </div>
//     <div data-key="70" class="key">
//       <kbd>F</kbd>
//       <span class="sound">openhat</span>
//     </div>
//     <div data-key="71" class="key">
//       <kbd>G</kbd>
//       <span class="sound">boom</span>
//     </div>
//     <div data-key="72" class="key">
//       <kbd>H</kbd>
//       <span class="sound">ride</span>
//     </div>
//     <div data-key="74" class="key">
//       <kbd>J</kbd>
//       <span class="sound">snare</span>
//     </div>
//     <div data-key="75" class="key">
//       <kbd>K</kbd>
//       <span class="sound">tom</span>
//     </div>
//     <div data-key="76" class="key">
//       <kbd>L</kbd>
//       <span class="sound">tink</span>
//     </div>
//   </div>
// </div>

// <audio data-key="65" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/clap.wav"></audio>
// <audio data-key="83" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/hihat.wav"></audio>
// <audio data-key="68" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/kick.wav"></audio>
// <audio data-key="70" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/openhat.wav"></audio>
// <audio data-key="71" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/boom.wav"></audio>
// <audio data-key="72" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/ride.wav"></audio>
// <audio data-key="74" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/snare.wav"></audio>
// <audio data-key="75" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tom.wav"></audio>
// <audio data-key="76" src="https://raw.githubusercontent.com/wesbos/JavaScript30/master/01%20-%20JavaScript%20Drum%20Kit/sounds/tink.wav"></audio>
//         </div>
//         </>
//     )
// }



// function playSound(key, type){
//     const charCode = getCharCode(key, type);  
//   const soundClip = document.querySelector('audio[data-key="'+ charCode + '"]');
//   if (!soundClip) return;
//  const currentDiv = '[data-key="'+ charCode + '"]';
//  document.querySelector(currentDiv).classList.add('playing');
//   soundClip.currentTime = 0;
//   soundClip.play();
// }

// // get the keycode from a keypress or click
// function getCharCode(key, type) {
//   if (type == "click") {
//     return clickSoundClip(key);
//   } else if (type == "press") {
//     return pressSoundClip(key);
//   }
// }

// function pressSoundClip(key) {
//   const keyCode = key.keyCode;
//   return keyCode;
// }

// function clickSoundClip(key) {
//   const keyCode = key.path[1].getAttribute("data-key");
//   return keyCode;
// }

// function removeClass(event){
//   if(event.propertyName !== "transform"){return;}
//   else {
//     event.target.classList.remove("playing");
//   }
// } 


// const keypad = Array.from(document.querySelectorAll(".key"));
// keypad.forEach(key => key.addEventListener("transitionend", removeClass));

// // Add an event listener to the entire window that listens for a keypress or click
// window.addEventListener("keydown", function(key) {
//   const type = "press";
//   playSound(key, type);
// });

// window.addEventListener("click", function(key) {
//   const type = "click";
// playSound(key, type);
// });



// export default Drum;
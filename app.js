const buttonPlay = document.querySelector(".button-play");
const buttonPulse = document.querySelector(".button-pulse");
const buttonStop = document.querySelector(".stop");
const freq = document.querySelector(".freq");
const activeFreq = document.querySelector(".active-freq");

// Play frequency
const play = () => {
  if (playing === true) return;
  osc = audioContext.createOscillator();
  osc.type = "sine";
  osc.frequency.value = freq.value;
  osc.connect(audioContext.destination);
  osc.start();
  activeFreq.innerHTML = `${osc.frequency.value}Hz`;
  playing = true;
  return osc;
};

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var osc = null;
var playing = false;

// Listen for Button Clicks
buttonPlay.addEventListener("click", play);
buttonPulse.addEventListener("click", play);
buttonStop.addEventListener("click", (e) => {
  e.preventDefault();
  osc.stop();
  activeFreq.innerHTML = ``;
  playing = false;
});

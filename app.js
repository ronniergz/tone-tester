const buttonPlay = document.querySelector(".button-play");
const buttonPulse = document.querySelector(".button-pulse");
const buttonStop = document.querySelector(".stop");
const freq = document.querySelector(".freq");
const activeFreq = document.querySelector(".active-freq");

// Play frequency
const play = () => {
  if (playing === true) return;
  osc = audioContext.createOscillator();
  gain = audioContext.createGain();
  osc.type = "sine";
  osc.frequency.value = freq.value;
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start(0);
  activeFreq.innerHTML = `${osc.frequency.value}Hz`;
  playing = true;
  return osc;
};

// Play frequency on mouse or keydown only
const pulse = () => {
  play();
};

const stop = (e) => {
  e.preventDefault();
  gain.gain.exponentialRampToValueAtTime(
    0.00001,
    audioContext.currentTime + 0.04
  );
  //osc.stop();
  activeFreq.innerHTML = ``;
  playing = false;
};

var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var osc = null;
var gain = null;
var playing = false;

// Listen for Button Clicks
buttonPlay.addEventListener("click", play);
buttonPulse.addEventListener("mousedown", pulse);
buttonPulse.addEventListener("mouseup", stop);
buttonStop.addEventListener("click", stop);

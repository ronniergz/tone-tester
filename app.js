const button40 = document.querySelector(".button-40");
const button60 = document.querySelector(".button-60");
const button80 = document.querySelector(".button-80");
const button100 = document.querySelector(".button-100");
const buttonSweep = document.querySelector(".button-sweep");
const buttonStop = document.querySelector(".stop");
const frequency = document.querySelector(".active-freq");

// Select and Play Audio Files
const play = (e) => {
  stop();
  const audio = document.querySelector(`.tone-${e.target.dataset.key}`);
  audio.play();
  if (e.target.dataset.key === "sweep") {
    sweep();
  } else frequency.innerHTML = `${e.target.dataset.key}Hz`;
};

const sweep = () => {
  let frequencyCurrent = 40,
    interval;
  const showFrequency = () => {
    frequencyCurrent = frequencyCurrent + 1.2;
    frequency.innerHTML = Math.round(frequencyCurrent);
    if (frequencyCurrent >= 160) clearInterval(interval);
  };
  interval = setInterval(showFrequency, 200);
};

// Stop Audio Files
const stop = (e) => {
  frequency.innerHTML = "";
  const audioAll = document.querySelectorAll("audio");
  audioAll.forEach((e) => {
    e.pause();
    e.currentTime = 0;
  });
};

// Listen for Button Clicks
button40.addEventListener("click", play);
button60.addEventListener("click", play);
button80.addEventListener("click", play);
button100.addEventListener("click", play);
buttonSweep.addEventListener("click", play);
buttonStop.addEventListener("click", stop);

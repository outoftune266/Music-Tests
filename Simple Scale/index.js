let button = document.querySelector("button");
button.addEventListener("click", playSomething);

function playSomething() {
  let audioContext = new AudioContext();
  //console.log(audioContext);

  let oscillator = audioContext.createOscillator();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(130.4, audioContext.currentTime);
  oscillator.detune.setValueAtTime(200, audioContext.currentTime + 1);
  oscillator.detune.setValueAtTime(400, audioContext.currentTime + 2);
  oscillator.detune.setValueAtTime(500, audioContext.currentTime + 3);
  oscillator.detune.setValueAtTime(700, audioContext.currentTime + 4);
  oscillator.detune.setValueAtTime(900, audioContext.currentTime + 5);
  oscillator.detune.setValueAtTime(1100, audioContext.currentTime + 6);
  oscillator.detune.setValueAtTime(1200, audioContext.currentTime + 7);

  // async function createReverb() {
  //     let convolver = audioContext.createConvolver();

  // }

  oscillator.connect(audioContext.destination);

  oscillator.start(audioContext.currentTime);
  console.log("Sound has started!");
  oscillator.stop(audioContext.currentTime + 10);
  oscillator.onended = () => {
    console.log("Sound has ended!");
  };
}

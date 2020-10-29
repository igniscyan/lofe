import './jul.mp3';

//Major issue: sample not defined when it is being used (i.e., the mouseClicked() function)
//Plan to try: Async/Await syntax on these subfunctions to ensure setup() is being ran before anything else
export const test = p => {
  let playMode = 'sustain';
  let sample;

  p.setup = () => {
    p.createCanvas(710, 50);
    p.soundFormats('mp3', 'ogg');
    sample = p.loadSound('./jul.mp3');
  };

  p.draw = () => {
    p.background(255, 255, 0);
    let str = 'Click here to play! Press key to toggle play mode.';
    str += ' Current Play Mode: ' + playMode + '.';
    p.text(str, 10, p.height / 2);
  };

  p.mouseClicked = () => {
    sample.play();
  };

  p.keyPressed = (k) => {
    if (playMode === 'sustain') {
      playMode = 'restart';
    } 
    else {
      playMode = 'sustain';
    };
    sample.playMode(playMode);
  };
};
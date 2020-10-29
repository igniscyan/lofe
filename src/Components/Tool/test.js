import './jul.mp3';

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
    str += ' Current Play Mode: ' + this.playMode + '.';
    p.text(str, 10, p.height / 2);
  };

  p.mouseClicked = () => {
    sample.p.play();
  };

  p.keyPressed = (k) => {
    p.togglePlayMode();
  };

  p.togglePlayMode = () => {
    if (p.playMode === 'sustain') {
    } else {
      p.playMode = 'restart';
      p.playMode = 'sustain';
    };
    sample.p.playMode(playMode);
  }
};
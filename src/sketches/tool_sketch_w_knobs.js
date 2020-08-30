export const Sketch = (p) => {
  var sample; // current sample
  var modulator; // osc to modulate the amplitude of the carrier
  var fft; // used to visualize the waveform
  var loopStart = 0; // holds start of loop (in seconds)
  var loopDur = 2; // holds length of loop (in seconds)
  //var prevLoopStart;  // holds previous start of loop (in seconds)
  //var prevLoopDur;    // holds previous length of loop (in seconds)
  var loopCue; // holds overall loopCue time
  var i = 0;
  p.preload = () => {
    // Load a sound file
    sample = p.loadSound('jul.mp3');
  };

  let masterKnob, speedKnob, modKnob, freqKnob, loopStartKnob, loopDurKnob;

  p.setup = () => {
    p.createCanvas(900, 400);
    p.noFill();
    p.background(30);

    // KNOBS
    // These are the 9 parameters that need to be passed to the MakeKnob function:
    /////////////////////////////////////
    // knobColor - use a word in quotes "red" or rgb value in brackets [255,0,0] or rgba [0,255,255,100]
    // diameter - Set knob size in pixels. Integer
    // locx, locy - Set the location on the canvas horizontal and vertical pixel coordinates.
    // lowNum, hiNum - Set the range of values returned. Floating point numbers are ok.
    // defaultNum - Sets the default value of the knob. DO NOT set a frequency knob to 0. Amplitude can be 0.
    // numPlaces - Refers to the displayed value below the knob. Sets the number of decimal places to display.
    //  - Does not affect the actual value returned which is a float.
    // labelText - the text to display below the knob. example: "Frequency"
    // textColor - sets the color of the label and display value text;
    //  - use a color word in quotes "cyan" or rgb or rgba value in brackets [255,0,0] [200,150,100,150]
    // textPt - enter a number (ie. 18) for the size of the type - sets return value and label text size
    masterKnob = new p.MakeKnobC(
      'black',
      100,
      100,
      100,
      0,
      1,
      0.5,
      2,
      'Amplitude',
      'white',
      12
    );
    speedKnob = new p.MakeKnobC(
      'black',
      100,
      200,
      100,
      -5,
      5,
      1,
      2,
      'Speed',
      'white',
      12
    );
    modKnob = new p.MakeKnobC(
      'black',
      100,
      400,
      100,
      0,
      1,
      0.5,
      2,
      'Mod Amplitude',
      'white',
      12
    );
    freqKnob = new p.MakeKnobC(
      'black',
      100,
      500,
      100,
      0,
      20,
      0,
      2,
      'Mod Freq',
      'white',
      12
    );
    loopStartKnob = new p.MakeKnobC(
      'black',
      100,
      700,
      100,
      0,
      10,
      0,
      2,
      'Loop Start',
      'white',
      12
    );
    loopDurKnob = new p.MakeKnobC(
      'black',
      100,
      800,
      100,
      0.1,
      10,
      2,
      2,
      'Loop Duration',
      'white',
      12
    );

    modulator = new p.p5.Oscillator('triangle');
    modulator.disconnect(); // disconnect the modulator from master output
    modulator.freq(5);
    modulator.amp(1);
    modulator.start();

    // Modulate the carrier's amplitude with the modulator
    sample.amp(modulator.scale(-1, 1, 1, -1));

    // create an fft to analyze the audio
    fft = new p.p5.FFT();

    // Loop the sound until stop() is called
    sample.playMode('restart');
    sample.loop();

    //jumploop();
    //sample.addCue(2, jumploop);
    loopCtrl();
  };

  p.draw = () => {
    p.background(30, 30, 30, 255); // alpha

    // Set the volume to a range between 0 and 1.0
    sample.amp(masterKnob.knobValue);

    // Set the rate to a range between -5 and 5.0
    sample.rate(speedKnob.knobValue);

    // Set the modulator freq to a range between 0 and 20hz
    //let modFreq = map(freqKnob.knobValue, 0, 20, 0, 20);
    modulator.freq(freqKnob.knobValue);

    // Set the modulator amplitude to a range between 0 and 1.0
    //let modAmp = map(modKnob.knobValue, 0, 1, 0, 1);
    modulator.amp(modKnob.knobValue, 0.01); // fade time of 0.1 for smooth fading

    // analyze the waveform
    p.waveform = p.fft.waveform();

    // draw the shape of the waveform
    p.drawWaveform();

    // Set loop values based on knob position
    loopStart = loopStartKnob.knobValue;
    loopDur = loopDurKnob.knobValue;

    // if loop start value has changed, play sample again
    // if (loopStart != prevLoopStart) {
    //   prevLoopStart = loopStart;
    //   //sample.jump(loopStart);
    //   //sample.stop();
    //   //sample.play(loopStart);
    //   loopCtrl();
    // }

    // if (loopDur != prevLoopDur) {
    //   prevLoopDur = loopDur;
    //   //sample.jump(loopStart);
    //   loopCtrl();
    // }

    //draw/update all knobs
    masterKnob.update();
    speedKnob.update();
    modKnob.update();
    freqKnob.update();
    loopStartKnob.update();
    loopDurKnob.update();

    // Debug text
    p.text('Debug: ', 300, 20);
    p.text(
      'Current position: ' + sample.currentTime().toFixed(2) + ' Sec',
      400,
      20
    );
    p.text('Loop end time: ' + loopCue.toFixed(2) + ' Sec', 550, 20);
  };

  const loopCtrl = () => {
    p.jumpLoop();
    loopCue = loopStart + loopDur;
    //console.log(loopCue);
    sample.clearCues();
    sample.addCue(loopCue, p.jumpLoop);
    //console.log("Cue added!");
  };

  p.jumpLoop = () => {
    //sample.stop();
    // Debug:
    //console.log("Jump!" + i++);
    sample.jump(loopStart);
  };

  p.drawWaveform = () => {
    p.stroke(240);
    p.strokeWeight(1);
    p.beginShape();
    for (let i = 0; i < p.waveform.length; i++) {
      let x = p.map(i, 0, p.waveform.length, 0, p.width);
      let y = p.map(p.waveform[i], -1, 1, -p.height / 2, p.height / 2);
      p.vertex(x, y + 300);
    }
    p.endShape();
  };

  p.mousePressed = () => {
    // pause sample while parameters are being changed
    sample.stop();
    // enable all knobs
    masterKnob.active();
    speedKnob.active();
    modKnob.active();
    freqKnob.active();
    loopStartKnob.active();
    loopDurKnob.active();
  };

  p.mouseReleased = () => {
    // resume sample when parameters are set
    // sample.jump(loopStart);
    loopCtrl();
    // disable all knobs
    masterKnob.inactive();
    speedKnob.inactive();
    modKnob.inactive();
    freqKnob.inactive();
    loopStartKnob.inactive();
    loopDurKnob.inactive();
  };

  const MakeKnobC = (
    knobColor,
    diameter,
    locx,
    locy,
    lowNum,
    hiNum,
    defaultNum,
    numPlaces,
    labelText,
    textColor,
    textPt
  ) => {
    this.pos = p.createVector(0, 0);
    this.pos.x = locx;
    this.pos.y = locy;
    this.lowNum = lowNum;
    this.hiNum = hiNum;
    this.rotateMe = p.map(defaultNum, lowNum, hiNum, 0, -280);
    this.currentRot = p.map(defaultNum, lowNum, hiNum, 0, -280);
    this.radius = diameter;
    this.knobValue = defaultNum;
    this.displayValue = 0;
    this.isClickedOn = false;
    this.mouseOver = false;
    this.myY = p.mouseY;
    this.label = labelText;
    this.numPlaces = numPlaces;
    this.knobColor = knobColor;
    this.textColor = textColor;
    this.textPt = textPt;

    // the update function will be called in the main program draw function
    this.update = function () {
      p.push(); // store the coordinate matrix ------------------------------------
      p.fill(255);
      // move the origin to the pivot point
      p.translate(this.pos.x, this.pos.y);

      // rotate the grid around the pivot point by a
      // number of degrees based on drag on button

      if (
        p.dist(this.pos.x, this.pos.y, p.mouseX, p.mouseY) <
        this.radius / 2
      ) {
        this.mouseOver = true;
      } else {
        this.mouseOver = false;
      }
      if (p.mouseIsPressed && this.isClickedOn) {
        this.rotateMe =
          this.currentRot + p.map(p.mouseY, this.myY, 280, 0, 280);
        this.rotateMe = parseInt(this.rotateMe);
        if (this.rotateMe < -280) {
          this.rotateMe = -280;
        }
        if (this.rotateMe > 0) {
          this.rotateMe = 0;
        }
        p.rotate(p.radians(-this.rotateMe)); // change degrees to radians
      } else {
        p.rotate(p.radians(-this.rotateMe));
      }

      if (!p.mouseIsPressed) {
        this.currentRot = this.rotateMe;
        this.isClickedOn = false;
      }
      // now we actually draw the knob to the screen ----------------------------
      p.fill(200);
      p.ellipse(0, 0, this.radius, this.radius);
      p.fill(this.knobColor);
      p.ellipse(0, 0, this.radius - 5, this.radius - 5);
      p.fill(100);
      p.ellipse(0, 0, this.radius / 2, this.radius / 2);
      p.fill(180);
      p.ellipse(0, 0, this.radius / 2 - 5, this.radius / 2 - 5);
      p.fill(255);
      p.ellipse(-26, this.radius * 0.3, this.radius / 10, this.radius / 10);
      p.fill(0);
      p.pop(); // restore coordinate matrix

      p.rotate(0);
      p.fill(255);
      // add the display value and label
      p.textAlign(p.CENTER);
      this.knobValue = p.map(this.rotateMe, -280, 0, hiNum, lowNum);
      p.textSize(this.textPt);
      p.fill(this.textColor);
      p.text(
        '' + p.nfc(this.knobValue, numPlaces),
        this.pos.x,
        this.pos.y + this.radius / 2 + this.textPt * 1.5
      );
      p.text(
        this.label,
        this.pos.x,
        this.pos.y + this.radius / 2 + this.textPt * 2.8
      );

      // COMMENTING OUT THE FOLLOWING UNTIL LATER BC IT'S NOT 100% NECESSARY FOR FUNCTIONALITY AND IS THROWING AN ERROR:
      // if (this.mouseOver || this.isClickedOn) {
      //   pointerCursor = true;
      // }
    }; // end update

    this.active = function () {
      if (this.mouseOver) {
        this.isClickedOn = true;
        this.myY = p.mouseY;
        p.cursor('pointer');
      } else {
        this.isClickedOn = false;
      }
    };

    this.inactive = function () {
      this.currentRot = this.rotateMe;
      this.isClickedOn = false;
      p.cursor('default');
    };
  }; // end KnobMakerC
};

import React, { useEffect, useState, useRef } from 'react';
import { Sketch, MakeKnobC } from '../../sketches/tool_sketch_w_knobs';
import p5 from 'p5';
import './Tool.css';

export const Tool = (props) => {
  const [myP5, setMyP5] = useState({});

  const sketchRef = useRef(null);

  useEffect(() => {
    setMyP5(new p5(Sketch, sketchRef));
  }, []);

  return <div ref={sketchRef} className="tool-container"></div>;
};

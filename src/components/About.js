import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I don't want no scrub - scrub is a man who ain't gettin' no love from me</p>
      <img src={ image } alt="I made this" />
    </div>
  );
}

export default About;

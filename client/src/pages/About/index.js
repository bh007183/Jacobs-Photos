import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function About() {
  return (
    <div className="aboutMain">
      <div id="textContain">
        <p className="firstParagraph">
          Jacob was born and raised in a small town located in the heart of the
          Cascade Mountains. He began taking photos while in highs chool and his
          love for adventure and natural beauty has resulted in a diverse
          skillset.
        </p>
        <p className="firstParagraph">
          Though the majority of his photos are adventure or nature based, he
          also enjoys photographing people enjoying everyday life. If you need
          any photography done, ranging from adventure to wedding, to senior
          photos, feel free to reach out!
        </p>
        <Link style={{ color: "purple" }} to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}

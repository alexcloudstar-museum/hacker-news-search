import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="About">
      <h1>Hacker News Search</h1>
      <p>
        Is part of the 6 Fun React Project Ideas Challenge. It's a copy of{" "}
        <a
          href="https://hn.algolia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HN Algolia
        </a>
      </p>
      <h2>How it's work</h2>
      <p>
        Items are updated in real-time using official{" "}
        <a
          href="https://github.com/HackerNews/API"
          target="_blank"
          rel="noopener noreferrer"
        >
          HackerNews API.
        </a>{" "}
        Data is indexed on 3 different servers for high availability, hosted in
        Beauharnois, Canada.
      </p>
      <h3>Credits</h3>
      <p>
        <a
          href="https://alexcloudstar.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Cloudstar
        </a>{" "}
        - Developer
        <br />
        <a
          href="https://daveceddia.com/react-practice-projects/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daveceddia
        </a>{" "}
        - idea
        <br />
        <a
          href="https://hn.algolia.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          HN Algolia{" "}
        </a>{" "}
        - functionality inspiration and real example to make of
      </p>
    </div>
  );
};

export default About;

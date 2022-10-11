import React from "react";
import coverImage from "../../assets/cover/cover-image.png";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Sumit Ojha</h1>
      <p>
        {" "}
        I am a Software Developer with knowledge on production of web and mobile
        applications. I have good understanding and technical expertise in
        Computer Science fundamentals, Javascript, ReactJS, Redux, NodeJS,
        MongoDB, CSS, HTML and other technologies. I graduated from Tarleton
        State University in Bachelor in Computer Information Systems in May
        2021.
      </p>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
    </section>
  );
}

export default About;

import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jyoti Yadav</h1>
        <p className={styles.description}>
          I am a Full-Stack Developer and Data Analyst, eager to learn and build
          meaningful solutions.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=jyoti.programming@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
        style={{
          width: "300px",
          height: "350px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

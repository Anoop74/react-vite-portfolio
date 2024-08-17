import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anoop</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React and
          Spring Boot. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttons}>
          <a href="mailto:anoop74p@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/anoop-softwaredeveloper-resume.pdf" 
           target="_blank"
            rel="noopener noreferrer"
          className={styles.viewCVBtn}>
            View Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/anoopImg.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

import Image from "next/image";
import Navbar from "./_components/Navbar";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section id="about" className={styles.intro}>
          <div className={styles.sectionHeader}>
            <h1 id="name">Zachary Salvaggio</h1>
            <hr />
          </div>
          <h2 className={styles.info}>
            Hi! I am a recently graduated fullstack developer with a degree in computer science. I&#39;m an active
            learner and love to explore new web technologies. When I&#39;m not coding, I&#39;m usually reading books,
            playing video games, or chasing around a two-foot tall tornado, aka my son.
          </h2>
          <div className={styles.introBtnContainer}>
            <a href="/resume5.pdf" target="_blank">
              <div className={styles.btn} data-button-type="resume">
                Resume
              </div>
            </a>
            <a href="#contact">
              <div className={styles.btn} data-button-type="contact">
                Contact
              </div>
            </a>
          </div>
        </section>

        <section id="skills" className={styles.skills}>
          <div className={styles.sectionHeader}>
            <h1>Skills</h1>
            <hr />
          </div>
          <div className={styles.skillsGridContainer}>
            <ul>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                <p>HTML</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                <p>React</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                <p>Nextjs</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                <p>Redux</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                <p>Material UI</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                <p>Tailwind</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                <p>CSS</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                <p>Nodejs</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <p>MongoDB</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                <p>Javascript</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <p>Typescript</p>
              </li>
              <li>
                <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
                <p>Postman</p>
              </li>
              <li>
                <img src="https://www.svgrepo.com/show/378475/vercel-fill.svg" />
                <p>Vercel</p>
              </li>
              <li>
                <img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" />
                <p>Netlify</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <p>Git</p>
              </li>
            </ul>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.sectionHeader}>
            <h1>Projects</h1>
            <hr />
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <img className={`${styles.projectScreenshot} ${styles.desktopHidden}`} src="/sportly.png" />
              <img className={`${styles.projectScreenshot} ${styles.mobileHidden}`} src="/sportly-desktop.png" />
              <h2 className={styles.projectTitle}>Sportly</h2>
              <p className={styles.projectInfo}>
                A sports website, created with Nextjs, that offers users access to real-time scores, comprehensive team
                details, and in-depth game recaps featuring box scores, scoring plays, and a play-by-play feature for
                NFL games!
              </p>
              <div className={styles.techStack}>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <p className={styles.iconName}>Javascript</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                  <p className={styles.iconName}>Typescript</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <p className={styles.iconName}>React</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                  <p className={styles.iconName}>Nextjs</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                  <p className={styles.iconName}>MUI</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                  <p className={styles.iconName}>Tailwind</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
                  <p className={styles.iconName}>Postman</p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <a href="https://nextjs-sportly.vercel.app/nfl" target="_blank">
                  <div className={styles.btn} data-button-type="demo">
                    Live Demo
                  </div>
                </a>
                <a href="https://github.com/ZacharySal/nextjs-sportly" target="_blank">
                  <div className={styles.btn} data-button-type="code">
                    Source Code
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <img className={`${styles.projectScreenshot} ${styles.desktopHidden}`} src="/friendly.png" />
              <img className={`${styles.projectScreenshot} ${styles.mobileHidden}`} src="/friendly-desktop.png" />
              <h2 className={styles.projectTitle}>Friendly</h2>
              <p className={styles.projectInfo}>
                A social media platform built with React, where users can easily share images, engage with posts through
                likes and comments, and connect with friends.
              </p>
              <div className={styles.techStack}>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <p className={styles.iconName}>Javascript</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <p className={styles.iconName}>React</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" />
                  <p className={styles.iconName}>MUI</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                  <p className={styles.iconName}>Redux</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <p className={styles.iconName}>Nodejs</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <p className={styles.iconName}>MongoDB</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
                  <p className={styles.iconName}>Postman</p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <a href="https://eclectic-lolly-f06c0b.netlify.app/" target="_blank">
                  <div className={styles.btn} data-button-type="demo">
                    Live Demo
                  </div>
                </a>
                <a href="https://github.com/ZacharySal/twitter-clone" target="_blank">
                  <div className={styles.btn} data-button-type="code">
                    Source Code
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <img className={`${styles.projectScreenshot} ${styles.desktopHidden}`} src="/readly.png" />
              <img className={`${styles.projectScreenshot} ${styles.mobileHidden}`} src="/readly-desktop.png" />
              <h2 className={styles.projectTitle}>Readly</h2>
              <p className={styles.projectInfo}>
                A mock bookstore, created with React, to display book information on any book stored in Google’s
                database. Create an account to save books to a reading list, add books to your cart, or view your order
                history.
              </p>
              <div className={styles.techStack}>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <p className={styles.iconName}>Javascript</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                  <p className={styles.iconName}>React</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                  <p className={styles.iconName}>Nodejs</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                  <p className={styles.iconName}>MongoDB</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
                  <p className={styles.iconName}>Postman</p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <a href="https://gilded-swan-86eacf.netlify.app" target="_blank">
                  <div className={styles.btn} data-button-type="demo">
                    Live Demo
                  </div>
                </a>
                <a href="https://github.com/ZacharySal/readly-book-application" target="_blank">
                  <div className={styles.btn} data-button-type="code">
                    Source Code
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className={styles.contact}>
          <div className={styles.sectionHeader}>
            <h1>Contact</h1>
            <hr />
          </div>

          <div className={styles.contactForm}>
            <div className={styles.flexCol}>
              <label>Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className={`${styles.flexCol} ${styles.email}`}>
              <label>Email Address</label>
              <input type="text" placeholder="johndoe@gmail.com" />
            </div>
            <div className={`${styles.flexCol} ${styles.message}`}>
              <label>Message</label>
              <textarea className={styles.messageInput} placeholder="Enter your message here"></textarea>
            </div>
            <div className={`${styles.btn} ${styles.submit}`} data-button-type="submit">
              Submit
            </div>
          </div>
        </section>

        <footer>
          <div className={styles.footerItems}>
            <p>About Me</p>
            <p>Skills</p>
            <p>Projects</p>
            <p>Contact</p>
            <p>Resume</p>
          </div>
          <p className={styles.copyright}>Copyright © 2023 Zachary Salvaggio</p>
        </footer>
      </main>
    </>
  );
}

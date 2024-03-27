import ContactForm from "./_components/ContactForm";
import Navbar from "./_components/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="about" className={styles.intro}>
          <div className={styles.sectionHeader}>
            <h1 id="name">Zachary Salvaggio</h1>
            <div className={styles.borderBottom} />
          </div>
          <h2 className={styles.info}>
            Hello, I am a software engineer with an extensive skillset in web development. While I
            primarily focus on front end development with React and Nextjs, I am also very
            comfortable working with APIs, SQL/NoSQL databases, and various AWS services.
          </h2>
          <div className={styles.introBtnContainer}>
            <a href="/resume.pdf" target="_blank">
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
            <h1>Tech Stack</h1>
            <div className={styles.borderBottom} />
          </div>
          <div className={styles.skillsGridContainer}>
            <ul>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                <p>Tailwind</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
                <p>Express</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                <p>MongoDB</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                <p>Postgresql</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                <p>SQL</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />
                <p>Docker</p>
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                <p>Python</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                <p>Git</p>
              </li>
              <li>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                <p>AWS</p>
              </li>
            </ul>
          </div>
        </section>
        <section id="projects" className={styles.projects}>
          <div className={styles.sectionHeader}>
            <h1>Projects</h1>
            <div className={styles.borderBottom} />
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <img
                className={`${styles.projectScreenshot} ${styles.desktopHidden}`}
                src="/sportly.png"
              />
              <img
                className={`${styles.projectScreenshot} ${styles.mobileHidden}`}
                src="/sportly-desktop.png"
              />
              <h2 className={styles.projectTitle}>Sportly</h2>
              <p className={styles.projectInfo}>
                A sports website, created with Nextjs, that offers users access to real-time scores,
                comprehensive team details, and in-depth game recaps featuring box scores, scoring
                plays, and a play-by-play feature for NFL games!
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />

                  <p className={styles.iconName}>Tailwind</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
                  <p className={styles.iconName}>Postman</p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <a href="https://nextjs-sportly.vercel.app " target="_blank">
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
              <img
                className={`${styles.projectScreenshot} ${styles.desktopHidden}`}
                src="/friendly.png"
              />
              <img
                className={`${styles.projectScreenshot} ${styles.mobileHidden}`}
                src="/friendly-desktop.png"
              />
              <h2 className={styles.projectTitle}>Friendly</h2>
              <p className={styles.projectInfo}>
                A social media platform built with React, where users can easily share their
                thoughts or memories, engage with posts through likes and comments, and connect with
                friends.
              </p>
              <div className={styles.techStack}>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <p className={styles.iconName}>Javascript</p>
                </div>
                <div className={styles.techIcon}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" />
                  <p className={styles.iconName}>Postgresql</p>
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />

                  <p className={styles.iconName}>Express</p>
                </div>

                <div className={styles.techIcon}>
                  <img src="https://www.svgrepo.com/show/354202/postman-icon.svg" />
                  <p className={styles.iconName}>Postman</p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <a href="https://zrs-friendly.netlify.app/" target="_blank">
                  <div className={styles.btn} data-button-type="demo">
                    Live Demo
                  </div>
                </a>
                <a href="https://github.com/ZacharySal/react-friendly" target="_blank">
                  <div className={styles.btn} data-button-type="code">
                    Source Code
                  </div>
                </a>
              </div>
            </div>
            <div className={styles.projectCard}>
              <img
                className={`${styles.projectScreenshot} ${styles.desktopHidden}`}
                src="/readly.png"
              />
              <img
                className={`${styles.projectScreenshot} ${styles.mobileHidden}`}
                src="/readly-desktop.png"
              />
              <h2 className={styles.projectTitle}>Readly</h2>
              <p className={styles.projectInfo}>
                A mock bookstore, created with React, to display book information on any book stored
                in Google’s database. Create an account to save books to a reading list, add books
                to your cart, or view your order history.
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
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />

                  <p className={styles.iconName}>Express</p>
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
            <div className={styles.borderBottom} />
          </div>
          <ContactForm />
        </section>

        <footer>
          <div className={styles.footerItems}>
            <a href="#about">
              <p>About Me</p>
            </a>
            <a href="#skills">
              <p>Tech Stack</p>
            </a>
            <a href="#projects">
              <p>Projects</p>
            </a>
            <a href="#contact">
              <p>Contact</p>
            </a>
            <a href="/resume.pdf" target="_blank">
              <p>Resume</p>
            </a>
          </div>
          <p className={styles.copyright}>Copyright © 2024 Zachary Salvaggio</p>
        </footer>
      </main>
    </>
  );
}

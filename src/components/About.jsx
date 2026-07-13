import { useRef, useEffect } from 'react';
import styles from './About.module.css';

function useInView(ref, threshold = 0.2) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
}

export default function About() {
  const sectionRef = useRef(null);
  useInView(sectionRef);

  return (
    <section id="studio" className={`${styles.about} section-fade`} ref={sectionRef} aria-labelledby="about-title">
      {/* Top block: Tomorrow should be better */}
      <div className={styles.topRow}>
        <div className={styles.leftBox}>
          <div className={styles.borderedBox}>
            <h2 id="about-title" className={styles.h2}>
              Tomorrow should <br/>be better than <span className={styles.todayHighlight}>today</span>
            </h2>
            <p className={styles.bodyText}>
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse
              to play things safe.
            </p>
            <a href="#contact" className={styles.readMore} aria-label="Read more about us">
              Read more <span className={styles.line} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className={styles.rightCircle}>
          {/* Red triangle decorations */}
          <div className={`${styles.triangle} ${styles.triangleTopRight}`} aria-hidden="true" />
          <div className={styles.circleImg} role="img" aria-label="Business meeting">
            <img src="/business-meeting.png" alt="Business professionals in a meeting" loading="lazy" />
          </div>
        </div>
      </div>

      {/* Wavy red connector line */}
      <div className={styles.connectorLine} aria-hidden="true">
        <svg viewBox="0 0 600 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 50 20 C 150 20, 150 100, 300 100 C 450 100, 450 20, 550 20" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="6 4"/>
        </svg>
      </div>

      {/* Bottom block: See how we can help */}
      <div className={styles.bottomRow}>
        <div className={styles.leftCircle}>
          <div className={`${styles.triangle} ${styles.triangleBottomLeft}`} aria-hidden="true" />
          <div className={`${styles.triangle} ${styles.triangleBottomLeft2}`} aria-hidden="true" />
          <div className={styles.circleImg} role="img" aria-label="Team working together">
            <img src="/team-working.png" alt="Team working on laptops" loading="lazy" />
          </div>
        </div>

        <div className={styles.rightText}>
          <h2 className={styles.h2}>
            <span className={styles.seeHighlight}>See</span> how we can<br />
            help you <span className={styles.progressUnderline}>progress</span>
          </h2>
          <p className={styles.bodyText}>
            We add a layer of fearless insights and action that allows change
            makers to accelerate their progress in areas such as brand, design
            digital, comms and social research.
          </p>
          <a href="#services" className={styles.readMore} aria-label="Read more about our services">
            Read more <span className={styles.line} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

/* Individual floating avatar */
function Avatar({ src, alt, className, size = 90, style = {} }) {
  return (
    <div className={`${styles.avatar} ${className}`} style={{ width: size, height: size, ...style }}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
}

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    const t = setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 100);
    return () => clearTimeout(t);
  }, []);

  const avatars = [
    { src: '/avatars/av1.jpg', alt: 'Team member with hat', size: 110, className: styles.av1 },
    { src: '/avatars/av2.jpg', alt: 'Team member with glasses', size: 100, className: styles.av2 },
    { src: '/avatars/av3.jpg', alt: 'Team member outdoors', size: 120, className: styles.av3 },
    { src: '/avatars/av4.jpg', alt: 'Smiling team member', size: 100, className: styles.av4 },
    { src: '/avatars/av5.jpg', alt: 'Professional team member', size: 105, className: styles.av5 },
    { src: '/avatars/av6.jpg', alt: 'Team member with laptop', size: 95, className: styles.av6 },
    { src: '/avatars/av7.jpg', alt: 'Bearded team member', size: 115, className: styles.av7 },
    { src: '/avatars/av8.jpg', alt: 'Team member with cap', size: 90, className: styles.av8 },
  ];

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      {/* Decorative SVG shapes */}
      <div className={styles.shapePinkCurve} aria-hidden="true">
        <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M80 10 C20 10, 20 100, 80 100 C140 100, 140 190, 80 190" stroke="#f9a8d4" strokeWidth="6" fill="none"/>
        </svg>
      </div>
      <div className={styles.shapeBlackCurve} aria-hidden="true">
        <svg viewBox="0 0 80 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 10 C10 10, 10 80, 60 80 C110 80, 110 150, 60 150" stroke="#111" strokeWidth="4" fill="none"/>
        </svg>
      </div>
      <div className={styles.shapePurple} aria-hidden="true" />
      <div className={styles.shapePinkEllipse} aria-hidden="true" />

      <div className={styles.content}>
        {/* Headline */}
        <div className={styles.headlineWrapper} ref={headlineRef}>
          <h1 className={styles.headline}>
            The <span className={styles.underlineYellow}>thinkers</span> and<br />
            doers were <span className={styles.highlightPink}>changing</span><br />
            the <span className={styles.highlightGreen}>status</span> Quo with
          </h1>
          <p className={styles.subtext}>
            We are a team of strategists, designers communicators, researchers. Together,<br />
            we believe that progress only happens when you refuse to play things safe.
          </p>
        </div>

        {/* Floating Avatars Layout */}
        <div className={styles.avatarField} role="img" aria-label="Team members collage">
          {avatars.map((av, i) => (
            <Avatar key={i} {...av} />
          ))}
        </div>
      </div>
    </section>
  );
}

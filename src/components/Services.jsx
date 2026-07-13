import { useRef } from 'react';
import styles from './Services.module.css';
import useInView from '../hooks/useInView';


const services = [
  {
    category: 'Office of multiple interest content',
    title: 'Collaborative & partnership',
    href: '#contact',
  },
  {
    category: 'The hanger US Air force digital experimental',
    title: 'We talk about our weight',
    href: '#contact',
  },
  {
    category: 'Delta faucet content, social, digital',
    title: 'Piloting digital confidence',
    href: '#contact',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  useInView(sectionRef);

  return (
    <section id="services" className={`${styles.services} section-fade`} ref={sectionRef} aria-labelledby="services-title">
      <div className={styles.inner}>
        {/* Decorative pink swirl */}
        <div className={styles.pinkSwirl} aria-hidden="true">
          <svg viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 10 40 Q 60 10, 110 40 Q 60 70, 10 40" stroke="#ef4444" strokeWidth="2.5" fill="none"/>
          </svg>
        </div>

        <div className={styles.titleRow}>
          <h2 id="services-title" className={styles.h2}>
            What we <span className={styles.canHighlight}>can</span><br />
            offer you!
          </h2>
          <div className={styles.underlineAccent} aria-hidden="true" />
        </div>

        <div className={styles.serviceList} role="list">
          {services.map((svc, i) => (
            <a
              key={i}
              href={svc.href}
              className={styles.serviceRow}
              role="listitem"
              aria-label={`${svc.title} – ${svc.category}`}
            >
              <span className={styles.category}>{svc.category}</span>
              <span className={styles.title}>{svc.title}</span>
              <span className={styles.arrow} aria-hidden="true">
                <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 8 H36 M28 1 L36 8 L28 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Floating colorful orb */}
      <div className={styles.floatingOrb} aria-hidden="true" />
    </section>
  );
}

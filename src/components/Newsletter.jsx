import { useRef, useState } from 'react';
import styles from './Newsletter.module.css';
import useInView from '../hooks/useInView';

export default function Newsletter() {
  const sectionRef = useRef(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  useInView(sectionRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="contact" className={`${styles.newsletter} section-fade`} ref={sectionRef} aria-labelledby="newsletter-title">
      {/* Decorative arrows */}
      <div className={styles.arrowDecor} aria-hidden="true">
        <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 20 10 C 80 10, 80 70, 140 70" stroke="#ef4444" strokeWidth="2" fill="none" markerEnd="url(#arr)"/>
          <path d="M 60 10 C 120 10, 120 50, 160 50" stroke="#ef4444" strokeWidth="2" fill="none"/>
          <marker id="arr" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8" fill="none" stroke="#ef4444" strokeWidth="1.5"/>
          </marker>
        </svg>
      </div>

      {/* Purple decorative shape */}
      <div className={styles.purpleShape} aria-hidden="true" />

      <div className={styles.content}>
        <h2 id="newsletter-title" className={styles.h2}>
          Subscribe to<br />our newsletter
        </h2>
        <p className={styles.subtext}>To make your stay special and even more memorable</p>

        {submitted ? (
          <div className={styles.successMsg} role="alert">
            🎉 You're subscribed! Thank you.
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <button type="submit" className={styles.btn} id="subscribe-btn">
              Subscribe Now
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

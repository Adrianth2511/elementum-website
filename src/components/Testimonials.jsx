import { useRef } from 'react';
import styles from './Testimonials.module.css';
import useInView from '../hooks/useInView';

/* Testimonial avatars placed decoratively around the quote */
const avatars = [
  { src: '/avatars/av1.jpg', alt: 'Happy client 1', className: 'tav1', size: 80 },
  { src: '/avatars/av2.jpg', alt: 'Happy client 2', className: 'tav2', size: 110 },
  { src: '/avatars/av3.jpg', alt: 'Happy client 3', className: 'tav3', size: 70 },
  { src: '/avatars/av4.jpg', alt: 'Happy client 4', className: 'tav4', size: 90 },
  { src: '/avatars/av5.jpg', alt: 'Happy client 5', className: 'tav5', size: 75 },
  { src: '/avatars/av6.jpg', alt: 'Happy client 6', className: 'tav6', size: 120 },
  { src: '/avatars/av7.jpg', alt: 'Happy client 7', className: 'tav7', size: 100 },
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  useInView(sectionRef);

  return (
    <section id="faqs" className={`${styles.testimonials} section-fade`} ref={sectionRef} aria-labelledby="testimonials-title">
      {/* Title */}
      <div className={styles.titleArea}>
        <h2 id="testimonials-title" className={styles.h2}>
          What our customer<br />says{' '}
          <span className={styles.aboutUs}>About Us</span>
        </h2>
      </div>

      {/* Layout: avatars + quote */}
      <div className={styles.layout}>
        {/* Avatars placed around */}
        <div className={styles.avatarField} aria-hidden="true">
          {avatars.map((av, i) => (
            <div
              key={i}
              className={`${styles.avatar} ${styles[av.className]}`}
              style={{ width: av.size, height: av.size }}
            >
              <img src={av.src} alt={av.alt} loading="lazy" />
            </div>
          ))}
        </div>

        {/* Quote Card */}
        <div className={styles.quoteCard} role="blockquote">
          <div className={styles.quoteMarks} aria-hidden="true">"</div>
          <p className={styles.quoteText}>
            Elementum delivered the site with in the timeline as they requested.
            In the end, the client found a 50% increase in traffic with in days
            since its launch. They also had an impressive ability to use
            technologies that the company hasn't used, which have also proved to
            be easy to use and reliable
          </p>
          <div className={styles.quoteMarksEnd} aria-hidden="true">"</div>
        </div>
      </div>
    </section>
  );
}

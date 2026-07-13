import styles from './Footer.module.css';

const footerData = {
  company: ['Home', 'Studio', 'Service', 'Blog'],
  termsLeft: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  social: ['Instagram', 'LinkedIn', 'Youtube', 'Twitter'],
};

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.divider} aria-hidden="true" />
      <div className={styles.inner}>
        {/* Company */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul>
            {footerData.company.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className={styles.footerLink}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Terms & Policies */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Terms & Policies</h3>
          <ul>
            {footerData.termsLeft.map((item) => (
              <li key={item}>
                <a href="#contact" className={styles.footerLink}>{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Follow Us</h3>
          <ul>
            {footerData.social.map((item) => (
              <li key={item}>
                <a
                  href="#contact"
                  className={styles.footerLink}
                  aria-label={`Follow us on ${item}`}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Terms & Policies</h3>
          <address className={styles.address}>
            <p>1498w Flixton ste, STE<br />2D Chicago, IL 63867.</p>
            <a href="tel:+11234567890" className={styles.footerLink}>(123-456789000</a>
            <a href="mailto:info@elementum.com" className={styles.footerLink}>info@elementum.com</a>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>©2023 Elementum. All rights reserved</p>
      </div>
    </footer>
  );
}

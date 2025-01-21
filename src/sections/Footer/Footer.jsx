import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <div>
      <p>
        &copy; Jayesh Kushwaha. <br />
        All rights reserved.
      </p>
      </div>
    </section>
  );
}

export default Footer;

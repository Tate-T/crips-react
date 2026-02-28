import styles from "./ContactUsBar.module.scss";

export const ContactUsBar = () => {
  return (
    <div className={styles.ContactUs}>
      <div className={styles.ContactUs_btn}>CONTACT US</div>
      <div className={styles.ContactUs_content}>
        <div className={styles.ContactUs_item}>
          <p className={styles.ContactUs_informationTitle}>Phone</p>
          <a
            href="tel:+(123) 456-7890"
            className={styles.ContactUs_information}
          >
            (123) 456-7890
          </a>
        </div>

        <div className={styles.ContactUs_item}>
          <p className={styles.ContactUs_informationTitle}>Telegram</p>
          <a href="https://t.me/" className={styles.ContactUs_information}>
            @manager_support
          </a>
        </div>

        <div className={styles.ContactUs_item}>
          <p className={styles.ContactUs_informationTitle}>
            Working days/hours
          </p>
          <p className={styles.ContactUs_information}>
            MON - SUN / 9:00AM - 8:00PM
          </p>
        </div>
      </div>
    </div>
  );
};

import styles from "../styles/Home.module.scss";
import { InputText, InputRadio } from "../components/InputText/Input";

export default function Signup() {
  return (
    <section className={styles.sectionSign}>
      <div className={styles.row}>
        <div className={styles.sign}>
          <div className={styles.sign__form}>
            <form action="/" className={styles.form}>
              <div className={styles.uMarginBottomMedium}>
                <h2 className={styles.headingSecondary}>Sign up!</h2>
              </div>
              <InputText
                type="text"
                placeholder="Full Name"
                id="name"
                required={true}
              />
              <InputText
                type="email"
                placeholder="Email address"
                id="email"
                required={true}
              />
              <InputText
                type="password"
                placeholder="Password"
                id="password"
                required={true}
              />
              <div
                className={`${styles.form__group} ${styles.uMarginBottomMedium}`}
              >
                <InputRadio id="male" name="gender" label="Male" />
                <InputRadio id="female" name="gender" label="Female" />
                <InputRadio id="other" name="gender" label="Other" />
              </div>
              <div className={styles.form__group}>
                <button
                  className={`${styles.btn} ${styles.btnBrown}`}
                  type="submit"
                >
                  Submit &rarr;
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

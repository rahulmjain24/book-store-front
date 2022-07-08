import { Btn } from "../../Other/Button/Button";
import styles from "./Header.module.scss";

export default function Header() {
    return (
        <header className={styles.header}>
        <div className={styles.header__logoBox}>
          <img
            src="/img/logoWhite.png"
            alt="Logo"
            className={styles.header__logo}
            layout="fill"
          />
        </div>

        <div className={styles.header__textBox}>
          <h1 className={styles.headingPrimary}>
            <span className={styles.headingPrimaryMain}>Bookstore</span>
            <span className={styles.headingPrimarySub}>
              get books at your doorstep
            </span>
          </h1>
          <Btn href={"/books"}>Browse Books</Btn>
        </div>
      </header>
    );
}
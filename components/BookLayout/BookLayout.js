import styles from "./BookLayout.module.scss";
import Link from "next/link";

export default function BookLayout(props) {
    return (
        <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img
              src="/img/favicon.png"
              alt="logo"
              className={styles.logo}
            />
          </a>
        </Link>

        <form action="#" className={styles.search}>
          <input
            type="text"
            className={styles.search__input}
            placeholder="Search hotels"
          />
          <button className={styles.search__button}>
            <svg className={styles.search__icon}>
              <use href="/img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav className={styles.userNav}>
          <div className={styles.userNav__iconBox}>
            <svg className={styles.userNav__icon}>
              <use href="/img/sprite.svg#icon-bookmark"></use>
            </svg>
            <span className={styles.userNav__notification}>1</span>
          </div>
          <div className={styles.userNav__user}>
            <img
              src="/img/userIcon.png"
              alt="User photo"
              className={styles.userNav__userPhoto}
            />
            <span className={styles.userNav__userName}>Rahul</span>
          </div>
        </nav>
      </header>
      {props.children}
      </div>
    );
}
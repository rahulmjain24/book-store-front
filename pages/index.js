import styles from '../styles/Home.module.scss'
import Link from 'next/link'

export default function Home() {
  return (
    <header className={styles.header}>
        <div className={styles.header__logoBox}>
            <img src={"/img/logoWhite.png"} alt="Logo" className={styles.header__logo} layout="fill"/>
        </div>
        
        <div className={styles.header__textBox}>
            <h1 className={styles.headingPrimary}>
                <span className={styles.headingPrimaryMain}>Bookstore</span>
                <span className={styles.headingPrimarySub}>get books at your doorstep</span>
            </h1>
            <Link href={"/"}>
              <a className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>Browse Books</a>
            </Link>
        </div>
    </header>
  )
}

import styles from "../styles/Home.module.scss";
import { Button, BtnText } from "../components/Button/Button";
import Banner from "../components/Banner/Banner";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__logoBox}>
          <img
            src={"/img/logoWhite.png"}
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
          <Button href={"/"}>Browse Books</Button>
        </div>
      </header>

      <main>
        <section className={styles.sectionAbout}>
          <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
            <h2 className={styles.headingSecondary}>
              exciting books for everyone!
            </h2>
          </div>

          <div className={styles.row}>
            <div className={styles.col1Of2}>
              <h3
                className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
              >
                You are gonna fall in love with the books!
              </h3>
              <p className={styles.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                cupiditate, esse molestias voluptatibus labore ex hic. Enim
                repellat laboriosam inventore asperiores. Aut aperiam nobis
                inventore eveniet repellendus fuga facere eum?
              </p>

              <h3
                className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}
              >
                Get all the new books whenever you want!
              </h3>
              <p className={styles.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto
                cupiditate, esse molestias voluptatibus labore ex hic. Enim
                repellat laboriosam inventore asperiores. Aut aperiam nobis
                inventore eveniet repellendus fuga facere eum?
              </p>

              <BtnText href="/">Learn more</BtnText>
            </div>
            <div className={styles.col1Of2}>
              <div className={styles.composition} >
                <Banner src="img/little-women.jpeg" alt="little women" pho_id={styles.composition__photoP1} />
                <Banner src="img/great-gatsby.jpeg" alt="great gatsby" pho_id={styles.composition__photoP2} />
                <Banner src="img/jane-eyre.jpeg" alt="jane eyre" pho_id={styles.composition__photoP3} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

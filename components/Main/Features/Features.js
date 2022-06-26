import styles from "./Features.module.scss";

export function Features() {
    return(
        <section className={styles.sectionFeatures}>
          <div className={styles.row}>
            <Feature icon="world" heading="Available Wolrdwide">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              laboriosam id laudantium unde corporis.
            </Feature>
            <Feature icon="book" heading="Find all the books">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              laboriosam id laudantium unde corporis.
            </Feature>
            <Feature icon="download" heading="Download Ebooks">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              laboriosam id laudantium unde corporis.
            </Feature>
            <Feature icon="heart" heading="Get favourite books">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              laboriosam id laudantium unde corporis.
            </Feature>
          </div>
        </section>
    );
}


export function Feature(props) {
    return (
      <div className={styles.col1Of4}>
        <div className={styles.featureBox}>
          <i className={`${styles.featureBox__icon} icon-basic-${props.icon}`}></i>
          <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>
              {props.heading}
          </h3>
          <p className={styles.featureBox__text}>
            {props.children}
          </p>
        </div>
      </div>
    );
  }
import styles from "../../styles/Home.module.scss";

export default function Story(props) {
  return (
    <div className={styles.story}>
      <figure className={styles.story__shape}>
        <img src={props.imgSrc} alt="Person" className={styles.story__image} />
        <figcaption className={styles.story__caption}>{props.name}</figcaption>
      </figure>
      <div className={styles.story__text}>
        <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>
          {props.heading}
        </h3>
        <p>
         {props.children}
        </p>
      </div>
    </div>
  );
}

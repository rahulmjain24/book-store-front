import styles from "../../styles/Home.module.scss";

export default function Feature(props) {
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

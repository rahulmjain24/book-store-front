import styles from "../../styles/Home.module.scss";
import Link from "next/link";

export function Button(props) {
  return (
    <>
      <Link href={props.href}>
        <a className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimated}`}>
          {props.children}
        </a>
      </Link>
    </>
  );
}

export function BtnText(props) {
  return (
    <>
      <Link href={props.href}>
        <a className={styles.btnText}>
          {props.children} &rarr;
        </a>
      </Link>
    </>
  );
}

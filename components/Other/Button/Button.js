import styles from "./Button.module.scss";
import Link from "next/link";

export function Btn(props) {
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
        <a className={styles.btnText}>{props.children} &rarr;</a>
      </Link>
    </>
  );
}

export function BtnSubmit(props) {
  return (
    <>
      <button className={`${styles.btn} ${styles.btnBrown}`} type="submit">
         {props.children}
      </button>
    </>
  );
}

export function BtnBrown(props) {
  return (
    <>
      <Link href={props.href}>
        <a className={`${styles.btn} ${styles.btnBrown}`}>{props.children}</a>
      </Link>
    </>
  )
}

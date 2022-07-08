import styles from "./Page.module.scss";

export default function Page(props) {


  return (
    <div className={styles.pagination}>
      <button className={styles.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.btnIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <div className={`${styles.pages}`}>
        {/* {pageNo(props.totalPages)} */}
        {props.children}
      </div>
      <button className={styles.btn}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.btnIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}

export function PageNo({i, curr}) {
  return <a className={`${styles.page} ${curr+1 === i ? styles.active : ""}`}>{i}</a>;
}

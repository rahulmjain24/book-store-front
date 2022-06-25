import styles from "../../styles/Home.module.scss";
import { LabelHTMLAttributes } from "react";

export function InputText(props) {
  return (
    <div className={styles.form__group}>
      <input
        type={props.type}
        className={styles.form__input}
        placeholder={props.placeholder}
        id={props.id}
        required={props.required}
      />
      <label for={props.id} className={styles.form__label}>
        {props.placeholder}
      </label>
    </div>
  );
}

export function InputRadio(props) {
  return (
    <div className={styles.form__radioGroup}>
      <input type={"radio"} className={styles.form__radioInput} id={props.id} name={props.name} />
      <label className={styles.form__radioLabel} for={props.id}>
      <span className={styles.form__radioButton}></span>
        {props.label}
      </label>
    </div>
  );
}



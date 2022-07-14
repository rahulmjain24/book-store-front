import styles from "./Form.module.scss";
import { BtnSubmit } from "../../Other/Button/Button";

export default function Form(props) {
  return (
    <section className={styles.sectionSign}>
      <div className={styles.row}>
        <div className={styles.sign}>
          <div className={styles.sign__form}>
            <form action={props.action} method="post" className={styles.form} onSubmit={(e) =>
              props.submitForm(e)}>
              <div className={styles.uMarginBottomMedium}>
                <h2 className={styles.headingSecondary}>{props.heading}</h2>
              </div>
              {props.children}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InputText(props) {
    return (
      <div className={styles.form__group}>
        <input
          type={props.type}
          className={styles.form__input}
          placeholder={props.placeholder}
          id={props.id}
          required={props.required}
          name={props.name}
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
        <input type={"radio"} className={styles.form__radioInput} id={props.id} name={props.name} value={props.value} />
        <label className={styles.form__radioLabel} for={props.id}>
        <span className={styles.form__radioButton}></span>
          {props.label}
        </label>
      </div>
    );
  }

  export function Wrapper(props) {
    return (  
    <div className={`${styles.form__group} ${styles.uMarginBottomMedium}`}>
        {props.children}
    </div>)
  } 
  
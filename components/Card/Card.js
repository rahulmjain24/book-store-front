import Link from "next/link";
import styles from "./Card.module.scss";

export default function Card(props) {
  return (
    <Link href={`/books/${props.id}`}>
      <a>
        <div className={styles.book}>
          {console.log(props)}
          <img src={`/img/books/${props.id}.jpeg`} alt={props.title} className={styles.book__img} />
          <h5 className={styles.book__name}>
            <strong>{props.title}</strong>
            <br />
            <sapn>{props.author.firstName} {props.author.lastName}</sapn>
            <br />
            <span>{props.genre.genre}</span>
            <br />
            <sapn>{props.year}</sapn>
          </h5>
        </div>
      </a>
    </Link>
  );
}

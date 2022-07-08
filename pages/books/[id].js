import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookLayout from "../../components/BookLayout/BookLayout";
import styles from "./Books.module.scss";

export default function Book() {
  const router = useRouter();
  const [data,setData] = useState({})
  // console.log(router)
  useEffect(() => {
    const data = fetch(`http://localhost:8080/api/books/${router.query.id}`)
                    .then(d => d.json())
                    .then(d => {
                        setData({
                            ...d,
                            firstName:d.author.firstName,
                            lastName:d.author.lastName,
                            genre:d.genre.genre
                        })
                    })
                    .catch(err => console.log(err))
  },[router])

  return (
    <BookLayout>
      <div className={styles.book}>
        <div className={styles.detail}>
          <img src={`/img/books/${data.id}.jpeg`} />
          {console.log(data)}
          <div class={styles.description}>
          <h3>{data.title}</h3>
          <h4 className={styles.heading4}>by {data.firstName} {data.lastName}</h4>
          <h4 className={styles.heading4}>{data.year}</h4>
          <h4 className={styles.heading4}>{data.genre}</h4>
            <p class="paragraph">
             {data.synopsis}
            </p>
          </div>
        </div>
      </div>
    </BookLayout>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookLayout from "../../components/BookLayout/BookLayout";
import { BtnBrown } from "../../components/Other/Button/Button";
import styles from "./Books.module.scss";
import Card from "../../components/Card/Card";
import { URL } from "../../setUrl";

export default function Book() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [quer, setQuery] = useState("");
  const [sear, setSear] = useState([]);
  const [bookAdd,setBookAdd] = useState(0)

  function setId(id = router.query.id) {
    return id;
  }

  async function addBook(id) {
    console.log(id);
    let data = await (
      await fetch(`${URL}/api/users?bookId=${id}`, {
        method: "put",
      })
    ).json();
    console.log(data);
  }

  // console.log(router)
  useEffect(() => {
    fetch(`${URL}/api/books/${router.query.id}`)
      .then((d) => d.json())
      .then((d) => {
        setData({
          ...d,
          firstName: d.author.firstName,
          lastName: d.author.lastName,
          genre: d.genre.genre,
        });
      })
      .catch((err) => console.log(err));

    async function search(query) {
      let data = [];
      let user = {};
      data = await await (
        await fetch(`${URL}/api/books?title=${query}`)
      ).json();
      console.log(user);
      if(data) {
        setSear([...data]);
      } else {
        setSear([])
      }
    }
    search(quer);
  }, [router, quer]);

  return (
    <BookLayout
      book={bookAdd}
      change={(e) => {
        if (setId() != router.query.id) {
          console.log(id);
          e.target.value = "";
        }
        setQuery(e.target.value);
      }}
    >
      {console.log(quer)}
      {quer == "" ? (
        <div className={styles.book}>
          <div className={styles.detail}>
            <img src={`/img/books/${data.id}.jpeg`} />
            {console.log(data)}
            <div class={styles.description}>
              <h3>{data.title}</h3>
              <h4 className={styles.heading4}>
                by {data.firstName} {data.lastName}
              </h4>
              <h4 className={styles.heading4}>{data.year}</h4>
              <h4 className={styles.heading4}>{data.genre}</h4>
              <p class={styles.paragraph}>{data.synopsis}</p>
              <div
                onClick={() => {
                  setBookAdd((prevState) => prevState + 1)
                  addBook(router.query.id);
                }}
              >
                <BtnBrown href="/books">Add Book</BtnBrown>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.books}>
          {sear.map((d) => (
            <Card
              clicked={() => {
                setQuery("");
                setId(d.id);
              }}
              key={d.id}
              title={d.title}
              year={d.year}
              id={d.id}
              author={d.author}
              genre={d.genre}
            />
          ))}
        </div>
      )}
      {sear == [] && quer != "" ? <h1>No results found!</h1> : ""}
    </BookLayout>
  );
}

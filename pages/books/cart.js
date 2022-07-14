import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BookLayout from "../../components/BookLayout/BookLayout";
import { BtnBrown } from "../../components/Other/Button/Button";
import Card from "../../components/Card/Card";
import styles from "./Books.module.scss"
import { URL } from "../../setUrl";

export default function Book() {
  const router = useRouter();
  const [data, setData] = useState({});
  const [quer, setQuery] = useState("");
  const [sear, setSear] = useState([]);
  const [user,setUser] = useState([]);
  const [bookDel, setBookDel] = useState(0)

  function setId(id = router.query.id) {
    return id;
  }

  async function delBook(id) {
    console.log(id);
    let data = await (
      await fetch(`${URL}/api/users?bookId=${id}`, {
        method: "delete",
      })
    ).json();
    console.log(data);
  }

  // console.log(router)
  useEffect(() => {
    fetch(`${URL}/api/books/${router.query.id ? "" : router.query.id}`)
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
      if(data != undefined) {
        setSear([...data]);
      } else {
        setSear([])
      }
    }
    search(quer);

    fetch(`${URL}/api/users/user`)
        .then(data => data.json())
        .then(da => {
            console.log(da)
            if(da) {
              setUser([ ...da.books ]);
            } else {
              setUser([])
            }
        })
        .catch(err => console.log(err))
  }, [router, quer]);

  return (
    <BookLayout
      del={bookDel}
      change={(e) => {
        if (setId() != router.query.id) {
          console.log(id);
          e.target.value = "";
        }
        setQuery(e.target.value);
      }}
    >
      {console.log(quer)}
      {quer == "" ? user.map(d => 
        <div className={styles.book}>
          <div className={styles.detail}>
            <img src={`/img/books/${d.id}.jpeg`} />
            {console.log(data)}
            <div class={styles.description}>
              <h3>{d.title}</h3>
              <h4 className={styles.heading4}>
                by {d.author.firstName} {d.author.lastName}
              </h4>
              <h4 className={styles.heading4}>{d.year}</h4>
              <h4 className={styles.heading4}>{d.genre.genre}</h4>
              <div
                onClick={() => {
                    console.log(d.id)
                    const cartData = [...user]
                    delBook(d.id);
                    searchData.splice(cartData.indexOf(d), 1)
                    setSear([...cartData])
                    setBookDel((prevState) => prevState + 1)
                }}
              >
                <BtnBrown href="#">Remove Book</BtnBrown>
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
      {sear == [] ? <h1>No results found!</h1> : ""}
    </BookLayout>
  );
}

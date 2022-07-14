import Card from "../../components/Card/Card";
import Page, { PageNo } from "../../components/Other/Pagination/Page";
import styles from "./Books.module.scss";
import { useEffect, useState } from "react";
import BookLayout from "../../components/BookLayout/BookLayout";
import { URL } from "../../setUrl";

export default function Books(props) {
  function pagination(total) {
    let pages = [];
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
    return pages;
  }

  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setPage] = useState(0);
  const [quer,setQuery] = useState("")
  const [sear,setSear] = useState([])

  useEffect(() => {
    const wh = fetch(`${URL}/api/books?page=${currentPage}`);
    wh.then((data) => data.json())
      .then((d) => {
        console.log(d)
        setData([...d.content]);
        setTotalPages(d.totalPages);
      })
      .catch((err) => console.log(err));

      async function search(query) {
        let data = []
        let user = {}
        data = await (await (await fetch(`${URL}/api/books?title=${query}`)).json());
        console.log(user)
        if(data) {
          setSear([...data]);
        } else {
          setSear([])
        }
        
      }
      search(quer)

  }, [currentPage, quer]);

  return (
    <BookLayout change={e => {
      setQuery(e.target.value)
      }
    }>
      <div className={styles.books}>
        {quer =="" ? data.map((d) => (
          <Card
            key={d.id}
            title={d.title}
            year={d.year}
            id={d.id}
            author={d.author}
            genre={d.genre}
          />
        )) : sear.map(d => (
          <Card
            key={d.id}
            title={d.title}
            year={d.year}
            id={d.id}
            author={d.author}
            genre={d.genre}
          />
        ))}
        {sear == [] && quer != "" ? <h1>No results found!</h1> : ""} 
      </div>
      <Page last={totalPages}>
        {pagination(totalPages).map((i) => (
          <div key={i} onClick={() => setPage(i - 1)}>
            <PageNo i={i} curr={currentPage} />
          </div>
        ))}
      </Page>
      </BookLayout>
  );
}

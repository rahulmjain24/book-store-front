import Card from "../../components/Card/Card";
import Page, { PageNo } from "../../components/Other/Pagination/Page";
import styles from "./Books.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import BookLayout from "../../components/BookLayout/BookLayout";

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

  useEffect(() => {
    const wh = fetch(`http://localhost:8080/api/books?page=${currentPage}`);
    wh.then((data) => data.json())
      .then((d) => {
        setData([...d.content]);
        setTotalPages(d.totalPages);
      })
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <BookLayout>
      <div className={styles.books}>
        {console.log(data)}

        {data.map((d) => (
          <Card
            title={d.title}
            year={d.year}
            id={d.id}
            author={d.author}
            genre={d.genre}
          />
        ))}
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

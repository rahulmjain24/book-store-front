import styles from "./BookLayout.module.scss";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "../Other/Nav/Nav";
import { URL } from "../../setUrl";

export default function BookLayout(props) {
  const [user, setUser] = useState({
    username:"",
    books:[]
  });
  const [item,setItem] = useState(0)

  useEffect(() => {
    fetch(`${URL}/api/users/user`)
      .then((data) => data.json())
      .then((da) => {
        console.log(da)
        if(da) {
          setUser({ ...da });
          setItem(da.books.length)
        } else {
          setUser({
            username : "",
            books:[]
          })
          setItem(0)
        }
        
      })
      .catch((err) => console.log(err));
  }, [props.del, props.book]);

  return (
    <div className={styles.container}>
      <Nav></Nav>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <img src="/img/favicon.png" alt="logo" className={styles.logo} />
          </a>
        </Link>

        <form action="#" className={styles.search}>
          <input
            onChange={(e) => props.change(e)}
            type="text"
            className={styles.search__input}
            placeholder="Search books"
          />
          <button className={styles.search__button}>
            <svg className={styles.search__icon}>
              <use href="/img/sprite.svg#icon-magnifying-glass"></use>
            </svg>
          </button>
        </form>

        <nav className={styles.userNav}>
          <Link href="/books/cart">
            <a>
              <div className={styles.userNav__iconBox}>
                <svg className={styles.userNav__icon}>
                  <use href="/img/sprite.svg#icon-bookmark"></use>
                </svg>
                <span className={styles.userNav__notification}>
                  {item}
                  {console.log(user)}
                </span>
              </div>
            </a>
          </Link>

          <div className={styles.userNav__user}>
            <img
              src="/img/userIcon.png"
              alt="User photo"
              className={styles.userNav__userPhoto}
            />
            <span className={styles.userNav__userName}>
              {console.log("username : "+user.username)}
              {user.username == "" ? (
                <Link href="/login">
                  <a>Log in</a>
                </Link>
              ) : (
                user.username
                // .charAt(0).toUpperCase() + user.username.slice(1)
              )}
            </span>
          </div>
        </nav>
      </header>
      {props.children}
    </div>
  );
}

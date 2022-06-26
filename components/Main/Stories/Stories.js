import styles from "./Stories.module.scss";
import BgVideo from "../../Other/BgVideo/BgVideo";
import { BtnText } from "../../Other/Button/Button";

export function Stories() {
    return (
        <section className={styles.sectionStories}>
          <BgVideo UrlMp4="video/video.mp4" />

          <div className={`${styles.uCenterText} ${styles.uMarginBottomBig}`}>
            <h2 className={styles.headingSecondary}>
              We make people genuinely happy.
            </h2>
          </div>

          <div className={styles.row}>
            <Story
              imgSrc="img/nat-8.jpg"
              heading="Got all my favorite books in 1 place"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              minus velit, quisquam hic tenetur enim autem unde repellendus fuga
              accusantium, soluta ex fugit minima voluptatibus eum odit ipsum
              quos consequuntur. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </Story>
            <Story
              imgSrc="img/nat-9.jpg"
              heading="My favourite site to buy books online"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              minus velit, quisquam hic tenetur enim autem unde repellendus fuga
              accusantium, soluta ex fugit minima voluptatibus eum odit ipsum
              quos consequuntur. Lorem ipsum dolor sit amet consectetur,
              adipisicing elit.
            </Story>
          </div>

          <div class={`${styles.uCenterText} ${styles.uMarginTopHuge}`}>
            <BtnText href="/">Show more reviews</BtnText>
          </div>
        </section>
    );
}


export function Story(props) {
    return (
      <div className={styles.story}>
        <figure className={styles.story__shape}>
          <img src={props.imgSrc} alt="Person" className={styles.story__image} />
          <figcaption className={styles.story__caption}>{props.name}</figcaption>
        </figure>
        <div className={styles.story__text}>
          <h3 className={`${styles.headingTertiary} ${styles.uMarginBottomSmall}`}>
            {props.heading}
          </h3>
          <p>
           {props.children}
          </p>
        </div>
      </div>
    );
  }
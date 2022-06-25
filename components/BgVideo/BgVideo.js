import styles from "../../styles/Home.module.scss";

export default function BgVideo(props) {
    return (
        <div className={styles.bgVideo}>
                <video className={styles.bgVideo__content} autoPlay muted loop>
                    <source src={props.UrlMp4} />
                    Your browser is not supported!
                </video>
        </div>
    );
}
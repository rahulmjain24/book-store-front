import styles from "../../styles/Home.module.scss";
export default function Banner(props) {
    return (
        <img src={props.src} alt={props.alt} className={`${styles.composition__photo} ${props.pho_id}`}/>
    );
}
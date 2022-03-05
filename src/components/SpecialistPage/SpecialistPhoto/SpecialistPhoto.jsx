import CustomButton from "../../Button/Button";
import styles from "./SpecialistPhoto.module.css";



export default function SpecialistPhoto ({specialist}) {
    console.log(specialist.img);
    return (
        <div className={styles.SpecialistPhoto}>
            <img src={`/${specialist.img}`} alt={specialist.url} />
            <p>{`Ближайшая дата приёма: ${specialist.details.nearestDate}`}</p>
            <CustomButton>Записаться</CustomButton>
            <a>Оставить отзыв</a>
        </div>
    )
}
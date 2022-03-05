
import styles from "./SpecialistEducation.module.css"

export default function SpecialistEducation ({education}) {

    return (
        <div className={styles.SpecialistEducation}>
            <p>{education.year}</p>
            <p>{education.course}</p>
        </div>
    )

}
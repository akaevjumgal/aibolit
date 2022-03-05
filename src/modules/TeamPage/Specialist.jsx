import { Link } from "react-router-dom"
import styles from "./Specialist.module.css"

export default function Specialist ({spec}) {
    
    const nameArray = spec.name.split(' ');
    nameArray[0] += '\n';

    const name = nameArray.join(' ');
    
    return (
        <Link to ={spec.url}>
            <div className={styles.SpecialistCard}>
                <div className={styles.SpecialistCardFirst}>
                    <img src={`/${spec.img}`} alt={spec.name} />
                    <p>{spec.exp}</p>
                </div>
                <div className={styles.SpecialistCardSecond}>
                    <div>
                        <p className={styles.SmallP}>{spec.profession}</p>
                        <p>{name}</p>
                        </div>
                    <div>
                        <p className={styles.SmallP}>специализация</p>
                        <p>{spec.specialization}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
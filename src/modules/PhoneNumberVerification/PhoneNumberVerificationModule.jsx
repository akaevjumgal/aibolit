import { ModalScenes } from "../../common/signin";
import CustomButton from '../../components/Button/Button';
import styles from './PhoneNumberVerification.module.css';

export default function PhoneNumberVerificationModule({ setScene }) {
    return (
        <div>
            <img className={styles.img} src="/ic_close.svg" alt="#"/>
            <h1 className={styles.h2}>Вход или регистрация</h1>
            <input className={styles.input} type="number" maxLength='12' placeholder='+7 (999) 999 99 99'/>
            <CustomButton type="number" onClick={() => setScene(ModalScenes.Verification)}>
                Далее   
            </CustomButton>
        </div>
    )
}
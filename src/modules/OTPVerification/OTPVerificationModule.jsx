import { ModalScenes } from "../../common/signin";
import CustomButton from '../../components/Button/Button';
import CountDown from '../../components/CountTimer/Timer';
import VerificationInput from "../../components/VerificationInput/VerificationInput";
import styles from './OTPVerificationModule.module.css';

export default function OTPVerificationModule({ setScene }) {
    return (
        <div>
            <h1 align="center" className={styles.h2}>Вход или регистрация</h1>
            <VerificationInput />
            <CountDown />
            <div className={styles.buttonWrapper}>
                <CustomButton>Готово</CustomButton>
            </div>
            <p className={styles.text} onClick={() => setScene(ModalScenes.PhoneNumber)}>Назад</p> 
        </div>
    )
}
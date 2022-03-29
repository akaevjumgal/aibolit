import styles from './ChooseVariante.module.css';
import ChooseButton from './ChooseButton/ChooseButton';

export default function ChooseVariante({ SetScene }) {
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <h2>Записаться на прием</h2>
        <p style={{ marginTop: '20px' }}>
          шаг 1 из 4
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <ChooseButton onClick={() => SetScene('TypeOfService')}>Онлайн-консультация</ChooseButton>
        <ChooseButton onClick={() => SetScene('TypeOfService')}>Прием в клинике</ChooseButton>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import styles from './Mail.module.css';
import MailButton from './MailButton/MailButton';

export default function Mail({ SetScene }) {
  const [value, setValue] = useState('');
  const [state, setState] = useState(true);
  useEffect(() => {
    if (value.includes('@') && value.includes('.')) {
      setState(false);
    } else {
      setState(true);
    }
  }, [value]);
  function finishedMail() {
    localStorage.setItem('mail', value);
    SetScene('Info');
  }
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <h2>Записаться на прием</h2>
        <p style={{ marginTop: '20px' }}>
          шаг 5 из 5
          {' '}
          <br />
          Укажите адрес электронной почты
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <input placeholder="aibolit@gmail.com" onChange={(event) => setValue(event.target.value)} className={styles.input} type="email" />
      </div>
      <div className={styles.bottomWrapper}>
        <MailButton isDisabled={state} onClick={() => finishedMail()}>Записаться</MailButton>
        <button onClick={() => SetScene('ChooseTime')} className={styles.Button} type="button">НАЗАД</button>
      </div>
    </div>
  );
}

import { useState } from 'react';
import CountDown from '../../../CountTimer/Timer';
import styles from './PasswordFromPhone.module.css';

export default function PasswordFromPhone({ SetScene }) {
  const [value, setValue] = useState('');
  const maxLength = (number) => {
    if (event.target.value.length > number) event.target.value = event.target.value.slice(0, number);
  };

  return (
    <div className={styles.OrderPhoneContainer}>
      <div>
        <h2>Записаться на прием</h2>
        <p className={styles.Step}>
          шаг 1 из 5
          <br />
          Войдите в профиль или зарегистрируйтесь
        </p>
      </div>
      <div className={styles.bottomWrap}>
        <div>
          <input onChange={(event) => setValue(event.target.value)} className={styles.input} type="number" onInput={(event) => maxLength(4)} maxLength="4" placeholder="Код из СМС" />
          <CountDown />
          <p className={styles.OrderNext} style={{ display: (value.length > 3) ? 'block' : 'none', marginTop: 17 }} onClick={() => SetScene('ChooseVariante')}>ДАЛЕЕ</p>
        </div>
        <p onClick={() => SetScene('PhoneNumber')} className={styles.OrderP}>
          НАЗАД
        </p>
      </div>
    </div>
  );
}

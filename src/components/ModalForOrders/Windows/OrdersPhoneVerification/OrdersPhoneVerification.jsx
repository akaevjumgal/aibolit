import React, { useState } from 'react';
import styles from './OrdersPhoneVerification.module.css';

export default function OrdersPhoneVerification({ SetScene }) {
  const [value, setValue] = useState('');
  const maxLength = (number) => {
    if (event.target.value.length > number) event.target.value = event.target.value.slice(0, number);
  };
  const finishedWindow = () => {
    localStorage.setItem('phone', value);
    SetScene('PasswordFromPhone');
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
        <input onChange={(event) => setValue(event.target.value)} className={styles.input} type="number" onInput={(event) => maxLength(12)} placeholder="+7 (999) 999 99 99" />
        <div style={{ height: '20px' }}>
          <button
            type="button"
            className={styles.OrderNext}
            style={{ display: (value.length > 11) ? 'block' : 'none', border: 'none', background: 'white' }}
            onClick={() => finishedWindow()}
          >
            ДАЛЕЕ
          </button>
        </div>
        <button type="button" className={styles.OrderP} onClick={() => SetScene('ChooseVariante')}>
          ПРОДОЛЖИТЬ БЕЗ РЕГИСТРАЦИИ
        </button>
      </div>
    </div>
  );
}

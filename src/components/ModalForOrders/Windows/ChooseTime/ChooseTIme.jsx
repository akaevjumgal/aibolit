import { useState } from 'react';
import CustomButton from '../../../Button/Button';
import styles from './ChoosoeTime.module.css';
import DateSelector from './Selectors/DateSelector';
import TimeSelector from './Selectors/TimeSelector';

export default function ChooseTime({ SetScene }) {
  const yourSpec = JSON.parse(localStorage.getItem('choosenSpec'));
  const [date, setdate] = useState('');
  const [time, setTime] = useState('');
  function finishedTime() {
    localStorage.setItem('date', JSON.stringify(date));
    localStorage.setItem('time', JSON.stringify(time));
    SetScene('Mail');
  }
  return (

    <div className={styles.container}>

      <div className={styles.topWrapper}>
        <h2>Записаться на прием</h2>
        <p style={{ marginTop: '20px' }}>
          шаг 4 из 4
          {' '}
          <br />
          Выберите дату и время посещения
        </p>
      </div>
      <div className={styles.mainContainer}>
        <div>
          <img className={styles.specImg} src={yourSpec.img} alt="" />
          <p className={styles.specName}>{yourSpec.name}</p>
        </div>
        <div className={styles.SelectorsContainer}>
          <DateSelector SetDate={setdate} />
          <TimeSelector SetValue={setTime} />
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <CustomButton onClick={() => finishedTime()}>Далее</CustomButton>
        <button onClick={() => SetScene('ChooseSpecialist')} className={styles.Button} type="button">НАЗАД</button>
      </div>

    </div>

  );
}

import { useState } from 'react';
import SpecialistCard from './SpecialistCard/SpecialistCard';
import Workers from '../../../../fake-datas/workers.json';
import styles from './ChooseSpecialist.module.css';
import CustomButton from '../../../Button/Button';

export default function ChooseSpecialist({ SetScene, value }) {
  const [activeSpecialist, setActiveSpecialist] = useState(null);
  const specialist = Workers.filter((item) => item.specialization.toLowerCase().includes(value.value.toLowerCase()));
  const finishedSpecialist = () => {
    localStorage.setItem('choosenSpec', JSON.stringify(activeSpecialist));
    SetScene('ChooseTime');
  };
  console.log(activeSpecialist);
  return (
    <div className={styles.container}>

      <div className={styles.topWrapper}>
        <h2>Записаться на прием</h2>
        <p style={{ marginTop: '20px' }}>
          шаг 3 из 4
          {' '}
          <br />
          Выберите специалиста
        </p>
      </div>
      <div className={styles.bottomContainer}>
        {specialist.map((spec) => (
          <SpecialistCard
            key={spec.id}
            active={activeSpecialist === spec}
            img={spec.img}
            date={spec.details.nearestDate}
            name={spec.name}
            onClick={() => setActiveSpecialist(spec)}
          />
        ))}
      </div>
      <div className={styles.bottomWrapper}>
        <CustomButton onClick={finishedSpecialist}>Далее</CustomButton>
        <button onClick={() => SetScene('TypeOfService')} className={styles.Button} type="button">НАЗАД</button>
      </div>

    </div>
  );
}

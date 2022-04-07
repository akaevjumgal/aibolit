import Select from 'react-select';
import Data from '../../../../fake-datas/services.json';
import './TypeOfServiceSelect/Select.css';
import styles from './TypeOfService.module.css';
import CustomButton from '../../../Button/Button';


const Service = Data.map((name) => ({
  value: name.name,
  label: name.name,
}));
export default function TypeOfService({ SetScene, SetValue }) {
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <h2>Записаться на прием</h2>
        <p style={{ marginTop: '20px' }}>
          шаг 2 из 4
          {' '}
          <br />
          Выберите специализацию
        </p>
      </div>
      <div className={styles.bottomContainer}>
        <Select
          placeholder="Введите специальность"
          onChange={SetValue}
          className="Selects"
          options={Service}
        />
      </div>
      <div className={styles.bottomWrapper}>
        <CustomButton onClick={() => SetScene('ChooseSpecialist')}>Далее</CustomButton>
        <button className={styles.Button} type="button">Я НЕ ЗНАЮ, К КАКОМУ ВРАЧУ ОБРАТИТЬСЯ</button>
      </div>
    </div>
  );
}

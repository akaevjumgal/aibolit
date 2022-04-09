import styles from './Info.module.css';

export default function Info({ SetScene }) {
  const mail = localStorage.getItem('mail');
  return (
    <div className={styles.container}>
      <div className={styles.topWrapper}>
        <h2>Записаться на прием</h2>
      </div>
      <div className={styles.information}>
        <p>
          Информация о записи отправлена
          {' '}
          <br />
          {' '}
          на
          {' '}
          {mail}
        </p>
      </div>
    </div>
  );
}

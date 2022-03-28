import styles from './SpecialistCard.module.css';

export default function SpecialistCard({
  id, img, name, date, active, ...props
}) {
  const getActiveStyles = active ? styles.CardContainerActive : styles.CardContainer;

  return (
    <div className={getActiveStyles} {...props}>
      <div className={styles.imgContainer}>
        <img style={{ width: 50, height: 50 }} src={`/${img}`} alt="" />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.nameText}>
          {name}
        </p>
        <p className={styles.dateText}>
          {`Ближайшая дата приёма : ${date}`}
        </p>
      </div>
    </div>
  );
}

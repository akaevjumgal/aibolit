import styles from './ChooseCard.module.css'

export default function ChooseCard({ id, title, img, body }) {
  return (
    <div
      key={id}
      className={styles.ChooseCard}
    >
      <h2 className={styles.chooseTitle}>
        {title}
      </h2>
      <div className={styles.ChooseBody}>
        <img src={img} alt="Image" />
        <p className={styles.choiseBody}>
          {body}
        </p>
      </div>
    </div>
  )
}
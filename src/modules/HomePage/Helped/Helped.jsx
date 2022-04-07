import styles from '../Helped/Helped.module.css'

export default function Helped(){
  return (
    <section className={styles.helped}>
      <h1 className={styles.number_helped}>1 150 000</h1>
      <div className={styles.block_helped}>
        <p className={styles.text_helped}>
          питомцам мы помогли <br/> 
          за 18 лет работы
        </p>
      </div>
    </section>
  )
}
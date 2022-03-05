import ChooseUsCard from "./ChooseUsCard/ChooseUsCard"
import styles from './ChooseUs.module.css'
import Choise from '../../fake-datas/choise.json'



export default function () {

  return (
    <section>
      <h1 className={styles.h1}>Почему выбирают нас ?</h1>
      <div className={styles.container}>
        {
          Choise.map((choise) => {
            return (

              <ChooseUsCard
                key={choise.id}
                title={choise.title}
                img={choise.img}
                body={choise.body}
              />

            )
          })
        }
      </div>
    </section>
  )
}
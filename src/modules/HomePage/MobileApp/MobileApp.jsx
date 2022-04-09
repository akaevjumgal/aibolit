import { Link } from 'react-router-dom';
import styles from '../MobileApp/MobileApp.module.css'

export default function MobileApp (){
  return(
    <section className={styles.mobile}>
      <div className={styles.textBlock}>
            <p className={styles.soon}>Скоро</p>
            <div>
              <h2 className={styles.description}>
                Удобное приложение <br/>
                для питомцев и <br/>
                их хозяев
              </h2>
            </div>
            <div className={styles.link}>
              <Link to="#"><img src="/img/appStore.svg" alt="appStore" /></Link>
              <Link to="#"><img src="/img/google-play.svg" alt="GooglePlay" /></Link>
            </div>
      </div>
        <div className={styles.block}>
          <img className={styles.dog} src="/img/dog.png" alt="img" />
          <img className={styles.app} src="/img/mobile.svg" alt="img" />
      </div>
    </section>
  )
}
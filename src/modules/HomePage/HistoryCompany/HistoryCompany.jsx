import Slider from  'react-slick/lib/slider';
import workers from '../../../fake-datas/workers.json'
import { Link } from 'react-router-dom'
import styles from '../HistoryCompany/HistoryCompany.module.css'

export default function HistoryCompany () {

  const setting = {
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2
  };  

  return (
    <section className={styles.history_section}>
      <div className={styles.history_block}>
        <h1 className={styles.title_history}>История компании</h1>
        <p className={styles.body_history}>
        История компании начинается 14 января 1999 года, <br/>
        когда было образовано ООО «Чижи». Идея пришла, т.к. у<br/>
        основателя компании Прозор Жанны Георгиевны была <br/>
        собака боксёр по кличке Бард…
        </p>
        <div className={styles.link_history}>
          <Link to='/History' className={styles.read_link}>
            Читать далее 
            <img src="/img/Path.svg" alt="label" className={styles.path}/>
          </Link>
        </div>
      </div>
      <div className={styles.slider_block}>
        <h1 className={styles.title_history}>Наши специалисты</h1>
        <div className={styles.slider}>
          <Slider {...setting} className={styles.slider_worker}>
          {workers.map((worker) => {
              return (
                <div key={worker.id}>
                  <img className={styles.slider_photo} src={worker.img} alt="Photo"/>
                </div>
              )
            })}
          </Slider>
        </div>
        <Link to="/team" className={styles.link_spec}>
          Посмотреть всех
          <img src="/img/Path.svg" alt="label"  className={styles.path}/>
        </Link>
      </div>
    </section>
  )
}
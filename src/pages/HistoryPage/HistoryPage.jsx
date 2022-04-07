import { useContext, useEffect } from "react";
import NavigationContext from "../../navigation.context";
import { Link } from "react-router-dom";
import styles from '../HistoryPage/HistoryPage.module.css'
import HistoryCard from "../../modules/HistoryCard/HistoryCard";

export default function HistoryPage(){
  
  const { setNavigation } = useContext(NavigationContext)

  useEffect(() => {
    setNavigation({
      title: 'История компании',
      links: [
      <a href="#subtitle_one">ПОЗДАГОЛОВОК 1</a> ,
      <a href="#subtitle_two">ПОЗДАГОЛОВОК 2</a> , 
      <a href="#subtitle_three">ПОЗДАГОЛОВОК 3</a>
      ]
    })
  },[])

  return (
    <section>
      <div>
        <Link to='/' className={styles.back}>
          <img src="/img/HistoryPage/path<.png" alt="<" className={styles.back_btn}/>
          назад
        </Link>
      </div>
      <HistoryCard/>
    </section>
  )
}
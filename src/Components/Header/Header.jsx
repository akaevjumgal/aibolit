import './Header.css';
import { Link } from "react-router-dom";

export default function Header(){



    return(
        <div className="header__container">
            <div className="container__logo">
                <Link to='#' className="logo"><img src={'/img/Logo.svg'} alt="Логотип" /></Link>
            </div>
            <div className="header__info__container">
               <Link to='#' className='header__info'> Личный кабинет</Link>
               <Link to='#' className='header__info'> О нас</Link>
               <Link to='#' className='header__info'>Новости и акции</Link>
               <Link to='#' className='header__info'> Контакты</Link>
               <Link to='#' className='header__info'> Блог</Link>
            </div>
            
                <div className='city__info'>
                    <img className='place' src={'/img/Places.svg  '} alt="" /> 
                     <p style={{marginLeft:'19px'}}>Выберите город</p>
                </div>
            
        </div>
    )

}
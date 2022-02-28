import './Header.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Header(){
    const [active,setActive] = useState('header__info')
    function toggle(){
        if (active === 'header__info' ) {
            setActive('active');
            
        }   
        else {
            setActive ('header__info')
        }
    }
    

    return(
        <div className="header__container">
            <div className="container__logo">
                <Link to='#' className="logo"><img src={'/img/Logo.svg'} alt="Логотип" /></Link>
            </div>
            <div className="header__info__container">
               <Link to='#' onClick={() => toggle()} className={active}> Личный кабинет</Link>
               <Link to='#' onClick={() => toggle()} className={active }> О нас</Link>
               <Link to='#' onClick={() => toggle()} className={active}>Новости и акции</Link>
               <Link to='#' onClick={() => toggle()} className={active}> Контакты</Link>
               <Link to='#' onClick={() => toggle()} className={active}> Блог</Link>
            </div>
            
                <div className='city__info'>
                    <img className='place' src={'/img/Places.svg  '} alt="" /> 
                     <p style={{marginLeft:'19px'}}>Выберите город</p>
                </div>
            
        </div>
    )

}
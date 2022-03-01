import './Header.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

const NavigationLinks = [
    {
        label: 'Личный кабинет',
        link: '#',
    }, 
    {
        label: 'О нас',
        link: '#',
    },
    {
        label: 'Новости и акции',
        link: '#',
    },
    {
        label: 'Контакты',
        link: '#',
    },
    {
        label: 'Блог',
        link: '#',
    }
]

export default function Header(){
    const [active, setActive] = useState('')
    const activate = (label) => () => {
        setActive(label)
    }

    const getActiveStyles = (label) => {
        return label === active ? 'active' : 'header__info'
    }

    return(
        <div className="header__container">
            <div className="container__logo">
               <Link to='#' className="logo"><img src={'/img/Logo.svg'} alt="Логотип" /></Link>
            </div>
            <div className="header__info__container">
                {NavigationLinks.map(({ label, link }) => (
                    <Link key={label} to={link} className={getActiveStyles(label)} onClick={activate(label)}>
                        {label}
                    </Link>
                ))}
            </div>

                <div className='city__info'>
                    <img className='place' src={'/img/Places.svg  '} alt="" /> 
                     <p style={{marginLeft:'19px'}}>Выберите город</p>
                </div>
            
        </div>
    )

}
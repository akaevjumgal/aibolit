import './Header.css'

export default function Header(){



    return(
        <div className="header__container">
            <div className="container__logo">
                <a href="" className="logo"><img src={'/img/Logo.svg'} alt="Логотип" /></a>
            </div>
            <div className="header__info__container">
                <a className='header__info' href="#">Личный кабинет</a>
                <a className='header__info' href="#">О нас</a>
                <a className='header__info' href="#">Новости и акции</a>
                <a className='header__info' href="#">Контакты</a>
                <a className='header__info' href="#">Блог</a>
            </div>
            
                <div className='city__info'>
                    <img className='place' src={'/img/Places.svg  '} alt="" /> 
                     <p style={{marginLeft:'19px'}}>Выберите город</p>
                </div>
            
        </div>
    )

}
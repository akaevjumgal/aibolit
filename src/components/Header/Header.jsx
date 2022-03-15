import { useState } from 'react';
import SignInModule from '../../modules/SignIn/SignInModule';
import Modal from '../Modal/Modal';
import './Header.css';





// Создать модуль <Login />
// описать прупсы: isModalOpen
// описать логику внутри этого модуля, отрисовка страниц внутри модального окна


export default function Header() {
    const [isModalOpen, setModalOpen] = useState(
        false
    );

    const openModal = () => {
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return(
        <div className="header__container">
            <div className="container__logo">
                <a href="" className="logo"><img src={'/img/Logo.svg'} alt="Логотип" /></a>
            </div>
            <div className="header__info__container">
                <p className='header__info' onClick={openModal}>Личный кабинет</p>
                <a className='header__info' href="#">О нас</a>
                <a className='header__info' href="#">Новости и акции</a>
                <a className='header__info' href="#">Контакты</a>
                <a className='header__info' href="#">Блог</a>
            </div>
                <div className='city__info'>
                    <img className='place' src={'/img/Places.svg  '} alt="" /> 
                     <p style={{marginLeft:'19px'}}>Выберите город</p>
                </div>
                {isModalOpen &&  (
                    <Modal close={closeModal}>
                        <SignInModule />
                    </Modal>
                )}
        </div>
    )
}
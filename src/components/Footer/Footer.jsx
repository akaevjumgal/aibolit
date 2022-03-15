import './Footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (

    <div className="footer">

      <div className="footer__aibolit">
        <div className="footer__logo">
          <Link to="/">
            <img src="/img/footerLogo.svg" alt="sdas" />
            {' '}
          </Link>
        </div>
        <div className="footer__aibolit__title">
          <Link to="/">
            <h2 style={{ fontSize: '50px' }}>Айболит</h2>
            <h5>ветеринарная клиника</h5>
          </Link>

        </div>
        <div className="footer__contacts">
          <div className="footer__download">
            <Link to="#"><img src="/img/appStore.svg" alt="" /></Link>
            <Link to="#"><img src="/img/google-play.svg" alt="" /></Link>

          </div>
          <div className="footer__social">
            <Link to="#"><img src="/img/inst.svg" alt="" /></Link>
            <Link to="#"><img src="/img/fb.svg" alt="" /></Link>
            <Link to="#"><img src="/img/vk.svg" alt="" /></Link>
            <Link to="#"><img src="/img/youtube.svg" alt="" /></Link>
          </div>
          <div className="footer__mail">
            <p>aibolit34.ru</p>
            <p>aibolit34@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer__description">
        <div className="confidational">
          <Link to="#">
            <p>
              Политика
              {' '}
              <br />
              {' '}
              конфиденциальности в отношении обработки персональных данных
            </p>
          </Link>
        </div>
        <div className="footer__list">
          <ul className="footer__list__1">
            <li>
              <Link to="#" className="footer__info">Главная</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Услуги и цены</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">История компании</Link>
            </li>
            <li>
              <Link to="/team" className="footer__info">Наши специалисты</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Вакансии</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Реквизиты</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Онлайн-оплата</Link>
            </li>
          </ul>
          <ul className="footer__list__2">

            <li>
              <Link to="#" className="footer__info">Отзывы</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Контакты</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Груминг-салон</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Косметика</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Новости и акции</Link>
            </li>
            <li>
              <Link to="#" className="footer__info">Блог</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

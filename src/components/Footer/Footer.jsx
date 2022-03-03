import './Footer.css'

export default function Footer(){


    return(

        <div className="footer">

        
            <div className='footer__aibolit'>
                <div className="footer__logo">
                    <img src={'/img/footerLogo.svg'} alt="sdas" />
                </div>
                <div className="footer__aibolit__title">
                    <h2 style={{fontSize:'50px'}}>Айболит</h2> 
                    <h5>ветеринарная клиника</h5>

                </div>
            </div>
            <div className="footer__description">
                 <div className='confidational'>
                     <p>Политика <br/> конфиденциальности в отношении обработки персональных данных</p>
                 </div>
                 <div className='footer__list'>
                     <ul>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Услуги и цены</a>
                         </li>
                         <li>
                         <a href="">История компании</a>
                         </li>
                         <li>
                         <a href="">Наши специалисты</a>
                         </li>
                         <li>
                         <a href="">Вакансии</a>
                         </li>
                         <li>
                         <a href="">Реквизиты</a>
                         </li>
                         <li>
                         <a href="">Онлайн-оплата</a>
                         </li>
                     </ul>
                     <ul>
                     <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Услуги и цены</a>
                         </li>
                         <li>
                         <a href="">История компании</a>
                         </li>
                         <li>
                         <a href="">Наши специалисты</a>
                         </li>
                         <li>
                         <a href="">Вакансии</a>
                         </li>
                         <li>
                         <a href="">Реквизиты</a>
                         </li>
                         <li>
                         <a href="">Онлайн-оплата</a>
                         </li>
                     </ul>
                 </div>
                 
                    
                 
            </div>
        </div>
    )
}
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
                 <div>
                     <ul>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Главная</a>
                         </li>
                         <li>
                         <a href="">Главная</a>
                         </li>
                     </ul>
                 </div>
                 <div>
                     <ul>
                         <li>
                             
                             
                         </li>
                     </ul>
                 </div>
            </div>
        </div>
    )
}
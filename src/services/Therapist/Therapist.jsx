import './Therapist.css'
import Slider from "react-slick/lib/slider";
import Therapy from './Therapy/Therapy';
export default function Therapist() {

    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        draggable: true
    };
    
    return(
        <div  id='record'>
            <h2>Записаться на прием к терапевту</h2>
            <Slider {...settings}>
            <div className='card1'>
            <div className='card'>
              <div className='card_texts'>
            <img className='av' src="/img/Ellipse.svg" />
            <div className='texts'>
            <h3>Ивантелеев <br/> Иван Константинович</h3>
            <p className='ps'>ближайшая дата приема:<br/>29.08.19</p>
            </div>
            </div>  
            </div>      
            </div>      
            <div className='card2'>
            <div className='card'>
              <div className='card_texts'>
            <img className='av' src="/img/Ellipse.svg" />
            <div className='texts'>
            <h3>Ивантелеев <br/> Иван Константинович</h3>
            <p className='ps'>ближайшая дата приема:<br/>29.08.19</p>
            </div>
            </div>  
            </div>      
            </div>  
            <div className='card3'>
            <div className='card'>
              <div className='card_texts'>
            <img className='av' src="/img/Ellipse.svg" />
            <div className='texts'>
            <h3>Ивантелеев <br/> Иван Константинович</h3>
            <p className='ps'>ближайшая дата приема:<br/>29.08.19</p>
            </div>
            </div>  
            </div>      
            </div>  
            <div className='card4'>
            <div className='card'>
              <div className='card_texts'>
            <img className='av' src="/img/Ellipse.svg" />
            <div className='texts'>
            <h3>Ивантелеев <br/> Иван Константинович</h3>
            <p className='ps'>ближайшая дата приема:<br/>29.08.19</p>
            </div>
            </div>  
            </div>      
            </div>   
        </Slider>
        {/* <Therapy/> */}
        </div>
        
    )
}
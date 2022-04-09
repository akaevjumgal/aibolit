
import Slider from 'react-slick/lib/slider';
import './AllServices.css';

export default function AllServices() {
     const settings = {
         className: "slider",
         dots: false,
         Infinity: false,
         centerMode: false,
         slidesToShow: 1,
         sliderToScroll: 1,
         wariableWidth: true,
         draggable: true
     };

     return(
         <div className='main-cards'>
            <h2>Все услуги</h2>
            <Slider {...settings}>
                <div className='car'>
                    <div className='card_texts'>
                        <div className='services'>
                            <h2>Терапия</h2>
                            <p>26 услуг</p>
                        </div>
                    <img className='img' src="/img/Vector1.svg" alt="" />
                    </div>
                </div>
                <div className='car'>
                    <div className='card_texts'>
                        <div className='services'>
                            <h2>Терапия</h2>
                            <p>26 услуг</p>
                        </div>
                    <img className='img' src="/img/Vector1.svg" alt="" />
                    </div>
                </div>
            </Slider>
         </div>
     )
}
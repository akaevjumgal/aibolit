
import CustomButton from '../../../components/Button/Button';
import './SectionOne.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import SocialMediaButtons from '../../../components/Social/SocialMediaButtons';

export default function SectionOne () {

    const sliderData = [
    {name: "Айболит\nкруглосуточная\nветклиника", img: 'img/HomePage-main-slider/1.png', id: 1 },
    {name: "Комфортные\nоборудованные\nстационары", img: 'img/HomePage-main-slider/2.png', id: 2  },
    {name: "Новейшее\nевропейское\nоборудование", img: 'img/HomePage-main-slider/3.png', id: 3  },
    {name: "Собственная\nсовременная\nлаборатория", img: 'img/HomePage-main-slider/4.png', id: 4  },
    {name: "Аптека и зоомагазин\nпо доступным\nценам", img: 'img/HomePage-main-slider/5.png', id: 5  },
    {name: "Груминг салон\nи косметические\nтовары", img: 'img/HomePage-main-slider/6.png', id: 6  },
    ]


    return (
        <section className='SectionOne'>
            <Carousel
            showArrows={false}
            axis='vertical'
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={4000}
            transitionTime ={600}
            infiniteLoop={true}
            swipeable={true}
            >
                {sliderData.map((info) => {
                    return(
                        <div className='SectionOne__slider-element' key={info.name}>
                            <div className='SectionOne__slider-element-info'>
                                <h2>{info.name}</h2>
                                <CustomButton>Записаться</CustomButton>
                            </div>
                            <img className={`SectionOne__img SectionOne__img${info.id}`} src={info.img} alt={info.name} />
                            <p className='SectionOne__phone'>+7 (8442) 96 22 92</p>
                            <SocialMediaButtons customStyle = {{position: 'absolute', bottom: '50px', left: '20%'}} />
                        </div>
                    )
                })}
            </Carousel>
        </section>
    )
}

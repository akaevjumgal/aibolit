import { useParams } from "react-router-dom"
import workers from '../../fake-datas/workers.json';
import NavigationContext from '../../navigation.context';
import { useContext } from 'react';
import { useEffect } from 'react';
import SpecialistPhoto from "../../components/SpecialistPage/SpecialistPhoto/SpecialistPhoto";
import SpecialistEducation from "../../components/SpecialistPage/SpecialistEducation/SpecialistEducation";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick/lib/slider";
import "./SpecialistPage.css"
export default function SpecialistPage () {

    const { setNavigation } = useContext(NavigationContext);
    const { specURL } = useParams();

    const specialist = workers.find((specialist) => (specialist.url === specURL));
    
    useEffect(() => {
    setNavigation({
    title: false,
    links: [<SpecialistPhoto key={specialist.url+123} specialist={specialist} />] })
    }, [])

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
        
    return (
        <main className="SpecialistPage">
        <h1>{specialist.name}</h1>
        <p className="SpecialistPage_smallP">{specialist.exp}</p>
        <p>{specialist.specialization}</p>
        <p>{specialist.details.info}</p>
        <p>Пройденные курсы</p>


        <Slider {...settings}>
            {specialist.details.education.map((edu) =>{
            return (
                <SpecialistEducation key={edu.course} education={edu} />
            )
            })}
        </Slider>
        
        </main>
    )
}
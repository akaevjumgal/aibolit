import Slider from 'react-slick';
import '../Pets.css';
import PetsCard from '../PetsCard';

export default function FirstPet() {
  const analyze = [{
    id: 1,
    img: '/icons/pdf.svg',
    title: 'ОАК',
    date: '25.06.19',
  }, {
    id: 2,
    img: '/icons/pdf.svg',
    title: 'Узи брюшной полости',
    date: '25.06.19',
  }, {
    id: 3,
    img: '/icons/pdf.svg',
    title: 'Биохимия крови',
    date: '25.06.19',
  }, {
    id: 4,
    img: '/icons/pdf.svg',
    title: 'Анализ очень длинное...',
    date: '25.06.19',
  }, {
    id: 5,
    img: '/icons/pdf.svg',
    title: 'Анализ очень длинное...',
    date: '25.06.19',
  }, {
    id: 6,
    img: '/icons/pdf.svg',
    title: 'Узи брюшной полости',
    date: '25.06.19',
  }];
  const UserPet1 = {
    nick: 'Громопетр',
    type: 'Собака',
    sex: 'Мужской',
    breed: 'Без породы',
    age: '1 год 2 месяца',
  };
  const settings = {
    vertical: true,
    // centerMode:true,
    slidesToShow: 5,
    infinite: false,
    slidesToScroll: 2,

  };
  return (
    <div className="Card">
      <div className="Card_Flex_Item1">
        <img src="/icons/pets_dog.svg" alt="Аватар" />
        <p className="redact">Изменить</p>

      </div>
      <div className="Card_Flex_Item2">
        <div>
          <p className="pets_nickname">{UserPet1.nick}</p>
        </div>
        <div className="Card_Info ">
          <p className="Card_Pets_Info">Тип</p>
          <p className="Card_Pets_Info_Value">{UserPet1.type}</p>
        </div>
        <div className="Card_Info ">
          <p className="Card_Pets_Info">Пол</p>
          <p className="Card_Pets_Info_Value">{UserPet1.sex}</p>
        </div>
        <div className="Card_Info">
          <p className="Card_Pets_Info">Порода</p>
          <p className="Card_Pets_Info_Value">{UserPet1.breed}</p>
        </div>
        <div className="Card_Info">
          <p className="Card_Pets_Info">Возраст</p>
          <p className="Card_Pets_Info_Value">{UserPet1.age}</p>
        </div>

      </div>
      <div className="Card_Flex_Item3">
        <div className="Card_Info">
          <p className="Card_Pets_Info">Медицинская карта</p>
          <PetsCard title="10255" date="обновлена 25.06.19" img="/icons/pdf.svg" />
          <div className="Pets_slider_container">
            <p className="Card_Pets_Info">Результаты анализов</p>
            <div className="Pets_slider">
              <Slider {...settings}>
                {analyze.map((analyzes) => (

                  <PetsCard key={analyzes.id} title={analyzes.title} date={analyzes.date} img={analyzes.img} />
                ))}

              </Slider>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

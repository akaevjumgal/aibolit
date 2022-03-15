import '../Pets.css';

export default function SecondPet() {
  const UserPet2 = {
    nick: 'Имя питомца',
    type: 'Кошка',
    sex: 'Женский',
    breed: 'Русская голубая',
    age: '4 месяца',
  };

  return (
    <div className="Card">
      <div className="Card_Flex_Item1">
        <img src="/icons/pets_cat.svg" alt="Аватар" />
        <p className="redact">Изменить</p>

      </div>
      <div className="Card_Flex_Item2">
        <div>
          <p className="pets_nickname">{UserPet2.nick}</p>
        </div>
        <div className="Card_Info ">
          <p className="Card_Pets_Info">Тип</p>
          <p className="Card_Pets_Info_Value">{UserPet2.type}</p>
        </div>
        <div className="Card_Info ">
          <p className="Card_Pets_Info">Пол</p>
          <p className="Card_Pets_Info_Value">{UserPet2.sex}</p>
        </div>
        <div className="Card_Info">
          <p className="Card_Pets_Info">Порода</p>
          <p className="Card_Pets_Info_Value">{UserPet2.breed}</p>
        </div>
        <div className="Card_Info">
          <p className="Card_Pets_Info">Возраст</p>
          <p className="Card_Pets_Info_Value">{UserPet2.age}</p>
        </div>

      </div>
      <div style={{ alignSelf: 'center' }} className="Card_Flex_Item3">
        <div className="Card_Info">
          <p className="Card_Pets_Info">Медицинская карта</p>
          <div>
            <p style={{ marginTop: 10 }}>
              Медицинскую карту заводят при первом посещении клиники
              и обновляют при каждом обращении.
              Здесь вы сможете посмотреть и с
              качать актуальную карту в формате pdf

            </p>
          </div>
          <div className="Pets_slider_container">
            <p className="Card_Pets_Info">Результаты анализов</p>
            <p style={{ marginTop: 10 }}>Пока нет готовых анализов</p>
          </div>

        </div>
      </div>

    </div>
  );
}

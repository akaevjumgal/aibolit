import './ClientCard.css'

export default function  ClientCard(  ){ 
    const user = {
        FirstName: "Виктория",
        LastName: 'Иванова',
        MiddleName: 'Александровна',
        Phone: '+7 999 598-12-45',
        About:   `Живу в Волгограде, очень люблю животных!
                  Мечтаю завести много зверей и построить приют. 
                  Пока что у меня собака, кошка и рыбки :)`,
        avatar: "/icons/Avatar.svg",
 
    }
    return(
    <div className='Card_section'>
        <div className="card_title">
            <h2>Личные данные</h2>
        </div>
        <div className="Card">
            <div className='Card_Flex_Item1'>
                <img src={user.avatar} alt="Аватар" />
                <p className='redact'>Изменить</p>

            </div>
            <div className='Card_Flex_Item2'>
                <div className='Card_Info '>
                    <p className='Card_User_Info'>Имя</p> 
                    <p className='Card_User_Info_Value'>{user.FirstName}</p>
                </div>
                <div className='Card_Info '>
                    <p className='Card_User_Info'>Фамилия</p> 
                    <p className='Card_User_Info_Value'>{user.LastName}</p>
                </div>
                <div className='Card_Info'>
                    <p className='Card_User_Info'>Отчество</p> 
                    <p className='Card_User_Info_Value'>{user.MiddleName}</p>
                </div>
                <div className='Card_Info'>
                    <p className='Card_User_Info'>Телефон</p> 
                    <p className='Card_User_Info_Value'>{user.Phone}</p>
                </div>

            </div>
            <div className='Card_Flex_Item3'>
                <div className='Card_Info'>
                    <p className='Card_User_Info'>О себе</p>
                    <p className='Card_User_Info_Value'>{user.About}</p>
                </div>
            </div>

        </div>
        </div>
    )
}
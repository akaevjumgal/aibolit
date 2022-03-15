import './Reseption.css'
export default function Reseption(){
    const ReseptionInfo = {
        doctor: 'Иванова   Ирина Владимировна',
        cliniks: 'Айболит на Краснополянской',
        pet: 'Гропетр',
        date: '15.10.19',
        time: '15:45',
        img: '/img/Reseption_doctor.svg'
    }


    return(
        <div id="Reseption" className='Reseption_section'>
                    <h2>Запись на приём</h2>
                    <div className="Card">
            <div className='Card_Flex_Item1'>
                <img src={ReseptionInfo.img} alt="Аватар" />
                <p className='redact'>отменить <br/> прием </p>

            </div>
            <div className='Reseption_Card_Flex_Item2'>
                <div className='Card_Info '>
                    <p className='Card_Reseption_Info'>Врач</p> 
                    <p className='Card_Reseption_Info_Value reseption_doctor ' >{ReseptionInfo.doctor}</p>
                </div>
                <div className='Card_Info '>
                    <p className='Card_Reseption_Info'>ветклиника</p> 
                    <p className='Card_Reseption_Info_Value'>{ReseptionInfo.cliniks}</p>
                </div>
              
            </div>
            <div className='Reseption_Card_Flex_Item3'>
                <div className='Card_Info'>
                    <p className='Card_Reseption_Info'>Питомец</p>
                    <p className='Card_Reseption_Info_Value'>{ReseptionInfo.pet}</p>
                </div>
                <div className='Card_Info'>
                    <p className='Card_Reseption_Info'>Дата</p>
                    <p className='Card_Reseption_Info_Value'>{ReseptionInfo.date}</p>
                </div>
                <div className='Card_Info'>
                    <p className='Card_Reseption_Info'>время</p>
                    <p className='Card_Reseption_Info_Value'>{ReseptionInfo.time}</p>
                </div>
            </div>
                </div>
        </div>
    )
}
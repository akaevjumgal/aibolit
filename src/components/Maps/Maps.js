import React from "react";
import './Maps.css'
import  {GeolocationControl, Map, Placemark, YMaps, ZoomControl}  from "react-yandex-maps";

const Maps = () => {
    return (
    <div>
        <div className="contact">
        Контакты
    </div>
        <div className="add">Айболи на Краснополянской</div>
        <img className="gps" src="/icons/Facebook Places.png" />
        <p className="address">
             Дзержинский район,
        ул. Краснополянская, 30 </p>
        <img className="phone" src="/icons/Vector.png" />
        <div className="number">962292</div>
        <img className="clock" src="/icons/Group.png"/>
        <div className="time">Круглосуточно</div>
        <div className="addr">Айболит на Тулака</div>
        <img className="gps1" src="/icons/Facebook Places.png"/>
        <p className="address1">
        Советский район, 
        ул. Карла Маркса, 7</p>
        <img className="phone1" src="/icons/Vector.png"/>
        <div className="number1">962292</div>
        <img className="clock1" src="/icons/Group.png"/>
        <div className="time1">Круглосуточно</div>
        <YMaps>
            <div className="map">
                <Map 
                width={"950px"}
                height={"526px"}
                defaultState={{ center: [48.753836, 44.481276], zoom: 11}}>
                <Placemark geometry={[48.764467, 44.478860]}/>
                <Placemark geometry={[48.676486, 44.478725]}/>
                <GeolocationControl 
                justify-content={"flex-end"}
                border-radius={"50"}
                options={{ float: 'left' }} />
                <ZoomControl options={{ float: 'right' }} />
                <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor:%3A053bd947d462cc1a45aeba4070defff75501905071c0eaf68436ac9976ec698c&amp;width=602&amp;height=400&amp;lang=ru_RU&amp;scroll=true&amp;apikey=<ваш API-ключ>">
                </script>
                </Map>
            </div>
        </YMaps>
        </div> 
    );
}

export default Maps;
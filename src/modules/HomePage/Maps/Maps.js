import React from "react";
import './Maps.css'
import  {GeolocationControl, Map, Placemark, YMaps, ZoomControl}  from "react-yandex-maps";

const Maps = () => {
    return (
    <section className="section-contacts">
        <h2 className="contact">
            Контакты
            </h2>
        <div className="contact-info">
            
            <div>
                <h4 className="add">Айболит на Краснополянской</h4>
                <div className="contact-element">
                    <img className="gps" src="/icons/Facebook Places.png" />
                    <p >
                    Дзержинский район,
                    ул. Краснополянская, 30 </p>
                </div>
                <div className="contact-element">
                    <img className="phone" src="/icons/Vector.png" />
                    <p className="number">962292</p>
                </div>
                <div className="contact-element">
                    <img className="clock" src="/icons/Group.png"/>
                    <p className="time">Круглосуточно</p>
                </div>
            </div>
            <div>
                <h4 className="add">Айболит на Тулака</h4>
                <div className="contact-element">
                    <img className="gps1" src="/icons/Facebook Places.png"/>
                    <p className="address1">
                    Советский район, 
                    ул. Карла Маркса, 7</p>
                </div>
                <div className="contact-element">
                    <img className="phone1" src="/icons/Vector.png"/>
                    <p className="number1">962292</p>
                </div>
                <div className="contact-element">
                    <img className="clock1" src="/icons/Group.png"/>
                    <p className="time1">Круглосуточно</p>
                </div>
            </div>
        </div>
        <div className="section-maps">
            <YMaps>
                    <Map 
                    width={'100%'}
                    height="100%"
                    defaultState={{ center: [48.753836, 44.481276], zoom: 11}}>
                    <Placemark geometry={[48.764467, 44.478860]}/>
                    <Placemark geometry={[48.676486, 44.478725]}/>
                    <GeolocationControl 
                    options={{ float: 'left' }} />
                    <ZoomControl options={{ float: 'right' }} />
                    </Map>
            </YMaps>
        </div>
    </section> 
    );
}

export default Maps;

import React, { useContext, useEffect } from 'react'
import NavigationContext from '../../navigation.context';
import Price from '../../services/Therapist/Price/Price';
import Subtitle from '../../services/Therapist/Subtitle/Subtitle';
import Subtitle2 from '../../services/Therapist/Subtitle/Subtitle2';
import Therapy from '../../services/Therapist/Therapy/Therapy';
import Therapist from './../../services/Therapist/Therapist';

const Services = () => {
  const Links = [<a key="a1" href="#record">ЗАПИСАТЬСЯ НА ПРИЕМ</a>, <a key="a2" href="#therapy">ТЕРАПИЯ В НАШЕЙ КЛИНИКЕ</a>, <a key="a3" href="#subtitle">ПОЗДАГОЛОВОК 1</a>, <a key="a4" href="#subtitle2">ПОЗДАГОЛОВОК 2</a>, <a key="a5" href="#price">ЦЕНЫ</a>];
  const { setNavigation } = useContext(NavigationContext);
  useEffect(() => {
    setNavigation({
      title: 'Терапия',
      links: Links,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <Therapist/>
    <Therapy/>
    <Subtitle/>
    <Subtitle2/>
    <Price/> 
    </div>
  )
}

export default Services;
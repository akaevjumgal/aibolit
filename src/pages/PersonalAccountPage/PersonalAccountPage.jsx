import React, { useContext, useEffect } from 'react';
import ClientCard from '../../modules/PersonalAccountPage/ClientCard/ClientCard';
import Pets from '../../modules/PersonalAccountPage/Pets/Pets';
import Reseption from '../../modules/PersonalAccountPage/Reseption/Reseption';
import NavigationContext from '../../navigation.context';

export default function PersonalAccountPage() {
  const users = {
    FirstName: 'Виктория',
  };
  const Links = [<a key="a1" href="#PersonaData">ЛИЧНЫЕ ДАННЫЕ</a>, <a key="a2" href="#Pets">МОИ ПИТОМЦЫ</a>, <a key="a3" href="#Reseption">ЗАПИСЬ НА ПРИЕМ</a>, <a key="a4" href="#exit">ВЫЙТИ</a>];
  const { setNavigation } = useContext(NavigationContext);
  useEffect(() => {
    setNavigation({
      title: users.FirstName,
      links: Links,
    });
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <ClientCard />
      <Pets />
      <Reseption />
    </div>
  );
}

import { useContext, useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import PageLayout from './modules/PageLayout/PageLayout';
import SidebarLayout from './modules/SidebarLayout/SidebarLayout';
import NavigationContext from './navigation.context';
import HomePage from './pages/HomePage/HomePage';
import 'swiper/css/bundle';
import PersonalAccountPage from './pages/PersonalAccountPage/PersonalAccountPage';
import TeamPage from './pages/teamPage/TeamPage';
import SpecialistPage from './pages/SpecialistPage/SpecialistPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
import OrderModal from './modules/OrdersModal/OrdersModal';
import Services from './pages/Services/Services';
import Contacts from './pages/Cotacts/Contacts';
import AllServices from './services/All-Services/AllServices';

function ServicesPage() {
  const { setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    setNavigation({ title: 'Терапия', links: [<a href="#">О НАС</a>, <a href="#">СПЕЦИАЛИСТЫ</a>] });
  }, []);

  return <div style={{ height: '400vh' }}>'Service Page'</div>;
}

function App() {
  const [navigation, setNavigation] = useState({
    title: '',
    links: [],
  });
  const { pathname } = useLocation();

  const isServiceAndPricesPage = pathname === '/ServicesAndPrices';
  const isContactPage = pathname === '/Contact';

  const sidebar = !isContactPage && <SidebarLayout title={navigation.title} links={navigation.links} /> || undefined

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      <Routes>
        <Route element={<PageLayout bottomContent={isServiceAndPricesPage && <AllServices />} />}>
          <Route index element={<HomePage />} />

          <Route element={sidebar}>

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="team/:specURL" element={<SpecialistPage />} />
            <Route path="/PersonalAccount" element={<PersonalAccountPage />} />
            <Route path='/History' element={<HistoryPage/>}/>
            <Route path="/asd" element={<OrderModal />} /> 
            <Route path="/ServicesAndPrices" element={<Services />} />
            <Route path="/Contact" element={<Contacts/>} /> 

          </Route>
        </Route>
      </Routes>
    </NavigationContext.Provider>

  );
}

export default App;



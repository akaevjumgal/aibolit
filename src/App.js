import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      <Routes>
        <Route element={<PageLayout />}>
          <Route index element={<HomePage />} />

          <Route
            element={(
              <SidebarLayout
                title={navigation.title}
                links={navigation.links}
              />
              )}
          >

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="team/:specURL" element={<SpecialistPage />} />
            <Route path="/PersonalAccount" element={<PersonalAccountPage />} />
            <Route path='/History' element={<HistoryPage/>}/>
            <Route path="/asd" element={<OrderModal />} />  

          </Route>
        </Route>
      </Routes>
    </NavigationContext.Provider>
  );
}

export default App;

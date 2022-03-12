import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./modules/PageLayout/PageLayout";
import SidebarLayout from "./modules/SidebarLayout/SidebarLayout";
import NavigationContext from "./navigation.context";
import HomePage from "./pages/HomePage/HomePage";
<<<<<<< HEAD
=======
import "swiper/css/bundle";
import PersonalAccountPage from './pages/PersonalAccountPage/PersonalAccountPage';
>>>>>>> 330d971b5f5b99a797d3d4b9d257302aaacc5147
import TeamPage from './pages/teamPage/TeamPage';
import SpecialistPage from "./pages/SpecialistPage/SpecialistPage";

const ServicesPage = () => {
  const { setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    setNavigation({ title: 'Терапия', links: [<a href ="#">О НАС</a>, <a href ="#">СПЕЦИАЛИСТЫ</a>] })
  }, [])

  return <div style={{height:'400vh'}}>'Service Page'</div>
}

function App() {
  const [navigation, setNavigation] = useState({
    title: '',
    links: [],
  })

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      <Routes>
        <Route element={<PageLayout />}>
        <Route index element={<HomePage />} />
        
            <Route 
              element={
                <SidebarLayout 
                  title={navigation.title} 
                  links={navigation.links} 
                />
            }>
             
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="team/:specURL" element={<SpecialistPage />} />
              <Route path="/PersonalAccount" element={<PersonalAccountPage/>} />


            </Route>
        </Route>
      </Routes>
    </NavigationContext.Provider>
  );
}

export default App;

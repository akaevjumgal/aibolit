<<<<<<< HEAD
import React from 'react';
import './App.css';
import Maps from './components/Maps/Maps';
=======
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./modules/PageLayout/PageLayout";
import SidebarLayout from "./modules/SidebarLayout/SidebarLayout";
import NavigationContext from "./navigation.context";
import HomePage from "./pages/HomePage/HomePage";
import "swiper/css/bundle";

const ServicesPage = () => {
  const { setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    setNavigation({ title: 'Терапия', links: ['1 link', '2 link'] })
  }, [])

  return 'Service Page'
}
>>>>>>> 910a1a2f5c024c6f3822c245c890f0821e9bf1ae

function App() {
  const [navigation, setNavigation] = useState({
    title: '',
    links: [],
  })

  return (
<<<<<<< HEAD
    <div>
      <Maps />  
    </div>
  )
=======
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
            </Route>
        </Route>
      </Routes>
    </NavigationContext.Provider>
  );
>>>>>>> 910a1a2f5c024c6f3822c245c890f0821e9bf1ae
}

export default App;

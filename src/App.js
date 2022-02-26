import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./modules/PageLayout/PageLayout";
import SidebarLayout from "./modules/SidebarLayout/SidebarLayout";
import NavigationContext from "./navigation.context";
import HomePage from "./pages/HomePage/HomePage";

const ServicesPage = () => {
  const { setNavigation } = useContext(NavigationContext);

  useEffect(() => {
    setNavigation({ title: 'Терапия', links: ['1 link', '2 link'] })
  }, [])

  return 'Service Page'
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
            <Route 
              element={
                <SidebarLayout 
                  title={navigation.title} 
                  links={navigation.links} 
                />
            }>
              <Route index element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Route>
        </Route>
      </Routes>
    </NavigationContext.Provider>
  );
}

export default App;

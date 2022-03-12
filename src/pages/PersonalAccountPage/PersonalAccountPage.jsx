import React, { useContext , useEffect} from "react";
import ClientCard from "../../modules/PersonalAccountPage/ClientCard/ClientCard";
import NavigationContext from '../../navigation.context';



export default function PersonalAccountPage() {
   const users = {
       FirstName: "Виктория",
   }
   const Links = [<a href="#">ЛИЧНЫЕ ДАННЫЕ</a>,<a href="#">МОИ ПИТОМЦЫ</a>,<a href="#">ЗАПИСЬ НА ПРИЕМ</a>,<a href="#">ВЫЙТИ</a>]
   const { setNavigation } = useContext(NavigationContext)
   useEffect(()=> {
     setNavigation ({
       title : users.FirstName,
       links : Links
     })
   })
return (
  <div>
    
    <ClientCard/>
   </div>
)
  



}
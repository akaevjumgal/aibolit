import React from "react";
import ClientCard from "../../modules/PersonalAccountPage/ClientCard/ClientCard";
import SidebarLayout from "../../modules/SidebarLayout/SidebarLayout";



export default function PersonalAccountPage() {
   const users = {
       FirstName: "Виктория",
   }
return (
  <div style={{display:'flex'}}>
    <div style={{marginTop:'10%'}} className="Personal-sidebar">
        <SidebarLayout title={users.FirstName} links = {[
          { id: 1,
            title:'Личные данные'
          }
          ,
          { id: 2,
            title:'Мои питомцы'
          },
          { id: 3,
            title:'Личные данные'
          },
          { id: 4,
            title:'Выйти'
          }
          ]}/>
    </div>
    <ClientCard/>
   </div>
)
  



}
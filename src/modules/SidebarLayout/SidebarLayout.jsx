import { Outlet } from "react-router-dom";

import styles from './SidebarLayout.module.css'

export default function SidebarLayout({ title, links = [] }) {


  function haveTitle () {
    if(title){
      return (
        <h1>{title}</h1>
      )
    }
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Sidebar}>
        {haveTitle()}
        {links}
      </div>
      <Outlet />
    </div>
  )
}
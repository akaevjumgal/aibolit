import { Outlet } from "react-router-dom";

import styles from './SidebarLayout.module.css'

export default function SidebarLayout({ title, links = [] }) {
  return (
    <div className={styles.Container}>
      <div className={styles.Sidebar}>
        <h1>{title}</h1>
        {links}
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
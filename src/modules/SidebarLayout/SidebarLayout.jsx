import { Outlet } from 'react-router-dom';

import styles from './SidebarLayout.module.css';

export default function SidebarLayout({ title, links = [] }) {
  function haveTitle() {
    if (title) {
      return (
        <h1>{title}</h1>
      );
    }
    return null;
  }

  return (
    <div className={styles.Container}>
      <div>
        <div className={styles.Sidebar}>
          {haveTitle()}
          {links}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

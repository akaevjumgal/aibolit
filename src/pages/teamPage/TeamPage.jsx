
import { useEffect } from 'react';
import { useContext } from 'react';
import styles from './TeamPage.module.css';
import workers from '../../fake-datas/workers.json';
import Specialist from '../../modules/TeamPage/Specialist';
import NavigationContext from '../../navigation.context';

export default function TeamPage () {
    const { setNavigation } = useContext(NavigationContext);

    
    useEffect(() => {
        setNavigation({
        title: 'Коллектив',
        links: [<a key={'aboutus'} href ="#about">О НАС</a>, <a key={'spec'}  href ="#specialists">СПЕЦИАЛИСТЫ</a>] })
        window.scrollTo(0, 0);
    }, [])

    return (
        <main className={styles.TeamPage}>
        <img src="/img/TeamPage/team.png" alt="teamPhoto" />
        <div id="about">
            <h2>О нас</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
        </div>
        <div id="specialists">
            <h2>Специалисты</h2>
            <div className={styles.TeamPageSpecialists}>
                {workers.map((specialist) => {
                    return (
                        <Specialist key={specialist.url} spec={specialist} />
                    )
                })
                }
            </div>
        </div>
        </main>
    )
}
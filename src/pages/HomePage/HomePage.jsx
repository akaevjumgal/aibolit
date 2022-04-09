import SectionOne from './../../modules/HomePage/section-one/SectionOne';
import Maps from './../../modules/HomePage/Maps/Maps';
import ChooseUs from './../../components/ChooseUs/ChooseUs';
import MobileApp from '../../modules/HomePage/MobileApp/MobileApp';
import Helped from '../../modules/HomePage/Helped/Helped';
import HistoryCompany from '../../modules/HomePage/HistoryCompany/HistoryCompany';

export default function HomePage() {
  return (
    <>
      <SectionOne />
      <HistoryCompany/>
      <Helped/>
      <ChooseUs />
      <MobileApp/>
      <Maps />
    </>
  )
} 
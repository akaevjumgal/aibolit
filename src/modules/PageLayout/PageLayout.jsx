import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function PageLayout({ bottomContent }) {
  return (
    <main>
      <Header />
      <Outlet />
      {bottomContent}
      <Footer />
    </main>
  )
}
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

export default function Preset() {
  return (
    <main>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

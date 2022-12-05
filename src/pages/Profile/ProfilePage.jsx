import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ProfileComponent } from "../../components/Profile";
import { Footer } from "../../components/Footer";
import "./profilepage.scss";

const Delivery = () => {
  return (
    <>
      <div className="profile_page">
        <Navbar />
        <Header />
        <ProfileComponent />
        <Footer />
      </div>
    </>
  );
};

export default Delivery;

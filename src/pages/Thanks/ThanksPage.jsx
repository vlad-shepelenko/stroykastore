import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ThanksComponent } from "../../components/Thanks";
import { Footer } from "../../components/Footer";
import "./thankspage.scss";

const ThanksPage = () => {
  return (
    <>
      <div className="thanks_page">
        <Navbar />
        <Header />
        <ThanksComponent />
        <Footer />
      </div>
    </>
  );
};

export default ThanksPage;

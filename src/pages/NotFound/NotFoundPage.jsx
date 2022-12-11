import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { NotFoundComponent } from "../../components/NotFound";
import { Footer } from "../../components/Footer";
import "./notfoundpage.scss";

const NotFoundPage = () => {
  return (
    <>
      <div className="notfound_page">
        <Navbar />
        <Header />
        <NotFoundComponent />
        <Footer />
      </div>
    </>
  );
};

export default NotFoundPage;

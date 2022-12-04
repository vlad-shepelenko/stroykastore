import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { DocumentationComponent } from "../../components/Documentation";
import { Footer } from "../../components/Footer";
import "./documentationpage.scss";

const Documentation = () => {
  return (
    <>
      <div className="documentation_page">
        <Navbar />
        <Header />
        <DocumentationComponent />
        <Footer />
      </div>
    </>
  );
};

export default Documentation;

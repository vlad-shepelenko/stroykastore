import { Navbar } from "../../components/Navbar";
import { Header } from "../../components/Header";
import { ContactsComponent } from "../../components/Contacts";
import { About } from "../../components/About";
import { Footer } from "../../components/Footer";
import "./contactspage.scss";

const ContactsPage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ContactsComponent />
      <About />
      <Footer />
    </>
  );
};

export default ContactsPage;

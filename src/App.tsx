import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import ContactForm from "./container/ContactForm/ContactForm";
import Contacts from "./container/Contacts/Contacts";
import ModalWindowContact from "./components/ModalWindowContact/ModalWindowContact";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={(<Contacts />)} >
          <Route path={"modal-contact/:id"} element={(<ModalWindowContact />)} />
        </Route>
        <Route path={"contact-form"} element={(<ContactForm />)} />
        <Route path={"/contact-edit/:id"} element={(<ContactForm />)} />
        <Route path={"*"} element={(<h1>Not found</h1>)} />
      </Routes>
    </Layout>
  );
}

export default App;

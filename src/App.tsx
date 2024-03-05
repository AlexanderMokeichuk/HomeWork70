import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import AddContact from "./container/AddContact/AddContact";
import Contacts from "./container/Contacts/Contacts";
import ModalContact from "./container/ModalContact/ModalContact";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={(<Contacts />)} >
          <Route path={"modal-contact/:id"} element={(<ModalContact />)} />
        </Route>
        <Route path={"contact-form"} element={(<AddContact />)} />
        <Route path={"/contact-edit/:id"} element={(<AddContact />)} />
        <Route path={"*"} element={(<h1>Not found</h1>)} />
      </Routes>
    </Layout>
  );
}

export default App;

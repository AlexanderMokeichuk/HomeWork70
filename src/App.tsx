import "./App.css";
import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import ContactForm from "./container/ContactForm/ContactForm";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={("Contacts")} />
        <Route path={"contact-form"} element={(<ContactForm />)} />
        <Route path={"*"} element={(<h1>Not found</h1>)} />
      </Routes>
    </Layout>
  );
}

export default App;

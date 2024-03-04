import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const ContactForm: React.FC = () => {


  useEffect(() => {
    alert("ss");
  }, []);

  return (
    <form className={"form-control"}>
      <div>
        <label htmlFor={"name"}>Name</label>
        <input
          type={"text"}
          name={"name"}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label htmlFor={"phone"}>Phone</label>
        <input
          type={"number"}
          name={"phone"}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label htmlFor={"emil"}>Email</label>
        <input
          type={"email"}
          name={"email"}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label htmlFor={"photo"}>Photo</label>
        <input
          type={"url"}
          name={"photo"}
          className={"form-control"}
          required
        />
      </div>
      <div>
        <label>Photo preview</label>
        <div>

        </div>
      </div>
      <div className={"d-flex gap-3"}>
        <button type={"submit"} className={"btn btn-primary"}>Save</button>
        <Link to={"/"} className={"btn btn-primary"}>Back to contacts</Link>
      </div>
    </form>
  );
};

export default ContactForm;
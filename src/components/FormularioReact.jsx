import React, { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

const emailRegexp = new RegExp(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/);

export const FormularioReact = () => {
  const [entradas, setentradas] = useState([]);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    //fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(">>Formulario React>>", formJson);
  }

  return (
    <div>
      <form method="post" onSubmit={handleSubmit}>
        <label>
          *Nombre: <input name="myInput1" defaultValue="" />
        </label>
        <br />
        <label>
          Edad: <input name="myInput2" defaultValue="" />
        </label>
        <br />
        <label>
          E-mail: <input name="myInput3" defaultValue="" />
        </label>
        <br />
        <br />

        <label>
          Aceptar Términos:{" "}
          <input type="checkbox" name="myCheckbox" defaultChecked={false} />
        </label>

        <p>
          Sexo:
          <label>
            <input
              type="radio"
              name="myRadio1"
              value="option1"
              defaultChecked={true}
            />
            Hombre
          </label>
          <label>
            <input type="radio" name="myRadio2" value="option2" /> Mujer
          </label>
        </p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

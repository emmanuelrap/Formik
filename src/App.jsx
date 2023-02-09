import { useState } from "react";
import "./App.css";
import { FormularioFormik1 } from "./components/FormularioFormik1";
import { FormularioFormik2 } from "./components/FormularioFormik2";
import { FormularioReact } from "./components/FormularioReact";

function App() {
  return (
    <div>
      <h2>Formulario React</h2>
      <FormularioReact /> <hr />
      <h2>Formik Basico</h2>
      <FormularioFormik1 /> <hr />
      <h2>Formik + Yup</h2>
      <FormularioFormik2 />
    </div>
  );
}

export default App;

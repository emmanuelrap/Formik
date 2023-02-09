import React from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};

  //Customs Errors........
  if (!values.name) {
    errors.name = "Campo obligatorio";
  } else if (values.name.length <= 2) {
    errors.name = "su nombre debe tener mas de 2 letras";
  }

  if (!values.age) {
    //errors.age = "Campo obligatorio";
  } else if (values.age.length > 2) {
    errors.age = "No puede tener una edad mayor a 99 años";
  }

  return errors;
};

export const FormularioFormik1 = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(">>>>Formulario Formik:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">*Nombre:</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <br />
      <label htmlFor="age">Edad:</label>
      <input
        id="age"
        name="age"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.age}
      />
      {formik.touched.age && formik.errors.age ? (
        <div>{formik.errors.age}</div>
      ) : null}
      <br />
      <label htmlFor="email">E-mail:</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

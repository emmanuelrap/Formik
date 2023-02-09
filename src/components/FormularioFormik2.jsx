import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export const FormularioFormik2 = () => {
  return (
    <Formik
      initialValues={{ firstName: "", age: "", email: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, "su nombre debe tener mas de 2 letras")
          .required("Campo obligatorio")
          .max(10,"no puede tener mas de 10 letras tu nombre"),
        age: Yup.string().max(2, "No puede tener una edad mayor a 99 años"),
        email: Yup.string().email("E-mail Inválido"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(">>>>Formulario Formik + Yup:", values);
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="firstName">*Nombre:</label>
        <Field name="firstName" type="text" />
        <ErrorMessage name="firstName" />
        <br />

        <label htmlFor="age">Edad:</label>
        <Field name="age" type="text" />
        <ErrorMessage name="age" />
        <br />

        <label htmlFor="email">E-mail</label>
        <Field name="email" type="email" />
        {/* <ErrorMessage name="email" /> */}
        <br />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

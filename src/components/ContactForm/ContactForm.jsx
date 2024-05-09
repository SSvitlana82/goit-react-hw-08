import { Formik, Form, Field, ErrorMessage } from "formik";

import { object, string } from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const dispatch = useDispatch();

  const contactSchema = object({
    name: string().min(3, "Too Short").max(50, "Too much").required(),
    number: string()
      .min(3, "Too Short")
      .max(50, "Too much")

      .required(),
  });
  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(addContact(values));
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={contactSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.submitForm}>
          <label className={css.label}>
            <span className={css.spanUser}>Name</span>
            <div className={css.fieldContainer}>
              <Field type="text" name="name" className={css.field}></Field>
              <ErrorMessage
                component="span"
                name="name"
                className={css.error}
              ></ErrorMessage>
            </div>
          </label>
          <label className={css.label}>
            {" "}
            <span className={css.spanUser}>Number</span>
            <div className={css.fieldContainer}>
              <Field
                type="text"
                name="number"
                className={css.field}
                placeholder="format xxx-xx-xx"
              ></Field>
              <ErrorMessage
                component="span"
                name="number"
                className={css.error}
              ></ErrorMessage>
            </div>
          </label>
          <button type="submit" className={css.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

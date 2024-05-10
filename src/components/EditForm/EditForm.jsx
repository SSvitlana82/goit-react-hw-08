import { Formik, Form, Field, ErrorMessage } from "formik";

import { object, string } from "yup";
import css from "./EditForm.module.css";
import { changeContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";

const EditForm = ({ id, closeModal }) => {
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
    dispatch(changeContact({ ...values, id }));
    closeModal();
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
            save changes
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditForm;

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const userSchema = object({
    email: string().email("Invalid email").max(50, "Too much").required(),
    password: string().min(3, "Too Short").max(50, "Too much").required(),
  });
  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(logIn(values));
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>EMAIL</span>
            <div>
              <Field type="email" name="email"></Field>
              <ErrorMessage component="span" name="email"></ErrorMessage>
            </div>
          </label>
          <label>
            {" "}
            <span>password</span>
            <div>
              <Field type="password" name="password"></Field>
              <ErrorMessage component="span" name="password"></ErrorMessage>
            </div>
          </label>
          <button type="submit">Log in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

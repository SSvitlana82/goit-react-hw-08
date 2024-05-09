import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const userSchema = object({
    name: string().min(2, "Too Short!").max(50, "Too Long!").required(),
    email: string().email("Invalid email").max(50, "Too much").required(),
    password: string().min(3, "Too Short").max(50, "Too much").required(),
  });
  const handleSubmit = (values, options) => {
    options.resetForm();
    dispatch(register(values));
    console.log(values);
  };
  return (
    <div>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={userSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>NAME</span>
            <div>
              <Field type="text" name="name"></Field>
              <ErrorMessage component="span" name="name"></ErrorMessage>
            </div>
          </label>
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
          <button type="submit">Registation</button>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;

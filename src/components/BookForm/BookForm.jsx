import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../Button/Button";
import css from "./BookForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(5, "Too Short! Min 3 chars")
    .max(50, "Too Long! Max 50 chars")
    .required("Required"),
  email: Yup.string()
    .trim()
    .email("Please, fill valid email")
    .required("Required"),
  date: Yup.string().trim().required("Required"),
  comments: Yup.string().trim(),
});

export default function BookForm() {
  const handelSubmit = (values, actions) => {
    const newValues = {
      name: values.name.trim(),
      email: values.email.trim(),
      date: values.date.trim(),
      comments: values.comments.trim(),
    };

    console.log(newValues);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        date: "",
        comments: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handelSubmit}
    >
      <Form className={css.form}>
        <p className={css.nameForm}>Book your campervan now</p>
        <p className={css.descriptionForm}>
          Stay connected! We are always ready to help you.
        </p>
        <div className={css.fornFields}>
          <label className={css.labelFormInput}>
            <Field
              className={css.formInput}
              type="text"
              name="name"
              placeholder="Name*"
              autoComplete="off"
            />
            <ErrorMessage className={css.erros} name="name" component="span" />
          </label>

          <label className={css.labelFormInput}>
            <Field
              className={css.formInput}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage className={css.erros} name="email" component="span" />
          </label>

          <label className={css.labelFormInput}>
            <Field
              className={css.formInput}
              type="text"
              name="date"
              placeholder="Booking date*"
              autoComplete="off"
            />
            <ErrorMessage className={css.erros} name="date" component="span" />
          </label>

          <label className={css.labelFormInput}>
            <Field
              className={css.formInputText}
              as="textarea"
              name="comments"
              placeholder="Comment"
              autoComplete="off"
            />
            <ErrorMessage
              className={css.erros}
              name="comments"
              component="span"
            />
          </label>
        </div>
        <div className={css.button}>
          <Button text="Send" />
        </div>
      </Form>
    </Formik>
  );
}

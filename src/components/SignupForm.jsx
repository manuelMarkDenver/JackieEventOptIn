import useSWR from "swr";

import { useFormik } from "formik";
import * as yup from "yup";
import { TextField, Button } from "@mui/material";

import sendEmail from "../utils/sendEmail";

const validationSchema = yup.object({
  firstname: yup
    .string("Enter your first name")
    .required("First name is required"),
  lastname: yup
    .string("Enter your last name")
    .required("Last name is required"),
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .number("Enter your phone number")
    .required("Phone number is required"),
});

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values);
    },
  });

  const handleFormSubmit = (values) => {
    sendEmail(values);
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstname"
          name="firstname"
          label="First name"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.touched.firstname && Boolean(formik.errors.firstname)}
          helperText={formik.touched.firstname && formik.errors.firstname}
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          id="lastname"
          name="lastname"
          label="Last name"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.touched.lastname && Boolean(formik.errors.lastname)}
          helperText={formik.touched.lastname && formik.errors.lastname}
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={{ marginBottom: "15px" }}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          sx={{ marginBottom: "15px" }}
        />

        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SignupForm;

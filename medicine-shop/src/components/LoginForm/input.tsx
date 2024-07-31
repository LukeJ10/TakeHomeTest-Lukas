import React from "react";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import "./Styles.css";
import { validationSchema } from "../../utils/yup";
import { LoginFormValues } from "../../utils/Interface";

const LoginForm: React.FC = () => {
  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log("Login form values:", values);
        Swal.fire({
          icon: "success",
          title: "Login successful",
          text: "Welcome back!",
        }).then(() => {
          window.location.href = "/";
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: "Invalid credentials. Please try again.",
        });
      }
    },
  });
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-input"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="form-error">{formik.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className="form-input"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="form-error">{formik.errors.password}</p>
          )}
        </div>
        <button className="submit-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

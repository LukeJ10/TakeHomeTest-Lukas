import { useFormik } from "formik"
import { registerSchema } from "../../utils/yup"
import { RegisterFormValues } from "../../utils/Interface"
import Swal from "sweetalert2"
import { CreateUsers } from "../../api/ApiUrl"
import './Styles.css'

const RegisterForm = () => {
    const initialValues : RegisterFormValues={
        username: "",
        email: "",
        password: "",
    }
    const formik = useFormik({
      initialValues,
      validationSchema : registerSchema,
      onSubmit: async (value:any) =>{
            const data ={
              username:value.username,
              email:value.email,
              password:value.password
            }
            console.log(data)
            await CreateUsers(data)
              .then(()=>{
                  Swal.fire({
                      icon:'success',
                      title:'succesfull',
                      text:'You are Registered',
                  }).then(()=>{
                    window.location.href = "/"
                  })
              })
          }})


  return (
    <div className="form-container">
    <h2 className="form-title">Register</h2>
    <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
                type="text"
                id="username"
                name="username"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.username}
                className="form-input"
            />
            {formik.touched.username && formik.errors.username && (
                <p className="form-error">{typeof formik.errors.username === "string" && formik.errors.username}</p>
            )}
        </div>
        <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.email}
                className="form-input"
            />
            {formik.touched.email && formik.errors.email && (
                <p className="form-error">{typeof formik.errors.email === "string" && formik.errors.email}</p>
            )}
        </div>
        <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values?.password}
                className="form-input"
            />
            {formik.touched.password && formik.errors.password && (
                <p className="form-error">{typeof formik.errors.password === "string" && formik.errors.password}</p>
            )}
        </div>
        <button className="submit-button" type="submit">
            Register
        </button>
    </form>
</div>
  
  )
}

export default RegisterForm
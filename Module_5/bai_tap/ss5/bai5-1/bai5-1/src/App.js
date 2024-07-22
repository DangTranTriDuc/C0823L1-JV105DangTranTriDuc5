import React, {useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import './App.css';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const handleValidate = {
        name: Yup.string().required("Tên không được để trống")
            .min(0, "Số lượng tự không được nhỏ hơn 0")
            .max(100, "Số lượng từ không được lớn hơn 100"),
        phone: Yup.string().required("Số điện thoại không được để trống")
            .min(1, "Số lượng số phải lớn hơn 1")
            .max(20, "Số lượng số phải nhỏ hơn 20"),
        email: Yup.string().required("Email không được để trống")
            .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, "Email không đúng định dạng. Ví dụ: abc123@gmail.com"),
        message: Yup.string().required("Message không được để trống")
            .min(0, "Số lượng tự không được nhỏ hơn 0")
    }

    const handleSubmit = (values, {setSubmitting}) => {
        try {
            values.phone = +values.phone;
            toast.success("Thêm mới thành công");
            setSubmitting(false);
        } catch (error) {
            toast.error("Thêm mới thất bại");
            setSubmitting(false);
        }
    };

    return (
        <>
            <Formik initialValues={form} onSubmit={handleSubmit} validationSchema={Yup.object(handleValidate)}>
                {({
                      touched,
                      errors,
                      isSubmitting
                  }) => (
                    <Form>
                        <div className={`custom-input ${errors.name && touched.name && 'custom-input-error'}`}>
                            <label>Name: </label>
                            <Field name="name"></Field>
                            <ErrorMessage name="name" component="span" className="error"></ErrorMessage> <br></br>
                        </div>
                        <div className={`custom-input ${errors.phone && touched.phone && 'custom-input-error'}`}>
                            <label>Phone:</label>
                            <Field name="phone"></Field>
                            <ErrorMessage name="phone" component="span" className="error"></ErrorMessage> <br></br>
                        </div>
                        <div className={`custom-input ${errors.email && touched.email && 'custom-input-error'}`}>
                            <label>Email</label>
                            <Field name="email"></Field>
                            <ErrorMessage name="email" component="span" className="error"></ErrorMessage> <br></br>
                        </div>
                        <div className={`custom-input ${errors.message && touched.message && 'custom-input-error'}`}>
                            <label>Message:</label>
                            <Field name="message"></Field>
                            <ErrorMessage name="message" component="span" className="error"></ErrorMessage> <br></br>
                        </div>
                        <button type='submit' disabled={isSubmitting}>Thêm mới</button>
                    </Form>
                )}
            </Formik>
            <ToastContainer/>
        </>
    );
}

export default App;


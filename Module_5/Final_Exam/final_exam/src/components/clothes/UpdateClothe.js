import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from "yup";
import {toast} from "react-toastify";
import * as categoryService from "../../service/CategoryService"
import * as clotheService from "../../service/ClothService"
import './css/BookForm.css'

const UpdateClothes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [category, setCategory] = useState([]);
    const clothe = location.state?.clothe;

    useEffect(() => {
        getAllCategories()
    },[])

    const getAllCategories = async () => {
        const categories = await categoryService.getAllCategory()
        setCategory(categories)
    }
    const validateClothe= {
        id: Yup.string().required("Please enter number")
            .min(0, "Please enter a number more than 0")
            .typeError("Please enter only number"),
        name: Yup.string().required("Please enter a title")
            .matches(/^[A-Za-z0-9 ]{2,100}$/, "Please enter a title"),
        amount: Yup.number().required("Please enter a number")
            .min(0, "Please enter a number more than 0")
            .typeError("Please enter only number"),
        date: Yup.date().required("Please enter dd/mm/yy")
            .max("2024-07-26","Không lớn hơn ngày hiện tại (26-07-2024)"),
        category: Yup.string().required("Please choose a category"),
    }

    const saveClothe= async (value) => {
        value.id = +value.id;
        value.amount = +value.amount
        value.category = JSON.parse(value.category)
        await clotheService.updateClothes(value.id, value)
        toast.success("Cập nhật thành công")
        navigate("/clothes")
    }
    const handleBack = (navigate) => {
        navigate('/clothes');
    };
    return (
        <div className="update-book-container">
            <h1>Cập nhật sách</h1>
            <Formik
                initialValues={{
                    id: clothe.id,
                    name: clothe.name,
                    amount: clothe.amount,
                    date: clothe.date,
                    category: JSON.stringify(clothe.category)
                }}
                onSubmit={saveClothe}
                validationSchema={Yup.object(validateClothe)}>
                <Form>
                    <div>
                        <label>Tên sản phẩm</label>
                        <Field name="name"/>
                        <ErrorMessage name="name" component="span"></ErrorMessage> <br></br>
                    </div>
                    <div>
                        <label>Số lượng</label>
                        <Field name="amount" type="number"/>
                        <ErrorMessage name="amount" component="span"></ErrorMessage> <br></br>
                    </div>
                    <div>
                        <label>Ngày nhập</label>
                        <Field name="date" type="date"/>
                        <ErrorMessage name="date" component="span"></ErrorMessage> <br></br>
                    </div>
                    <div>
                        <label>Category</label>
                        <Field as="select" name='category'>
                            <option value={JSON.stringify(category)}>{category.name}</option>
                            {category.map(category => (
                                <option key={category.id} value={JSON.stringify(category)}>{category.name}</option>
                            ))}
                        </Field>
                        <ErrorMessage name="category" component="span"></ErrorMessage> <br></br>
                    </div>
                    <div>
                        <button type="submit">Cập nhật</button>
                    </div>
                    <div>
                        <button type="button" onClick={() => handleBack(navigate)}>Trở về</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
export default UpdateClothes

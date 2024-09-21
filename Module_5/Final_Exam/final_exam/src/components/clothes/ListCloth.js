import React, {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import * as categoryService from "../../service/CategoryService"
import * as clotheService from "../../service/ClothService"
import './css/BookList.css' ;
function ListCloth (){
    const [clothes, setClothes] = useState([])
    const [clothe, setClothe] = useState([])
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("");
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        getAll(searchTerm,category)
        getAllCategories()
    },[])

    const getAll = async (name,category) => {
        const clothes =await clotheService.getAllClothes(name,category)
        setClothes(clothes);
    }
    const getAllCategories = async () => {
        const categories = await categoryService.getAllCategory()
        setCategoryList(categories)
    }
    const handleUpdate=(selectedClothe) => {
        setClothe(selectedClothe) ;
        navigate("/clothes/UpdateClothe", {state: {clothe: selectedClothe}});
    }
    const handleSearchSubmit = async (event) => {
        event.preventDefault();
        let allClothes;
        if (category === " ") {
            allClothes = await clotheService.getAllClothes(searchTerm);
        } else {
            allClothes = await clotheService.getAllClothes(searchTerm, category);
        }
        setClothes(allClothes);
    };
    const handleChange = (event) => {
        const selectedValue = event.target.value;

        if (selectedValue !== " ") {
            try {
                const selectedCategory = JSON.parse(selectedValue);
                setCategory(selectedCategory);
            } catch (error) {
                console.error("Error parsing JSON:", error);
            }
        } else {
            setCategory(" ");
        }
    };
    return (
        <div>
            <h1>List Of Clothes</h1>
            <form onSubmit={(e) => handleSearchSubmit(e)}>
                <label>Tên sản phẩm</label>
                <input
                    type="text"
                    placeholder="Tìm kiếm quần áo..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <br></br> <label>Category </label>
                <select id="category" onChange={handleChange}>
                    <option value=" ">--All Category--</option>
                    {categoryList.map((category) => (
                        <option key={category.id} value={JSON.stringify(category)}>{category.name} </option>
                    ))}
                </select>
                <br></br><br></br>
                <button type="submit">Tìm kiếm</button>
            </form>
            <table>
                <thead>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Ngày nhập</th>
                    <th>Số lượng</th>
                    <th>Loại sản phẩm</th>
                    <th>Tác vụ</th>
                </tr>
                </thead>
                <tbody>
                {
                    clothes.map((clothe) =>
                            <tr key={clothe.id}>
                                <td>{clothe.name}</td>
                        <td>{clothe.date}</td>
                        <td>{clothe.amount}</td>
                        <td>{clothe.category.name}</td>
                        <td>
                            <button onClick={()=>handleUpdate(clothe)}>
                                <NavLink to="/clothes/UpdateClothe">Cập nhật</NavLink>
                            </button>
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </div>

    )
}
export default ListCloth;
import axios from "axios";

export const getAllCategory = async () => {
    try {
        let categories = await axios.get("http://localhost:8080/category")
        return categories.data;
    } catch (error) {
        return []
    }
}
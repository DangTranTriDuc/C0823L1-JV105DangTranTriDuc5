import axios from "axios";
export const getAllClothes = async (name,category) => {
    try {
        let query ="http://localhost:8080/clothes?"
        if(name) {
            query += `name_like=${name}&` ;
        }
        if (category){
            query += `category.id=${category.id}&`;
        }
        let result = await axios.get(query);
        return result.data;
    }catch(error){
        console.log(error);
    }
}
export const updateClothes = async (id,updatedCloth) => {
    try{
        await axios.patch(`http://localhost:8080/clothes/${id}`, updatedCloth)
        return true;
    }catch(error){
        return false;
    }
}
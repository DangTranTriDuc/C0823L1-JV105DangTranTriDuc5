import {useEffect, useState} from "react";
import style from "./function_list.module.css";

function PersonList(props) {
    const [personList, setPersonList] = useState([]);

    useEffect(() => {
        setPersonList([
            {
                id: 1,
                name: "A",
                age: 15,
                address: 'LAL',
            },
            {
                id: 2,
                name: "B",
                age: 20,
                address: "DAL"
            },
            {
                id: 3,
                name: "C",
                age: 8,
                address: 'HCM',
            }
        ]);
    }, [])

    return (
        <div>
            <h1>Danh sách sinh viên</h1>
            <table>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Address</td>
                </tr>
                </thead>
                <tbody>
                {
                    personList.map((person, index) =>
                        <tr key={person.id}>
                            <td>{person.id}</td>
                            <td>{person.name}</td>
                            <td>{person.age}</td>
                            <td>{person.address}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default PersonList;
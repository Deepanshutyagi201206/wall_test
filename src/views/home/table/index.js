import axios from "axios"
import { useNavigate } from "react-router-dom";

function Table(props){

    const naviagte = useNavigate();

    const update_data=(item)=>{
        naviagte("/update",
        {
            state : {
                id : item.id,
                employee_name : item.employee_name,
                employee_salary : item.employee_salary,
                employee_age : item.employee_age
            }
        });
    }

    const delete_data=(item)=>{
        axios.delete(
            "http://dummy.restapiexample.com/api/v1/delete/2",
            {
                "id" : item.id,
                "employee_name" : item.employee_name,
                "employee_salary" : item.employee_salary,
                "employee_age" : item.employee_age
            }
            )
        .then((response)=>{
            console.log(response.data.message);
            window.alert(response.data.message)
        })
        .catch((error)=>{
            console.log(error);
            window.alert(error);
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Employee name</th>
                        <th>Employee salary</th>
                        <th>Employee age</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>
                    {props.response.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.employee_name}</td>
                                <td>{item.employee_salary}</td>
                                <td>{item.employee_age}</td>
                                <td><button onClick={()=>{update_data(item)}}>Update</button></td>
                                <td><button onClick={()=>{delete_data(item)}}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table
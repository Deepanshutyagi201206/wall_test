import axios from "axios";
import { useState } from "react"

function Update(){

    const [employee_name, setEmployee_name] = useState('');
    const [employee_salary, setEmployee_salary] = useState('');
    const [employee_age, setEmployee_age] = useState('');

    const update_employee = ()=>{
        axios.put("http://dummy.restapiexample.com/api/v1/update/21",
        /*{
            "name": employee_name,
            "salary": employee_salary,
            "age": employee_age,
        }*/)
        .then((response)=>{
            console.log(response);
            window.alert(response.data.message)
        })
        .catch((error)=>{
            console.log(error);
            window.alert(error);
        })
    }

    return(
        <div className="update-employee-section-container">
            <div className="update-employee-section">

                <div className="title-section">
                    <h2>Update employee data</h2>
                </div>
                <div className="input-button-section">
                    <input onChange={(event)=>{setEmployee_name(event.target.value)}} value={employee_name} type="text" placeholder="Enter employee name"/><br/>
                    <input onChange={(event)=>{setEmployee_salary(event.target.value)}} value={employee_salary} type="text" placeholder="Enter employee salary"/><br/>
                    <input onChange={(event)=>{setEmployee_age(event.target.value)}} value={employee_age} type="text" placeholder="Enter employee age"/><br/>

                    <button onClick={()=>{update_employee()}}>Add</button>
                </div>
            </div>
        </div>
    )
}
export default Update
import React, {useEffect, useState} from "react";
import axios from 'axios'
import "../../style/style.css";
import Table from './table'

function Home(){

    const [response, setResponse] = useState([]);

    useEffect(()=>{

        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then((response)=>{
            console.log(response);
            console.log(response.data.data);
            setResponse(response.data.data);
        })
        .catch((error)=>{
            console.log(error);
            window.alert(error);
        })
    }, [])

    return(
        <div className="response-section">
            <Table response = {response}/>
        </div>
    )
}

export default Home
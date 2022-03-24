function Update(){
    return(
        <div className="update-section-container">
            <div className="update-section">

                <div className="title-section">
                    <h2>Update Employee Data</h2>
                </div>
                <div className="input-button-section">
                    <input type="text" placeholder="Enter ID"/><br/>
                    <input type="text" placeholder="Enter employee name"/><br/>
                    <input type="text" placeholder="Enter employee salary"/><br/>
                    <input type="text" placeholder="Enter employee age"/><br/>

                    <button>Update</button>
                </div>
            </div>
        </div>
    )
}
export default Update
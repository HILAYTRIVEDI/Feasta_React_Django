import React,{useState}from 'react'

function AddCategory() {
    const [data, setdata] = useState({ category :""});

    const itemSubmit =(e)=>{
        e.preventDefault();
        console.log(data);
    }

    return (
        <div>    
            {/* Main Page Content */}
            <div className="col-xl-12 col-md-12">
            <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-header">
                <h6>Add Category Form</h6>
                </div>
                <div className="ms-panel-body">
                <form className="needs-validation clearfix" onSubmit={itemSubmit} noValidate>
                    <div className="form-row">
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationCustom18">Category Name</label>
                        <div className="input-group">
                        <input type="text" className="form-control" id="validationCustom18" placeholder="Category Name" value={data.category} onChange={(e)=>{setdata({...data,category: e.target.value})}} required />
                        <div className="valid-feedback">
                            Looks good!
                        </div>
                        </div>
                    </div>
                    <div className="ms-panel-header new">
                        <button className="btn btn-primary d-block" type="submit">Save and Add</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

export default AddCategory

import React ,{useState}from 'react'

function AddItem() {
  const [data, setdata] = useState(
    {
      name:"",
      cate:"",
      price:"",
      desc:"",
      quant:"",
      image:""
    }
  );
  
    const itemSubmit =(e)=>{
      e.preventDefault();
      console.log(data);
    }

    return (
        
      <div id="content" className="container-fluid">
      {/* Page Heading */}
      <div className="d-sm-flex align-items-center justify-content-center m-1" style={{textAlign: 'center'}}>
        <h1 className="h3 mb-0 text-gray-800">Add Menu</h1>
        {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
      </div>
      <hr width="85%" />
      {/* Main Page Content */}
      <div className="col-xl-12 col-md-12">
        <div className="ms-panel ms-panel-fh">
          
          <div className="ms-panel-body">
            <form className="needs-validation clearfix" noValidate onSubmit={itemSubmit}>
              <div className="form-row">
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom18">Product Name</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="validationCustom18" placeholder="Pizza" value={data.name} onChange={e=>setdata({...data,name:e.target.value})} required />
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom22">Select Catagory</label>
                  <div className="input-group">
                    <select className="form-control" id="validationCustom22" value={data.cate} onChange={e=>setdata({...data,cate:e.target.value})} required>
                      <option value="Catagory 1">Catagory 1</option>
                      <option value="Catagory 2">Catagory 2</option>
                      <option value="Catagory 3">Catagory 3</option>
                      <option value="Catagory 4">Catagory 4</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a Catagory.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="validationCustom25">Price</label>
                  <div className="input-group">
                    <input type="text" className="form-control" id="validationCustom25" placeholder="Rs.10" value={data.price} onChange={e=>setdata({...data,price:e.target.value})} required />
                    <div className="invalid-feedback">
                      Price
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                <label htmlFor="validationCustom25">Quantity</label>
                <div className="input-group">
                  <input type="text" className="form-control" id="validationCustom25" placeholder="100" value={data.quant} onChange={e=>setdata({...data,quant:e.target.value})} required />
                  <div className="invalid-feedback">
                    Quantity
                  </div>
                </div>
              </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom12">Description</label>
                  <div className="input-group">
                    <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" value={data.desc} onChange={e=>setdata({...data,desc:e})} required />
                    <div className="invalid-feedback">
                      Please provide a message.
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-3">
                  <label htmlFor="validationCustom12">Product Image</label>
                  <div className="ml-2 col-sm-6">
                    <div id="msg" />
                    <div className="input-group my-3">
                      <input type="text" className="form-control" disabled placeholder="Upload File" id="file" />
                      <div className="input-group-append">
                        <input type="file" className="file browse btn btn-primary" accept="image/png, image/jpeg"  onChange={(e)=>{setdata({...data,image:e.target.files[0]})}} />
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 col-sm-6">
                    <img src="https://placehold.it/80x80" id="preview" className="img-thumbnail" />
                  </div>
                </div>*
              </div>
            <div className="ms-panel-header new">
              <button className="btn btn-primary d-block" type="submit">Save and Add</button>
            </div>
            </form>
          </div>
        </div>
      </div>
      {/* End of Main Content */}
    </div>
    )
}

export default AddItem

import React from 'react';
import {Link,Route,Switch} from 'react-router-dom';

function MenuUpdation() {
    return (
        <div>
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-center m-1" style={{textAlign: 'center'}}>
          <h1 className="h3 mb-0 text-gray-800">Edit Menu</h1>
          {/* <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a> */}
        </div>
        <hr width="85%" />
        {/* Main Page Content */}
        <div className="mr-4 ml-4 mb-2 mt-2">
          <div className="card shadow mb-4">
            <div className="card-body pt-2">
              {/*Top of the table*/}
              <div className="d-inline-flex flex-row w-100 justify-content-between align-items-center h-100 mb-2">
                <div className="btn-group dropright">
                  <button className="btn btn-primary dropdown-toggle badge-pill ml-3 shadow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Select Catagory
                  </button>
                  <div className="dropdown-menu animate slideIn bg-gradient-light" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">All</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Fast Food</a>
                    <a className="dropdown-item" href="#">Beverages</a>
                    <a className="dropdown-item" href="#">South Indian</a>
                    <a className="dropdown-item" href="#">Pujabi</a>
                    <a className="dropdown-item" href="#">Gujarati</a>
                    <div className="dropdown-divider" />
                    <Link to="/add_category" className="dropdown-item">Add/Edit Catagories</Link>
                  </div>
                </div>
                <Link to="/add_item">
                  <button type="button" className="btn btn-success badge-pill m-1 mr-3 shadow" style={{width: '120px'}}>+ Add
                    Item</button>
                </Link>
              </div>
              <div className="table-responsive">
                <table className="table table-hover text-capitalize">
                  <thead className="thead-dark text-center">
                    <tr>
                      <th scope="col" width="5%">Id</th>
                      <th scope="col" colSpan={2} width="35%">Item</th>
                      <th scope="col" width="20%">Price</th>
                      <th scope="col" className="text-right" width="30%" />
                    </tr>
                  </thead>
                  <tbody className="text-center mb-1 mt-1 align-middle">
                    <tr className>
                      <th scope="row" className="align-middle">1</th>
                      <td className="align-middle text-right" width="15%"><img src="img\Burger.jpg" className="img-fluid shadow" style={{maxWidth: '60px', minWidth: '50px'}} /> </td>
                      <td className="align-middle">Burger</td>
                      <td className="align-middle">60Rs</td>
                      <td className="text-right align-middle">
                        <button type="button" className="btn btn-success badge-pill m-1" style={{width: '80px'}}>Edit</button>
                        <button type="button" className="btn btn-danger badge-pill m-1" style={{width: '80px'}}><i className="fas fa-fw fa-trash-alt" /></button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="align-middle">2</th>
                      <td className="align-middle text-right" width="15%"><img src="img\Sandwich.jpg" className="img-fluid shadow" style={{maxWidth: '60px', minWidth: '50px'}} /> </td>
                      <td className="align-middle">Sandwich</td>
                      <td className="align-middle">100Rs</td>
                      <td className="text-right align-middle">
                        <button type="button" className="btn btn-success badge-pill m-1" style={{width: '80px'}}>Edit</button>
                        <button type="button" className="btn btn-danger badge-pill m-1" style={{width: '80px'}}><i className="fas fa-fw fa-trash-alt" /></button>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="align-middle">3</th>
                      <td className="align-middle text-right" width="15%"><img src="img\Dabeli.jpg" className="img-fluid shadow" style={{maxWidth: '60px', minWidth: '50px'}} /> </td>
                      <td className="align-middle">Dabeli</td>
                      <td className="align-middle">20Rs</td>
                      <td className="text-right align-middle">
                        <button type="button" className="btn btn-success badge-pill m-1" style={{width: '80px'}}>Edit</button>
                        <button type="button" className="btn btn-danger badge-pill m-1" style={{width: '80px'}}><i className="fas fa-fw fa-trash-alt" /></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    )
}

export default MenuUpdation

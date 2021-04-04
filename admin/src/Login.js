import React,{useState} from 'react';
import axios from 'axios';

import AdminPanel from './AdminPanel';
import { useHistory } from "react-router-dom";

function Login() {

  const history = useHistory();

  const [data, setdata] = useState({
    email_id:'',
    password:''
});


const itemSubmit = async (e)=>{
  e.preventDefault();
 
  console.log(data);
  await axios.post("https://feasta-postgres.herokuapp.com/auth/login/",data).then((result) => {
      console.log(result.data);
      history.push("/");
  }).catch((err) => {
      console.log(err);
  });


}

    return (
        <div>
            <div className="container bg-gradient-primary">
        {/* Outer Row */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <form className="user"  onSubmit={itemSubmit}>
                        <div className="form-group">
                          <input type="email" className="form-control form-control-user" id="exampleInputEmail" value={data.email_id} onChange={(e)=>{setdata({...data,email_id:e.target.value})}} aria-describedby="emailHelp" placeholder="Enter Email Address..." />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control form-control-user" id="exampleInputPassword" value={data.password} onChange={(e)=>{setdata({...data,password:e.target.value})}} placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember Me</label>
                          </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-user btn-block" value="Login"/>
                        <hr />
                        <a href="index.html" className="btn btn-google btn-user btn-block">
                          <i className="fab fa-google fa-fw" /> Login with Google
                        </a>
                        <a href="index.html" className="btn btn-facebook btn-user btn-block">
                          <i className="fab fa-facebook-f fa-fw" /> Login with Facebook
                        </a>
                      </form>
                      <hr />
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">Forgot Password?</a>
                      </div>
                      <div className="text-center">
                        <a className="small" href="register.html">Create an Account!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Login
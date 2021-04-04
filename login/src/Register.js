import React from 'react'

function Register() {
    return (
        <div>
        <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
        <div className="wrap-login100 p-l-55 p-r-55 p-t-40 p-b-30">
          <form className="login100-form validate-form">
            <div className="text-center p-b-30 txt1">
              <img src="C:\Users\a\Documents\GitHub\live-dinner\Users\LOGIN\Login_v9\images\logo1.jpeg" alt="" width="50%" height="50%" style={{textAlign: 'center'}} />
            </div>
            <span className="login100-form-title p-b-37">
              Sign Up
            </span>
            <div className="wrap-input100 validate-input m-b-20" data-validate="Enter name">
              <input className="input100" type="text" name="name" placeholder="Name" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input m-b-20" data-validate="Enter email">
              <input className="input100" type="text" name="email" placeholder="Email" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input m-b-20" data-validate="Enter contact no">
              <input className="input100" type="text" name="contact" placeholder="Contact" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input m-b-25" data-validate="Enter password">
              <input className="input100" type="password" name="pass" placeholder="Password" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 validate-input m-b-25" data-validate="Confirm password">
              <input className="input100" type="confirm password" name="confirm_pass" placeholder="Confirm Password" />
              <span className="focus-input100" />
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Sign Up
              </button>
            </div>
            <div className="text-center p-t-30 txt1">
              <a href="C:\Users\a\Documents\GitHub\live-dinner\Users\index.html" className="txt2 hov1">
                Continue as Guest
              </a>
            </div>
            <div className="text-center p-t-20 p-b-20">
              <hr />
              <span className="txt1">
                Or login with
              </span>
            </div>
            <div className="flex-c p-b-50">
              <a href="#" className="login100-social-item">
                <i className="fa fa-facebook-f" />
              </a>
              <a href="#" className="login100-social-item">
                <img src="images/icons/icon-google.png" alt="GOOGLE" />
              </a>
            </div>
            <div className="text-center p-b-50 txt1">
              Already have an account? 
              <a href="login.html" className="txt2 hov1">
                Log In
              </a>
            </div>
          </form>
        </div>
      </div>
      <div id="dropDownSelect1" />
        </div>
    )
}

export default Register

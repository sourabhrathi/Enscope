import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../Assets/images/logo.png'
import AuthContext from '../../Utils/auth-context';

import { loginService } from '../../Utils/services';


const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "", });
  const [loading, setloading] = useState(false)
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();


  const loginSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
  
    try {
      const result = await loginService({
        email: userData.email,
        password: userData.password,
      });
  
      if (result) {
        if (result.data.User.Admin !== 0) {
          toast.success(result.message || "User Authenticated!");
          localStorage.setItem("userID", result.data.User.id);
          authCtx.login(result.data.access_token, result.data.User);
          navigate("/");
        } else {
          toast.error("You do not have permission to access it!");
        }
      } else {
        setloading(false);
        toast.error(result?.message || "Login failed");
      }
    } catch (err) {
      setloading(false);
      toast.error(err.message || "An error occurred while logging in.");
    }
  };
  


  const handleSubmit = (e) => {
    loginSubmit(e)
  }

  const handleSingUp = () => {
    navigate('/signup');
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUserData({
      ...userData,
      [name]: value,
    })
  }


  return (
    <div>
      <div class="absCenter is-Responsive">
        <div id="logo-container">
          <img class="img-responsive logo-naic" src={logo} alt="NAIC Logo" />
          <div className="login_title">
            <h4 className="text-center">Log In</h4>
          </div>
        </div>


        <form action="" id="loginForm" className="mt-8" onSubmit={e => handleSubmit(e)}>
          <div class="form-group  login-input">
            <p className='mb-3'>Email Address</p>
            <input
              class="form-control"
              type="email"
              name="email"
              placeholder="Enter your email id"
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group  login-input ">
            <p className='mb-3'>Password</p>
            <input
              class="form-control"
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <button type="submit" class="btn btn-def text-white btn-block ">
              {loading ?
                <div className='flex items-center justify-center'>
                  <div
                    class="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    <span
                      class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    ></span>
                  </div>
                  <span className='px-2'>Loading...</span>
                </div> : "Login "}
            </button>
          </div>
        </form>
        {/* <div class="footer flex items-center justify-center mt-6">
          <p>Don’t have an account?</p>
          <span className="px-4 cursor-pointer"  >Sign Up</span>
        </div> */}
      </div>
    </div>
  )
}

export default Login

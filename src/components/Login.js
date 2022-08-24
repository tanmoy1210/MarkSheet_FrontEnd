import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import {gettoken,getclientID} from "../httpservice/token";
import Service from "../httpservice/http";
import  sha256 from "../httpservice/sha256";

gettoken();
const Login = () => {
  
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        gettoken();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        
        e.preventDefault();
     
        try {
          
            debugger;
            const service = new Service();
            const SHA256 = new sha256();
            debugger;
            var Token = SHA256.SHA256(localStorage.getItem('token')).toString().toUpperCase();;
            var ClientID = '';
            var conpassword=SHA256.SHA256(pwd).toString().toUpperCase();
            ClientID =   getclientID(ClientID);
            var Password=SHA256.SHA256(Token+""+conpassword).toString().toUpperCase();
            let prm = new Object();
            var conv = SHA256.forHash({UserID:user ,Password: Password});
            var encrypteddata=SHA256.SHA256(conv).toString().toUpperCase();
            prm.api="Services";
            prm["actionID"] = 'login';
            prm["SHA"] = { 'clientid': ClientID, 'token': localStorage.getItem('token'), 'SHA': encrypteddata }
            prm["data"] ={UserID:user,Password:Password};
            service.PrepData_Connectsa_Server(prm).then(e => {
                debugger;
                    
                    localStorage.setItem("User", JSON.stringify(e));

                    const role=e["UType"];
                     const lt=e["UType"];
                    const user=e["UserId"];
                    const accessToken=e["token"];

                    setAuth({ user, pwd, role,lt,accessToken });
                    setUser('');
                    setPwd('');
                    navigate(from, { replace: true });

                     
                    
                
            }).catch(e => alert("credentials are incorrect"))

            // const response = await axios.post(LOGIN_URL,
            //     JSON.stringify({ user, pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         withCredentials: true
            //     }
            // );
            // console.log(JSON.stringify(response?.data));
            // //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            // const roles = response?.data?.roles;
            // setAuth({ user, pwd, roles, accessToken });
            // setUser('');
            // setPwd('');
            // navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
             <div className="container-fluid px-0">
	    <div className="row mx-0 flex-row-reverse">
		<div className="col-lg-4 px-0">
			<section className="sign-in">
				<div className="container full-container">
					<div className="signin-content">
					
						<div className="signin-form">
							<div className="logo1 text-center mx-auto">
							<img src="../assets/img/logo.png" alt="logo"/>
							</div>
							<h2 className="form-title text-primary">Login</h2>
							<p className="form-title text-black"> Login to your account</p>

          
            
            <form onSubmit={handleSubmit} className="register-form" id="login-form">

            <div className="form-group">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
									<div className="">
                {/* <label htmlFor="username">Username:</label> */}
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    placeholder="User Name"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    className="form-control input-height"
                    required
                />
</div></div>
                {/* <label htmlFor="password">Password:</label> */}
                <div className="form-group">
									<div className="">
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    className="form-control input-height"
                    required
                />
                </div>
                </div>
                <div className="form-group mb-1">
									<input type="checkbox" name="remember-me" id="remember-me" className="agree-term"/>
									<label  className="label-agree-term"><span><span></span></span>Remember me</label>
								</div>
								<div className="form-group">
									<a className="pass text-black" href="#">Forgot your password?</a></div>
								<div className="form-group form-button">
									<button className="btn btn-round btn-primary" name="signin" id="signin">Login</button>
								</div>
              
            </form>
            {/* <p>
                Need an Account?<br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p> */}
            <div className="social-login d-block text-center">
								<span className="social-label d-block">Or login with</span>
								<ul className="socials justify-content-center">
									<li><a href="#"><i className="display-flex-center zmdi zmdi-facebook"></i></a></li>
									<li><a href="#"><i className="display-flex-center zmdi zmdi-twitter"></i></a></li>
									<li><a href="#"><i className="display-flex-center zmdi zmdi-google"></i></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>	
	    <div className="col-lg-8 px-0">
	<div className="back-bg">
			<div className="overlay"></div>
			<div className="row py-3">
			<div className="col-lg-12 text-center">
				<img src="../assets/img/logo2.png" alt="logo"/>
				<h1 className="text-white fw-bold text-uppercase">
				No <span className="text-info">Paper</span>. No Hassles.
				</h1>
                <div className="modi-img mx-auto mt-5">
				<img src="../assets/img/Mobile-Gif2.gif" alt=""/>
			   </div>	
			<div className="modi-img mx-auto mt-5">
			
			</div>	
			</div>	
			</div>
			
		   </div>
	     </div>
	     <div className="col-lg-12 px-0">
		<div className="footer_area">
			<div className="row mx-0">
			<div className="col-sm-6">
			<ul>
			<li><a href="#">About Us</a></li>
			<li><a href="#">Privacy Policy</a></li>	
			</ul>	
			</div>
			<div className="col-sm-6 text-end">
			<div className="play_sec">
		     <a href="#"><img src="../assets/img/ios.png" alt=""/> </a>
			<a href="#"><img src="../assets/img/and.png" alt=""/> </a>	
			</div>	
				
			</div>	
			</div>
		</div>
	     </div>
		
	</div>	
	</div>
        </section>

    )
}

export default Login

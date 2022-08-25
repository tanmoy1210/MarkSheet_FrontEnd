import React from 'react';
import Header from "../../components/Header";
import { Sidebar } from "../../components/sidebar";
import { useRef, useState, useEffect } from "react";
import {gettoken,getclientID} from "../../httpservice/token";
import Service from "../../httpservice/http"; 
import sha256 from "../../httpservice/sha256";
import { Link, useNavigate, useLocation } from 'react-router-dom';
export const User = () => {

    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const navigateTo =  "/UserList";
    //Fields
    const[username, setUserName] = useState('');
    const[emailId, setEmail] = useState('');
    const[mobileNumber, setMobileNumber] =useState('');   
    const [userPassword, setPassword] = useState('');
    const [roleId, setRoleId] = useState(0);
    const [userRegId, setUserRegId] = useState(0);
    const [status, setStatus] = useState(0);
    const [lastStatusAt, setLastStatusAt] = useState();
    const [client_id, setClientId] = useState(0);
    const[message, setMessage] = useState('');
    //End Fields
    const userRoles = [
        { label: "Admin", value: 2001 },
        { label: "Staff", value: 1001 },
        { label: "Teacher", value: 3001 },
        { label: "Student", value: 4001 },
        { label: "Gurdian", value: 5001 },
    ]

    const handleUserRoleChange = (e) => {
        setRoleId(parseInt(e.target.value))
    }

    const statusList =[
        {label: "Is Active", value: 1},
        {label: "Is Inactive", value: 0}
    ]

    const handleStatusChange = (e) => {
        console.log(e.target.value);
        setStatus(parseInt(e.target.value))
    }

    //User Roles
    const [userRoleData, setuserRoleData] = useState([]);

    const loadUserRoles = async (e) => {
      
    const service = new Service();
    const SHA256 = new sha256();
    var ClientID = '';
    ClientID = getclientID(ClientID);  
    
      var prm = new Object();
      prm.api="UserRole";  
      prm.eventID = "getall";
      prm.SHA = {
          clientid: ClientID,
          token: localStorage.getItem('token'), 
         //SHA: encrypteddata 
      };
      //prm.data = data;      
      service.ServerAPICall(prm, 'ProcessData').then(response => {
        debugger;
       if(response != null){
        console.log('response ==', response);
        if(response.r_list != null){
        console.log('r_list', response.r_list);
         setuserRoleData(response.r_list);
        }
       }

      }).catch(e => alert(e));
    };
    //End User Roles

    const [count, setcount] = useState('');
    const [validName, setValidName] = useState(false);
    const [countFocus, setcountFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
        loadUserRoles();
    }, []
    );

    useEffect(() => {
    setErrMsg('');
    }, [username, emailId, mobileNumber, userPassword, roleId, userRegId,status,client_id, lastStatusAt, message])

    const handleCancelClick= (e) =>{
      navigate(navigateTo, { replace: true });
    }

    const handleSave = async (e) => {
    e.preventDefault();
    try {    
      const service = new Service();
      const SHA256 = new sha256();
      var ClientID = '';
      ClientID = getclientID(ClientID);                   
      var encryptedPassword=SHA256.SHA256(userPassword).toString().toUpperCase();            
    
      var data = 
      {
        ClientId: ClientID,
        EmailId: emailId,
        MobileNumber: parseInt(mobileNumber),
        RoleId: roleId,
        status: 1,
        UserName: username, 
        UserPassword: encryptedPassword,
        UserRegId: userRegId
        
      };

      var conv = SHA256.forHash(data);   
     
      var encrypteddata = SHA256.SHA256(conv).toString().toUpperCase();
      var prm = new Object();
      prm.api="User";  
      prm.eventID = "save";
      prm.SHA = {
          clientid: ClientID,
          token: localStorage.getItem('token'), 
          SHA: encrypteddata 
      };
      prm.data = data;      
      service.ServerAPICall(prm, 'ProcessData').then(e => {
        //var json = JSON.parse(e);
        alert(e.r_message);
        setMessage(e.r_message);
        //alert('Record saved successfully'); 
        navigate(navigateTo, { replace: true });

      }).catch(e => alert(e));
      setSuccess(true);
      setEmail('');
      setUserName('');
      setPassword('');
      setMobileNumber('');
      setRoleId('');
      setUserRegId('');
      setStatus('');
      setLastStatusAt('');
      setClientId('')
    } catch (err) {
        //  if(err !== undefined || err !== null){
        //     alert("Server error occured");
        //     console.log(err);
        //  }
        // errRef.current.focus();
    }   
 }
  return (
    <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white white-sidebar-color logo-indigo">
    <div className="page-wrapper">
      <Header />
      <div className="page-container">
        <Sidebar />
        <div className="page-content-wrapper">
          <div className="page-content">
            <div className="page-bar">
              <div className="page-title-breadcrumb">
                <div className=" pull-left">
                  <div className="page-title">User Registration</div>
                </div>
                <ol className="breadcrumb page-breadcrumb pull-right">
                  <li>
                    <i className="fa fa-home"></i>&nbsp;
                    <a className="parent-item" href="index.html">
                      Home
                    </a>
                    &nbsp;<i className="fa fa-angle-right"></i>
                  </li>
                  <li>
                    <a className="parent-item" href="">
                      Forms
                    </a>
                    &nbsp;<i className="fa fa-angle-right"></i>
                  </li>
                  <li className="active">User Registration</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="card-body" id="bar-parent2">
                  <div className="card card-box">
                    <div className="card-head">
                      <header>New User</header>
                      <button
                        id="panel-button2"
                        className="mdl-button mdl-js-button mdl-button--icon pull-right"
                        data-upgraded=",MaterialButton"
                      >
                        <i className="material-icons">more_vert</i>
                      </button>
                      <ul
                        className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                        data-mdl-for="panel-button2"
                      >
                        <li className="mdl-menu__item">
                          <i className="material-icons">assistant_photo</i>Action
                        </li>
                        <li className="mdl-menu__item">
                          <i className="material-icons">print</i>Another action
                        </li>
                        <li className="mdl-menu__item">
                          <i className="material-icons">favorite</i>Something else
                          here
                        </li>
                      </ul>
                    </div>
                    {/* User Save Form */}
                    <div className="card-body" id="bar-parent2">
                    <form onSubmit={handleSave} id="form_sample_2" className="form-horizontal">
										<div className="form-body">
                    <div className="form-group row  margin-top-20">
                    <label className="control-label col-md-3">{message}</label>
                    </div>
											<div className="form-group row  margin-top-20">
												<label className="control-label col-md-3">User Name
													<span className="required"> * </span>
												</label>
												<div className="col-md-4">
													<div className="input-icon right">
														<i className="fa"></i>
														<input type="text" className="form-control" name="name" 
                                id="txtUsername"
                                pattern='^[a-zA-Z0-9_]*$'
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUserName(e.target.value)}
                                value={username}
                                required /> 
                          </div>
												</div>
											</div>

											<div className="form-group row">
												<label className="control-label col-md-3">Email
													<span className="required"> * </span>
												</label>
												<div className="col-md-4">
													<div className="input-icon right">
														<i className="fa"></i>
														<input type="text" className="form-control" name="email"
                            id="userPassword"   
                            pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}'                                     
                            autoComplete="off"                                       
                            onChange={(e) => setEmail(e.target.value)}
                            value={emailId} required/> 
                          </div>
												</div>
											</div>
											
											<div className="form-group row">
												<label className="control-label col-md-3">Mobile Number
													<span className="required"> * </span>
												</label>
												<div className="col-md-4">
													<div className="input-icon right">
														<i className="fa"></i>
														<input type="text" className="form-control" name="number"
                             pattern="-?[0-9]*(\.[0-9]+)?" 
                             id="mobile"
                             autoComplete="off"                                       
                             onChange={(e) => setMobileNumber(e.target.value)}
                             value={mobileNumber} required/> </div>
												</div>
											</div>

										  <div className="form-group row">
												<label className="control-label col-md-3">Password
													<span className="required"> * </span>
												</label>
												<div className="col-md-4">
													<div className="input-icon right">
														<i className="fa"></i>
														<input type="password" className="form-control" name="password" 
                                id="userPassword"
                                pattern='^[a-zA-Z0-9_@#!%]*$'
                                autoComplete="off"                                       
                                onChange={(e) => setPassword(e.target.value)}
                                value={userPassword} 
                                required /> 
                          </div>
												</div>
											</div>

                      <div className="form-group row">
												<label className="control-label col-md-3"> User Role 
													<span className="required"> * </span>
												</label>
												<div className="col-md-4">
													<div className="input-icon right">
														<i className="fa"></i>
                            <select
                                    className="form-select"
                                    id="userRole" 
                                    onChange={handleUserRoleChange} required> 
                                    <option>Select a user role</option>           
                                    {userRoleData.map((userRole) => 
                                    <option value={userRole.roleId}>{userRole.roleName}</option>
                                    )}
                            </select>  
                          </div>
												</div>
											</div>

                      {/* <div className="form-group row">
												<label className="control-label col-md-3"> Status
													<span className="required"> * </span>
												</label>
												<div className="col-md-4">
													<div className="input-icon right">
														<i className="fa"></i>
                            <select
                                    className="form-select"
                                    id="status" 
                                    onChange={handleStatusChange} required> 
                                    <option>Select status</option>           
                                    {statusList.map((stat) => 
                                    <option value={stat.value}>{stat.label}</option>
                                    )}
                            </select>  
                          </div>
												</div>
											</div> */}


										</div>
										<div className="form-group">
											<div className="offset-md-3 col-md-9">
												<button type="submit" className="btn btn-info m-r-20">Submit</button>
												<button type="button" className="btn btn-default" onClick={handleCancelClick}>Cancel</button>
											</div>
										</div>
									</form>

                    </div>
                    {/* End User Save Form */}
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
};







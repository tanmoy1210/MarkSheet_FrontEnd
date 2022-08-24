import React from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/sidebar";
import { useRef, useState, useEffect } from "react";
import {gettoken,getclientID} from "../../httpservice/token";
import Service from "../../httpservice/http"; 
import sha256 from "../../httpservice/sha256";
export const Country = () => {

  const countRef = useRef();
    const errRef = useRef();

    const [count, setcount] = useState('');
    const [validName, setValidName] = useState(false);
    const [countFocus, setcountFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
      countRef.current.focus();
  }, [])

  useEffect(() => {
  setErrMsg('');
  }, [count])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const service = new Service();
      const SHA256 = new sha256();
      var ClientID = '';
      var data = {cname:count};
      ClientID = getclientID(ClientID); 
      var conv = SHA256.forHash(data);   
     
      var encrypteddata = SHA256.SHA256(conv).toString().toUpperCase();
      var prm = new Object();
      prm.api="Services";
      prm.eventID = "setcountry";
      prm.SHA = {
          clientid: ClientID,
          token: localStorage.getItem('token'), 
          SHA: encrypteddata 
      };
      prm.data = data;
      // service.MyAuthenticated_Server(prm).then(e => {


      //   }).catch(e => alert(e))
      //   // const response = await axios.post(REGISTER_URL,
      //   //     JSON.stringify({ user, pwd }),
      //   //     {
      //   //         headers: { 'Content-Type': 'application/json' },
      //   //         withCredentials: true
      //   //     }
      //   // );
      //   // TODO: remove console.logs before deployment
      //   //console.log(JSON.stringify(response?.data));
      //   //console.log(JSON.stringify(response))
      //   setSuccess(true);
      //   //clear state and controlled inputs
      //   setcount('');
      service.ServerAPICall(prm, 'MyAuthenticatedData').then(e => {      
      }).catch(e => alert(e));
      setSuccess(true);
      setcount('');
    } catch (err) {
        // if (!err?.response) {
        //     setErrMsg('No Server Response');
        // } else if (err.response?.status === 409) {
        //     setErrMsg('Username Taken');
        // } else {
        //     setErrMsg('Registration Failed')
        // }
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
                    <div className="page-title">Form Country</div>
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
                    <li className="active">Form Country</li>
                  </ol>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="card-body" id="bar-parent2">
                    <div className="card card-box">
                      <div class="card-head">
                        <header>New Country</header>
                        <button
                          id="panel-button2"
                          class="mdl-button mdl-js-button mdl-button--icon pull-right"
                          data-upgraded=",MaterialButton"
                        >
                          <i class="material-icons">more_vert</i>
                        </button>
                        <ul
                          class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                          data-mdl-for="panel-button2"
                        >
                          <li class="mdl-menu__item">
                            <i class="material-icons">assistant_photo</i>Action
                          </li>
                          <li class="mdl-menu__item">
                            <i class="material-icons">print</i>Another action
                          </li>
                          <li class="mdl-menu__item">
                            <i class="material-icons">favorite</i>Something else
                            here
                          </li>
                        </ul>
                      </div>
                      <div className="card-body" id="bar-parent2">
                        <form onSubmit={handleSubmit} id="form_sample_2" className="form-horizontal">
                          <div className="form-body">
                           
                            <div className="form-group row  margin-top-20">
                              <label className="control-label col-md-3">
                                Country Name
                                <span className="required"> * </span>
                              </label>
                              <div className="col-md-4">
                                <div className="input-icon right">
                                  <i className="fa"></i>
                                  <input
                            type="text"
                            id="countname"
                            ref={countRef}
                            autoComplete="off"
                            onChange={(e) => setcount(e.target.value)}
                            value={count}
                            required
                        />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="offset-md-3 col-md-9">
                              <button
                                type="submit"
                                className="btn btn-info m-r-20"
                              >
                                Submit
                              </button>
                            </div>
                          </div>
                        </form>
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
  );
};

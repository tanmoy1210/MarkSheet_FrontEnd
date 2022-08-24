import React from 'react';
import Header from "../../components/Header";
import { Sidebar } from "../../components/sidebar";
import { useRef, useState, useEffect } from "react";
import {gettoken,getclientID} from "../../httpservice/token";
import Service from "../../httpservice/http"; 
import sha256 from "../../httpservice/sha256";
import { Link, useNavigate, useLocation, useParams} from 'react-router-dom';
export const RelationEdit = () => {
    const { relationId } = useParams();
    const [relationData, setrelationData] = useState({});
    const relationRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const navigateTo =  "/RelationList";
    //Fields
    const[relationName, setRelationName] = useState('');

    const loadRelation = async (e) => {
      
        const service = new Service();
        const SHA256 = new sha256();
        var ClientID = '';
        ClientID = getclientID(ClientID);  
        
          var prm = new Object();
          prm.api="Relation";  
          prm.eventID = "get";
          var data = {
            RelationId : relationId
          }
          var conv = SHA256.forHash(data); 
          var encrypteddata = SHA256.SHA256(conv).toString().toUpperCase();
          prm.SHA = {
              clientid: ClientID,
              token: localStorage.getItem('token'), 
             SHA: encrypteddata 
          };
          prm.data = data;      
          service.ServerAPICall(prm, 'ProcessData').then(response => {
            debugger;
           if(response != null){
            console.log('response ==', response.r_object);
            if(response.r_object != null){
            console.log('r_object ', response.r_object);
            
             var responseData = response.r_object;
             setrelationData(responseData);        
             setRelationName(responseData.relationName);
             
           
            }
           }
    
          }).catch(e => alert(e));
        };
    
    //End Fields
    
    useEffect(() => {
        relationRef.current.focus();
        loadRelation();
    }, []
    );

    useEffect(() => {
    
    }, [relationName])

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
      var data = 
      {
        RelationId : relationId,
        RelationName: relationName,      
        Status: 1
      };

      var conv = SHA256.forHash(data); 
      var encrypteddata = SHA256.SHA256(conv).toString().toUpperCase();
      var prm = new Object();
      prm.api="Relation";  
      prm.eventID = "update";
      prm.SHA = {
          clientid: ClientID,
          token: localStorage.getItem('token'), 
          SHA: encrypteddata 
      };
      prm.data = data;      
      service.ServerAPICall(prm, 'ProcessData').then(e => { 

        alert('Record updated successfully'); 
        navigate(navigateTo, { replace: true });

      }).catch(e => alert(e));
     
      setRelationName('');
     
      
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
                  <div className="page-title">Relation</div>
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
                  <li className="active">Relation</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="card-body" id="bar-parent2">
                  <div className="card card-box">
                    <div className="card-head">
                      <header>Edit Relation</header>
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
							<label className="control-label col-md-3">Relation Name
							<span className="required"> * </span>
							</label>
							<div className="col-md-4">
							<div className="input-icon right">
								<i className="fa"></i>
							    <input type="text" className="form-control" name="name" 
                                id="txtRelationName"
                                pattern='^[a-zA-Z0-9+-]*$'
                                ref={relationRef}
                                autoComplete="off"
                                onChange={(e) => setRelationName(e.target.value)}
                                value={relationName}
                                required /> 
                          </div>
						</div>
					    </div>
                        
											


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







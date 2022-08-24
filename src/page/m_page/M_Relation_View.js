import React from 'react'
import Header from "../../components/Header";
import { Sidebar } from "../../components/sidebar";
import { useRef, useState, useEffect } from "react";
import {gettoken,getclientID} from "../../httpservice/token";
import Service from "../../httpservice/http"; 
import sha256 from "../../httpservice/sha256";
import { Link, useNavigate, useLocation } from 'react-router-dom';
export const RelationList = () => {   

    const [relationData, setBloodGrpData] = useState([]);

    const loadRelations = async (e) => {
      
    const service = new Service();
    const SHA256 = new sha256();
    var ClientID = '';
    ClientID = getclientID(ClientID);  
    
      var prm = new Object();
      prm.api="Relation";  
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
         setBloodGrpData(response.r_list);
        }
       }

      }).catch(e => alert(e));
    };

    
    const handleDelete = (index,e) => {
       
            const service = new Service();
            const SHA256 = new sha256();
            var ClientID = '';
            ClientID = getclientID(ClientID);  
            
            var prm = new Object();
            prm.api="Relation";  
            prm.eventID = "delete";
            var data = {
                RelationId :  index
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
                loadRelations();
                //alert('Record deleted successfully');
               
                
            }
        
            }).catch(e => alert(e));
        
            
    }
    useEffect(() => {
        debugger;       
        loadRelations();
        
      }, []);

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
                  <div className="page-title">Relation List</div>
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
                  <li className="active">Relation List</li>
                </ol>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="card-body" id="bar-parent2">
                  <div className="card card-box">
                    <div className="card-head">
                      <header>All Relations

                        <div className='pull-right'>

                        <Link to="/Relation"
                        className="btn btn-primary">
                        Add New Relation
                        </Link> 
                        </div>
                      </header>
                      
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
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th>Relation Name</th>                                                                                                
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                
                                {relationData.map((item) => (
                                <tr key={item.relationId}>                                  
                                    <td>{item.relationName}</td>
                                    <td>                                        
                                        <Link to={`/RelationEdit/${item.relationId}`}
                                        className="nav-link nav-toggle">
                                        <i className="fas fa-pencil-alt"></i>
                                        </Link> 
                                     </td>
                                     <td>
                                     <Link to="/RelationList"  onClick={e => handleDelete(item.relationId,e)}
                                        className="nav-link nav-toggle">
                                        <i className="fas fa-trash"></i>
                                        </Link> 
                                        
                                    </td>
                                </tr>
                                ))}
                                
                            </tbody>
                        </table>
					</div>
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
}



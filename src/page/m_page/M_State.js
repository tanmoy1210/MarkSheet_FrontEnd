import React from "react";
import Header from "../../components/Header";
import { Sidebar } from "../../components/sidebar";
export const State = () => {

  
  return (
    <div className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md header-white white-sidebar-color logo-indigo">
      <div className="page-wrapper">
        <Header />
        <div className="page-container">
          <Sidebar />
          <div className="page-content-wrapper">
            <div className="page-content">
            <div className="card-body" id="bar-parent2">
              <form id="form_sample_2" className="form-horizontal">
                <div className="form-body">
                  <div className="form-group row  margin-top-20">
                    <label className="control-label col-md-3">
                      Country
                      <span className="required"> * </span>
                    </label>
                    <div className="col-md-4">
                      <div className="input-icon right">
                        <i className="fa"></i>

                        <select
                          className="form-select"
                          id="selitemIcon"
                        ></select>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row  margin-top-20">
                    <label className="control-label col-md-3">
                      State
                      <span className="required"> * </span>
                    </label>
                    <div className="col-md-4">
                      <div className="input-icon right">
                        <i className="fa"></i>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="offset-md-3 col-md-9">
                    <button type="submit" className="btn btn-info m-r-20">
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
  );
};

import React from "react";
import Service from './http';
import * as ReactGA from 'react-ga-donottrack';
import sha256 from './sha256';
export const gettoken = () => {
    debugger
    const service = new Service();
    debugger;
    var Token = '';
    var ClientID = '';
    var clid = '';
    ClientID = getclientID(clid);
    let prm = new Object();
    prm.api = "Services";
    prm["actionID"] = 'token';
    prm["data"] = ClientID;
    service.PrepData_Connects_Server(prm).then(e => {
        debugger;
        localStorage.setItem('token', e['Token']);
        return e['Token']
    }).catch(e => console.log('token error', e))
}



export const getclientID = (clid) => {
    if (!window.navigator.userAgent.match(/MSIE\s10\.0|trident\/6\.0/i)) {
        ReactGA.initialize('UA-000000-01');
        clid = "p3"; // sha256(window.location.pathname + window.location.search).toString().toUpperCase();
        return clid;
    }
}

export default gettoken;
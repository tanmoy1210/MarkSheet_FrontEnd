import React from "react";
const headers = {
    "Content-type": "application/json; charset=utf-8",
    "Accept": "application/json"
};

class Service {

    constructor() {
        // server address
        this.server = 'https://localhost:44311/Api/';
    }

    postData(body, file) {
        this.server = this.server + body.api + '/';
        debugger;
        var data = JSON.stringify(body);
        let reqop = {
            method: 'POST',
            headers: headers,
            body: data
        };

        return this.post(reqop, file);
    }

    postDataAuthorization(body, file) {
        this.server = this.server + body.api + '/';
        debugger;
        const token = JSON.parse(localStorage.getItem("User")).token;

        const headers = {
            "Content-type": "application/json; charset=utf-8",
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
        };

        var data = JSON.stringify(body);
        let reqop = {
            method: 'POST',
            headers: headers,

            body: data
        };

        return this.post(reqop, file);
    }

    post = async(reqop, file) => {
        try {

            let response = await fetch(this.server + file, reqop);
            console.log(response);
            if(response !== null)
            {                
                let json = await response.json();
                return json;
            }
        } catch (error) {
            console.error('Error!', 'Error in sending data for authentication to server.', error);
        }
    }

    PrepData_Connects_Server(params) {
        debugger;
        return this.postData(params, 'requesttoken');

    }

    PrepData_Connectsa_Server(params) {

        return this.postData(params, 'authenticate');

    }

    MyAuthenticated_Server(params) {
        return this.postDataAuthorization(params, 'MyAuthenticatedData');
        // new Promise(resolve => {
        //     this.postData(params, 'MyAuthenticatedData').subscribe(
        //         data => resolve(data),
        //         err => resolve(err)
        //     );
        // }).catch((error) => {
        //     this.presentAlert('Error!', 'Error in sending data for authentication to server.');
        // });
    }
    
    ServerAPICall(params, apiRouteMethodName){
        return this.postDataAuthorization(params, apiRouteMethodName);
    }


    /*PrepData_Connect_Server(params) {
        return new Promise(resolve => {
            this.postData(params, 'MyData').subscribe(
                data => resolve(data),
                err => resolve(err)
            );
        }).catch((error) => {
            //this.presentAlert('Error!', 'Error in sending data for authentication to server.');
            console.log(error);
        });
    }

  

    PrepData_Connectsa_Server(params) {
        return new Promise(resolve => {
            // params.actionID = 'gettenderlists';
            //Authenticateme by Login
            this.postData(params, 'authenticate').subscribe(
                data => resolve(data),
                err => resolve(err)
            );
        }).catch((error) => {
            this.presentAlert('Error!', 'Error in sending data for authentication to server.');
        });
    }

    PrepData_Connectsaa_Server(params) {
        return new Promise(resolve => {
            // params.actionID = 'gettenderlists';
            //Authenticateme by Login
            this.postData(params, 'MyAuthenticatedData').subscribe(
                data => resolve(data),
                err => resolve(err)
            );
        }).catch((error) => {
            this.presentAlert('Error!', 'Error in sending data for authentication to server.');
        });
    }

    async presentAlert(heading, msg) {
        const alert = await this.alertbox.create({
            header: heading,
            message: msg,
            buttons: ['OK']
        });
        await alert.present();
    }*/

}

export default Service;
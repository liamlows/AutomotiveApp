import axios from 'axios';

export class LoginRepo {
    url = "http://ec2-34-227-100-210.compute-1.amazonaws.com:8080/api";
    config = {

    };

    registerUser(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/register`, user, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    loginUser(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/login`, user)
                .then(resp => {
                    resolve(resp.data);
                    localStorage.setItem('email', resp.data.email);
                    localStorage.setItem('uID', resp.data.u_id);
                    localStorage.setItem('firstName', resp.data.first_name);
                    localStorage.setItem('lastName', resp.data.last_name);
                    localStorage.setItem('code', resp.data.code);
                    localStorage.setItem('resp', resp.data.response);
                    localStorage.setItem('shopName', resp.data.shop_name);
                    localStorage.setItem('shopAddress', resp.data.shop_address);
                    localStorage.setItem('shopRating',resp.data.shop_rating);
                    localStorage.setItem('shopOpen',resp.data.shop_open);
                    localStorage.setItem('companyName', resp.data.insurance_company);
                    localStorage.setItem('insurancePhone', resp.data.insurance_phone);
                    localStorage.setItem('insuranceEmail', resp.data.insurance_email);
                    localStorage.setItem('policyNumber', resp.data.insurance_num);
                })
                .catch(resp => alert(resp));
        });
    }

    getUserAccount(username, password){
        return new Promise((resolve, reject) => {
            axios.get(this.url, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

}

export default LoginRepo;
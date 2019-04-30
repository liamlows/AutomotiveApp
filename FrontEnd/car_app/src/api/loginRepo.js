import axios from 'axios';

export class LoginRepo {
    url = "http://ec2-34-227-100-210.compute-1.amazonaws.com";
    config = {

    };

    registerUser(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/register`, this.config)
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
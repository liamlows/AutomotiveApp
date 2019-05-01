import axios from 'axios';

export class AccountRepo {
    url = "https://ec2-3-92-242-46.compute-1.amazonaws.com";
    config = {
       
    };

    updateEmail(userId, email) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/email/${userId}`, email, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateFname(userId, fname) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/first_name/${userId}`, fname, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateLname(userId, lname) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/last_name/${userId}`, lname, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateFname(userId, fname) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/first_name/${userId}`, fname, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateInsuranceCom(userId, company) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_insurance_company/${userId}`, company, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateInsurancePhone(userId, phone) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_insurance_phone/${userId}`, phone, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateInsurancePolicyNum(userId, num) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_insurance_num/${userId}`, num, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }



}
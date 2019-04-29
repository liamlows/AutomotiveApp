import axios from 'axios';

export class CarRepo {
    url = "https://ec2-3-92-242-46.compute-1.amazonaws.com";
    config = {
        // headers: {
        //     Authorization: 'rbates'
        // }
    };

    getCars() {
        return new Promise((resolve, reject) => {
            axios.get(this.url, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getCar(carID) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${carID}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateCar(carID, car) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${carID}`, car, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    
    deleteCar(carID) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${carID}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addCar(car) {
        return new Promise((resolve, reject) => {
            axios.post(this.url, car, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}
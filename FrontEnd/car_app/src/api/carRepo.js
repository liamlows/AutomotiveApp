import axios from 'axios';

export class CarRepo {
    url = "http://ec2-3-92-242-46.compute-1.amazonaws.com:8080";
    // url = "autoapp_node_comp:8080;"
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

    getCar(carId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${carId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateCar(carId, car) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/${carId}`, car, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
    
    deleteCar(carId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/${carId}`, this.config)
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
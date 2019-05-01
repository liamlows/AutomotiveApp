import axios from 'axios';

export class CarRepo {
    url = "http://ec2-34-227-100-210.compute-1.amazonaws.com:8080";
    // url = "autoapp_node_comp:8080;"
    config = {

    };

    async addCar(userId, car) {
        return await new Promise((resolve, reject) => {
            axios.post(`${this.url}/car/add_car/${userId}`, car, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getCars(userId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/car/get_car/${userId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    deleteCar(carId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/car/delete_car/${carId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    deleteRecordsByCID(carId){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/maintenance/delete_maint_CID/${carId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateCar(carId, car) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_all/${carId}`, car, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addRecord(carId, record) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/maintenance/add_maint/${carId}`, record, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    getRecords(carId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/maintenance/get_maint/${carId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    deleteRecordByMID(maintId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/maintenance/delete_maint_MID/${maintId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateRecord(maintId, record) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_maint/${maintId}`, record, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}

export default CarRepo;
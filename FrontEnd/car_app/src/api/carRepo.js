import axios from 'axios';

export class CarRepo {
    url = "/api";
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

    updateCar(carId, car) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_all/${carId}`, car, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateAvgMileage(carId, avg_mileage) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_avg_mileage/${carId}`, avg_mileage, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateCurrMileage(carId, currMileage) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_cur_mileage/${carId}`, currMileage, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMilesMaint(carId, miles_maint) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_maint_mileage/${carId}`, miles_maint, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMilesOil(carId, miles_oil) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_oil_mileage/${carId}`, miles_oil, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMilesTire(carId, miles_tire) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/car/update_car_tire_mileage/${carId}`, miles_tire, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addRecord(carId, record) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/maintenance/add_maint/${carId}`, record, this.config)
                .then(resp => resolve(resp.data))
                // .then(resp => {
                //     resolve(resp.data);
                //     localStorage.setItem('response', resp.data.m_id);
                // })
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

    deleteRecordsByCID(carId){
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/maintenance/delete_maint_CID/${carId}`, this.config)
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

    updateShopName(userId, name) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_shop_name/${userId}`, name, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateShopAddress(userId, address) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_shop_address/${userId}`, address, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateShopRating(userId, rating) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_shop_rating/${userId}`, rating, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateShopOpen(userId, open) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/user/update_shop_open/${userId}`, open, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}

export default CarRepo;

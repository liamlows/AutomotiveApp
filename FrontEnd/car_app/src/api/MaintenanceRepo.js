import axios from 'axios';

export class MaintenanceRepo {
    url = "https://ec2-3-92-242-46.compute-1.amazonaws.com";
    config = {
       
    };

    getMaintenance(carId) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/maintenance/get_maint/${carId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    addMaintenance(carId, maintenance) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/maintenance/add_maint/${carId}`, maintenance, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMaintenance(carId, maintenance) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_maint/${carId}`, maintenance, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMaintenanceType(carId, type) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_type/${carId}`, type, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMaintenanceLastMileage(carId, mile) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_last_mileage/${carId}`, mile, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMaintenanceServiceDate(carId, date) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_date_serviced/${carId}`, date, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMaintenanceCost(carId, cost) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_cost/${carId}`, cost, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    updateMaintenanceDescription(carId, description) {
        return new Promise((resolve, reject) => {
            axios.put(`${this.url}/maintenance/update_description/${carId}`, description, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }

    deleteMaintenance(carId) {
        return new Promise((resolve, reject) => {
            axios.delete(`${this.url}/maintenance/delete_maint/${carId}`, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        });
    }
}



import axios from "axios";

const baseUrl = 'http://localhost:5000';

const vehicleApi = {
    vehicle() {
        return {
            insertVehicle: (vehicle) => axios.post(baseUrl + "/api/Vehicle", vehicle),
            deleteVehicle: (vehicle) => axios.delete(baseUrl + "/api/Vehicle", vehicle),
            getAllVehicles: () => axios.get(baseUrl + "/api/Vehicle"),
        };
    },
};
export default vehicleApi;
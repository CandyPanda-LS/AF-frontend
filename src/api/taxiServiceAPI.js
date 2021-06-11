import axios from "axios";

const baseUrl = 'http://localhost:5000';

const taxiServiceApi = {
    taxi() {
        return {
            calculate: (trip) => axios.post(baseUrl + "/api/Vehicle", trip),
        };
    },
};
export default taxiServiceApi;
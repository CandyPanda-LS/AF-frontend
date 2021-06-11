import axios from "axios";

const baseUrl = 'http://localhost:8081';

const taxiServiceApi = {
    taxi() {
        return {
            calculate: (trip) => axios.post(baseUrl + "/api/calculator", trip),
        };
    },
};
export default taxiServiceApi;
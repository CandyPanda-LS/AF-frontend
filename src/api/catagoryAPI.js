import axios from "axios";

const baseUrl = 'http://localhost:5000';

const catagoryApi = {
    catagory() {
        return {
            insertCatagories: (catagory) => axios.post(baseUrl + "/api/Catagory",catagory),
            getAllCatagories: () => axios.get(baseUrl + "/api/Catagory"),
            getVehiclesForCatagory: (catagory) => axios.get(baseUrl + "/api/Catagory/getVehiclesForCatagory", catagory),
        };
    },
};
export default catagoryApi;
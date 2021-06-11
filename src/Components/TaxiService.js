import React, {Component} from 'react';
import Select from "react-select";
import calculationAPI from "../api/taxiServiceAPI";
import catagoryApi from "../api/catagoryAPI";
import vehicleAPI from "../api/vehicleAPI";


class TaxiService extends Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.onCategorySelect = this.onCategorySelect.bind(this);
        this.onVehicleSelect = this.onVehicleSelect.bind(this);

        this.state={
            selectedcategory:"",
            selectedVehicle:"",
            duration:"",

            categories:[],
            vehicles:[],
            options:[],
            optionVehicles:[],
            catagoryOptions:[],


        }

    }

    componentDidMount() {
        catagoryApi.catagory().getAllCatagories()
            .then(data => {
                this.setState({ categories: data.data }, () => {
                    if (this.state.categories.length > 0) {
                        let data = [];
                        this.state.categories.map(item => {
                            let category = {
                                value: item._id,
                                label: `${item.name} | Rs.${item.price}.00 PER HOUR`
                            }
                            data.push(category);
                        });
                        this.setState({ options: data });
                    }
                })
            })
    }

    onCategorySelect(e) {

        this.setState({ selectedcategory: e ? e.value : null })
        let setCatagory ={
            id:e.value
        }
        catagoryApi.catagory().getVehiclesForCatagory(setCatagory)
            .then((res)=>{
                this.setState({vehicles:res.data},()=>{
                    if (this.state.vehicles.length > 0) {
                        let data = [];
                        this.state.vehicles.map(item => {
                            let vehicles = {
                                value: item._id,
                                label: `${item.name}`
                            }
                            data.push(vehicles);
                        });
                        this.setState({ optionsVehicle: data });
                    }
                })
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
    onVehicleSelect(e) {
        this.setState({ selectedVehicle: e ? e.value : null })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        let trip = {
            catagotyID:this.state.selectedcategory,
            duration:this.state.duration,
            vehicle:this.state.selectedVehicle,

        }
        calculationAPI.taxi().calculate(trip)
            .then((res) => {
                console.log(res.data)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    render() {
        return (
            <div>

                <div className="container mt-5">
                    <h2>Taxi Service</h2>
                    <form onSubmit={this.onFormSubmit}>

                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <Select
                                options={this.state.options}
                                className="basic-multi-select"
                                onChange={this.onCategorySelect}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Category</label>
                            <Select
                                options={this.state.optionsVehicle}
                                className="basic-multi-select"
                                onChange={this.onVehicleSelect}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Duration</label>
                            <input type="number" className="form-control" name="duration" onChange={this.onChange} value={this.state.duration} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaxiService;
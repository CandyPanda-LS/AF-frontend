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
            catagory:"",
            vehicle:"",
            duration:"",

            categories:[],
            vehicles:[],
            optionCatagories:[],
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
                        this.setState({ catagoryOptions: data });
                    }
                })
            })
    }

    onCategorySelect(e) {
        console.log(e.target.value)
        //todo:add the id to state
        // this.setState({ selectedcategory: e ? e.map(item => item.value) : [] })
        catagoryApi.catagory().getVehiclesForCatagory()
            .then((res)=>{
                this.setState({vehicles:res.data})
            })
            .catch((err)=>{
                console.log(er.message)
            })
    }
    onVehicleSelect(e) {
        // this.setState({ selectedcategory: e ? e.map(item => item.value) : [] })
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        let trip = {
            catagotyID:this.state.catagory,
            duration:this.state.duration,
            vehicle:this.state.vehicle,

        }
        console.log(trip)
        calculationAPI.taxi().calculate(trip)
            .then((res) => {
                // alert('You have to pay : ' , res.)
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
                            <label className="form-label">Select Category     :</label>
                            //todo: options not being selected properly
                            <Select
                                options={this.state.catagoryOptions}
                                isMulti
                                className="basic-multi-select"
                                onChange={this.onCategorySelect}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Select Vehicle  :</label>
                            <Select
                                options={this.state.optionVehicles}
                                isMulti
                                className="basic-multi-select"
                                onChange={this.onVehicleSelect}
                            />

                        </div>
                        <div className="mb-3">
                            <label className="form-label">Duration</label>
                            <input type="number" className="form-control" name="name" onChange={this.onChange} value={this.state.duration} />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaxiService;
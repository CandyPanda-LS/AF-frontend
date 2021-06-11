import React, {Component} from 'react';
import vehicleApi from "../api/vehicleAPI";

class ViewVehicle extends Component {
    constructor(props) {
        super(props);
        this.state={
            vehicles:""
        }
    }
    componentDidMount() {
        vehicleApi.vehicle().getAllVehicles()
            .then(res =>{
                this.setState({ vehicles: res.data })
                console.log(this.state.vehicles)
            })
            .catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div>
                <br/>
                <h2>View Vehicles</h2>

                <table className="table table-striped mt-5">
                    <thead>
                    <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Model</th>
                        <th scope="col">Type</th>
                        <th scope="col">Name</th>
                        <th scope="col">Catagories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.vehicles.length>0?
                            this.state.vehicles.map((singleVehicle)=>(
                                    <tr>
                                        <td>{singleVehicle.code}</td>
                                        <td>{singleVehicle.model}</td>
                                        <td>{singleVehicle.type}</td>
                                        <td>{singleVehicle.name}</td>
                                        <td>{singleVehicle.catagories.map((singleCatagory)=>{
                                            return  <p>{singleCatagory.name}</p>;

                                            }
                                        )}
                                        </td>

                                    </tr>
                            ))
                        :null}

                    </tbody>
                </table>
            </div>
        );
    }
}

export default ViewVehicle;
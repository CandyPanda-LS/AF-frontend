import React, {Component} from 'react';
import catagoryAPI from "../api/catagoryAPI"
import {Modal, ModalHeader, ModalBody, Button} from 'reactstrap';

class ViewCatagory extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state={
            catagories:"",
            modal: false,
            vehiclesList:"",

        }
    }
    toggle(catagory) {
        this.setState({ modal: !this.state.modal});

        if (this.state.modal){
            console.log("b")
        }else {
            let setCatagory ={
                id:catagory._id
            }
            //todo: api call not working
            catagoryAPI.catagory().getVehiclesForCatagory(setCatagory)
                .then(res =>{
                    this.setState({ vehiclesList: res.data })
                    console.log("suceess")
                })
                .catch((err)=>{
                    console.log(err.message)
                })
        }

    }
    componentDidMount() {
        catagoryAPI.catagory().getAllCatagories()
            .then(res =>{
                this.setState({ catagories: res.data })
                console.log(this.state.catagories)
            })
            .catch(error => {
                alert(error.message);
            })
    }

    render() {
        return (
            <div>
                <br/>
                <h2>View Categories</h2>

                <table className="table table-striped mt-5">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">View Vehicles In Catagory</th>


                        </tr>
                        </thead>
                        <tbody>
                        {this.state.catagories.length>0?
                            this.state.catagories.map((singleCatagory,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{singleCatagory.name}</td>
                                        <td>{singleCatagory.price}</td>
                                        <td>
                                            <Button  onClick={()=>{this.toggle(singleCatagory)}}>
                                                View Vehicles
                                            </Button>
                                        </td>

                                    </tr>
                                );
                        })
                            :null}

                        </tbody>
                    </table>
                <div>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>
                            {" "}
                        </ModalHeader>
                        <ModalBody>
                            <div>
                                <h6>
                                    {" "}
                                    <span>
                                        {" "}
                                        {this.state.vehiclesList.length>0?
                                            this.state.vehiclesList.map(singleVehicle =>{
                                                return(
                                                    <div>
                                                        <br/>
                                                            <h3>{singleVehicle.name}</h3>
                                                            <p>{singleVehicle.code}</p>
                                                            <p>{singleVehicle.model}</p>
                                                        <br/>
                                                    </div>
                                                );
                                            })
                                            :null}
                                    </span>
                                </h6>
                                <br />

                            </div>
                        </ModalBody>
                    </Modal>
                </div>

            </div>
        );
    }
}

export default ViewCatagory;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ViewCatagory from "../Components/ViewCatagory";
import ViewVehicle from "../Components/ViewVehicle";
import InsertCatagory from "../Components/InsertCatagory";
import InsertVehicle from "../Components/InsertVehicle";
import TaxiService from "../Components/TaxiService";
class RouteComponent extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/Catagories' component={ViewCatagory} />
                    <Route path='/addCatagories' component={InsertCatagory} />
                    <Route path='/Vehicles' component={ViewVehicle} />
                    <Route path='/addVehicles' component={InsertVehicle} />
                    <Route path='/taxi' component={TaxiService} />

                </Switch>
            </Router>
        );
    }
}

export default RouteComponent;
import React from 'react';
import RouteComponent from "./src/route/RouteComponent";
import Navbar from "./src/Components/Navbar";

export default class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Navbar/>
                <RouteComponent/>
            </div>

        );


    }
}
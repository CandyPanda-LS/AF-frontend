import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/Catagories">Catagories </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/addCatagories">Insert Catagories </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/Vehicles">Vehicles </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/addVehicles">Insert Vehicles </a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" href="/taxi">Taxi Service</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
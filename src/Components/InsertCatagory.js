import React, {Component} from 'react';
import catagoryApi from "../api/catagoryAPI";

class InsertCatagory extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            categoryname: '',
            categoryprice: 0
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onFormSubmit(e) {
        e.preventDefault();
        let category = {
            name: this.state.categoryname,
            price: this.state.categoryprice
        }
        catagoryApi.catagory().insertCatagories(category)
            .then((data) => {
                alert('data successfully inserted')
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    render() {
        return (
            <div>
                <div className="container mt-5">
                    <h2>Insert Category</h2>
                    <form onSubmit={this.onFormSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" className="form-control" name="categoryname" onChange={this.onChange} value={this.state.categoryname} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" className="form-control" name="categoryprice" onChange={this.onChange} value={this.state.categoryprice} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default InsertCatagory;
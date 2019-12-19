import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AddCustomer extends Component {

    render() 
    {
        var style = {
            marginLeft : '15rem'
        }
         return (
            <div className="container-fluid">
                <div style={ style } className="row">
                    <div className="col-sm-4 pt-5">
                        <div className="card mt-2">
                            <div className='m-3 card-header'>
                                <h3 className="d-inline-block">Add Customer</h3>
                                <h3 className="float-right"><i className="fas fa-times"></i></h3>
                            </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label for="customerName">Customer Name</label>
                                            <input id="customerName" type="text" name="name" parsley-trigger="change" autocomplete="off" className="form-control"/>
                                        </div>
                                        <div className="form-group my-5">
                                            <select class="custom-select">
                                                <option >Industry Type</option>
                                                <option >Textile</option>
                                                <option >Food</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label for="noEmployees">No. of Employees</label>
                                            <input id="noEmployees" type="email" name="email" parsley-trigger="change" autocomplete="off" className="form-control"/>
                                        </div>
                                        <div className="form-group my-5">
                                            <select class="custom-select">
                                                <option >Country</option>
                                                <option >Pakistan</option>
                                                <option >U.A.E</option>
                                            </select>
                                        </div>
                                        <div className="form-group mb-5">
                                            <label for="contactPerson">Contact Person</label>
                                            <input id="contactPerson" type="text" className="form-control"/>
                                        </div>
                                        <div className="form-group">
                                            <label for="personNo">Contact Person Number</label>
                                            <input id="personNo" type="text" className="form-control"/>
                                        </div>
                                            <button type="submit" className="btn w-50 btn-primary float-right mt-4">Submit</button>

                                    </div>    
                            </div>
                    </div>
                </div>
            </div>
        ); 
    }
}



                        
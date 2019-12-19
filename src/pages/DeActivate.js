import React, { Component } from 'react';

export default class DeActivate extends Component {

    render() 
    {
        var style = {
            height : '100vh',
            marginLeft : '16rem'
        }

        return (
            <div className="container-fluid">
                <div style={ style } className="row">
                    <div className="col-sm-4 pt-5">

                        <div className="card mt-5">

                            <div className='m-3 card-header'>
                                <h3 className="d-inline-block">De-Activate</h3>
                                <h3 className="float-right"><i className="fas fa-times"></i></h3>
                            </div>

                            <div className='mx-4'>
                                <h4 className='d-inline-block'>Customers</h4>
                                <input className="form-control w-50 d-inline-block float-right" type="text" placeholder="Search" />
                            </div>
                                <div className="card-body">
                                    <table className="table table-hover text-center">
                                        
                                    <tbody>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Honda</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Toyota</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Suzuki</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Hyndai</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Honda</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Toyota</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                        <tr>
                                            <td>LOGO</td>
                                            <td>Suzuki</td>
                                            <td><b><u>Activate</u></b></td>
                                        </tr>
                                    </tbody>
                                    </table>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

import React, { Component } from 'react'

class SalesCall extends Component {
    style = {
        fontSize : '32px',
    };
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-12">
                        <i style={this.style} className="fas fa-cog m-1 text-secondary"></i>
                    </div>
                </div>

                <div className="row bg-secondary text-white">
                    <div className="col-xs-12">
                        <h2 className='mx-2 p-1'>Sales call with Accenture</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-5 bg-light">
                        <h4 className='font-weight-normal mt-4'>Event Type</h4>
                        <h2 className='mb-4'>Sales meeting</h2>
                        <h4 className='font-weight-normal'>Created By</h4>
                        <h2 className='mb-4'>Alexia C.</h2>
                        <h4 className='font-weight-normal'>Assigned to</h4>
                        <h2 className='mb-4'>John T.</h2>
                        <h4 className='font-weight-normal'>Agenda</h4>
                        <h5 className='font-weight-light text-secondary mb-4'>Lorem isum dolor sit amet Necessitatibus eveniet doloribus aliquam exercitationem voluptatum, asperiores ullaam oafficia delectus a sapiente maxime laboriosam omnis! provident culpa magni est?</h5>
                        <h4 className='font-weight-normal'>Meeting notes</h4>
                        <h3 className='mb-4'><u>Sales call template</u></h3>
                        <h4 className='font-weight-normal'>Meeting location</h4>
                        <h3 className='mb-4'><u>View Map</u></h3>
                        <h4 className='font-weight-normal'>Meeting time</h4>
                        <h3>19 Aug 2019 @3PM</h3>
                    </div>

                    <div className="col-xs-12 col-sm-7">
                        <h5 className='bg-secondary rounded mt-5 p-2 text-center w-50 text-white'>18 Aug 2019</h5>
                        <div className='bg-light text-secondary rounded my-5 p-2 w-50 text-center'>
                            <h4>Event Created</h4>
                            <h5>2 hours ago</h5>
                        </div>
                        <div className='bg-light text-secondary rounded my-5 p-2 w-50 text-center'>
                            <h4>Assigned to John T.</h4>
                            <h5>2 hours ago</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SalesCall;
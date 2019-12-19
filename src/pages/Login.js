import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../App.css';

class Login extends Component {

    state = {
        loggedIn : false,
    }

    chkLogin = () =>
        {           
            this.setState({
                loggedIn : true
            })

        }
        
    render() { 

        let splash = {
            paddingTop : '25vh',
            margin : '0 auto',
            width : '22rem',        
        }

        if(this.state.loggedIn)
        {
            return <Redirect to = '/SideBar' />
        }
        return (    
            <div>
                <div style = {splash} className="splash-container">
                    <div className="card ">
                        <div className="card-header text-center"><h3>CMS Login</h3>
                            <span className="splash-description">Please enter your user information.</span>
                            </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input className="form-control" id="username" type="text" placeholder="Username"/>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="password" type="password" placeholder="Password"/>
                                </div>
                                <button type="button" onClick = { this.chkLogin } className="btn btn-primary btn-block my-3">Sign in</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
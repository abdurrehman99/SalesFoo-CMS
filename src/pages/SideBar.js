import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import Avatar from './images/user-avatar.png';

export default function SideBar() {

    var style = {
        boxShadow : '2px 2px 15px #888888',
    }
  return (
    <div>
        <nav style = {style} className="navbar navbar-expand-lg bg-white fixed-top">
            <a className="navbar-brand" href="#"><img alt=""/>Salesfoo CMS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto navbar-right-top">
                    <li className="nav-item">
                        <div id="custom-search" className="top-search-bar">
                            <input className="form-control" type="text" placeholder="Search" />
                        </div>
                    </li>
                    <li className="nav-item dropdown notification">
                        <a className="nav-link nav-icons" href="#" id="navbarDropdownMenuLink1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-fw fa-bell"></i> <span className="indicator"></span></a>
                        <ul className="dropdown-menu dropdown-menu-right notification-dropdown">
                            <li>
                                <div className="notification-title"> Notification</div>
                                <div className="slimScrollDiv"><div className="notification-list">
                                    <div className="list-group">
                                        <a href="#" className="list-group-item list-group-item-action active">
                                            <div className="notification-info">
                                                <div className="notification-list-user-img"><img src="../assets/images/avatar-2.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                <div className="notification-list-user-block"><span className="notification-list-user-name">Jeremy Rakestraw</span>accepted your invitation to join the team.
                                                    <div className="notification-date">2 min ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <div className="notification-info">
                                                <div className="notification-list-user-img"><img src="../assets/images/avatar-3.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                <div className="notification-list-user-block"><span className="notification-list-user-name">John Deo</span>is now following you
                                                    <div className="notification-date">2 days ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <div className="notification-info">
                                                <div className="notification-list-user-img"><img src="../assets/images/avatar-4.jpg" alt="" className="user-avatar-md rounded-circle"/></div>
                                                <div className="notification-list-user-block"><span className="notification-list-user-name">Monaan Pechi</span> is watching your main repository
                                                    <div className="notification-date">2 min ago</div>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#" className="list-group-item list-group-item-action">
                                            <div className="notification-info">
                                                <div className="notification-list-user-block"><span className="notification-list-user-name">Jessica Caruso</span>accepted your invitation to join the team.
                                                    <div className="notification-date">2 min ago</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div><div className="slimScrollBar"></div></div>
                            </li>
                            <li>
                                <div className="list-footer"> <a href="#">View all notifications</a></div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown connection">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-fw fa-th"></i> </a>
                        <ul className="dropdown-menu dropdown-menu-right connection-dropdown">
                            <li className="connection-list">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <a href="#" className="connection-item"><img src="../assets/images/github.png" alt=""/> <span>Github</span></a>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <a href="#" className="connection-item"><img src="../assets/images/dribbble.png" alt=""/> <span>Dribbble</span></a>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <a href="#" className="connection-item"><img src="../assets/images/dropbox.png" alt=""/> <span>Dropbox</span></a>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <a href="#" className="connection-item"><img src="../assets/images/bitbucket.png" alt=""/> <span>Bitbucket</span></a>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <a href="#" className="connection-item"><img src="../assets/images/mail_chimp.png" alt=""/><span>Mail chimp</span></a>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 ">
                                        <a href="#" className="connection-item"><img src="../assets/images/slack.png" alt=""/> <span>Slack</span></a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="conntection-footer"><a href="#">More</a></div>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown nav-user">
                    
                        <a className="nav-link" href="#" id="navbarDropdownMenuLink2" role='button' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="m-0 fa fa-user"></i></a>
                        <div className="dropdown-menu dropdown-menu-right nav-user-dropdown" aria-labelledby="navbarDropdownMenuLink2">
                            <div className="nav-user-info">
                                <h5 className="mb-0 text-white nav-user-name">John Deo</h5>
                                <span className="status"></span><span className="ml-2">Available</span>
                            </div>
                            <a className="dropdown-item" href="#"><i className="fas fa-user mr-2"></i>Account</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-cog mr-2"></i>Setting</a>
                            <a className="dropdown-item" href="#"><i className="fas fa-power-off mr-2"></i>Logout</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

        <div className="nav-left-sidebar sidebar-dark">
                <div className="menu-list">
                    <nav className="navbar navbar-expand-sm navbar-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav flex-column">
                                <li className="nav-divider">Menu</li>

                                <li className="nav-item ">
                                    <a className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-1" aria-controls="submenu-1">
                                    <i className="fas fa-users-cog"></i>Dashboard<span className="badge badge-success">6</span></a>   
                                </li>
                                
                                <li className="nav-item">
                                    <Link to="AddCustomer" className="nav-link" data-toggle="collapse" aria-expanded="false" data-target="#submenu-2" aria-controls="submenu-2">
                                    <i className="fas fa-user-friends"></i>
                                    Customer Management</Link>
                                    <div id="submenu-2" className="collapse submenu" >
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/cards.html">Cards <span className="badge badge-secondary">New</span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="pages/general.html">General</a>
                                            </li>
                                            
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link to='ViewCustomer' className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-3" aria-controls="submenu-3"><i className="fas fa-database">
                                    </i> Data Management</Link>
                                    <div id="submenu-3" className="collapse submenu" >
                                        
                                    </div>
                                </li>
                                
                                <li className="nav-item">
                                    <Link to ='DeActivate' className="nav-link" href="#" data-toggle="collapse" aria-expanded="false" data-target="#submenu-5" aria-controls="submenu-5">
                                    <i className="fas fa-tags"></i>Price Management</Link>
                                </li>
    
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </div>
  );
}

import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import {gettoken,getclientID} from "../httpservice/token";
const Header = () => {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const logout = async () => {

        setAuth({});
        navigate('/login');
        localStorage.removeItem('token');
        localStorage.removeItem('User');
        gettoken();
    }

  return (
    <div className="page-header navbar navbar-fixed-top">
    <div className="page-header-inner ">
        {/* <!-- logo start --> */}
        <div className="page-logo">
            <a href="index.html">
                <span className="logo-icon material-icons fa-rotate-45">school</span>
                <span className="logo-default">Smart</span> </a>
        </div>
        {/* <!-- logo end --> */}
        <ul className="nav navbar-nav navbar-left in">
            <li><a href="#" className="menu-toggler sidebar-toggler"><i className="icon-menu"></i></a></li>
        </ul>
        <form className="search-form-opened" action="#" method="GET">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search..." name="query"/>
                <span className="input-group-btn">
                    <a href="javascript:;" className="btn submit">
                        <i className="icon-magnifier"></i>
                    </a>
                </span>
            </div>
        </form>
        {/* <!-- start mobile menu --> */}
        <a className="menu-toggler responsive-toggler" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
            <span></span>
        </a>
        {/* <!-- end mobile menu -->
        <!-- start header menu --> */}
        <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
                <li><a className="fullscreen-btn"><i data-feather="maximize"></i></a></li>
                {/* <!-- start language menu --> */}
                <li className="dropdown language-switch">
                    <a className="dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"> <img src="../assets/img/flags/gb.png" className="position-left" alt=""/> English 
                    </a>
                    <ul className="dropdown-menu">
                        <li>
                            <a className="deutsch"><img src="../assets/img/flags/de.png" alt=""/> Deutsch</a>
                        </li>
                        <li>
                            <a className="ukrainian"><img src="../assets/img/flags/ua.png" alt=""/> Українська</a>
                        </li>
                        <li>
                            <a className="english"><img src="../assets/img/flags/gb.png" alt=""/> English</a>
                        </li>
                        <li>
                            <a className="espana"><img src="../assets/img/flags/es.png" alt=""/> España</a>
                        </li>
                        <li>
                            <a className="russian"><img src="../assets/img/flags/ru.png" alt=""/> Русский</a>
                        </li>
                    </ul>
                </li>
                {/* <!-- end language menu -->
                <!-- start notification dropdown --> */}
                <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                    <a className="dropdown-toggle" data-bs-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <i data-feather="bell"></i>
                        <span className="badge headerBadgeColor1"> 6 </span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="external">
                            <h3><span className="bold">Notifications</span></h3>
                            <span className="notification-label purple-bgcolor">New 6</span>
                        </li>
                        <li>
                            <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                                <li>
                                    <a href="javascript:;">
                                        <span className="time">just now</span>
                                        <span className="details">
                                            <span className="notification-icon circle deepPink-bgcolor"><i className="fa fa-check"></i></span>
                                            Congratulations!. </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <span className="time">3 mins</span>
                                        <span className="details">
                                            <span className="notification-icon circle purple-bgcolor"><i className="fa fa-user o"></i></span>
                                            <b>John Micle </b>is now following you. </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <span className="time">7 mins</span>
                                        <span className="details">
                                            <span className="notification-icon circle blue-bgcolor"><i className="fa fa-comments-o"></i></span>
                                            <b>Sneha Jogi </b>sent you a message. </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <span className="time">12 mins</span>
                                        <span className="details">
                                            <span className="notification-icon circle pink"><i className="fa fa-heart"></i></span>
                                            <b>Ravi Patel </b>like your photo. </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <span className="time">15 mins</span>
                                        <span className="details">
                                            <span className="notification-icon circle yellow"><i className="fa fa-warning"></i></span> Warning! </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                        <span className="time">10 hrs</span>
                                        <span className="details">
                                            <span className="notification-icon circle red"><i className="fa fa-times"></i></span> Application error. </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="dropdown-menu-footer">
                                <a href="javascript:void(0)"> All notifications </a>
                            </div>
                        </li>
                    </ul>
                </li>
                {/* <!-- end notification dropdown -->
                <!-- start message dropdown --> */}
                <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                    <a className="dropdown-toggle" data-bs-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <i data-feather="mail"></i>
                        <span className="badge headerBadgeColor2"> 2 </span>
                    </a>
                    <ul className="dropdown-menu">
                        <li className="external">
                            <h3><span className="bold">Messages</span></h3>
                            <span className="notification-label cyan-bgcolor">New 2</span>
                        </li>
                        <li>
                            <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                                <li>
                                    <a href="#">
                                        <span className="photo">
                                            <img src="../assets/img/user/user2.jpg" className="img-circle" alt=""/>
                                        </span>
                                        <span className="subject">
                                            <span className="from"> Sarah Smith </span>
                                            <span className="time">Just Now </span>
                                        </span>
                                        <span className="message"> Jatin I found you on LinkedIn... </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="photo">
                                            <img src="../assets/img/user/user3.jpg" className="img-circle" alt=""/>
                                        </span>
                                        <span className="subject">
                                            <span className="from"> John Deo </span>
                                            <span className="time">16 mins </span>
                                        </span>
                                        <span className="message"> Fwd: Important Notice Regarding Your Domain
                                            Name... </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="photo">
                                            <img src="../assets/img/user/user1.jpg" className="img-circle" alt=""/>
                                        </span>
                                        <span className="subject">
                                            <span className="from"> Rajesh </span>
                                            <span className="time">2 hrs </span>
                                        </span>
                                        <span className="message"> pls take a print of attachments. </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="photo">
                                            <img src="../assets/img/user/user8.jpg" className="img-circle" alt=""/>
                                        </span>
                                        <span className="subject">
                                            <span className="from"> Lina Smith </span>
                                            <span className="time">40 mins </span>
                                        </span>
                                        <span className="message"> Apply for Ortho Surgeon </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <span className="photo">
                                            <img src="../assets/img/user/user5.jpg" className="img-circle" alt=""/>
                                        </span>
                                        <span className="subject">
                                            <span className="from"> Jacob Ryan </span>
                                            <span className="time">46 mins </span>
                                        </span>
                                        <span className="message"> Request for leave application. </span>
                                    </a>
                                </li>
                            </ul>
                            <div className="dropdown-menu-footer">
                                <a href="#"> All Messages </a>
                            </div>
                        </li>
                    </ul>
                </li>
                {/* <!-- end message dropdown -->
                <!-- start manage user dropdown --> */}
                <li className="dropdown dropdown-user">
                    <a className="dropdown-toggle" data-bs-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <img alt="" className="img-circle " src="../assets/img/dp.jpg"/>
                        <span className="username username-hide-on-mobile"> 
                    </span></a>
                    <ul className="dropdown-menu dropdown-menu-default">
                        <li>
                            <a href="user_profile.html">
                                <i className="icon-user"></i> Profile </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-settings"></i> Settings
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="icon-directions"></i> 
                            </a>
                        </li>
                        <li className="divider"> </li>
                        <li>
                            <a href="lock_screen.html">
                                <i className="icon-lock"></i> Lock
                            </a>
                        </li>
                        <li>
                       
                            <button onClick={logout} className="dropdown-item"><i className="icon-logout"></i> Log Out</button>
                               
                        </li>
                    </ul>
                </li>
                {/* <!-- end manage user dropdown --> */}
                <li className="dropdown dropdown-quick-sidebar-toggler">
                    <a id="headerSettingButton" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                        <i className="material-icons">more_vert</i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default Header

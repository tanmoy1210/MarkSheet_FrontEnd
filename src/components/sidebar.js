import React from 'react'
import { Link } from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
        <div className="sidemenu-container navbar-collapse collapse fixed-menu">
            <div id="remove-scroll" className="left-sidemenu">
                <ul className="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed="200" >
                    <li className="sidebar-toggler-wrapper hide">
                        <div className="sidebar-toggler">
                            <span></span>
                        </div>
                    </li>
                    <li className="sidebar-user-panel">
                        <div className="sidebar-user">
                            <div className="sidebar-user-picture">
                                <img alt="image" src="../assets/img/dp.jpg"/>
                            </div>
                            <div className="sidebar-user-details">
                                <div className="user-name">Sneha Patel</div>
                                <div className="user-role">Administrator</div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item start ">
                        <a href="#" className="nav-link nav-toggle">
                            <i data-feather="airplay"></i>
                            <span className="title">Dashboard</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item   ">
                                <a href="index.html" className="nav-link ">
                                    <span className="title">Dashboard 1</span>
                                </a>
                            </li>
                            <li className="nav-item ">
                                <a href="dashboard2.html" className="nav-link ">
                                    <span className="title">Dashboard 2</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="dashboard3.html" className="nav-link ">
                                    <span className="title">Dashboard 3</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    
                    <li className="nav-item">
                    <Link to="/UserList" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">Users</span></Link>                 
                    </li>
                   
                    <li className="nav-item">
                    <Link to="/UserRoleList" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">User Roles</span></Link>                 
                    </li>

                    <li className="nav-item">
                    <Link to="/CasteCategoryList" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">Castes</span></Link>                 
                    </li>

                    <li className="nav-item">
                    <Link to="/BloodGroupList" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">Blood Groups</span></Link>                 
                    </li>

                    <li className="nav-item">
                    <Link to="/RelationList" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">Relations</span></Link>                 
                    </li>

                    <li>
                    <Link to="/Country" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">Country</span></Link>                  
                    </li>
                    <li className="nav-item">
                    <Link to="/State" className="nav-link nav-toggle"><i data-feather="calendar"></i> <span className="title">State</span></Link>                 
                    </li>

                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="user"></i>
                            <span className="title">Professors</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_professors.html" className="nav-link "> <span className="title">All
                                        Professors</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_professor.html" className="nav-link "> <span className="title">Add
                                        Professor</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_professor_bootstrap.html" className="nav-link "> <span className="title">Add Professor Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_professor.html" className="nav-link "> <span className="title">Edit
                                        Professor</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="professor_profile.html" className="nav-link "> <span className="title">About
                                        Professor</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"><i data-feather="users"></i>
                            <span className="title">Students</span><span className="selected"></span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_students.html" className="nav-link "> <span className="title">All
                                        Students</span>
                                </a>
                            </li>
                            <li className="nav-item active">
                                <a href="add_student.html" className="nav-link "> <span className="title">Add
                                        Student</span>
                                    <span className="selected"></span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_student_bootstrap.html" className="nav-link "> <span className="title">Add
                                        Student Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_student.html" className="nav-link "> <span className="title">Edit
                                        Student</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="student_profile.html" className="nav-link "> <span className="title">About
                                        Student</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="book"></i>
                            <span className="title">Courses</span> <span className="arrow"></span>
                            <span className="label label-rouded label-menu label-success">new</span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_courses.html" className="nav-link "> <span className="title">All
                                        Courses</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_course.html" className="nav-link "> <span className="title">Add
                                        Course</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_course_bootstrap.html" className="nav-link "> <span className="title">Add
                                        Course Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_course.html" className="nav-link "> <span className="title">Edit
                                        Course</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="course_details.html" className="nav-link "> <span className="title">About
                                        Course</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                     <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="book-open"></i>
                            <span className="title">Library</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_assets.html" className="nav-link "> <span className="title">All Library
                                        Assets</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_library.html" className="nav-link "> <span className="title">Add Library
                                        Asset</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_library_bootstrap.html" className="nav-link "> <span className="title">Add
                                        Asset Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_library.html" className="nav-link "> <span className="title">Edit
                                        Asset</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="briefcase"></i>
                            <span className="title">Departments</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_department.html" className="nav-link "> <span className="title">All
                                        Departments</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_department.html" className="nav-link "> <span className="title">Add
                                        Department</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_department_bootstrap.html" className="nav-link "> <span className="title">Add Department Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_department.html" className="nav-link "> <span className="title">Edit
                                        Department</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="smile"></i>
                            <span className="title">Staff</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_staffs.html" className="nav-link "> <span className="title">All
                                        Staff</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_staff.html" className="nav-link "> <span className="title">Add Staff</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_staff_bootstrap.html" className="nav-link "> <span className="title">Add
                                        Staff Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_staff.html" className="nav-link "> <span className="title">Edit
                                        Staff</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="staff_profile.html" className="nav-link "> <span className="title">Staff
                                        Profile</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="coffee"></i>
                            <span className="title">Holiday</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="all_holidays.html" className="nav-link "> <span className="title">All
                                        Holiday</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_holiday.html" className="nav-link "> <span className="title">Add
                                        Holiday</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_holiday_bootstrap.html" className="nav-link "> <span className="title">Add
                                        Holiday Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="edit_holiday.html" className="nav-link "> <span className="title">Edit
                                        Holiday</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle">
                            <i data-feather="mail"></i>
                            <span className="title">Email</span>
                            <span className="arrow"></span>
                            <span className="label label-rouded label-menu label-danger">new</span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="email_inbox.html" className="nav-link ">
                                    <span className="title">Inbox</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="email_view.html" className="nav-link ">
                                    <span className="title">View Mail</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="email_compose.html" className="nav-link ">
                                    <span className="title">Compose Mail</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="dollar-sign"></i>
                            <span className="title">Fees</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="fees_collection.html" className="nav-link "> <span className="title">Fees
                                        Collection</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_fees.html" className="nav-link "> <span className="title">Add Fees </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="add_fees_bootstrap.html" className="nav-link "> <span className="title">Add
                                        Fees Bootstrap</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="fees_receipt.html" className="nav-link "> <span className="title">Fee
                                        Receipt</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle"> <i data-feather="layout"></i>
                            <span className="title">Layouts</span> <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="layout_verticle.html" className="nav-link "> <span className="title">Verticle</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="layout_boxed.html" className="nav-link "> <span className="title">Boxed </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="layout_collapse.html" className="nav-link "> <span className="title">Collapse</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="layout_hover_menu.html" className="nav-link "> <span className="title">Hover
                                        Menu</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="layout_right_sidebar.html" className="nav-link "> <span className="title">Right
                                        Sidebar</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="widget.html" className="nav-link nav-toggle"> <i data-feather="gift"></i>
                            <span className="title">Widget</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle">
                            <i data-feather="copy"></i>
                            <span className="title">UI Elements</span>
                            <span className="label label-rouded label-menu label-warning">new</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="ui_buttons.html" className="nav-link ">
                                    <span className="title">Buttons</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_sweet_alert.html" className="nav-link ">
                                    <span className="title">Sweet Alert</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_tabs_accordions_navs.html" className="nav-link ">
                                    <span className="title">Tabs &amp; Accordions</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_typography.html" className="nav-link ">
                                    <span className="title">Typography</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="notification.html" className="nav-link ">
                                    <span className="title">Notification</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_icons.html" className="nav-link ">
                                    <span className="title">Icons</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_panels.html" className="nav-link ">
                                    <span className="title">Panels</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_grid.html" className="nav-link ">
                                    <span className="title">Grids</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_tree.html" className="nav-link ">
                                    <span className="title">Tree View</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="ui_carousel.html" className="nav-link ">
                                    <span className="title">Carousel</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link nav-toggle">
                            <i data-feather="layers"></i>
                            <span className="title">Material Elements</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="material_button.html" className="nav-link ">
                                    <span className="title">Buttons</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_tab.html" className="nav-link ">
                                    <span className="title">Tabs</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_chips.html" className="nav-link ">
                                    <span className="title">Chips</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_grid.html" className="nav-link ">
                                    <span className="title">Grid</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_icons.html" className="nav-link ">
                                    <span className="title">Icon</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_form.html" className="nav-link ">
                                    <span className="title">Form</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_datepicker.html" className="nav-link ">
                                    <span className="title">DatePicker</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_select.html" className="nav-link ">
                                    <span className="title">Select Item</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_loading.html" className="nav-link ">
                                    <span className="title">Loading</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_menu.html" className="nav-link ">
                                    <span className="title">Menu</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_slider.html" className="nav-link ">
                                    <span className="title">Slider</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_tables.html" className="nav-link ">
                                    <span className="title">Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_toggle.html" className="nav-link ">
                                    <span className="title">Toggle</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="material_badges.html" className="nav-link ">
                                    <span className="title">Badges</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle">
                            <i data-feather="server"></i>
                            <span className="title">Forms </span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="layouts_form.html" className="nav-link ">
                                    <span className="title">Form Layout</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="advance_form.html" className="nav-link ">
                                    <span className="title">Advance Component</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="wizard.html" className="nav-link ">
                                    <span className="title">Form Wizard</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="validation_form.html" className="nav-link ">
                                    <span className="title">Form Validation</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="editable_form.html" className="nav-link ">
                                    <span className="title">Editor</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle">
                            <i data-feather="grid"></i>
                            <span className="title">Data Tables</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="basic_table.html" className="nav-link ">
                                    <span className="title">Basic Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="advanced_table.html" className="nav-link ">
                                    <span className="title">Advance Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="export_table.html" className="nav-link ">
                                    <span className="title">Export Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="child_row_table.html" className="nav-link ">
                                    <span className="title">Child Row Tables</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="group_table.html" className="nav-link ">
                                    <span className="title">Grouping</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="tableData.html" className="nav-link ">
                                    <span className="title">Tables With Sourced Data</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle">
                            <i data-feather="pie-chart"></i>
                            <span className="title">Charts</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="charts_apexchart.html" className="nav-link ">
                                    <span className="title">Apex chart</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="charts_amchart.html" className="nav-link ">
                                    <span className="title">amChart</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="charts_plotly.html" className="nav-link ">
                                    <span className="title">Plotly Charts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="charts_echarts.html" className="nav-link ">
                                    <span className="title">eCharts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="charts_morris.html" className="nav-link ">
                                    <span className="title">Morris Charts</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="charts_chartjs.html" className="nav-link ">
                                    <span className="title">Chartjs</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle">
                            <i data-feather="map-pin"></i>
                            <span className="title">Maps</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="google_maps.html" className="nav-link ">
                                    <span className="title">Google Maps</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="vector_maps.html" className="nav-link ">
                                    <span className="title">Vector Maps</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle"> <i data-feather="anchor"></i>
                            <span className="title">Extra pages</span>
                            <span className="arrow"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item  ">
                                <a href="login.html" className="nav-link "> <span className="title">Login</span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="sign_up.html" className="nav-link "> <span className="title">Sign Up</span>
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a href="forgot_password.html" className="nav-link "> <span className="title">Forgot
                                        Password</span>
                                </a>
                            </li>
                            <li className="nav-item"><a href="user_profile.html" className="nav-link "><span className="title">Profile</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link "> <span className="title">Contact Us</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="lock_screen.html" className="nav-link "> <span className="title">Lock
                                        Screen</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="page-404.html" className="nav-link "> <span className="title">404 Page</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="page-500.html" className="nav-link "> <span className="title">500 Page</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="blank_page.html" className="nav-link "> <span className="title">Blank
                                        Page</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="javascript:;" className="nav-link nav-toggle">
                            <i data-feather="chevrons-down"></i>
                            <span className="title">Multi Level Menu</span>
                            <span className="arrow "></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i data-feather="alert-octagon"></i> Item 1
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item">
                                        <a href="javascript:;" className="nav-link nav-toggle">
                                            <i data-feather="aperture"></i> Arrow Toggle
                                            <span className="arrow "></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="nav-item">
                                                <a href="javascript:;" className="nav-link">
                                                    <i data-feather="battery"></i> Sample Link 1</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i data-feather="award"></i> Sample Link 2</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="#" className="nav-link">
                                                    <i data-feather="box"></i> Sample Link 3</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i data-feather="clock"></i> Sample Link 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i data-feather="database"></i> Sample Link 2</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i data-feather="edit"></i> Sample Link 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="javascript:;" className="nav-link nav-toggle">
                                    <i data-feather="folder"></i> Arrow Toggle
                                    <span className="arrow"></span>
                                </a>
                                <ul className="sub-menu">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i data-feather="film"></i> Sample Link 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i data-feather="file"></i> Sample Link 1</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            <i data-feather="heart"></i> Sample Link 1
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i data-feather="lock"></i> Item 3 </a>
                            </li>
                        </ul>
                    </li> 
                </ul>
            </div>
        </div>
    </div>
  )
}

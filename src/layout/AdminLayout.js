import React, { useReducer } from 'react'
import "../assets/css/styles.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "bootstrap"
import { Outlet, NavLink, Navigate, useNavigate } from 'react-router-dom'
import { initialState } from '../adminReducer/AdminReducer'

const AdminLayout = () => {



    
    let navigate = useNavigate()
    // let localUser = JSON.parse(localStorage.getItem("user_info"))
    // console.log(localUser.name)


    let togleSidebar = (e) => {
        e.preventDefault()
        document.body.classList.toggle('sb-sidenav-toggled');
        // localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));

    }
    return (
        <>
            <div>
                <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                    {/* Navbar Brand*/}
                    <NavLink className="navbar-brand ps-3" to={"/admin"}>Admin Panel</NavLink>
                    {/* Sidebar Toggle*/}
                    <button onClick={togleSidebar} className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars" /></button>
                    {/* Navbar Search*/}
                    <div className="d-none d-md-inline-block form-inline ms-auto me-0  my-2 my-md-0">



                    </div>
                    Navbar
                    <ul className="  navbar-nav  ms-md-0 me-3 me-lg-4 ">
                        <li className="nav-item dropdown ms-auto" >
                            <a className="nav-link dropdown-toggle " style={{}} id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-user fa-fw" /> admin
                                {/* {
                                    localUser.name
                                } */}
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                                <li><NavLink className="dropdown-item" to={"/admin"} onClick={(e) => {
                                    e.preventDefault()
                                    // localStorage.clear()
                                    navigate("/")

                                }}>Logout</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                            <div className="sb-sidenav-menu">
                                <div className="nav">
                                    <NavLink className="nav-link" to="/admin/profile">
                                        <div className="sb-nav-link-icon"><i className="fas fa-images" /></div>
                                        MyProfile
                                    </NavLink>
                                    <NavLink className="nav-link" to="/admin">
                                        <div className="sb-nav-link-icon"><i className="fas fa-images" /></div>
                                        Dashboard
                                    </NavLink>

                                    {/* <NavLink className="nav-link ms-1" to="/admin/brand">
                                        <div className="sb-nav-link-icon"><i className="fas fa-b" /></div>
                                        Brand
                                    </NavLink>
                                    <NavLink className="nav-link" to="/admin/category">
                                        <div className="sb-nav-link-icon"><i className="fas fa-sitemap" /></div>
                                        category
                                    </NavLink>
                                    <a className="nav-link" href="index.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-shopping-bag" /></div>
                                        products
                                    </a>
                                    <a className="nav-link" href="index.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-users" /></div>
                                        users
                                    </a>
                                    <a className="nav-link" href="index.html">
                                        <div className="sb-nav-link-icon"><i className="fas fa-shopping-cart" /></div>
                                        orders
                                    </a> */}


                                </div>
                            </div>
                            <div className="sb-sidenav-footer">
                                <div className="small">Logged in as: admin</div>
                                {/* {state.admin.name} */}
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <main>
                            <Outlet />
                        </main>
                        <footer className="py-4 bg-light mt-auto">
                            <div className="container-fluid px-4">
                                <div className="d-flex align-items-center justify-content-between small">
                                    <div className="text-muted">Copyright © Your Website 2022</div>
                                    <div>
                                        <a href="#">Privacy Policy</a>
                                        ·
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminLayout
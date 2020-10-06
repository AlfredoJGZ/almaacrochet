import React , {Component} from "react";
import {NavLink} from "react-router-dom";
import { Button, Collapse} from 'react-bootstrap';

class Navbar extends Component {

    btnInactive = "d-flex align-items-center pr-1 pl-0 py-3 rounded d-md-none"
    btnActive = "d-flex align-items-center pr-1 pl-0 py-3 rounded d-md-none btn-active"

    state = {
        show: false,
        btnActive: this.btnInactive
    }

    changeState(){
        this.setState({
            show : !this.state.show,
            btnActive : this.state.show === true ? this.btnInactive : this.btnActive 
        })
    }

    render(){
        return(
            <>
                <div className="fixed-top">  
                    <nav className="navbar bg-light d-flex main-container mobile-menu">

                    <Button
                        onClick={() => this.changeState()}
                        aria-controls="collapse"
                        aria-expanded={this.state.show}
                        variant="none"
                        bsPrefix="none"
                        className={this.state.btnActive}
                    >
                        <i className="fas fa-bars"></i>
                    </Button>

                        <nav className="bg-light d-none d-md-inline-block">
                            <ul className="nav text-center" style={{fontSize: 1.5 + "rem"}}>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="tienda" className="nav-link">Ir a tienda</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="blog.html" className="nav-link">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="quienes-somos.html" className="nav-link">Quienes somos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="registrarse.html" className="nav-link">Registrarse</NavLink>
                                </li>
                        </ul>
                        </nav>
                        <div className="social-media">
                            <a className="mr-2" href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                            <a className="mr-2" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                            <a className="mr-2" href="https://pinterest.com"><i className="fab fa-pinterest"></i></a>
                            <a href="https://youtube.com"><i className="fab fa-youtube"></i></a>
                        </div>
                    </nav>

                <Collapse in={this.state.show}>
                
                    <div id="collapse">
                        <nav className="bg-light">
                            <ul className="nav flex-column text-center" style={{fontSize: 2 + "rem"}}>
                                <li className="nav-item">
                                    <NavLink onClick={() => this.changeState()} to="/" className="nav-link">Inicio</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => this.changeState()} to="tienda" className="nav-link">Ir a tienda</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => this.changeState()} to="blog" className="nav-link">Blog</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => this.changeState()} to="quienes-somos" className="nav-link">Quienes somos</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={() => this.changeState()} to="registrarse" className="nav-link">Registrarse</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                
                </Collapse>

            </div>
          </>
        )
    }
}

export default Navbar; 
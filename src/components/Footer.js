import React , {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <>
            <nav className="mt-4 px-2 py-2">
                <ul className="nav flex-column text-center">
                    <li className="nav-item zi-1030"><a className="nav-link text-white w-auto" href="terminos-y-condiciones.html">Términos y condiciones</a></li>
                    <li className="nav-item zi-1030"><a className="nav-link text-white" href="terminos-y-condiciones.html">Aviso legal</a></li>
                    <li className="nav-item zi-1030"><a className="nav-link text-white" href="terminos-y-condiciones.html">Contacto</a></li>
                </ul>
            </nav>
            <div className="text-white text-center" style={{fontSize: 2 + "rem"}}>
                <i className="fab fa-cc-visa"></i>
                <i className="fab fa-cc-mastercard ml-2"></i>
                <i className="fab fa-paypal ml-2"></i>
            </div>
            <footer>
                <p className="text-center text-white font-weight-light my-0 px-2 py-2">ALMA A CROCHET - 2020</p>
            </footer>
            </>
        )
    }
}

export default Footer;  
import React , {Component} from 'react';
import almaacrochetLogo from '../assets/images/almaacrochet.svg';
class Register extends Component {
    render(){
        return(
            <>
                <img src={almaacrochetLogo} alt="Logo Alma a crochet" className="flex-fill" />
                <form className="d-flex flex-fill flex-column justify-content-center p-4 mt-4 mb-lg-4 rounded" action="">
                    <h3 className="text-center fc-main">Registrate!!!</h3>
                    <div>
                        <label className="mb-1" htmlFor="user">Usuario</label>
                        <input className="w-100 rounded py-1 px-2" type="name" id="user" required />
                    </div>
                    <div className="mt-1 mb-2">
                        <label className="mb-1" htmlFor="email">Correo</label>
                        <input className="w-100 rounded py-1 px-2" type="email" id="email" required />
                    </div>
                    <p className="fc-main text-center" style={{fontSize: 1.2 + "rem"}}>*Tus datos estarán protegidos y no serán publicados de ninguna manera*</p>
                    <button className="w-100 mt-1 rounded bg-white" type="submit">Listo</button>
                </form>
            </>
        )
    }
}

export default Register; 
import React , {Component} from 'react';
import StoreImg from '../assets/images/almaacrochet.svg';

class StoreHeader extends Component {
    render(){
        return(
            <div className="d-flex flex-column justify-content-center align-items-center" style={{paddingTop: 4.5 + "rem"}}>
                <img className="mt-4" src={StoreImg} alt="Logo de Alma a crochet" />
                <p className="mt-4 mb-2 fc-main" style={{fontSize: 2 + "rem"}}>Tienda</p>
            </div>
        )
    }
}

export default StoreHeader; 
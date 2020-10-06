import React , {Component} from 'react';
import alpargata from '../assets/images/ALPARGATA-LADY-SHOP-1-600x600.jpg';
class Sales extends Component {
    render(){
        return(
            <>
                <h2 className="text-center fc-main">Ofertas</h2>
                <div className="items">
                    <main className="card mt-2">
                        <img src={alpargata} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="#" className="fc-sec">Nombre de producto</a>
                            <p className="fc-main mt-2">precio</p>
                        </div>
                    </main>
                    <div className="card mt-2">
                        <img src={alpargata} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="#" className="fc-sec">Nombre de producto</a>
                            <p className="fc-main mt-2">precio</p>
                        </div>
                    </div>
                    <div className="card mt-2">
                        <img src={alpargata} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="#" className="fc-sec">Nombre de producto</a>
                            <p className="fc-main mt-2">precio</p>
                        </div>
                    </div>
                    <div className="card mt-2">
                        <img src={alpargata} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <a href="#" className="fc-sec">Nombre de producto</a>
                            <p className="fc-main mt-2">precio</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Sales; 
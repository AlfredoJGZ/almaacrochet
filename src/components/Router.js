import React , {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import {Collapse , Fade , Button} from 'react-bootstrap';
import axios from 'axios';
import Global from "../Global";
import Navbar from './Navbar'; 
import CarouselHero from './CarouselHero'; 
import Items from './Items'; 
import Register from './Register'; 
import StoreHeader from './StoreHeader'; 
import Loading from './Loading';
import Filters from './Filters';
import SideFilters from './SideFilters';
import Gallery from './Gallery';
import alpargata from '../assets/images/ALPARGATA-LADY-SHOP-1-600x600.jpg';

class Router extends Component {

    notPressed = "navbar-toggler collapsed d-flex justify-content-between h-auto p-2 shadow fc-main"
    onPressed = "navbar-toggler collapsed d-flex justify-content-between h-auto p-2 shadow fc-main on-press"

    state = {
        items: [],
        status: null,
        blkScreen: false,
        cart: false,
        cartBtn: this.notPressed,
        filterOn: false,
        filter: {
            articulo:"todo",
            precio: 30.99,
            size: "s"
        }
    }

    url = Global.url;

    componentDidMount(){
        axios.get(this.url+"items/")
            .then(res => {
                this.setState({
                    items: res.data,
                    status: "success"
                })
            })
    }; 

    blkScreen = (show) =>{
        this.setState({
            blkScreen: !show,
            filterOn: !show
        })
    }

    filters = (aplyFilter) => {
        this.setState({
            filter: aplyFilter
        })
    }

    showCart = () =>{
        this.setState({
            cart: !this.state.cart,
            blkScreen: !this.state.cart,
            cartBtn: this.state.cart === true ? this.notPressed : this.onPressed 
        })
    }

    render(){

        return(
            <BrowserRouter>
                <Route exact path="/tienda" render={()=>(
                    <Fade in={this.state.blkScreen}>
                        <div className={this.state.blkScreen === true ? "black-screen z-top" : "black-screen"}>
                        </div>
                    </Fade>
                )}/>
                <header className="App-header">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={CarouselHero} />
                    </Switch>
                </header>
                <Switch>
                    {/*RUTA PARA PAGINA DE INICIO*/}
                    <Route exact path="/" render={()=>(
                        <>
                            <main className="mt-4 container">    
                                {
                                    this.state.status != null ? <Items title="Lo más vendido" items={this.state.items}/> :
                                    <>
                                        <h2 className="text-center fc-main">Lo más vendido</h2>
                                        <Loading />
                                    </>
                                }
                            </main>
                            <section className="mt-4 container d-flex flex-lg-row justify-content-lg-between flex-column justify-content-center">
                                <Register />
                            </section>
                            <section className="mt-4 container">
                                {
                                    this.state.status != null ? <Items title="Mejores ofertas" items={this.state.items}/> : 
                                    <>
                                        <h2 className="text-center fc-main">Mejores ofertas</h2>
                                        <Loading />
                                    </>
                                }
                            </section>
                        </>
                    )}/>
                    <Route exact path="/tienda" render={()=>(
                        <>
                        <StoreHeader />
                            <main className="d-md-flex container"> 

                                <Filters blkScreen={this.blkScreen} cart={this.state.cart}/>

                                <div className={this.state.filterOn === true ? "bg-light text-center rounded cart-button zi-1030" :
                                     "bg-light text-center rounded z-1032 cart-button"}>
                                
                                    <Button
                                        onClick={() => this.showCart()}
                                        aria-controls="show-cart"
                                        aria-expanded={this.state.cart}
                                        variant="none"
                                        bsPrefix="none"
                                        className={this.state.cartBtn}
                                    >
                                        <i style={{fontSize: 1 + "rem"}} className="fas fa-shopping-cart"></i>
                                    </Button>

                                </div>

                                <Collapse in={this.state.cart}>
                                    <div className="cart-list bg-light rounded ml-auto mr-auto p-2 z-1032" style={{width: 90+"%" , position: "absolute" , top: 6.5 + "rem", left: `calc(${10}% / 2)`}}>
                                        <div className="text-center bg-light" id="show-cart">
                                            <div className="d-flex w-100 mb-3">
                                                <img className="rounded" src={alpargata} alt="" />
                                                <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
                                                    <p className="fc-sec m-0">Nombre del articulo</p>
                                                    <p className="fc-main m-0">Precio</p>
                                                    <p className="fc-sec mb-0">cantidad</p>
                                                </div>
                                            </div> 

                                            <div className="d-flex w-100 mb-3">
                                                <img className="rounded" src={alpargata} alt="" />
                                                <div className=" w-100 d-flex flex-column justify-content-center align-items-center">
                                                    <p className="fc-sec m-0">Nombre del articulo</p>
                                                    <p className="fc-main m-0">Precio</p>
                                                    <p className="fc-sec mb-0">cantidad</p>
                                                </div>
                                            </div>

                                            <p className="text-left fc-sec mt-4 subtotal">Subtotal</p> 
                                            <p className="text-left fc-main">precio subtotal</p>
                                            <a style={{fontSize: 1.5 + "rem"}} className="d-inline-block px-2 py-1 goto-cart rounded fc-main" href="#">
                                                <i style={{fontSize: 1 + "rem"}} className="far fa-credit-card mr-1"></i>
                                                Comprar
                                            </a>
                                        </div>   
                                    </div>
                                </Collapse>

                                <div className="d-md-flex w-100">
                                    <SideFilters filter={this.filters}/>
                                    {
                                        this.state.status != null ?
                                        <Gallery items={this.state.items} filter={this.state.filter}/> :
                                        <Loading />
                                    }
                                </div>

                            </main>
                        </>
                    )}/>
                </Switch>      
            </BrowserRouter>
        )
    }
}

export default Router; 

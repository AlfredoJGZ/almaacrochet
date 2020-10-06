import React , {Component} from 'react'; 
import { Collapse , Button } from 'react-bootstrap';

class Filters extends Component {

    btnNotPressed = "navbar-toggler d-flex justify-content-between h-auto p-2 shadow fc-main"
    btnPressed = "navbar-toggler d-flex justify-content-between h-auto p-2 shadow on-press"

    state = {
        show: false,
        btn: this.btnNotPressed,
        btnArticles: true,
        btnPrices: false,
        btnSizes: false
    }

    changeState(){
        this.setState({
            show : !this.state.show,
            btn : this.state.show === true ? this.btnNotPressed : this.btnPressed 
        })
        this.props.blkScreen(this.state.show) 
    }

    changeArticles(){
        this.setState({
            btnArticles: !this.state.btnArticles
        })
    }

    changePrices(){
        this.setState({
            btnPrices: !this.state.btnPrices
        })
    }

    changeSizes(){
        this.setState({
            btnSizes: !this.state.btnSizes
        })
    }

    render(){
        return(
            <>
                <div className={this.props.cart === true ? "bg-light text-center rounded search d-md-none w-auto z-1" : "bg-light text-center rounded search d-md-none w-auto z-1032"} 
                style={{position: "fixed" , top: 4 + "rem" ,  left: `calc(${10}% / 2)`}}>

                    <Button
                        onClick={() => this.changeState()}
                        aria-controls="collapse-filters"
                        aria-expanded={this.state.show}
                        variant="none"
                        bsPrefix="none"
                        className={this.state.btn}
                    >
                        <i style={{fontSize: 1 + "rem"}} className="fas fa-search"></i>
                    </Button>

                </div>

                <Collapse in={this.state.show}>
                    <div className="side-filters d-md-none bg-light rounded ml-auto mr-auto z-1032 p-2" id="colapse-filters" style={{width: 90 + "%" , position: "absolute" , top: 6.5 + "rem" , left: `calc(${10}% / 2)`}}>
                        <div className="text-center bg-light">

                            <Button
                                onClick={() => this.changeArticles()}
                                aria-controls="collapse-articles"
                                aria-expanded={this.state.btnArticles}
                                variant="none"
                                bsPrefix="none"
                                className={"navbar-toggler d-flex justify-content-between filter mx-auto px-4 mb-2 w-100 fc-main rounded-0"}
                            >
                                <p className="d-inline-block ">Artículos</p>
                                <i style={{fontSize: 1 + "rem"}} className="fas fa-chevron-down"></i>
                            </Button>

                            <Collapse in={this.state.btnArticles}>
                                <div className="text-left px-2" id="collapse-articles">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked/>
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                    Todo
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                    <label className="form-check-label" htmlFor="exampleRadios2">
                                    Ropa
                                    </label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                    <label className="form-check-label" htmlFor="exampleRadios3">
                                    Artículos
                                    </label>
                                </div>
                            </div>
                            </Collapse>

                            <Button
                                onClick={() => this.changePrices()}
                                aria-controls="collapse-prices"
                                aria-expanded={this.state.btnPrices}
                                variant="none"
                                bsPrefix="none"
                                className={"navbar-toggler d-flex justify-content-between filter mx-auto px-4 mb-2 w-100 fc-main rounded-0"}
                            >
                                <p className="d-inline-block">Precio</p>
                                <i style={{fontSize: 1 + "rem"}} className="fas fa-chevron-down"></i>
                            </Button>

                            <Collapse in={this.state.btnPrices}>
                                <div className="text-left px-2" id="collapse-prices">
                                    <div className="form-group mb-3">
                                        <label htmlFor="formControlRange">Example Range input</label>
                                        <input type="range" className="form-control-range" id="formControlRange" />
                                    </div>
                                </div>
                            </Collapse>

                            <Button
                                onClick={() => this.changeSizes()}
                                aria-controls="collapse-sizes"
                                aria-expanded={this.state.btnSizes}
                                variant="none"
                                bsPrefix="none"
                                className={"navbar-toggler d-flex justify-content-between filter mx-auto px-4 mb-3 w-100 fc-main rounded-0"}
                            >
                                <p className="d-inline-block">Talla</p>
                                <i style={{fontSize: 1 + "rem"}} className="fas fa-chevron-down"></i>
                            </Button>

                            <Collapse in={this.state.btnSizes}>
                                <div className="text-left px-2" id="collapse-sizes">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" defaultChecked />
                                        <label className="form-check-label" htmlFor="exampleRadios1">
                                        s
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" htmlFor="exampleRadios2">
                                        m
                                        </label>
                                    </div>
                                    <div className="form-check mb-3">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                                        <label className="form-check-label" htmlFor="exampleRadios3">
                                        l
                                        </label>
                                    </div>
                                </div>
                            </Collapse>

                            <div className="w-100 d-flex justify-content-around">
                                <button className="filter fc-main rounded" style={{border: 1+"px solid var(--sec-color)"}}>
                                    <p className="mb-0">Aplicar filtro</p>
                                </button>
                                <button className="filter fc-main rounded" style={{border: 1+"px solid var(--sec-color)"}}>
                                    <p className="mb-0">Borrar filtros</p>
                                </button>
                            </div>
                        </div>  
            </div>
                </Collapse>
            </>
        )
    }
}

export default Filters; 
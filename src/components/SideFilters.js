import React , {Component} from 'react'; 
import { Collapse , Button } from 'react-bootstrap';


class SideFilters extends Component{

    state = {
        show: false,
        btn: this.btnNotPressed,
        btnArticles: true,
        btnPrices: false,
        btnSizes: false,
        filters: {
            articulo:"todo",
            precio: 30.99,
            size: "s"
        }
    }


    handleFilter(event) {
        let value = event.target.value
        let name = event.target.name

        this.setState(prevState => ({
            filters: {
                ...prevState.filters,
                [name]: value
            }
        }))
        setTimeout(()=>{
            this.props.filter(this.state.filters)
        }, 10)
        
        
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
            <div className="side-filters mr-4 zi-2">

                <div className="d-none d-md-flex justify-content-center fc-main mb-2">
                    <i style={{fontSize: 1.5 + "rem"}} className="fas fa-search pt-1"></i> 
                    <h3 className="text-center fc-main ml-2">Filtrar</h3>            
                </div>

                <div className="collapse show text-center d-none d-md-block" id="navbarToggleFilters">

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
                                <input className="form-check-input" type="radio" name="articulo" id="todo" value="todo" defaultChecked onChange={this.handleFilter.bind(this)} />
                                <label className="form-check-label" htmlFor="todo">
                                    Todo
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="articulo" id="ropa" value="ropa" onChange={this.handleFilter.bind(this)} />
                                <label className="form-check-label" htmlFor="ropa">
                                    Ropa
                                </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="articulo" id="articulo" value="articulo" onChange={this.handleFilter.bind(this)} />
                                <label className="form-check-label" htmlFor="articulo">
                                    Accesorios
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
                                <label htmlFor="formControlRange">{this.state.filters.precio + "$"}</label>
                                <input type="range" min="10.99" max="30.99" className="form-control-range" name="precio" id="formControlRange" onChange={this.handleFilter.bind(this)}/>
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
                        <div className="text-left px-2" id="collapse-sizes" disabled>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="size" id="size1" onChange={this.handleFilter.bind(this)} value="s" disabled={this.state.filters.articulo === "articulo" ? true : false} />
                                <label className="form-check-label" htmlFor="size1">
                                s
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="size" id="size2" onChange={this.handleFilter.bind(this)} value="m" disabled={this.state.filters.articulo === "articulo" ? true : false} />
                                <label className="form-check-label" htmlFor="size2">
                                m
                                </label>
                            </div>
                            <div className="form-check mb-3">
                                <input className="form-check-input" type="radio" name="size" id="size3" onChange={this.handleFilter.bind(this)} value="l" disabled={this.state.filters.articulo === "articulo" ? true : false} />
                                <label className="form-check-label" htmlFor="size3">
                                l
                                </label>
                            </div>
                        </div>
                    </Collapse>
                </div>                 
            </div>
        )
    }
}

export default SideFilters; 
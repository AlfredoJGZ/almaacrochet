import React , {Component} from 'react';
import axios from "axios";
import Global from "../Global";

class BestSellers extends Component{

    state = {
        loading : true,
        items : []
    };

    url = Global.url;
    

    componentDidMount(){
        axios.get(url + "items/")
            .then(res => {
                this.setState({
                    loading: false,
                    items: res.data
                })
                console.log(this.state)
            })
    }; 

    render(){
        
        if(this.state.loading){
            return(
                <>
                    <h2 className="text-center fc-main">Lo más vendido</h2>
                    <div className="loading">
                        <div className="spinner-border" style={{width: 3 +"rem" , height: 3 + "rem"}} role="status">
                            <span className="sr-only mx-auto">Loading...</span>
                        </div>
                        <p className="fc-main mt-4" style={{fontSize: 1.2 +"rem"}}>Cargando artículos</p>
                    </div>   
                </>
            )
        } else if (this.state.items.length < 4){
            return(
                <h3> NO SE HAN CONSEGUIDO ITEMS PARA MOSTRAR</h3>
            )
        }

        return(
            <>
            <h2 className="text-center fc-main">Lo más vendido</h2>
                <div className="items">
                {this.state.items.map((item)=>{
                    return(
                        <div className="card mt-2" key={item._id}>
                            <img src={require("../assets/images/" + item.img)} className="card-img-top" alt="..." />
                        <div className="card-body">
                                <a href="#" className="fc-sec">{item.name}</a>
                                <p className="fc-main mt-2">{item.price + " $"}</p>
                            </div>
                        </div>
                    )
                })}

                </div>
            </>
        )
    }
}

export default BestSellers;
import React , {Component} from 'react'; 

class Gallery extends Component{

  state = {
    items : []
  }

  componentDidMount(){
    this.setState({
      items: this.props.items 
    })
  }

    render(){
        console.log(this.props.filter)
        return(
            <div className="gallery items w-100">
                {this.state.items.map((item)=>{
                    if(item.cat === this.props.filter.articulo || this.props.filter.articulo === "todo"){
                        if(item.size.indexOf(this.props.filter.size) > -1 || this.props.filter.articulo === "todo" || this.props.filter.articulo === "articulo"){
                            if(parseFloat(item.price) <= this.props.filter.precio){
                                return(
                                    <div className="card mt-2" key={item._id}>
                                        <img src={require("../assets/images/" + item.img)} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                            <a href="#" className="fc-sec">{item.name}</a>
                                            {item.sale > 0 ? 
                                                <>
                                                <p className="fc-main mt-2" style={{textDecoration:"line-through"}}>{item.price + " $"}</p>
                  
                                                <span className="fc-main" style={{fontSize:1.5 + "rem"}}>
                                                    {(item.price * (1-item.sale/100)).toFixed(2) + " $"}
                                                </span>
                                                </>
                                                :
        
                                                <p className="fc-main mt-2 ">{item.price + " $"}</p>
                                            }     
                                        </div>
                                    </div>
                                )
                            }
                            
                        }    
                    }
                })}
            </div>
        )
    }
}
export default Gallery
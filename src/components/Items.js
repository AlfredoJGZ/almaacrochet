import React , {Component} from 'react';

class Items extends Component{

    state = {
        items : []
    }

    componentDidMount(){
        if(this.props.title === "Lo más vendido"){
            this.setState({
                items: Array.from(this.props.items).sort(function(a,b){
                    if (a.sold < b.sold) {
                        return 1;
                      }
                      if (a.sold > b.sold) {
                        return -1;
                      }
                      // a must be equal to b
                      return 0;
                }).slice(0,4)
            })
        } else {
            this.setState({
                items: Array.from(this.props.items).sort(function(a,b){
                    if (a.sale < b.sale) {
                        return 1;
                      }
                      if (a.sale > b.sale) {
                        return -1;
                      }
                      // a must be equal to b
                      return 0;
                }).slice(0,4)
            })
        } 
    }

    render(){
        if(this.state.items.length >= 4){
            return(
                <>
                <h2 className="text-center fc-main">{this.props.title}</h2>
                    <div className="items">
                    {this.state.items.map((item)=>{
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
                    })}
                    </div>
                </>
            )
        } else {
            return(
                <h3>NO HAY NADA</h3>
            )
        }
    }   
}

export default Items;
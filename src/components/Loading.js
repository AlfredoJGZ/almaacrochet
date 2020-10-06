import React , {Component} from 'react'; 

class Loading extends Component {
    render(){  
        return(
            <>
                
                <div className="loading w-100">
                    <div className="spinner-border" style={{width: 3 +"rem" , height: 3 + "rem"}} role="status">
                        <span className="sr-only mx-auto">Loading...</span>
                    </div>
                    <p className="fc-main mt-4" style={{fontSize: 1.2 +"rem"}}>Cargando artículos</p>
                </div>   
            </>
        )
    }
}

export default Loading; 
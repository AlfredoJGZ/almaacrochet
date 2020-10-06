import React , {Component} from 'react';
import {NavLink} from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import hero from '../assets/images/almaacrochet-hero.svg';

class CarouselHero extends Component {
    render(){
        return(
            <div className="carousel-container" style={{position: "relative"}}>

                <Carousel 
                    indicators={false} 
                    nextIcon={false} 
                    prevIcon={false} 
                    controls={false} 
                    className="carousel main-container"
                >
                    <Carousel.Item>
                        <div className="carousel-01">
                        </div>       
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-02">
                        </div>       
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-03">
                        </div>       
                    </Carousel.Item>
                </Carousel>         
                <div className="position-absolute w-100 h-100 d-flex flex-column justify-content-center align-items-center" style={{top:"0"}}>              
                    <img className="hero" src={hero} alt="hero alma a crochet" />
                    <NavLink to="tienda" className="border border-white d-block w-auto px-4 py-2 mt-4 rounded" style={{fontSize: 1.5 + "rem"}}>Ir a tienda</NavLink>
                </div>
                
            </div>
          
        )
    }
}

export default CarouselHero; 
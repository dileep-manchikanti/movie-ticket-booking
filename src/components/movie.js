import React, { Component, useState } from "react";
import {useLocation} from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai'
import {Card,CardBody,CardText,CardImg,CardTitle,CardImgOverlay, Modal, ModalHeader} from 'reactstrap';
import { getIdTokenResult } from "firebase/auth";
function Movie(props) {
    const location=useLocation();
    const  params=location.state;
    const movie=params.movie;
    function getgenres(){
        var genres="";
        movie.genres.forEach(element => {
            genres+=element.name+"   ";
        });
        return genres;
    }
    return(
        <div className="outline">
            <div className="movie">
            <Card className="cardMovie">
            <CardImg  height="100%" width="60%" src={movie.image}></CardImg>
            </Card>
            </div>
            <div className="info">
                <h1 className="text-center">{movie.titleOriginal}</h1>
                <div className="rating"><AiFillHeart />   {movie.rating}</div>
                <div className="review">
                    Add your rating and review<br></br>
                    Your ratings matter<br></br>
                    <button className="btn  rate">Rate Movie</button>
                </div>
                <div className="genres">
                    {getgenres()}
                </div>
                <div className="description">
                    <h2>About Movie</h2>
                    {movie.description}
                </div>
                <button className="btn btn-primary book">Book Tickets</button>
            </div>
            </div>
    );
}


export default Movie;
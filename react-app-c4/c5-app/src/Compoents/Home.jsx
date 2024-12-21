import Nav from "./Nav";
import img from"../images/brim.jpg";
import React, { Component } from 'react'
import About from "./About";
import { Link } from "react-router-dom";


export default function Home(){
    return (
        <>
            <Nav />
            <div className="container mt-5  gap-5"  style={{marginBottom:"15rem"}}>
                <div className="row" style={{height:"60vh"}}>
                    <div className="w-40 col-md">
                        <h1 className="">The Ultmate soloution to your security problems</h1>
                        <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente nemo distinctio excepturi, itaque, nam voluptas ad beatae suscipit doloremque dolorem ipsum cumque magni voluptates facilis fugiat ratione corrupti at non.</p>
                        <Link className="btn btn-warning justify-self-end" to="/services">Servecis</Link>
                        <Link type="button" class="btn btn-link" to="/products" style={{marginLeft:"5rem"}}>Products</Link>
                    </div>
                    <div className="col-md">
                        <img src={img} className="" style={{width:"100%"}} alt="hero img" />
                    </div>
                </div>
            </div> 
                <About style={{marginBottom:"15rem"}}/>
        </>
    );
}

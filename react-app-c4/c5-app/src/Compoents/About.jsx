import React from 'react'
import img from"../images/brim.webp";
import { Link } from 'react-router-dom';

function About() {
    return (
    <>
        <div class="row justify-content-spaceBetween align-items-center mb-5 " style={{height:"100vh",marginTop:"-10rem",marginBottom:"25vh"}}>
            <h1 className='' style={{paddingLeft:"5rem", marginBottom:"5rem"}}>AboutUs</h1>
            <div class="col-md " style={{ }}>
                <img src={img} className=" rounded-full " style={{width:"30%", borderRadius:"50%", marginLeft:"35%"}} alt="Testemonial img" />
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>Define you'r problem</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Our Team of proffisionals will help you identfy your weak points
                    </figcaption>
                </figure>
                <div className=" d-flex " style={{justifyContent:"center", margin:"5rem 0"}}>
                    <Link className="btn btn-warning " to="/contact">Customer Service</Link>
                </div>
            </div>
            <div class="col-md " style={{  }}>
                <img src={img} className=" rounded-full " style={{width:"30%", borderRadius:"50%", marginLeft:"35%"}} alt="Testemonial img" />
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>find the soloution</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Every thing you need to elemenate your security weakness you will find here
                    </figcaption>
                </figure>
                <div className=" d-flex " style={{justifyContent:"center", margin:"5rem 0"}}>
                    <Link className="btn btn-warning " to="/products">Market</Link>
                </div>
            </div>
            <div className="col-md" style={{}}>
                <img src={img} className=" rounded-full m" style={{width:"30%", borderRadius:"50%", marginLeft:"35%"}} alt="Testemonial img" />
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>Get proffisionals to do thier thing</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Need profissional help to install you'r new system/system-update
                    </figcaption>
                </figure>
                <div className=" d-flex " style={{justifyContent:"center", margin:"5rem 0"}}>
                    <Link className="btn btn-warning " to="/contact">Customer Service</Link>
                </div>
            </div>
            
        </div>
    </>
    );
}

export default About
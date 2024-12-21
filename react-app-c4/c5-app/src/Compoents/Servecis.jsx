import React from 'react'
import img1 from"../images/d.jpg";
import img2 from"../images/g.jpg";
import img3 from"../images/b.jpg";
import Nav from './Nav';

function Servecis() {
    return (
    <>
        <Nav/>
        <div className='row' style={{marginBottom:"10rem", marginTop: "25vh"}}>
            <h1 style={{marginBottom:"10rem", marginLeft:"15rem"}}>Servecis</h1>
            <div className='col'>
                <img src={img3} className="" style={{width:"70%"}} alt="hero img" />
            </div>
            <div className='col' style={{marginLeft:"-5rem"}}>
                <h2>
                    Service
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque incidunt voluptate omnis! Commodi, veniam ea. Possimus ea maiores quasi quisquam reiciendis eum, ipsam, voluptatem alias, sed maxime autem omnis.
                </p>
                <button className="btn btn-warning justify-self-end btn-lg-md btn-sm" style={{marginTop:"5rem", marginLeft:"10rem"}}>Emotional Damage</button>
            </div>
        </div>
        <div className='row' style={{marginBottom:"10rem"}}>
            <div className='col'>
                <img src={img1} className="" style={{width:"70%"}} alt="hero img" />
            </div>
            <div className='col' style={{marginLeft:"-5rem"}}>
                <h2>
                    Service
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque incidunt voluptate omnis! Commodi, veniam ea. Possimus ea maiores quasi quisquam reiciendis eum, ipsam, voluptatem alias, sed maxime autem omnis.
                </p>
                <button className="btn btn-warning justify-self-end btn-lg-md" style={{marginTop:"5rem", marginLeft:"10rem"}}>Emotional Damage</button>
            </div>
        </div>
        <div className='row' style={{marginBottom:"10rem"}}>
            <div className='col'>
                <img src={img2} className="" style={{width:"70%"}} alt="hero img" />
            </div>
            <div className='col' style={{marginLeft:"-5rem"}}>
                <h2>
                    Service
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta itaque incidunt voluptate omnis! Commodi, veniam ea. Possimus ea maiores quasi quisquam reiciendis eum, ipsam, voluptatem alias, sed maxime autem omnis.
                </p>
                <button className="btn btn-warning justify-self-end btn-lg-md" style={{marginTop:"5rem", marginLeft:"10rem"}}>Emotional Damage</button>
            </div>
        </div>
    </>
    )
}

export default Servecis
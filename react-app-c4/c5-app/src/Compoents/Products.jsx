import React from 'react'
import img1 from"../images/dome.jpg";
import img2 from"../images/zamada.jpg";
import img3 from"../images/ptz.jpg";
import img4 from"../images/4.jpg";
import img5 from"../images/5.jpg";
import img6 from"../images/6.jpg";
import Nav from './Nav';

function Products() {
  return (
    <>
        <Nav/>
        <div className='g' style={{height:"100vh"}}>
            <div className='row d-flex' style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                <div class="card" style={{width: "15rem",margin:"2rem"}}>
                    <img src={img1} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Camera1</h5>
                        <p class="card-text">Some quick example text to build on the card's content.</p>
                        <a href="#" class="btn btn-primary" style={{width:"100%"}}>99.99$</a>
                    </div>
                </div>
                <div class="card" style={{width: "15rem",margin:"2rem"}}>
                    <img src={img2} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Camera2</h5>
                        <p class="card-text">Some of the card's content.</p>
                        <a href="#" class="btn btn-primary" style={{width:"100%"}}>150.00$</a>
                    </div>
                </div>

                <div class="card" style={{width: "15rem",margin:"2rem"}}>
                    <img src={img3} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Camera3</h5>
                        <p class="card-text">Some up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" style={{width:"100%"}}>200.00$</a>
                    </div>
                </div>
                <div class="card" style={{width: "15rem",margin:"2rem"}}>
                    <img src={img4} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Camera4</h5>
                        <p class="card-text"> title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" style={{width:"100%"}}>280.00$</a>
                    </div>
                </div>
                <div class="card" style={{width: "15rem",margin:"2rem"}}>
                    <img src={img5} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Camera5</h5>
                        <p class="card-text">Some quick and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary" style={{width:"100%"}}>25.00$</a>
                    </div>
                </div>
                <div class="card" style={{width: "15rem",margin:"2rem"}}>
                    <img src={img6} class="card-img-top" />
                    <div class="card-body">
                        <h5 class="card-title">Camera6</h5>
                        <p class="card-text">Some quick example text to build on.</p>
                        <a href="#" class="btn btn-primary" style={{width:"100%"}}>120.99$</a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Products
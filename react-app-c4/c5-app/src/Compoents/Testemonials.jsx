import React from 'react'
import img from"../images/2.jpg";
import Nav from './Nav';

function Testemonials() {
    return (
    <>
        <Nav/>
        <div class="row justify-content-spaceBetween align-items-center mb-5 " style={{height:"100vh",marginTop:"-10rem",marginBottom:"25vh"}}>
            <h1 className='' style={{paddingLeft:"5rem", marginBottom:"5rem"}}>AboutUs</h1>
            <div class="col-md " style={{ }}>
                <img src={img} className=" rounded-full " style={{width:"30%", borderRadius:"50%", marginLeft:"35%"}} alt="Testemonial img" />
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>"Brimbello has completely transformed the way we approach security. Their team is highly professional and attentive to every detail."</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                    John Doe, CEO of SecureTech Solutions
                    </figcaption>
                </figure>
            </div>
            <div class="col-md " style={{  }}>
                <img src={img} className=" rounded-full " style={{width:"30%", borderRadius:"50%", marginLeft:"35%"}} alt="Testemonial img" />
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>"We were struggling to identify vulnerabilities in our system. Brimbello not only helped us pinpoint the issues but also implemented a foolproof solution in record time."</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Sarah Johnson, IT Manager at SafeNet Corp
                    </figcaption>
                </figure>

            </div>
            <div className="col-md" style={{}}>
                <img src={img} className=" rounded-full m" style={{width:"30%", borderRadius:"50%", marginLeft:"35%"}} alt="Testemonial img" />
                <figure class="text-center">
                    <blockquote class="blockquote">
                        <p>"Their professionalism and expertise are unmatched. From installation to maintenance, they ensured everything was seamless. Highly recommend Brimbello!"</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Michael Brown, Homeowner
                    </figcaption>
                </figure>

            </div>
            
        </div>
    </>
    );
}

export default Testemonials
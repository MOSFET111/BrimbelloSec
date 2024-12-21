import Nav from "./Nav";
import React, { Component } from 'react'



export default function ContactUs(){
    return (
        <>
            <Nav />
            <form action="#">
                <div className="d-flex" style={{justifyContent:"space-around", marginTop:"10rem"}}>
                    <div class="mb-3" style={{width:"40%"}}>
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name"/>
                    </div>
                    <div class="mb-3" style={{width:"40%"}}>
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                </div>
                <div class="mb-3" style={{width:"90%", margin:"0 5%"}}>
                    <label for="exampleFormControlTextarea1" class="form-label">Massage</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Massage" rows="5"></textarea>
                </div>
                <div  style={{margin:"0 5%"}}>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Marketing Emails
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            News & Updates Emails
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label class="form-check-label" for="flexCheckDefault">
                            Production Process Emails
                        </label>
                    </div>
                </div>
                <button className="btn btn-warning btn-lg" style={{margin:"5%"}}>Submit</button>
            </form>
        </>
    );
}

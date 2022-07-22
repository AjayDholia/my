import React from 'react';
import './body.css';


export default function Body() {
    return(
        <div className="upperbody">
            <div className="part1">
                
                <h1> <span>become a</span> Full Stack </h1>
                <h1>Developer</h1>
                <h3>learn. earn. now its your turn</h3>
                <h3>0% Upfront Fee.</h3>
                <h2><solid>Garanteed Placement</solid></h2>
                <button>Apply Now</button>

            </div>
            <div className="part2">
                <h1>Book a <span>FREE</span> Trail Class</h1>
                <label>email id*</label>< br></br>
                <input type="email" placeholder="enter your mail"></input><br></br>
                <label>Graduation Year*</label>< br></br>
                <input type="number" placeholder="enter your Graduation Year"></input><br></br>
                <label>Phone No.*</label>< br></br>
                <input type="number" placeholder="enter your Number"></input><br></br>

                <button>Book Your Live Session</button>


            </div>

        </div>

    );
}
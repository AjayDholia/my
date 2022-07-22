import React from 'react';
import './header.css';

export default function Header() 
{
    return(
        <div className="navbar">
            <div className="logo">
              <img src="pepcodingimg.png" alt="img"></img>
            </div>
            <div className="navbar-list">
                <div className="option">Traning</div>
                <div className="option">GUARANTED JOB PROGRAM</div>
                <div className="option">NADOS</div>
                <div className="option">RESOURCE</div>
                <div className="option">LOGIN</div>
            </div>
        </div>

    );
}
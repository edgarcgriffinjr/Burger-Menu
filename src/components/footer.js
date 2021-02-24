import React from 'react';

import { FooterIcons } from './static/footerIcons'
import './footer.css'

const Footer = () => {
    return ( 
        <div className = 'footer'>
            <div className="trademark">
                <h1> Copyright 2021 © Edgar Griffin</h1>
                <h2> Developed by Edgar Griffin</h2>
            </div>  

            <ul className = 'footer-list'>
                {FooterIcons.map((item, index) => {
                    return (
                        <ul key = {index} className = {item.cName}>
                            <a href = {item.path}>
                                {item.icon}
                            </a>
                        </ul>
                    )
                })}
            </ul>    
        </div>
    );
}
 
export default Footer;
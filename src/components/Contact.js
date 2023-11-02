import React, { useEffect } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import {Icon, Style} from 'ol/style';
import {Vector as VectorLayer} from 'ol/layer';

import marker from "../assets/marker.png"


const Contact = () => {

    return ( 
        <div>
            <div className="contact-container">
                <div className="contact-Sub-container-1">
                    <h1 style={{fontSize:'3rem'}}>Have Questions?</h1>
                    <br />

                    <p style={{fontSize:'20px', color:'grey'}}>Please feel free to call or email us,
                        or use our contact form to get in touch with us. 
                        We look forward to hearing from you!
                    </p>
                    <br />

                    <h2>Emergency? Call Us:</h2>
                    <p style={{fontSize:'20px',color:'grey'}}>+1234567890</p>
                    <br />

                    <h2>Send Us Mail</h2>
                    <p style={{fontSize:'20px',color:'grey'}}>info@example.com</p>
                    <br />

                    <h2>Find the Studio</h2>
                 
                </div>
                <div className="contact-Sub-container-2">
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" placeholder="Name" style={{width:'80%',height:'40px',padding:'0.2% 1%',fontSize:'20px'}} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor=""></label>
                        <input type="email"  placeholder="Email Address" style={{width:'80%',height:'40px',padding:'0.2% 1%',fontSize:'20px'}}/>
                    </div>
                    <br />
                    <div>
                        <label htmlFor=""></label>
                        <input type="text" placeholder="Subject" style={{width:'80%',height:'40px',padding:'0.2% 1%',fontSize:'20px'}} />
                    </div>
                    <br />
                    <div>
                        <label htmlFor=""></label>
                        <textarea cols="30" rows="5" placeholder="Your Message" style={{width:'80%',padding:'0.2% 1%',fontSize:'20px'}}></textarea>
                    </div>
                    <br />
                    <button>Send Message</button>
                </div>
            </div>
        </div> 
     );
}
 
export default Contact;
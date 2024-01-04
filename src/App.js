import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BsRecordCircle } from "react-icons/bs";

import Navbar from "./components/Navbar";

import Hero from "./assets/hero.webp"
import Mission from "./assets/mission.webp"
import Insights from "./assets/Real-time-insights.webp"
import News from "./assets/news and updates.webp"
import Cutting from "./assets/cutting-edge-apis.webp"
import John from "./assets/john.webp"
import Emily from "./assets/emily.webp"
import Contact from './components/Contact'
import sarah from './assets/sarah.webp'
import johnC from './assets/john-carter.webp'
import emma from './assets/emah.webp'
import david from './assets/David.webp'
import stars from './assets/stars.webp'
import benefits from './assets/benefits-sec.webp'


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' >
          <div>
            <div className="App">

              <section id="Home">
                <div className="Home-title">
                  <h1>Elevate Your</h1>
                  <h1>Game with</h1>
                  <h1>TradeInfoHub</h1>
                  <br />
                  <p>TradeInfoHub empowers you with accurate, 
                    real-time trading insights. Our cutting-edge APIs and
                    comprehensive data analysis keeps you ahead of the game,
                    while our news and updates keep you informed.
                  </p>
                  <br />
                  <button>View All Services</button>
                </div>
                <div className="Home-img-con">
                  <img src={Hero} alt="Hero-img" style={{borderRadius:'10px'}} />
                </div>
              </section>

              <section id="About">
                <div className='Mission'>
                  <div>
                    <img src={Mission } alt="Mission-statement-img" style={{borderRadius:'10px'}} />
                  </div>
                  <div className="mission-statement">
                    <h1>Mission statement</h1>
                    <br />
                    <p>At TradeInfoHub, we believe that knowledge is power. 
                      That’s why we are committed to providing our clients with 
                      the latest trading insights, cutting-edge APIs, and news and 
                      updates from the financial industry. Our mission is to empower
                      traders of all levels with the tools and information they need 
                      to succeed in today’s fast-paced trading environment.
                    </p>
                  </div>
                </div>

                <div className="Our-team">
                  <h1 style={{fontSize:'3rem'}} >Our team</h1>
                  <p style={{fontSize:'20px', color:'grey'}} >Meet out expert team. The Driving force behind TradeInfoHub's succcess </p>
                  <br />
                  <div className="Our-team-container">
                    <div className="Our-team-sub-C">
                      <img src={John} alt=""  />
                      <div className="actual-content">
                        <h2>John Smith</h2>
                        <p style={{fontSize:'20px', color:'green', fontWeight:'bold'}} >Founder & CEO</p>
                        <br />
                        <p style={{fontSize:"20px", color:"grey"}} >
                          John brings decades of experience in the financial industry and a 
                          passion for innovation to TradeInfoHub. His leadership and expertise
                          drive the company’s success.
                        </p>
                      </div>
                    </div>
                    <div className="Our-team-sub-C">
                      <img src={Emily} alt=""  />
                      <div className="actual-content">
                        <h2>Emily Chen</h2>
                        <p style={{fontSize:'20px', color:'green', fontWeight:'bold'}}>Lead Developer</p>
                        <br />
                        <p style={{fontSize:"20px", color:"grey"}}>
                          John brings decades of experience in the financial industry and a 
                          passion for innovation to TradeInfoHub. His leadership and expertise
                          drive the company’s success.
                        </p>
                      </div>
                    </div>
                  </div>

                </div> 
              </section>

              <section id="Services">
                <div className="services-header">
                  <h1 style={{fontSize:'3rem'}}>Our services</h1>
                  <button>View All Services</button>
                </div>
                <div className="services-offered">
                  <div className="card">
                    <div className="card-img">
                      <img src={Insights} alt="Real-time-insights" style={{width:'100%'}} />
                    </div>
                    <div className="content">
                      <h2>Real-time Trading Insights</h2>
                      <p>Our real-time trading insights service provides up-to-the-minute market news,
                        trends, and analysis, empowering you to make informed trading decisions.
                      </p>
                      <a href="/">Read more</a>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={News} alt="Real-time-insights" style={{width:'100%'}} />
                    </div>
                    <div className="content">
                      <h2>News and Updates</h2>
                      <p>Our news and updates service provides you with the latest industry news,
                        market updates, and trading insights, keeping you informed and ahead 
                        of the competition.
                      </p>
                      <a href="/">Read more</a>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-img">
                      <img src={Cutting} alt="Real-time-insights" style={{width:'100%'}} />
                    </div>
                    <div className="content">
                      <h2>Cutting-edge APIs</h2>
                      <p>Our cutting-edge APIs deliver real-time, accurate, and reliable
                        trading data, empowering you to make informed decisions and stay ahead of the curve.
                      </p>
                      <a href="/">Read more</a>
                    </div>
                  </div>
                </div>

                <div class="Line-container">
                  <span class="text">Features & Benefits</span>
                  <hr class="line"/>
                </div>
                
                <div className="benefits-container">
                  <div>
                    <h1>Features</h1>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Real-time Trading Insights</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Cutting-edge APIs</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Comprehensive Data Analysis</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >News and Updates</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Ongoing Support</span></p>
                    <br />
                  </div>

                  <div>
                    <h1>Benefits</h1>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Accurate Trading Insights</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Sustained Partnership</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Comprehensive Data Analysis</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Increased Profitability</span></p>
                    <br />
                    <p><BsRecordCircle style={{color:'green',marginRight:"5px"}} /><span style={{fontSize:'20px', color:'grey'}} >Staying Ahead of the Curve</span></p>
                    <br />
                  </div>

                  <div>
                    <img src={benefits} alt="" className='benefits-img'/>
                  </div>

                </div>
              </section>

              <section id="Reviews">
                <h1 style={{fontSize:"3rem"}} >Client Testimonials</h1>
                <br />
                <p style={{fontSize:'20px'}} >Hear What Our Clients Have to Say About Us</p>
                <br />
                <br />
                <div className="testimonials-container">
                  <div>
                  <img src={stars} alt="" style={{width:'100px'}} />
                    <p  style={{fontSize:'20px'}} >TradeInfoHub is the perfect trading partner. 
                      Their real-time insights and news updates keep me 
                      informed and help me stay on top of market trends. 
                      I highly recommend them to anyone looking to up their trading game.
                    </p>
                    <div style={{display:'flex',alignItems:'center'}}>
                      <img src={sarah} alt="" style={{width:'50px',borderRadius:'50px'}} /><span style={{fontSize:'20px', color:'blue',fontWeight:'bold',marginLeft:'20px'}} >SARAH THOMPSON</span>
                    </div>
                  </div>
                  <div>
                    <img src={stars} alt="" style={{width:'100px'}} />
                    <p style={{fontSize:'20px'}} >TradeInfoHub is the perfect trading partner. 
                      Their real-time insights and news updates keep me 
                      informed and help me stay on top of market trends. 
                      I highly recommend them to anyone looking to up their trading game.
                    </p>
                    <div style={{display:'flex',alignItems:'center'}} >
                      <img src={johnC} alt=""  style={{width:'50px',borderRadius:'50px'}}  /><span style={{fontSize:'20px', color:'black',fontWeight:'bold',marginLeft:'20px'}} >JOHN CARTER</span>
                    </div>
                  </div>
                </div>

                <div className="testimonials-container">
                  <div>
                  <img src={stars} alt="" style={{width:'100px'}} />
                    <p  style={{fontSize:'20px'}}>TradeInfoHub is the perfect trading partner. 
                      Their real-time insights and news updates keep me 
                      informed and help me stay on top of market trends. 
                      I highly recommend them to anyone looking to up their trading game.
                    </p>
                    <div style={{display:'flex',alignItems:'center'}} >
                      <img src={emma} alt="" style={{width:'50px',borderRadius:'50px'}} /><span style={{fontSize:'20px', color:'black',fontWeight:'bold',marginLeft:'20px'}} >	EMMA RODRIGUEZ</span>
                    </div>
                  </div>
                  <div>
                  <img src={stars} alt="" style={{width:'100px'}} />
                    <p  style={{fontSize:'20px'}}>TradeInfoHub is the perfect trading partner. 
                      Their real-time insights and news updates keep me 
                      informed and help me stay on top of market trends. 
                      I highly recommend them to anyone looking to up their trading game.
                    </p>
                    <br />
                    <div style={{display:'flex',alignItems:'center'}} >
                      <img src={david} alt="" style={{width:'50px',borderRadius:'50px'}} /><span style={{fontSize:'20px', color:'black',fontWeight:'bold',marginLeft:'20px'}} >DAVID WILSON</span>
                    </div>
                  </div>
                </div>
              </section>

              <section id="Contact">
                <Contact/>
              </section>

            </div>
            <section id="subscribe">
              <div className='subscribe-container'>
                <h1>Subscribe to Newsletter</h1>
                <br />
                <p style={{fontSize:'20px',color:'grey'}} >Enter your email address to register to our newsletter subscription! </p>
                <br />
                <div>
                  <input type="email" required placeholder='Email Address'/>
                </div>
                <br />
                <button>Send</button>
                <br />
              </div>
            </section>
            
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

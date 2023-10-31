import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Navbar from "./components/Navbar";

import Hero from "./assets/hero.webp"
import Mission from "./assets/mission.webp"
import Insights from "./assets/Real-time-insights.webp"
import News from "./assets/news and updates.webp"
import Cutting from "./assets/cutting-edge-apis.webp"


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' >
          <div className="App">

            <section id="Home">
              <div className="Home-title">
                <h1>Elevate Your</h1>
                <h1>Game with</h1>
                <h1>TradeInfoHub</h1>
                <br />
                <p>TradeonfoHub empowers you with accurate, 
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
              <div>
                <img src={Mission } alt="Mission-statement-img" style={{borderRadius:'10px'}} />
              </div>
              <div className="mission-statement">
                <h1>Mission statement</h1>
                <br />
                <p>At TradeonfoHub, we believe that knowledge is power. 
                  That’s why we are committed to providing our clients with 
                  the latest trading insights, cutting-edge APIs, and news and 
                  updates from the financial industry. Our mission is to empower
                  traders of all levels with the tools and information they need 
                  to succeed in today’s fast-paced trading environment.
                </p>
              </div>

              
            </section>
            <section id="Services">
              <div className="services-header">
                <h1>Our services</h1>
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
                    <a href="#">Read more</a>
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
                    <a href="#">Read more</a>
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
                    <a href="#">Read more</a>
                  </div>
                </div>
              </div>

              <div class="Line-container">
                <span class="text">Features & Benefits</span>
                <hr class="line"/>
              </div>

            </section>
            <section id="Reviews"></section>
            <section id="Contact"></section>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

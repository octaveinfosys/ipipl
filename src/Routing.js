
import './App.css';
import About from './pages/About';
import WebsiteDesign from './components/WebsiteDesign';
import Package from './components/Package';
import {
  Route,
  Switch
} from "react-router-dom";
import Contact from './pages/Contact';
import Services from './pages/Services';
import Services1 from './pages/Services1';
import Blog from './pages/Blog';

import Home from './pages/Home';
import Project from './pages/Project';
import PortfolioSingle from './pages/PortfolioSingle';
import AllPortfolio from './pages/AllPortfolio';
import Test from './pages/Test';

import AllPortfolioCom from './pages/AllPortfolioCom';
import Awards from './pages/Awards';
import House from './pages/House';
import PortfolioDetails from './pages/PortfolioDetails';
import Achievement from './pages/Achievement';
import Press from './pages/Press';
import Client from './components/Client';


function Routing() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
           
            <Route exact path="/contact">
                <Contact />
            </Route>
            <Route exact path="/project-:id">
                <Project />
            </Route>
            <Route exact path="/services">
                <Services />
            </Route>
            <Route exact path="/services1">
                <Services1 />
            </Route>
            <Route exact path="/Website-Desgn">
                <WebsiteDesign />
            </Route>
            <Route exact path="/client">
                <Client />
            </Route>
           
          
            <Route exact path="/portfolio">
                <PortfolioSingle />
            </Route>

            <Route exact path="/all-portfolio">
                <AllPortfolio />
            </Route>
            <Route exact path="/portfolio-details">
                <PortfolioDetails />
            </Route>
            <Route exact path="/test">
                <Test />
            </Route>
            <Route exact path="/achievement">
                <Achievement />
            </Route>
            <Route exact path="/awards">
                <Awards />
            </Route>
            <Route exact path="/press">
                <Press />
            </Route>
            <Route exact path="/house">
                <House />
            </Route>
          

        </Switch>
    )
}

export default Routing

import React from 'react'
import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar,Footer} from './Components';
import Home from './pages/HomePage/Home';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './Components/ScrollToTop'; 
import About from './pages/About/About';
import Events from './pages/Events/Events';



// import InfoSection from './Components/InfoSection/InfoSection'

function App (){

    
    return(
        <Router>
        <GlobalStyle/> 
        <ScrollToTop />
        <Navbar />
        <Switch >
        
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
        <Route path="/events" exact component={Events} />
        <Route path="/sign-up" exact component={SignUp} />
     
        </Switch>
        
        <Footer/>
   
        </Router>
    );
}
// I remove this from the app return parentheses <InfoSection/>   
export default App;
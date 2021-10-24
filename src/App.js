import logo from './logo.svg';
/* import './App.css'; */
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
     <>
     <Router>
     <Header/>
         <Switch>
           <Route path="/" exact component={Home}/>
           <Route path="/about" component={About}/>
           <Route path="/contact" component={Contact}/>
         </Switch>
     <Footer/>
     </Router>
     </>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import Career from './Components/Career/Career';
import Error from './Components/Error/Error';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Service from './Components/Service/Service';

function App() {
  return (
    <div className="App">

      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>


          <Route path='/Home'>
            <Home></Home>
          </Route>


          <Route path='/Service'>
            <Service></Service>
          </Route>


          <Route path='/Career'>
            <Career></Career>
          </Route>

          <Route path='/AboutUs'>
            <AboutUs></AboutUs>
          </Route>

          <Route path='*'>
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

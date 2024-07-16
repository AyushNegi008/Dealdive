import './App.css';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Cetogery from './components/Cetogery';
import Navbar from './components/Navbar';
import Suggestion from './components/Suggestion';
import Dproduct from './components/dproduct';
import Cproduct from './components/cproduct';
import Footer from './components/footer';
import Product from './components/Product';


function App() {
  return (
    
    <Router>

        <Switch>
            <Route exact path="/">
                <Navbar name="dealdive"/>
                <Cetogery/>
                <Suggestion/>
                <Dproduct/>
                <Cproduct/>
                <Footer/>
            </Route>
            <Route exact path="/productpage/:slug" render={({match})=>{
              return(
                <>
                    <Navbar name="dealdive"/>
                    <Product slug={match.params.slug}/>
                    <Footer/>
                </>
              )
            }}
            />
        </Switch>
    </Router>

    
  );
}

export default App;

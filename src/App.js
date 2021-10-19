
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Services from './components/Services/Services';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route exact path="/home">
             <Home></Home>
           </Route>
           <Route path="/buy/:serviceId">
             <Buy></Buy>
           </Route>
           <Route path="/login">
             <Login></Login>
           </Route>
           <Route path="/about">
             <About></About>
           </Route>
           <Route path="/contact">
             <Contact></Contact>
           </Route>
           <Route path="/services">
             <Services></Services>
           </Route>
         </Switch>
      </BrowserRouter>
      </AuthProvider>
      
      
    </div>
  );
}

export default App;

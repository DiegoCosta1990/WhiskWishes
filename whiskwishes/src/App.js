import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import Register from './components/Register/Register';
import SignIn from './components/SignIn/SignIn';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route:'home',
      isSignedIn: false
    }
  }
  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }



  render() {
    const{ isSignedIn, route }= this.state;
    return (
      <div className="App">
        <Navigation isSignedIn={isSignedIn} onRouteChange ={this.onRouteChange}/>
        <Header isSignedIn={isSignedIn} onRouteChange ={this.onRouteChange}/>
        {route === 'home'
          ? <div>              
              <Products />
              <About /> 
              <Footer />                     
           </div>
          : (
            route === 'signin'
             ? <SignIn onRouteChange ={this.onRouteChange}/>
             : <Register onRouteChange ={this.onRouteChange}/>
          )
        }         
      </div>
      );
    }
  }

export default App;

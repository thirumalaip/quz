import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/toolbar/toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/backdrop';
import Quiz1 from './components/pages/quiz1/quiz1';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Quiz2 from './components/pages/quiz1/quiz2';

class App extends Component {
  state = {
    SideDrawerOpen: false
  }

  drawerToggleClickHandlder = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen}
    });
  }

  backdropClickHandler =() => {
    this.setState({SideDrawerOpen:false})
  }
  render() {
    let newbackdrop;

    if(this.state.SideDrawerOpen) {
      newbackdrop = <Backdrop backdropClick = {this.backdropClickHandler}/>
    }

    return (
      <div style={{height:'100%'}} className="App">
       <Toolbar drawerclickHandler = {this.drawerToggleClickHandlder} />
       <SideDrawer show = {this.state.SideDrawerOpen}/>
       {newbackdrop}
         <main style={{marginTop: '64px'}}>
  
         <Router>
         <Route path='/' exact component={Quiz1} />
            <Route path='/quiz1' component={Quiz1} />
            <Route path='/quiz2' component={Quiz2} />
         </Router>
           </main>
    
      </div>
    );
  }

}

export default App;

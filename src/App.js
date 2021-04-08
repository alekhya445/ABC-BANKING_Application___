import Home from './Components/Home'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle'
import {BrowserRouter ,Route,Switch} from 'react-router-dom'
import login from './Components/login'
import Adminaxios from './Components/adminaxios'
import Useraxios from './Components/useraxios'
import React, { Component } from 'react'
import signup from './Components/signup';
import Adduser from './Components/adduser';
import Viewuser from './Components/viewuser';
import Viewuser1 from './Components/viewuser1';
//import UserView from './Components/viewpage';
import Edituser from './Components/edituser';
import AddAmount from './Components/addamount';
import CurrentBalence from './Components/currentadd';
import MiniStatement from './Components/mini';
import CurrentBalance from './Components/currentdelamount';
import Logout from './Components/logout';
//import signup from './Components/signup';
import DelAmount from './Components/delamount';








 class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div className="App">
      <Switch>
        <Route path='/' exact component={Home}></Route>
        {/* <Route path='/member-home' component={memberHome}></Route> */}
        <Route path='/signup' component={signup}></Route>
        
        <Route path='/login' component={login}></Route>
        <Route path='/logout' component={Logout}></Route>
        <Route path='/adminaxios' component={Adminaxios}></Route>
        <Route path='/viewuser/:id' component={Viewuser}></Route>
        <Route path='/viewuser1/:id' component={Viewuser1}></Route>
        <Route path='/edituser/:id' component={Edituser}></Route>
        <Route path='/adduser' component={Adduser}></Route>
        <Route path='/useraxios' component={Useraxios}></Route>
        <Route path='/addamount' component={AddAmount}></Route>
        <Route path='/currentadd' component={CurrentBalence}></Route>
        <Route path='/currentdel' component={CurrentBalance}></Route>
        <Route path='/mini/:id' component={MiniStatement}></Route>
        <Route path='/delamount' component={DelAmount}></Route>
        {/* <Route path='/viewpage' component={UserView}></Route> */}
        <Route path='/signup' component={signup}></Route>
        
      </Switch>

      
      
      
      </div>
      </BrowserRouter>
    )
  }
}

export default App
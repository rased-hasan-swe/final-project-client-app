
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Registar from './components/Registar/Registar';
import AuthProvider from './Hooks/AuthProvider/AuthProvider';
import Services from './components/Services/Services';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashbord from './components/Dashboard/Dashboard';
import AddService from './components/AddService/AddService';
import Booking from './components/Booking/Booking';
import MyOrder from './components/MyOrder/MyOrder';
import ManageAllOrder from './components/ManageAllOrder/ManageAllOrder';
import Contract from './components/Contract/Contract';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div >
     
     <AuthProvider>
     <Router>
        
        <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/home">
             <Home></Home>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/dashboard">
            <Dashbord></Dashbord>
          </Route>
          <PrivateRoute path="/booking/:serviceId">
         <Booking></Booking>
       </PrivateRoute>
          <Route path="/addservice">
          <AddService></AddService>
          </Route>
          <Route path="/allorder">
           <ManageAllOrder></ManageAllOrder>
          </Route>
          <Route path="/myorder">
          <MyOrder></MyOrder>
          </Route>
          <Route path="/login">
           <Login></Login>
          </Route>
          <Route path="/registar">
           <Registar></Registar>
          </Route>
          <Route path="/contract">
            <Contract></Contract>
          </Route>
          <Route path="*">
        <NotFound></NotFound>
       </Route>
        </Switch>
        
      </Router>
     </AuthProvider>
  
    </div>
  );
}

export default App;
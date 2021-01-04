import './App.css';
import Home from './components/Home/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login/Login/Login';
import CreateOrder from './components/Order/CreateOrder/CreateOrder';
import OrderList from './components/Order/OrderList/OrderList';
import OrderReview from './components/Order/OrderReview/OrderReview';
import AddService from './components/Admin/AddService/AddService';
import ServiceList from './components/Admin/ServiceList/ServiceList';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';
import { createContext, useState } from 'react';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const CreativeAgency = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({email: ""}); 
  const [adminInfo, setAdminInfo] = useState({}); 
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <CreativeAgency.Provider value={{
      login: [loggedInUser, setLoggedInUser],
      userInformation: [userInfo, setUserInfo], 
      adminInformation: [adminInfo, setAdminInfo]}}>
    <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/createOrder">
              <CreateOrder/>             
          </PrivateRoute>
          <PrivateRoute path="/orderReview">
              <OrderReview/>             
          </PrivateRoute>
          <PrivateRoute path="/orderList">
              <OrderList/>            
          </PrivateRoute>
          <Route path="/addService">
              <AddService/>
          </Route>
          <Route path="/serviceList">
              <ServiceList/>
          </Route>
          <Route path="/addAdmin">
              <AddAdmin/>
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>        
    </Router>
    </CreativeAgency.Provider>
  );
}

export default App;

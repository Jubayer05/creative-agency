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

export const CreativeAgency = createContext();

function App() {
  const [userInfo, setUserInfo] = useState({}); 
  const [adminInfo, setAdminInfo] = useState({}); 
  return (
    <CreativeAgency.Provider value={{
      userInformation: [userInfo, setUserInfo], 
    adminInformation: [adminInfo, setAdminInfo]}}>
    <Router>
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/createOrder">
            <CreateOrder/>
          </Route>
          <Route path="/orderList">
            <OrderList/>
          </Route>
          <Route path="/orderReview">
            <OrderReview/>
          </Route>
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

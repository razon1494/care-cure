import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Services from './pages/services/Services';
import ServiceDetail from './pages/serviceDetail/ServiceDetail';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Appointment from './pages/appointment/Appointment';

import NotFound from './pages/notfound/NotFound';
import PrivateRoute from './pages/login/PrivateRoute/PrivateRoute';
import Footer from './pages/Footer/Footer'

import AuthProvider, {AuthContext} from './context/AuthProvider';
import Header from './pages/header/Header';
import About from './pages/About/About';
import Book from './pages/Book/Book';



function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
              <Home></Home>
            </Route>
             <PrivateRoute path="/services/:id">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
             <PrivateRoute path="/book">
              <Book></Book>
            </PrivateRoute>
          <Route path="/services">
              <Services></Services>
            </Route>
          <Route path="/login">
              <Login></Login>
            </Route>
          <Route path="/signup">
              <Signup></Signup>
            </Route>
          <Route path="/staffs">
              <About></About>
            </Route>
          <PrivateRoute path="/join">
              <Appointment></Appointment>
            </PrivateRoute>


{/*           <PrivateRoute path="/inventory">

          </PrivateRoute> */}


          <Route path="*">
            <NotFound></NotFound>
          </Route>
          </Switch>
          <Footer></Footer>
      </Router>
</AuthProvider>
    </div>
  );
}

export default App;

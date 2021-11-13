import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/Bootstrap/bootstrap.min.css';
import AuthProvider from './components/contexts/AuthProvider/AuthProvider';
import Dashboard from './components/Pages/Dashboard/Dashboard/Dashboard';
import Explore from './components/Pages/Explore/Explore';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import NotFound from './components/Pages/NotFound/NotFound';
import Purchase from './components/Pages/Purchase/Purchase';
import PrivateRoute from './components/routes/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <PrivateRoute path="/products/:id">
              <Purchase></Purchase>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

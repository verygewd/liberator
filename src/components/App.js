import './App.css';
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch } from 'react-router-dom'
import {createBrowserHistory } from 'history'
import AdminDashboard from './AdminDashboard'
import UserDashboard from './UserDashboard'

import Login from './Login'
import ForgotPassword from './ForgotPassword'
import SignUp from './SignUp'
import UpdateProfile from './UpdateProfile'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import { AuthProvider } from '../AuthContext'
import { useSelector } from 'react-redux'
import { isLoaded } from 'react-redux-firebase'
 


function App() { 
  const profile = useSelector(state => state.firebase.profile)
  const history =createBrowserHistory()
  const dashRoute = isLoaded(profile) ? 
    (profile.role==='admin' ?
       <PrivateRoute exact path='/'><AdminDashboard /></PrivateRoute> :
        <PrivateRoute exact path='/'><UserDashboard /></PrivateRoute>) :
    <div>loading...</div>

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{minHeight: '100vh'}}>
      <BrowserRouter history = {history}>
        <AuthProvider>
          <Switch>
            {dashRoute}
            <PublicRoute path='/login' ><Login /> </PublicRoute>
            <PublicRoute path='/signup'><SignUp /></PublicRoute>
            <PublicRoute path='/forgot-password' ><ForgotPassword /></PublicRoute>
            <PrivateRoute path='/update-profile' ><UpdateProfile /></PrivateRoute>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </Container>
  );
}
// function fancyLog(profile) {
//   console.log("%cREndered with 🥥🥑🌽", "background: purple; color: #FFF");
//   console.log(profile);
// }

export default App;

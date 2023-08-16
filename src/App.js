import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import NotFound from './Components/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import AboutJobs from './Components/AboutJobs'
import Jobs from './Components/Jobs'
import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/jobs" component={Jobs} />
    <ProtectedRoute exact path="/jobs/:id" component={AboutJobs} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="not-found" />
  </Switch>
)

export default App

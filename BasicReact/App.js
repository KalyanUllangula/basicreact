
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Posts from './components/posts';
import Register from './components/register';
import PageNotFound from './components/pagenotfound';
import Authors from './components/author';
import AuthorForm from './components/authorform';
import { Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";



function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/posts" component={Posts} />
        <Route path="/authors" component={Authors} />
        <Route path="/lms/viewAuthor/add" component={AuthorForm} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/" component={Home} />
        <Redirect from="/home" to="/" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;

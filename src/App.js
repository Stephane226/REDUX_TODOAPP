// IMPORT DEPENDENCIES
import React from "react"
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

// IMPORT PAGES
import Todolist from "./pages/todolist/todolist";
import CreerList from "./pages/creerlist/creerlist";
import Voir from './pages/voir/voir';
import Update from './pages/update/update'


const App = () => {
  
  let route = (
  <Switch>
    <Route path="/creer-list" component={CreerList} />
    <Route path="/" exact component={Todolist} />
    <Route path="/voir" component={Voir} />
    <Route path="/editer" component={Update} />
    <Redirect to='/' />
  </Switch>
  )

  return (
    <>
  
     {route}
    </>
  )
}

export default  withRouter(App);

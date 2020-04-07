import React from 'react';
import './App.less';
import Home from './home/home.jsx'
import About from './about/about.jsx'
import {BrowserRouter, Route,Switch,Redirect,Link} from 'react-router-dom'
function App() {
  return (<BrowserRouter>
                <Link to='/gamenet2'>111</Link>
                 <Link to='/gamenet2/about'>222</Link>
     <Switch>
                        <Route path  ="/gamenet2" component={Home}/>
                          <Route path="/gamenet2/about"  component={About}/>
                         <Redirect to='/gamenet2'></Redirect>
             
     </Switch>

                      </BrowserRouter>
)

}

export default App;

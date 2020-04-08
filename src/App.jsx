import React from 'react';
import './App.css';
import Home from './home/home.jsx'
import About from './about/about.jsx'
import {BrowserRouter, Route,Switch,Redirect,Link} from 'react-router-dom'

function App() {
  return (

<div className='container'>

   <BrowserRouter>


<div className='top'>


                <Link to='/gamenet2'>111</Link>
                 <Link to='/gamenet2/about'>222</Link>
    

                    
</div>



<div className='main'>

 <Switch>
               <Route path="/gamenet2/about"  component={About}/>
             
                        <Route path  ="/gamenet2" component={Home}/>
                         
                         <Redirect path='/' to='/gamenet2'></Redirect>
     </Switch>

</div>

<div className='foot'></div>
  </BrowserRouter>
</div>

   
)

}

export default App;

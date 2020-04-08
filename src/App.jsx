import React from 'react';
import './App.less';
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
    
<div className='top-lbt'> 

<div className='jumu'> 

  <h1>海盗勇士</h1>
<hr/>

<p>©️xxxxx</p>
<p>30zi</p>
 </div>
    </div>                 
</div>



<div className='main'>

 <Switch>
               <Route path="/gamenet2/about"  component={About}/>
             
                        <Route path  ="/gamenet2" component={Home}/>
                         
                         <Redirect path='/' to='/gamenet2'></Redirect>
     </Switch>

</div>

<div className='foot'>
<p>抵制不良游戏 拒绝盗版游戏 注意自我保护 谨防受骗上当 适度游戏益脑 沉迷游戏伤身 合理安排时间 享受健康生活</p>
<p>©️xxxxx</p>
</div>
  </BrowserRouter>
</div>

   
)

}

export default App;

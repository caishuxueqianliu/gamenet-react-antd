import React from 'react'
import { Carousel ,Button} from 'antd';
import { Card } from 'antd';
import './home.less'
import icon from '.././assest/Icon1024x1024.png'
import img1 from '.././assest/1.jpg'
export default class Home extends React.Component{
constructor(props){
	super(props)

//私有数据
	this.state={
       
	}
	

}
 //如没有传，设置默认值
	static defaultProps={
		
	}
//规定传值的类型
//npm i prop-types


componentWillMount(){
//等同Vue 中的 created
//组件未挂载到页面
//DOM未创建

}


//等同Vue 中的 mounted
componentDidMount(){



}

shouldComponentUpdate(nextProps,nextState){
//判断是否刷新页面
	// console.log(this.state.count+'-------'+nextState.count)
	// return nextState.count%2===0?true:false
	return true
}

componentWillUpdate(nextProps,nextState){
//获取的是旧的DOM 
	//console.log(document.getElementById('h3').innerHTML)

}


componentDidUpdate(preProps,preState){
//获取的是旧的DOM 
	//console.log(document.getElementById('h3').innerHTML)
	
}





render(){



	return <div className='all'>


<Card className='card' > 
<Carousel autoplay effect="fade"> 
    <div>
      <img src={img1}/>
    </div>
    <div>
             <img src={img1}/>
    </div>
    <div>
             <img src={img1}/>
    </div>
    <div>           <img src={img1}/> </div>
  </Carousel>
 </Card>
    <Card className='card' title="Card title" bordered={false}>  </Card>
    <Card className='card' title="Card title" bordered={false}>  <img className='icon' src={icon}/> </Card>


	</div>
}


}
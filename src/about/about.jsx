import React from 'react'



export default class About extends React.Component{
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

	return <div>
	<h1>aaaaaaaaaa</h1>


	</div>
}


}
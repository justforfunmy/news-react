import React,{Component} from 'react'

export default class Clock extends React.Component{
    //构造函数是唯一能够初始化 this.state 的地方。
    constructor(props){
        super(props);
        this.state = {
            date:new Date(),
            counter:0,
            isToggleOn:true
        }
        this.handleSwitch = this.handleSwitch.bind(this)
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID)
    }
    tick(){
        //不要直接更新状态,应当使用 setState():
        this.setState({
            date:new Date()
        })
    }
    handleSwitch(counter){
        console.log(counter)
        this.setState(preState=>({
            isToggleOn:!preState.isToggleOn
        }))
        if(!this.state.isToggleOn){
            this.timerID = setInterval(
                ()=>this.tick(),
                1000
            )
        }else{
            clearInterval(this.timerID)
        }
    }
    changCounter(){
        this.setState((preState,props)=>({
            counter:preState.counter+props.interVal
        }))
    }
    render(){
        return (
            <div>
                <h1>Clock</h1>
                <h3>It is {this.state.date.toLocaleTimeString()}</h3>
                <div>
                    <button onClick={this.changCounter.bind(this)}>{this.state.counter}</button>
                    {
                        //在 JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。
                        this.state.counter>10 &&
                        <span>counter 大于10</span>
                    }
                </div>
                <button onClick={this.handleSwitch.bind(this,this.state.counter)}>{this.state.isToggleOn?"OFF":"ON"}</button>
            </div>
        )
    }
}
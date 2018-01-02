import React,{Component} from 'react'

export default class SectionOne extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <p>rest/spread属性</p>
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
            </div>
        )
    }
}
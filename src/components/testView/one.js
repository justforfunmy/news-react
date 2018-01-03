import React,{Component} from 'react'

export default class SectionOne extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h3>rest/spread属性</h3>
                <p>{this.props.name}</p>
                <p>{this.props.value}</p>
            </div>
        )
    }
}
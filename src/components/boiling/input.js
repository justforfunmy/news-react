import React,{Component} from 'react'

const scaleName = {
    c:'celsius',
    f:'fahrenheit'
}
export default class Input extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.props.onTemperatureChange(e.target.value)
    }

    render(){
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入一个{scaleName[scale]}温度</legend>
                <input value = {temperature} onChange = {this.handleChange}/>
            </fieldset>
        )
    }
}
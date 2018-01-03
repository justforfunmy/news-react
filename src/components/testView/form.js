import React,{Component} from 'react'
import './style.css'
export default class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            radioValue:'',
            area:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.selectChange = this.selectChange.bind(this)
    }

    handleChange(e){
        this.setState({
            radioValue:e.target.value
        })
    }

    selectChange(e){
        this.setState({
            area:e.target.value
        })
    }

    render(){
        const {radioValue,area} = this.state;
        const style = {
            color:'orange'
        }
        return (
            <div>
                <h3>radio</h3>
                <label>
                    male:
                    <input
                      type='radio'
                      value = 'male'
                      checked = {radioValue ==='male'}
                      onChange = {this.handleChange}
                    />
                </label>
                <label>
                    female:
                    <input
                      type='radio'
                      value = 'female'
                      checked = {radioValue ==='female'}
                      onChange = {this.handleChange}
                    />
                </label>
                <div className='text'>值:{radioValue}</div>

                <h3>select</h3>
                <select value={area} onChange={this.selectChange}>
                    <option value="beijing">北京</option>
                    <option value="shanghai">上海</option>
                    <option value="hangzhou">杭州</option>
                </select>
                <div style={style}>值:{area}</div>
            </div>
        )
    }
}
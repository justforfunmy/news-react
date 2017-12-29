import React,{Component} from 'react'

export default class EasyFrom extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            age:0
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({[name]:value})
    }

    handleSubmit(event){
        alert('a name was submitted: '+this.state.name + 'and age is :'+this.state.age);
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit = {this.handleSubmit.bind(this)}>
                <label>
                    Name:
                    <input type="text" value = {this.state.name} onChange={this.handleChange} name='name'/>
                </label>
                <label>
                    Age:
                    <input type="text" value = {this.state.age} onChange={this.handleChange} name='age'/>
                </label>
                <input type = "submit" value = "Submit"/>
            </form>
        )
    }
}
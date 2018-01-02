import React,{Component} from 'react'
import Nav from '../components/nav'

export default class LearnView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className='content'>
                <Nav activeIndex={3}/>
            </div>
        )
    }
}
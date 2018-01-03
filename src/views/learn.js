import React,{Component} from 'react'
import Nav from '../components/nav'

import TestView from '../components/testView/one'
import FormView from '../components/testView/form'

export default class LearnView extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = {name:'foo',value:'bar'}
        return (
            <div className='content'>
                <Nav activeIndex={3}/>
                <TestView {...data} />
                <FormView />
            </div>
        )
    }
}
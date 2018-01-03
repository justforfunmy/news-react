import React,{Component} from 'react'
import _ from 'lodash'
import {add} from 'lodash/fp'
export default class LodashView extends Component{
    constructor(props){
        super(props);
        
    }
    render(){
        const addOne = add(1);
        const arr = _.map([1,2,3],addOne);
        return (
            <div>
                <h3>Lodash</h3>
                {
                    arr.map((item,index)=>{
                        return (
                            <div>{item}</div>
                        )
                    })
                }
            </div>
        )
    }
}
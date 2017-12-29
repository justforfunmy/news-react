import React,{Component} from 'react'

export default class BoilingVerdict extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const celsius = this.props.celsius;
        return (
            <div>
                {
                    celsius>=100?'水会烧开':'水不会烧开'
                }
            </div>
        )
    }
}
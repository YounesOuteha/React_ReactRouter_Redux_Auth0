import React, { Component } from 'react'
import Component1 from './functional/Component1'
import Component2 from './functional/Component2'
import List from './functional/Lists'
import Froms from './functional/Forms'
import Forms from './functional/Forms'

export class UpdateStateInClass extends Component {
    constructor(props){
        super(props)
        this.state={
            stateprop1: "Our Initial State",
            stateprop2: 5
        }
    }
    //Correct way to update a state
    changeState = () => (
        this.setState({ stateprop1: "New York"})
    )
    //Change Prop 2
    changeState2 = () => (
        this.setState({ stateprop2: this.state.stateprop2 + 1})
    )
    render() {
        return (
            <div>
                <button onClick={()=>{this.changeState()}}>Change State</button>
                <br></br>
                {this.state.stateprop1}
                <br></br>
                <button onClick={()=>{this.changeState2()}}>Increment</button>
                <br></br>
                {this.state.stateprop2}
                <br></br>
                <Component1 prop1={this.state.stateprop1}/>
                <br></br>
                <Component2/>
                <br></br>
                <List/>
                <br></br>
                <br></br>
                <Forms/>
            </div>
        )
    }
}

export default UpdateStateInClass

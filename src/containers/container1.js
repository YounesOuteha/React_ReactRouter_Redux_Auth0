import React, { Component } from 'react'

import * as ACTION_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

export class container1 extends Component {
    render() {
        const user_text = 'text1'
        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}>GET State</button>
                <button onClick={() => this.props.action1()}>GET Action1</button>
                <button onClick={() => this.props.action2()}>GET Action2</button>
                <button onClick={() => this.props.action_creator1()}>GET creator1</button>
                <button onClick={() => this.props.action_creator2()}>GET creator2</button>
                <button onClick={() => this.props.action_creator3(user_text)}>GET creator3</button>
        {this.props.stateprop1 ? <h1>{this.props.stateprop1}</h1> : null}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        stateprop1: state.user_text
    }
}
/* const mapStateToProps = (state) =>({stateprop1: state.stateprop1})  */   

function mapDispatchToProps(dispatch){
    return{
        action1:()=> dispatch(ACTIONS.SUCCESS),
        action2:()=> dispatch(ACTIONS.FAILURE),
        action_creator1:()=> dispatch(ACTIONS.success()),
        action_creator2:()=> dispatch(ACTIONS.failure()),
        action_creator3:(text)=> dispatch(ACTIONS.user_input(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (container1);

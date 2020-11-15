import React, { Component } from 'react'
import Component1 from '../functional/Component1'

import * as ACTION_TYPES from '../store/actions/actions_types'
import * as ACTIONS from '../store/actions/actions'

import { connect } from 'react-redux'

export class container1 extends Component {
    render() {
        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}>GET State</button>
                <button onClick={() => this.props.action1()}>GET Action1</button>
                <button onClick={() => this.props.action2()}>GET Action2</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        stateprop1: state.stateprop1 
    }
}

function mapDispatchToProps(dispatch){
    return{
        action1:()=> dispatch(ACTIONS.SUCCESS),
        action2:()=>dispatch(ACTIONS.FAILURE)
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (container1);

import React, { Component } from 'react'

class Forms extends Component {
    state = {
        value: ''
    }
    handelChange = (event) => (
        this.setState({value: event.target.value})
    )
    handelSubmit = (event) => {
        event.preventDefault()
        console.log(this.state.value)
    }
    render() {
        return (
            <div>
               {this.state.value}
               <form onSubmit={this.handelSubmit}>
               <label> Name </label>
               <input id='name' onChange={this.handelChange} type="text" />
               <button type="submit"> Submit </button>    
               </form> 
            </div>
        )
    }
}
export default Forms
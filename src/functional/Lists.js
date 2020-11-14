import React, { Component } from 'react'

 class Lists extends Component {
     Arr1 = [
         {id: 1, text:'Text1', number: 1},
         {id: 2, text:'Text2', number: 2},
         {id: 3, text:'Text3', number: 3},
         {id: 4, text:'Text4', number: 4},
         {id: 5, text:'Text5', number: 5}
     ]

     RenderListItem = (props) => (
         <div>
            {props.item.id}
            <br></br>
            <p>{props.item.text}</p>
         </div>
     )
    render() {
        return (
            <div>
                {this.Arr1.map((item, index) => (<this.RenderListItem key={index} item={item}/>))}
            </div>
        )
    }
}
export default Lists

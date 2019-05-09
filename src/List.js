import React, { Component } from 'react'

export default class List extends Component {
  render() {
    let {id, todo, onRemove} = this.props
    return (
      <div>
        <li style={{marginTop:10}} >{todo} <button onClick={()=> onRemove(id)}>Delete</button></li>
      </div>
    )
  }
}

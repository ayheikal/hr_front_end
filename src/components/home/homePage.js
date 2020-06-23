import React, { Component } from 'react'
import Card from './job'
export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.state={
      positions:[
        {id:1,title:'java developer',description:'java developer swing spring boot',endsAt:'20may',advertisedOwner:'IBM'},
        {id:2,title:'python developer',description:'jython developer dajngo ml',endsAt:'30 june',advertisedOwner:'cognitiv'}

      ]
    }
  }
  render () {
    return (
      <div style={{margin:'10px'}}>

        <Card positions={this.state.positions}></Card>
      </div>
    )
  }
}

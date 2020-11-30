import React from 'react'
import Form from './form'
class Kid extends React.Component{
    render(){
      return(
        <>
        <h2>{this.props.name}Component</h2>
        <Form spend={this.props.spend} balance={this.props.balance} />
        
        </>
      )
    }
  }

  export default Kid;
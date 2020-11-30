import React from 'react'


class Form extends React.Component{
    constructor(props){
      super(props)
      this.state = { amount: null}
  
    }
    handleChange= (e)=>{
      let amount = e.target.value
      this.setState({amount})
    }
    handleSubmit = (e)=>{
      e.preventDefault()
      // <zach spend= {someFunction}
      // this.props.sdlkfj = what we added to component call
      this.props.spend( this.state.amount)
    }
    render(){
      return(
        <>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="amount" name="amount" onChange={this.handleChange} />
          <button>zach ${this.props.balance}</button>
        </form>
        
        </>
      )
    }
}

export default Form;
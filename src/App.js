import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      balance: 100
    }
  }
  withdraw = (amount)=>{
    this.setState( { balance: this.state.balance - amount})
  }
  addMoney = (amount)=>{
    this.setState( { balance: this.state.balance + amount})
  }
  add20 = (amount)=>{
    this.setState( {balance: this.state.balance + amount})
  }
  take20 = (amount)=>{
    this.setState( {balance: this.state.balance - amount})
  }
  render(){
    return(
      <>
      <h1> Bank Balance Is:${this.state.balance}</h1>
      <button onClick={()=>this.withdraw(1)}>Withdraw Money</button>
      <button onClick={ ()=>this.addMoney(1)}>Add Money</button>
      <button onClick={ ()=>this.add20(20)}>Deposite 20</button>
      <button onClick={ ()=>this.take20(20)}>Withdraw 20</button>
      </>
    ) 
  }
}

export default App;
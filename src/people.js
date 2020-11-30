import React from 'react'
import superagent from 'superagent'

class People extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            people: [],
            pets: ['john', 'dumbar', 'jonny', 'zack', 'allie']
        }
    }
    async componentDidMount(){
        // https://swapi.dev/api/people/
        // let pets= ['Rocky', 'Malcom']
        // this.setState({pets})
        const response = await superagent.get('https://swapi.dev/api/people/')
        const people = response.body.results || [];
        this.setState({people})
    }
    render(){
        return(
            <>
            <ul>
                <h3>Using .map(value, index) to render Lists</h3>
            {
                this.state.people.map((value, index)=>{
                return <li key={Math.random()}>{value.name}</li>
                })
            }
            <hr />
            </ul>
            <ul>
                <h3>Second list using Map</h3>
            {
                this.state.pets.map((val,index)=>{
                    return <li key={Math.random()}>{val}</li>
                })
            }
            </ul>
            </>
        )
    }
}

export default People;
import React , { Component } from 'react';
import axios from 'axios'
import './App.css';

class App extends Component{

  state = {
    host : []
  }

  componentDidMount(){
    let data

    axios.get(' http://127.0.0.1:8000/api/home/')
    .then((response) =>{
      data = response.data
      this.setState({host:data})
    })
    .catch((error)=>{
    })

    
  }

  render(){
    return(
      <>
        <div>
          {this.state.host.map(
            (host,id) =>(<div key={id}><h1>The host is {host.host}</h1></div>)
          )}
        </div>
      </>
    )
  }
}

export default App
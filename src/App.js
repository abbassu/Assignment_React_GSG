import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      name:[],
      age:[],
    }
    this.print_array = this.print_array.bind(this)
    this.delete_from_array  = this.delete_from_array.bind(this)

    props.arr.map((n,a) => {
    if( !this.state.name.includes(n.name) && !this.state.age.includes(n.age)){
        this.state.name.push( n.name ) 
        this.state.age.push( n.age ) 
      }
    }) 
  }

  print_array(){
    let arrn= this.state.name
    let arra= this.state.age    
    return (
  <div>
  <ul style={{display : 'inline-block'}}>
    <h3>
      Names
    </h3>
  {
  arrn.map((item,index) => {
    return <li key={index}> {item} </li> 
  } )
  }
      </ul>
   
      <ul style={{display : 'inline-block'}}>
        <h3>
        Age
        </h3>
      {
      arra.map((item,index) => {
        return <li key={index}> {item} </li> 
      } )
      }
          </ul>
  </div>);

  }

  delete_from_array(){
    this.state.name.pop()
    this.state.age.pop()
    this.setState({
      name : this.state.name,
      age: this.state.age
    })
  }

  render(){
    return (
      <div>
      <div>
      {this.print_array()}
      <button onClick={this.delete_from_array} style={{marginLeft : '80px'}}> delete</button>
      </div>
      </div>

    );
  }

}

export default App;

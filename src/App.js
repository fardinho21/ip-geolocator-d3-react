import { Component, componentDidMount } from 'react';
import './App.css';
import {Runtime, Inspector} from "@observablehq/runtime";
import define from "@olange/d3-geo-center-view";

class App extends Component{

  constructor() {
    super()
    const runtime = new Runtime();
    this.state = {
      runtime: runtime,
      mainModule: null
    }
  }
  componentDidMount() {    
    this.setState({
      runtime: this.state.runtime, 
      mainModule: this.state.runtime.module(define, Inspector.into(document.body))})
    41.848850250244	-87.671249389648
  }

  render() {
    return <div className="App">
      {console.log(this.state)}
    </div>
  }
}

export default App;

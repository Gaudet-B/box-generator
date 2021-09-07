import Form from './components/Form'
import Boxes from './components/Boxes'
import { useState } from 'react'


function App() {
  const [state, setState] = useState({
    // color: "",
    boxList: []
  })

  // var boxColor = useState.color
  // var boxList = useState.boxList

  const addBox = (color) => {
    let arr = state.boxList
    arr.push(color)
    setState({
      boxList: arr
    })
  }

  return (
    <div className="App">
      <div className="container d-flex flex-column">
        <Form boxes={ state } setBox={ setState } addBox={ addBox } />
        <Boxes boxes={ state } setBox={ setState } />
      </div>
    </div>
  );
}

export default App;

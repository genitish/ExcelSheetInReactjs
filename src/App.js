import { useState } from 'react';
import './App.css';
import Excelsheet from './components/Excelsheet';

function App() {
  const [rows,setRows] = useState(2);


  return (
    <div className="App">
      <h1>Udaan Interview</h1>
      <input type="number" onBlur={(e) =>{ setRows(Number(e.target.value))}}/>
      <Excelsheet rows = {rows} />
    </div>
  );
}

export default App;

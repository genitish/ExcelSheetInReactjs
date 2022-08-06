import { useState } from 'react';
import './App.css';
import Excelsheet from './components/Excelsheet';
import ColumnName from './components/ColumnName';

const printColumnName = (rows)  => {
  let char = 'A'
  let columns = []
  for(let i=0;i<rows;i++){
    columns.push(<ColumnName column = {i}/>)
  }
  return(
    <div className="columnName-container">
        {
          columns
        }
    </div>
  )
}

function App() {
  const [rows,setRows] = useState(2);
  return (
    <div className="App">
      <h1>Excel sheet</h1>
      <label>No. of Rows & Columns: </label>
      <input type="number" onBlur={(e) =>{ setRows(Number(e.target.value))}} style={{margin : "4px"}}/>
      {printColumnName(rows)}
      <Excelsheet rows = {rows} />
    </div>
  );
}

export default App;

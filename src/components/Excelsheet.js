import React from 'react'
import Cell from './Cell'
import './style.css'


function Excelsheet({rows}) {
    return (
        <div className ="container">
            {
                [...Array(rows)].map((ele,i)=> {
                    return <div className="rows">
                        <div className="rowNo">{i+1}</div>
                        {
                            [...Array(rows)].map((ele,j) =>
                                <Cell i = {i} j = {j}/>
                            )
                        }
                    </div>
                })
            }
        </div>
    )
}

export default Excelsheet

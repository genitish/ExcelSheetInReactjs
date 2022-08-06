import React from 'react'
import './style.css'


function ColumnName({column}) {
    let columnName = ''
    if(column < 26){
        columnName = String.fromCharCode('A'.charCodeAt() + column)
    }
    else{
        const q = column/26;
        const rem = column%26;
        console.log(String.fromCharCode('A'.charCodeAt() + (q-1)) + String.fromCharCode('A'.charCodeAt() + rem))
        columnName = String.fromCharCode('A'.charCodeAt() + (q-1)) + String.fromCharCode('A'.charCodeAt() + rem)
    }
    return (
        <div className ="columnName">
            {columnName}
        </div>
    )
}

export default ColumnName

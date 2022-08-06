import React from 'react'

function Cell({i,j}) {
    const handleChange = (e) =>{
        
        let value = e.target.value
        const regex = /^SUM:/i;
        if(!isNaN(value))
            return;
        if(regex.test(value) && value.length > 4){
            let sum = 0
            let idArray = value.split(":")[1].split(",");
            for(let i=0;i<idArray.length;i++){
                const id = document.getElementById(idArray[i].toUpperCase());
                if(id !== null)
                    sum +=!isNaN(id.value)?Number(id.value):0;
            }
            e.target.value = sum;

        }
        else{
            console.log("Incorrect")

        }
        
    }

    return (
        <input id={String.fromCharCode('A'.charCodeAt() + j) +(i+1)}  type="text" onBlur ={(e) =>{handleChange(e)}} />
    )
}

export default Cell

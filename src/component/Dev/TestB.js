import React from 'react';

function TestB(){
    const handleDrop = (e) => {
        console.log(e)
        console.groupCollapsed("Drop")
        console.log(e)
        console.groupEnd()
    }
    return (
        <div className="box-b" draggable 
            onDrop={e => console.log("DER",e.target)} 
            onDragOver={e => e.preventDefault()}
        >
            <p>THis is Box B</p>
        </div>
    )
}

export default TestB
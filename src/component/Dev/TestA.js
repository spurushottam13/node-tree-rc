import React from 'react';

function TestA() {
    return (
        <div className="box-a"
            dataItem="box-a"
            draggable
            onDragOver={e => e.preventDefault()}
            onDrop={e => console.log("DROP", e.target)}
            onDragStart={_ => console.log(_.type)}
        >
            <p>THis is Box A</p>
        </div>
    )
}

export default TestA
import React from 'react';
import Table from './table';

const students = [
    {
        name: "joe",
        course: "math",
        grade: 99
    },
    {
        name: "jane",
        course: "math",
        grade: 99
    },
    {
        name: "jill",
        course: "math",
        grade: 99
    },
];


function App () {
    return <div className="container">
        <h1>
            Student Grade Table
        </h1>
        <Table data={students}/>

    </div>
}

export default App;
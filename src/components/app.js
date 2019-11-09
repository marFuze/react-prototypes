import React from 'react';
import Table from './table';

function App () {
    return <div className="container">
        <h1>
            Student Grade Table
        </h1>
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>

        </Table>

    </div>
}

export default App;
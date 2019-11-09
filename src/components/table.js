import React from 'react'

function Table (props) {
    const tableRows = props.data.map((item,index) => {
        //console.log(item);
        return (
            
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });

    console.log ('tableRows',tableRows);
    return (

<table className="table" data="students">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>

        </table>
    )
}

export default Table;
import React from 'react'

function Table () {

    return (

<table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       Bruce 
                    </td>
                    <td>
                        Criminal Justice
                    </td>
                    <td>
                        99
                    </td>
                </tr>
                <tr>
                    <td>
                       Jane
                    </td>
                    <td>
                        Criminal Justice
                    </td>
                    <td>
                        99
                    </td>
                </tr>
                <tr>
                    <td>
                       Joe 
                    </td>
                    <td>
                        Criminal Justice
                    </td>
                    <td>
                        99
                    </td>
                </tr>
            </tbody>

        </table>
    )
}

export default Table;
import React from 'react';

export default props => {

    const {firstName, lastName, phone, email} = props.contact;

    return (
        //<h1>Full Name: {props.firstName} {props.lastName}</h1>
        <div className='col-6 my-3'>
            <div className='card'>
                <div className='card-header'>{lastName}</div>
                <div className='card-block'>
                <h4 className="card-title">{firstName + ' ' + lastName}</h4>
                    <div className='card-text'>
                        <p><b>Phone: </b>{phone}</p>
                        <p><b>Email: </b>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
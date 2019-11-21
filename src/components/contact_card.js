import React from 'react';

export default props => {
    return (
        //<h1>Full Name: {props.firstName} {props.lastName}</h1>
        <div className='col-6 my-3'>
            <div className='card'>
                <div className='card-header'></div>
                <div className='card-block'>
                    <h4 className='card-title'></h4>
                    <div className='card-text'>
                        <p><b>Phone:</b></p>
                        <p><b>Email:</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
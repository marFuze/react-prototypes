import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

const user = {
    name: "Stuart",
    luckyNumber: luckyNumber()
};

function luckyNumber () {
    return Math.random() * (1000 - 1) + 1;
}

function greeting (user) {
    return <div className="container">
        
        <h1>`Hello {user.name}`</h1>
        <h2 className="text-muted">Your lucky number is: {user}</h2>
        
    </div>
}



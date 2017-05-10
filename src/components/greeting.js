import React from 'react';

const Greeting = () => {
    const hours = (new Date()).getHours();
    return <span>good {hours < 12 ? 'morning' : hours < 18 ? 'afternoon' : 'evening'}</span>;
}

export default Greeting;
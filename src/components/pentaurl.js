import React from 'react';
import Penta from '../images/penta.svg';

const PentaUrl = ({ speed, text, to }) => {
    return (
        <a href={to} className={`box box${speed}`}>
            <img src={Penta} alt='pentacle' className={`penta${speed}`} />
            <span>{text}</span>
        </a>
    );
};

export default PentaUrl;

import React from 'react';
import Penta from '../images/penta.svg';

const PentaUrl = ({ speed, to }) => {
    return (
        <a href={to} className="box">
            <img src={Penta} alt='pentacle' className={`penta${speed}`} />
        </a>
    );
};

export default PentaUrl;

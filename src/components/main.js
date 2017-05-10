import React from 'react';
import Penta from '../images/penta.svg';

const Main = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="box" style={{ backgroundColor: '#C2DFE3', width: '15em', height: '15em' }}>
                	<img src={Penta} alt='pentacle' className="penta" />
                </div>
            </div>
        </section>
    );
};

export default Main;

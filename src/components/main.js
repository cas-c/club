import React from 'react';
import Penta from '../images/penta.svg';
//import Penta2 from '../images/penta2.svg';
//import Penta3 from '../images/penta2.svg';
//import Penta4 from '../images/penta2.svg';

const Main = () => {
    return (
        <section className="section">
            <div className="container main">
                <a href="https://lipgloss.sucks" className="box">
                	<img src={Penta} alt='pentacle' className="penta" />
                </a>
                <a href="https://lipgloss.sucks" className="box">
                	<img src={Penta} alt='pentacle' className="penta2" />
                </a>
                <a href="https://lipgloss.sucks" className="box">
                	<img src={Penta} alt='pentacle' className="penta3" />
                </a>
                <a href="https://lipgloss.sucks" className="box">
                	<img src={Penta} alt='pentacle' className="penta4" />
                </a>
            </div>
        </section>
    );
};

export default Main;

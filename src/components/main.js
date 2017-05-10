import React from 'react';
import PentaUrl from './pentaurl';

const Main = () => {
    return (
        <section className="section">
            <div className="container main">
            	<PentaUrl speed='1' to="https://lipgloss.sucks"/>
            	<PentaUrl speed='2' to="https://lipgloss.sucks"/>
            	<PentaUrl speed='3' to="https://lipgloss.sucks"/>
            	<PentaUrl speed='4' to="https://lipgloss.sucks"/>
            </div>
        </section>
    );
};

export default Main;

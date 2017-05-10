import React from 'react';
import PentaUrl from './pentaurl';

const Main = () => {
    return (
        <section className="section">
            <div className="container main">
                <PentaUrl speed='' to="https://soundcloud.com/lipglossed/" text="soundcloud" />
            	<PentaUrl speed='1' to="https://twitter.com/glosstradamus" text="twitter"/>
            	<PentaUrl speed='2' to="https://www.patreon.com/lipgloss" text="patreon" />
            	<PentaUrl speed='3' to="https://github.com/gloss-water" text="github" />
            	<PentaUrl speed='4' to="https://lipgloss.sucks" text="contact" />
            </div>
        </section>
    );
};

export default Main;

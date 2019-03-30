import React from 'react';

const Header = ({ onRouteChange }) => {
    return(
        <div className=''>
            <header className="bg-white black-80 tc pv4 avenir">
                <h1 className="mt2 mb0 baskerville i fw1 f1">Whisk Wishes</h1>
                <h2 className="mt2 mb0 f6 fw4 ttu tracked">Pastelería De Diseño</h2>
                <nav className="bt bb tc mw7 center mt4">
                    <p className="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l pointer" onClick={() => onRouteChange('home')}>Home</p>
                </nav>
            </header>
        </div>
    );
}


export default Header;
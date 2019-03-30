import React from 'react';

const Footer = ({ onRouteChange }) => {
    return(
        <div className=''>
            <footer className="ph3 ph4-ns pv6 bt b--black-10 black-70 bg-white-80">
                <a href="mailto:" className="baskerville link b f2-ns dim black-70 lh-solid i b pointer">whiskwishes@gmail.com</a>
                <p className="baskerville f6 db b ttu lh-solid">© Whisk Wishes 2019</p>
                <div className="mt5">
                    <a href="/language/" onClick={() => onRouteChange('home')} className="baskerville f3 dib pr2 mid-gray dim">Home</a>
                    <a href="/terms/" onClick={() => onRouteChange('about')} className="baskerville f3 dib ph2 mid-gray dim">About</a>
                    <a href="/privacy/" className="baskerville f3 dib pl2 mid-gray dim">Contact</a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
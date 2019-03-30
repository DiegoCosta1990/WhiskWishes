import React from 'react';

const About = () => {
    return(
        <div className='justify-center items-center'>
            <p className='baskerville justify-center items-center f1 i underline-hover grow bg-white-90 mb2'>About</p>
            <br></br>
            <article class="mw8 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <div class="tc">
                    <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h6 w6 dib" alt="foto agus"/>
                    <h1 class="f2 hover-light-green">Agustina Miraglia</h1>
                    <hr class="mw5 bb bw1 b--black-10"/>
                </div>
                <p class="lh-copy measure center f4 black-70">
                    Hello there!! I´m your cheff Agustina Miraglia. I´m from Argentina.
                    And I love pastry as much as make people happy, so... I´m trying to do both at the same time. :D
                    Check out my creations. I hope you like it. Sign in and ask me for everything you want.
                </p>
            </article>
        </div>              
    );
}


export default About;
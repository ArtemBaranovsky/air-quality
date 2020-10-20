import React from 'react';
import './HeroBlock.scss';

const HeroBlock = ({/*bgImg, */title, links, logos}) => {
    const LogosImages = logos.map((logoItem, i) => <img src={logoItem} alt="partner-logo" className="hero-partners-item" key={i}/>);
    const navItems = links.map((link, i) => <a href={link.href} className="hero-navigation-item" key={i}>{link.title}</a> );
    // const  bgCSS = {
    //     background: `url(${bgImg})`
    // };


    return (
      <section className="hero" /*style={bgCSS}*/>
        <div className="container">
            <div className="hero-partners">
              {/*array of partner's logos*/}
              {LogosImages}
            </div>

            <nav className="hero-navigation">
              {/*array of links*/}
              {navItems}
            </nav>
            {/*<h1 className="hero-title">Качество атмосферного воздуха</h1>*/}
            <h1 className="hero-title">{title}</h1>
            <a href="#" className="hero-link">Отследить</a>
        </div>
      </section>
    );
};

export default HeroBlock;
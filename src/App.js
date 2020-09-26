import React from 'react';

import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import gsLogo from './assets/GC_logo.svg';
import itnLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_logo_white.svg';
// import heroBg from './assets/hero-bg.jpg';

function App() {
  const partners = [
    shidLogo,
    itnLogo,
    gsLogo,
    // require('./assets/ITN_logo.svg')
  ];
  const navLinks = [
    { title: "Основные факты", href: "#facts" },
    { title: "Индекс качества воздуха", href: "#index" },
    { title: "Политика по уменьшению загрязнений", href: "#policy" },
  ];

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                 // bgImg={heroBg}
                 links={navLinks}
      />
    </>
  );
}

export default App;

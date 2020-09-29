import React from 'react';

import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import Facts from "./components/Facts/Facts";
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
  const factSlides =  [
    {
      id: '1332',
      imgUrl: require("./assets/facts-slider/slide-1.jpg"),
			desc: "Женщины и дети – главные жертвы загрязнения воздуха"
    },
    {
      id: '1333',
      imgUrl: require("./assets/facts-slider/slide-2.jpg"),
			desc: "Защитники окружающей среды подвергаются преследованиям"
    },
    {
      id: '1334',
      imgUrl: require("./assets/facts-slider/slide-3.jpg"),
			desc: "Загрязнение воздуха – нарушение прав человека"
    },
    {
      id: '1335',
      imgUrl: require("./assets/facts-slider/slide-4.jpg"),
			desc: "4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха"
    },
    {
      id: '1336',
      imgUrl: require("./assets/facts-slider/slide-5.jpg"),
			desc: "Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год."
    }
  ];

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                 // bgImg={heroBg}
                 links={navLinks}/>
      <Facts title="Основные факты" slides={factSlides}/>
    </>
  );
}

export default App;

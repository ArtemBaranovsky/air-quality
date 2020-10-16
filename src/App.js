import React from 'react';

import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import Facts from "./components/Facts/Facts";
import SectorsList from "./components/SectorsList/SectorsList";
import gsLogo from './assets/GC_logo.svg';
import itnLogo from './assets/ITN_logo.svg';
import shidLogo from './assets/shid_logo_white.svg';
import useScreenSize from "./utils/useScreenSize";
// import heroBg from './assets/hero-bg.jpg';

function App() {
  const sizeObj = useScreenSize();
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

  const sectors = [
    {
      name: "Промышленность",
      imgUrl: require("./assets/sectors-list/pexels-pixabay-326410.png"),
      description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)"
    },
    {
      name: "Транспорт",
      imgUrl: require("./assets/sectors-list/pexels-cottonbro-4604564.png"),
      description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы"
    },
    {
      name: "Городское планирование",
      imgUrl: require("./assets/sectors-list/pexels-aleksejs-bergmanis-681335.png"),
      description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов"
    },
    {
      name: "Энергия",
      imgUrl: require("./assets/sectors-list/pexels-cottonbro-3992206.png"),
      description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения"
    },
    {
      name: "Энергетика",
      imgUrl: require("./assets/sectors-list/pexels-flickr-157039.png"),
      description: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)"
    },
    {
      name: "Утилизация отходов",
      imgUrl: require("./assets/sectors-list/pexels-vladislav-vasnetsov-2682683.png"),
      description: "стратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов"
    },
  ];
  console.log(sizeObj);

  return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье"
                 logos={partners}
                 // bgImg={heroBg}
                 links={navLinks}/>
      <Facts title="Основные факты" slides={factSlides}/>
      <SectorsList title="Политика по уменьшению загрязнений"
                   subtitle="Есть много примеров успешной политики по уменьшению загрязнения воздуха в таких секторах, как транспорт, городское планирование, энергетика и промышленность:"
                   items={sectors}
      />

    </>
  );
}

export default App;

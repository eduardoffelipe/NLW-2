import React from 'react';
import { Link } from 'react-router-dom'

import './style.css'

import Logo from '../../assets/images/logo.svg'
import LandingImg from '../../assets/images/landing.svg'

import StudyIcon from '../../assets/images/icons/study.svg'
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg'
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">

          <img
            src={Logo}
            alt="Proffy"
          />
          <h2>Sua Plataforma de estudos online.</h2>

        </div>

        <img
          src={LandingImg}
          alt=""
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={StudyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={GiveClassesIcon} alt="Classes"/>
            Dar Aulas
          </Link>

        </div>
        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={PurpleHeartIcon} alt=""/>
        </span>
      </div>
    </div>
  );
}

export default Landing;
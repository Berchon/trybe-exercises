import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../images/logo-ihooks.svg';
import strawberrDaiquir from '../../images/Strawberr-Daiquir.png';
import tomatoPepper from '../../images/tomato-pepper.png';
import tomato from '../../images/tomato.png';
import './style.css';

function Home() {
  const history = useHistory();

  useEffect(() => {
    const time = 3000;
    setTimeout(() => {
      history.push('/login');
    }, time);
  }, []);

  const printLogo = () => (
    <div className="home-logo-circle-external">
      <div className="home-logo-circle-internal">
        <img
          className="home-logo-img"
          src={ logo }
          alt="Logotipo do ihooks"
        />
      </div>
    </div>
  );

  return (
    <div className="home-background">
      <div className="home-container">
        <div className="home-content">
          <div className="home-header">
            <img
              className="home-images"
              src={ strawberrDaiquir }
              alt="Imagem de um drink"
            />
            <img
              className="home-images"
              src={ tomatoPepper }
              alt="Imagem de tomates e pimentas"
            />
          </div>
          <div className="home-logo">
            { printLogo() }
          </div>
          <div className="home-footer">
            <img
              className="home-images"
              src={ tomato }
              alt="Imagem de alguns tomates"
            />
          </div>
        </div>
        <div className="home-elipse" />
      </div>
    </div>
  );
}
export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import drinkIcon from '../../images/drinkIcon.svg';
import exploreIcon from '../../images/exploreIcon.svg';
import mealIcon from '../../images/mealIcon.svg';
import './style.css';

function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-container" data-testid="footer">
        <div className="header-circle-img">
          <Link to="/bebidas">
            <img
              className="footer-img"
              src={ drinkIcon }
              alt="Ir para a página de bebibas"
              data-testid="drinks-bottom-btn"
            />
          </Link>
        </div>
        <div className="header-circle-img">
          <Link to="/explorar">
            <img
              className="footer-img"
              src={ exploreIcon }
              alt="Ir para a página de exploração"
              data-testid="explore-bottom-btn"
            />
          </Link>
        </div>
        <div className="header-circle-img">
          <Link to="/comidas">
            <img
              className="footer-img"
              src={ mealIcon }
              alt="Ir para a página de comidas"
              data-testid="food-bottom-btn"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;

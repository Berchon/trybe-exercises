import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from '../../components';
import food from '../../images/food.png';
import drink from '../../images/lemonade.png';
import './style.css';

function Explore() {
  const printExplorerFood = () => (
    <Link
      className="explore-content"
      to="/explorar/comidas"
      data-testid="explore-food"
    >
      {/* <button className="explore-button" type="button" data-testid="explore-food"> */}
      <img src={ food } className="explore-img" alt="Explorar comidas" />
      <div className="explore-titles">
        <span className="explore-title">
          Explorar
        </span>
        <span className="explore-title">
          COMIDAS
        </span>
      </div>
      {/* </button> */}
    </Link>
  );

  const printExplorerDrink = () => (
    <Link
      className="explore-content"
      to="/explorar/bebidas"
    >
      {/* <button className="explore-button"
      type="button" data-testid="explore-drinks"> */}
      <img src={ drink } className="explore-img" alt="Explorar comidas" />
      <div className="explore-titles">
        <span className="explore-title">
          Explorar
        </span>
        <span className="explore-title">
          BEBIDAS
        </span>
      </div>
      {/* </button> */}
    </Link>
  );

  return (
    <div className="main-page-background">
      <div className="main-page-container">
        <div className="main-page-content">
          <Header />
          <div className="main-page-middle">
            <div className="main-page-content">
              {
                printExplorerFood()
              }
              {
                printExplorerDrink()
              }
            </div>
          </div>
          <Footer />
        </div>
        <div className="main-page-elipse" />
      </div>
    </div>
  );
}

export default Explore;

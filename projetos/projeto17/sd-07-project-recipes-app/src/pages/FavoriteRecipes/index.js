import React, { useState, useEffect } from 'react';
import { Header, FavoriteAndDone } from '../../components';
import { getStorage } from '../../services/localStorage';
import './style.css';

function FavoriteRecipes() {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    setFavorite(getStorage('favoriteRecipes'));
  }, []);

  const printFavorite = () => (
    <div className="explore-by-ingredient-content1 e-b-i-c1">
      <FavoriteAndDone data={ [...favorite] } />
    </div>
  );

  return (
    <div className="explore-by-ingredient-background">
      <div className="explore-by-ingredient-container">
        <div className="explore-by-ingredient-content">
          <Header />
          <div className="explore-by-ingredient-middle1">
            { printFavorite() }
          </div>
        </div>
        <div className="explore-by-ingredient-elipse" />
      </div>
    </div>

  // <div>
  //   <FavoriteAndDone data={ [...favorite] } />
  // </div>
  );
}

export default FavoriteRecipes;

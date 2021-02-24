import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import RequestData from '../../services/RequestAPI';
import { DetailsHeader, Carousel } from '../../components';
import './style.css';
import { getStorage } from '../../services/localStorage';

function RecipeDetails() {
  const [details, setDetails] = useState();
  const [inProgress, setInProgress] = useState(false);
  const { category, idReceita } = useParams();

  useEffect(() => {
    if (category === 'comidas') {
      RequestData(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idReceita}`,
      ).then((response) => {
        setDetails(...response.meals);
      });
    } else if (category === 'bebidas') {
      RequestData(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceita}`,
      ).then((response) => {
        setDetails(...response.drinks);
      });
    }
  }, [category, idReceita]);

  useEffect(() => {
    const recipe = getStorage('inProgressRecipes');
    if (category === 'comidas' && recipe.meals) {
      const bool = Object.keys(recipe.meals).find((id) => id === idReceita);
      setInProgress(bool);
    } else if (category === 'bebidas' && recipe.cocktails) {
      const bool = Object.keys(recipe.cocktails).find((id) => id === idReceita);
      setInProgress(bool);
    }
  }, [category, idReceita]);

  function takeIngredients() {
    if (!details) return undefined;
    return Object.keys(details).filter(
      (info) => info.includes('Ingredient')
        && details[info] !== null
        && details[info] !== '',
    );
  }

  function takeMeasure() {
    if (!details) return undefined;
    return Object.keys(details).filter(
      (info) => info.includes('Measure')
        && details[info] !== null
        && details[info] !== '',
    );
  }

  return (
    <div className="recipe-details-background">
      <div className="recipe-details-container">
        <div className="recipe-details-content">

          {!details && 'Loading...'}
          {details && (
            <div>
              <DetailsHeader details={ details } />
              <div className="recipe-details-container-main">
                <h3>Ingredientes</h3>
                <div className="recipe-details-container-main-container">
                  {takeIngredients().map((ingredients, index) => (
                    <p
                      data-testid={ `${index}-ingredient-name-and-measure` }
                      key={ ingredients }
                    >
                      {`${details[ingredients]}  ${
                        details[takeMeasure()[index]]
                      }`}
                    </p>
                  ))}
                </div>
                <h3>Instruções</h3>
                <div className="recipe-details-container-main-container">
                  <p data-testid="instructions">{details.strInstructions}</p>
                  {
                    category === 'comidas' && (
                      <object
                        data-testid="video"
                        aria-labelledby="video"
                        width="425"
                        height="344"
                        data={ details.strYoutube }
                      />
                    )
                  }
                </div>
                <Carousel />
                { !inProgress && (
                  <Link to={ `/${category}/${idReceita}/in-progress` }>
                    <button
                      className="footer-button"
                      type="button"
                      data-testid="start-recipe-btn"
                    >
                      Iniciar Receita
                    </button>
                  </Link>
                )}
                {inProgress && (
                  <button
                    className="footer-button"
                    type="button"
                    data-testid="start-recipe-btn"
                  >
                    Continuar Receita
                  </button>

                )}
              </div>
            </div>
          )}
        </div>
        <div className="recipe-details-elipse" />
      </div>
    </div>
  );
}

export default RecipeDetails;

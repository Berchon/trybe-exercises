import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import context from '../../context';
import { Footer, Header } from '../../components';
import RequestData from '../../services/RequestAPI';
import './style.css';

function ExploreBy() {
  // const { location } = props;
  const history = useHistory();
  const { pathname } = history.location;
  // console.log(history.location)
  const { setDetails } = useContext(context);

  const handleClick = async () => {
    const newPathname = pathname.replace('/explorar/', '/');

    async function fetchData() {
      const recipeType = (newPathname === '/comidas') ? 'meal' : 'cocktail';
      const URL_FILTERS = `https://www.the${recipeType}db.com/api/json/v1/1/random.php`;
      const dataDetail = await RequestData(URL_FILTERS);
      let id = '';
      if (newPathname === '/comidas') {
        await setDetails(dataDetail.meals);
        const { idMeal } = await dataDetail.meals[0];
        id = idMeal;
      } else {
        await setDetails(dataDetail.drinks);
        const { idDrink } = await dataDetail.drinks[0];
        id = idDrink;
      }
      return (id);
    }

    const idDetails = await fetchData();
    history.push(`${newPathname}/${idDetails}`);
  };

  const printExplorerIngredient = () => (
    <Link
      className="explore-content"
      to={ `${pathname}/ingredientes` }
      data-testid="explore-by-ingredient"
    >
      <div className="explore-titles">
        Por Ingredientes
      </div>
    </Link>
    // <button
    //   className="explore-button"
    //   type="button"
    //   data-testid="explore-by-ingredient"
    // >
    // </button>
  );

  const printExplorerLocal = () => (
    (pathname === '/explorar/comidas')
    && (
      <Link
        className="explore-content"
        to="/explorar/comidas/area"
        // className="explore-button"
      >
        <div className="explore-titles">
          Por Local de Origem
        </div>
      </Link>
      // <button
      //   type="button"
      //   data-testid="explore-by-area"
      // >
      // </button>
    )
  );

  const printExplorerSurprise = () => (
    // <div className="explore-content">
    <button
      // className="explore-button"
      className="explore-content explore-button"
      type="button"
      data-testid="explore-surprise"
      onClick={ handleClick }
      onKeyPress={ handleClick }
    >
      <div className="explore-titles">
        Me Surpreenda!
      </div>
    </button>
    // </div>
  );

  return (
    <div className="main-page-background">
      <div className="main-page-container">
        <div className="main-page-content">
          <Header />
          <div className="main-page-middle">
            <div className="main-page-content">
              {
                printExplorerIngredient()
              }
              {
                printExplorerLocal()
              }
              {
                printExplorerSurprise()
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

export default ExploreBy;

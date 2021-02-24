import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Footer, Header } from '../../components';
import { getStorage } from '../../services/localStorage';
import './style.css';

function Profile() {
  const [user, setEmail] = useState();

  useEffect(() => {
    const localStorageEmail = getStorage('user');
    setEmail(localStorageEmail.email);
  }, [user]);

  const printTitle = () => (
    <h3 className="profile-text" data-testid="profile-email">{user}</h3>
  );

  const printFeitas = () => (
    <Link
      to="/receitas-feitas"
      className="profile-button"
      data-testid="profile-done-btn"
    >
      <span className="profile-button-text">
        Receitas Feitas
      </span>
    </Link>
  );

  const printFavoritas = () => (
    <Link
      to="/receitas-favoritas"
      className="profile-button"
      data-testid="profile-favorite-btn"
    >
      <span className="profile-button-text">
        Receitas Favoritas
      </span>
    </Link>
  );

  const printSair = () => (
    <Link
      to="/"
      data-testid="profile-logout-btn"
      className="profile-button"
      onClick={ () => localStorage.clear() }
    >
      <span className="profile-button-text">
        Sair
      </span>
    </Link>
    // <button
    //   type="button"
    // >
    // </button>
  );

  return (
    <div className="explore-by-ingredient-background">
      <div className="explore-by-ingredient-container">
        <div className="explore-by-ingredient-content">
          <Header />
          <div className="explore-by-ingredient-middle">
            <div className="explore-by-ingredient-content e-b-i-c">
              {
                printTitle()
              }
              {
                printFeitas()
              }
              {
                printFavoritas()
              }
              {
                printSair()
              }
            </div>
          </div>
          <Footer />
        </div>
        <div className="explore-by-ingredient-elipse" />
      </div>
    </div>

  // <div>
  //   <Header />
  //   <h3 data-testid="profile-email">{user}</h3>
  //   <Link to="/receitas-feitas">
  //     <button
  //       type="button"
  //       data-testid="profile-done-btn"
  //     >
  //       Receitas Feitas
  //     </button>
  //   </Link>
  //   <Link to="/receitas-favoritas">
  //     <button
  //       type="button"
  //       data-testid="profile-favorite-btn"
  //     >
  //       Receitas Favoritas
  //     </button>
  //   </Link>
  //   <Link to="/">
  //     <button
  //       type="button"
  //       data-testid="profile-logout-btn"
  //       onClick={ () => localStorage.clear() }
  //     >
  //       Sair
  //     </button>
  //   </Link>
  //   <Footer />
  // </div>
  );
}

export default Profile;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import imageHome from '../icons/017-home.svg';
import imageLogin from '../icons/034-user.svg';
import imageAdd from '../icons/001-add-button.svg';
import imageList from '../icons/036-zoom.svg';

class Menu extends Component {
  render() {
    const { text, route } = this.props;
    let image = '';
    switch  (text) {
      case 'Home':
        image = imageHome;
        break;
      case 'Login':
        image = imageLogin;
        break;
      case 'Adiciona novo cliente':
        image = imageAdd;
        break;
      case 'Lista todos os clientes':
        image = imageList;
        break;
      default:
        image = '';
    }
    return(
      <div className="menu-container">
        <Link className="menu-content" to={route}>
          <img className="menu-image" src={image} alt="Menu"/>
          <span className="menu-text">{text}</span>
        </Link>
        </div>
    )
  }
}

export default Menu
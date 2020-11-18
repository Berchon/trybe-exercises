import React, { Component } from 'react';
import './App.css';

class ApiDog extends Component {
  constructor() {
    super();
    this.fetchDog = this.fetchDog.bind(this);
    this.state = { message: '' };
  }

  async fetchDog() {
    const request = await fetch('https://dog.ceo/api/breeds/image/random');
    const json = await request.json();
    console.log(json.message)
    if (!json.message.includes('terrier')) {
      this.setState({ message: json.message });
    }
    await alert(`A raça do doguinho é ${json.message.split('/')[4]}`);
    
    // return await (json);
  }

  // Com a implementacao do botao essa funcao fica desnecessária
  //vou deixar pq eh o conteudo de hj
  componentDidMount() {
    this.fetchDog();
  }
  
  render() {
    console.log(this.state.message)
    const loading = <span>Loading ...</span>;
    
    return(
      <div>
        <p>
          {(this.state.message) ? <img className='imagem' src={this.state.message} alt='Descricao da imagem'/> : loading}
        </p>
        <button onClick={this.fetchDog}>Atualiza Imagem</button>
      </div>
    );
  }
}

export default ApiDog;
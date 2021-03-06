import React, { createContext } from 'react';
import ISSLocation from '../components/ISSLocation';
import ISSContext from '../context/ISSContext';
import getCurrentISSLocation from '../services/issAPI';

// ISSContext = { Provider: <Provider />, Consumer: <Consumer />}

class Provider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isFetching: false,
      latitude: -19.9410656,
      longitude: -43.9333033,
    }
    this.fetchISSLocation = this.fetchISSLocation.bind(this);
    this.handleISSLocationFailure = this.handleISSLocationFailure.bind(this);
    this.handleISSLocationSuccess = this.handleISSLocationSuccess.bind(this);
  }

  fetchISSLocation() {
    const { isFetching } = this.state;

    if(isFetching) return;

    this.setState({ isFetching: true });

    getCurrentISSLocation()
      .then(this.handleISSLocationSuccess, this.handleISSLocationFailure);
  }

  handleISSLocationSuccess(response) {
    const { iss_position: { latitude, longitude } } = response;
    this.setState({
      isFetching: false,
      latitude: latitude,
      longitude: longitude,
    })
  }

  handleISSLocationFailure(error) {
    this.setState({
      isFetching: false,
      error: error.message,
    })
  }

  render() {
    const contextValue = {
      ...this.state,
      getCurrentISSLocation: this.fetchISSLocation,
    };
    const { children } = this.props;
    return (
      <ISSContext.Provider value={contextValue}>
        {children}
      </ISSContext.Provider>
    );
  }
}

export default Provider;

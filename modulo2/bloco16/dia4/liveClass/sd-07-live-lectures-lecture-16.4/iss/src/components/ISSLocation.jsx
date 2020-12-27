import React, { Component } from 'react';
import { connect } from 'react-redux';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';
import { fetchISSLocation } from '../actions'

const varginha = [-21.546600, -45.433609]
const beloHorizonte = [-19.917299, -43.934559]
const salvador = [-12.977749, -38.501629]
const saoPaulo = [-23.550520, -46.633308]

class ISSLocation extends Component {
  componentDidMount() {
    const { getCurrentISSLocation } = this.props;
    this.timer = setInterval(
      getCurrentISSLocation,
      2000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { error, isFetching, latitude, longitude } = this.props;
    const isLocationPresent = latitude && longitude
    return (
      <div className="map">
        <Map
          center={[0, 0]}
          defaultWidth={700}
          height={450}
          minZoom={1}
          maxZoom={8}
          zoom={1}
        >
          {!isFetching && isLocationPresent && <Marker anchor={[latitude, longitude]} />}
        </Map>
        {isFetching && 'Loading...'}
        {!isFetching && isLocationPresent && `Location: ${latitude}, ${longitude}`}

        {!isFetching && error && error.message}
      </div>
    );
  }
}

const mapStateToProps = ({
  issLocation: {
    error,
    isFetching,
    latitude,
    longitude
  }
}) => ({
  error,
  isFetching,
  latitude,
  longitude
})

const mapDispatchToProps = (dispatch) =>({
  getCurrentISSLocation: () => dispatch(fetchISSLocation())
})

export default connect(mapStateToProps, mapDispatchToProps)(ISSLocation);
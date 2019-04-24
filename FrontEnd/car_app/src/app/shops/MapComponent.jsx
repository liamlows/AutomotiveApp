import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './MapComponent.css';
import Listing from './Listing';

export class MapContainer extends Component {
    // constructor(props){
        // super(props);
        // const {lat, lng} = this.props.initialCenter;
        // const { lat, lng } = this.props.initialCenter;

        // var lat = 32.842661;
        // var lng = -96.782312;
    // }

    state = {
        selectedPlace: {
            name: ""
        },
        places: [],
        currentLocation: {
            lat: this.lat,
            lng: this.lng
        },
        activeMarker: {},
        showingInfoWindow: false
    }

    style = {
        width: '40%',
        height: '60%',
        position: 'relative',
        margin: '2em 0em 2em 0em'
    }

    onMarkerClick = (props, marker) =>
    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });

  onInfoWindowClose = () =>
    this.setState({
      activeMarker: null,
      showingInfoWindow: false
    });

  onMapClicked = () => {
    if (this.state.showingInfoWindow)
      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
  };

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    })
                })
            }
        }
    }

    fetchPlaces = (mapProps, map) => this.searchNearby(map, map.center);

    searchNearby = (map, center) => {
      const { google } = this.props;

      const service = new google.maps.places.PlacesService(map);

      // Specify location, radius and place types for your Places API search.
      const request = {
        location: center,
        radius: '1000',
        type: ['car_repair']
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK)
          this.setState({ places: results });
      });
    };

    render() {
        if (!this.props.loaded) return <div>Loading...</div>;
        return (
            <>
            <div className="parent">
            <div className="google_map">
                <Map centerAroundCurrentLocation google={this.props.google} onReady={this.fetchPlaces}
                    onRecenter={this.fetchPlaces} onClick={this.onMapClicked}
                     onDragend={this.fetchPlaces}  zoom={14} style={this.style}>

                    <Marker onClick={this.onMarkerClick} name={'Current location'} />

                    {this.state.places.map(p =>
                        <Marker onClick={this.onMarkerClick} name={p.name} position={p.geometry.location} />
                    )}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        onClose={this.onInfoWindowClose}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow>

                </Map>
            </div>

            <div className="places">
                <Listing places={this.state.places} style={{overflowY: 'scroll'}}/>
            </div>
            <div className="clearfix"> </div>
            <hr/>
            </div>
            </>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDofTzgMt6_8WFGoy-gb0CepOWTugEuELc")
})(MapContainer)

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from 'react-simple-maps'

import { Motion, spring } from 'react-motion'

const wrapperStyles = {
  width: '100%',
  maxWidth: '100%',
  margin: '0 auto',
  fontFamily: 'Roboto, sans-serif'
}

class Map extends Component {
  state = {
    listOfCountries: [],
    center: [0, 20],
    zoom: 1,
    activeCountry: '',
    countries: [
      { name: 'Andorra', coordinates: [1.601554, 42.546245], zoomTimes: 40 },
      { name: 'United Arab Emirates', coordinates: [53.847818, 23.424076], zoomTimes: 4 },
      { name: 'Afghanistan', coordinates: [67.709953, 33.93911], zoomTimes: 2 }
      //  https://developers.google.com/public-data/docs/canonical/countries_csv grabbing coordinates from here! lol long process.
    ]
  }
  handleCountrySelection = this.handleCountrySelection.bind(this)
  handleReset = this.handleReset.bind(this)

  handleCountrySelection (evt) {
    const countryId = evt.target.getAttribute('data-country')
    const country = this.state.countries[countryId]
    this.setState({
      center: country.coordinates,
      zoom: country.zoomTimes
    })
  }
  handleReset () {
    this.setState({
      center: [0, 20],
      zoom: 1
    })
  }

  handleZoomIn () {
    this.setState({
      zoom: this.state.zoom + 1
    })
  }

  handleZoomOut () {
    if (this.state.zoom !== 1) {
      this.setState({
        zoom: this.state.zoom - 1
      })
    }
  }

  getCountryName (countryName) {
    this.setState({
      activeCountry: countryName
    })
  }

  render () {
    return (
      <div className="div buttons-for-countries">
        <div style={wrapperStyles}>
          {
            this.state.countries.map((country, i) => (
              <button
                key={i}
                className="btn px1"
                data-country={i}
                onClick={this.handleCountrySelection}
              >
                { country.name }
              </button>
            ))
          }
          <button onClick={this.handleReset}>
            { 'Reset' }
          </button>
          <button onClick={() => this.handleZoomIn()}>ZOOM IN</button>
          <button onClick={() => this.handleZoomOut()}>ZOOM OUT</button>
          <h1>{this.state.activeCountry}</h1>
        </div>
        <div style={wrapperStyles}>
          <Motion
            defaultStyle={{
              zoom: 1,
              x: 0,
              y: 20
            }}
            style={{
              zoom: spring(this.state.zoom, { stiffness: 210, damping: 20 }),
              x: spring(this.state.center[0], { stiffness: 210, damping: 20 }),
              y: spring(this.state.center[1], { stiffness: 210, damping: 20 })
            }}
          >
            {({ zoom, x, y }) => (
              <ComposableMap
                projectionConfig={{
                  scale: 205,
                  rotation: [-11, 0, 0]
                }}
                width={980}
                height={551}
                style={{
                  width: '100%',
                  height: 'auto'
                }}
              >
                <ZoomableGroup center={[x, y]} zoom={zoom}>
                  <Geographies geography={ '/countries-50m.json' }>

                    {(geographies, projection) => geographies.map(geography => (
                      <Link key={geography.id} to={`/country/${geography.properties.name}`}>
                        <Geography
                          key={ `A${geography.properties.name}` }
                          geography={ geography }
                          projection={ projection }
                          countries={this.state.listOfCountries.push(geography.properties.name)}
                          onMouseEnter={() => this.getCountryName(geography.properties.name)}
                          onMouseMove={this.handleMove}
                          onMouseLeave={this.handleLeave}
                          style={{
                            default: {
                              fill: '#ECEFF1',
                              fillOpacity: 0,
                              stroke: '#FFF',
                              strokeWidth: 0.8,
                              outline: 'none'
                            },
                            hover: {
                              fill: '#f7b731',
                              stroke: '#607D8B',
                              strokeWidth: 0.1,
                              outline: 'none'
                            },
                            pressed: {
                              fill: '#FF5722',
                              stroke: '#607D8B',
                              strokeWidth: 0.1,
                              outline: 'none'
                            }
                          }}
                        />
                      </Link>
                    ))}
                  </Geographies>
                  <Markers>
                    {this.state.countries.map((country, i) => (
                      <Marker key={i} marker={country}>
                        <circle
                          cx={0}
                          cy={0}
                          r={6}
                          fill="#03fc35"
                          opacity="0.4"
                          stroke="#03fcf8"
                        />
                      </Marker>
                    ))}
                  </Markers>
                </ZoomableGroup>
              </ComposableMap>
            )}
          </Motion>
        </div>
      </div>
    )
  }
}

export default Map

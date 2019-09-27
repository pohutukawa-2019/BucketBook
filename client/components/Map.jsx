import React, { Component } from 'react'

import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker
} from "react-simple-maps"

import { Motion, spring } from "react-motion"

import {
  Tooltip,
  actions,
} from "redux-tooltip"

const wrapperStyles = {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  fontFamily: "Roboto, sans-serif"
}

const { show, hide } = actions

class Map extends Component {
  state = {
    center: [0,20],
    zoom: 1,
    countries: [
      { name: "Andorra", coordinates: [1.601554,42.546245],  zoomTimes: 40 },
      { name: "United Arab Emirates", coordinates: [53.847818,23.424076],  zoomTimes: 4 },
      { name: "Afghanistan", coordinates: [67.709953,33.93911	] , zoomTimes: 2 },
      { name: "Antigua and Barbuda", coordinates: [-61.796428, 17.060816],  zoomTimes: 12 },
      { name: "Anguilla", coordinates: [-63.068615,18.220554],  zoomTimes: 12 },
      { name: "Albania", coordinates: [20.168331,	41.153332	] ,  zoomTimes: 2},
      { name: "Armenia", coordinates: [45.038189	,40.069099	],  zoomTimes: 2},
      { name: "Netherlands Antilles", coordinates: [-69.060087,12.226079], zoomTimes: 2},
      { name: "Angola", coordinates: [	17.873887	,	-11.202692	],  zoomTimes: 2 },
      { name: "Antarctica", coordinates: [-0.071389,-75.250973	],  zoomTimes: 2 },
      { name: "Argentina", coordinates: [-63.616672, -38.416097],  zoomTimes: 3 },
      { name: "American Samoa", coordinates: [-170.132217	, -14.270972],  zoomTimes: 40},
      { name: "Austria", coordinates: [14.550072,	47.516231],  zoomTimes: 1.5 },
      { name: "Australia", coordinates: [133.775136, -25.274398], zoomTimes: 3 },
      { name: "Niue", coordinates: [	-169.867233, 	-19.054445	], zoomTimes: 40 },
      //https://developers.google.com/public-data/docs/canonical/countries_csv grabbing coordinates from here! lol long process.
    ]
  }
  handleCountrySelection = this.handleCountrySelection.bind(this)
  handleReset = this.handleReset.bind(this)

handleCountrySelection(evt) {
  const countryId = evt.target.getAttribute("data-country")
  const country = this.state.countries[countryId]
  this.setState({
    center: country.coordinates,
    zoom: country.zoomTimes,
  })
}
handleReset() {
  this.setState({
    center: [0,20],
    zoom: 1,
  })
}

handleZoomIn() {
  this.setState({
    zoom: zoom+1,
  })
}

handleZoomOut() {
  this.setState({
    zoom: zoom-1,
  })
}

// handleMove(geography, evt) {
//   const x = evt.clientX
//   const y = evt.clientY + window.pageYOffset
//   this.props.dispatch(
//     show({
//       origin: { x, y },
//       content: geography.properties.name,
//     })
//   )
// }

// handleLeave() {
//   this.props.dispatch(hide())
// }

  render() {
    return (
      <div className="div buttons-for-countries">
      <div style={wrapperStyles}>
        {
          this.state.countries.map((country, i) => (
            <button
              key={i}
              className="btn px1"
              // edit styling further here
              data-country={i}
              onClick={this.handleCountrySelection}
              >
              { country.name }
            </button>
          ))
        }
        <button onClick={this.handleReset}>
          { "Reset" }
        </button>
      </div>
      <div style={wrapperStyles}>
        <p> TESTT</p>
        <Motion
          defaultStyle={{
            zoom: 1,
            x: 0,
            y: 20,
          }}
          style={{
            zoom: spring(this.state.zoom, {stiffness: 210, damping: 20}),
            x: spring(this.state.center[0], {stiffness: 210, damping: 20}),
            y: spring(this.state.center[1], {stiffness: 210, damping: 20}),
          }}
          >
          {({zoom,x,y}) => (
        <ComposableMap
          projectionConfig={{
            scale: 205,
            rotation: [-11,0,0],
          }}
          width={980}
          height={551}
          style={{
            width: "100%",
            height: "auto",
          }}
        >
  <ZoomableGroup center={[x,y]} zoom={zoom}>
    <Geographies geography={ "/countries-50m.json" }>
      {(geographies, projection) => geographies.map(geography => (
        <Geography 
        key={ geography.id } 
        geography={ geography } 
        projection={ projection } 
        onClick={() => console.log(geography.properties.name)}
        onMouseMove={this.handleMove}
        onMouseLeave={this.handleLeave}
        style={{
          default: {
            fill: "#ECEFF1",
            fillOpacity: 0,
            stroke: "#000",
            strokeWidth: 0.4,
            outline: "none",
          },
          hover: {
            fill: "#607D8B",
            stroke: "#607D8B",
            strokeWidth: 0.1,
            outline: "none",
          },
          pressed: {
            fill: "#FF5722",
            stroke: "#607D8B",
            strokeWidth: 0.1,
            outline: "none",
          }}} 
          />
      ))}
    </Geographies>
    <Markers>
                { <Marker marker={{ coordinates: [ 8.5, 47.3 ] }}>
                    <button onClick={() => this.handleZoomIn()}>ZOOM IN</button>
                    
                </Marker>}

                < Marker marker={{ coordinates: [ 8.5, 47.3 ] }}>
                <button onClick={() => this.handleZoomOut()>ZOOM OUT </button>
// ISSUES HERE!!!
                </Marker>
                  this.state.countries.map((country, i) => (
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
                  ))
                }
              </Markers>
  </ZoomableGroup>
</ComposableMap>
)}

      </Motion>
      {/* <Tooltip/> */}
      </div>
      </div>
    )
  }
}
 
export default Map 

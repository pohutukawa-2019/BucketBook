import React from 'react'

class CountryPage extends React.Component {
  render(props) {
    return (
      <div>
        <h1>Welcome</h1>
        <p>Selected country is {this.props.match.params.selectedCountry}</p>
      </div>
    )
  }
}

export default CountryPage

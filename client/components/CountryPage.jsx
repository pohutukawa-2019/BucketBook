import React from 'react'
import { connect } from 'react-redux'

import BucketList from './BucketList'
import Header from './Header'
import Footer from './Footer'
import { getCountry } from '../actions/country'

class CountryPage extends React.Component {
  componentDidMount () {
    const selectedCountry = this.props.match.params.selectedCountry
    this.props.getCountry(selectedCountry)
  }

  render () {
    return (
      <>
        <Header />
        <div className='bucketlist-container'>
          <div className='bucketlist-header'>
            <h1>Add an item to<br></br> your bucket list.</h1>
            <h2 style={{float: 'right', top: '-3vh',right: '10vw', position: 'relative'}}>{this.props.match.params.selectedCountry}</h2>
          </div>
          <BucketList />
        </div>
        <Footer />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCountry: state.selectedCountry
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountry: selectedCountry => dispatch(getCountry(selectedCountry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage)

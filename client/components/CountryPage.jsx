import React from 'react'
import { connect } from 'react-redux'

import BucketList from './BucketList'
import Header from './Header'
import Footer from './Footer'
import Waiting from './Waiting'

import { getCountry } from '../actions/country'
import { countryPageReady } from '../actions/countryPageLoaded'
import { getBucketList } from '../actions/bucketListItems'
import { getBackgroundByCountry } from '../actions/getCountryBackground'

class CountryPage extends React.Component {
  state = {
    style: {
      backgroundImage: '',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      width: '100vw',
      backgroundRepeat: 'no-repeat'
    }
  }
  randomPhoto = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
  }
  componentDidMount () {
    const selectedCountry = this.props.match.params.selectedCountry
    this.props.getBackgroundByCountry(selectedCountry)
      .then(() => {
        this.setState({
          style: {
            backgroundImage: `url(${this.props.background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            backgroundRepeat: 'no-repeat'
          }
        })
        this.props.getCountry(selectedCountry)
        this.props.getBucketList(selectedCountry)
          .then(() => {
            setTimeout(() => {
              this.props.countryPageReady()
            }, 5000)
          })
      })
  }

  render () {
    return (
      <div className='bucketlist-container' style={this.state.style}>
        <Header />
      {this.props.waiting && <Waiting />} 
      {this.props.waiting === false && <><div className='bucketlist-header'>
          <h1>Add an item to<br></br> your bucket list.</h1>
          <h2 style={{ float: 'right', top: '-3vh', right: '10vw', position: 'relative' }}>{this.props.match.params.selectedCountry}</h2>
        </div>
        <BucketList /> </> }
       
       

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedCountry: state.selectedCountry,
    background: state.background,
    waiting: state.waiting
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCountry: selectedCountry => dispatch(getCountry(selectedCountry)),
    getBucketList: selectedCountry => dispatch(getBucketList(selectedCountry)),
    getBackgroundByCountry: selectedCountry => dispatch(getBackgroundByCountry(selectedCountry)),
    countryPageReady: () => dispatch(countryPageReady())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage)

import React from 'react'
import { connect } from 'react-redux'

import BucketList from './BucketList'
import Header from './Header'
import Footer from './Footer'

import { getCountry } from '../actions/country'
import { getBucketList } from '../actions/bucketListItems'

import { fetchBackgroundImageByCountry } from '../api/fetchBackgroundImage'

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
    const random = this.randomPhoto(1, 10)
    fetchBackgroundImageByCountry(selectedCountry)
      .then(res => {
        this.setState({ style: {
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${res.body.results[random].urls.full})`
        } })
      })
    this.props.getCountry(selectedCountry)
    this.props.getBucketList(selectedCountry)
  }

  render () {
    return (
      <div className='country-container' style={this.state.style}>
        <Header />
        <div style={{
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: 'rgba(30, 113, 128, 0.80)',
              width: '90vw',
              height: '85vh',
              borderRadius: '15px 15px 0px 0px',
              position: 'relative',
              left: '5vw',
              top: '6vh'
            }} className='bucketlist-container'>
          <div className='bucketlist-header'>
            <h1 style={{
              position: 'relative',
              left: '3vw',
              top: '2vh',
              fontWeight: '100'
            }}>Start adding to your list</h1>
            <h2 style={{ float: 'right', bottom: '5.5vh', right: '4vw', position: 'relative' }}>{this.props.match.params.selectedCountry}</h2>
          </div>
          <BucketList />
        </div>
        <Footer />
      </div>
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
    getCountry: selectedCountry => dispatch(getCountry(selectedCountry)),
    getBucketList: selectedCountry => dispatch(getBucketList(selectedCountry))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryPage)

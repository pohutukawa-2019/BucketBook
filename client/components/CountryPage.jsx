import React from 'react'

import BucketList from './BucketList'
import Header from './Header'
import Footer from './Footer'

class CountryPage extends React.Component {
  render() {
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

export default CountryPage

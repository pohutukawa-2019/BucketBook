import React from 'react'

import BucketList from './BucketList'

class CountryPage extends React.Component {
  render() {
    return (
      <div className='bucketlist-container'>
        <div className='bucketlist-header'>
          <h1>Add an item to<br></br> your bucket list.</h1>
          <h2 style={{float: 'right', top: '-3vh',right: '10vw', position: 'relative'}}>{this.props.match.params.selectedCountry}</h2>
        </div>
        <BucketList />
      </div>
    )
  }
}

export default CountryPage

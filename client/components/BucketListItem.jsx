import React from 'react'
import { connect } from 'react-redux'

const BucketListItem = (props) => {
  return(
    <div className='bucketlist-item'>
      <h4>Test</h4>
      <p>Testerosa</p>
    </div>
  )
}

export default connect()(BucketListItem)
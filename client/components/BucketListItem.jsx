import React from 'react'
import { connect } from 'react-redux'

const BucketListItem = (props) => {
  return(
    <div className='bucketlist-item'>
      <p>{props.title}</p> 
      <button>X</button>
    </div>
  )
}

export default connect()(BucketListItem)
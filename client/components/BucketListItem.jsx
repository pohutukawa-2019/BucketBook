import React from 'react'
import { connect } from 'react-redux'

const BucketListItem = (props) => {
  return(
    <div style={{
      
    }} className='bucketlist-item'>
      <p>{props.title}</p> 
      <button onClick={() => props.removeHandler(props.id, props.countryName)}>X</button>
    </div>
  )
}

export default connect()(BucketListItem)

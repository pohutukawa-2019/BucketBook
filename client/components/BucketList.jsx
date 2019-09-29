import React, { Component } from 'react'
import { connect } from 'react-redux'

import BucketListItem from './BucketListItem'
import AddNewBucketListItem from './AddNewBucketListItem'


class BucketList extends Component {
 render() {
    return (
      <div className='bucketlist'>
      <AddNewBucketListItem />
        {this.props.bucketList.map(bucketListItem => {
          return <BucketListItem 
            key={bucketListItem.id} 
            id={bucketListItem.id} 
            title={bucketListItem.title} />}
          )}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCountry: state.selectedCountry,
    bucketList: state.bucketList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketList)

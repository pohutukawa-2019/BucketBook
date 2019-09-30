import React, { Component } from 'react'
import { connect } from 'react-redux'

import BucketListItem from './BucketListItem'
import AddNewBucketListItem from './AddNewBucketListItem'

import { deleteBucketListItem } from '../actions/bucketListItems'



class BucketList extends Component { 
  removeHandler = (id, selectedCountry) => {
    this.props.deleteBucketListItem(id, selectedCountry) 
  }

 render() {
    return (
      <div className='bucketlist'>
        <AddNewBucketListItem />
        <div style={{
          backgroundColor: 'white',
          position: 'relative',
          width: '20vw',
          height: '5vh',
          top: '5vh',
          left: '2vw'
        }} className='bucketlist-item-container'>
          {this.props.bucketList.map(bucketListItem => {
            return <BucketListItem 
              key={bucketListItem.id} 
              id={bucketListItem.id} 
              title={bucketListItem.title}
              countryName={bucketListItem.name}
              removeHandler={this.removeHandler}
              />}
            )}
        </div>
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
    deleteBucketListItem: (id, selectedCountry) => dispatch(deleteBucketListItem(id, selectedCountry))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BucketList)

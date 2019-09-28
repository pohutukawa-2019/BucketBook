import React from 'react'

import BucketListItem from './BucketListItem'

const BucketList = (props) => {
  return(
    <div className='bucketlist'>
      {/* {props.bucketListItems.map(bucketListItem => <BucketListItem key={bucketListItem.id} bucketListItem={bucketListItem}/>)} */}
      <BucketListItem />
      <BucketListItem />
      <BucketListItem />
    </div>
  )
}

export default BucketList
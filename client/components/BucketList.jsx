import React from 'react'

import BucketListItem from './BucketListItem'
import AddNewBucketListItem from './AddNewBucketListItem'

const BucketList = (props) => {
  return(
    <div className='bucketlist'>
      {/* {props.bucketListItems.map(bucketListItem => <BucketListItem key={bucketListItem.id} bucketListItem={bucketListItem}/>)} */}
      <AddNewBucketListItem />
      <BucketListItem />
      <BucketListItem />
      <BucketListItem />
    </div>
  )
}

export default BucketList
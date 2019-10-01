import { combineReducers } from 'redux'

import selectedCountry from './country'
import bucketList from './bucketListItems'
import background from './background'

export default combineReducers({
  selectedCountry,
  bucketList,
  background
})

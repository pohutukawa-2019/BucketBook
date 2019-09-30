import { combineReducers } from 'redux'

import selectedCountry from './country'
import bucketList from './bucketListItems'

export default combineReducers({
  selectedCountry,
  bucketList  
})

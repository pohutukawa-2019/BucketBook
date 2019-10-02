import { combineReducers } from 'redux'

import selectedCountry from './country'
import bucketList from './bucketListItems'
import background from './background'
import waiting from './waiting'

export default combineReducers({
  selectedCountry,
  bucketList,
  background,
  waiting
})

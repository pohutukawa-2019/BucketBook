import React, { Component } from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'

import { addBucketListItem } from '../actions/bucketListItems'

class AddNewBucketListItem extends Component {
  state = {
    title: '',
    // dateCreated: '', //stretch feature to add.
    taskComplete: false
  }

  handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value})
  }

  handleClick = () => {
      this.props.addBucketListItem({
          title: this.state.title,
          countryId: this.props.selectedCountry.id,
          countryName: this.props.selectedCountry.name
      })
}
    
  render () {
    return (
      <div>
        <GridForm>
          <ColOne>To do:</ColOne>
          <ColTwo name='title'
            placeholder='Enter it here'
            value={this.state.title}
            onChange={this.handleChange}/>

          <Button type='button' onClick={this.handleClick}>Add item</Button>
        </GridForm>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
    return {
      selectedCountry: state.selectedCountry
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBucketListItem: (bucketListItem) => dispatch(addBucketListItem(bucketListItem))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewBucketListItem)

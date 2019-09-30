import React, { Component } from 'react'
import { GridForm, ColOne, ColThree, Button } from './Styled'
import { connect } from 'react-redux'

import { addBucketListItem } from '../actions/bucketListItems'
import { blockStatement } from '@babel/types';

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
        <GridForm style={{
          position: 'relative',
          left: '2vw',
          top: '2vh',
          display: 'inline-block',
          width: '60vw'
          }}>
          <ColThree name='title'
            placeholder='Enter it here'
            value={this.state.title}
            onChange={this.handleChange}/>


          <Button style={{
            position: 'relative',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            width: '3vw',
            height: '3vw',
            borderStyle: 'none',
            display: 'inline-block',
            top: '1vh',
            color: 'orange',
            fontSize: '3vw',
            cursor: 'pointer'
          }} type='button' onClick={this.handleClick}>+</Button>
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

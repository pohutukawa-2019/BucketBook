import React, { Component } from 'react'
import { GridForm, ColOne, ColThree, Button } from './Styled'
import { connect } from 'react-redux'

import { addBucketListItem } from '../actions/bucketListItems'
import { blockStatement } from '@babel/types'

class AddNewBucketListItem extends Component {
  state = {
    title: '',
    // dateCreated: '', //stretch feature to add.
    taskComplete: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
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
          left: '0vw',
          top: '2vh',
          display: 'inline-block',
          width: '80vw'
        }}>
          <div className='input-container'>
            <ColThree name='title'
              placeholder='Enter it here'
              value={this.state.title}
              onChange={this.handleChange}/>
            <Button style={{
              position: 'relative',
              backgroundColor: 'orange',
              width: '8vw',
              height: '2.5vw',
              borderStyle: 'none',
              display: 'inline-block',
              top: '1vh',
              color: 'white',
              fontSize: '1vw',
              cursor: 'pointer',
              fontWeight: 'regular',
              borderRadius: '15px'
            }} type='button' onClick={this.handleClick}>Add item</Button>
          </div>

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

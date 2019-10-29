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
    this.checkSubmit()
  }

  handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      this.checkSubmit()
    }
  }

  // THIS FUNCTION ONLY CHECKS FOR '' NOT '   ', etc...
  checkSubmit = () => {
    if (this.state.title === '') {
      return
    } else {
      this.props.addBucketListItem({
        title: this.state.title,
        countryId: this.props.selectedCountry.id,
        countryName: this.props.selectedCountry.name
      })
      this.setState({
        title: ''
      })
    }
  }

  render () {
    return (
      <div>
        <form style={{
          position: 'relative',
          left: '0vw',
          top: '2vh',
          display: 'inline-block',
          width: '80vw',
          // width: '80%',
          display: 'grid',
          gridGap: '10px',
          gridTemplateColumns: 'auto 1fr',
          backgroundColor: 'white',
        }} onKeyDown={this.handleEnter}>
          <div className='input-container'>
            <ColThree className='inputPlaceholderColor' name='title'
              placeholder='Enter it here'
              value={this.state.title} required
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
              borderRadius: '10px'
            }} type='button' onClick={this.handleClick}>Add item</Button>
          </div>

        </form>

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

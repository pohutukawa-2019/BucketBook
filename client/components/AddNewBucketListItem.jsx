import React, { Component } from 'react'
import { GridForm, ColOne, ColTwo, Button } from './Styled'
import { connect } from 'react-redux'


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
      addNewBuckListItem({
          title: this.state.title
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

function mapStateToProps (state) {
    return {
        form: {
          title: ''
        }
    }
}

export default connect(mapStateToProps)(AddNewBucketListItem)

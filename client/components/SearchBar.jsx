import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from 'react-search'
class Searchbar extends Component {

  state= {
    repos: [{id: 0, value: 'Happfy'}, {id: 1, value: 'Sad'},{id: 3, value: 'Happrety'}, {id: 4, value: 'Sad'}, {id: 5, value: 'Happety'}, {id: 1, value: 'Sad'}, {id: 0, value: 'Hapgpy'}, {id: 1, value: 'Sad'}, {id: 0, value: 'Happerty'}, {id: 1, value: 'Sad'}, {id: 0, value: 'Happeyy'}, {id: 1, value: 'Sad'}, {id: 0, value: 'Hapgfpy'}, {id: 1, value: 'Sad'}],
    selectedCountry: []

    // {id: 0, value: 'Happy'}
  }

   handleItemsChange(country) {
     console.log(country)
    this.setState({selectedCountry: country})
   }

   render() {
    
     return (
       <div>
           <h1>Searchbar</h1>
          <Search items={this.state.repos}
                 placeholder='Pick your country'
                 maxSelected={1}
                 multiple={false}
                 onItemsChanged={this.handleItemsChange.bind(this)} />
       </div>
     )
   }
 }
export default Searchbar

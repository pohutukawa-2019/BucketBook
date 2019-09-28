import React, { Component } from 'react'
import { connect } from 'react-redux'
import Search from 'react-search'
class Searchbar extends Component {
   handleItemsChange(items) {
     console.log(items)
   }
   render (props) {
    
     return (
       <div>
           <h1>Searchbar</h1>
         {/* <Search items={items} /> */}
          <Search items={this.props.countries}
                 placeholder='Pick your country'
                 maxSelected={1}
                 multiple={false}
                 onItemsChanged={this.handleItemsChange.bind(this)} />
       </div>
     )
   }
 }
export default Searchbar
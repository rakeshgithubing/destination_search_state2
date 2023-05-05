// Write your code here

import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchValue: '',
  }

  onChangeValue = event => {
    this.setState({
      searchValue: event.target.value,
    })
  }

  render() {
    const {destinationsList} = this.props
    const {searchValue} = this.state

    const filteredData = destinationsList.filter(each =>
      each.name.toLowerCase().includes(searchValue.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="bg-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-container">
            <input
              type="search"
              className="search-styling"
              placeholder="Search"
              onChange={this.onChangeValue}
              value={searchValue}
            />
            <div className="icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
                alt="search icon"
                className="icon-styling"
              />
            </div>
          </div>
          <ul className="destination-item-container">
            {filteredData.map(eachItem => (
              <DestinationItem Key={eachItem.id} item={eachItem} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch

import React, { Component } from 'react'
import Item from '../Item/Item'
import './ShowcaseItems.scss'

export class ShowcaseItems extends Component {
  state = {
    data: [],
    loading: true,
  }

  componentDidMount() {
    this.setState({ data: this.props.data, loading: false })
  }

  render() {
    const { loading, data } = this.state
    return (
      <div className='showcase container'>
        <div className='row'>
          <small style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
            Results found: {this.props.resultsFound}
          </small>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            data.map((item) => (
              <Item
                className='showcase__item'
                data={item.data[0]}
                href={item.href}
                links={item.links[0]}
              />
            ))
          )}
        </div>
      </div>
    )
  }
}

export default ShowcaseItems

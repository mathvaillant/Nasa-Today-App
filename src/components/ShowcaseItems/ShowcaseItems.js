import React, { useEffect, useState } from 'react'
import Item from '../Item/Item'
import Loading from '../Spinner/Spinner'
import './ShowcaseItems.scss'

const ShowcaseItems = ({ data, resultsFound }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [data, resultsFound])

  return (
    <div className='showcase container'>
      <div className='row'>
        <small style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>
          Results found: {resultsFound}
        </small>
        {loading ? (
          <Loading />
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

export default ShowcaseItems

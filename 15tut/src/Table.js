import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div>
        <table>
            <tbody>
                {items.map((item)=> (
                    <Row key={item.key} item={item} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table
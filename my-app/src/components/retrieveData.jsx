import React from 'react'

const RetrieveData = ({alldata}) => {
  return (
    <div>
         {
        alldata.map(el => (
          <h2>{el}</h2>
        ))
      }
    </div>

  )
}

export default RetrieveData
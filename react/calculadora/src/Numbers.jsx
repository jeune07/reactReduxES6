import React from 'react'
import Button from './Button'

const Numbers = ({onClickNumbers}) => {
    const num =["1","2","3","4","5","6","7","8","9","0"]   
  return (
    <div  className="numbers">
    {num.map((i) => (
      <Button key={i} text={i} handlerClick={onClickNumbers} />
    ))}
  </div>
  )
}

export default Numbers
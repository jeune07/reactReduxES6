import PropTypes from "prop-types"
import React from 'react'
import Button from './Button'

const Functions = ({onCOntententClear,onDelete}) => {
  return (
    <div>
        <Button type ="long-text" text="clr" handlerClick={onCOntententClear}/>
        <Button text="del" handlerClick={onDelete} />
    </div>
  )
}

Functions.propTypes={
    onCOntententClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
    

}

export default Functions
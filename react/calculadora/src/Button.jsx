import PropTypes from "prop-types"
import "./Button.css"
const Button =({type,text, handlerClick})=>{

return( 
    <button
        className={type}
        onClick={()=> handlerClick(text)}
    >
    <span>{text}</span>
    </button>
) 
}

Button.propTypes={
    type :PropTypes.string,
    text:PropTypes.string.isRequired,
    handlerClick:PropTypes.func.isRequired

}
export default Button
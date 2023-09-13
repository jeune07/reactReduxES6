import PropTypes from "prop-types"
import Button from "./Button"


const MathOperations = ({onClickOperation,onCLickEqual}) => {

  return (
    <section className="math-operations"> 
        < Button text ="+" handlerClick={onClickOperation}/>
        < Button text ="-" handlerClick={onClickOperation}/>
        < Button text ="*" handlerClick={onClickOperation}/>
        < Button text ="/" handlerClick={onClickOperation}/>
        < Button text ="=" handlerClick={onCLickEqual}/>     
    </section>
   
  )
}

MathOperations.ropTypes={
    onClickOperation:PropTypes.func.isRequired,
    onCLickEqual: PropTypes.func.isRequired
}

export default MathOperations
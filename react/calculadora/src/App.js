import Button from "./Button";
import Result from "./Result";
import MathOperations from "./MathOperations";
import Functions from "./Functions";
import Numbers from "./Numbers";
import "./App.css"
import { useState } from "react";

const App=()=> {

const [result, setResult]=useState("")
  return (
    <div className="react-calculator">
      <Result value ={result} onChange={setResult}/>
          <Numbers onClickNumbers={(number)=>{
            setResult("")
            setResult(`${result}${number}`)
          }
          }
      />
      <div className="math-operations">
        <MathOperations onClickOperation={(operation)=>{
          setResult(`${result}${operation}`)
        }
        } 

        onCLickEqual ={ (equal)=>{
          setResult(eval(result).toString())
          
        }}
        />

      </div>
      <div className="functions">
        
        <Functions   onCOntententClear={(cler) =>{
       
        setResult("")
          
        } }
        onDelete ={ (del) => {
          let delString =result.substr(0,result.length-1)
          setResult(delString)
          
        }
        }
        
       />
      </div> 
        
  </div>
  );
}

export default App;

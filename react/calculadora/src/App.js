import Button from "./Button";
import Result from "./Result";
import MathOperations from "./MathOperations";
import Functions from "./Functions";
import Numbers from "./Numbers";
import "./App.css"

const App=()=> {
  const onClickOperation =()=>{
    return 0
  }
  const onCLickEqual = () =>{
    return 0
  }
  const handlerClick =(text)=>{
   console.log(text)
  }

  return (
    <div className="react-calculator">
      <Result result ={undefined}/>
          <Numbers onClickNumbers={number =>
          console.log("the opration is :", number)
        } 
        />
    
      
      <div className="math-operations">
        <MathOperations onClickOperation={operation =>
          console.log("the opration is :", operation)
        } 

        onCLickEqual ={ (equal)=>{
          console.log("Egual:",equal)
        }}
        />

      </div>
      <div className="functions">
        
        <Functions   onCOntententClear={(cler) =>
          console.log("You are cleaning :", cler)
        } 
        onDelete ={ (del) => 
          console.log("you are removing",del)
        }
        
       />
          
        

      </div> 
        
  </div>
  );
}

export default App;

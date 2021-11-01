import { Handle } from "react-flow-renderer";

export const Pipe3 = () => {
    return (
       <div className="pipe3">
           <Handle
                position = "top"
                type= "target"
                id= "p3_c"
                style={{left: "35%"}}
           />
       </div> 
    );
}
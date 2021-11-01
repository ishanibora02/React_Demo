import { Handle } from "react-flow-renderer";

export const Pipe = () => {
    return (
       <div className="pipe">
           <Handle
                position = "left"
                type= "source"
                id= "p_a"
                style={{top: "5%"}}
           />
           <Handle
                position = "right"
                type= "target"
                id= "p_b"
                style={{top: "95%"}}
           />
       </div> 
    );
}
import { Handle } from "react-flow-renderer";

export const Pipe6 = () => {
    return (
       <div className="pipe6">
           <Handle
                position = "top"
                type= "target"
                id= "p6_a"
                style={{left: "15%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "p6_b"
                style={{left: "86%"}}
           />
           <Handle
                position = "bottom"
                type= "source"
                id= "p6_c"
                style={{left: "60%"}}
           />
       </div> 
    );
}
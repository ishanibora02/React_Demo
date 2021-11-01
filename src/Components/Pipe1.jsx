import { Handle } from "react-flow-renderer";

export const Pipe1 = ({data}) => {
    return (
       <div className="pipe2">
           <Handle
                position = "top"
                type= "target"
                id= "p1_a"
                style={{left: "10%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "p1_b"
                style={{left: "30%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "p1_c"
                style={{left: "50%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "p1_d"
                style={{left: "70%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "p1_e"
                style={{left: "90%"}}
           />
           <div>
               <div>{data.text}</div>
            </div>
           
       </div> 
    );
}
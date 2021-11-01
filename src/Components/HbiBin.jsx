import { useContext } from "react";
import { Handle } from "react-flow-renderer";
import { PopupContext } from "../context/PopupProvider";

export const HbiBin = ({data}) => {
    const {setIsOpen} = useContext(PopupContext);
    return (
       <div className="machineStyle">
           <Handle
                position = "top"
                type= "target"
                id= "hb_a"
                style= {{left: "21%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "hb_b"
                style={{left: "50%"}}
           />
           <Handle
                position = "top"
                type= "target"
                id= "hb_c"
                style={{left: "81%"}}
           />
           <div className="machineText">
               <div>{data.text}</div>
            </div>
            <button className="bin_btn btn" onClick={() => setIsOpen(true)}>15.0<span> M</span></button>           
           <Handle
                position = "bottom"
                type= "source"
                id= "hb_d"
           />
       </div> 
    );
}
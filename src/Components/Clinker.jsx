import { useContext } from "react";
import { Handle } from "react-flow-renderer";
import { PopupContext } from "../context/PopupProvider";

export const Clinker = ({data}) => {
    const {setIsOpen} = useContext(PopupContext);
    return (
       <div className="hexagonMachineStyle">
           <button className="clinker_btn btn" onClick={() => setIsOpen(true)}>10.8<span> M</span></button>
           <Handle
                position = "top"
                type= "target"
                id= "hb_a"
           />
           <div className="green-light">&nbsp;</div>
           <div className="machineText">
               <div>{data.text}</div>
            </div>           
       </div> 
    );
}
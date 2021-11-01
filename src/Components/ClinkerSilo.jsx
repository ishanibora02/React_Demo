import { useContext } from "react";
import { Handle } from "react-flow-renderer";
import { PopupContext } from "../context/PopupProvider";

export const ClinkerSilo = ({data}) => {
     const {setIsOpen} = useContext(PopupContext);
    return (
       <div className="machineStyle">
           <Handle
                position = "top"
                type= "target"
                id= "cs_a"
           />
           <div className="cs_btn cs_btn-1">
               <button className="btn" onClick={() => setIsOpen(true)}>40.4<span> M</span></button>
               <span>Level 2</span>
           </div>
           <div className="btn-div cs_btn cs_btn-2">
               <button className="btn btn-2" onClick={() => setIsOpen(true)}>38.7<span> M</span></button>
               <span>Level 1</span>
           </div>
           <div className="machineText">
               <div>{data.subText}</div>
               <div>{data.text}</div>
            </div>
            <button className="cs_btn-3 btn" onClick={() => setIsOpen(true)}>77332.2</button>
            <Handle
                position = "bottom"
                type= "source"
                id= "cs_b"
                style={{left: "12.5%"}}
           />
           <Handle
                position = "bottom"
                type= "source"
                id= "cs_c"
                style={{left: "32%"}}
           />
           <Handle
                position = "bottom"
                type= "source"
                id= "cs_d"
                style={{left: "52%"}}
           />
           <Handle
                position = "bottom"
                type= "source"
                id= "cs_e"
                style={{left: "72%"}}
           />
           <Handle
                position = "bottom"
                type= "source"
                id= "cs_f"
                style={{left: "92%"}}
           />
       </div> 
    );
}
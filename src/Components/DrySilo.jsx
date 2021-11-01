import { useContext } from "react";
import { PopupContext } from "../context/PopupProvider";

export const DrySilo = ({data}) => {
     const {setIsOpen} = useContext(PopupContext);
    return (
       <div className="machineStyle">
           <button className="ds_btn-1">LS01</button>
           <button className="ds_btn-2 btn" onClick={() => setIsOpen(true)}>9.6<span> M</span></button>
           <div className="machineText">
               <div>{data.subText}</div>
               <div>{data.text}</div>
            </div>
       </div> 
    );
}
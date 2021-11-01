import { useContext } from "react";
import { Handle } from "react-flow-renderer";
import { PopupContext } from "../context/PopupProvider";

export const DryBin = ({data}) => {
    const {setIsOpen} = useContext(PopupContext);
    return (
     <div className="machineStyle">
     <Handle
          position = "top"
          type= "target"
          id= "db_a"
          style= {{left: "35%"}}
     />
      <Handle
           position = "top"
           type= "target"
           id= "db_b"
           style={{left: "75%"}}
      />
     <div className="machineText">
          <div>{data.text}</div>
     </div>
     <button className="bin_btn btn" onClick={() => setIsOpen(true)}>68.3<span> M</span></button>  
     <Handle
          position = "bottom"
          type= "source"
          id= "db_c"
          style={{left: "34%"}}
     />
  </div> 
    );
}
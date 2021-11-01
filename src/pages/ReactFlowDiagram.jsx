import ReactFlow, { Controls } from "react-flow-renderer";
import { elements } from "../Components/elements";
import { nodeTypes } from "../Components/nodes";
import "../App.css";

export function ReactFlowDiagram() {
  return (
    <div style={{ height: "200vh" }}>
      <ReactFlow
        minZoom="0"
        elements={elements}
        nodeTypes={nodeTypes}
        arrowHeadColor="#9ACD32"
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}

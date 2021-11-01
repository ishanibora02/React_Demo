import { useContext } from "react";
import "./App.css";
import { Popup } from "./Components/Popup";
import { PopupContext } from "./context/PopupProvider";
import { Login } from "./pages/Login";
// import { ReactFlowDiagram } from "./pages/ReactFlowDiagram";
import { Routes, Route } from "react-router";
import ReactFlow, { Controls } from "react-flow-renderer";
import { elements } from "./Components/elements";
import { nodeTypes } from "./Components/nodes";
import { ProfileContent } from "./Components/Layout";

function App() {
  const { isOpen, setIsOpen } = useContext(PopupContext);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profilecontent" element={<ProfileContent />} />
        <Route
          path="/diagram"
          element={
            <div style={{ height: "100vh" }}>
              <ReactFlow
                minZoom="0"
                elements={elements}
                nodeTypes={nodeTypes}
                arrowHeadColor="#9ACD32"
              >
                <Controls />
              </ReactFlow>
            </div>
          }
        />
      </Routes>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Button</b>
              <p>This shows a graph.</p>
            </>
          }
          handleClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;

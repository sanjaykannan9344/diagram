import React from "react";
import "./Diagram.css";

const Diagram = () => {
  return (
    <div className="frame">
      <div className="diagram">
        <div className="box input-unit"><button>Input Unit</button></div>
        <svg className="line">
          <line
            x1="110"
            y1="50"
            x2="220"
            y2="50"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <div className="cpu-container">
          <p>CPU</p>
          <div className="box cpu">
            <div className="box control-unit">Control Unit</div>
            <div className="box memory-unit">Memory Unit</div>
            <div className="box alu">Arithmetic Logic Unit</div>
          </div>
        </div>
        <svg className="line">
          <line
            x1="370"
            y1="50"
            x2="480"
            y2="50"
            stroke="black"
            strokeWidth="2"
          />
        </svg>
        <div className="box output-unit">
          <button>Output Unit</button>
        </div>
      </div>
    </div>
  );
};

export default Diagram;

import React from "react";
import "../assets/css/Roadmap.css";
import { roadmapText } from "./Resourse";

const Roadmap = () => {
  return (
    <div className="bg-black pb-20" id="roadmap">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-4xl text-white mb-10 relative">
          {roadmapText.headline}
        </h1>
        <div className="w-24 h-1 bg-green-500 mb-10 -mt-7"></div>
      </div>
      <ul className="roadmap">
        {roadmapText.stages.map((stage, index) => (
          <li
            key={index}
            className={`stage ${
              index % 2 === 0 ? "text-white" : "text-green-500"
            }`}
          >
            <h1
              className={`lg:text-4xl md:text-4xl text-xl ${
                index % 2 === 0 ? "text-white" : "text-green-500"
              }`}
            >
              {stage.stage}
            </h1>
            <div className="descr mt-5">
              <ul className="tasks">
                {stage.tasks.map((task, i) => (
                  <>
                      <li
                        key={i}
                        className="lg:leading-7 md:leading-7 leading-6 mt-2 relative" 
                      >
                        {task}
                        
                    <span className={`task-item ${index % 2 === 0 ? "text-white" : "text-green-500"} absolute -left-8`}></span>
                      </li>
                  </>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Roadmap;

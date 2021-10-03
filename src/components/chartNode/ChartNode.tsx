import React, { useState, useRef, useEffect, ElementType } from "react";
import { dragNodeService } from "../service/service";
import "./chartNode.css";

interface ChartNodeProps {
  datasource: any,
  NodeTemplate: ElementType,
  draggable: boolean,
  changeHierarchy: Function,
  id?: string,
}

const ChartNode = ({
  datasource,
  NodeTemplate,
  draggable,
  changeHierarchy,
}: ChartNodeProps) => {
  const node = useRef<HTMLDivElement>();

  const [allowedDrop, setAllowedDrop] = useState(false);

  const nodeClass = [
    "oc-node",
    allowedDrop ? "allowedDrop" : "",
  ]
    .filter(item => item)
    .join(" ");

  useEffect(() => {
    const subs1 = dragNodeService.getDragInfo().subscribe((draggedInfo: any) => {
      if (draggedInfo) {
        setAllowedDrop(
          !document
            .querySelector("#" + draggedInfo.draggedNodeId)
            .closest("li")
            .querySelector("#" + node.current.id)
            ? true
            : false
        );
      } else {
        setAllowedDrop(false);
      }
    });

    return () => {
      subs1.unsubscribe();
    };
  }, []);

  const filterAllowedDropNodes = (id: string) => {
    dragNodeService.sendDragInfo(id);
  };

  const dragstartHandler = (event: any) => {
    const copyDS = { ...datasource };
    delete copyDS.relationship;
    event.dataTransfer.setData("text/plain", JSON.stringify(copyDS));
    // highlight all potential drop targets
    filterAllowedDropNodes(node.current.id);
  };

  const dragoverHandler = (event: any) => {
    // prevent default to allow drop
    event.preventDefault();
  };

  const dragendHandler = () => {
    // reset background of all potential drop targets
    dragNodeService.clearDragInfo();
  };

  const dropHandler = (event: any) => {
    if (!event.currentTarget.classList.contains("allowedDrop")) {
      return;
    }
    dragNodeService.clearDragInfo();
    changeHierarchy(
      JSON.parse(event.dataTransfer.getData("text/plain")),
      event.currentTarget.id
    );
  };

  return (
    <li className="oc-hierarchy">
      <div
        ref={node}
        id={datasource.id}
        className={nodeClass}
        draggable={draggable ? "true" : undefined}
        onDragStart={dragstartHandler}
        onDragOver={dragoverHandler}
        onDragEnd={dragendHandler}
        onDrop={dropHandler}
      >
        {NodeTemplate ? (
          <NodeTemplate nodeData={datasource} />
        ) : (
          <div className="oc-employee">
            <div className="oc-employee-photo">
              <img src={datasource.image} alt={datasource.name}/>
            </div>
            <div>
              <div className="oc-employee-heading">
                {datasource.name}
              </div>
              <div className="oc-employee-content">{datasource.position}</div>

            </div>
          </div>
        )}
      </div>
      {datasource.reports && datasource.reports.length > 0 && (
        <ul>
          {datasource.reports.map((node: any) => (
            <ChartNode
              datasource={node}
              NodeTemplate={NodeTemplate}
              id={node.id}
              key={node.id}
              draggable={draggable}
              changeHierarchy={changeHierarchy}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

export default ChartNode;

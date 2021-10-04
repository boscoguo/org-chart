import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  ElementType
} from "react";
import JSONDigger from "../../utils/jsonDiggerUtils";
import ChartNode from "../chartNode/ChartNode";
import { attachRel } from "../../utils/dataAdaptor";
import "./orgChart.css";


interface ChartContainerProps {
  datasource: object,
  pan?: boolean,
  NodeTemplate: ElementType,
  draggable: boolean,
}

const ChartContainer = forwardRef(
  (
    {
      datasource,
      NodeTemplate,
      draggable,
    }: ChartContainerProps,
    ref
  ) => {
    const chart = useRef();
    const [ds, setDS] = useState(datasource);
    useEffect(() => {
      setDS(datasource);
    },[datasource]);
    const dsDigger = new JSONDigger(datasource, "id", "reports");

    const changeHierarchy = async (draggedItemData:any, dropTargetId:string) => {
      await dsDigger.removeNode(draggedItemData.id);
      await dsDigger.addReports(dropTargetId, draggedItemData);
      setDS({ ...dsDigger.ds });
    };

    return (
      <div
      className={"orgchart-container"}
      >
        <div
          ref={chart}
          className="orgchart"
        >
          <ul>
            <ChartNode
              datasource={attachRel(ds, "00")}
              NodeTemplate={NodeTemplate}
              draggable={draggable}
              changeHierarchy={changeHierarchy}
            />
          </ul>
        </div>
      </div>
    );
  }
);

export default ChartContainer;

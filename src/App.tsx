import React from "react";
import OrgChart from "./components/orgChart/OrgChart";
import data from "./data/data.json";

const App = () => {

  const ds = JSON.parse(JSON.stringify(data)).employees[0];
  
  return (
    <>
      <OrgChart datasource={ds} pan={false} draggable={true} NodeTemplate={null} />
    </>
  )
}

export default App;
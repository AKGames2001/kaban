import React from "react";
import Card from "./card";

const ColumnContent = (props) => {
  return <div style={columnContentStyle}>{cardCreator(props)}</div>;
};

const cardCreator = (e) => {
  const listItems = e.data.map((dataobj) => <Card data={dataobj} />);
  return <>{listItems}</>;
};

const columnContentStyle = {
  display: "flex",
  flexFlow: "column",
  gap: "10px",
};

export default ColumnContent;

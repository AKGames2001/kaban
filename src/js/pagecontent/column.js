import React from "react";
import ColumnHeader from "./columnheader";
import ColumnContent from "./columncontent";

const Column = (props) => {
  return (
    <div style={columnStyle}>
      <ColumnHeader
        title={props.title}
        length={props.data.length}
      ></ColumnHeader>
      <ColumnContent data={props.data}></ColumnContent>
    </div>
  );
};

const columnStyle = {
  display: "flex",
  flexFlow: "column",
  width: "25vw",
  margin: "0px 20px",
};

export default Column;

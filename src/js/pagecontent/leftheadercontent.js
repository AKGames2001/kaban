import React from "react";

const LeftHeaderContent = (props) => {
  return (
    <>
      <div style={leftContainerStyle}>
        {iconSelector(props.title)}
        {props.title}
        <span style={counterStyle}>{props.length}</span>
      </div>
    </>
  );
};

const iconSelector = (iconName) => {
  if (iconName === "Todo") {
    return (
      <i
        class="bx bx-loader-circle"
        style={{ fontSize: 20 + "px", color: "gray" }}
      ></i>
    );
  } else if (iconName === "InProgress") {
    return (
      <i
        class="bx bx-adjust"
        style={{ fontSize: 20 + "px", color: "gold" }}
      ></i>
    );
  } else if (iconName === "Done") {
    return (
      <i
        class="bx bxs-check-circle"
        style={{ fontSize: 20 + "px", color: "green" }}
      ></i>
    );
  } else if (iconName === "Canceled") {
    return (
      <i
        class="bx bxs-x-circle"
        style={{ fontSize: 20 + "px", color: "red" }}
      ></i>
    );
  } else {
    return (
      <i
        class="bx bx-error-alt"
        style={{ fontSize: 20 + "px", color: "red" }}
      ></i>
    );
  }
};

const leftContainerStyle = {
  display: "flex",
  flexFlow: "row",
  fontSize: "14px",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "center",
};

const counterStyle = {
  color: "rgb(160, 160, 160)",
};

const iconStyle = {
  fontSize: "20px",
};

export default LeftHeaderContent;

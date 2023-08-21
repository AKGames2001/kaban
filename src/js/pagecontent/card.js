import React from "react";

const Card = (props) => {
  let cardData = props.data;
  return (
    <>
      <div style={cardStyle}>
        <div style={topRowStyle}>
          <span>{cardData.id}</span>
          <div>
            <i class="bx bx-user-circle" style={profileIconStyle}></i>
            <i class="bx bxs-circle" style={profileStatusStyle}></i>
          </div>
        </div>
        <div style={midRowStyle}>{cardData.title}</div>
        <div style={btmRowStyle}>
          <span style={cardLabelStyle}>
            {priorityIconSelector(cardData.priority)}
          </span>
          <span style={cardLabelStyle}>
            <i class="bx bxs-circle" style={circleIconStyle}></i>
            {cardData.tag ? <>Feature Request</> : <></>}
          </span>
        </div>
      </div>
    </>
  );
};

const priorityIconSelector = (level) => {
  if (level === 1) {
    return <i class="bx bx-signal-1" style={priorityIconStyle}></i>;
  } else if (level === 2) {
    return <i class="bx bx-signal-2" style={priorityIconStyle}></i>;
  } else if (level === 3) {
    return <i class="bx bx-signal-3" style={priorityIconStyle}></i>;
  } else if (level === 4) {
    return <i class="bx bx-signal-4" style={priorityIconStyle}></i>;
  } else {
    return <i class="bx bx-dots-horizontal-rounded"></i>;
  }
};

const cardStyle = {
  display: "flex",
  flexFlow: "column",
  padding: "10px 5px",
  width: "100%",
  height: "100%",
  backgroundColor: "white",
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "left",
  gap: "10px",
  fontSize: "12px",
  boxShadow: "0px 0px 5px 1px #ccc",
};

const topRowStyle = {
  display: "flex",
  width: "95%",
  flexFlow: "row",
  justifyContent: "space-between",
  alignItems: "center",
  color: "rgb(160, 160, 160)",
  fontWeight: "normal",
};

const profileIconStyle = {
  fontSize: "20px",
};

const profileStatusStyle = {
  position: "relative",
  right: "10px",
  fontSize: "8px",
};

const midRowStyle = {
  display: "flex",
  width: "95%",
  alignItems: "left",
};

const btmRowStyle = {
  display: "flex",
  width: "95%",
  flexFlow: "row",
  alignItems: "left",
  gap: "5px",
};

const cardLabelStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid rgb(245, 245, 245)",
  borderRadius: "5px",
  padding: "0px 5px",
  fontWeight: "normal",
  color: "rgb(160, 160, 160)",
};

const priorityIconStyle = {
  fontSize: "24px",
  fontWeight: "bold",
};

const circleIconStyle = {
  fontSize: "12px",
  marginRight: "4px",
};

export default Card;

const RightHeaderContent = () => {
  return (
    <div style={containerStyle}>
      <i class="bx bx-plus" style={containerChildStyle}></i>
      <i class="bx bx-dots-horizontal-rounded" style={containerChildStyle}></i>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
  justifyContent: "center",
};

const containerChildStyle = {
  fontSize: "20px",
  color: "rgb(160, 160, 160)",
};

export default RightHeaderContent;

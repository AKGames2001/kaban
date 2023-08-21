import LeftHeaderContent from "./leftheadercontent";
import RightHeaderContent from "./rightheadercontent";

const ColumnHeader = (props) => {
  return (
    <div style={columnHeaderStyle}>
      <LeftHeaderContent
        title={props.title}
        length={props.length}
      ></LeftHeaderContent>
      <RightHeaderContent></RightHeaderContent>
    </div>
  );
};

const columnHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "row",
  padding: "20px 0px",
};

export default ColumnHeader;

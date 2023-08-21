import Column from "./column";

const PageContentContainer = (props) => {
  const columnGenerator = () => {
    let data = props.data();
    let columnList = [];
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        columnList.push(<Column title={key} data={value} />);
      }
    }
    return (
      <>
        {columnList.map((listItem) => (
          <>{listItem}</>
        ))}
      </>
    );
  };
  let data = props.data;
  return <div style={PageContentContainerStyle}>{columnGenerator()}</div>;
};

const PageContentContainerStyle = {
  display: "flex",
  flexFlow: "row",
  height: "100vh",
  marginLeft: "20px",
};

export default PageContentContainer;

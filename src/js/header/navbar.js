import React from "react";

const Navbar = (props) => {
  // props: filter {object}; setFilter {function}
  return (
    <>
      <div className="navbar" style={navbarStyle}>
        <div className="nav-btn" style={navBtnStyle}>
          <span>
            <i class="bx bx-slider"></i>
          </span>
          Display
          <span>
            <i class="bx bx-chevron-down"></i>
          </span>
        </div>
      </div>
    </>
  );
};

const navbarStyle = {
  display: "flex",
  backgroundColor: "white",
  width: "100%",
  height: "50px",
  alignItems: "center",
};

const navBtnStyle = {
  display: "flex",
  marginLeft: "40px",
  padding: "5px",
  border: "1px solid rgb(245, 245, 245)",
  borderRadius: "5px",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "12px",
  height: "12px",
  boxShadow: "0px 0px 5px 1px #ccc",
  gap: "5px",
};

export default Navbar;

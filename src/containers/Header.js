import React from "react";

const header = {
  height: "60px",
  paddingTop: "15px",
  position: "fixed",
  zIndex: "101",
  margin: "0",
  width: "100%",
  background: "#fff",
  fontWeight: "400",
  border: "1px solid rgba(34,36,38,.15)",
  boxShadow: "0 1px 2px 0 rgb(34 36 38 / 15%)",
  top: "0",
};

const Header = () => {
  return (
    <header style={header}>
      <h1 style={{paddingLeft : "5%", width: "3vw"}}>Cats</h1>
    </header>
  );
};

export default Header;

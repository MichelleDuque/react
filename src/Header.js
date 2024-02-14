import React from "react";

function Header(props){
    console.log(props)
    return  <h1>Welcome, {props.firstName}</h1>;
  }

export default Header;
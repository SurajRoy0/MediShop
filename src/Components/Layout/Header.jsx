import React, { useState } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>MediShop</h1>
        <HeaderCartButton onCartOpen={props.onCartOpen} />
      </header>
    </React.Fragment>
  );
};

export default Header;

/** @jsx jsx */
import { jsx } from "@emotion/react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { SearchMovie } from "@components";

import { styles } from "./Navbar.styles";

const NavBar = () => {
  return (
    <div css={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <SearchMovie />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;

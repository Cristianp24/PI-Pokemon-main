import { Link } from "react-router-dom";
import React, { Component } from "react";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

// const NavBar = () => {
//   return (
//     <div className={style.navcontainer}>
//       <Link className={style.link} to="/home">
//         Home0
//       </Link>

//       <Link className={style.link} to="/">
//         Landing
//       </Link>

//       <SearchBar />

//       <Link className={style.link} to="/create">
//         Create
//       </Link>
//     </div>
//   );
// };

// export default NavBar;



class NavBar extends Component {
  render() {
    return (
      <div className={style.navcontainer}>
        <Link className={style.link} to="/home">
          Home
        </Link>

        <Link className={style.link} to="/">
          Landing
        </Link>

        <SearchBar />

        <Link className={style.link} to="/create">
          Create
        </Link>
      </div>
    );
  }
}


export default NavBar;
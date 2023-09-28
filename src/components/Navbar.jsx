import React from 'react';
import {  Link } from "react-router-dom";
const navbar= () =>{
  return (
  <div>
    <li>
        <Link to="/">Home</Link>
    </li>
    <li>
        <Link to="/texts">Texts</Link>
    </li>
    <li>
        <Link to="/hegel">Hegel</Link>
    </li>
    <li>
        <Link to="/comp">Comp</Link>
    </li>
    <li>
        <Link to="/misc">Misc</Link>
    </li>
    <li>
        <Link to="/extra">Extra</Link>
    </li>   
  </div>
  );
}
export default navbar;
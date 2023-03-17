import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <ul>
      <li>
        <NavLink to="/" 
        style={({isActive})=>({
          color: isActive&&"red",
        })}
        >Home</NavLink>
      </li>
      <li>
        <NavLink to="/instructors"
        style={({isActive})=>({
          color: isActive&&"red",
        })}
        >Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/contact" 
        // style={({isActive})=>{isActive && {color:"red"} }}
        style={({isActive})=>({
          color: isActive&&"red",
        })}
        >Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;

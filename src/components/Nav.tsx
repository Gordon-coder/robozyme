import NavLink from "./NavLink";
import Logo from "../assets/logo.png";

function Nav(props: { active: any; goto: any }) {
  return (
    <div className="navbar sticky-top bg-body-tertiary" style={{ padding: 15 }}>
      <img
        src={Logo}
        height="50px"
        className="navbar-brand"
        onClick={() => {
          props.goto(0);
        }}
      />
      <NavLink active={props.active} goto={props.goto} />
    </div>
  );
}

export default Nav;

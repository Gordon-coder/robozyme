import { useViewport } from "react-viewport-hooks";

function NavLink(props: { active: any; goto: any }) {
  const { vw, vh } = useViewport();
  let active = props.active;

  vh

  if (vw < 700) {
    return (
      <div className="container-fluid">
        <button
          className="navbar-toggler position-absolute top-50 end-0 translate-middle"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
          onClick={() => {
            const offcanvasNav = document.getElementById("offcanvasNavbar")
            if (offcanvasNav != null) {
              offcanvasNav.className = "offcanvas offcanvas-end show"
            }
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          style={{width:250}}
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              onClick={() => {
                const offcanvasNav = document.getElementById("offcanvasNavbar")
                if (offcanvasNav != null) {
                  offcanvasNav.className = "offcanvas offcanvas-end"
                }
              }}
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <button
                  className={active === 1 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    props.goto(1);
                  }}
                >
                  About Us
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={active === 2 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    props.goto(2);
                  }}
                >
                  Our Technology
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={active === 3 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    props.goto(3);
                  }}
                >
                  Our Products
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={active === 4 ? "nav-link active" : "nav-link"}
                  onClick={() => {
                    props.goto(4);
                  }}
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <ul className="nav nav-underline">
      <li className="nav-item">
        <button
          className={active === 1 ? "nav-link active" : "nav-link"}
          onClick={() => {
            props.goto(1);
          }}
        >
          About Us
        </button>
      </li>
      <li className="nav-item">
        <button
          className={active === 2 ? "nav-link active" : "nav-link"}
          onClick={() => {
            props.goto(2);
          }}
        >
          Our Technology
        </button>
      </li>
      <li className="nav-item">
        <button
          className={active === 3 ? "nav-link active" : "nav-link"}
          onClick={() => {
            props.goto(3);
          }}
        >
          Our Products
        </button>
      </li>
      <li className="nav-item">
        <button
          className={active === 4 ? "nav-link active" : "nav-link"}
          onClick={() => {
            props.goto(4);
          }}
        >
          Contact Us
        </button>
      </li>
    </ul>
  );
}

export default NavLink;

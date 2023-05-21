import { startTransition } from "react";

function Header() {
    return (
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    Navbar
                  </a>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-success"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Header;
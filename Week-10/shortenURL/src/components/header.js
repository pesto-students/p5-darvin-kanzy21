import React from "react";

const Header = (props) => {
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{ backgroundColor: "#e3f2fd" }}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ShortURL</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
            </ul>
            <form class="d-flex" style={{ columnGap: '10px' }} role="search">
              <button class="btn btn-outline-success" type="submit">Login</button>
              <button class="btn btn-outline-success" type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
      {/* {props.page} */}
    </>
  )
}
export default Header;
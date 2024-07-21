import React from "react";
import { useAuth } from "../context/AuthProvider";

function Banner() {
  const [authUser] = useAuth();
  const userName = authUser ? authUser.fullname : "Stranger";
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome {userName}!
            </h1>
            <p className="lead">
              <b className="text-danger">Learn something new everyday!</b> Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
              neque aut, natus perspiciatis dignissimos est dolorum minus
              ratione dolorem magni!
            </p>
            <div className="d-grid gap-2 d-flex flex-column justify-content-md-start">
              <form className="d-flex flex-column" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter Email to login"
                  aria-label="Search"
                />
                <button className="btn my-2 btn-dark" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
